import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { loadData } from "./apiclient/apiclient";
import { Piece } from "./apiclient/model";
import { ComputerUpgradesPage } from "./components/ComputerUpgrades";
import { FleischeRaceGame } from "./components/FleischeRaceGame";
import { HelveticaPage } from "./components/HelveticaPage";
import MusicPage from "./components/MusicPage";
import Room from "./templates/Room";
import { WelcomePage } from "./Welcome";

function App() {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;

  const [onWelcomePage, setOnWelcomePage] = useState<boolean>(true);
  const [pieces, setPieces] = useState<Piece[]>([]);

  const { events } = useDraggable(ref, {
    isMounted: !onWelcomePage,
  });

  useEffect(() => {
    loadData().then(setPieces);
  }, []);

  if (onWelcomePage) {
    return <WelcomePage onMuseumEnter={() => setOnWelcomePage(false)} />;
  }

  return (
    <div
      className="h-screen max-h-screen overflow-y-hidden overflow-x-scroll flex"
      {...events}
      ref={ref}
    >
      {pieces.map((piece) => {
        if (piece.name === "Fleisch Ski Race") {
          return <FleischeRaceGame key={piece.id} />;
        } else if (piece.name === "Helvetica") {
          return <HelveticaPage key={piece.id} />;
        } else if (piece.name === "Sie Lügt") {
          return <MusicPage key={piece.id} />;
        } else if (piece.name === "From 486 to Pentium") {
          return <ComputerUpgradesPage key={piece.id} />;
        } else {
          return <Room key={piece.id} piece={piece} />;
        }
      })}
    </div>
  );
}

export default App;
