import './App.css';
import Home from './components/HomeComponent';
import SideMenu from './components/SideMenuComponent';
import RightSide from './components/RightSideMenuComponents/RightSide';

function App() {
  return (
    <div className="App d-flex flex-row">
      <SideMenu/>
      <div className='vertical-divider'></div>
      <Home/>
      {/* <div className='vertical-divider'></div>
      <RightSide/> */}
    </div>
  );
}

export default App;
