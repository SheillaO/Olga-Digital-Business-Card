export default function Info() {
  return (
    <div className="info-container">
      <img
        src="public/OLGA.jpeg"
        alt="Sheilla Olga, a professional headshot portrait, smiling warmly at the camera in a clean studio setting with soft lighting and a neutral background. She is wearing a dark blazer and has a confident, approachable expression. The wider environment is minimal and polished, suggesting a professional branding image. Text in the image includes Sheilla Olga, though the exact wording is not visible in the photograph itself."
      />
      <h1 className="info-name">Sheilla Olga</h1>
      <h3 className="info-role">Technical Product Marketing Manager</h3>
      <div className="info-buttons">
        <a href="mailto:sheillaalusa@gmail.com" className="btn btn-email">
          Email
        </a>

        <a
          href="https://www.linkedin.com/in/sheillaolga/"
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
