export default function Contact() {
  return (
    <section
      id="contact"
      style={{
        padding: "120px 20px",
        background: "#020617",
        color: "white",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#06b6d4",
            letterSpacing: "3px",
            textTransform: "uppercase",
            marginBottom: "15px",
            fontWeight: "700",
          }}
        >
          Contact
        </p>

        <h2
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
            marginBottom: "25px",
            lineHeight: "1.1",
          }}
        >
          Let's Build Something Great
        </h2>

        <p
          style={{
            color: "#94a3b8",
            maxWidth: "800px",
            fontSize: "1.1rem",
            lineHeight: "1.8",
            marginBottom: "60px",
          }}
        >
          For collaborations, business inquiries, partnerships, community
          growth, and future opportunities, feel free to reach out to the
          Looppi Studios team.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "25px",
            marginBottom: "50px",
          }}
        >
          <div
            className="contact-card"
            style={{
              background: "#071224",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>📧 Email</h3>

            <a
              href="mailto:looppi697@gmail.com"
              style={{
                color: "#06b6d4",
                textDecoration: "none",
              }}
            >
              looppi697@gmail.com
            </a>
          </div>

          <div
            className="contact-card"
            style={{
              background: "#071224",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>💬 Discord</h3>

            <a
              href="https://discord.gg/bpThTVNR"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "#06b6d4",
                textDecoration: "none",
              }}
            >
              Join Community
            </a>
          </div>


          <div
            className="contact-card"
            style={{
              background: "#071224",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <h3 style={{ marginBottom: "15px" }}>🎮 Studio</h3>

            <p
              style={{
                color: "#cbd5e1",
              }}
            >
              Independent Game Development Studio
            </p>
          </div>
        </div>

        <div
          style={{
            textAlign: "center",
          }}
        >
          <a
            href="mailto:looppi697@gmail.com"
            style={{
              display: "inline-block",
              padding: "18px 40px",
              background: "linear-gradient(90deg,#06b6d4,#2563eb)",
              color: "white",
              textDecoration: "none",
              borderRadius: "14px",
              fontWeight: "700",
              fontSize: "1rem",
            }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}