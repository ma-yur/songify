const getPlaylists = () => {
	return fetch("https://frozen-meadow-48409.herokuapp.com/v1/playlists", {
		method: "GET",
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => data)
		.catch((err) => console.error(err));
};
const getPlaylist = (id) => {
	return fetch(`https://frozen-meadow-48409.herokuapp.com/v1/playlists/${id}`, {
		method: "GET",
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => data)
		.catch((err) => console.error(err));
};
const createPlaylist = (data) => {
	return fetch(`https://frozen-meadow-48409.herokuapp.com/v1/playlists/`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => data)
		.catch((err) => console.error(err));
};
const editPlaylist = (id, data) => {
	return fetch(`https://frozen-meadow-48409.herokuapp.com/v1/playlists/${id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => data)
		.catch((err) => console.error(err));
};
const removePlaylist = (id) => {
	return fetch(`https://frozen-meadow-48409.herokuapp.com/v1/playlists/${id}`, {
		method: "DELETE",
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => data)
		.catch((err) => console.error(err));
};
export {
	getPlaylists,
	getPlaylist,
	createPlaylist,
	removePlaylist,
	editPlaylist,
};
