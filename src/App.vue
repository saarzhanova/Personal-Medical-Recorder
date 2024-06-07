<template>
  <div id="main">
    <main class="main" id="top">
      <div class="container" data-layout="container">
        <nav class="navbar navbar-light navbar-vertical navbar-expand-xl">
          <div class="d-flex align-items-center">
            <div class="toggle-icon-wrapper">
              <button class="btn navbar-toggler-humburger-icon navbar-vertical-toggle" data-bs-toggle="tooltip" data-bs-placement="left" title="Toggle Navigation">
                <span class="navbar-toggle-icon">
                  <span class="toggle-line"></span>
                </span>
              </button>
            </div>
          </div>
          <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
            <div class="navbar-vertical-content scrollbar">
              <ul class="navbar-nav flex-column mb-3" id="navbarVerticalNav">
                <li class="nav-item">
                  <a class="nav-link dropdown-indicator" href="#dashboard" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dashboard">
                  <div class="d-flex align-items-center">
                    <span class="nav-link-icon">
                        <span class="fas fa-user"></span>
                      </span>
                    <span class="nav-link-text ps-1">My account</span>
                  </div>
                </a>
                  <ul class="nav collapse show" id="dashboard" style="">
                    <li class="nav-item">
                      <router-link
                          class="nav-link"
                          :class="{'active' : (this.$route.name === 'AccountPage' || this.$route.path === '/account')}"
                          :to="{ path: '/account'}"
                          data-bs-toggle=""
                          aria-expanded="false"
                      >
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text ps-1">Profile</span>
                        </div>
                      </router-link>
                    </li>
                    <li class="nav-item">
                      <router-link
                          class="nav-link"
                          :class="{'active' : (this.$route.name === 'MedicalCard' || this.$route.path === '/medical-card')}"
                          :to="{ path: '/medical-card'}"
                          data-bs-toggle=""
                          aria-expanded="false"
                      >
                        <div class="d-flex align-items-center">
                          <span class="nav-link-text ps-1">Medical Card</span>
                        </div>
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div class="content">
          <nav class="navbar navbar-light navbar-glass navbar-top navbar-expand" style="z-index: 1;">

            <button style="z-index: 1;" class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>


            <ul class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center" style="z-index: 1;">
              <li class="nav-item dropdown">
                <p class="fs--2 mb-0 fw-lighter" style="position: absolute; top:8px; left: 15.7px; z-index:1; color: white">0</p>
<!--                <a class="nav-link notification-indicator notification-indicator-danger px-0 fa-icon-wait" id="navbarDropdownNotification" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-hide-on-body-scroll="data-hide-on-body-scroll"><span class="fas fa-bell" data-fa-transform="shrink-6" style="font-size: 33px;"></span></a>-->
                <div class="dropdown-menu dropdown-menu-end dropdown-menu-card dropdown-menu-notification dropdown-caret-bg" aria-labelledby="navbarDropdownNotification">
                  <div class="card card-notification shadow-none">
                    <div class="card-header">
                      <div class="row justify-content-between align-items-center">
                        <div class="col-auto">
                          <h6 class="card-header-title mb-0">Notifications</h6>
                        </div>
                      </div>
                    </div>
                    <div class="scrollbar-overlay" style="max-height:19rem">
                      <div class="list-group list-group-flush fw-normal fs--1">
                        <div class="list-group-title border-bottom">New</div>

                        <div class="list-group-title border-bottom">Before</div>

                      </div>
                    </div>
                    <div class="card-footer text-center border-top">
                      <a class="card-link d-block" href="#">Show all</a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </nav>

          <router-view></router-view>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
