<script>
	export let name;

	const onDelete = (name) => {

		console.log(name);
	}

</script>
<span class="menu-item">
	<span class="is-clickable">{name}</span>
		<span class="icon is-clickable is-hidden">
			<ion-icon name="ellipsis-vertical-outline"></ion-icon>
		</span>
</span>

<span on:click={() => {onDelete(name)}}></span>


<style>
.icon
{
	margin-left: auto;
}

</style>
