import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Index from "./routes/_index";

// biome-ignore lint/style/noNonNullAssertion: `root` element is always present
createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
    </Routes>
  </BrowserRouter>
);
