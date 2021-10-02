<script>
	import Menu from './Menu.svelte';
	import Content from './Content.svelte';
	import Navbar from './Navbar.svelte';
	import CustomMenu from './CustomMenu.svelte';

</script>
<svelte:head>
  <link
    rel="stylesheet"
    type="text/css"
    href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css"
  />
</svelte:head>
<Navbar />
<div class="container">
	<CustomMenu />
	<div class="columns">
		<Menu />
		<Content />
	</div>
</div>
<style>
</style> 