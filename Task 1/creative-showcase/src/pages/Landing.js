import { Link } from "react-router-dom";
import "./Landing.css";

function Landing() {
  const images = [];

  for (let key in localStorage) {
    try {
      const data = JSON.parse(localStorage.getItem(key));

      if (
        Array.isArray(data) &&
        typeof data[0] === "string" &&
        data[0].startsWith("data:image")
      ) {
        images.push(...data);
      }
    } catch (e) {}
  }

  const shuffledImages = images
    .sort(() => Math.random() - 0.5)
    .slice(0, 12);

  return (
    <div className="landing-wrapper">
      <div className="hero">
        <h1>Creative Showcase</h1>
        <p>
          Upload your artwork and explore digital memories shared by creators.
        </p>

        <div className="hero-buttons">
          <Link to="/login" className="btn primary">
            Login
          </Link>
          <Link to="/signup" className="btn secondary">
            Sign Up
          </Link>
        </div>
      </div>

      <div className="gallery-section">
        <h2>Community Gallery</h2>

        {shuffledImages.length === 0 ? (
          <p className="empty-text">No images uploaded yet.</p>
        ) : (
          <div className="masonry">
            {shuffledImages.map((img, i) => (
              <img key={i} src={img} alt="gallery" />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Landing;
