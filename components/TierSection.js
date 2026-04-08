// /components/TierSection.js
import PlayerCard from './PlayerCard';

export default function TierSection({ tierName, players }) {
  return (
    <div style={{marginBottom: '40px'}}>
      <h2 style={{color: '#FFD700', marginBottom: '10px'}}>{tierName}</h2>
      <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
        {players.map((player) => (
          <PlayerCard key={player.name} player={player} />
        ))}
      </div>
    </div>
  );
  }
