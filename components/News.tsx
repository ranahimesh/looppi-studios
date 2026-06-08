export default function News() {
  return (
    <section
      id="news"
      style={{
        padding: "120px 20px",
        background: "#041d5f",
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
            color: "#38bdf8",
            fontWeight: "700",
            letterSpacing: "3px",
            marginBottom: "15px",
          }}
        >
          STUDIO NEWS
        </p>

        <h2
          style={{
            fontSize: "clamp(2.5rem, 6vw, 4rem)",
            marginBottom: "20px",
          }}
        >
          Latest Updates
        </h2>

        <p
          style={{
            color: "#cbd5e1",
            fontSize: "1.15rem",
            lineHeight: "1.8",
            maxWidth: "800px",
            marginBottom: "60px",
          }}
        >
          Follow the progress of Looppi Studios as we build the foundation for
          future projects, grow our community, and prepare exciting
          announcements.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "30px",
          }}
        >
          <div
            className="project-card"
            style={{
              background: "#0b1220",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "15px",
              }}
            >
              🚀
            </div>

            <h3
              style={{
                fontSize: "1.8rem",
                marginBottom: "15px",
              }}
            >
              Studio Launch
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              Looppi Studios has officially launched and is focused on building
              future gaming experiences for players worldwide.
            </p>
          </div>

          <div
            className="project-card"
            style={{
              background: "#0b1220",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "15px",
              }}
            >
              🎮
            </div>

            <h3
              style={{
                fontSize: "1.8rem",
                marginBottom: "15px",
              }}
            >
              Development Progress
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              Our team is actively working on internal concepts, gameplay ideas,
              and technology that will support future projects.
            </p>
          </div>

          <div
            className="project-card"
            style={{
              background: "#0b1220",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "20px",
              padding: "30px",
            }}
          >
            <div
              style={{
                fontSize: "2rem",
                marginBottom: "15px",
              }}
            >
              🌍
            </div>

            <h3
              style={{
                fontSize: "1.8rem",
                marginBottom: "15px",
              }}
            >
              Community Growth
            </h3>

            <p
              style={{
                color: "#cbd5e1",
                lineHeight: "1.8",
              }}
            >
              Join our growing Discord community and stay connected for future
              announcements, reveals, and updates.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}