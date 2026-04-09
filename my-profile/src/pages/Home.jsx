import profileImage from "../../ye.jpeg";

function Home() {
  return (
    <section className="page-section hero-section">
      <div className="hero-card">
        <div className="hero-content">
          <div className="hero-copy">
            <h1 className="hero-title">Welcome to Umutoni&apos;s portfolio</h1>

            <p className="hero-description">
              Hello, I&apos;m <strong>Leoncie Umutoni</strong>, a motivated
              Project Management student at Kepler College with a strong passion
              for technology, innovation, and problem-solving. I enjoy building
              useful digital experiences, learning through real projects, and
              creating work that reflects both growth and purpose.
            </p>
          </div>

          <div className="hero-visual">
            <img
              src={profileImage}
              alt="Leoncie Umutoni portrait"
              className="hero-portrait"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
