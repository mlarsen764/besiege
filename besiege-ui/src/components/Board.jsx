import React from 'react';
import Tile from './Tile';
import './Board.css';

export default function Board({ board, onTileClick }) {
  return (
    <div className="board-container">
      {/* Castle Row */}
      <div className="board-row">
        <Tile type="castle" conquered={board.castle.conquered} />
      </div>
      {/* City Grid */}
      {board.city.map((row, rowIndex) => (
        <div className="board-row" key={rowIndex}>
          {row.map((tile, colIndex) => (
            <Tile
              key={colIndex}
              type="city"
              conquered={tile.conquered}
              onClick={() => onTileClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
      {/* Wall Row */}
      <div className="board-row">
        {board.wall.map((tile, idx) => (
          <Tile key={idx} type="wall" conquered={tile.conquered} />
        ))}
      </div>
      {/* Allied Bases Row */}
      <div className="board-row">
        {board.bases.map((tile, idx) => (
          <Tile key={idx} type="base" conquered={tile.conquered} />
        ))}
      </div>
    </div>
  );
} 