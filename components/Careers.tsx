export default function Careers() {
  return (
    <section
      id="careers"
      style={{
  padding: "120px 20px",
  backgroundColor: "#352a68",




  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",

  color: "#ffffff",
  overflow: "hidden",
}}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "#0d181d",
            fontWeight: "800",
            letterSpacing: "2px",
            marginBottom: "15px",
          }}
        >
          CAREERS
        </p>

        <h2
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            marginBottom: "20px",
            color: "#FFFFFF"
          }}
        >
          Join Our Journey
        </h2>

        <p
          style={{
            fontSize: "1.15rem",
            color: "#ffffff",
            maxWidth: "750px",
            margin: "0 auto 60px",
            lineHeight: "1.8",
          }}
        >
          While we do not currently have open positions, we are always excited
          to connect with talented developers, artists, designers, and creators
          who share our passion for building unforgettable gaming experiences.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
            marginBottom: "50px",
          }}
        >
          <div
            className="project-card"
           style={{

            background: "#ffffff",

              borderRadius: "20px",

              padding: "30px",

            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "15px" }}>🎮</div>
            <h3 style={{ marginBottom: "10px" }}>Game Developers</h3>
            <p style={{ color: "#160505" }}>
              Gameplay programmers, systems developers, and technical creators.
            </p>
          </div>

          <div
            className="project-card"
            style={{
            background: "#ffffff",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "15px" }}>🎨</div>
            <h3 style={{ marginBottom: "10px" }}>Artists & Designers</h3>
            <p style={{ color: "#060d18" }}>
              Environment artists, character artists, UI/UX designers, and
              creative visionaries.
            </p>
          </div>

          <div
            className="project-card"
            style={{
              background: "#ffffff",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "15px" }}>🚀</div>
            <h3 style={{ marginBottom: "10px" }}>Future Opportunities</h3>
            <p style={{ color: "#080f18" }}>
              Follow our growth and be ready for future opportunities as the
              studio expands.
            </p>
          </div>
        </div>

        <div
          style={{
           background: "#F5F7FA",
border: "1px solid #E2E8F0",
            borderRadius: "20px",
            padding: "30px",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <h3
            style={{
              marginBottom: "15px",
            }}
          >
            Interested In Working With Us?
          </h3>

          <p
            style={{
              color: "#475569",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            Even if there are no active openings, we welcome passionate
            individuals to connect with us and share their portfolios.
          </p>

          <a
            href="mailto:looppi697@gmail.com"
            className="hero-btn"
            style={{
              display: "inline-block",
              padding: "14px 30px",
              background:
"linear-gradient(135deg,#06B6D4 0%,#60A5FA 100%)",
              color: "white",
              borderRadius: "12px",
              fontWeight: "700",
            }}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}