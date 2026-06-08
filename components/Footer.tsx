export default function Footer() {
  return (
    <footer
      style={{
        background: "#000814",
        color: "#94a3b8",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "70px 20px 30px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "40px",
          marginBottom: "50px",
        }}
      >
        {/* Brand */}
        <div>
          <h3
            style={{
              color: "white",
              fontSize: "2rem",
              marginBottom: "15px",
            }}
          >
            Looppi Studios
          </h3>

          <p
            style={{
              lineHeight: "1.8",
            }}
          >
            Building Worlds Beyond Reality through immersive game development
            and innovative player experiences.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4
            style={{
              color: "white",
              marginBottom: "20px",
            }}
          >
            Navigation
          </h4>

          <p>About</p>
          <p>Careers</p>
          <p>News</p>
          <p>Contact</p>
        </div>

        {/* Community */}
        <div>
          <h4
            style={{
              color: "white",
              marginBottom: "20px",
            }}
          >
            Community
          </h4>

          <a
            href="https://discord.gg/bpThTVNR"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "#38bdf8",
              textDecoration: "none",
            }}
          >
            Discord Community
          </a>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{
              color: "white",
              marginBottom: "20px",
            }}
          >
            Contact
          </h4>

          <p>looppi697@gmail.com</p>

          <p
            style={{
              marginTop: "10px",
            }}
          >
            Independent Game Studio
          </p>
        </div>
      </div>

      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "25px",
          textAlign: "center",
        }}
      >
        <p>© 2026 Looppi Studios. All Rights Reserved.</p>
      </div>
    </footer>
  );
}