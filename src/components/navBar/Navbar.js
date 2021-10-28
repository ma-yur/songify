import React, { Component } from "react";
import AllSongs from "./AllSongs";
import Playlists from "./Playlists";

export class Navbar extends Component {
	render() {
		return (
			<div
				class="
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
				<h2 class="text-3xl font-semibold text-gray-800 dark:text-white">
					Songify
				</h2>

				<div class="flex flex-col justify-between flex-1 mt-6">
					<nav>
						<AllSongs />
						<hr class="my-6 dark:border-gray-600" />
						<Playlists />
					</nav>
				</div>
			</div>
		);
	}
}

export default Navbar;
