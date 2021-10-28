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
				<Route
					exact
					path="/playlist/:id"
					component={(routeProps) => (
						<PlaylistSongs key={routeProps.match.params.id} playlistId={routeProps.match.params.id} />
					)}
				/>
			</Switch>
		</div>
	);
}

export default App;
