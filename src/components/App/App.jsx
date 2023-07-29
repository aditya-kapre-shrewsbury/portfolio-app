import DevOps from '../DevOps/DevOps';
import Portfolio from '../Portfolio/Portfolio';
import Programming from '../Programming/Programming';
import './App.css';

function App() {
  return (
    <div className="page">
    <div className="flex flex-row overflow-hidden">
      <div className="flex-none bg-slate-900 h-screen min-w-[25%] fixed text-white justify-center">
          <div className="nav flex  text-white text-lg mt-10 flex-col align-middle justify-center text-center w-full gap-5 overflow-hidden">
            <Portfolio />
            <Programming />
            <DevOps />
        </div>
      </div>
      <div className="pl-[25%] w-screen back text-white">
          <div className="min-h-screen grid grid-cols-1 gap-7 name content-center text-center"></div>
      </div>
    </div>
    </div>
  );
}

export default App;
