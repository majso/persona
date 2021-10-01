<script>
import { createEventDispatcher} from 'svelte';

const dispatch = createEventDispatcher();



let file =
{
	type: 'file', 
  name: "" 
}

const onSubmit = e => {
    e.preventDefault();
    dispatch("addfile", file);
    file = {
      type: 'file', 
      name: "" 
    };
  };
</script>

<form on:submit={onSubmit} class="">
    <input type="text" placeholder="Name" bind:value={file.name}>
    <input type="submit" class="button" value="Add Subscription">
</form>
