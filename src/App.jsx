import Info from "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="card-wrapper">
      <info /> {/* Picture, Name, Buttons */}
      <about /> {/* Biography Paragraph */}
      <interests /> {/* Hobbies / Skills */}
      <footer /> {/* Social media footer links */}
    </div>
  );
}
