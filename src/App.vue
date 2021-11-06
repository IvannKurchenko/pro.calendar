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
            <h1 class="title is-2 m-2 is-text-align-center">Y{{ year.value }}</h1>
          </div>
          <div class="columns is-centered is-flex-grow-1 m-2">
            <div class="column">
              <SummaryComponent v-bind:summary="summary"></SummaryComponent>
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
import CalendarYear from "./models/CalendarYear";
import SummaryComponent from "./components/SummaryComponent";

export default {
  name: 'App',
  data() {
    const {DateTime} = require("luxon");

    let now = DateTime.now();
    let year = new CalendarYear(now.year);

    return {
      year: year,
      summary: year.summary(),
      halfSummary: year.currentHalf().summary(),
      halfs: year.halfs()
    }
  },

  components: {
    HalfComponent,
    SummaryComponent
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

.min-width-150 {
  min-width: 150px;
}
</style>
