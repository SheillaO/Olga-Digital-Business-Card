const interests = [
  {
    emoji: "🎵",
    label: "Vinyl Records",
    tagline:
      "Believes music should require effort to appreciate. Built a whole marketplace to prove the point.",
  },
  {
    emoji: "💻",
    label: "Coding",
    tagline:
      "Learned JavaScript to stop Googling things. Now Googles different things.",
  },
  {
    emoji: "🌍",
    label: "Africa & Tech",
    tagline:
      "Has been saying the continent is underestimated since before it was on trend.",
  },
  {
    emoji: "🎤",
    label: "Stand-Up Comedy",
    tagline:
      "Appreciates the craft of saying something honest with a straight face. Extensive personal practice.",
  },
  {
    emoji: "🇩🇪",
    label: "German",
    tagline: "Speaks it. Yes, really. No, she doesn't fully know why either.",
  },
  {
    emoji: "📺",
    label: "Will & Grace",
    tagline:
      "Has seen every episode. Considers Jack McFarland underrated. Will debate this at length.",
  },
  {
    emoji: "🎭",
    label: "SNL",
    tagline:
      "Watches for Weekend Update. Stays for the hosts who clearly did not rehearse enough.",
  },
  {
    emoji: "🍽️",
    label: "Food",
    tagline: "Has opinions. Will share them before you ask.",
  },
  {
    emoji: "🤝",
    label: "Community",
    tagline: "Shows up. Tends to stay longer than expected.",
  },
  {
    emoji: "🪢",
    label: "Mini Braids",
    tagline:
      "Currently in a protective style. Not taking questions at this time.",
  },
];

export default function Interest() {
  return (
    <section>
      <h3>Interests</h3>
      <div className="interests-grid">
        {interests.map((item) => (
          <div key={item.label} className="interest-item">
            <span className="interest-emoji">{item.emoji}</span>
            <div className="interest-text">
              <span className="interest-label">{item.label}</span>
              <span className="interest-tagline">{item.tagline}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
