export default function Footer() {
  return (
    <footer
      style={{
        background: "#f0eaea",
       color: "#CBD5E1",
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
              color: "black",
              fontSize: "2rem",
              marginBottom: "15px",
            }}
          >
            Looppi Studios
          </h3>

          <p
            style={{
              color: "black",
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
              color: "black",
              marginBottom: "20px",
            }}
          >
            Navigation
          </h4>

          <p style={{ color: "#000000" }}>About</p>
<p style={{ color: "#000000" }}>Careers</p>
<p style={{ color: "#000000" }}>News</p>
<p style={{ color: "#000000" }}>Contact</p>
        </div>

        {/* Community */}
        <div>
          <h4
            style={{
              color: "black",
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
              color: "#080c18",
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
              color: "black",
              marginBottom: "20px",
            }}
          >
            Contact
          </h4>

          <p style={{ color: "#000000" }}>looppi697@gmail.com</p>

          <p
            style={{
              marginTop: "10px",
                 color: "black",
            }}
          >
            Independent Game Studio
          </p>
        </div>
      </div>

      <div
        style={{
          color: "black",
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