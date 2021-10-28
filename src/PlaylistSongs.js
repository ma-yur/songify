import React, { Component } from "react";
import { getPlaylist } from "./apis/PlaylistsApi";
import Song from "./containers/Song";

export class PlaylistSongs extends Component {
	state = { playlist: {} };
	fetchPlaylists = async () => {
		let playlist = await getPlaylist(this.props.playlistId);
		this.setState({ playlist: playlist });
	};
	renderSongs = () => {
		return this.state.playlist.songs.map((song) => {
			return <Song key={song.id} song={song} />;
		});
	};

	componentDidMount = () => {
		this.fetchPlaylists();
	};

	render() {
		return (
			<div className="container mx-auto">
				<div
					style={{
						background: `url(https://source.unsplash.com/1600x900/?${this.state.playlist.name}) center`,
					}}
					className="h-1/3 w-full"
				>
					<p className="text-9xl  font-extrabold py-28 px-10 text-white drop-shadow-2xl  tracking-widest  ">
						{this.state.playlist.name}
					</p>
				</div>
				<div className="p-5">
					{this.state.playlist.songs && this.renderSongs()}
				</div>
			</div>
		);
	}
}

export default PlaylistSongs;
