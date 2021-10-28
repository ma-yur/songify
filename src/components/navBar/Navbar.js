import React, { Component } from "react";
import AllSongs from "./AllSongs";
import Playlists from "./Playlists";

export class Navbar extends Component {
	render() {
		return (
			<div
				className="
    flex flex-col
    w-64
    h-screen
    px-4
    py-8
    bg-white
    border-r
    dark:bg-gray-800 dark:border-gray-600
  "
			>
				<h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
					Songify
				</h2>

				<div className="flex flex-col justify-between flex-1 mt-6">
					<nav>
						<AllSongs />
						<hr className="my-6 dark:border-gray-600" />
						<Playlists />
					</nav>
				</div>
			</div>
		);
	}
}

export default Navbar;
