import React, { Component } from "react";
import AllSongs from "./AllSongs";
import Playlists from "./Playlists";

export class Navbar extends Component {
	// playlists = (playlists) => {
	// 	this.props.playlists(playlists);
	// };

	render() {
		return (
			<div
				className="
    flex flex-col
    w-64
    h-screen
    px-4
    py-8
		backdrop-filter backdrop-blur-2xl bg-gray-300 
		bg-opacity-20
		shadow-xl
  "
			>
				<div
					onClick={this.props.handleClick}
					className=" cursor-pointer absolute top-3 right-6"
				>
					<svg
						class="w-9 h-9"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
							clip-rule="evenodd"
						></path>
					</svg>
				</div>
				<h2 className="text-3xl flex  items-center gap-2 font-semibold text-gray-800 dark:text-white">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						width="30"
						height="50"
					>
						<path fill="none" d="M0 0h24v24H0z" />
						<path d="M20 22H6.5A3.5 3.5 0 0 1 3 18.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zm-1-2v-3H6.5a1.5 1.5 0 0 0 0 3H19z" />
					</svg>
					<p>Songify</p>
				</h2>

				<div className="flex flex-col justify-between flex-1 mt-6">
					<nav>
						<AllSongs />
						<hr className="my-6 dark:border-gray-600" />
						<Playlists
							playlists={this.props.playlists}
							handleAddPlaylist={(playlist) => this.props.addPlaylist(playlist)}
						/>
					</nav>
				</div>
			</div>
		);
	}
}

export default Navbar;
