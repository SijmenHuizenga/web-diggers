import { ReactNode } from "react";

function App() {
  return (
    <div className="h-screen max-h-screen overflow-y-hidden overflow-x-scroll flex">
      <MusicRoom />
      <VideoRoom />
      <WebsiteRoom />
    </div>
  );
}

function MusicRoom() {
  return <Room>I am a music room</Room>;
}
function VideoRoom() {
  return <Room>VideoRoom</Room>;
}
function WebsiteRoom() {
  return <Room>WebsiteRoom</Room>;
}

function Room({ children }: { children: ReactNode }) {
  return (
    <div className="h-full -maxh-full min-w-full border-black">
      <h1 className="text-3xl font-bold">{children}</h1>
    </div>
  );
}

export default App;
