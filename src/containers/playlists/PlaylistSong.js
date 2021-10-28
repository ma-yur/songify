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
							<p className="font-semibold text-2xl tracking-wider text-gray-900 ">
								{song}
							</p>
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
