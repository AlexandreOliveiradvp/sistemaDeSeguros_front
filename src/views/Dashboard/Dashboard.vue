<template>
  <div>
    <div class="main-container">
      <div class="row">
        <div class="col">
          <h1 class="text-secondary pt-1">Dashboard</h1>
        </div>
      </div>
      <div class="row">
        <div class="col mt-3">
          <div class="card">
            <div class="card-header">
              <span class="text-secondary">Lorem Ipsum</span>
            </div>
            <div class="card-body">
              <h5 class="card-title text-secondary">Special title treatment</h5>
              <p class="card-text text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur nec eros dictum, tristique elit eget, fringilla enim.
                Phasellus ultrices pharetra nibh at dapibus. Etiam nec leo at
                lectus euismod malesuada eget ut lectus. Maecenas non sem
                bibendum, cursus nulla nec, egestas ligula.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col mt-3">
          <div class="card">
            <div class="card-header">
              <span class="text-secondary">Lorem Ipsum</span>
            </div>
            <div class="card-body">
              <BarChart :chartData="barData" />
            </div>
          </div>
        </div>
        <div class="col mt-3">
          <div class="card">
            <div class="card-header">
              <span class="text-secondary">Lorem Ipsum</span>
            </div>
            <div class="card-body">
              <LineChart :chartData="lineData" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { BarChart,LineChart } from "vue-chart-3";
import {Chart, registerables} from "chart.js";

Chart.register(...registerables);

export default defineComponent({
  name: "Dashboard",
  components: { BarChart, LineChart },
  setup() {
    const barData = {
      labels: ["Paris", "Nova York", "Madri", "Londres", "Lisboa"],
      datasets: [
        {
          label: "Faturamento",
          data: [45, 60, 30, 70, 20],
          backgroundColor: [
            "#77CEFF",
            "#0079AF",
            "#123E6B",
            "#97B0C4",
            "#A5C8ED",
          ],
          hoverOffset: 8,
        },
      ],
    };
    const lineData = {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio"],
      datasets: [
        {
          label: "Contratos",
          data: [10, 20, 50, 45, 60],
          backgroundColor: [
            "#77CEFF",
            "#0079AF",
            "#123E6B",
            "#97B0C4",
            "#A5C8ED",
          ],
          hoverOffset: 8,
        },
      ],
    };

    return { barData, lineData };
  },
});
</script>
<style scoped lang="scss" src="./scss/Dashboard.scss"></style>
