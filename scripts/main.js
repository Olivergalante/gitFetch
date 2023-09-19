"use strict";
const submitButton = document.getElementById("submitButton");

async function fetchGit(apifetch) {
	try {
		const response = await fetch(apifetch);
		const data = await response.json();
		const profileAvatar = data.avatar_url;
		const followers = data.followers;
		document.querySelector(
			"#avatarResults"
		).innerHTML = `<img src="${profileAvatar}"/>`;
		document.querySelector(
			"#followers"
		).innerHTML = `<p>Followers:"${followers}"</p>`;
		return data;
	} catch (error) {
		console.error(error);
	}
}

submitButton.addEventListener("click", function (event) {
	event.preventDefault();

	const gitHubNamespace = document.querySelector("#gitHubName").value;
	const gitHubName = gitHubNamespace.split(" ").join("");
	const apifetch = `https://api.github.com/users/${gitHubName}`;
	console.log(apifetch);

	fetchGit(apifetch);
});
