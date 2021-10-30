import React, { Component } from "react";
import MenuItem from "./MenuItem";

export class AddToPlaylists extends Component {
	renderPlaylists = () => {
		return this.props.playlists.map((playlist) => {
			return (
				<MenuItem
					key={playlist.id}
					songId={this.props.songId}
					playlist={playlist}
				/>
			);
		});
	};
	render() {
		return <div
		className="h-20 scrollbar-track-rounded-full overflow-auto scrollbar-thin scrollbar-thumb-rounded-full  scrollbar-thumb-black scrollbar-track-red-200"
		>{this.props.playlists && this.renderPlaylists()}</div>;
	}
}

export default AddToPlaylists;
