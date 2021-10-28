import React, { Component } from "react";
import { getPlaylist } from "../../apis/PlaylistsApi";
import PlaylistSong from "./PlaylistSong";

export class PlaylistSongs extends Component {
	state = { playlist: {} };
	fetchPlaylists = async () => {
		let playlist = await getPlaylist(this.props.playlistId);
		this.setState({ playlist: playlist });
	};

	componentDidMount = () => {
		this.fetchPlaylists();
	};

	renderSongs = () => {
		return this.state.playlist.songs.map((song) => {
			return (
				<PlaylistSong
					playlist={this.state.playlist}
					key={song.id}
					song={song}
					handleRemoveSong={this.removeSong}
				/>
			);
		});
	};
	removeSong = (songId) => {
		this.setState({
			playlist: {
				...this.state.playlist,
				songs: this.state.playlist.songs.filter((song) => {
					console.log(song.id, songId);
					return song.id !== songId;
				}),
			},
		});
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
					<div className="text-9xl h-full backdrop-filter backdrop-blur-sm  bg-opacity-25 bg-gray-500 font-extrabold py-10 px-5 text-white drop-shadow-2xl tracking-widest  ">
						<svg
							class="w-20 h-20"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
							></path>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							></path>
						</svg>
						<p className="capitalize">{this.state.playlist.name}</p>
					</div>
				</div>
				<div className="p-5">
					{this.state.playlist.songs && this.renderSongs()}
				</div>
			</div>
		);
	}
}

export default PlaylistSongs;
