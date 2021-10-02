<script>
    export let modalContent;
    let showModal;

</script>

{#if showModal}
<div class="modal is-active">
        <div class="modal-content">
            {modalContent}
        </div>
    <button class="modal-close is-large" aria-label="close"></button>
  </div>
{/if}

