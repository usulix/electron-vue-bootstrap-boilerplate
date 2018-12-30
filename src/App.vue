<template>
  <div class="w-100">
    <nav-drawer></nav-drawer>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  import NavDrawer from '~/components/NavDrawer'

  export default {
    components: {
      NavDrawer
    },
    data: () => ({
      //
    }),
    props: {
      source: String
    }
  }
</script>

<style>
  #inspire {
    width:100%;
  }

  .navigation-drawer__border {
    display: none;
  }

  .text {
    font-weight: 400;
  }
</style>

