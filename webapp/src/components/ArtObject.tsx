import { Piece } from "../apiclient/model";

const DEFAULT_IMG = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Optical_Toy%2C_Phenakistiscope_Disc_with_Cats_and_Donkey%2C_ca._1830.gif/640px-Optical_Toy%2C_Phenakistiscope_Disc_with_Cats_and_Donkey%2C_ca._1830.gif';

const ArtObject = ({ piece }: { piece: Piece }) => {
  let imageurl = piece.screenshot ? 
    piece.screenshot.split(' (')[1].replace(')', '') : DEFAULT_IMG;
  return (
    <div className="grid h-screen place-items-center">
      <h2 className="title text-6xl font-bold p-4">
        {piece.name}
      </h2>
      <div className="image-container">
        <img
          className="width-full z-50"
          src={imageurl}
          alt="placeholder"
        />
      </div>
      <div className="description">
        <p>{piece.context}</p>
      </div>
    </div>
  );
};

export default ArtObject;
