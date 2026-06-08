export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        paddingTop: "180px",
        paddingBottom: "120px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "white",
        overflow: "hidden",
        background:
          "radial-gradient(circle at top, rgba(37,99,235,0.20) 0%, #020617 40%, #000814 100%)",
        paddingLeft: "20px",
        paddingRight: "20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            color: "#06b6d4",
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            letterSpacing: "6px",
            textTransform: "uppercase",
            marginBottom: "25px",
            fontWeight: "700",
            userSelect: "none",
          }}
        >
          Independent Game Studio
        </p>

        <h1
          style={{
            fontSize: "clamp(3.5rem, 9vw, 8rem)",
            fontWeight: "800",
            marginBottom: "30px",
            lineHeight: "0.9",
            textTransform: "uppercase",
            color: "white",
            letterSpacing: "-4px",
            fontFamily: "Arial, Helvetica, sans-serif",
            userSelect: "none",
          }}
        >
          LOOPPI
          <br />
          STUDIOS
        </h1>

        <p
          style={{
            fontSize: "clamp(1.4rem, 3vw, 2.2rem)",
            color: "#e2e8f0",
            marginBottom: "30px",
            maxWidth: "900px",
            marginLeft: "auto",
            marginRight: "auto",
            fontWeight: "500",
            letterSpacing: "-0.5px",
            userSelect: "none",
          }}
        >
          Building Worlds Beyond Reality
        </p>

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto 70px",
            color: "#94a3b8",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            lineHeight: "1.9",
            userSelect: "none",
          }}
        >
          Creating immersive digital experiences, cinematic storytelling,
          innovative gameplay systems, and unforgettable adventures for players
          around the world.
        </p>

        <div
          style={{
            display: "flex",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            href="#projects"
            style={{
              padding: "18px 42px",
              background:
                "linear-gradient(135deg, #06b6d4 0%, #2563eb 100%)",
              color: "white",
              borderRadius: "14px",
              fontSize: "1.1rem",
              fontWeight: "700",
              textDecoration: "none",
              boxShadow: "0 10px 30px rgba(37,99,235,0.25)",
            }}
          >
            Explore Studio
          </a>

          <a
            href="https://discord.gg/bpThTVNR"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "18px 42px",
              background: "rgba(255,255,255,0.04)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "14px",
              fontSize: "1.1rem",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Join Discord
          </a>
        </div>

        <div
          style={{
            marginTop: "100px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "25px",
            maxWidth: "1000px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {[
            ["2026", "Studio Founded"],
            ["Global", "Community Focus"],
            ["AAA", "Quality Standards"],
          ].map(([title, text]) => (
            <div
              key={title}
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "20px",
                padding: "30px",
                backdropFilter: "blur(10px)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
              }}
            >
              <h3
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "10px",
                  userSelect: "none",
                }}
              >
                {title}
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  userSelect: "none",
                }}
              >
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}