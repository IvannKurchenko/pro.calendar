<template>
  <div v-bind:class="{'has-background-primary-light': isCurrent}" class="box">
    <div class='rows'>
      <div class='row is-full'>
        <h1 class="title is-2 m-2 is-text-align-center" v-bind:class="{'has-text-primary': isCurrent}">H{{ half.value }}</h1>
      </div>
      <div class="columns">
        <div class="column" v-bind:key="quarter" v-for="quarter in quarters">
          <QuarterComponent v-bind:quarter="quarter"></QuarterComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import QuarterComponent from "./QuarterComponent";

export default {
  name: 'HalfComponent',
  props: ['half'],

  data() {
    return {
      quarters: this.half.quarters(),
      isCurrent: this.half.isCurrent()
    }
  },
  components: {
    QuarterComponent: QuarterComponent
  }
}
</script>

<style>
</style>