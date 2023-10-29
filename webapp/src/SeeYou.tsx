
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
          This page was crafted during <a href="https://baselhack.ch" target="_blank">BaselHack 2023</a>. 
          Using Rust and React, we have used new technologies to bring you history to life. 
          To explore the code behind this project and join us on our journey, check out the repository on 
          &nbsp;<a className="font-bold" href="https://github.com/SijmenHuizenga/web-diggers">GitHub</a>.
          <br/>
          <br/>
          Feel free to dive into the code, contribute, or simply share your thoughts with us. 
          We are excited to see where this project can go, and hope that Basel inspires you too!
        </h2>
        <br />
        <p>
          Motivated by: &nbsp;
          <a className="font-bold" target="_blank" href="https://neal.fun/internet-artifacts/">Neal.fun</a>  
          , <a className="font-bold" target="_blank" href="https://grabmacherjoggi.ch">Grabmacher Joggi</a>
          , <a className="font-bold" target="_blank" href="https://share.hek.ch/de/gestalten-mit-screenshots/">Gestalten mit Screenshots</a>, 
          and you!
        </p>
        <p><br />
          Created by the Web Diggers:
          <br />
          <a className="font-bold" href="https://blog.datalets.ch/author/oleg/">Oleg Lavrovsky</a>,
          &nbsp;
          <a className="font-bold" href="https://github.com/DominikStefancik">Dominik Stefancik</a>,
          &nbsp;
          <a className="font-bold" href="https://github.com/SijmenHuizenga">Sijmen Huizenga</a>,
          &nbsp;
          <a className="font-bold" href="https://benjaminsteidl.com/">Benjamin Steidl</a>
        </p>
        </div>
      </div>
    </div>
  );
}

export default SeeYou
