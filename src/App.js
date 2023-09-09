import logo from './logo.svg';
import './App.css';
import MainDash from "../src/component/MainDashboard/MainDash"
import Sidebar from "../src/component/sidebar/sidebar"
import Rightside from "../src/component/Rightside/Rightside"
function App() {
  return (
    <div className="App">
      <div className='AppGlass'>
      <Sidebar/>
      <MainDash/>
      <Rightside/>
      </div>
      
      
    </div>
  );
}

export default App;
