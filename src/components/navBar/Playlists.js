import React, { Component } from "react";
import Playlist from "./Playlist";
import AddPlaylists from "./AddPlaylists";

export class Playlists extends Component {
	// handleAddPlaylist = (playlist) => {
	// 	this.setState({ playlists: [...this.state.playlists, playlist] });
	// };
	renderPlayLists = () => {
		return this.props.playlists.map((playlist) => {
			return (
				<Playlist key={playlist.id} id={playlist.id} name={playlist.name} />
			);
		});
	};

	render() {
		return (
			<div>
				<div className="flex items-center gap-2">
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
				<div className="  w-full rounded-lg my-7 p-3 scrollbar-track-rounded-full overflow-auto scrollbar-thin scrollbar-thumb-rounded-full  scrollbar-thumb-black scrollbar-track-green-200 h-96 ">
					{this.renderPlayLists()}
				</div>
				<AddPlaylists
					addPlaylist={(playlist) => this.props.handleAddPlaylist(playlist)}
				/>
			</div>
		);
	}
}

export default Playlists;
