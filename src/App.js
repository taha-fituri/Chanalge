import "./App.css";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/Navbar";
import PMW from "./Images/PMW.jpg";
import Audi from "./Images/Audi.jpg";
import Azera from "./Images/Azera.jpg";
import optima from "./Images/optima.jpg";
import Cars from "./Components/Cars/Cars";

var cars = [
  {
    name: "PMW",
    price: 150000,
    imgSrc: PMW,
  },
  {
    name: "Audi",
    price: 2500000,
    imgSrc: Audi,
  },
  {
    name: "Hyundai",
    price: 10000,
    imgSrc: Azera,
  },
  {
    name: "KIA",
    price: 11000,
    imgSrc: optima,
  },
];
function App() {
  return (
    <div className="App">
      {/* NavBar Called */}
      <NavBar />
      {/* Cars Called */}
      <Cars cars={cars} />
      {/* Footer Called */}
      <Footer />
    </div>
  );
}

export default App;
