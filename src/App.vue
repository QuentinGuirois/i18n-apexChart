<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
import CguGaiar from './components/CguGaiar.vue'
import ApexChart from './components/ApexChart.vue'
</script>

<template>
  <header>

    <div class="wrapper">
      <HelloWorld msg="1ère semaine Quentin" />
    </div>
  </header>

  <main>
    <TheWelcome />
    <CguGaiar msg="Etape 1 : CGU Gaiar" />
    <ApexChart msg="Etape 2 : ApexCharts" />
    <div id="toTop"><h3 class="green">^</h3></div>
  </main>
  
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}
#toTop {
	position:fixed;
	bottom:15px;
	right:15px;
	cursor:pointer;
	background: rgba(000,000,000,0.7);
	width:50px;
	font-size:25px;
	line-height:45px;
	color:#fff;
	text-align:center;
	border-radius:50px;
	height:50px;
   }
.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
