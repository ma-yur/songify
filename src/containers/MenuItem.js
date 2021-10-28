import React, { Component } from "react";
import { addSongToPlaylist } from "../apis/songsApi";

export class MenuItem extends Component {
	handleClick = () => {
		addSongToPlaylist(this.props.playlist.id, this.props.songId);
	};
	render() {
		return (
			<div className="text-gray-700 text-lg flex items-center justify-between ">
				<p>{this.props.playlist.name}</p>
				<p className="cursor-pointer" onClick={this.handleClick}>
					+
				</p>
			</div>
		);
	}
}

export default MenuItem;
