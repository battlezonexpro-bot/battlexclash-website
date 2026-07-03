export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg,#120022,#2b0057,#5b21b6)",
        color: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <div>
        <h1
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            marginBottom: "15px",
          }}
        >
          🎮 BattleXClash
        </h1>

        <p
          style={{
            fontSize: "22px",
            color: "#ddd",
            marginBottom: "30px",
          }}
        >
          India's Ultimate BGMI Tournament Platform
        </p>

        <a
          href="#"
          style={{
            background: "#a855f7",
            color: "#fff",
            padding: "15px 35px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
          }}
        >
          ⬇ Download APK
        </a>

        <div style={{ marginTop: "40px" }}>
          <h2>🏆 Daily Tournaments</h2>
          <p>Win Real Cash • Instant Withdraw • Fair Play</p>
        </div>
      </div>
    </main>
  );
}
