<template>
  <div>
    <new-file-modal></new-file-modal>
    <div class="pt-2">
      <b-button-toolbar key-nav  aria-label="Toolbar with button groups">
        <b-button-group class="mx-1">
          <b-btn v-b-modal.newfilemodal>New</b-btn>
        </b-button-group>
      </b-button-toolbar>
    </div>
    <div>
      content pane
    </div>
  </div>
</template>
<script>
  import NewFileModal from '~/components/file/NewFileModal'

  export default {
    components: {
      NewFileModal
    }
  }
</script>

