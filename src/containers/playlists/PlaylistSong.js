import React, { Component } from "react";
import PlaylistMenu from "./PlaylistMenu";

export class PlaylistSong extends Component {
	state = { openMenu: false };

	render() {
		const { song, artist } = this.props.song;
		return (
			<div>
				<div className="p-1 ">
					<div className="flex justify-between items-center px-4">
						<div>
							<div className="flex gap-2 items-center">
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
									></path>
								</svg>
								<p className="font-semibold text-2xl tracking-wider text-gray-900 ">
									{song}
								</p>
							</div>
							<p className="text-black-900 italic font-light">- {artist}</p>
						</div>
						<div>
							{this.state.openMenu && (
								<PlaylistMenu
									onClick={this.handleClick}
									playlist={this.props.playlist}
									song={this.props.song}
									handleRemoveSong={this.props.handleRemoveSong}
								/>
							)}
							<div
								className="text-3xl"
								onClick={() =>
									this.setState({ openMenu: !this.state.openMenu })
								}
							>
								{this.state.openMenu ? (
									<button>x</button>
								) : (
									<button>...</button>
								)}
							</div>
						</div>
					</div>
					<hr className="my-6 dark:border-gray-800 opacity-50 " />
				</div>
			</div>
		);
	}
}

export default PlaylistSong;
