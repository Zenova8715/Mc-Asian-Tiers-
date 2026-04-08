import TierSection from '../components/TierSection';

export default function Home() {
  const tiers = [
    { tierName: "LT1", players: [{name:"PlayerA", rank:"LT1", stats:"PvP: 10W-2L"}] },
    { tierName: "HT1", players: [{name:"PlayerB", rank:"HT1", stats:"PvP: 15W-1L"}] },
  ];

  return (
    <div style={{color:"white",background:"#121212",minHeight:"100vh",padding:"20px"}}>
      <h1>🔥 McAsianTiers</h1>
      {tiers.map(tier => (
        <TierSection key={tier.tierName} tierName={tier.tierName} players={tier.players} />
      ))}
    </div>
  );
  }
