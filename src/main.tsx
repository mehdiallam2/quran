import React from "react";
import ReactDOM from "react-dom/client";
import "@styles/index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { persistot, store } from "redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";
import { HashRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistot}>
        <HashRouter>
          <App />
        </HashRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
