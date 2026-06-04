import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Home.css";
import GameCard from "../components/gamecard";

const juegosDestacados = [
  {
    title: "God of War",
    description: "Una aventura épica llena de acción y mitología nórdica.",
    image: "https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg",
    genre: "Acción"
  },
  {
    title: "Spider-Man",
    description: "Balanceate por Nueva York y enfrentá villanos icónicos.",
    image: "https://upload.wikimedia.org/wikipedia/en/e/e1/Spider-Man_PS4_cover.jpg",
    genre: "Aventura"
  },
  {
    title: "Hogwarts Legacy",
    description: "Explorá el mundo mágico y convertite en un gran mago.",
    image: "https://upload.wikimedia.org/wikipedia/en/f/fb/Hogwarts_legacyboxart.png",
    genre: "RPG"
  }
];

function Home() {
  const [busqueda, setBusqueda] = useState("");
  const navigate = useNavigate();

  const manejarBusqueda = () => {
    if (busqueda.trim() === "") {
      alert("Escribí un juego");
      return;
    }
    navigate("/games");
  };

  return (
    <div className="home">

      <div className="home__hero">
        <div className="home__hero-glow" />
        <h1 className="home__hero-title">
          Biblioteca <span className="home__hero-accent">Gamer</span>
        </h1>
        <p className="home__hero-subtitle">Tu colección de videojuegos favorita</p>
        <Link to="/games" className="home__hero-cta">Ver catálogo</Link>
      </div>

      <div className="home__search">
        <input
          type="text"
          placeholder="Buscar juego..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="home__search-input"
        />
        <button onClick={manejarBusqueda} className="home__search-btn">
          Buscar
        </button>
      </div>

      <div className="home__section">
        <h2 className="home__section-title">Juegos Destacados</h2>
        <div className="home__cards">
          {juegosDestacados.map((juego) => (
            <GameCard
              key={juego.title}
              title={juego.title}
              description={juego.description}
              image={juego.image}
              genre={juego.genre}
            />
          ))}
        </div>
      </div>

      <div className="home__footer">
        <p>Proyecto Biblioteca Gamer - React</p>
      </div>

    </div>
  );
}

export default Home;