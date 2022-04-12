import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./config/context/AuthContext";
import Router from "./config/routes/Router";
import "./index.css";

function App() {
	return (
		<>
			<BrowserRouter>
				<AuthProvider>
					<Router />
				</AuthProvider>
			</BrowserRouter>
			<ToastContainer />
		</>
	);
}

export default App;
