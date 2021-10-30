import React, { Component } from "react";
import { getSongs } from "../apis/songsApi";
import Song from "./Song";
import NewSong from "../containers/newSong";
import FilterResults from "react-filter-search";

export class AllSongs extends Component {
	state = { songs: [], openModal: true, value: "" };

	fetchSongs = async () => {
		let songs = await getSongs();
		this.setState({ songs: songs });
	};

	handleDelete = (id) => {
		this.setState({ songs: this.state.songs.filter((song) => song.id !== id) });
	};
	handleAddSong = (newSong) => {
		this.setState({ songs: [newSong, ...this.state.songs],openModal:true });
	};
	handleUpdateSong = (id, newSong) => {
		this.setState({
			songs: this.state.songs.map((song) => {
				if (song.id === id) {
					song.song = newSong.song;
					song.artist = newSong.artist;
					song.year = newSong.year;
					console.log(song);
					return song;
				}
				return song;
			}),
		});
	};

	renderSongs = () => {
		return this.state.songs
			.filter((song) => {
				if (this.state.value === "") {
					return Song;
				} else if (
					song.song
						.toLowerCase()
						.includes(this.state.value.toLocaleLowerCase()) ||
					song.artist
						.toLowerCase()
						.includes(this.state.value.toLocaleLowerCase()) ||
					song.year.toString().includes(this.state.value.toLocaleLowerCase())
				) {
					return song;
				}
			})
			.map((song) => {
				return (
					<Song
						key={song.id}
						song={song}
						deleteSong={this.handleDelete}
						updateSong={this.handleUpdateSong}
						playlists={this.props.playlists}
					/>
				);
			});
	};
	handleChange = (event) => {
		const { value } = event.target;
		this.setState({ value });
	};

	componentDidMount = () => {
		this.fetchSongs();
	};

	render() {
		return (
			<div className=" min-w-3/4  mx-auto pt-7  ">
				<div>
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
				</div>

				<div className="font-bold container mx-auto p-10 shadow-xl   bg-gray-100 backdrop-filter backdrop-blur-sm w-3/2 rounded-xl h-screen   bg-opacity-40 ">
					<input
						type="text"
						value={this.state.value}
						onChange={this.handleChange}
						placeholder="search songs..."
						className="absolute top-0 my-5 py-1 rounded  right-36 px-3  focus:outline-none"
					/>
					{this.renderSongs()}
				</div>
			</div>
		);
	}
}

export default AllSongs;
