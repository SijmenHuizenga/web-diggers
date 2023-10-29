export function WelcomePage({ onMuseumEnter }: { onMuseumEnter: () => void }) {
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
        <h1 className="text-6xl font-bold pb-3">
          Explore historic digital Basel
        </h1>
        <h2 className="text-2xl pb-4">
          What was the digital experience like living in Basel in 2000? Take the
          time machine back to when dial-up connections ruled, floppy disks
          stored our data, and Y2K was the talk of the town. Are you ready to
          enter?
        </h2>
        <button
          onClick={onMuseumEnter}
          className="border bg-gray-700 hover:bg-gray-800 text-white p-7 text-2xl float-right"
        >
           🎟️ Enter the Museum
        </button>
      </div>
    </div>
  );
}
