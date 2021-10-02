<script>
	import Folder from './Folder.svelte';
	import Modal from './Modal.svelte';


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

<div class="column is-3">
	<aside class="menu is-hidden-mobile aside">
		<p class="menu-label">
			Dashboard
		</p>
		<p class="menu-label">
			Feeds
		</p>
		<Modal modalContent='<AddFile on:addfile={addFile}'/>

		<Folder name="Subscriptions" files={files} expanded />
		<p class="menu-label">
			Settings
		</p>
	</aside>
</div>
