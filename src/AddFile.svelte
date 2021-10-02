<script>
let file =
{
  name: "",
  url: ""
}

const onSubmit = () => {

console.log(file.name, file.url);
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

