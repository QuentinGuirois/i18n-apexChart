<script setup>
defineProps({
  msg: {
    type: String,
    required: true
  }
})
</script>
<script>

import VueApexCharts from "vue3-apexcharts";

export default {
  name: "Chart",
  components: {
    apexchart: VueApexCharts,
  },
  data: function () {
    return {
      series: [
        {
          name: "Produit A",
          data: [44, 55, 41, 67, 22, 43],
        },
        {
          name: "Produit B",
          data: [13, 23, 20, 8, 13, 27],
        },
        {
          name: "Produit C",
          data: [11, 17, 15, 0, 21, 14],
        },
        {
          name: "Produit D",
          data: [0, 7, 25, 0, 22, 8],
        },
      ],
      series2: [44, 55, 41, 17, 15],
      chartOptions: {
        chart: {
          type: "bar",
          height: 350,
          stacked: true,
          toolbar: {
            show: true,
          },
          zoom: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 20,
          },
        },
        xaxis: {
          type: "datetime",
          categories: [
            "01/01/2022 GMT",
            "01/02/2022 GMT",
            "01/03/2022 GMT",
            "01/04/2022 GMT",
            "01/05/2022 GMT",
            "01/06/2022 GMT",
          ],
        },
        legend: {
          position: "right",
          offsetY: 40,
        },
        fill: {
          opacity: 1,
        },
      },
      chartOptions2: {
        labels: ['Contenu 1', 'Contenu 2', 'Contenu 3', 'Contenu 4', 'Contenu 5'],
        chart: {
          type: "donut",
          height: 550,
          stacked: true,
          toolbar: {
            show: true,
          },
          zoom: {
            enabled: true,
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              legend: {
                position: "bottom",
                offsetX: -10,
                offsetY: 0,
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<template>
  <div class="container">
    <h1 class="green">{{ msg }}</h1>
    <h1>Barres Multiples</h1>
    <div id="chart">
    <apexchart
      type="bar"
      height="350"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <h1>Le Camembert</h1>
    <apexchart
      type="donut"
      height="550"
      :options="chartOptions2"
      :series="series2"
    ></apexchart>
  </div>
  </div>
</template>

<style scoped>
h1 {
    padding: 1em;
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
}

h3 {
    padding-bottom: 1em;
    font-size: 1.5rem;
    padding-bottom: 0.5em;
}

p {
    margin: 0 0 10px;
}

.container h1,
.container h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .container h1,
  .container h3 {
    text-align: left;
  }
}
</style>