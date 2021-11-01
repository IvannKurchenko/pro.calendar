<template>
  <div class="box" v-bind:class="{'has-background-primary-light': isCurrent}">
    <div class="columns">
      <div class="column">
        <h1 class="subtitle is-3 m-2 is-text-align-center" v-bind:class="{'has-text-primary': isCurrent}">Q{{ value }}</h1>
        <div class="rows">
          <div class="row" v-bind:key="month" v-bind:month="month" v-for="month in months">
            <MonthComponent v-bind:year="year" v-bind:quarter="value" v-bind:month="month">
            </MonthComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import MonthComponent from "./MonthComponent";
import Quarter from "../models/Quarter";

export default {
  name: 'QuarterComponent',
  props: ['year', 'half', 'quarter'],

  data() {
    let quarter = Quarter.halfQuarter(this.year, this.half, this.quarter)
    let months = [1, 2, 3];

    return {
      value: quarter.value,
      isCurrent: quarter.isCurrent(),
      months: months
    }
  },

  components: {
    MonthComponent: MonthComponent
  }
}
</script>

<style>
</style>