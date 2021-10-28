import React, { Component } from "react";
import { getPlaylists } from "../../apis/PlaylistsApi";
import Playlist from "./Playlist";
import AddToPlaylists from "../../containers/AddToPlaylists";
import AddPlaylists from "./AddPlaylists";

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

	handleAddPlaylist = (playlist) => {
		this.setState({ playlists: [...this.state.playlists, playlist] });
	};
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
				<div className="flex items-center gap-2">
					<svg
						className="w-6 h-6"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
						></path>
					</svg>
					<p className="text-xl font-bold">Your Playlists</p>
				</div>
				{this.renderPlayLists()}
				<AddPlaylists addPlaylist={this.handleAddPlaylist} />
			</div>
		);
	}
}

export default Playlists;
