<template>
  <div class="box m-2">
    <h1></h1>
    <h1 class="subtitle is-4 m-2" v-bind:class="{'has-text-primary': isCurrent}">{{ value }}. {{ name }}</h1>

  </div>
</template>
<script>


import Month from "../models/Month";

export default {
  name: 'Month',
  props: ['quarter', 'month'],
  data() {
    let month = Month.quarterMonth(this.quarter, this.month);
    return {
      value: month.value,
      name: month.name(),
      isCurrent: month.isCurrent(),
    }
  }
}
</script>