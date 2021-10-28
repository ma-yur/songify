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
export { getPlaylists };
