
export function SeeYou() {
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
          Thank you!
        </h1>
        <h2 className="text-2xl pb-4">
          This page was crafted during the Basel Hack 2023. Using Rust and React, we've used new technologies to bring you history to life.
          <br/>
          <br/>
          If you'd like to explore the code behind this project and join us on our journey, you can find the entire repository on <a className="font-bold" href="https://github.com/SijmenHuizenga/web-diggers">GitHub</a>
          <br/>
          <br/>
          Feel free to dive into the code, contribute, or simply share your thoughts with us. We're excited to see where this project can go, and we hope it inspires you as much as it has inspired us.
        </h2>
        <br />
        <p>Inspiered by &nbsp;
          <a className="font-bold" href="https://neal.fun/internet-artifacts/" >Neil</a>
        </p>
        <p>
          created by Web Diggers:
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
  );
}

export default SeeYou
