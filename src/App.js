import "./App.css";
import {
  FaInstagram,
  FaLinkedin,
  FaFacebookSquare,
  FaGithubSquare,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div className=" relative min-h-screen justify-center items-center overflow-hidden py-6 sm:py-12 px-5 flex flex-col bg-[#272348] bg-cover bg-center">
      <Helmet>
        <title>Krittamet | xspeedx</title>
      </Helmet>
      <div className="h-1/2 justify-center items-center flex-col flex">
        <div className="mx-10 sm:pb-16 gap-5 flex flex-col justify-center items-center p-5 shadow-purple-900 shadow-lg  rounded-full  bg-gradient-to-tl  from-[#00c3ff] to-[#ee0979]">
          <img
            src={
              "https://scontent.furt3-1.fna.fbcdn.net/v/t1.6435-9/119243054_3284855721597160_5469155022012570276_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFJ2T-RuHpixjjLJAGFeODsKF4p2StVj6QoXinZK1WPpPSBJQ8xAq2UfUW4Y0xOyXPAI5S-3hp0kjsCjwTQZR8b&_nc_ohc=8QcO3VPVA7YAX_GwagM&tn=rdVUZayVM5IqJn91&_nc_ht=scontent.furt3-1.fna&oh=00_AT-l1jdhWi48yV83DnSbetPeiJmAFFU0j1sg-S_ClFgXqA&oe=62B5C178"
            }
            className="h-fit max-h-60 rounded-full drop-shadow-lg"
          />
          <div className=" gap-2 flex flex-col text-white font-semibold text-center font-mono text-xs sm:text-lg drop-shadow-md">
            <p>Krittamet Petchkor</p>
            <p>
              Full Stack Developer @{" "}
              <a
                href="https://finstable.co.th/"
                target="_blank"
                className=" hover:underline hover:text-[#2a5298] text-center"
              >
                FINSTABLE
              </a>
            </p>
            <div className="flex felx-row justify-center items-center gap-3">
              <a href="https://www.linkedin.com/in/krittamet" target="_blank">
                <FaLinkedin className="w-8 h-8 hover:text-[#2a5298]" />
              </a>
              <a href="https://github.com/xkritti" target="_blank">
                <FaGithubSquare className="w-8 h-8 hover:text-[#2a5298]" />
              </a>
              <a href="https://www.instagram.com/xkrit.ti/" target="_blank">
                <FaInstagram className="w-8 h-8 hover:text-[#2a5298]" />
              </a>
              <a
                href="https://www.facebook.com/krittamet.petchkho/"
                target="_blank"
              >
                <FaFacebookSquare className="w-8 h-8 hover:text-[#2a5298] " />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
