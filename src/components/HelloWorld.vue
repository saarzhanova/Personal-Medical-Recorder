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
            <a class="navbar-brand" href="#">
              <div class="d-flex align-items-center py-3">
                <div style="position: relative"></div>
                <span class="text-secondary fw-normal mb-0">DOCTOR</span>
              </div>
            </a>
          </div>

          <div class="collapse navbar-collapse" id="navbarVerticalCollapse">
            <div class="navbar-vertical-content scrollbar">
              <ul class="navbar-nav flex-column mb-3" id="navbarVerticalNav">
                <li class="nav-item">
                  <!-- parent pages-->
                  <a class="nav-link" href="#" role="button" data-bs-toggle="collapse" aria-expanded="true" aria-controls="dashboard">
                    <div class="d-flex align-items-center">
                      <span class="nav-link-icon">
                        <span class="fas fa-chart-pie"></span>
                      </span>
                      <span class="nav-link-text ps-1">Analytics</span>
                    </div>
                  </a>
                </li>
                <ul class="nav collapse show" id="dashboard">
                  <li class="nav-item">
                  </li>
                  <li class="nav-item">
                  </li>
                  <li class="nav-item ">
                    <a class="nav-link cursor-default" href="#" data-bs-toggle="" aria-expanded="false">
                      <div class="d-flex align-items-center">
                        <span class="nav-link-text ps-1 text-400">Settings</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </nav>

        <div class="content">
          <!--Horispntal Header-->
          <nav class="navbar navbar-light navbar-glass navbar-top navbar-expand" style="z-index: 1;">

            <button style="z-index: 1;" class="btn navbar-toggler-humburger-icon navbar-toggler me-1 me-sm-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarVerticalCollapse" aria-controls="navbarVerticalCollapse" aria-expanded="false" aria-label="Toggle Navigation"><span class="navbar-toggle-icon"><span class="toggle-line"></span></span></button>


            <ul class="navbar-nav navbar-nav-icons ms-auto flex-row align-items-center" style="z-index: 1;">
              <li class="nav-item dropdown">
                <p class="fs--2 mb-0 fw-lighter" style="position: absolute; top:8px; left: 15.7px; z-index:1; color: white">0</p>
                <a class="nav-link notification-indicator notification-indicator-danger px-0 fa-icon-wait" id="navbarDropdownNotification" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-hide-on-body-scroll="data-hide-on-body-scroll"><span class="fas fa-bell" data-fa-transform="shrink-6" style="font-size: 33px;"></span></a>
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
        </div>
      </div>
    </main>
  </div>

  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
