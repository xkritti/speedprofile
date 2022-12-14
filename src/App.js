import "./App.css";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { Helmet } from "react-helmet";
import profile from "../src/assets/profile.jpg";
import { useState } from "react";

function App() {
  const [keywords, setKeywords] = useState([
    "Blockchain",
    "developer",
    "experience",
    "react",
    "reactjs",
    "nextjs",
    "nestjs",
    "fullstack",
    "full stack",
    "full-stack",
    "full stack developer",
    "full-stack developer",
    "fullstack developer",
    "full-stack developer",
    "krittamet petchkor",
    "krittamet",
    "petchkor",
    "xspeedx",
    "xkritti",
  ]);
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Krittamet | xspeedx</title>
        <meta name="description" content="Full stack Developer @ Finstable" />
        <meta name="keywords" content={keywords.join(",")} />
        <meta name="author" content="xspeedx,krittamet" />
      </Helmet>

      <div className=" relative min-h-screen justify-center items-center overflow-hidden py-6 sm:py-12 px-5 flex flex-col bg-[#272348] bg-cover bg-center">
        <div className="h-1/2 justify-center items-center flex-col flex">
          <div className="mx-10 px-20 sm:pb-16 gap-5 flex flex-col justify-center items-center p-5 shadow-purple-900 shadow-lg  rounded-full  bg-gradient-to-tl  from-[#00c3ff] to-[#ee0979]">
            <img
              src={profile}
              alt="krittamet profile"
              className="h-fit max-h-60 rounded-full drop-shadow-lg border-2 border-white "
            />
            <div className="flex flex-col justify-center items-center gap-2">
              <p className="text-2xl sm:text-4xl font-bold text-white font-mono">
                Krittamet Petchkor
              </p>
              <p className="text-white font-mono text-xs sm:text-lg">
                Full Stack Developer @{" "}
                <a
                  href="https://finstable.co.th/"
                  target="_blank"
                  rel="noreferrer"
                  className=" hover:underline hover:text-[#2a5298] text-center"
                >
                  FINSTABLE
                </a>
              </p>
              <p className="text-2xl sm:text-4xl font-bold text-white font-mono">
                About Me
              </p>
              <p className="text-white font-mono text-xs sm:text-lg">
                I'm a Full Stack Developer who loves to code and learn new
                things.
              </p>
              <p className="text-white font-mono text-xs sm:text-lg">
                I'm currently working at{" "}
                <a
                  href="https://finstable.co.th/"
                  target="_blank"
                  rel="noreferrer"
                  className=" hover:underline hover:text-[#2a5298] text-center"
                >
                  FINSTABLE
                </a>{" "}
                on Blockchain and DeFi projects.
              </p>
            </div>
            <div className="flex flex-row justify-center items-center gap-2 text-white">
              <a
                href="https://www.instagram.com/xkrit.ti/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#2a5298]"
              >
                <FaInstagram className="text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/krittamet"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#2a5298]"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a
                href="https://www.facebook.com/krittamet.petchkho/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#2a5298]"
              >
                <FaFacebookSquare className="text-3xl" />
              </a>
              <a
                href="https://github.com/xkritti"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#2a5298]"
              >
                <FaGithubSquare className="text-3xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
