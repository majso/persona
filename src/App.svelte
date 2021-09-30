<script>
	import Folder from './Folder.svelte';
	import AddFile from './AddFile.svelte';

	let files = [
	];

	const addFile = e => {
    	const newFile = e.detail;
    		files = [...files, newFile];
  	};

</script>

<main>
	<div class="container">
		<h1>Hello .persona!</h1>
		<p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
		
		<AddFile on:addfile={addFile} />
		<Folder name="Subscriptions" files={files} expanded />

	</div>
</main>

<style>

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.container {
		padding: 8px;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style> 