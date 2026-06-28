import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// Bootstrap 5 dipakai sebagai framework CSS untuk grid dan komponen responsif.
import "bootstrap/dist/css/bootstrap.min.css";
// CSS khusus brand Kopi Kuliah (warna dan font).
import "./styles/kopi-kuliah.css";

// Titik masuk aplikasi. BrowserRouter membungkus App supaya navigasi antar halaman jalan.
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
