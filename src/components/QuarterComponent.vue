<template>
  <div class="box" v-bind:class="{'has-background-primary-light': isCurrent}">
    <div class="columns">
      <div class="column">
        <h1 class="subtitle is-3 m-2 is-text-align-center" v-bind:class="{'has-text-primary': isCurrent}">Q{{ value }}</h1>
        <div class="rows">
          <div class="row" v-bind:key="month" v-for="month in months">
            <MonthComponent v-bind:month="month"></MonthComponent>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import MonthComponent from "./MonthComponent";

export default {
  name: 'QuarterComponent',
  props: ['quarter'],

  data() {
    return {
      value: this.quarter.value,
      isCurrent: this.quarter.isCurrent(),
      months: this.quarter.months()
    }
  },

  components: {
    MonthComponent: MonthComponent
  }
}
</script>

<style>
</style>