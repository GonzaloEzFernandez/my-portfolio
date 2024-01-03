import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import "./app.css"
import "./index.css"
import { BrowserRouter } from "react-router-dom"
import Idioma from "./context/Idioma.jsx"

ReactDOM.createRoot(document.getElementById("root")).render(
	<Idioma>
		<BrowserRouter>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</BrowserRouter>
	</Idioma>,
)
