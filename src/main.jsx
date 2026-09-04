import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx"; // <-- It imports your main App here!
import "./index.css"; // <-- It loads your styles here!

// This is the bridge that mounts your React app to the HTML
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
