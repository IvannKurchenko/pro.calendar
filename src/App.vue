<template>
  <h1>{{now}}</h1>
  <h1>{{month}}</h1>
  <h1>{{weekday}}</h1>
  <h1>{{weekNumber}}/{{weeksInWeekYear}}</h1>
  <h1>{{quarter}}</h1>

  <div class="columns">
    <div class="column is-one-quarter">quarter 1 months column</div>
    <div class="column is-one-quarter">quarter 2 months column</div>
    <div class="column is-one-quarter">quarter 2 months column</div>
    <div class="column is-one-quarter">quarter 2 months column</div>
  </div>
</template>

<script>

//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  data () {
    const { DateTime } = require("luxon");

    let dateTime = DateTime.now();
    let month = dateTime.month;
    let weekNumber = dateTime.weekNumber;
    let weeksInWeekYear = dateTime.weeksInWeekYear;
    let quarter = dateTime.quarter;


    return {
      now: DateTime.now(),
      month: month,
      weekNumber: weekNumber,
      weeksInWeekYear: weeksInWeekYear,
      weekday: dateTime.weekday,
      quarter: quarter
    }
  }
  /*components: {
    HelloWorld
  }*/
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";
#{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
