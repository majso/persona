<script>
	import Folder from './Folder.svelte';
	import Modal from './Modal.svelte';
	import AddFile from './AddFile.svelte';

	let showModal = false;
	const triggerModal = () => {
		showModal = !showModal;
	}

	let files =[
		{
		type: 'file', 
		name: "Jozko" 
	},
	{
		type: 'file', 
		name: "Dezko" 
	}
	]

	const addFile = (e) => {

	console.log(e);
	}


</script>

<div class="column is-2">
	<aside class="menu is-hidden-mobile aside">
			<p class="menu-label">
				Dashboard
			</p>
			<p class="menu-label">
				Saved Webpages
			</p>
			<p class="menu-label">
				Notes
			</p>
			<p class="menu-label">
				Liked Articles
			</p>
			<div class="menu-label icon-text">
				Folders
				<span class="icon is-clickable">
					<ion-icon on:click={triggerModal} name="add-circle-outline"></ion-icon>
				</span>
			</div>
			<Modal {showModal} on:click={triggerModal}>
			</Modal>
			<Folder name="RSS Feeds" files={files} expanded />
			<p class="menu-label">
				Settings
			</p>
			<p class="menu-label">
				About
			</p>
			<p class="menu-label">
				Donate
			</p>
	</aside>
</div>

<style>

</style>