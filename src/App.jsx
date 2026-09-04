import info from "./components/info";
import about from "./components/about";
import interest from "./components/interest";
import footer from "./components/footer";

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
