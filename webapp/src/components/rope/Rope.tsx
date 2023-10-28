import { Fragment } from "react";
import "./Rope.css";
// Thank you https://codepen.io/stanko/pen/vYaEMKX

const POLE_WIDTH_PX = 100;
const POLE_ATTACH_POINT_Y_PX = 70;
const POLE_HEIGHT_PX = 363;

function multiplyVector(v: { x: number; y: number }, scalar: number) {
  return {
    x: v.x * scalar,
    y: v.y * scalar,
  };
}

function getVector(a: { x: number; y: number }, b: { x: number; y: number }) {
  return {
    x: b.x - a.x,
    y: b.y - a.y,
  };
}

function addVectors(a: { x: number; y: number }, b: { x: number; y: number }) {
  return {
    x: a.x + b.x,
    y: a.y + b.y,
  };
}

// ----- MATH ----- //

function getPointOnLine(
  start: { x: number; y: number },
  end: { x: number; y: number },
  ratio: number
) {
  const vector = getVector(start, end);
  const v = multiplyVector(vector, ratio);
  return {
    x: start.x + v.x,
    y: start.y + v.y,
  };
}

function getAngleBetweenThreePoints(
  a: { x: number; y: number },
  b: { x: number; y: number },
  c: { x: number; y: number }
) {
  const vectorBA = getVector(a, b);
  const vectorBC = getVector(c, b);

  const angle =
    Math.atan2(vectorBC.y, vectorBC.x) - Math.atan2(vectorBA.y, vectorBA.x);

  return angle;
}

// ----- CHAIKIN ----- //

function cut(
  start: { x: number; y: number },
  end: { x: number; y: number },
  ratio: number
) {
  const r1 = {
    x: start.x * (1 - ratio) + end.x * ratio,
    y: start.y * (1 - ratio) + end.y * ratio,
  };
  const r2 = {
    x: start.x * ratio + end.x * (1 - ratio),
    y: start.y * ratio + end.y * (1 - ratio),
  };
  return [r1, r2];
}

function chaikin(
  curve: { x: number; y: number }[],
  iterations = 1,
  closed = false,
  ratio = 0.25
) {
  if (ratio > 0.5) {
    ratio = 1 - ratio;
  }

  for (let i = 0; i < iterations; i++) {
    let refined = [];
    refined.push(curve[0]);

    for (let j = 1; j < curve.length; j++) {
      let points = cut(curve[j - 1], curve[j], ratio);
      refined = refined.concat(points);
    }

    if (closed) {
      refined.shift();
      refined = refined.concat(cut(curve[curve.length - 1], curve[0], ratio));
    } else {
      refined.push(curve[curve.length - 1]);
    }

    curve = refined;
  }
  return curve;
}

// ----- ROPE ----- //

function getPathPoints(d: string, step = 10) {
  // For potential NodeJS version
  // https://www.npmjs.com/package/svg-path-properties
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", d);

  const length = path.getTotalLength();

  const count = length / step;

  const points = [];

  for (let i = 0; i < count + 1; i++) {
    const n = i * step;
    points.push(path.getPointAtLength(n));
  }

  const vectorStart = getVector(points[1], points[0]);
  const vectorEnd = getVector(
    points[points.length - 2],
    points[points.length - 1]
  );

  return [
    // Add helper points at the start
    addVectors(points[0], vectorStart),
    ...points,
    // and end
    addVectors(points[points.length - 1], vectorEnd),
  ];
}

// Takes three points and returns two points.
// Points are located at the end of a vector which is bisector of the angle between these three points.
// The distance is "thickness" param
/*
                        • outerPoint[0]
                        /
                        /
            v1 •------• v2
                    / \
                    /   • v3
    outerPoint[1] •
*/
function getOuterPoints(
  v1: { x: number; y: number },
  v2: { x: number; y: number },
  v3: { x: number; y: number },
  thickness: number,
  angleOffset = 0
) {
  /*
            v1 •------• v2
                angle1 / \
                    /   • v3
*/
  let angle1 = getAngleBetweenThreePoints(v1, v2, v3) / 2;

  const offset = angle1 > 0 ? -1 : 1;
  // Angle between (v1, v2) vector and x axis
  /*
                v2 •--------• (v2.x + offset, v2.y)
                / angle2
                /
            v1 •
*/
  const angle2 = getAngleBetweenThreePoints(v1, v2, {
    x: v2.x + offset, // Moving point on x axis
    y: v2.y,
  });

  // Angle between the x axis and the bisector angle
  const angle = angle2 - angle1 + angleOffset;

  const r = thickness / 2;

  const point1 = {
    x: v2.x + Math.cos(angle) * r,
    y: v2.y - Math.sin(angle) * r,
  };

  const point2 = {
    x: v2.x + Math.cos(angle + Math.PI) * r,
    y: v2.y - Math.sin(angle + Math.PI) * r,
  };

  return [point1, point2];
}

function getLines(
  points: { x: number; y: number }[],
  thickness: number,
  angleOffset = 0
) {
  const normals = [];

  for (let i = 1; i < points.length - 1; i++) {
    const v1 = points[i - 1];
    const v2 = points[i];
    const v3 = points[i + 1];

    const line = getOuterPoints(v1, v2, v3, thickness, angleOffset);

    normals.push(line);
  }

  // Adding an extra line for the last segment
  normals.push(normals[normals.length - 1]);

  return normals;
}

function getSegments(
  normals: { x: number; y: number }[][],
  fixGaps: boolean = false
) {
  const segments: {
    line1: { x: number; y: number }[];
    line2: { x: number; y: number }[];
    path: { x: number; y: number }[];
    points: { x: number; y: number }[];
  }[] = [];

  for (let i = 0; i < normals.length - 2; i++) {
    const l1 = normals[i];
    const l2 = normals[i + 1];
    const l3 = normals[i + 2];
    const path = [l1[0], l1[1], l2[1], l2[0]];

    const prevSegment = segments[i - 1];

    const A = l1[0];
    const B = l1[1];
    const C = l2[0];
    const D = l2[1];
    const E = l3[0];
    /*
    F---------E
    |         |
    D---------C
    |         |
    B---------A
    */

    const ratio1 = 0.3; // Parametrize
    const ratio2 = 1 - ratio1;

    const BD033 = getPointOnLine(B, D, 0.33);
    const DC_p1 = getPointOnLine(D, C, ratio1);
    let corner1 = getPointOnLine(BD033, DC_p1, 0.5);
    // Move the point closer to the corner
    corner1 = addVectors(corner1, multiplyVector(getVector(corner1, D), 0.25));
    const DC_p2 = getPointOnLine(D, C, ratio2);
    const CE066 = getPointOnLine(C, E, 0.66);
    let corner2 = getPointOnLine(DC_p2, CE066, 0.5);
    // Move the point closer to the corner
    corner2 = addVectors(corner2, multiplyVector(getVector(corner2, C), 0.25));
    const AC066 = getPointOnLine(A, C, 0.66);
    const AB_p1 = getPointOnLine(A, B, ratio1);
    const AB_p2 = getPointOnLine(A, B, ratio2);

    const line1: { x: number; y: number }[] = [
      prevSegment ? prevSegment.line1[2] : B,
      BD033,
      corner1,
      fixGaps ? corner1 : null,
      fixGaps ? corner1 : null,
      DC_p1,
      DC_p2,
      corner2,
    ]
      .filter((p) => p)
      .map((p) => p as { x: number; y: number });

    const line2: { x: number; y: number }[] = [
      corner2,
      AC066,
      prevSegment ? prevSegment.line1[fixGaps ? 7 : 5] : null,
      prevSegment && fixGaps ? prevSegment.line1[7] : null,
      prevSegment && fixGaps ? prevSegment.line1[7] : null,
      AB_p1,
      prevSegment ? AB_p2 : null,
      prevSegment ? prevSegment.line1[2] : B,
    ]
      .filter((p) => p)
      .map((p) => p as { x: number; y: number });

    const roundedLine1 = chaikin(line1, 2, false, 0.25);
    const roundedLine2 = chaikin(line2, 2, false, 0.25);
    roundedLine1.pop();
    roundedLine2.pop();
    const points = [...roundedLine1, ...roundedLine2];

    segments.push({
      line1,
      line2,
      path,
      points,
    });
  }

  return segments;
}

function easing(x: number) {
  const c1 = 1.70158;
  const c2 = c1 * 1.525;

  return x < 0.5
    ? (Math.pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2
    : (Math.pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
}

function getDemoPath(width: number, offset: number) {
  const curve_x = 34;
  const curve_y = 65;
  const begin = {
    x: POLE_WIDTH_PX / 2 + offset,
    y: POLE_ATTACH_POINT_Y_PX,
  };
  const end = {
    x: width + offset + POLE_WIDTH_PX / 2,
    y: POLE_ATTACH_POINT_Y_PX,
  };

  return `
  m ${begin.x} ${begin.y}
  C ${curve_x + begin.x} ${curve_y + begin.y} ${end.x - curve_x} ${
    curve_y + end.y
  } ${end.x} ${end.y}`;
}

function renderRope(path: string) {
  const options = {
    step: 20,
    thickness: 35,
    angle: Math.PI * 0.25,
    colors: ["#EB1E0F"],
    fixGaps: false,
  };

  const points = getPathPoints(path, options.step);
  const normals = getLines(points, options.thickness, options.angle);
  const segments = getSegments(normals, options.fixGaps);

  const render = {
    path: 0,
    points: 0,
    normals: 0,
    polygons: 0,
    polygonsRounded: 0,
    segments: 0,
    rope: 1,
  };

  return (
    <g strokeLinecap="round" strokeLinejoin="round" fill="none" stroke="black">
      <g opacity={render.rope} className="rope">
        {segments.map((segment, i) => (
          <path
            key={"rope" + i}
            d={`M ${segment.points.map((p) => `${p.x} ${p.y}`).join(" L ")} Z`}
            style={{
              fill: options.colors[i % options.colors.length] || "none",
            }}
          />
        ))}
      </g>
      <g opacity={render.normals} className="normals">
        {normals.map((line, i) => (
          <path
            key={"normal" + i}
            d={`M ${line[0].x} ${line[0].y} L ${line[1].x} ${line[1].y}`}
          />
        ))}
      </g>
      <g opacity={render.polygons} className="polygons">
        {segments.map((segment, i) => (
          <path
            key={"poly" + i}
            d={`M ${segment.path.map((p) => `${p.x} ${p.y}`).join(" L ")} Z`}
          />
        ))}
      </g>
      <g opacity={render.polygonsRounded} className="polygons-rounded">
        {segments.map((segment, i) => (
          <path
            key={"segm" + i}
            d={`M ${chaikin(segment.path, 3, true, 0.15)
              .map((p) => `${p.x} ${p.y}`)
              .join(" L ")} Z`}
          />
        ))}
      </g>
      <g opacity={render.segments} className="segments">
        {segments.map((segment, i) => (
          <g className="segment" key={i + "seg"}>
            <path
              d={`M ${segment.line1.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
            />
            <path
              d={`M ${segment.line2.map((p) => `${p.x} ${p.y}`).join(" L ")}`}
            />
          </g>
        ))}
      </g>
      <path className="path" d={path} opacity={render.path} />
      <g opacity={render.points} className="points">
        {points.map((p, i) => (
          <circle key={"p" + i} cx={p.x} cy={p.y} r="3" />
        ))}
      </g>
    </g>
  );
}

export function Rope() {
  let parts: { width: number; offset: number }[] = [];
  let offset = 0;
  for (let widthToNextPole of [680, 650, 680, 800]) {
    parts.push({ offset: offset, width: widthToNextPole });
    offset = offset + widthToNextPole;
  }

  return (
    <svg className="demo-svg" viewBox={`0 0 ${offset} ${POLE_HEIGHT_PX}`}>
      {...parts.map(({ offset, width }, i) => (
        <Fragment key={i}>
          {renderRope(getDemoPath(width, offset))}
          <image href="/pole.png" x={offset} y="0" />
        </Fragment>
      ))}
    </svg>
  );
}
