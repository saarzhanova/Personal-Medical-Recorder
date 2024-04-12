<template>
  <div style="position:absolute; top:20px; left:35px; z-index:1000000">
    <button class="btn icon-item icon-item-sm shadow-none p-0 me-1 ms-md-2" type="button" data-event="prev" data-bs-toggle="tooltip" title="" data-bs-original-title="Previous" aria-label="Previous"><svg class="svg-inline--fa fa-arrow-left fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg><!-- <span class="fas fa-arrow-left"></span> Font Awesome fontawesome.com --></button>
  </div>
    <div class="row ps-4 me-4">
      <div class="col-4">
        <span class="fw-bold ps-3">My Profile</span>
      </div>
      <div class="col-8 d-flex flex-row-reverse">
        <button type="button" class="btn btn-primary">Change</button>
      </div>
    </div>
    <div class="text-center me-4" >
      <div class="card-header position-relative min-vh-25 mb-7 me-9">
        <div class="bg-holder rounded-3 rounded-bottom-0"></div>
        <div class="avatar avatar-5xl avatar-profile">
          <img class="rounded-circle" src="../assets/profile_photo.png" width="200" alt="">
        </div>
      </div>
      <div class="card-body">
        <div class="align-center">
          <h4 class="mb-4">
            <span data-bs-toggle="tooltip" data-bs-placement="right" title="" data-bs-original-title="Verified" aria-label="Verified">
              <i class="fa fa-mars" aria-hidden="true"></i>
            </span>
            Mark Hopkins
          </h4>
        </div>
        <div class="row mb-3">
          <div class="col-6 text-center justify-content-center">
            <span>Date of Birth</span></div>
          <div class="card col-6 text-center justify-content-center">
            <span>11/11/1999</span></div>
        </div>
        <div class="row mb-3">
          <div class="col-6 text-center justify-content-center">
            <span>Email</span></div>
          <div class="card col-6 text-center justify-content-center">
            <span>mark@mail.com</span></div>
        </div>
        <div class="row">
          <div class="col-6 text-center justify-content-center">
            <span>Address</span></div>
          <div class="card col-6 text-center justify-content-center">
            <span>11, Street, City, 00000</span></div>
        </div>
        <div class="border-dashed-bottom my-4 d-lg-none"></div>
        <!--      </div>-->
      </div>
    </div>
    <div class="d-grid gap-2 mx-5">
      <router-link
          class="nav-link"
          :class="{'active' : (this.$route.name === 'MedicalCard' || this.$route.path === '/medical-card')}"
          :to="{ path: '/medical-card'}"
          data-bs-toggle=""
          aria-expanded="false"
      >
        <button type="button" class="btn btn-primary">My Medical Card</button>
      </router-link>
  </div>
</template>

<script>
export default {
  name: 'AccountPage',
  props: {
    msg: String
  },
  computed: {

  },
  methods: {

  },
  mounted() {
    var isFluid = JSON.parse(localStorage.getItem('isFluid'));
    if (isFluid) {
      var container = document.querySelector('[data-layout]');
      container.classList.remove('container');
      container.classList.add('container-fluid');
    }

    var navbarStyle = localStorage.getItem("navbarStyle");
    if (navbarStyle && navbarStyle !== 'transparent') {
      document.querySelector('.navbar-vertical').classList.add(`navbar-${navbarStyle}`);
    }
  }

}
</script>

<style>
body {
  font-family: "Poppins",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"
}
</style>
