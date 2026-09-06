import Info from "./Components/Info";
import About from "./Components/About";
import Interest from "./Components/Interest";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="card-wrapper">
      <Info />
      <About />
      <Interest />
      <Footer />
    </div>
  );
}
