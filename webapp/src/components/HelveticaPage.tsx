import { RoomWrapper } from "../templates/Room";

export function HelveticaPage() {
  return (
    <RoomWrapper
      style={{
        background: "white",
        fontFamily: "'Helvetica'",
      }}
    >
      <div
        className="container mx-auto pt-12"
        style={{
          maxWidth: "66rem",
        }}
      >
        <h1 className="text-7xl font-semibold uppercase p-3 pb-0">Helvetica</h1>
        <h1 className="text-3xl mb-4 p-3 pt-0">Helvetica todo todo todo</h1>
      </div>
    </RoomWrapper>
  );
}
