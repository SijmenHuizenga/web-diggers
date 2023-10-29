import { MutableRefObject, useEffect, useRef } from "react";
import { RoomWrapper } from "../templates/Room";

class Bounds {
  public l: number;
  public t: number;
  public r: number;
  public b: number;
  public w: number;
  public h: number;

  constructor(private el: HTMLElement, private pad = 0) {
    const box = el.getBoundingClientRect() ?? {
      left: 0,
      top: 0,
      right: innerWidth,
      bottom: innerHeight,
      width: innerWidth,
      height: innerHeight,
    };

    this.l = box.left - pad;
    this.t = box.top - pad;
    this.r = box.right + pad;
    this.b = box.bottom + pad;
    this.w = box.width + pad * 2;
    this.h = box.height + pad * 2;
  }

  overlaps(bounds: Bounds) {
    return !(
      this.l > bounds.r ||
      this.r < bounds.l ||
      this.t > bounds.b ||
      this.b < bounds.t
    );
  }
  moveTo(x: number, y: number) {
    this.r = (this.l = x) + this.w;
    this.b = (this.t = y) + this.h;
    return this;
  }
  placeElement() {
    if (this.el) {
      this.el.style.top = this.t + this.pad + "px";
      this.el.style.left = this.l + this.pad + "px";
    }
    return this;
  }

  fit(
    areaToFit: Bounds,
    fitted: Bounds[],
    randUint: (range: number) => number
  ) {
    const TRIES_PER_BOX = 100;

    for (let i = 0; i < TRIES_PER_BOX; i++) {
      this.moveTo(
        randUint(areaToFit.w - this.w),
        randUint(areaToFit.h - this.h)
      );
      if (fitted.every((placed) => !placed.overlaps(this))) {
        return true;
      }
    }
    return false;
  }
}

function getFontSizeFromEl(el: HTMLElement) {
  return parseFloat(el.style.fontSize.replace("rem", ""));
}

function moveRandomly(
  parent: HTMLElement,
  doNotOverlap: HTMLElement[],
  elements: HTMLElement[]
) {
  const MIN_SIZE = 0.1;

  const randUint = (range: number) => (Math.random() * range) | 0;

  const fitted: Bounds[] = doNotOverlap.map((el) => new Bounds(el));
  const areaToFit = new Bounds(parent);

  outer: for (let el of elements) {
    while (getFontSizeFromEl(el) > MIN_SIZE) {
      const box = new Bounds(el);
      if (box.fit(areaToFit, fitted, randUint)) {
        box.placeElement();
        fitted.push(box);
        continue outer;
      } else {
        el.style.fontSize = getFontSizeFromEl(el) - 0.1 + "rem";
      }
    }
    el.style.display = "none";
  }
}

export function HelveticaPage() {
  const NR_OF_BOXES = 40;
  const MIN_FONT_SIZE_RM = 0.1;
  const MAX_FONT_SIZE_RM = 15;

  const parent = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);

  const refs = [...Array(NR_OF_BOXES).keys()].map(() =>
    useRef<HTMLDivElement>(null)
  );

  useEffect(() => {
    moveRandomly(
      parent.current!,
      [title.current!],
      refs.map((r) => r.current!)
    );
  }, []);

  return (
    <RoomWrapper
      style={{
        background: "white",
        fontFamily: "'Helvetica'",
      }}
    >
      <div ref={parent} className="h-full w-full">
        {[...Array(NR_OF_BOXES).keys()].map((_, i) => (
          <div
            key={i}
            ref={refs[i]}
            className="absolute"
            style={{
              color: "#bbb",
              top: "50%",
              left: "50%",
              fontSize:
                MIN_FONT_SIZE_RM +
                (NR_OF_BOXES - i) *
                  ((MAX_FONT_SIZE_RM - MIN_FONT_SIZE_RM) / NR_OF_BOXES) +
                "rem",
              lineHeight: 1,
              transition: "all 3s linear",
            }}
          >
            Helvetica
          </div>
        ))}
        <div
          ref={title}
          className="font-semibold p-3 pb-0"
          style={{
            fontSize: "7rem",
            position: "absolute",
            top: "50%",
            width: "100%",
            textAlign: "center",
            transform: "translate(0, -50%)",
            paddingBottom: "16px",
          }}
        >
          The font that took over the world
        </div>
      </div>
    </RoomWrapper>
  );
}
