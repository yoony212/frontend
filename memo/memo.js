const ButtonPreference = {
  props: ['initialCount'],
  data() {
    return {
      count: this.initialCount,
    };
  },
  methods: {
    countUp() {
      this.initialCount += 1;
    },
  },
  template: `
    <button v-on:click="countUp">
      {{ initialCount }} いいね！
    </button>
  `,
};

new Vue({
  el: '#example',
  components: {
    'button-preference': ButtonPreference,
  },
});
