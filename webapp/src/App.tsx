import { useEffect, useRef, useState } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import SeeYou from './SeeYou';
import { WelcomePage } from "./Welcome";
import { loadData } from "./apiclient/apiclient";

import { Piece } from "./apiclient/model";
import { Clippy } from "./components/Clippy";

import Room from "./templates/Room";
import Mezzanine from "./templates/Mezzanine";


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
        return [
          <Mezzanine key={piece.id} piece={piece} />,
          <Room key={piece.id} piece={piece} />
        ];
      })}
      <SeeYou />
      {/*<Clippy />*/}
    </div>
  );
}

export default App;
