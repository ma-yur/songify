import { Route, Switch } from "react-router";

import Navbar from "./components/navBar/Navbar";
import AllSongs from "./containers/AllSongs";
import PlaylistSongs from "./PlaylistSongs";

function App() {
	return (
		<div className="flex">
			<Navbar />
			<Switch>
				<Route exact path="/songs" component={() => <AllSongs />} />
				<PlaylistSongs />
			</Switch>
		</div>
	);
}

export default App;
