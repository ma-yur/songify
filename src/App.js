import { Route, Switch } from "react-router";
import React, { Component } from "react";
import Navbar from "./components/navBar/Navbar";
import AllSongs from "./containers/AllSongs";
import PlaylistSongs from "./containers/playlists";

export class App extends Component {
	state = { playlists: [], navBarOpen: false };
	playlists = (playlists) => {
		this.setState({ playlists: playlists });
	};
	renderHamburger = () => {
		return (
			<div
				className="cursor-pointer"
				onClick={() => this.setState({ navBarOpen: !this.state.navBarOpen })}
			>
				<svg
					class="w-20 h-12"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clip-rule="evenodd"
					></path>
				</svg>
			</div>
		);
	};
	render() {
		return (
			<div
				style={{
					background: "linear-gradient(to right, #67b26f, #4ca2cd)",
				}}
				className="flex bg-green-50"
			>
				{this.state.navBarOpen ? (
					<Navbar
						playlists={this.playlists}
						handleClick={() =>
							this.setState({ navBarOpen: !this.state.navBarOpen })
						}
					/>
				) : (
					this.renderHamburger()
				)}
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
