new Vue({
  el: '#app',
  data: {
    daytime: 'Day',
    daytimeClass: 'day',
  },
  methods: {
    toggleDaytime: function() {
      this.daytime = this.daytime === 'Day' ? 'Night' : 'Day';
      this.daytimeClass = this.daytime.toLowerCase();
    }
  }
});
