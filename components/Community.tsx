export default function Community() {
  return (
    <section
      id="community"
      style={{
        padding: "120px 20px",
       background: "#F5F7FA",
color: "#111111",
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
            color: "#0b72e9",
            fontWeight: "900",
            letterSpacing: "2px",
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
            color: "#303b4b",
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
              background: "#FFFFFF",
border: "1px solid #010a14",
boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
              padding: "25px",
              borderRadius: "20px",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🌍</div>
            <h3 style={{ marginBottom: "10px" }}>Global Community</h3>
            <p style={{ color: "#0a1525", }}>
              Meet players, creators, and supporters from around the world.
            </p>
          </div>

          <div
            className="stat-card"
            style={{
              background: "#fefeff",
              padding: "25px",
              border: "1px solid #010a14",
              borderRadius: "20px",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>🚀</div>
            <h3 style={{ marginBottom: "10px" }}>Early Access News</h3>
            <p style={{ color: "#0a121d" }}>
              Be among the first to hear about upcoming projects.
            </p>
          </div>

          <div
            className="stat-card"
            style={{
              background: "#f5f6f8",
              padding: "25px",
              border: "1px solid #010a14",
              borderRadius: "20px",
            }}
          >
            <div style={{ fontSize: "2rem", marginBottom: "10px" }}>💬</div>
            <h3 style={{ marginBottom: "10px" }}>Direct Interaction</h3>
            <p style={{ color: "#09111d" }}>
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
           background:
"linear-gradient(135deg,#06B6D4 0%,#60A5FA 100%)",
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