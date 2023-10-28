export function ComputerUpgradesPage() {
  return (
    <div className="container mx-auto mt-6 font-title">
      <h1 className="text-7xl font-semibold uppercase">
        In 2000, people in Bern...
      </h1>
      <h1 className="text-3xl mb-4 font-title">
        bought old computers to replace even older computers
      </h1>
      <div className="flex justify-around">
        <div>
          <span className="text-2xl">In the news:</span>

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
              <span className="uppercase underline">5.1 EDV</span> Die
              EDV-Verantwortlichen P. Thommen (Stammbetrieb) und N. Spichtig
              (Projektgruppe Gasfabrik) konnten im Berichtsjahr{" "}
              <mark>mehrere Computer (darunter ein Notebook) erwerben </mark>.
              Diese wurden einerseits für die Schaffung neuer EDV-Arbeitsplätze,
              andererseits <mark>zur Ablösung älterer Hardware</mark> (z . T.
              noch 486er- PCs) benötigt .
            </p>
          </div>
        </div>
        <div>
          People were replacing this:
          <img
            src="/pc-486.jpg"
            className="max-w-sm"
            title="https://archive.org/details/eu_BYTE-1989-09_OCR/mode/2up?view=theater"
          />
          with this:
          <img
            src="/pentium-4.jpg"
            className="max-w-sm"
            title="https://www.soundonsound.com/reviews/philip-rees-pentium-4-pc"
          />
        </div>
      </div>
    </div>
  );
}
