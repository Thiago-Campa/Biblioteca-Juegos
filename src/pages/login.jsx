function Login() {
  return (
    <div
      style={{
        backgroundColor: "#1f1f1f",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
      }}
    >
      <div
        style={{
          backgroundColor: "#173b9c",
          width: "400px",
          padding: "40px",
          borderRadius: "10px",
          color: "white",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "30px",
          }}
        >
          Iniciar Sesión
        </h1>

        {/* EMAIL */}
        <div style={{ marginBottom: "20px" }}>
          <label>Email</label>

          <input
            type="email"
            placeholder="Ingrese su email"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              borderRadius: "5px",
              border: "none",
              outline: "none",
            }}
          />
        </div>

        {/* PASSWORD */}
        <div style={{ marginBottom: "25px" }}>
          <label>Contraseña</label>

          <input
            type="password"
            placeholder="Ingrese su contraseña"
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "8px",
              borderRadius: "5px",
              border: "none",
              outline: "none",
            }}
          />
        </div>

        {/* BUTTON */}
        <button
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#1f1f1f",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Ingresar
        </button>

        {/* TEXTO */}
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "14px",
          }}
        >
          ¿No tenés cuenta? Registrate
        </p>
      </div>
    </div>
  );
}

export default Login;