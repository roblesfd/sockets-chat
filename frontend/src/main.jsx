import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import ThemeProvider from "./context/ThemeProvider.jsx";
import ModalProvider from "./context/ModalProvider.jsx";
import PopupProvider from "./context/PopupProvider.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

if (import.meta.env.VITE_NODE_ENV === "production") disableReactDevTools();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <Toaster />
        <ModalProvider>
          <PopupProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </PopupProvider>
        </ModalProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
