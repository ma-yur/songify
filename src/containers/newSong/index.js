import React, { Component } from "react";

import { addSong } from "../../apis/songsApi";

export class index extends Component {
	state = { song: "", artist: "", year: "" };
	handleInputChange = (event) => {
		const target = event.target;
		const value = event.target.value;
		const name = target.name;
		this.setState({
			[name]: value,
		});
	};
	handleSubmit = (e) => {
		e.preventDefault();
		let data = {
			song: this.state.song,
			artist: this.state.artist,
			year: this.state.year,
		};
		addSong(data);
		this.setState({
			song: "",
			artist: "",
			year: "",
		});
	};

	render() {
		return (
			<div className="min-w-1/2 mx-auto pt-7 h-screen">
				<form
					className="font-bold container mx-auto p-10 shadow-xl  
        bg-white backdrop-filter backdrop-blur-sm w-3/2 rounded-xl  
         bg-opacity-25"
					onSubmit={this.handleSubmit}
				>
					<p className="text-xl font-light mt-5 mb-2 capitalize">
						Add new Song
					</p>
					<hr className="mb-5" />
					<div className="mb-4">
						<label className="block text-gray-900 text-lg  font-light mb-2">
							Song Name
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							name="song"
							value={this.state.song}
							onChange={this.handleInputChange}
							placeholder="Enter song name..."
							required="required"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-900 text-lg  font-light mb-2">
							Artist Name
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							name="artist"
							value={this.state.artist}
							onChange={this.handleInputChange}
							placeholder="Enter Artist name..."
							required="required"
						/>
					</div>
					<div className="mb-4">
						<label className="block text-gray-900 text-lg  font-light mb-2">
							Release year
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							type="text"
							name="year"
							value={this.state.year}
							onChange={this.handleInputChange}
							placeholder="Enter release year..."
							required="required"
						/>
					</div>
					<button className="bg-blue-500 py-2 px-5 text-blue-100 rounded-lg  ">
						Add
					</button>
				</form>
			</div>
		);
	}
}

export default index;
