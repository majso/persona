<script>
	import Folder from './Folder.svelte';
	import { onMount } from "svelte";


	let feeds = []
	const apiURL = "https://localhost:5001/api/feeds";
	onMount(async function() {
        const response = await fetch(apiURL);
        feeds = await response.json();
    });


	const addFeed = (e) => {

	console.log(e);
	}


</script>

<div class="column is-2">
	<aside class="menu is-hidden-mobile aside">
		<ul>
			<li class="menu-label">
				Dashboard
			</li>
			<li class="menu-label">
				Saved Webpages
			</li>
			<li class="menu-label">
				Notes
			</li>
			<li class="menu-label">
				Liked Articles
			</li>
			<div class="menu-label icon-text">
				Folders
			</div>
			<Folder name="RSS Feeds" feeds={feeds} expanded />
			<li class="menu-label">
				Settings
			</li>
			<li class="menu-label">
				About
			</li>
			<li class="menu-label">
				Donate
			</li>
		</ul>
	</aside>
</div>

<style>
	ul {
		padding: 0.2em 0 0 0.5em;
		margin: 0 0 0 0.7em;
		list-style: none;
		border-left: 1px solid #d9dee1;
	}

	li {
		padding: 0.2em 0;
	}

</style>