import Navbar from "./navbar";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ padding: "20px" }}>
        {children}
      </main>
    </>
  );
}

export default Layout;