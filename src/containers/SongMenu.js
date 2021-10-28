import React, { Component } from "react";
import AddToPlaylists from "./AddToPlaylists";
export class SongMenu extends Component {
	state = { addToPlaylist: false };
	render() {
		return (
			<div>
				<div className="absolute right-20  mt-2 py-2 w-48 bg-white bg-opacity-70 rounded-md shadow-xl z-20">
					<div
						onClick={this.props.onClick}
						className="block px-4 py-2 text-sm capitalize text-gray-700 hover:bg-blue-500 hover:text-white"
					>
						Delete
					</div>
					<div className="block px-4 py-2 text-sm capitalize text-gray-70">
						{this.state.addToPlaylist ? (
							<AddToPlaylists
								songId={this.props.songId}
								playlists={this.props.playlists}
							/>
						) : (
							<h1
								onClick={() =>
									this.setState({ addToPlaylist: !this.state.addToPlaylist })
								}
								className="cursor-pointer text-gray-500 text-lg" 
							>
								+ Add to playlist
							</h1>
						)}
					</div>
				</div>
			</div>
		);
	}
}

export default SongMenu;
