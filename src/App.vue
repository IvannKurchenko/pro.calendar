<template>
  <nav class="navbar">
    <div class="container">
      <div id="navMenu" class="navbar-menu">
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a href="https://github.com/IvannKurchenko/pro.calendar">
                <img src="gihub-icon.png">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>

  <section class="hero is-fullheight-with-navbar ">
    <div class="hero-body">
      <div class="container">
        <div class="">
          <div>
            <h1 class="title is-2 m-2 is-text-align-center">Y{{ year }}</h1>
          </div>
          <div class="columns is-centered is-flex-grow-1">
            <div class="column">
              <h1 class="title is-5 m-2 is-text-align-center">Left in Year</h1>
              <div class="columns">
                <div class="column"><h1 class="subtitle is-6">Weeks: {{ yearWeeksLeft }}</h1></div>
                <div class="column"><h1 class="subtitle is-6">Work days: {{ yearWorkDaysLeft }}</h1></div>
                <div class="column"><h1 class="subtitle is-6">Weekends days: {{ yearWeekendsDaysLeft }}</h1></div>
              </div>
            </div>
            <div class="column">
              <h1 class="title is-5 m-2 is-text-align-center">Left in Quarter</h1>
              <div class="columns">
                <div class="column"><h1 class="subtitle is-6">Weeks: {{ yearWeeksLeft }}</h1></div>
                <div class="column"><h1 class="subtitle is-6">Work days: {{ yearWorkDaysLeft }}</h1></div>
                <div class="column"><h1 class="subtitle is-6">Weekends days: {{ yearWeekendsDaysLeft }}</h1></div>
              </div>
            </div>
          </div>
        </div>
        <div class="columns is-centered is-flex-grow-1">
          <div class="column" v-bind:key="half" v-bind:value="half" v-for="half in halfs">
            <HalfComponent v-bind:half="half">
            </HalfComponent>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import HalfComponent from "./components/HalfComponent";
import Year from "./models/Year";

export default {
  name: 'App',
  data() {
    const {DateTime} = require("luxon");

    let now = DateTime.now();
    let yearWeeksLeft = now.weeksInWeekYear - now.weekNumber;
    let yearWorkDaysLeft = "TODO";
    let yearWeekendsDaysLeft = "TODO";

    let year = new Year(now.year);

    return {
      year: year,
      yearWeeksLeft: yearWeeksLeft,
      yearWorkDaysLeft: yearWorkDaysLeft,
      yearWeekendsDaysLeft: yearWeekendsDaysLeft,
      halfs: year.halfs()
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

.zero-opacity {
  opacity: 0;
}

.border-none {
  border: none !important;
}
</style>
