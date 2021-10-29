import React, { Component } from "react";

import SongMenu from "./SongMenu";
import { deleteSong } from "../apis/songsApi";

export class Song extends Component {
	state = { openMenu: false };
	handleClick = () => {
		deleteSong(this.props.song.id);
		this.props.deleteSong(this.props.song.id);
	};

	render() {
		const { song, artist, year } = this.props.song;
		return (
			<div className="p-1 ">
				<div className="flex justify-between items-center px-4">
					<div className="flex gap-2 ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M20 3v14a4 4 0 1 1-2-3.465V6H9v11a4 4 0 1 1-2-3.465V3h13z" />
						</svg>
						<div>
							<p className="font-semibold text-2xl tracking-wider text-gray-900 ">
								{song}
							</p>
							<p className="text-black-900 italic font-light">- {artist}</p>
							<p className="text-gray-800 px-2 font-light text-sm font-serif">
								{year}
							</p>
						</div>
					</div>
					<div>
						{this.state.openMenu && (
							<SongMenu
								onClick={this.handleClick}
								playlists={this.props.playlists}
								songId={this.props.song.id}
							/>
						)}
						<div
							className="text-3xl"
							onClick={() => this.setState({ openMenu: !this.state.openMenu })}
						>
							{this.state.openMenu ? <button>x</button> : <button>...</button>}
						</div>
					</div>
				</div>
				<hr className="my-6 dark:border-gray-800 opacity-50 " />
			</div>
		);
	}
}

export default Song;
