import React, { Component } from "react";

export class Song extends Component {
	render() {
		const { song, artist, year } = this.props.song;
		return (
			<div className="p-1">
				<div className = "px-4">
					<p className="font-semibold text-xl tracking-wider">{song}</p>
					<p className="text-black-900 italic font-light">- {artist}</p>
					<p className="text-gray-600 px-2 font-light text-sm font-serif">
						{year}
					</p>
				</div>
				<hr class="my-6 dark:border-gray-800 opacity-50" />
			</div>
		);
	}
}

export default Song;
