<template>
  <nav class="navbar">
    <div class="container">
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>
          <a class="navbar-item">
            Documentation
          </a>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-dark">Github</a>
              <a class="button is-link">Download</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <section class="hero is-fullheight-with-navbar ">
    <div class="hero-body">
      <div class="container">
        {{ now }}
        <div class="columns is-centered is-flex-grow-1">
          <div class="column" v-bind:key="halfNumber" v-bind:value="halfNumber" v-for="halfNumber in halfNumbers">
            <HalfComponent v-bind:year="year" v-bind:half="halfNumber">
            </HalfComponent>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import HalfComponent from "./components/HalfComponent";

export default {
  name: 'App',
  data() {
    const {DateTime} = require("luxon");

    let now = DateTime.now();
    let dateTime = DateTime.now();
    let month = dateTime.month;
    let weekNumber = dateTime.weekNumber;
    let weeksInWeekYear = dateTime.weeksInWeekYear;
    let quarter = dateTime.quarter;
    let halfNumbers = [1, 2];

    return {
      now: DateTime.now(),
      year: now.year,
      month: month,
      weekNumber: weekNumber,
      weeksInWeekYear: weeksInWeekYear,
      weekday: dateTime.weekday,
      quarter: quarter,
      halfNumbers: halfNumbers
    }
  },

  components: {
    HalfComponent
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css";

#app{
  font-size: 10px;
}

#{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.is-text-align-center {
  text-align: center;
}
</style>
