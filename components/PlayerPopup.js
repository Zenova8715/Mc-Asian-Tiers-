// /components/PlayerPopup.js
export default function PlayerPopup({ player, onClose }) {
  return (
    <div style={{
      position: 'fixed',
      top:0,
      left:0,
      width:'100vw',
      height:'100vh',
      background:'rgba(0,0,0,0.8)',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      zIndex:1000
    }}>
      <div style={{background:'#222', padding:'20px', borderRadius:'15px', minWidth:'300px'}}>
        <h2 style={{color:'#FFD700'}}>{player.name}</h2>
        <p style={{color:'#fff'}}>{player.rank}</p>
        <p style={{color:'#ccc'}}>{player.stats}</p>
        <button onClick={onClose} style={{marginTop:'10px', padding:'5px 10px'}}>Close</button>
      </div>
    </div>
  );
  }
