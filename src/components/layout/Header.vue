<template>
  <v-app-bar app color="#fff" dark elevation="0" style="z-index:1000; border-bottom: 1px solid #dadada">
    <v-row>
      <v-col>
        <v-app-bar-nav-icon @click.stop="closeMenu" color="primary"></v-app-bar-nav-icon>
      </v-col>
      <v-col class="d-flex align-center justify-end">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }" v-if="user">
            <v-btn elevation="0" color="#0081B8" dark v-bind="attrs" v-on="on">
              {{ user.firstName }} {{ user.lastName }}
              <v-icon class="ml-5">mdi-chevron-down</v-icon>
            </v-btn>
          </template>
          <v-list>
            <v-list-item @click="signOut">
              <v-list-item-title>Çıxış</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data: () => ({
    drawer: null,
  }),
  props: {
    value: Boolean,
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout',
    }),
    closeMenu() {
      this.drawer = !this.drawer;
      this.$emit('input', this.drawer);
    },
    closeSideBarForGlobal() {
      this.drawer = false;
      this.$emit('input', this.drawer);
    },
    signOut() {
      this.logout({ userId: this.user.id, refreshToken: this.refreshToken });
    },
    initDrawer(val) {
      this.drawer = val;
    },
  },
  computed: {
    ...mapGetters({
      user: 'auth/userData',
      refreshToken: 'auth/refreshToken',
    }),
  },
  mounted() {
    this.initDrawer(this.value);
    this.$root.$on('closeSideBarMenu', () => {
      this.closeSideBarForGlobal();
    });
  },
  created() {
    this.$eventHub.$on('F_DRAWER', this.initDrawer);
  },
  beforeDestroy() {
    this.$eventHub.$off('F_DRAWER', this.initDrawer);
    this.$root.$off('closeSideBarMenu');
  },
};
</script>
