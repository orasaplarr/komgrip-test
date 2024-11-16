<template lang="">
  <footer class="footer pt-3 bg-gray-100">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-lg-between">
        <div class="col-lg-6 mb-lg-0 mb-4">
          <div class="copyright text-center text-lg text-muted text-lg-start">
            Copyright© 2022 Komgrip Technologies Co., Ltd.
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(), // เก็บปีปัจจุบัน
    };
  },
};
</script>
<style lang=""></style>
