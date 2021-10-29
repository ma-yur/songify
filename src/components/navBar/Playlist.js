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
						<path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zM10.622 8.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332z" />
					</svg>

					<span className="mx-4 font-medium">{this.props.name}</span>
				</Link>
			</div>
		);
	}
}

export default Playlist;
