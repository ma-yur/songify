import React, { Component } from "react";

import { createPlaylist } from "../../apis/PlaylistsApi";

export class AddPlaylists extends Component {
	state = { input: "", isEditing: false };

	handleSubmit = (e) => {
		e.preventDefault();
		let data = { name: this.state.input };
		createPlaylist(data).then((playlist) => {
			this.props.addPlaylist(playlist);
		});
		this.setState({ input: "", isEditing: false });
	};

	renderTitile = () => {
		return (
			<div
				onClick={() => this.setState({ isEditing: true })}
				className="cursor-pointer flex items-center ml-4 my-3 gap-2"
			>
				<svg
					class="w-6 h-6"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z"></path>
				</svg>
				<p className="font-bold text-gray-800 tracking-wide">
					Add New playlist
				</p>
			</div>
		);
	};

	render() {
		return (
			<div>
				{this.state.isEditing ? (
					<form
						className="flex-col space-y-2"
						onSubmit={this.handleSubmit}
						action=""
					>
						<input
							className="block w-5/6 rounded-lg px-2 py-1 focus:outline-none focus:shadow-outline"
							value={this.state.input}
							required="required"
							onChange={(e) => {
								this.setState({ input: e.target.value });
							}}
							type="text"
						/>
						<div className="flex items-center gap-5">
							<button className="bg-green-200 px-3 py-1 rounded-lg">Add</button>
							<div
								className="cursor-pointer font-bold "
								onClick={() => {
									this.setState({ isEditing: false });
								}}
							>
								X
							</div>
						</div>
					</form>
				) : (
					<p>{this.renderTitile()}</p>
				)}
			</div>
		);
	}
}

export default AddPlaylists;
