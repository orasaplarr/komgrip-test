<template lang="">
  <div class="g-sidenav-show bg-gray-100 min-h-screen">
    <aside
      class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 min-h-screen"
      id="sidenav-main"
    >
      <SideBar />
    </aside>

    <main
      class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg min-h-screen"
    >
      <Navbar activeMenu="DashBoard" />
      <Card :itemCard="itemCard" :loading="loading" />
      <Table
        :items="items"
        :offset="offset"
        :limit="limit"
        @add-offset="addOffSet"
        @reduce-offset="reduceOffSet"
      />
      <Footer />
    </main>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import SideBar from "@/components/SideBar.vue";
import Card from "@/components/Card.vue";
import Table from "@/components/Table.vue";
import Footer from "@/components/Footer.vue";

import axios from "axios";

export default {
  data() {
    return {
      itemCard: [],
      loading: true,
      limit: 5,
      offset: 1,
      items: [],
    };
  },
  components: {
    SideBar,
    Navbar,
    Card,
    Table,
    Footer,
  },

  mounted() {
    this.getDataCard();
  },
  methods: {
    getDataCard() {
      this.loading = true;
      axios
        .get("https://komgrip.co.th/coincap/assets?limit=4")
        .then((res) => {
          console.log(res.data);
          this.itemCard = res.data.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          this.getDataItmes();
        });
    },
    getDataItmes() {
      axios
        .get("https://komgrip.co.th/coincap/assets", {
          params: {
            limit: this.limit,
            offset: this.offset,
          },
        })
        .then((res) => {
          this.items = res.data.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          this.loading = false;
        });
    },
    addOffSet() {
      this.offset += 1;
      this.getDataItmes();
    },
    reduceOffSet() {
      if (this.offset > 1) {
        this.offset -= 1;
        this.getDataItmes();
      }
    },
  },
};
</script>
<style></style>
