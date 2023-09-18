"use strict";
const submitButton = document.getElementById("submitButton");

async function fetchGit(apifetch) {
	try {
		const response = await fetch(apifetch);
		const data = await response.json();
		console.log(data);
		return data;
	} catch (error) {
		console.error(error);
	}
}

submitButton.addEventListener("click", function (event) {
	event.preventDefault();

	const gitHubName = document.querySelector("#gitHubName").value;
	const apifetch = `https://api.github.com/users/${gitHubName}`;
	console.log(apifetch);
	fetchGit(apifetch);
});
