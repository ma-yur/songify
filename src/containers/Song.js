import React, { Component } from "react";

import SongMenu from "./SongMenu";
import { deleteSong } from "../apis/songsApi";

export class Song extends Component {
	handleClick = () => {
		deleteSong(this.props.song.id);
		this.props.deleteSong(this.props.song.id);
	};

	render() {
		const { song, artist, year } = this.props.song;
		return (
			<div className="p-1 ">
				<div className="flex justify-between items-center px-4">
					<div>
						<p className="font-semibold text-2xl tracking-wider text-gray-900 ">
							{song}
						</p>
						<p className="text-black-900 italic font-light">- {artist}</p>
						<p className="text-gray-800 px-2 font-light text-sm font-serif">
							{year}
						</p>
					</div>
					<button className="">
						<SongMenu
							onClick={this.handleClick}
							playlists={this.props.playlists}
						/>
					</button>
				</div>
				<hr className="my-6 dark:border-gray-800 opacity-50 " />
			</div>
		);
	}
}

export default Song;
