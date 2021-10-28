import React, { Component } from "react";
import MenuItem from "./MenuItem";

export class AddToPlaylists extends Component {
	renderPlaylists = () => {
		return this.props.playlists.map((playlist) => {
			return <MenuItem key ={playlist.id} playlist={playlist} />;
		});
	};
	render() {
		return <div>{this.props.playlists&&this.renderPlaylists()}</div>;
	}
}

export default AddToPlaylists;
