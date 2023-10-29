import { useState } from "react";

export function Clippy() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="absolute bottom-0 right-0 p-20 z-10 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <img
          src="/clippy.png"
          alt="clippy"
          style={{
            width: "200px",
          }}
        />
      </div>
      {open && <Cloppy close={() => setOpen(false)} />}
    </>
  );
}

function Cloppy({ close }: { close: () => void }) {
  const send = () => {
    alert(
      "It looks like you're asking a question! I'm not really sure about the answer, but I'll try my best to look confident while I make something up. "
    );
    close();
  };
  return (
    <div
      className="absolute bottom-60 right-60 px-10 py-5 z-10 cursor-pointer bg-yellow-600 border-yellow-800"
      style={{
        borderStyle: "groove",
        borderWidth: "12px",
        borderRadius: "10px",
      }}
    >
      <button
        className="absolute top-0 right-5 text-2xl"
        onClick={() => {
          close();
        }}
      >
        x
      </button>
      <p className="text-xl mb-2">How can I help you?</p>
      <input className="bg-yellow-200 border-2 border-yellow-400" />
      <br />
      <button
        className="bg-yellow-700 text-white px-3 py-1 mt-2"
        onClick={send}
      >
        Send
      </button>
    </div>
  );
}
