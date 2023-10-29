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
  const [text, setText] = useState("");
  const send = () => {
    setText("Clippy says: Thinking...");
    setTimeout(() => {
      setText(
        "Clippy says: It looks like you're asking a question! I'm not really sure about the answer, but I'll try my best to look confident while I make something up."
      );
    }, 2000);
  };
  return (
    <div
      className="absolute px-10 py-5 z-10 cursor-pointer bg-yellow-600 border-yellow-800"
      style={{
        borderStyle: "groove",
        borderWidth: "12px",
        borderRadius: "10px",
        width: "75%",
        height: "75%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
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
      <p className="text-xl mb-2">Clippy says: How can I help you?</p>
      <textarea className="bg-yellow-200 border-2 border-yellow-400 w-full" />
      <br />
      <button
        className="bg-yellow-700 text-white px-3 py-1 mt-2"
        onClick={send}
      >
        Send
      </button>
      <p className="text-xl p-3">{text}</p>
    </div>
  );
}
