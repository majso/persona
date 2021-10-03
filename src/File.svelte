<script>
	export let name;

	const onDelete = (name) => {

		console.log(name);
	}

</script>

<span class="menu-item">{name}</span>
<span on:click={() => {onDelete(name)}}></span>



