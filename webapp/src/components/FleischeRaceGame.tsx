import { RoomWrapper } from "../templates/Room";

export function FleischeRaceGame() {
  return (
    <RoomWrapper
      style={{
        background: "url(/snow-background.jpg)",
      }}
    >
      <div
        className="container mx-auto mt-12"
        style={{
          maxWidth: "66rem",
        }}
      >
        <h1 className="text-7xl font-semibold uppercase font-title p-3 pb-0 text-white">
          In the year 2000, the people of Switzerland...
        </h1>
        <h1 className="text-3xl mb-4 p-3 pt-0 text-white">
          were playing a game about meat...going downhill...
        </h1>
        <iframe
          src="https://www.cultimedia.ch/schweizerfleisch/skirace-d.html"
          className="w-full"
          style={{
            height: "750px",
          }}
        />
      </div>
    </RoomWrapper>
  );
}
