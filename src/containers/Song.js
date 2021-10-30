import React, { Component } from "react";

import { editSong } from "../apis/songsApi";

import SongMenu from "./SongMenu";
import { deleteSong } from "../apis/songsApi";

export class Song extends Component {
	state = {
		openMenu: false,
		song: this.props.song.song,
		artist: this.props.song.artist,
		year: this.props.song.year,
		songEdit: false,
	};
	handleClick = () => {
		deleteSong(this.props.song.id);
		this.props.deleteSong(this.props.song.id);
	};
	handleSubmit = (e) => {
		e.preventDefault();
		let data = {
			song: this.state.song,
			artist: this.state.artist,
			year: this.state.year,
		};
		editSong(this.props.song.id, data).then(() => {
			this.props.updateSong(this.props.song.id, data);
		});
		this.setState({ songEdit: false });
	};

	renderForm = () => {
		return (
			<form onSubmit={this.handleSubmit}>
				<input
					type="text"
					value={this.state.song}
					onChange={(e) => {
						this.setState({ song: e.target.value });
					}}
					className="font-semibold text-2xl tracking-wider text-gray-900  px-2 focus:outline-none focus:shadow-outline bg-transparent"
				/>
				<input
					type="text"
					value={this.state.artist}
					onChange={(e) => {
						this.setState({ artist: e.target.value });
					}}
					className=" block text-black-900 italic font-light focus:outline-none focus:shadow-outline bg-transparent"
				/>
				<input
					type="text"
					value={this.state.year}
					onChange={(e) => {
						this.setState({ year: e.target.value });
					}}
					className="text-gray-800 block px-2 font-light text-sm font-serif focus:outline-none focus:shadow-outline bg-transparent "
				/>
				<div className="flex items-center gap-5 mt-3">
					<button className="bg-gray-400 px-1 rounded text-gray-200 hover:text-gray-500 hover:bg-gray-300 ">
						Save
					</button>
					<div
						className="cursor-pointer"
						onClick={() => {
							this.setState({ songEdit: !this.state.songEdit });
						}}
					>
						X
					</div>
				</div>
			</form>
		);
	};
	renderSong = () => {
		return (
			<div
				className="text-black-900 font-light"
				onDoubleClick={() => {
					this.setState({ songEdit: !this.state.editSong });
				}}
			>
				<p className="font-semibold text-2xl tracking-wider text-gray-900  px-2">
					{this.props.song.song}
				</p>
				<p className="block text-black-900 px-2 italic font-light">
					{this.props.song.artist}
				</p>
				<p className="text-gray-800 block px-2 font-light text-sm font-serif">
					{this.props.song.year}
				</p>
			</div>
		);
	};

	render() {
		return (
			<div className="p-1 ">
				<div className="flex justify-between items-center px-4">
					<div className="flex gap-2 ">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path d="M20 3v14a4 4 0 1 1-2-3.465V6H9v11a4 4 0 1 1-2-3.465V3h13z" />
						</svg>
						<div>
							{this.state.songEdit ? (
								<div>{this.renderForm()}</div>
							) : (
								<div>{this.renderSong()}</div>
							)}
						</div>
					</div>
					<div>
						{this.state.openMenu && (
							<SongMenu
								onClick={this.handleClick}
								playlists={this.props.playlists}
								songId={this.props.song.id}
							/>
						)}
						<div
							className="text-3xl"
							onClick={() => this.setState({ openMenu: !this.state.openMenu })}
						>
							{this.state.openMenu ? <button>x</button> : <button>...</button>}
						</div>
					</div>
				</div>
				<hr className="my-6 dark:border-gray-800 opacity-50 " />
			</div>
		);
	}
}

export default Song;
