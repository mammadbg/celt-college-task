<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="6" lg="4">
        <v-card elevation="2" height="300" class="dashboard--card">
          <v-card-title> <h5>HomeWork ToDo</h5> </v-card-title>
          <v-list>
            <v-list-item
              class="pt-0"
              dense
              v-for="todo in todos"
              :key="todo.title"
            >
              <v-list-item-content>
                <v-list-item-title class="text-bold">{{
                  todo.title
                }}</v-list-item-title>
                <v-list-item-subtitle> {{ todo.group }} </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-card-actions>
            <router-link to="/dummyPage">View All</router-link>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="4">
        <v-card elevation="2" height="300" class="dashboard--card">
          <v-card-title> <h5>Essay Reviews</h5> </v-card-title>
          <v-list dense class="essay-review-card__list">
            <v-list-item-group color="primary">
              <v-list-item v-for="(item, i) in essays" :key="i">
                <v-list-item-icon>
                  <span class="list-order-mark"></span>
                  <v-icon color="green" v-if="item.passed"
                    >mdi-sticker-check-outline</v-icon
                  >
                  <v-icon color="error" v-if="!item.passed"
                    >mdi-alert-circle-outline</v-icon
                  >
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.review"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <v-card-actions>
            <router-link to="/dummyPage">View All</router-link>
          </v-card-actions>
        </v-card>
      </v-col>

      <v-col cols="12" md="6" lg="4">
        <v-card elevation="2" height="300" class="dashboard--card">
          <v-card-title> <h5>Speaking Reviews</h5> </v-card-title>
          <v-list dense class="speaking-review-card__list">
            <v-list-item-group color="primary">
              <v-list-item v-for="(item, i) in speaking" :key="i">
                <v-list-item-icon>
                  <span>{{
                    item.reviewer
                      .split(/\s/)
                      .reduce(
                        (response, word) => (response += word.slice(0, 1)),
                        ""
                      )
                  }}</span>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.review"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="item.time"
                    class="text-end"
                  ></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>

          <v-card-actions>
            <router-link to="/speakings">View All</router-link>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <div class="dashboard__lower--cards">
      <v-row class="px-4">
        <v-col cols="12" md="6" lg="4" v-for="(cat, index) in categories" :key="index">
          <v-card height="100" class="mb-2" @click="gotoCategoryPage(cat)">
            <v-card-title>
              <v-icon color="#1e398f">{{ cat.icon }}</v-icon>
            </v-card-title>
            <div class="card__name">
              {{cat.title}}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
// import pageLoader from './components/PageLoader.vue';
import api from "@/api";
export default {
  data() {
    return {
      todos: api.homeworks.slice(0, 3),
      essays: api.essays.slice(0, 4),
      speaking: api.speaking.slice(0, 4),
      categories: [],
    };
  },
  methods: {
    gotoAllHomeworks() {
      console.log("bapbarabap");
    },
    filterCategories() {
      let array = api.categories;
      let filteredArray = [];
      for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.inDashboard == true) {
          filteredArray.push(element);
        }
      }
      this.categories = filteredArray;
    },
    gotoCategoryPage(cat){
      this.$router.push(cat.url)
    }
  },
  created() {
    this.filterCategories();
  },
};
</script>