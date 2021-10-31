<template>
  <div>
    <div class='rows'>
      <div class='row is-full'>
        <h1 class="title is-2">H{{ half }}</h1>
      </div>
      <div class="columns">
        <div class="column" v-bind:key="quarter" v-bind:quarter="quarter" v-for="quarter in quarters">
          <QuarterComponent v-bind:quarter="quarter" v-bind:half="half"></QuarterComponent>
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
  props: ['half'],

  data() {
    let half = new Half(this.half);
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