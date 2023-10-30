import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<HashRouter basename={process.env.NODE_ENV === "development" ? "/test-assignment" : "/"}>
			<App />
		</HashRouter>
	</React.StrictMode>,
);
