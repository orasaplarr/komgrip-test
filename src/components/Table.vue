<template lang="">
  <div class="container-fluid py-4">
    <div class="row my-4">
      <div class="col-lg-12 col-md-6 mb-md-0">
        <div class="card">
          <div class="card-header pb-0">
            <div class="row">
              <div class="col-lg-6 col-7">
                <h6>Cryptocurrencies</h6>
              </div>
              <div class="col-lg-6 col-5 my-auto text-end">
                <div class="d-flex float-lg-end pe-4 gap-4">
                  <button
                    type="button"
                    class="btn btn-outline-primary font-weight-bold"
                    @click="$emit('reduce-offset')"
                  >
                    <
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-primary font-weight-bold"
                    @click="$emit('add-offset')"
                  >
                    >
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body px-0 pb-2">
            <div class="table-responsive">
              <table class="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th
                      class="text-uppercase text-secondary font-weight-bolder opacity-7 text-center"
                    >
                      no
                    </th>
                    <th
                      class="text-uppercase text-secondary font-weight-bolder opacity-7 ps-2"
                    >
                      name
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary font-weight-bolder opacity-7"
                    >
                      symbol
                    </th>
                    <th
                      class="text-end text-uppercase text-secondary font-weight-bolder opacity-7"
                    >
                      supply/maxsupply
                    </th>
                    <th
                      class="text-end text-uppercase text-secondary font-weight-bolder opacity-7"
                    >
                      usd
                    </th>
                    <th
                      class="text-center text-uppercase text-secondary font-weight-bolder opacity-7"
                    >
                      24 hr
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, i) in items" :key="items.id">
                    <td>
                      <div class="d-flex flex-column text-center my-2">
                        <h6 class="mb-0 text-sm fw-normal">
                          {{ (offset - 1) * limit + i + 1 }}.
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex flex-column">
                        <h6 class="mb-0 text-sm fw-normal">{{ item.name }}</h6>
                      </div>
                    </td>
                    <td>
                      <!-- <div class="avatar-group mt-2"></div> -->
                      <div class="d-flex flex-column text-center">
                        <h6 class="mb-0 text-sm fw-normal">
                          {{ item.symbol }}
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex flex-column text-end">
                        <h6 class="mb-0 text-sm fw-normal">
                          {{ formatNumberInt(item.supply) }}/
                          {{
                            item.maxSupply
                              ? formatNumberInt(item.maxSupply)
                              : "NO LIMIT"
                          }}
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex flex-column text-end">
                        <h6 class="mb-0 text-sm fw-normal">
                          ${{ formatNumberFloat(item.priceUsd) }}
                        </h6>
                      </div>
                    </td>
                    <td>
                      <div class="d-flex flex-column text-center">
                        <h6
                          class="mb-0 text-sm fw-normal"
                          :class="{
                            'text-success': item.changePercent24Hr >= 0,
                            'text-danger': item.changePercent24Hr < 0,
                          }"
                        >
                          {{ parseFloat(item.changePercent24Hr).toFixed(2) }}%
                        </h6>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["items", "offset", "limit"],

  methods: {
    formatNumberInt(value) {
      if (!value) return null;
      return parseInt(value).toLocaleString("en-US");
    },
    formatNumberFloat(value) {
      return parseFloat(value).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    },
  },
};
</script>
<style lang=""></style>
