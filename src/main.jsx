import React from "react"
import ReactDOM from "react-dom/client"
import Router from "./router/router"
import "./main.css"
import ContextContainer from "./context/darkTheme"

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <ContextContainer>
            <Router />
        </ContextContainer>
    </React.StrictMode>
)
