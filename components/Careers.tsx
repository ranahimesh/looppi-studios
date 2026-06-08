export default function Careers() {
  return (
    <section
      id="careers"
      style={{
        padding: "120px 20px",
        background: "#03184f",
        color: "white",
        overflowX: "hidden",
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
            color: "#38bdf8",
            fontWeight: "700",
            letterSpacing: "3px",
            marginBottom: "15px",
          }}
        >
          CAREERS
        </p>

        <h2
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            marginBottom: "20px",
          }}
        >
          Join Our Journey
        </h2>

        <p
          style={{
            fontSize: "1.15rem",
            color: "#d1d5db",
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
              background: "#0b1220",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "15px" }}>🎮</div>
            <h3 style={{ marginBottom: "10px" }}>Game Developers</h3>
            <p style={{ color: "#94a3b8" }}>
              Gameplay programmers, systems developers, and technical creators.
            </p>
          </div>

          <div
            className="project-card"
            style={{
              background: "#0b1220",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "15px" }}>🎨</div>
            <h3 style={{ marginBottom: "10px" }}>Artists & Designers</h3>
            <p style={{ color: "#94a3b8" }}>
              Environment artists, character artists, UI/UX designers, and
              creative visionaries.
            </p>
          </div>

          <div
            className="project-card"
            style={{
              background: "#0b1220",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "15px" }}>🚀</div>
            <h3 style={{ marginBottom: "10px" }}>Future Opportunities</h3>
            <p style={{ color: "#94a3b8" }}>
              Follow our growth and be ready for future opportunities as the
              studio expands.
            </p>
          </div>
        </div>

        <div
          style={{
            background: "rgba(56,189,248,0.08)",
            border: "1px solid rgba(56,189,248,0.15)",
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
              color: "#cbd5e1",
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
              background: "#06b6d4",
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