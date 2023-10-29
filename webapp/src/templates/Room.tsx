import { ReactNode, RefObject } from "react";
import { Piece } from "../apiclient/model";
import ArtObject from "../components/ArtObject";
import { Rope } from "../components/rope/Rope";

import { ComputerUpgradesPage } from "../components/ComputerUpgrades";
import { FleischeRaceGame } from "../components/FleischeRaceGame";
import { HelveticaPage } from "../components/HelveticaPage";
import MusicPage from "../components/MusicPage";

export const RoomWrapper = ({
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

const Room = ({ piece }: { piece: Piece }) => {
  return (
      (piece.name === "Fleisch Ski Race") ?
        <FleischeRaceGame key={piece.id} />
      : (piece.name === "Helvetica") ?
        <HelveticaPage key={piece.id} />
      : (piece.name === "Sie Lügt") ?
        <MusicPage key={piece.id} />
      : (piece.name === "From 486 to Pentium") ?
        <ComputerUpgradesPage key={piece.id} />
      : '' + 
    <RoomWrapper
      style={{
        backgroundImage: "url(/art-hall-1.jpg)",
      }}
    >
      <ArtObject piece={piece} />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          width: "100%",
        }}
      >
        <Rope />
      </div>
    </RoomWrapper>
  );
};

export default Room;
