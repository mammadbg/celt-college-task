<template>
  <v-list dark rounded class="f-menu py-0 px-0">
      <v-list-item-group v-model="model">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="goToRoute(item)"
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon" color="grey lighten-1"></v-icon>
          </v-list-item-icon>
          <v-list-item-content color="grey darken-4">
            <v-list-item-title v-text="item.title" color="grey darken-4"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
  </v-list>
</template>

<script>
import global from '@/common/global';
import api from '@/api'
export default {
  data: () => ({
    items: api.categories,
    model:1,
  }),
  mixins: [global],
  methods: {
    getUrlBindings(item) {
      console.log('geturlbindings')
      
      let bindings = {};
      if (item.hasExternalLink) {
        bindings.href = item.url;
        bindings.target = '_blank';
        return bindings;
      }
      bindings.to = item.url;
      return bindings;
    },
    goToRoute(item){
      console.log(item.url);
      // this.$route.path = item.url;
      console.log(this.$route);
      this.$router.push(item.url)
      
    }
  },
};
</script>


