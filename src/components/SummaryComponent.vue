<template>
  <h1 class="title is-5 m-2 is-text-align-center">Left in {{ summary.segment }}</h1>
  <div class="columns">
    <div class="column"><h1 class="subtitle is-6 min-width-150">Weeks: {{ summary.weeksLeft }}</h1></div>
    <div class="column"><h1 class="subtitle is-6 min-width-150">Work days: {{ summary.workDaysLeft }}</h1></div>
    <div class="column"><h1 class="subtitle is-6 min-width-150">Weekends days: {{ summary.weekendsDaysLeft }}</h1></div>
  </div>
</template>

<script>

export default {
  name: 'SummaryComponent',
  props: ['summary'],

  data() {
    return {};
  }
}

</script>

<style>
</style>