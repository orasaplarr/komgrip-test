<template lang="">
  <div class="container-fluid py-4">
    <div v-if="loading" class="spinner-border" role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
    <div v-else class="row">
      <div
        class="col-xl-3 col-sm-6 mb-xl-0 mb-4"
        v-for="(item, i) in itemCard"
        :key="item.id"
      >
        <div class="card">
          <div class="card-body p-3">
            <div class="row">
              <div class="col-8">
                <div class="numbers">
                  <p class="text-sm mb-0 text-capitalize font-weight-bold">
                    {{ item.name }}
                  </p>
                  <h5 class="font-weight-bolder mb-0">
                    $ {{ parseFloat(item.priceUsd).toFixed(2) }}
                    <div
                      class="text-sm font-weight-bolder mt-2"
                      :class="{
                        'text-success': item.changePercent24Hr >= 0,
                        'text-danger': item.changePercent24Hr < 0,
                      }"
                    >
                      {{ parseFloat(item.changePercent24Hr).toFixed(2) }}%
                    </div>
                  </h5>
                </div>
              </div>

              <div class="col-4 text-end">
                <div
                  class="icon icon-shape bg-gradient-primary shadow text-center border-radius-md"
                >
                  <i
                    class="ni ni-money-coins text-lg opacity-10"
                    aria-hidden="true"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["itemCard", "loading"],
};
</script>
<style lang=""></style>
