import { Route, Switch } from "react-router";
import React, { Component } from "react";

import { getPlaylists } from "./apis/PlaylistsApi";
import Navbar from "./components/navBar/Navbar";
import AllSongs from "./containers/AllSongs";
import PlaylistSongs from "./containers/playlists";
import NewSong from "./containers/newSong";

export class App extends Component {
	state = { playlists: [], navBarOpen: true };

	playlists = (playlists) => {
		this.setState({ playlists: playlists });
	};
	fetchPlaylists = async () => {
		let playlists = await getPlaylists();
		this.setState({ playlists: playlists });
	};
	handleAddPlayList = (playlist) => {
		this.setState({ playlists: [...this.state.playlists, playlist] });
	};
	componentDidMount() {
		this.fetchPlaylists();
	}
	renderHamburger = () => {
		return (
			<div
				className="cursor-pointer"
				onClick={() => this.setState({ navBarOpen: !this.state.navBarOpen })}
			>
				<svg
					className="w-20 h-12"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
						clipRule="evenodd"
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
					opacity :"0.9"
				}}
				className="flex"
			>
				{this.state.navBarOpen ? (
					<Navbar
						addPlaylist={this.handleAddPlayList}
						playlists={this.state.playlists}
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
					<Route exact path="/newsong" component={() => <NewSong />} />
				</Switch>
			</div>
		);
	}
}

export default App;
