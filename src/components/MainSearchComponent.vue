<template>
  <div class="container grid-xl">
    <div class="columns searchbox">
      <div class="col-12">
        <h1>Müllkalender für Schweinfurt</h1>
      </div>
      <div class="col-12 searchform">
        <form class="form-horizontal">
          <div class="form-group">
            <div class="col-1">
              <label class="form-label" for="input-example-1">Straße:</label>
            </div>
            <div class="col-5">
              <input v-model="search" class="form-input" type="text" id="input-example-1" placeholder="Straßennamen eingeben ">
            </div>
            <div class="col-1">
              <button class="btn btn-primary">Suchen</button>
            </div>
          </div>
        </form>
      </div>
    </div>
    <div class="col-8 searchresults">
      <div v-for="res in filteredResults" class="card">
        <div class="card-header">
          <div class="card-title h4">{{res.name}}</div>
          <div class="card-subtitle text-gray">Abschnitt {{res.reg}}</div>
          <div class="card-body">
            Die nächsten Termine: ...
          </div>
          <div class="card-footer">
            <button class="btn btn-primary">Mehr Infos</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'MainSearchComponent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      search: "",
      streets: [
        {'reg': '1a', 'name': 'Christoph-Krebsstr.7'},
        {'reg': '1b', 'name': 'Gartenstrasse'},
      ]
    }
  },
  methods: {

  },
  created() {
    //load the streets and all data
  },
  computed: {
    filteredResults: function(){
      return this.streets.filter((street) => {
        return street.name.match(this.search);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.searchbox {
  background-color: azure;
}


</style>
