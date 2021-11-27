<script>
	import Feed from './Feed.svelte';
	import Modal from './Modal.svelte';
	import AddFeed from './AddFeed.svelte';
	import {slide} from 'svelte/transition'
	
	export let expanded = false;
	export let name;
	export let feeds;

	function toggle() {
		expanded = !expanded;
	}

	let showModal = false;
	const triggerModal = () => {
		showModal = !showModal;
	}

</script>
<div class="menu-item">
	
	<span class="is-clickable" on:click={toggle}>
		<span class="icon">
			{#if expanded}
			<ion-icon name="arrow-down-circle-outline"></ion-icon>
			{:else}
			<ion-icon name="arrow-forward-circle-outline"></ion-icon>
			{/if}
		</span>
		<span class ="icon-text">{name}</span>
	</span>
	<span class="icon is-clickable">
		<ion-icon on:click={triggerModal} name="add-circle-outline"></ion-icon>
	</span>
</div>
<Modal {showModal} on:click={triggerModal}>
	<AddFeed />
</Modal>
{#if expanded}
	<ul transition:slide={{duration:300}}>
		{#each feeds as feed}
			<li>
				{#if feed.type === 'folder'}
					<svelte:self {...feed}/>
				{:else}
					<Feed {...feed} />
				{/if}
				
			</li>
		{/each}
	</ul>
{/if}

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
