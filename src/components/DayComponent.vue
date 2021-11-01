<template>
  <span v-bind:class="{'has-text-grey-light': !isCurrentMonth, 'has-text-danger' : isWeekend}">
    {{ value }}
  </span>
</template>

<script>

import Day from "../models/Day";

export default {
  name: 'DayComponent',
  props: ['year', 'month', 'day', 'scopeMonth'],

  data() {
    let day = new Day(this.year, this.month, this.scopeMonth, this.day);

    return {
      value: this.day,
      isCurrentMonth: day.isInMonthScope(),
      isCurrent: day.isCurrent(),
      isWeekend: day.isWeekend()
    }
  }
}
</script>

<style>
</style>
