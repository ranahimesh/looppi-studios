export default function About() {
  return (
    <section
      id="about"
      style={{
        padding: "120px 20px",
        background:
"radial-gradient(circle at center, rgba(37,99,235,0.18) 0%, #08111F 45%, #050B14 100%)",
        color: "#ffffff",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Stars Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            radial-gradient(2px 2px at 20px 30px, #fff, transparent),
            radial-gradient(2px 2px at 200px 150px, #fff, transparent),
            radial-gradient(1px 1px at 400px 80px, #fff, transparent),
            radial-gradient(2px 2px at 700px 220px, #fff, transparent),
            radial-gradient(1px 1px at 900px 120px, #fff, transparent),
            radial-gradient(2px 2px at 1200px 180px, #fff, transparent),
            radial-gradient(1px 1px at 1500px 90px, #fff, transparent)
          `,
          backgroundRepeat: "repeat",
          backgroundSize: "1600px 800px",
          opacity: 0.9,
          pointerEvents: "none",
        }}
      />

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",

          position: "relative",
          zIndex: 2,

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
              color: "#0757f7",
              fontSize: "1rem",
              fontWeight: "800",
              letterSpacing: "2px",
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
              color: "#ebeff4",
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
              color: "#ebeff4",
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
              background: "#F5F7FA",
border: "1px solid #050d18",
              borderRadius: "18px",
              padding: "25px",
            }}
          >
            <p
              style={{
              color: "#030b15",
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
  background: "#f1f3f5",
  border: "1px solid #1b2027",
  boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
  padding: "30px",
  borderRadius: "20px",
}}
          >
            <h3 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🌍</h3>
            <p style={{ color: "#1361cd" }}>Global Community</p>
          </div>

          

          <div
            className="stat-card"
            style={{
              background: "#f1f3f5",
              padding: "30px",
              borderRadius: "20px",
              border: "1px solid #1b2027",
            }}
          >
            <h3 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>🏆</h3>
            <p style={{ color: "#1361cd" }}>Quality Driven</p>
          </div>
        </div>
      </div>
    </section>
  );
}