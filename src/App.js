import iTecLogo from './itec.png'
import haufeLogo from './haufe.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <img src={iTecLogo} className="App-logo" alt="logo" />
          <img src={haufeLogo} className="App-logo" alt="logo" />
        </div>

        <p>Demo App Haufe @ iTec</p>
      </header>
    </div>
  );
}

export default App
