<script>
	export let name;

	const onDelete = (name) => {

		console.log(name);
	}

</script>

<span>{name}</span>
<span on:click={() => {onDelete(name)}}></span>



<style>
	span {
		padding: 0 0 0 1.5em;
		background: 0 0.1em no-repeat;
		background-size: 1em 1em;
	}
</style>