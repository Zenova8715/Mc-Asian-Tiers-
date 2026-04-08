// /components/PlayerCard.js
import { useState } from 'react';
import PlayerPopup from './PlayerPopup';

export default function PlayerCard({ player }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div 
        onClick={() => setShowPopup(true)} 
        style={{
          background: '#1e1e1e', 
          padding: '10px', 
          borderRadius: '10px', 
          cursor: 'pointer',
          minWidth: '100px',
          textAlign: 'center'
        }}
      >
        <h3 style={{color: '#00ffff'}}>{player.name}</h3>
        <p style={{color: '#aaa'}}>{player.rank}</p>
      </div>
      {showPopup && <PlayerPopup player={player} onClose={() => setShowPopup(false)} />}
    </>
  );
          }
