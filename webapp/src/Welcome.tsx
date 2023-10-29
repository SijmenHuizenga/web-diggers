export function WelcomePage(
  { onMuseumEnter }: { onMuseumEnter: () => void }
  ) {
  return (
    <div
      className="h-full maxh-full min-w-full border-black bg-cover bg-center flex"
      style={{
        backgroundImage: "url('/basel-map-grayscale.jpg')",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="bg-white p-10 flex-shrink max-w-4xl">
        <h1 className="text-4xl font-bold pb-3">
          Explore historic digital Basel
        </h1>
        <h2 className="text-2xl pb-4">
          Life in Basel was already quite digitalised in 2000. Take the
          time machine back to when dial-up connections ruled, floppy disks
          stored our data, and Y2K was the talk of the town. Press
          ENTER when ready!
        </h2>
        <center>
          <button
            onClick={onMuseumEnter}
            className="border bg-gray-500 hover:bg-gray-600 text-white p-7 text-2xl"
          >
             🎟️ Enter Museum
          </button>
          <a
            href="https://baserow.schoolofdata.ch/form/pN2aVkAwBPcJb_ledBvLOWX7ueNDvWBCFlHLtV4gzrU"
            className="border bg-gray-100 hover:bg-gray-200 p-7 text-2xl"
          >
             🗣️ Share a memory
          </a>
        </center>
      </div>
    </div>
  );
}
