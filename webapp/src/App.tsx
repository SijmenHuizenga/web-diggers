import { useEffect, useRef, useState } from "react";
import Room from "./templates/Room";
import { Piece } from "./apiclient/model";
import { loadData } from "./apiclient/apiclient";
import { ComputerUpgradesPage } from "./components/ComputerUpgrades";
import { FleischeRaceGame } from "./components/FleischeRaceGame";
import { useDraggable } from "react-use-draggable-scroll";
import { HelveticaPage } from "./components/HelveticaPage";

function App() {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const [pieces, setPieces] = useState<Piece[]>([]);
  useEffect(() => {
    loadData().then(setPieces);
  }, []);

  // if (welcome) {
  //   return welcome;
  // }

  return (
    <div
      className="h-screen max-h-screen overflow-y-hidden overflow-x-scroll flex"
      {...events}
      ref={ref}
    >
      {pieces.map((piece) => {
        if (piece.name === "Fleisch Ski Race") {
          return <FleischeRaceGame />;
        } else if (piece.name === "Helvetica") {
          return <HelveticaPage />;
        } else {
          return <Room key={piece.id} piece={piece} />;
        }
      })}
      <ComputerUpgradesPage />
    </div>
  );
}

export default App;
