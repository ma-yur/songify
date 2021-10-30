import React, { Component } from "react";
import Playlist from "./Playlist";
import AddPlaylists from "./AddPlaylists";

export class Playlists extends Component {
	renderPlayLists = () => {
		return this.props.playlists.map((playlist) => {
			return (
				<Playlist
					handleRemovePlaylist={(playlist) =>
						this.props.handleRemovePlaylist(playlist)
					}
					handleUpdatePlaylist={(id,playlist) =>
						this.props.handleUpdatePlaylist(id,playlist)
					}
					key={playlist.id}
					id={playlist.id}
					name={playlist.name}
				/>
			);
		});
	};

	render() {
		return (
			<div>
				<div className="flex items-center gap-2 pb-5">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24"
						height="24"
					>
						<path fill="none" d="M0 0H24V24H0z" />
						<path d="M22 18v2H2v-2h20zM2 3.5l8 5-8 5v-10zM22 11v2H12v-2h10zm0-7v2H12V4h10z" />
					</svg>
					<p className="text-xl font-bold">Your Playlists</p>
				</div>

				<AddPlaylists
					addPlaylist={(playlist) => this.props.handleAddPlaylist(playlist)}
				/>

				<div className="  w-full rounded-lg p-3 scrollbar-track-rounded-full overflow-auto scrollbar-thin scrollbar-thumb-rounded-full  scrollbar-thumb-black scrollbar-track-pink-200 h-96 ">
					{this.renderPlayLists()}
				</div>
			</div>
		);
	}
}

export default Playlists;
