import React, { useState } from 'react';
import Board from './components/Board';
import './App.css';

function getInitialBoard() {
  return {
    castle: { conquered: false },
    city: Array(3).fill(0).map(() => Array(3).fill(0).map(() => ({ conquered: false }))),
    wall: Array(3).fill(0).map(() => ({ conquered: false })),
    bases: Array(3).fill(0).map(() => ({ conquered: true })),
  };
}

function App() {
  const [board, setBoard] = useState(getInitialBoard());
  const [turn, setTurn] = useState(1);
  const [phase, setPhase] = useState('allies'); // 'allies' or 'defenders'
  const [log, setLog] = useState([]);

  const handleTileClick = (row, col) => {
    if (phase !== 'allies') return;
    setBoard(prev => {
      const newBoard = JSON.parse(JSON.stringify(prev));
      if (!newBoard.city[row][col].conquered) {
        newBoard.city[row][col].conquered = true;
        setLog(l => [`Allies conquered tile (${row + 1}, ${col + 1})`, ...l]);
      }
      return newBoard;
    });
  };

  const nextTurn = () => {
    if (phase === 'allies') {
      setPhase('defenders');
      setLog(l => ['Defender card flipped! (placeholder)', ...l]);
    } else {
      setPhase('allies');
      setTurn(t => t + 1);
      setLog(l => [`Turn ${turn + 1} begins.`, ...l]);
    }
  };

  return (
    <div className="App">
      <h1>Besiege: City Assault</h1>
      <div>Turn: {turn} | Phase: {phase.charAt(0).toUpperCase() + phase.slice(1)}</div>
      <Board board={board} onTileClick={handleTileClick} />
      <button onClick={nextTurn} style={{ marginTop: 16 }}>Next Turn</button>
      <div className="log">
        <h2>Log</h2>
        <ul>
          {log.map((entry, idx) => <li key={idx}>{entry}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default App;
