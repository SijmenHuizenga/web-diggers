import { Piece } from "../apiclient/model";
import ArtObject from "../components/ArtObject";

const Room = ({ piece }: { piece: Piece }) => {
  return (
    <div className="h-full -maxh-full min-w-full border-black">
      <img src="" alt="background" className="absolute left-0 top-0" />
      <ArtObject />
      <img
        className="absolute bottom-0"
        src="https://source.unsplash.com/random/1600x300"
        alt="seperator"
      />
    </div>
  );
};

export default Room;
