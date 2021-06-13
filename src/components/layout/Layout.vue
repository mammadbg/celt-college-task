<template>
  <v-app>
    <v-navigation-drawer width="300" v-model="drawer" app >
      <f-app-sidebar></f-app-sidebar>
    </v-navigation-drawer>

    <f-app-header v-model="drawer"></f-app-header>

    <v-main>
      <div class="f-readcrump-container">
        <v-breadcrumbs :items="breadcrumbs"></v-breadcrumbs>
      </div>
      <div class="f-page-container">
        <router-view></router-view>
      </div>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './Sidebar.vue';
import Header from './Header.vue';
import '@/styles/layout/_layout.scss';
import '@/styles/layout/_page.scss';
import {mapGetters} from 'vuex';

export default {
  data: () => ({
    drawer: true 
  }),
  watch: {
    drawer(){
      this.$eventHub.$emit('F_DRAWER', this.drawer);
    },
  },
  components: {
    'f-app-sidebar': Sidebar,
    'f-app-header': Header,
  },
  computed: {
    ...mapGetters({breadcrumbs: 'auth/breadcrumbs'})
  },
};
</script>
