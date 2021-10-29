import React, { Component } from "react";

import { createPlaylist } from "../../apis/PlaylistsApi";

export class AddPlaylists extends Component {
	state = { input: "" };
	
	handleSubmit = (e) => {
		e.preventDefault();
		let data = { name: this.state.input };
		createPlaylist(data).then((playlist) => {
			this.props.addPlaylist(playlist);
		});
		this.setState({ input: "" });
	};

	render() {
		return (
			<div>
				<form className="flex-col space-y-2" onSubmit={this.handleSubmit} action="">
					<input
						className="block w-5/6 rounded-lg px-2 py-1"
						value={this.state.input}
						onChange={(e) => {
							this.setState({ input: e.target.value });
						}}
						type="text"
					/>
					<button className="bg-green-200 px-3 py-1 rounded-lg">Add</button>
				</form>
			</div>
		);
	}
}

export default AddPlaylists;
