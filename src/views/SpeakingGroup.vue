<template>
  <v-container>
    <div class="speakings">
      <div class="speakings__head">
        <h5>Celt English A1</h5>
      </div>
      <v-row>
        <v-col
          cols="12"
          md="6"
          lg="4"
          v-for="(unit, index) in units"
          :key="index"
        >
          <div class="speakings__group-card">
            <p class="speakings__group-card--title">
              {{ unit.name }}
            </p>
            <v-btn
              icon
              class="speakings__group-card--actions"
              @click="openModal(unit)"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </div>
    <sp-dialog :dialog="speakingModal" :item="selectedItem"></sp-dialog>
  </v-container>
</template>

<script>
import api from "@/api";
import Dialog from "../components/Speaking-modal";
export default {
  components: {
    "sp-dialog": Dialog,
  },
  data() {
    return {
      units: api.units,
      speakingModal: false,
      selectedItem:{},
    };
  },

  mounted() {
    this.$root.$on("closeSpeakingModal", () => {
      this.closeModal();
    });
  },

  methods: {
    openModal(item) {
        this.selectedItem = item;
      this.speakingModal = true;
    },
    closeModal() {
      this.speakingModal = false;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>