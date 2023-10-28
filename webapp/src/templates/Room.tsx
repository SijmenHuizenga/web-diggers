import { Piece } from "../apiclient/model";
import ArtObject from "../components/ArtObject";

const Room = ({ piece }: { piece: Piece }) => {
  return (
    <div className="h-full -maxh-full min-w-full border-black bg-auto bg-no-repeat bg-center" style={{backgroundImage: 'url(https://source.unsplash.com/random/1600x2000'}}>

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
