<template>
  <div class="columns">
    <div class="column">
      <h1 class="subtitle is-3">Q{{ value }}</h1>
      <div class="rows">
        <div class="row" v-bind:key="month" v-bind:month="month" v-for="month in months">
          <MonthComponent v-bind:month="month" v-bind:quarter="value"></MonthComponent>
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
  props: ['half', 'quarter'],

  data() {
    let quarter = Quarter.halfQuarter(this.half, this.quarter)
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