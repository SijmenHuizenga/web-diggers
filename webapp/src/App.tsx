import { ReactNode } from "react";
import MusicRoom from './templates/MusicRoom';
import VideoRoom from './templates/VideoRoom';
import Websiteroom from './templates/WEbsiteRoom';

function App() {
  return (
    <div className="h-screen max-h-screen overflow-y-hidden overflow-x-scroll flex">
      <MusicRoom />
      <VideoRoom />
      <Websiteroom />
    </div>
  );
}

function Room({ children }: { children: ReactNode }) {
  return (
    <div className="h-full -maxh-full min-w-full border-black">
      <h1 className="text-3xl font-bold">{children}</h1>
    </div>
  );
}

export default App;
