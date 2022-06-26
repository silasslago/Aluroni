import React from "react"
import ReactDOM from "react-dom/client"
import "bootstrap/dist/css/bootstrap.min.css"
import "./index.css"
import "normalize.css"
import CurRoute from "routes/routes"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
	<React.StrictMode>
		<CurRoute />
	</React.StrictMode>
)
