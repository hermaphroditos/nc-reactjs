import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
	return (
		<Router>
			{/* Switch -> Routes (updated) */}
			<Routes>
				{/* <Home /> as a child -> element={<Detail />} (updated) */}
				<Route path="/movie/:id" element={<Detail />}></Route>
				<Route path="/" element={<Home />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
