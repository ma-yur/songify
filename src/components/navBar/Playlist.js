import React, { Component } from "react";
import { Link } from "react-router-dom";
import { removePlaylist } from "../../apis/PlaylistsApi";
import { editPlaylist } from "../../apis/PlaylistsApi";

export class Playlist extends Component {
	state = { onHover: false, isEditing: true, input: this.props.name };

	handleClick = (event) => {
		event.stopPropagation();
		event.preventDefault();
		removePlaylist(this.props.id);
		this.props.handleRemovePlaylist(this.props.id);
	};
	handleSubmit = (e) => {
		e.preventDefault();
		let data = { name: this.state.input };
		editPlaylist(this.props.id, data);
		this.props.handleUpdatePlaylist(this.props.id,this.state.input);
	};

	renderForm = () => {
		return (
			<form className="flex  gap-2 m-4" onSubmit={this.handleSubmit} action="">
				<input
					className="block w-5/6 rounded-lg px-2 py-1 relative focus:outline-none "
					value={this.state.input}
					required="required"
					onChange={(e) => {
						this.setState({ input: e.target.value });
					}}
					type="text"
				/>
				<div className="flex items-center gap-5">
					<div
						className="cursor-pointer font-bold "
						onClick={() => {
							this.setState({ isEditing: true });
						}}
					>
						X
					</div>
				</div>
			</form>
		);
	};

	render() {
		return (
			<>
				{this.state.isEditing ? (
					<Link
						to={`/playlist/${this.props.id}`}
						onDoubleClick={() => {
							this.setState({ isEditing: false });
						}}
						className="
						flex justify-between
						items-center
						px-4 py-2 mt-5
						text-gray-600
						rounded-md
						hover:bg-gray-200 hover:text-gray-700"
						onMouseEnter={(e) => {
							this.setState({ onHover: true });
						}}
						onMouseLeave={(e) => {
							this.setState({ onHover: false });
						}}
					>
						<div className="flex items-center">
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
						</div>
						{this.state.onHover && (
							<button
								onClick={this.handleClick}
								className="justify-self-center"
							>
								<svg
									class="w-4 h-6"
									fill="#a21112"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										fill-rule="evenodd"
										d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
										clip-rule="evenodd"
									></path>
								</svg>
							</button>
						)}
					</Link>
				) : (
					this.renderForm()
				)}
			</>
		);
	}
}

export default Playlist;
