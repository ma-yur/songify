import { Route, Switch } from "react-router";
import React, { Component } from "react";
import Navbar from "./components/navBar/Navbar";
import AllSongs from "./containers/AllSongs";
import PlaylistSongs from "./containers/playlists";

export class App extends Component {
	state = { playlists: [] };
	playlists = (playlists) => {
		this.setState({ playlists: playlists });
	};
	render() {
		return (
			<div className="flex">
				<Navbar playlists={this.playlists} />
				<Switch>
					<Route
						exact
						path="/songs"
						component={() => <AllSongs playlists={this.state.playlists} />}
					/>
					<Route
						exact
						path="/playlist/:id"
						component={(routeProps) => (
							<PlaylistSongs
								key={routeProps.match.params.id}
								playlistId={routeProps.match.params.id}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
