import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Games from "./pages/games";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AddGames from "./pages/addGames";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Games />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-games" element={<AddGames />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;