import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./config/context/AuthContext";
import Router from "./config/routes/Router";
import "./index.css";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Router />
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
