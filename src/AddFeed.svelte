<script>
let file =
{
  id: 0,
  name: "",
  url: ""
}

const apiURL = "https://localhost:5001/api/items";

const onSubmit = () => {
const options = {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json'
    },
  body: JSON.stringify(file)
}
fetch(apiURL, options);

}

</script>

<form on:click|preventDefault={onSubmit}>
    <div class="field">
      <p class="control">
        <input class="input" type="text" placeholder="Name" bind:value={file.name}>
      </p>
    </div>
    <div class="field">
      <p class="control">
        <input class="input" type="text" placeholder="Url" bind:value={file.url}>
      </p>
    </div>
    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <!-- svelte-ignore a11y-missing-attribute -->
        <a type="submit" class="button is-primary">
          Add a new feed!
        </a>
      </p>
    </div>
</form>

