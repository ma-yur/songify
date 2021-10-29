import { Route, Switch } from "react-router";
import React, { Component } from "react";

import { getPlaylists } from "./apis/PlaylistsApi";
import Navbar from "./components/navBar/Navbar";
import AllSongs from "./containers/AllSongs";
import PlaylistSongs from "./containers/playlists";
import NewSong from "./containers/newSong";

export class App extends Component {
	state = { playlists: [] };

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
	handleRemovePlayList = (playlistId) => {
		this.setState({
			playlists: this.state.playlists.filter((playlist) => {
				return playlist.id !== playlistId;
			}),
		});
	};
	componentDidMount() {
		this.fetchPlaylists();
	}

	render() {
		return (
			<div
				style={{
					background: "linear-gradient(to right, #67b26f, #4ca2cd)",
					opacity: "0.9",
				}}
				className="flex"
			>
				<Navbar
					addPlaylist={this.handleAddPlayList}
					removePlaylist={this.handleRemovePlayList}
					playlists={this.state.playlists}
				/>

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
