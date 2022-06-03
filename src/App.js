import { useState } from "react";
import CartPreview from "./components/CartPreview";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const [menuActive, setMenuActive] = useState(false);
  const [hasOrder, setHasOrder] = useState(true);
  return (
    <div className="App wrapper" onClick={() => setMenuActive(false)}>
      <div className="container">
        <Header setMenuActive={setMenuActive} />
        <div className={menuActive ? "blackout" : ""} />
        <CartPreview menuActive={menuActive} setMenuActive={setMenuActive} hasOrder={hasOrder} />


      </div>
      <Footer />
    </div>

  );
}

export default App;