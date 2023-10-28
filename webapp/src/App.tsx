import { useEffect, useState } from "react";
import Room from "./templates/Room";
import { Piece } from "./apiclient/model";
import { loadData } from "./apiclient/apiclient";
import { ComputerUpgradesPage } from "./components/ComputerUpgrades";
import { FleischeRaceGame } from "./components/FleischeRaceGame";

function App() {
  const [pieces, setPieces] = useState<Piece[]>([]);
  useEffect(() => {
    loadData().then(setPieces);
  }, []);

  // if (welcome) {
  //   return welcome;
  // }

  return (
    <div className="h-screen max-h-screen overflow-y-hidden overflow-x-scroll flex">
      {pieces.map((piece) => {
        if (piece.name === "Fleisch Ski Race") {
          return <FleischeRaceGame />;
        } else {
          return <Room key={piece.id} piece={piece} />;
        }
      })}
      <ComputerUpgradesPage />
    </div>
  );
}

export default App;
