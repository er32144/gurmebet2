"use client";
import { useState } from "react";

const casinoGames = [
  {
    name: "Sweet Bonanza",
    img: "https://cdn.pixabay.com/photo/2017/01/31/13/14/casino-2028252_1280.png"
  },
  {
    name: "Aviator",
    img: "https://cdn.pixabay.com/photo/2016/11/29/09/32/slot-machine-1869644_1280.jpg"
  },
  {
    name: "Lightning Roulette",
    img: "https://cdn.pixabay.com/photo/2017/01/31/13/14/roulette-2028248_1280.png"
  },
  {
    name: "Book of Ra",
    img: "https://cdn.pixabay.com/photo/2017/01/31/13/14/casino-2028251_1280.png"
  }
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

      {/* Modal */}
      {modal && (
        <div style={{
          position: "fixed",
          top: 0, left: 0, right: 0, bottom: 0,
          background: "rgba(0,0,0,0.7)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "#23272A",
            padding: 32,
            borderRadius: 16,
            minWidth: 320,
            boxShadow: "0 0 24px #00FF7F44"
          }}>
            <h2 style={{ color: "#FFD700", marginBottom: 16 }}>
              {modal === "login" ? "Giriş Yap" : "Kayıt Ol"}
            </h2>
            <form
              onSubmit={e => {
                e.preventDefault();
                alert("Demo: Form gönderildi!");
                setModal(null);
              }}
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              {modal === "register" && (
                <input
                  type="text"
                  placeholder="Kullanıcı Adı"
                  style={{ padding: 10, borderRadius: 6, border: "none", background: "#181A20", color: "#fff" }}
                  required
                />
              )}
              <input
                type="email"
                placeholder="E-posta"
                style={{ padding: 10, borderRadius: 6, border: "none", background: "#181A20", color: "#fff" }}
                required
              />
              <input
                type="password"
                placeholder="Şifre"
                style={{ padding: 10, borderRadius: 6, border: "none", background: "#181A20", color: "#fff" }}
                required
              />
              <button
                type="submit"
                style={{
                  marginTop: 8,
                  padding: "10px 0",
                  background: "#00FF7F",
                  color: "#23272A",
                  fontWeight: 700,
                  border: "none",
                  borderRadius: 8,
                  fontSize: "1rem"
                }}
              >
                {modal === "login" ? "Giriş Yap" : "Kayıt Ol"}
              </button>
              <button
                type="button"
                onClick={() => setModal(null)}
                style={{
                  marginTop: 8,
                  padding: "8px 0",
                  background: "#FFD700",
                  color: "#23272A",
                  fontWeight: 700,
                  border: "none",
                  borderRadius: 8,
                  fontSize: "1rem"
                }}
              >
                Kapat
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Spor Bannerı */}
      <div style={{
        width: "100%",
        maxWidth: 1200,
        margin: "32px auto 0 auto",
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: "0 0 32px #00FF7F22",
        position: "relative"
      }}>
        <img
          src="https://images.unsplash.com/photo-1505843276871-1b43c5c9b6c6?auto=format&fit=crop&w=1200&q=80"
          alt="Canlı Spor"
          style={{ width: "100%", height: 220, objectFit: "cover", filter: "brightness(0.7)" }}
        />
        <div style={{
          position: "absolute",
          top: 0, left: 0, right: 0, bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#FFD700",
          fontSize: "2rem",
          fontWeight: 900,
          textShadow: "0 0 16px #00FF7F, 0 0 8px #FFD700"
        }}>
          ⚽ CANLI FUTBOL MAÇLARI
        </div>
      </div>

      {/* Bonus Slider */}
      <div style={{
        margin: "32px auto 0 auto",
        maxWidth: 900,
        background: "linear-gradient(90deg, #00FF7F 0%, #FFD700 100%)",
        borderRadius: 16,
        boxShadow: "0 0 24px #FFD70044",
        padding: 24,
        display: "flex",
        alignItems: "center",
        gap: 24
      }}>
        <img
          src="https://cdn.pixabay.com/photo/2017/01/31/13/14/casino-2028252_1280.png"
          alt="Bonus"
          style={{ width: 80, height: 80, borderRadius: 12, background: "#fff" }}
        />
        <div>
          <h2 style={{ color: "#23272A", fontWeight: 900, fontSize: "1.3rem", margin: 0 }}>
            Bugüne Özel %30 Çevrimsiz Bonus!
          </h2>
          <p style={{ color: "#23272A", margin: 0, fontWeight: 600 }}>
            Sadece Gurmebet'te, anında hesabında!
          </p>
        </div>
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
