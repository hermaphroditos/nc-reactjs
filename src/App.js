import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
	// npm i gh-pages : install gh-pages to deploy
	return (
		<Router>
			{/* Switch -> Routes (updated) */}
			<Routes>
				{/* <Home /> as a child -> element={<Detail />} (updated) */}
				<Route
					path={`${process.env.PUBLIC_URL}/movie/:id`}
					element={<Detail />}
				></Route>
				<Route path={`${process.env.PUBLIC_URL}/`} element={<Home />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
