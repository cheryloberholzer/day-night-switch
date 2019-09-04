new Vue({
  el: '#app',
  data: {
    daytime: '...'
  },
  methods: {
    toggleDaytime: function() {
      this.daytime = this.daytime == 'Day' ? 'Night' : 'Day';
    }
  }
});
