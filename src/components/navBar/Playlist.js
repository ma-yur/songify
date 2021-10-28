import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Playlist extends Component {
	render() {
		return (
			<div>
				<Link
					to={`/playlist/${this.props.id}`}
					className="flex items-center
        px-4
        py-2
        mt-5
        text-gray-600
        rounded-md
        hover:bg-gray-200
        hover:text-gray-700"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="24"
						height="24"
					>
						<path fill="none" d="M0 0h24v24H0z" />
						<path d="M4 12h3a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7C2 6.477 6.477 2 12 2s10 4.477 10 10v7a2 2 0 0 1-2 2h-3a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h3a8 8 0 1 0-16 0z" />
					</svg>

					<span className="mx-4 font-medium">{this.props.name}</span>
				</Link>
			</div>
		);
	}
}

export default Playlist;
