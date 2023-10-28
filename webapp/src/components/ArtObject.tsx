import { Piece } from "../apiclient/model";

const DEFAULT_IMG = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Optical_Toy%2C_Phenakistiscope_Disc_with_Cats_and_Donkey%2C_ca._1830.gif/640px-Optical_Toy%2C_Phenakistiscope_Disc_with_Cats_and_Donkey%2C_ca._1830.gif';

const ArtObject = ({ piece }: { piece: Piece }) => {

  // Get a screenshot or image link
  let imageurl = 
    piece["type of embed"] == 'IMAGE' ?
      piece.embed
    : piece.screenshot ? 
      piece.screenshot.split(' (')[1].replace(')', '')
        : DEFAULT_IMG;

  let embedurl = 
    piece["type of embed"] == 'IFRAME' ? 
      piece.embed : null;

  let youtubeurl =
    piece["type of embed"] == 'VIDEO'
    && piece.embed.indexOf('?v=')>1 ? 
      'https://www.youtube.com/embed/' + piece.embed.split('?v=')[1] : null;

  // TODO: MUSIC embedder for soundcloud / spotify / ...

  // Click away screenshot when embedding
  let imagehide = (embedurl || youtubeurl) ? '' : 'width-full z-50';
  let embedhide = imagehide ? 'hide' : '';

const [showResults, setShowResults] = React.useState(false)
  const showEmbed = () => {
    this.className = 'hide'
  }

  return (
    <div className="grid h-screen place-items-center">
      <h2 className="title text-6xl font-bold p-4">
        {piece.name}
      </h2>
      <div className="image-container">
        {embedhide &&
          <img 
            className="startmeup" 
            src="/playback.png" 
            title="Click to open interactively" 
            onClick={showEmbed}
          />
        }
        {imageurl &&
          <img
            className={imagehide}
            src={imageurl}
            alt="Image"
          />
        }
        {embedurl &&
          <iframe src={embedurl} className={embedhide} allowFullScreen></iframe>
        }
        {youtubeurl &&
          <iframe src={embedurl} className={embedhide} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        }
      </div>
      <div className="description">
        <p>{piece.context}</p>
      </div>
    </div>
  );
};

export default ArtObject;
