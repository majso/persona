<script>
     export let showModal = false;
</script>

<div class="modal" class:is-active={showModal}>
    <div class="modal-background" on:click></div>
        <div class="modal-content box">
            <slot></slot>
        </div>
    <button class="modal-close is-large" aria-label="close" on:click></button>
</div>


