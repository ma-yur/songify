import React, { Component } from "react";
import AllSongs from "./AllSongs";
import Playlists from "./Playlists";
import AddPlaylists from "./AddPlaylists";

export class Navbar extends Component {
	playlists = (playlists) => {
		this.props.playlists(playlists);
	};

	render() {
		return (
			<div
				className="
    flex flex-col
    w-64
    h-screen
    px-4
    py-8
		backdrop-filter backdrop-blur-sm bg-gray-300 
		bg-opacity-25
  "
			>
				<h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
					Songify
				</h2>

				<div className="flex flex-col justify-between flex-1 mt-6">
					<nav>
						<AllSongs />
						<hr className="my-6 dark:border-gray-600" />
						<Playlists playlists={this.playlists} />
						<AddPlaylists />
					</nav>
				</div>
			</div>
		);
	}
}

export default Navbar;
