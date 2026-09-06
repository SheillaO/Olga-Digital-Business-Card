export default function Info() {
  return (
    <div className="info-container">
      <img src="/public/OLGA.jpeg" alt="Sheilla Olga Profile Image" />
      <h1 className="info-name">Sheilla Olga</h1>
      <h3 className="info-role">Technical Product Marketing Manager</h3>
      <div className="info-buttons">
        <a href="mailto:sheillaalusa@gmail.com" className="btn btn-email">
          Email
        </a>
        
        <a href="https://www.linkedin.com/in/sheillaolga/"
          target="_blank"
          rel="noreferrer"
          className="btn btn-linkedin"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
