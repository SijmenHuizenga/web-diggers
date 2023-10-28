import { Piece } from "../apiclient/model";
import ArtObject from "../components/ArtObject";
import { Rope } from "../components/rope/Rope";

const Room = ({ piece }: { piece: Piece }) => {
  return (
    <div
      className="h-full maxh-full min-w-full border-black bg-auto bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url(/art-hall-1.png)",
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
    </div>
  );
};

export default Room;
