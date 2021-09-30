<script>
	import { createEventDispatcher } from "svelte";

	export let name;
	$: type = name.slice(name.lastIndexOf('.') + 1);


    const dispatch = createEventDispatcher();
	const onDelete = () => dispatch("removefile", name);

</script>

<span style="background-image: url(icons/{type}.svg)">{name}</span>
<button class="button" on:click={onDelete}>x</button>

<style>
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
	}
</style>