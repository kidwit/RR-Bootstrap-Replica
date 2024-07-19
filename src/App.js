import './App.css';
import Background from './Components/Background';
import StoreListings from './Components/storeListing';
import TopBar from './Components/TopBar';

function App() {
  return (
    <div className="App">
  <TopBar/>
  <Background/>
  <StoreListings/>
    </div>
  );
}

export default App;
