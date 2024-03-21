import { Outlet } from "react-router-dom";
import Header from "./assets/components/header/Header.jsx";
import Footer from "./assets/components/footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
