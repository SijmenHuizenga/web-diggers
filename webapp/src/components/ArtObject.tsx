import { Piece } from "../apiclient/model";

const ArtObject = ({ piece }: { piece: Piece }) => {
  return (
    <div className="grid h-screen place-items-center">
      <h2 className="title text-6xl font-bold p-4">{piece.name}</h2>
      <div className="image-container">
        {piece["type of embed"] === "IMAGE" ? (
          <img
            className="width-full z-50"
            src={piece.embed}
            alt="placeholder"
          />
        ) : (
          <iframe
            className="z-50"
            src={piece.embed}
            style={{
              width: "800px",
              height: "800px",
            }}
          />
        )}
      </div>
      <div className="description">
        <p>{piece.context}</p>
      </div>
    </div>
  );
};

export default ArtObject;
