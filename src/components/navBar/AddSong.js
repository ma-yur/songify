import React, { Component } from "react";
import { Link } from "react-router-dom";

export class AddSong extends Component {
	render() {
		return (
			<Link
				to="/newsong"
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
					className="w-6 h-10"
					fill="black"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
						clipRule="evenodd"
					></path>
				</svg>

				<span className="mx-4 font-medium">Add Song</span>
			</Link>
		);
	}
}

export default AddSong;
