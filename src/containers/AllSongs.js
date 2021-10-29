import React, { Component } from "react";
import { getSongs } from "../apis/songsApi";
import Song from "./Song";
import NewSong from "../containers/newSong";

export class AllSongs extends Component {
	state = { songs: [], openModal: true };

	fetchSongs = async () => {
		let songs = await getSongs();
		this.setState({ songs: songs });
	};

	handleDelete = (id) => {
		this.setState({ songs: this.state.songs.filter((song) => song.id !== id) });
	};
	handleAddSong = (newSong) => {
		this.setState({ songs: [newSong, ...this.state.songs] });
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
				{this.state.openModal ? (
					<div
						className="cursor-pointer flex items-center w-max m-4"
						onClick={() => {
							this.setState({ openModal: !this.state.openModal });
						}}
					>
						<svg
							className="w-6 h-10"
							fill="black"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
								clipRule="evenodd"
							></path>
						</svg>

						<span className="mx-4 font-medium text-xl block">Add Song</span>
					</div>
				) : (
					<NewSong
						closeModal={() => {
							this.setState({ openModal: !this.state.openModal });
						}}
						addSong={this.handleAddSong}
					/>
				)}
				<div className="font-bold container mx-auto p-10 shadow-xl   bg-gray-100 backdrop-filter backdrop-blur-sm w-3/2 rounded-xl h-screen   bg-opacity-40 ">
					{this.renderSongs()}
				</div>
			</div>
		);
	}
}

export default AllSongs;
