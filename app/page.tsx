"use client";
import { useState } from "react";

const casinoGames = [
  { name: "Sweet Bonanza", img: "https://cdn.pixabay.com/photo/2017/01/31/13/14/casino-2028252_1280.png" },
  { name: "Aviator", img: "https://cdn.pixabay.com/photo/2016/11/29/09/32/slot-machine-1869644_1280.jpg" },
  { name: "Lightning Roulette", img: "https://cdn.pixabay.com/photo/2017/01/31/13/14/roulette-2028248_1280.png" },
  { name: "Book of Ra", img: "https://cdn.pixabay.com/photo/2017/01/31/13/14/casino-2028251_1280.png" },
  { name: "Gates of Olympus", img: "https://cdn.pixabay.com/photo/2017/01/31/13/14/casino-2028250_1280.png" },
  { name: "Crazy Time", img: "https://cdn.pixabay.com/photo/2017/01/31/13/14/casino-2028249_1280.png" },
  { name: "Blackjack", img: "https://cdn.pixabay.com/photo/2017/01/31/13/14/casino-2028247_1280.png" },
  { name: "Mega Wheel", img: "https://cdn.pixabay.com/photo/2017/01/31/13/14/casino-2028246_1280.png" }
];

const liveMatches = [
  { sport: "Futbol", teams: "Galatasaray vs Fenerbahçe", score: "2-1", minute: "78'", odds: "1.85", img: "https://cdn.pixabay.com/photo/2016/11/29/09/32/football-1869639_1280.jpg" },
  { sport: "Basketbol", teams: "Efes vs Beşiktaş", score: "67-65", minute: "4.Çeyrek", odds: "2.10", img: "https://cdn.pixabay.com/photo/2016/11/29/09/32/basketball-1869640_1280.jpg" },
  { sport: "Tenis", teams: "Nadal vs Djokovic", score: "6-4, 3-6", minute: "2.Set", odds: "1.60", img: "https://cdn.pixabay.com/photo/2016/11/29/09/32/tennis-1869642_1280.jpg" }
];

const paymentMethods = [
  { name: "Papara", img: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Papara_logo.png" },
  { name: "Payfix", img: "https://www.payfix.com.tr/assets/img/logo.svg" },
  { name: "Paycell", img: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Paycell_logo.png" },
  { name: "Havale/EFT", img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
  { name: "Kripto", img: "https://cdn-icons-png.flaticon.com/512/825/825519.png" },
  { name: "Payco", img: "https://www.payco.com.tr/assets/img/logo.svg" }
];

export default function Home() {
  const [modal, setModal] = useState<"login" | "register" | null>(null);
  return (
    <main style={{
      minHeight: '100vh',
      background: '#0D0D0F',
      color: '#fff',
      fontFamily: 'Montserrat, Roboto, Arial, sans-serif',
      padding: 0,
      margin: 0
    }}>
      {/* Header */}
      <header style={{
        background: '#23272A',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 32px',
        boxShadow: '0 0 16px #00FF7F88, 0 0 8px #FFD70044'
      }}>
        <h1 style={{
          fontSize: '2.2rem',
          fontWeight: 900,
          color: '#FFD700',
          letterSpacing: 2,
          textShadow: '0 0 8px #00FF7F, 0 0 2px #FFD700'
        }}>
          GURMEBET
        </h1>
        <nav>
          <button
            style={{
              marginRight: 12,
              padding: "8px 24px",
              background: "#00FF7F",
              color: "#23272A",
              fontWeight: 700,
              border: "none",
              borderRadius: 8,
              fontSize: "1rem",
              boxShadow: "0 0 8px #00FF7F"
            }}
            onClick={() => setModal("login")}
          >Giriş Yap</button>
          <button
            style={{
              padding: "8px 24px",
              background: "#FFD700",
              color: "#23272A",
              fontWeight: 700,
              border: "none",
              borderRadius: 8,
              fontSize: "1rem",
              boxShadow: "0 0 8px #FFD700"
            }}
            onClick={() => setModal("register")}
          >Kayıt Ol</button>
        </nav>
      </header>

      {/* Yatırım Yöntemleri */}
      <div style={{
        margin: "32px auto 0 auto",
        maxWidth: 1200,
        display: "flex",
        gap: 24,
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {paymentMethods.map((method, i) => (
          <div key={i} style={{
            background: "#23272A",
            borderRadius: 14,
            padding: 24,
            minWidth: 180,
            maxWidth: 200,
            boxShadow: "0 0 12px #FFD70044",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}>
            <img src={method.img} alt={method.name} style={{ width: 60, height: 60, objectFit: "contain", background: "#fff", borderRadius: 8, marginBottom: 12 }} />
            <h3 style={{ color: "#FFD700", margin: 0, fontWeight: 700, fontSize: "1.1rem" }}>{method.name}</h3>
            <button style={{
              marginTop: 12,
              padding: "8px 18px",
              background: "#00FF7F",
              color: "#23272A",
              fontWeight: 700,
              border: "none",
              borderRadius: 8,
              fontSize: "1rem"
            }}>Yatırım Yap</button>
          </div>
        ))}
      </div>

      {/* Canlı Maçlar */}
      <div style={{
        margin: "40px auto 0 auto",
        maxWidth: 1200,
        display: "flex",
        gap: 32,
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {liveMatches.map((match, i) => (
          <div key={i} style={{
            width: 340,
            background: "#181A20",
            borderRadius: 16,
            boxShadow: "0 0 16px #00FF7F22",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            marginBottom: 12
          }}>
            <img src={match.img} alt={match.sport} style={{ width: 90, height: 90, objectFit: "cover" }} />
            <div style={{ padding: 16, flex: 1 }}>
              <h4 style={{ color: "#FFD700", margin: 0, fontWeight: 700 }}>{match.teams}</h4>
              <p style={{ color: "#00FF7F", margin: "4px 0 0 0", fontWeight: 600 }}>{match.sport} • {match.minute}</p>
              <p style={{ color: "#fff", margin: "4px 0 0 0" }}>Skor: <b>{match.score}</b></p>
              <p style={{ color: "#FFD700", margin: "4px 0 0 0" }}>Oran: <b>{match.odds}</b></p>
            </div>
            <div style={{ padding: 8 }}>
              <span style={{ color: "#00FF7F", fontWeight: 900, fontSize: "1.3rem" }}>●</span>
              <div style={{ color: "#fff", fontSize: "0.8rem" }}>Canlı</div>
            </div>
          </div>
        ))}
      </div>

      {/* Casino Oyun Kartları */}
      <div style={{
        margin: "40px auto",
        maxWidth: 1200,
        display: "flex",
        flexWrap: "wrap",
        gap: 32,
        justifyContent: "center"
      }}>
        {casinoGames.map((game, i) => (
          <div key={i} style={{
            width: 220,
            background: "#23272A",
            borderRadius: 16,
            boxShadow: "0 0 16px #00FF7F22",
            overflow: "hidden",
            cursor: "pointer",
            transition: "transform 0.2s",
          }}
            onClick={() => alert(`${game.name} oyununa giriş (demo)!`)}
          >
            <img src={game.img} alt={game.name} style={{ width: "100%", height: 120, objectFit: "cover" }} />
            <div style={{ padding: 16 }}>
              <h3 style={{ color: "#FFD700", fontWeight: 700, fontSize: "1.1rem", margin: 0 }}>{game.name}</h3>
              <p style={{ color: "#00FF7F", margin: "8px 0 0 0", fontSize: "0.95rem" }}>Hemen Oyna</p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer style={{
        marginTop: 48,
        padding: 24,
        textAlign: "center",
        background: "#181A20",
        color: "#FFD700",
        borderRadius: 12
      }}>
        © 2024 Gurmebet. Tüm hakları saklıdır.
      </footer>
    </main>
  );
}
