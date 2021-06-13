<template>
  <aside class="f-sidebar">
    <div class="f-sidebar__header">
      <img class="f-sidebar__header--image" src="@/assets/images/logo.png" alt="celt colleges" />
    </div>
    <div class="f-sidebar__content">
      <f-app-menu></f-app-menu>
    </div>
  </aside>
</template>

<script>
import Menu from './Menu.vue';

export default {
  components: {
    'f-app-menu': Menu,
  },
};
</script>
