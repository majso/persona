<script>
	import Folder from './Folder.svelte';
	import Modal from './Modal.svelte';
	import AddFile from './AddFile.svelte';
	import { onMount } from "svelte";

	let showModal = false;
	const triggerModal = () => {
		showModal = !showModal;
	}
	let files = []
	const apiURL = "https://localhost:5001/api/items";
	onMount(async function() {
        const response = await fetch(apiURL);
        files = await response.json();
    });


	const addFile = (e) => {

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
				<span class="icon is-clickable">
					<ion-icon on:click={triggerModal} name="add-circle-outline"></ion-icon>
				</span>
			</div>
			<Modal {showModal} on:click={triggerModal}>
			</Modal>
			<Folder name="RSS Feeds" files={files} expanded />
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
	.icon
	{
		margin-left: auto;
	}
</style>