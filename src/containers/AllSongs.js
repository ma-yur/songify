import React, { Component } from "react";
import { getSongs } from "../apis/songsApi";
import Song from "./Song";

export class AllSongs extends Component {
	state = { songs: [] };

	fetchSongs = async () => {
		let songs = await getSongs();
		this.setState({ songs: songs });
	};
	handleDelete = (id) => {
		this.setState({ songs: this.state.songs.filter((song) => song.id !== id) });
	};
	renderSongs = () => {
		return this.state.songs.map((song) => {
			return (
				<Song
					key={song.id}
					song={song}
					deleteSong={this.handleDelete}
					playlists={this.props.playlists}
				/>
			);
		});
	};
	componentDidMount = () => {
		this.fetchSongs();
	};

	render() {
		return (
			<div className=" min-w-3/4 mx-auto pt-7  ">
				<div className="font-bold container mx-auto p-10 shadow-xl   bg-gray-100 backdrop-filter backdrop-blur-sm w-3/2 rounded-xl h-screen   bg-opacity-40 ">
					{this.renderSongs()}
				</div>
			</div>
		);
	}
}

export default AllSongs;
