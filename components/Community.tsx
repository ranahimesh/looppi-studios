export default function Community() {
  return (
    <section
      id="community"
      style={{
        padding: "120px 20px",
        background: "#071224",
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
          COMMUNITY
        </p>

        <h2
          style={{
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            marginBottom: "20px",
            fontWeight: "800",
          }}
        >
          Join The Looppi Community
        </h2>

        <p
          style={{
            color: "#94a3b8",
            fontSize: "1.15rem",
            maxWidth: "750px",
            margin: "0 auto 60px",
            lineHeight: "1.8",
          }}
        >
          Connect with developers, creators, and future players. Get early
          updates, participate in discussions, and follow the journey as
          Looppi Studios builds the next generation of gaming experiences.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
            marginBottom: "50px",
          }}
        >
          

          <div
            className="stat-card"
            style={{
              background: "#0b1220",
              padding: "25px",
              borderRadius: "20px",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🌍</div>
            <h3 style={{ marginBottom: "10px" }}>Global Community</h3>
            <p style={{ color: "#94a3b8" }}>
              Meet players, creators, and supporters from around the world.
            </p>
          </div>

          <div
            className="stat-card"
            style={{
              background: "#0b1220",
              padding: "25px",
              borderRadius: "20px",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🚀</div>
            <h3 style={{ marginBottom: "10px" }}>Early Access News</h3>
            <p style={{ color: "#94a3b8" }}>
              Be among the first to hear about upcoming projects.
            </p>
          </div>

          <div
            className="stat-card"
            style={{
              background: "#0b1220",
              padding: "25px",
              borderRadius: "20px",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>💬</div>
            <h3 style={{ marginBottom: "10px" }}>Direct Interaction</h3>
            <p style={{ color: "#94a3b8" }}>
              Engage directly with the Looppi Studios team.
            </p>
          </div>
        </div>

        <a
          href="https://discord.gg/bpThTVNR"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-btn"
          style={{
            display: "inline-block",
            padding: "18px 42px",
            background: "#5865F2",
            color: "white",
            textDecoration: "none",
            borderRadius: "14px",
            fontSize: "1.1rem",
            fontWeight: "700",
          }}
        >
          Join Discord
        </a>
      </div>
    </section>
  );
}