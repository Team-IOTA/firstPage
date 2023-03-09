import './App.css';
import Player from './Player';
import Button from './Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button/>
        

        <div className="player-container">
        <div className="player-image">
          <Player/>
        </div>
        <div className="player-text">
          <p>Summary</p>
          <button className="addcustomnotes">Add Custom Notes</button>
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
