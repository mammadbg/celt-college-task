<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="480"
      class="speakings-modal"
    >
      <v-card>
        <v-card-title class="pl-4">
          <h6 class="font-weight-medium">Speakings</h6>
        </v-card-title>
        <v-card-text>
          <div class="speakings-modal__body">
            <div class="speakings-modal__body--item">
              <div class="name">Title</div>
              <div class="value">{{ item.name }}</div>
            </div>
            <div class="speakings-modal__body--item">
              <div class="name">Question</div>
              <div class="value">
                <div class="question">
                  <div class="question__header">
                    <p class="question__header--title">Talk about:</p>
                    <div class="question__header--name">
                      {{ item.talkAbout }}
                    </div>
                  </div>
                  <div class="question__points">
                    <ol>
                      <li
                        v-for="(point, index) in item.points"
                        :key="index + 123"
                      >
                        {{ point }}
                      </li>
                    </ol>
                  </div>
                  <div class="question__talk-around">
                    <p>Please, talk around</p>
                    <p>
                      {{ item.talkAround }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="speakings-modal__body--recording">
              <div class="select-box">
                <v-select
                  :items="recordingOptions"
                  dense
                  solo
                  hide-details
                ></v-select>
              </div>
              <div class="select-icon">
                <v-btn class="mx-2" fab dark small depressed color="teal">
                  <v-icon>mdi-microphone</v-icon>
                </v-btn>
              </div>
            </div>
          </div>
        </v-card-text>
        <v-card-actions color="red" class="pt-5">
          <v-btn @click="closeModal()" small color="error" dense depressed>
            Close
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="warning" small @click="dialog = false">
            delete recording
          </v-btn>
          <v-btn color="success" small @click="dialog = false"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "speakings-modal",
  data() {
    return {
      loading: false,
      recordingOptions: ["Record", "Listen", "Do Something"],
    };
  },
  methods: {
    closeModal() {
      this.$root.$emit("closeSpeakingModal");
      this.loading = false;
    },
  },
  props: {
    dialog: Boolean,
    item: Object,
  },
};
</script>
