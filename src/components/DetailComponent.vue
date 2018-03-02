<template>
<div class="container grid-md">
    <div class="col-12">
        <h1>Müllabfuhrtermine für <small class="label">{{ $route.params.street_name }}</small> in Schweinfurt</h1>
        <p>Der Nächste Müllabfuhrtermin für den Bereich {{ $route.params.area_id }} findet in <strong>{{this.nearest_date.diff}} Tagen</strong> am <strong>{{this.nearest_date.date}}</strong> statt.</p>

        <p>Die nächstern Termine lauten:</p>
        <ul>
            <li v-for="date in calc_dates.dates"><strong>{{date}}</strong></li>
        </ul>
    </div>
    <div class="col-12 spacer">
    </div>
<Footer></Footer>
</div>
</template>


<script>

import dates_per_area from '../assets/dates_per_area.json';
import moment from 'moment';
import Footer from './Footer';

export default {
    name: 'DetailComponent',
    components: {
        Footer
    },
    methods: {
        findDatesByArea: function(area_id){
            let obj = dates_per_area.find(o => o.area === area_id);
            return obj;
        },
        findClosestDate: function(area_id){
            var closest_date = {days_left: null, next_date: null};
            let dates = this.findDatesByArea(area_id);
            //console.log("THE DATES", dates);
            var normalized_dates = this._normalizeDates(dates.dates);
            //console.log(normalized_dates);
            var obj_arr = this._makeDayDiffs(normalized_dates);
            var closest = this._getClosestDateAndDiff(obj_arr);
            //console.log("CLOSEST TO REDNDER", closest);

            return closest;
        },
        _normalizeDates: function(dates){
            var normalized_dates = [];

            dates.forEach(d => {
                normalized_dates.push(moment(d, 'DD-MM-YYYY'))
            });

            return normalized_dates
        },
        _makeDayDiffs: function(dates){
            var dates_with_pos_diffs = [];
            var today = moment();

            dates.forEach(d => {
                var diff = d.diff(today, 'days');
                //console.log("DIFF", d, diff);

                if (diff > 0) {
                    console.log("valid diff", d, diff)
                    dates_with_pos_diffs.push({diff: diff, date: d})
                }
            });

            //console.log("neg diffs", dates_with_pos_diffs);
            return dates_with_pos_diffs;
        },
        _getClosestDateAndDiff: function(obj_arr){

            let min = Number.POSITIVE_INFINITY

            obj_arr.forEach(obj => {
                console.log("OBJ", obj);
                min = Math.min(min, obj.diff)
            });

            //console.log("MIN", min);

            var error = false;

            var closest = {};

            obj_arr.forEach(obj => {
                if (obj.diff === min) {
                    console.log("CLOSEST IS", obj)
                    obj.date = obj.date.format('DD.MM.YYYY')
                    closest = obj;
                }
            });

            //console.log("CL", closest);
            return closest

            
        }
    },
    computed: {
        calc_dates: function(){
            return this.findDatesByArea(this.$route.params.area_id)
        },
        nearest_date: function() {
            return this.findClosestDate(this.$route.params.area_id);
        }
    }
}       
</script>
<style scoped>
    .spacer {
        margin-bottom: 400px;
    }
</style>

       