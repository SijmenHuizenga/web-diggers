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

  const startShow = () => {
    setOnWelcomePage(false)
    document.getElementById('root').children[0].scrollTo(0,0)
  }

  useEffect(() => {
    loadData().then(setPieces);
    window.addEventListener('keydown', e => {
      if (e.key === 'Enter') { startShow() }
    })
  }, []);

  if (onWelcomePage) {
    return <WelcomePage onMuseumEnter={startShow} />;
  }

  return (
    <div
      className="h-screen max-h-screen overflow-y-hidden overflow-x-scroll flex"
      {...events}
      ref={ref}
    >
      {pieces.map((piece) => {
        return [
          <Mezzanine key={piece.name} piece={piece} />,
          <Room key={piece.id} piece={piece} />
        ];
      })}
      <SeeYou />
      {/*<Clippy />*/}
    </div>
  );
}

export default App;
