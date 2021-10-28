import React, { Component } from "react";

export class MenuItem extends Component {
	handleClick = () => {};
	render() {
		return (
			<div className="flex items-center justify-between ">
				<p>{this.props.playlist.name}</p>
				<p onClick={this.handleClick}>+</p>
			</div>
		);
	}
}

export default MenuItem;
