<script>
	import Menu from './Menu.svelte';
	import Content from './Content.svelte';
	import Modal from './Modal.svelte';

	
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
		<Menu />
		<Content />
		<Modal {showModal} on:click={triggerModal}>
		</Modal>
	</div>
</main>
