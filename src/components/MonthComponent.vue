<template>
  #{{value}} {{name}}
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