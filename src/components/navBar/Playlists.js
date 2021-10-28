import React, { Component } from "react";
import { getPlaylists } from "../../apis/PlaylistsApi";
import Playlist from "./Playlist";

export class Playlists extends Component {
	state = { playlists: [] };
	fetchPlaylists = async () => {
		let playlists = await getPlaylists();
		this.setState({ playlists: playlists });
		this.props.playlists(this.state.playlists);
	};
	componentDidMount() {
		this.fetchPlaylists();
	}
	renderPlayLists = () => {
		return this.state.playlists.map((playlist) => {
			return (
				<Playlist key={playlist.id} id={playlist.id} name={playlist.name} />
			);
		});
	};

	render() {
		return (
			<div>
				<p>Your Playlists</p>
				{this.renderPlayLists()}
			</div>
		);
	}
}

export default Playlists;
