import React, { Component } from "react";
import { getSongs } from "../apis/songsApi";
import Song from "./Song";

export class AllSongs extends Component {
	state = { songs: [] };

	fetchSongs = async () => {
		let songs = await getSongs();
		this.setState({ songs: songs });
	};
	renderSongs = () => {
		return this.state.songs.map((song) => {
			return <Song key={song.id} song={song} />;
		});
	};
	componentDidMount = () => {
		this.fetchSongs();
	};
	render() {
		return (
			<div className=" bg-gradient-to-r from-blue-400 to-sky-300  w-full min-h-screen h-full">
				<p className="font-bold container mx-auto p-10 m-8 bg-gray-100 backdrop-filter backdrop-blur-2xl w-3/2 rounded-xl h-screen   bg-opacity-30 ">
					{this.renderSongs()}
				
				</p>
			</div>
		);
	}
}

export default AllSongs;
