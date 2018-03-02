<template>
    <footer>
        <ul class="footer-list">
            <li> Der <router-link :to="{ name: 'MainSearchComponent'}">Müllabfuhrkalender</router-link> ist made in SWC by <a href="http://www.frnkn.com" target="_blank">FRNKN</a> | </li>
            <li> <router-link :to="{ name: 'Imprint'}">Impressum</router-link> | </li>
            <li> <router-link :to="{ name: 'Privacy'}">Datenschutz</router-link> | </li>
            <li> <small>Icons made by Freepik from www.flaticon.com is licensed by CC 3.0 BY</small> | </li>
            <li> <small>Für die Richtigkeit der Angaben wird keine Gewährleistung/Haftung übernommen.</small></li>

        </ul>
    </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.footer-list li {
    display: inline;
    list-style-type: none;
}

footer {
    margin-top: 85px;
    background-color: #F0F1F4;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 100px;
    width: 100%;
    overflow:hidden;

}

</style>