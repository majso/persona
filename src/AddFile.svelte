<script>
let file =
{
	type: 'file', 
  name: "" 
}

const onSubmit = (e) => {

console.log(e);
}

</script>

<form on:click={() => {onSubmit(file.name)}} class="">
    <input type="text" placeholder="Name" bind:value={file.name}>
    <input type="submit" class="button" value="Add Subscription">
</form>
