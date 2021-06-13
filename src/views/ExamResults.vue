<template>
  <div class="pt-5">
    <template>
      <v-card class="exam-results-card">
        <v-card-title>
          <h5 class="w-100">Exam results</h5>
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
          ></v-text-field>
        </v-card-title>
        <v-data-table
          :loading="loading"
          :headers="headers"
          :items="results"
          :search="search"
        >
          <template v-slot:item.result="{ item }">
            <v-chip class="ma-2" color="green" text-color="white" small v-if="!item.result">Passed</v-chip>
            <v-chip class="ma-2" color="red" text-color="white" small v-if="item.result">
              Failed
            </v-chip>
          </template>
          <template v-slot:item.actions="{ item }">
              <span class="data-table-actions" @click="previewItemDetails(item)">
                  <v-icon color="#fff">mdi-eye</v-icon>
              </span>
          </template>
        </v-data-table>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Name",
          align: "start",
          filterable: false,
          value: "name",
        },
        { text: "Date", value: "date" },
        { text: "Result", value: "result" },
        { text: "Points", value: "points" },
        { text: "Classes", value: "classes" },
        { text: "Time", value: "time" },
        { text: "Actions", value: "actions" },
      ],
      results: [
        {
          name: "A1+ End of course A",
          date: "19/01/2021",
          result: false,
          points: 30,
          classes: "CELT English A1",
          time: '6 min',
          actions: true,
        },
        {
          name: "B1+ End of course A",
          date: "20/01/2021",
          result: false,
          points: 40,
          classes: "CELT English A1",
          time: '6 min',
          actions: true,
        },
        {
          name: "C1+ End of course A",
          date: "21/01/2021",
          result: false,
          points: 50,
          classes: "CELT English A1",
          time: '6 min',
          actions: true,
        },
        {
          name: "D1+ End of course A",
          date: "22/01/2021",
          result: true,
          points: 60,
          classes: "CELT English A1",
          time: '6 min',
          actions: true,
        },
        {
          name: "E1+ End of course A",
          date: "23/01/2021",
          result: true,
          points: 70,
          classes: "CELT English A1",
          time: '6 min',
          actions: true,
        },
        {
          name: "F1+ End of course A",
          date: "24/01/2021",
          result: true,
          points: 80,
          classes: "CELT English A1",
          time: '6 min',
          actions: true,
        },
      ],
      loading: true,
    };
  },
  methods:{
      previewItemDetails(item){
          console.log(item.actions);
      }
  },
  created(){
      setTimeout(this.loading = false, 3000)
  }
};
</script>
