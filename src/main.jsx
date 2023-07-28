import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import { UserProvider } from "./context/UserContext.jsx"
import "./index.css"
import "./i18n/i18nConfig.js"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
)
