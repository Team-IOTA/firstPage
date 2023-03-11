import './App.css';
import Player from './Player';
import Time from './Time';



function App() {
  return (
    <div className="App">
      <header className="App-header">

        <div className="player-container">
        <div className="player-image">
          <Player/>
        </div>
        <div className="player-text">
          <p>Summary</p>
          <button onclick='addNotes()' className="addcustomnotes">Add Custom Notes</button>
        </div>
        <br/>
        
        <div className="timestamp">
          <div className="timestamp-slide">
            
          </div>
          <div className="timestamp-slide">
            
          </div>
          <div className="timestamp-slide">
            
          </div>
          <div className="timestamp-slide">
            
          </div>
          <div className="timestamp-slide">
            
          </div>
          <div className="timestamp-slide">
            
          </div>
          <div className="timestamp-slide">
            
          </div>
        </div>
        <br/>
        
      </div>
      <Time/>
      </header>
    </div>
  );
}

export default App;
