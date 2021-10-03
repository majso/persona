<script>
	import File from './File.svelte';
	import Modal from './Modal.svelte';
	import AddFile from './AddFile.svelte';
	import {slide} from 'svelte/transition'
	
	export let expanded = false;
	export let name;
	export let files;

	function toggle() {
		expanded = !expanded;
	}

	let showModal = false;
	const triggerModal = () => {
		showModal = !showModal;
	}

</script>
<div class="icon-text menu-item">
	<span class ="compressed" class:expanded on:click={toggle}>{name}</span>
	<span class="icon is-clickable">
		<ion-icon on:click={triggerModal} name="add-circle-outline"></ion-icon>
	</span>
</div>
<Modal {showModal} on:click={triggerModal}>
	<AddFile />
</Modal>
{#if expanded}
	<ul transition:slide={{duration:300}}>
		{#each files as file}
			<li>
				{#if file.type === 'folder'}
					<svelte:self {...file}/>
				{:else}
					<File {...file} />
				{/if}
				
			</li>
		{/each}
	</ul>
{/if}

<style>
	.compressed {
		padding: 0 0 0 1.5em;
		background: url(../icons/folder.svg) 0 0.1em no-repeat;
		background-size: 1em 1em;
		size: 12px;
		cursor: pointer;
	}

	.expanded {
		background-image: url(../icons/folder-open.svg);
	}

	ul {
		padding: 0.2em 0 0 0.5em;
		margin: 0 0 0 0.5em;
		list-style: none;
		border-left: 1px solid #d9dee1;
	}

	li {
		padding: 0.2em 0;
	}
</style>
