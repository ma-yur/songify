import React, { Component } from "react";
import AddToPlaylists from "./AddToPlaylists";
export class SongMenu extends Component {
	render() {
		return (
			<div>
				<div className="absolute right-10 mt-2 py-2 w-48 bg-white bg-opacity-70 rounded-md shadow-xl z-20">
					<div
						onClick={this.props.onClick}
						className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
					>
						Delete
					</div>
					<div className="block px-4 py-2 text-sm capitalize text-gray-70">
						<AddToPlaylists playlists={this.props.playlists} />
					</div>
				</div>
			</div>
		);
	}
}

export default SongMenu;
