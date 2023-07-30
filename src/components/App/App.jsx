import DevOps from '../DevOps/DevOps';
import Portfolio from '../Portfolio/Portfolio';
import Programming from '../Programming/Programming';
import './App.css';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from '@mui/icons-material/Twitter';

function App() {
  return (
    <div className="page">
    <div className="flex flex-row overflow-hidden">
      <div className="flex-none bg-slate-900 h-screen min-w-[25%] fixed text-white">
          <div className="lx ut yr aat adj ajr ark">
            <nav className="flex text-white text-lg mt-10 flex-col align-middle w-full gap-5 overflow-hidden">
            <ul className="lx um yr aav m-10">
              <li className="m-5"><a href="#about">About</a></li>
                <li className="m-5">
                  <a href="#programming">Programming</a>
                  <ul>
                    <li><a href="#java">Java</a></li>
                  </ul>
                </li>
              <li className="m-5"><a href="#devops">DevOps</a></li>
            </ul>
        </nav>
        </div>
        
        <div className="text-white flex flex-row gap-5 w-fit mx-auto pt-7 aos-init">
          <div onClick={() => window.open("https://github.com/aditya-kapre-shrewsbury", "_blank")}>
            <GitHubIcon className="cursor-pointer hover:scale-105" />
          </div>
          <div onClick={() => window.open("https://www.linkedin.com/feed/", "_blank")}>
            <LinkedInIcon className="cursor-pointer hover:scale-105" />
            </div>
          <div onClick={() => window.open("https://twitter.com/home", "_blank")}>
            <TwitterIcon className="cursor-pointer hover:scale-105" />
          </div>
        </div>
      </div>
      <div className="pl-[25%] w-screen pa-back text-white">
          <div className="min-h-screen grid grid-cols-1 gap-7 name content-center text-center">
            <Portfolio />
            <Programming />
            <DevOps />
          </div>
      </div>
    </div>
    </div>
  );
}

export default App;
