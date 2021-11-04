<template>
  <div v-bind:class="{'has-text-grey-light': !isCurrentMonth,
                      'has-text-danger': isWeekend,
                      'is-text-align-center border-radius-6 has-text-weight-bold has-background-success-light has-text-success-dark': isCurrent}">
    {{ value }}
  </div>
</template>

<script>

export default {
  name: 'DayComponent',
  props: ['day'],

  data() {
    return {
      value: this.day.value,
      isCurrentMonth: this.day.isInMonthScope(),
      isCurrent: this.day.isCurrent(),
      isWeekend: this.day.isWeekend()
    }
  }
}
</script>

<style>
.border-radius-6{
  border-radius: 6px;
}
</style>
