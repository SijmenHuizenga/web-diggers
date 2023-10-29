import { RoomWrapper } from '../templates/Room';


const MusicPage = () => {
  return (
    <RoomWrapper
      style={{
        background: "url(/basel.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <div
        className="container mx-auto pt-12"
        style={{
          maxWidth: "66rem",
        }}
      >
        <div className="absolute top-14">
          <h1 className="text-7xl font-semibold uppercase font-title p-3 pb-0 text-white">
            Musik Hits 2000
          </h1>
        </div>
        <div className="absolute bottom-9">
          <audio controls>
            <source src="gola.mp4" type="audio/ogg" />
            <source src="gola.mp4" type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </RoomWrapper>
  );
};

export default MusicPage;
