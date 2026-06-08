export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 20px",
        background: "linear-gradient(180deg, #020617 0%, #030712 100%)",
        color: "white",
        overflowX: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "60px",
          alignItems: "center",
        }}
      >
        {/* Left Content */}
        <div>
          <p
            style={{
              color: "#38bdf8",
              fontSize: "1rem",
              fontWeight: "700",
              letterSpacing: "3px",
              marginBottom: "15px",
            }}
          >
            WHO WE ARE
          </p>

          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              lineHeight: "1.1",
              marginBottom: "25px",
            }}
          >
            Building The Future Of Interactive Entertainment
          </h2>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "1.15rem",
              lineHeight: "1.9",
              marginBottom: "25px",
            }}
          >
            Looppi Studios is an independent game development studio dedicated
            to creating immersive worlds, innovative gameplay systems, and
            unforgettable player experiences.
          </p>

          <p
            style={{
              color: "#cbd5e1",
              fontSize: "1.1rem",
              lineHeight: "1.9",
              marginBottom: "30px",
            }}
          >
            Our vision is to combine creativity, technology, and community-driven
            development to build games that inspire players and push interactive
            entertainment to new heights.
          </p>

          <div
            style={{
              background: "rgba(56,189,248,0.08)",
              border: "1px solid rgba(56,189,248,0.15)",
              borderRadius: "18px",
              padding: "25px",
            }}
          >
            <p
              style={{
                color: "#dbeafe",
                lineHeight: "1.8",
              }}
            >
              We are currently building the foundation for future projects,
              growing our community, and preparing the next generation of
              interactive experiences.
            </p>
          </div>
        </div>

        {/* Right Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "20px",
          }}
        >
          

          <div
            className="stat-card"
            style={{
              background: "#0b1220",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h3 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🌍</h3>
            <p style={{ color: "#cbd5e1" }}>Global Community</p>
          </div>

          

          <div
            className="stat-card"
            style={{
              background: "#0b1220",
              padding: "30px",
              borderRadius: "20px",
            }}
          >
            <h3 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🏆</h3>
            <p style={{ color: "#cbd5e1" }}>Quality Driven</p>
          </div>
        </div>
      </div>
    </section>
  );
}