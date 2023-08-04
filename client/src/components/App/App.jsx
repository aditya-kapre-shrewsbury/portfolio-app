import DevOps from '../DevOps/DevOps';
import Portfolio from '../Portfolio/Portfolio';
import Programming from '../Programming/Programming';
import Other from '../Other/Other';
import './App.css';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn"
import TwitterIcon from '@mui/icons-material/Twitter';

function App() {
  return (
    <div className="page">
    <div className="flex flex-row overflow-hidden">
      <div className="bg-slate-900 h-screen min-w-[25%] fixed text-white">
          <div className="lx ut yr aat adj ajr ark">
            <nav className="flex text-white text-lg mt-10 flex-col align-middle w-full gap-5 overflow-hidden">
            <ul className="lx um yr aav m-10">
              <li className="m-5"><a href="#about">About</a></li>
                <li className="m-5">
                  <a href="#programming">Programming</a>
                  <ul className="programming-list">
                    <li><a href="#java">Java</a></li>
                    <li><a href="#springboot">Spring Boot</a></li>
                    <li><a href="#react"> React</a></li>
                    <li><a href="#javascript">JavaScript</a></li>
                  </ul>
              </li>
              <li className="m-5">
                <a href="#devops">DevOps</a>
                <ul className="programming-list">
                    <li><a href="#gradle">Gradle</a></li>
                    <li><a href="#docker">Docker</a></li>
                </ul>
              </li>
              <li className="m-5">
                <a href="#other">Other</a>
                <ul className="programming-list">
                  <li><a href="#rest">REST</a></li>
                </ul>
              </li>
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
          <div className="min-h-screen text-center">
            <Portfolio />
            <Programming />
            <DevOps />
            <Other />
          </div>
      </div>
    </div>
    </div>
  );
}

export default App;
