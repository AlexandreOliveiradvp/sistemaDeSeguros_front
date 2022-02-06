<template>
  <div>
    <div class="main-container">
      <div class="row">
        <div class="col">
          <h1 class="text-secondary pt-2">Dashboard</h1>
        </div>
      </div>
      <div class="row">
        <div class="col mt-3">
          <div class="card">
            <div class="card-header bg-white">
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
            <div class="card-header bg-white">
              <span class="text-secondary">Faturamento Anual</span>
            </div>
            <div class="card-body">
              <BarChart :chartData="barData" />
            </div>
          </div>
        </div>
        <div class="col mt-3">
          <div class="card">
            <div class="card-header bg-white">
              <span class="text-secondary">Contratos Ativos</span>
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
      labels: ["Minas Gerais", "Rio de Janeiro", "Paraná", "São Paulo", "Pernanbuco"],
      datasets: [
        {
          label: "Ano Base: 2021 / Faturamento em milhões",
          data: [10, 30, 12, 39, 8],
          backgroundColor: [
            "#28BBB8",
            "#A447E6",
            "#30E6E2",
            "#E66319",
            "#CFE625",
          ],
          hoverOffset: 8,
        },
      ],
    };
    const lineData = {
      labels: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio","Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      datasets: [
        {
          label: "Ano Base: 2021",
          data: [5, 9, 9, 9, 11, 12, 12, 13, 11, 10, 11, 14],
          backgroundColor: [
            "#28BBB8",
            "#A447E6",
            "#30E6E2",
            "#E66319",
            "#CFE625",
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
