import { RoomWrapper } from '../templates/Room';


const MusicPage = () => {
  return (
    <RoomWrapper
      style={{
        background: "url(/basel.jpg)",
        backgroundPosition: "center", /* Center the image */
        backgroundRepeat: "no-repeat", /* Do not repeat the image */
        backgroundSize: "cover", /* Resize the background image to cover the entire container */
      }}
    >
      <div
        className="container mx-auto pt-12"
        style={{
          maxWidth: "66rem",
        }}
      >
        <h1 className="text-7xl font-semibold uppercase font-title p-3 pb-0 text-white">
          Musik Hits 2000
        </h1>
        <h1 className="text-3xl mb-4 p-3 pt-0 text-white">
          Player
        </h1>
         <iframe width="420" height="315"
          src="https://www.youtube.com/embed/qsQzOtFHMWE?autoplay=1">
        </iframe>
      </div>
    </RoomWrapper>
  );
};

export default MusicPage;
