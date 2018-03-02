<template>
  <div class="container grid-md">
    <div class="columns searchbox">
      <div class="col-12">
        <h1>Müllkalender für Schweinfurt</h1>
      </div>
      <div class="col-12">
        <div class="fb-like" data-href="http://muellabfuhrkalender-schweinfurt.frnkn.com" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true"></div>
      </div>
      <div class="col-12 searchform">
        <form class="form-horizontal">
          <div class="form-group">
            <div class="col-3">
              <label class="form-label" for="input-example-1">Straße:</label>
            </div>
            <div class="col-7">
              <input v-model="search" class="form-input" type="text" id="input-example-1" placeholder="Straßennamen eingeben ">
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-12 searchresults">
      <div v-for="res in filteredResults" class="card">
        <div class="card-header">
          <div class="card-title h4">{{res.street_name}}</div>
          <div class="card-subtitle text-gray">Abschnitt {{res.area}}</div>
          <div class="card-footer">
            <router-link :to="{ name: 'DetailComponent', params: { area_id: res.area, street_name: res.street_name }}">Termine einsehen</router-link>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
  
</template>

<script>
import json_data from '../assets/data.json';
import dates_per_area from '../assets/dates_per_area.json';
import Footer from './Footer';

export default {
  name: 'MainSearchComponent',
  components: {
    Footer
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search: "",
      streets: json_data,
      dates_per_area: dates_per_area
    }
  },
  methods: {
    findDatesByArea: function(area_id){
      let obj = dates_per_area.find(o => o.area === area.id);
      return obj;
    }
  },
  created() {
    //load the streets and all data
  },
  computed: {
    filteredResults: function(){
      return this.streets.filter((street) => {
        return street.street_name.toLowerCase().match(this.search.toLowerCase());
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchbox {
  background-color: white;
  margin-bottom: 30px;
}

.searchform {
  margin-top: 20px;
}

.searchresults {
  margin-bottom: 250px;
}

</style>
