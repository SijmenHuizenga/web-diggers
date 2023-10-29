
export function SeeYou() {
  return (
    <div
      className="h-full maxh-full min-w-full border-black bg-cover bg-center flex relative"
      style={{
        backgroundImage: "url('/basel-map-grayscale.jpg')",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="bg-white p-10 flex-shrink max-w-4xl ">
        <h1 className="text-6xl font-bold pb-3">
          Thank you for digging in!
        </h1>
        <div className="wrapper ">
        <img src="./web-digger-form.png" className="absolute top-3 right-1" alt="web-diggers" style={{width: "10%", height: "auto"}}/>

        <h2 className="text-2xl pb-4">
          Feel free to explore the open source code on 
          &nbsp;<a className="font-bold" href="https://github.com/SijmenHuizenga/web-diggers">GitHub</a>,
          contribute memories using our
          &nbsp;<a className="font-bold" href="https://baserow.schoolofdata.ch/form/pN2aVkAwBPcJb_ledBvLOWX7ueNDvWBCFlHLtV4gzrU">Baserow form</a>,
          or simply share your thoughts and suggestions with us in the Issues. 
          We are excited to see where this project can go, and hope that Basel inspires you too!
        </h2>
        <br />
        <p>
          Motivated by: &nbsp;
          <a className="font-bold" target="_blank" href="https://neal.fun/internet-artifacts/">Neal.fun</a>  
          , <a className="font-bold" target="_blank" href="https://grabmacherjoggi.ch">Grabmacher Joggi</a>
          , <a className="font-bold" target="_blank" href="https://github.com/ruffle-rs/ruffle">Ruffle.rs</a>
          , <a className="font-bold" target="_blank" href="https://share.hek.ch/de/gestalten-mit-screenshots/">Gestalten mit Screenshots</a>, 
          and you!
        </p>
        <p><br />
          Crafted during <a href="https://baselhack.ch" target="_blank">BaselHack 2023</a> 
          &nbsp;(using Rust and React) by the Web Diggers:
          <br />
          <a className="font-bold" href="https://blog.datalets.ch/author/oleg/">Oleg Lavrovsky</a>,
          &nbsp;
          <a className="font-bold" href="https://github.com/DominikStefancik">Dominik Stefancik</a>,
          &nbsp;
          <a className="font-bold" href="https://github.com/SijmenHuizenga">Sijmen Huizenga</a>,
          &nbsp;
          <a className="font-bold" href="https://benjaminsteidl.com/">Benjamin Steidl</a>
        </p>
        <p className="font-monospace"><br/>PRESS ENTER TO RESTART</p>
        </div>
      </div>
    </div>
  );
}

export default SeeYou
