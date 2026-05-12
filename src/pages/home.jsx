function Home() {
   return (
    <div
      style={{
        backgroundColor: "#1f1f1f",
        minHeight: "100vh",
        padding: "30px",
        color: "white",
      }}
    >
      {/* HEADER */}
      <div
        style={{
          backgroundColor: "#173b9c",
          padding: "30px",
          borderRadius: "10px",
          textAlign: "center",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          Biblioteca Gamer
        </h1>

        <p style={{ fontSize: "18px" }}>
          Tu colección de videojuegos favorita
        </p>
      </div>

      {/* SECCION DESTACADOS */}
      <div
        style={{
          backgroundColor: "#173b9c",
          padding: "25px",
          borderRadius: "10px",
          marginBottom: "40px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
          }}
        >
          Juegos Destacados
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
            flexWrap: "wrap",
          }}
        >
          {/* CARD */}
          <div
            style={{
              backgroundColor: "#1f1f1f",
              width: "220px",
              borderRadius: "10px",
              overflow: "hidden",
              textAlign: "center",
              paddingBottom: "15px",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/a/a7/God_of_War_4_cover.jpg"
              alt="God of War"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />

            <h3 style={{ marginTop: "15px" }}>God of War</h3>

            <p style={{ padding: "0 10px", fontSize: "14px" }}>
              Una aventura épica llena de acción y mitología.
            </p>
          </div>

          {/* CARD */}
          <div
            style={{
              backgroundColor: "#1f1f1f",
              width: "220px",
              borderRadius: "10px",
              overflow: "hidden",
              textAlign: "center",
              paddingBottom: "15px",
            }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/en/e/e1/Spider-Man_PS4_cover.jpg"
              alt="Spider-Man"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />

            <h3 style={{ marginTop: "15px" }}>Spider-Man</h3>

            <p style={{ padding: "0 10px", fontSize: "14px" }}>
              Balanceate por Nueva York y enfrentá villanos icónicos.
            </p>
          </div>

          {/* CARD */}
          <div
            style={{
              backgroundColor: "#1f1f1f",
              width: "220px",
              borderRadius: "10px",
              overflow: "hidden",
              textAlign: "center",
              paddingBottom: "15px",
            }}
          >
            <img
              src="data:image/jpeg;base64,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"
              alt="Hogwarts Legacy"
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
              }}
            />

            <h3 style={{ marginTop: "15px" }}>Hogwarts Legacy</h3>

            <p style={{ padding: "0 10px", fontSize: "14px" }}>
              Explorá el mundo mágico y convertite en un gran mago.
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        style={{
          backgroundColor: "#173b9c",
          padding: "20px",
          borderRadius: "10px",
          textAlign: "center",
        }}
      >
        <p>Proyecto Biblioteca Gamer - React</p>
      </div>
    </div>
  );
}

export default Home;