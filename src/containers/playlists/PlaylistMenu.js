import React, { Component } from "react";
import { removeSongFromPlaylist } from "../../apis/songsApi";

export class PlaylistMenu extends Component {
	handleClick = () => {
		removeSongFromPlaylist(this.props.playlist.id, this.props.song.id);
		this.props.handleRemoveSong(this.props.song.id);
	};
	render() {
		return (
			<div>
				<div className="absolute right-28  mt-2 py-2 w-48 bg-white bg-opacity-70 rounded-md shadow-xl z-20">
					<button
						onClick={this.handleClick}
						className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
					>
						Remove from playlist
					</button>
				</div>
			</div>
		);
	}
}

export default PlaylistMenu;
