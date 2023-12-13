import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>GenAI Capabilities Showcase</h1>
      </header>
      <div className="Dashboard">
        {/* Tile 1 */}
        <div className="Tile">
          <img
            src="image1.jpg" // Replace with your GenAI capability image
            alt="GenAI Capability 1"
          />
          <h2>Capability 1</h2>
          <p>Description of the first GenAI capability.</p>
        </div>
        {/* Tile 2 */}
        <div className="Tile">
          <img
            src="image2.jpg" // Replace with your GenAI capability image
            alt="GenAI Capability 2"
          />
          <h2>Capability 2</h2>
          <p>Description of the second GenAI capability.</p>
        </div>
        {/* Tile 3 */}
        <div className="Tile">
          <img
            src="image3.jpg" // Replace with your GenAI capability image
            alt="GenAI Capability 3"
          />
          <h2>Capability 3</h2>
          <p>Description of the third GenAI capability.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
