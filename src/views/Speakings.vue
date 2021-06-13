<template>
  <v-container>
    <div class="speakings">
      <div class="speakings__head">
        <h5>Speakings</h5>
      </div>
      <v-row>
        <v-col cols="12" md="6" lg="4" v-for="(group,index) in groups" :key="index">
          <div class="speakings__card" @click="gotoGroup()">
            <div class="speakings__card--image">
              <img :src="group.image" :alt="group.image" />
            </div>
            <p class="speakings__card--title">
                {{group.name}}
            </p>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import api from "@/api";
export default {
  data() {
    return {
      groups: api.speakingGroups,
    };
  },

  mounted() {},

  methods: {
      gotoGroup(){
          this.$router.push('/speakingGroup')
      }
  },
};
</script>

<style lang="scss" scoped>
</style>