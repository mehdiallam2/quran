import ReactDOM from "react-dom/client";
import React from "react";
import RecentlyReadProvider from "./context/RecentlyReadContext";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import "@styles/reset.css";
import "@styles/fonts.css";
import "@styles/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RecentlyReadProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </RecentlyReadProvider>
  </React.StrictMode>,
);
