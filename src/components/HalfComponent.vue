<template>
  <div v-bind:class="{'has-background-primary-light': isCurrent}" class="box">
    <div class='rows'>
      <div class='row is-full'>
        <h1 class="title is-2 m-2 is-text-align-center" v-bind:class="{'has-text-primary': isCurrent}">H{{ half }}</h1>
      </div>
      <div class="columns">
        <div class="column" v-bind:key="quarter" v-bind:quarter="quarter" v-for="quarter in quarters">
          <QuarterComponent v-bind:year="year" v-bind:half="half" v-bind:quarter="quarter"></QuarterComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import QuarterComponent from "./QuarterComponent";
import Half from "../models/Half";

export default {
  name: 'HalfComponent',
  props: ['year', 'half'],

  data() {
    let half = new Half(this.year, this.half);
    return {
      quarters: [1, 2],
      isCurrent: half.isCurrent()
    }
  },
  components: {
    QuarterComponent: QuarterComponent
  }
}
</script>

<style>
</style>