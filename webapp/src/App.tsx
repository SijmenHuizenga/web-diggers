import { useEffect, useState } from "react";
import Room from "./templates/Room";
import { Piece } from "./apiclient/model";
import { loadData } from "./apiclient/apiclient";
// import { loadMockData } from "./apiclient/apiclient";
// import { ComputerUpgradesPage } from "./components/ComputerUpgrades";

function App() {
  const [pieces, setPieces] = useState<Piece[]>([]);
  useEffect(() => {
    loadData().then(setPieces);
  });

  // if (welcome) {
  //   return welcome;
  // }

  return (
    <div className="h-screen max-h-screen overflow-y-hidden overflow-x-scroll flex">
      {pieces.map((piece) => (
        <Room key={piece.id} piece={piece} />
      ))}
    </div>
  );
}

export default App;
