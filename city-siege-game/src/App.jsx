import { useState } from 'react';
import './App.css';

const initialCityGrid = [
  [false, false, false],
  [false, false, false],
  [false, false, false],
];

function App() {
  // false = unconquered, true = conquered
  const [cityGrid, setCityGrid] = useState(initialCityGrid);
  // Player army position: { row, col } (row 4 = base, row 3 = wall, row 0-2 = city)
  const [armyPos, setArmyPos] = useState({ row: 3, col: 1 });

  // Render helpers
  const renderTile = (row, col) => {
    const conquered = cityGrid[row][col];
    const isArmy = armyPos.row === row && armyPos.col === col;
    return (
      <div
        key={`tile-${row}-${col}`}
        className={`tile ${conquered ? 'conquered' : 'unconquered'}${isArmy ? ' army' : ''}`}
      >
        {isArmy ? '🛡️' : conquered ? '🏰' : ''}
      </div>
    );
  };

  return (
    <div className="game-container">
      {/* Castle Row */}
      <div className="castle-row">🏯 Castle</div>
      {/* City Grid */}
      <div className="city-grid">
        {cityGrid.map((rowArr, rowIdx) => (
          <div className="city-row" key={`city-row-${rowIdx}`}> 
            {rowArr.map((_, colIdx) => renderTile(rowIdx, colIdx))}
          </div>
        ))}
      </div>
      {/* City Wall */}
      <div className={`wall-row${armyPos.row === 3 ? ' army' : ''}`}>{armyPos.row === 3 ? '🛡️' : ''} 🧱🧱🧱 (City Wall)</div>
      {/* Allied Base Row */}
      <div className={`base-row${armyPos.row === 4 ? ' army' : ''}`}>{armyPos.row === 4 ? '🛡️' : ''} 🏕️🏕️🏕️ (Allied Base)</div>
      {/* Placeholder for controls and info */}
      <div className="info-panel">
        <p>Single-player prototype. Board and army position only. Actions and turns coming next!</p>
      </div>
    </div>
  );
}

export default App;
