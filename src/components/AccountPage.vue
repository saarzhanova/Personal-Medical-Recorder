<template>
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
