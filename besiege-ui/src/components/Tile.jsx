import React from 'react';
import './Tile.css';

export default function Tile({ type, conquered, onClick }) {
  return (
    <div className={`tile ${type} ${conquered ? 'conquered' : 'unconquered'}`} onClick={onClick}>
      <span>{type === 'city' ? (conquered ? '🏰' : '⬜') : type === 'castle' ? '🏯' : type === 'wall' ? '🧱' : type === 'base' ? '⚑' : ''}</span>
      <div className="tile-label">{type.charAt(0).toUpperCase() + type.slice(1)}</div>
    </div>
  );
} 