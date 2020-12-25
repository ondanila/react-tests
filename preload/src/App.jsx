import logo from './logo.svg';
import './App.css';
import Panel from './Panel';
import {useState} from 'react';

function App() {
  const [popupShowed, setPopupShowed] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={() => setPopupShowed(!popupShowed)}>Открыть попап</button>
      </header>
       {popupShowed ? <Panel widgetName="panelTemplate"/> : <div/>}
    </div>
  );
}

export default App;
