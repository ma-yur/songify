import React, { Component } from "react";
import { Link } from "react-router-dom";

export class AllSongs extends Component {
	render() {
		return (
			<Link
				to="/"
				className="
          flex
          items-center
          px-4
          py-2
          text-gray-700
          rounded-md
        "
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					width="24"
					height="24"
				>
					<path fill="none" d="M0 0h24v24H0z" />
					<path d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM4 5v14h16V7h-8.414l-2-2H4zm7 8.05V9h5v2h-3v4.5a2.5 2.5 0 1 1-2-2.45z" />
				</svg>

				<span className="mx-4 font-medium">Your songs</span>
			</Link>
		);
	}
}

export default AllSongs;
