import { useRef } from "react";
import Xarrow from "react-xarrows";
import { RoomWrapper } from "../templates/Room";

export function ComputerUpgradesPage() {
  const pcOldTxtRef = useRef(null);

  return (
    <RoomWrapper
      style={{
        background: "url(/ioio-background.jpg)",
      }}
    >
      <div
        className="container mx-auto pt-12"
        style={{
          maxWidth: "66rem",
        }}
      >
        <h1
          className="text-7xl font-semibold uppercase font-title p-3 pb-0 text-white"
          style={{ backgroundColor: "#22094D" }}
        >
          In 2000, people in Basel...
        </h1>
        <h1
          className="text-3xl mb-4 p-3 pt-0 text-white"
          style={{ backgroundColor: "#22094D" }}
        >
          bought old computers to replace even older computers
        </h1>
        <div className="flex justify-between">
          <div>
            <div
              className="newspaper max-w-md"
              title="https://eterna.unibas.ch/bodenforschungjb/issue/view/181/30"
            >
              <h3 className="text-2xl uppercase font-newspaper">
                <span className="underline text-3xl">
                  Jahresbericht&nbsp;2000
                </span>{" "}
                Archäologische Bodenforschung des Kantons Basel-Stadt
              </h3>
              <p className="text-2xl font-newspaper">
                <span className="uppercase underline">5.1 EDV</span> [...]
                konnten im Berichtsjahr mehrere Computer (darunter ein Notebook)
                erwerben. Diese wurden einerseits für die Schaffung neuer
                EDV-Arbeitsplätze, andererseits{" "}
                <mark ref={pcOldTxtRef}>
                  zur Ablösung älterer Hardware (z . T. noch 486er- PCs)
                  benötigt.{" "}
                </mark>
              </p>
            </div>
          </div>
          <div>
            <img
              id="pc-486"
              src="/pc-486.jpg"
              className="max-w-sm"
              title="https://archive.org/details/eu_BYTE-1989-09_OCR/mode/2up?view=theater"
            />
            <br />
            <br />
            <br />
            <br />
            <img
              id="pc-pentium"
              src="/pentium-4.jpg"
              className="max-w-sm"
              title="https://www.soundonsound.com/reviews/philip-rees-pentium-4-pc"
            />
          </div>
          <Xarrow
            start={pcOldTxtRef}
            end="pc-486"
            color="#BD444E"
            strokeWidth={6}
          />

          <Xarrow
            start="pc-486"
            end="pc-pentium"
            color="#BD444E"
            strokeWidth={6}
          />
        </div>
      </div>
    </RoomWrapper>
  );
}
