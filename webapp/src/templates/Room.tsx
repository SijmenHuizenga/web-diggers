import { ReactNode, RefObject } from "react";
import { Piece } from "../apiclient/model";
import ArtObject from "../components/ArtObject";
import { Rope } from "../components/rope/Rope";

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
