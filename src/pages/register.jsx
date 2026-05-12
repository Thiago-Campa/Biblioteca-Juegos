function Register() {
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
          width: "420px",
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
          Crear Cuenta
        </h1>

        {/* NOMBRE */}
        <div style={{ marginBottom: "20px" }}>
          <label>Nombre</label>

          <input
            type="text"
            placeholder="Ingrese su nombre"
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
        <div style={{ marginBottom: "20px" }}>
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

        {/* CONFIRM PASSWORD */}
        <div style={{ marginBottom: "25px" }}>
          <label>Confirmar Contraseña</label>

          <input
            type="password"
            placeholder="Repita su contraseña"
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
          Registrarse
        </button>

        {/* TEXTO */}
        <p
          style={{
            textAlign: "center",
            marginTop: "20px",
            fontSize: "14px",
          }}
        >
          ¿Ya tenés cuenta? Iniciá sesión
        </p>
      </div>
    </div>
  );
}

export default Register;