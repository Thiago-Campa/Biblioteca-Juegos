import { useState } from "react";

const PLATAFORMAS = ["PC", "PlayStation 5", "PlayStation 4", "Xbox Series X", "Xbox One", "Nintendo Switch", "Mobile"];
const GENEROS = ["Acción", "Aventura", "RPG", "Estrategia", "Deportes", "Terror", "Simulación", "Puzzle", "Indie"];

const initialForm = {
    nombre: "",
    creador: "",
    plataforma: "",
    anio: "",
    genero: "",
    caratula: "",
};

function AddGames() {
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [form, setForm] = useState(initialForm);
    const [juegos, setJuegos] = useState([]);
    const [errores, setErrores] = useState({});
    const [enviado, setEnviado] = useState(false);

    const validar = () => {
        const nuevosErrores = {};
        if (!form.nombre.trim()) nuevosErrores.nombre = "El nombre es obligatorio.";
        if (!form.creador.trim()) nuevosErrores.creador = "El creador es obligatorio.";
        if (!form.plataforma) nuevosErrores.plataforma = "Seleccioná una plataforma.";
        if (!form.anio) {
            nuevosErrores.anio = "El año es obligatorio.";
        } else if (form.anio < 1950 || form.anio > new Date().getFullYear()) {
            nuevosErrores.anio = `El año debe estar entre 1950 y ${new Date().getFullYear()}.`;
        }
        if (!form.genero) nuevosErrores.genero = "Seleccioná un género.";
        return nuevosErrores;
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errores[e.target.name]) {
            setErrores({ ...errores, [e.target.name]: undefined });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevosErrores = validar();
        if (Object.keys(nuevosErrores).length > 0) {
            setErrores(nuevosErrores);
            return;
        }
        setJuegos([{ ...form, id: Date.now() }, ...juegos]);
        setForm(initialForm);
        setErrores({});
        setEnviado(true);
        setTimeout(() => {
            setEnviado(false);
            setMostrarFormulario(false);
        }, 1800);
    };

    const handleCancelar = () => {
        setForm(initialForm);
        setErrores({});
        setMostrarFormulario(false);
    };

    return (
        <>
            <style>{`
        .ag-page {
          background-color: #0b0f1a;
          min-height: calc(100vh - 60px);
          padding: 48px 60px;
          color: #f0f4ff;
          font-family: 'Segoe UI', system-ui, sans-serif;
        }
        .ag-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 36px;
          flex-wrap: wrap;
          gap: 16px;
        }
        .ag-title {
          font-size: 32px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #f0f4ff;
          margin: 0 0 6px 0;
        }
        .ag-subtitle {
          font-size: 14px;
          color: #7a9bbf;
          margin: 0;
        }
        .ag-btn-add {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 11px 22px;
          background: #1d4ed8;
          border: none;
          border-radius: 10px;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s, transform 0.1s;
          white-space: nowrap;
        }
        .ag-btn-add:hover {
          background: #2563eb;
          transform: translateY(-1px);
        }
        .ag-overlay {
          position: fixed;
          inset: 0;
          background: rgba(5, 8, 18, 0.82);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 100;
          padding: 24px;
          backdrop-filter: blur(4px);
          animation: fadeIn 0.18s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .ag-modal {
          background: #111827;
          border: 1px solid #1e3a5f;
          border-radius: 16px;
          width: 100%;
          max-width: 520px;
          max-height: 90vh;
          overflow-y: auto;
          padding: 32px;
          box-shadow: 0 25px 60px rgba(0, 0, 0, 0.6);
          animation: slideUp 0.22s ease;
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .ag-modal-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 28px;
        }
        .ag-modal-title {
          font-size: 20px;
          font-weight: 700;
          color: #f0f4ff;
          margin: 0;
        }
        .ag-btn-close {
          background: none;
          border: none;
          color: #7a9bbf;
          cursor: pointer;
          padding: 4px;
          border-radius: 6px;
          transition: color 0.15s, background 0.15s;
          display: flex;
          align-items: center;
        }
        .ag-btn-close:hover {
          color: #f0f4ff;
          background: #1e3a5f;
        }
        .ag-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .ag-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .ag-field-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }
        .ag-label {
          font-size: 13px;
          font-weight: 600;
          color: #94b4d4;
          letter-spacing: 0.02em;
        }
        .ag-label span {
          color: #3b82f6;
          margin-left: 2px;
        }
        .ag-input, .ag-select {
          padding: 10px 14px;
          background: #0b0f1a;
          border: 1px solid #1e3a5f;
          border-radius: 8px;
          color: #f0f4ff;
          font-size: 14px;
          font-family: inherit;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%;
          box-sizing: border-box;
        }
        .ag-input::placeholder { color: #3a5070; }
        .ag-input:focus, .ag-select:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);
        }
        .ag-input--error, .ag-select--error { border-color: #ef4444; }
        .ag-input--error:focus, .ag-select--error:focus {
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);
        }
        .ag-select option { background: #111827; }
        .ag-error-msg {
          font-size: 12px;
          color: #f87171;
        }
        .ag-caratula-preview {
          margin-top: 8px;
          width: 80px;
          height: 100px;
          object-fit: cover;
          border-radius: 6px;
          border: 1px solid #1e3a5f;
        }
        .ag-form-actions {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }
        .ag-btn-submit {
          flex: 1;
          padding: 12px;
          background: #1d4ed8;
          border: none;
          border-radius: 10px;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: background 0.15s;
        }
        .ag-btn-submit:hover { background: #2563eb; }
        .ag-btn-cancel {
          padding: 12px 20px;
          background: transparent;
          border: 1px solid #1e3a5f;
          border-radius: 10px;
          color: #7a9bbf;
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
          transition: border-color 0.15s, color 0.15s;
        }
        .ag-btn-cancel:hover {
          border-color: #3b82f6;
          color: #f0f4ff;
        }
        .ag-success {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 18px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.35);
          border-radius: 10px;
          color: #34d399;
          font-size: 14px;
          font-weight: 600;
        }
        .ag-list-section { margin-top: 40px; }
        .ag-list-title {
          font-size: 18px;
          font-weight: 700;
          color: #f0f4ff;
          margin-bottom: 20px;
        }
        .ag-game-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 20px;
        }
        .ag-game-item {
          background: #111827;
          border: 1px solid #1e3a5f;
          border-radius: 12px;
          padding: 16px;
          display: flex;
          gap: 14px;
          align-items: flex-start;
          animation: slideUp 0.25s ease;
        }
        .ag-game-img {
          width: 54px;
          height: 70px;
          object-fit: cover;
          border-radius: 6px;
          flex-shrink: 0;
        }
        .ag-game-img-placeholder {
          width: 54px;
          height: 70px;
          border-radius: 6px;
          background: #1e3a5f;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          font-size: 22px;
        }
        .ag-game-info { flex: 1; min-width: 0; }
        .ag-game-name {
          font-size: 15px;
          font-weight: 700;
          color: #f0f4ff;
          margin: 0 0 4px 0;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .ag-game-meta {
          font-size: 12px;
          color: #7a9bbf;
          margin: 0 0 6px 0;
        }
        .ag-game-tags { display: flex; gap: 6px; flex-wrap: wrap; }
        .ag-tag {
          font-size: 11px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 12px;
          background: #1e3a5f;
          color: #7ab8f5;
        }
        .ag-empty {
          text-align: center;
          color: #3a5070;
          font-size: 14px;
          padding: 48px 0;
          border: 1px dashed #1e3a5f;
          border-radius: 12px;
        }
        .ag-empty-icon { font-size: 40px; margin-bottom: 12px; opacity: 0.5; }
        @media (max-width: 640px) {
          .ag-page { padding: 32px 20px; }
          .ag-modal { padding: 24px 18px; }
          .ag-field-row { grid-template-columns: 1fr; }
        }
      `}</style>

            <div className="ag-page">
                <div className="ag-header">
                    <div>
                        <h1 className="ag-title">Agregar Juegos</h1>
                        <p className="ag-subtitle">Añadí nuevos juegos a tu biblioteca</p>
                    </div>
                    {!mostrarFormulario && (
                        <button className="ag-btn-add" onClick={() => setMostrarFormulario(true)}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="12" y1="5" x2="12" y2="19" />
                                <line x1="5" y1="12" x2="19" y2="12" />
                            </svg>
                            Agregar juego
                        </button>
                    )}
                </div>

                <div className="ag-list-section">
                    {juegos.length === 0 ? (
                        <div className="ag-empty">
                            <div className="ag-empty-icon">🎮</div>
                            <p>Todavía no agregaste ningún juego.<br />Usá el botón de arriba para empezar.</p>
                        </div>
                    ) : (
                        <>
                            <p className="ag-list-title">{juegos.length} juego{juegos.length !== 1 ? "s" : ""} agregado{juegos.length !== 1 ? "s" : ""}</p>
                            <div className="ag-game-list">
                                {juegos.map((j) => (
                                    <div key={j.id} className="ag-game-item">
                                        {j.caratula ? (
                                            <img src={j.caratula} alt={j.nombre} className="ag-game-img" onError={(e) => { e.target.style.display = "none"; }} />
                                        ) : (
                                            <div className="ag-game-img-placeholder">🎮</div>
                                        )}
                                        <div className="ag-game-info">
                                            <p className="ag-game-name">{j.nombre}</p>
                                            <p className="ag-game-meta">{j.creador} · {j.anio}</p>
                                            <div className="ag-game-tags">
                                                <span className="ag-tag">{j.genero}</span>
                                                <span className="ag-tag">{j.plataforma}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>

            {mostrarFormulario && (
                <div className="ag-overlay" onClick={(e) => { if (e.target === e.currentTarget) handleCancelar(); }}>
                    <div className="ag-modal">
                        <div className="ag-modal-header">
                            <h2 className="ag-modal-title">Nuevo juego</h2>
                            <button className="ag-btn-close" onClick={handleCancelar} aria-label="Cerrar">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                                    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        {enviado ? (
                            <div className="ag-success">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12" />
                                </svg>
                                ¡Juego agregado exitosamente!
                            </div>
                        ) : (
                            <form className="ag-form" onSubmit={handleSubmit} noValidate>

                                <div className="ag-field">
                                    <label className="ag-label">Nombre del juego <span>*</span></label>
                                    <input
                                        className={`ag-input${errores.nombre ? " ag-input--error" : ""}`}
                                        type="text"
                                        name="nombre"
                                        value={form.nombre}
                                        onChange={handleChange}
                                        placeholder="Ej: The Legend of Zelda"
                                        autoFocus
                                    />
                                    {errores.nombre && <span className="ag-error-msg">{errores.nombre}</span>}
                                </div>

                                <div className="ag-field">
                                    <label className="ag-label">Creador / Desarrolladora <span>*</span></label>
                                    <input
                                        className={`ag-input${errores.creador ? " ag-input--error" : ""}`}
                                        type="text"
                                        name="creador"
                                        value={form.creador}
                                        onChange={handleChange}
                                        placeholder="Ej: Nintendo, FromSoftware..."
                                    />
                                    {errores.creador && <span className="ag-error-msg">{errores.creador}</span>}
                                </div>

                                <div className="ag-field-row">
                                    <div className="ag-field">
                                        <label className="ag-label">Plataforma <span>*</span></label>
                                        <select
                                            className={`ag-select${errores.plataforma ? " ag-select--error" : ""}`}
                                            name="plataforma"
                                            value={form.plataforma}
                                            onChange={handleChange}
                                        >
                                            <option value="" disabled>Seleccionar...</option>
                                            {PLATAFORMAS.map((p) => <option key={p} value={p}>{p}</option>)}
                                        </select>
                                        {errores.plataforma && <span className="ag-error-msg">{errores.plataforma}</span>}
                                    </div>

                                    <div className="ag-field">
                                        <label className="ag-label">Año de salida <span>*</span></label>
                                        <input
                                            className={`ag-input${errores.anio ? " ag-input--error" : ""}`}
                                            type="number"
                                            name="anio"
                                            value={form.anio}
                                            onChange={handleChange}
                                            placeholder={`Ej: ${new Date().getFullYear()}`}
                                            min="1950"
                                            max={new Date().getFullYear()}
                                        />
                                        {errores.anio && <span className="ag-error-msg">{errores.anio}</span>}
                                    </div>
                                </div>

                                <div className="ag-field">
                                    <label className="ag-label">Género <span>*</span></label>
                                    <select
                                        className={`ag-select${errores.genero ? " ag-select--error" : ""}`}
                                        name="genero"
                                        value={form.genero}
                                        onChange={handleChange}
                                    >
                                        <option value="" disabled>Seleccionar...</option>
                                        {GENEROS.map((g) => <option key={g} value={g}>{g}</option>)}
                                    </select>
                                    {errores.genero && <span className="ag-error-msg">{errores.genero}</span>}
                                </div>

                                <div className="ag-field">
                                    <label className="ag-label">URL de la carátula <span style={{ color: "#3a5070", fontWeight: 400 }}>(opcional)</span></label>
                                    <input
                                        className="ag-input"
                                        type="url"
                                        name="caratula"
                                        value={form.caratula}
                                        onChange={handleChange}
                                        placeholder="https://..."
                                    />
                                    {form.caratula && (
                                        <img
                                            src={form.caratula}
                                            alt="Preview"
                                            className="ag-caratula-preview"
                                            onError={(e) => { e.target.style.display = "none"; }}
                                        />
                                    )}
                                </div>

                                <div className="ag-form-actions">
                                    <button type="button" className="ag-btn-cancel" onClick={handleCancelar}>Cancelar</button>
                                    <button type="submit" className="ag-btn-submit">Guardar juego</button>
                                </div>

                            </form>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default AddGames;