<script>
	import Menu from './components/Menu.svelte';
	import Content from './components/Content.svelte';
	import Modal from './components/Modal.svelte';

	
	let showModal = false;
	const triggerModal = () => {
		showModal = !showModal;
	}
	
</script>
<svelte:head>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
  />
</svelte:head>
<main>
	<div class="columns">
		<Modal {showModal} on:click={triggerModal} />
		<Menu />
		<Content />
	</div>
</main>
