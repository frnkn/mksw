<template>
<div>
  <h1>Hello World Detail View</h1>
  <p>{{ $route.params.area_id }} on {{ $route.params.street_name }}</p>
  <p>HELLO {{this.area_id}}</p>
  <p>{{this.dates}}</p>
</div>
</template>


<script>

import dates_per_area from '../assets/dates_per_area.json';

export default {
  name: 'DetailComponent',
 
  methods: {
      findDatesByArea: function(area_id){
        let obj = dates_per_area.find(o => o.area === area_id);
        return obj;
    }
  },
  computed: {
      dates: function(){
          return this.findDatesByArea(this.$route.params.area_id)
          
      }
  }
}
</script>
