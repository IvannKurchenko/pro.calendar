<template>
  <div v-bind:class="{'has-text-grey-light': !isCurrentMonth,
                      'has-text-danger': isWeekend,
                      'is-text-align-center border-radius-6 has-text-weight-bold has-background-success-light has-text-success-dark': isCurrent}">
    {{ value }}
  </div>
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
.border-radius-6{
  border-radius: 6px;
}
</style>
