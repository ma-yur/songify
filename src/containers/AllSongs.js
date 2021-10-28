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
			<div
				style={{
					background:
						"url('https://images.unsplash.com/photo-1487215078519-e21cc028cb29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80') center",
				}}
				className=" bg-gradient-to-r from-blue-400 to-sky-300  w-full min-h-screen h-full"
			>
				<div className="font-bold container mx-auto p-10 m-8 bg-gray-100 backdrop-filter backdrop-blur-sm w-3/2 rounded-xl h-screen   bg-opacity-40 ">
					{this.renderSongs()}
				</div>
			</div>
		);
	}
}

export default AllSongs;
