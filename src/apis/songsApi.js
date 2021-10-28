const getSongs = () => {
	return fetch("https://frozen-meadow-48409.herokuapp.com/v1/songs", {
		method: "GET",
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => data)
		.catch((err) => console.error(err));
};
const deleteSong = (id) => {
	fetch(`https://frozen-meadow-48409.herokuapp.com/v1/songs/${id}`, {
		method: "DELETE",
	}).catch((err) => console.error(err));
};
export { getSongs, deleteSong };
