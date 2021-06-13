<template>
  <v-app>
    <router-view></router-view>
    <page-loader v-if="isPageLoading"></page-loader>
    <f-notification></f-notification>
  </v-app>
</template>

<script>
import pageLoader from './components/PageLoader.vue';
import Notification from './components/Common/Alert/Alert';
import {mapGetters} from 'vuex';

export default {
  name: 'App',
  components: {
    'page-loader': pageLoader,
    'f-notification': Notification
  },
  computed: {
    ...mapGetters({ isPageLoading: 'auth/pageLoading' }),
  },
};
</script>

<style>
.f-alert {
  z-index: 10000;
  position: absolute !important;
  top: 50% !important;
  right: 0;
}
</style>
