import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Playlist extends Component {
	render() {
		return (
			<div>
				<Link
					to={`/playlist/${this.props.id}`}
					className="
    flex
    items-center
    px-4
    py-2
    mt-5
    text-gray-600
    transition-colors
    duration-200
    transform
    rounded-md
    dark:text-gray-400
    hover:bg-gray-200
    dark:hover:bg-gray-700 dark:hover:text-gray-200
    hover:text-gray-700
  "
					href="#"
				>
					<span className="mx-4 font-medium">{this.props.name}</span>
				</Link>
			</div>
		);
	}
}

export default Playlist;
