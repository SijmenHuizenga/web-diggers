import { ReactNode, RefObject } from "react";
import { Piece } from "../apiclient/model";

import { ComputerUpgradesPage } from "../components/ComputerUpgrades";
import { FleischeRaceGame } from "../components/FleischeRaceGame";
import { HelveticaPage } from "../components/HelveticaPage";
import MusicPage from "../components/MusicPage";

export const MezzanineWrapper = ({
  children,
  style,
}: {
  children: ReactNode;
  style?: any;
}) => {
  return (
    <div
      style={style}
      className="h-full maxh-full min-w-full border-black bg-auto bg-cover bg-center overflow-hidden relative"
    >
      {children}
    </div>
  );
};

const Mezzanine = ({ piece }: { piece: Piece }) => {
  return (
     (piece.name === "Fleisch Ski Race") ?
        <FleischeRaceGame key={piece.id} />
      : (piece.name === "Helvetica") ?
        <HelveticaPage key={piece.id} />
      : (piece.name === "Sie Lügt") ?
        <MusicPage key={piece.id} />
      : (piece.name === "From 486 to Pentium") ?
        <ComputerUpgradesPage key={piece.id} />
      : ''
  );
};

export default Mezzanine;
