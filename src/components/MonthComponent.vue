<template>
  <div class="box m-2">
    <h1></h1>
    <h1 class="subtitle is-4 m-2 is-text-align-center" v-bind:class="{'has-text-primary': isCurrent}">
      {{ value }}. {{ name }}
    </h1>

    <table class="table is-striped">
      <thead>
      <tr>
        <th>Week</th>
        <th v-bind:key="header" v-for="header in headers">
          {{ header }}
        </th>
      </tr>
      </thead>
      <tbody>
      <tr class="row"
          v-bind:class="{'is-selected': week.isCurrent(), 'zero-opacity': week.isStub()}"
          v-bind:key="week" v-for="week in weeks">
        <th v-bind:class="{'border-none': week.isStub()}">{{ week.value }}</th>
        <td class="row"
            v-bind:class="{'border-none': week.isStub()}"
            v-bind:key="day" v-for="day in week.days()">
          <DayComponent v-bind:day="day"></DayComponent>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>
<script>

import DayComponent from "./DayComponent";

export default {
  name: 'MonthComponent',
  props: ['month'],

  data() {
    let headers = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    return {
      value: this.month.value,
      name: this.month.name(),
      isCurrent: this.month.isCurrent(),
      weeks: this.month.weeks(),
      headers: headers
    }
  },
  components: {
    DayComponent: DayComponent
  }
}
</script>
<style>
</style>