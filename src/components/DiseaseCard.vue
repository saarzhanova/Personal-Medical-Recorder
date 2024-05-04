<template>
  <div v-if="medicalCard">
    <div style="position:absolute; top:20px; left:35px; z-index:1000000">
      <button class="btn icon-item icon-item-sm shadow-none p-0 me-1 ms-md-2" type="button" data-event="prev" data-bs-toggle="tooltip" title="" data-bs-original-title="Previous" aria-label="Previous"><svg class="svg-inline--fa fa-arrow-left fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg><!-- <span class="fas fa-arrow-left"></span> Font Awesome fontawesome.com --></button>
    </div>
    <div class="row ps-4 me-4">
      <div class="col-4">
      </div>
      <div class="col-8 d-flex flex-row-reverse">
        <button type="button" class="btn btn-primary">Change</button>
      </div>
    </div>
    <div class="text-center me-4" >
      <div class="card-header text-center mt-5">
        <h1>{{ medicalCard.name }}</h1>
        <h4 class="text-500 fs--1 mt-3"><span>{{ getShortStartDate(medicalCard.startDate) }}</span> - <span>{{
            getShortEndDate(medicalCard.endDate)
          }}</span></h4>
      </div>
      <div class="card-body">
        <!--      <p class="p-0 m-0">Disturbance Frequency</p>-->
        <!--      <p>-->
        <!--        <span class="dot bg-primary ms-3"></span>-->
        <!--        <span class="dot bg-info"></span>-->
        <!--        <span class="dot bg-400"></span>-->
        <!--        <span class="dot bg-warning"></span>-->
        <!--        <span class="dot bg-success"></span>-->
        <!--        <i class="fa fa-question-circle text-400 fa-sm ms-3" aria-hidden="true"></i>-->
        <!--      </p>-->
        <!--      <p class="p-0 mb-0">Treatment</p>-->
        <!--      <span class="badge rounded-pill fs&#45;&#45;2 bg-200 text-primary">70%</span>-->
        <!--      <div class="d-flex align-items-center justify-content-center">-->
        <!--        <span class="progress rounded-3 mb-0 pb-0 ms-3 align-bottom" style="height: 10px; width: 200px;">-->
        <!--          <span class="progress-bar bg-progress-gradient border-end border-white border-2" role="progressbar" style="width: 160px" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></span>-->
        <!--        </span>-->
        <!--      </div>-->


        <!--      <div class="border-dashed-bottom my-3 d-lg-none ms-3"></div>-->

        <p class="mb-0 pb-0">Contraindications</p>
        <div class="w-100" style="width: 200px;">
        <span class="badge rounded-pill fs--2 mt-2 me-2"
              v-for="(contraindication, index) in medicalCard.contraindications"
              :key="index"
              :class="[isRelevant(contraindication) ? 'bg-danger' : 'badge-soft-danger', {'bg-body text-danger' : activeIndex === contraindication}]"
              @click ="setActive(contraindication)"
        >
          <div
              class="p-2 mt-3"
              style="position:absolute; z-index:100; background-color:white;"
              v-if="activeIndex === contraindication"
          >
            <span class="text-danger fs--2" v-if="contraindication.startDate + contraindication.endDate !== 0">{{ getStartDate(contraindication.startDate) + " - " + getEndDate(contraindication.endDate) }}</span>
            <span class="text-danger fs--2" v-else>No start/end date</span>
            <p class="text-danger fs--2 p-1 mb-0" v-if="contraindication && !contraindication.isAlways">{{ getFrequency(contraindication) }}</p>

          </div>
          {{ contraindication.name }}
        </span>
        </div>
        <p class="fs--1 text-500" v-if="medicalCard.contraindications && !medicalCard.contraindications.length">—</p>

        <div class="border-dashed-bottom my-3 d-lg-none ms-3"></div>

        <p class="mb-0 pb-0">Requirements</p>
        <div class="w-100" style="width: 200px;">
        <span class="badge rounded-pill fs--2 me-2 mt-2"
              v-for="(requirement, index) in medicalCard.requirements"
              :key="index"
              :class="[isRelevant(requirement) ? 'bg-primary' : 'badge-soft-primary', {'bg-body text-primary' : activeIndex === requirement}]"
              @click ="setActive(requirement)"
        >
          <div
              class="p-1 mt-3"
              style="position:absolute; z-index:100; background-color:white;"
              v-if="activeIndex === requirement"
          >
            <span class="text-primary fs--2" v-if="requirement.startDate + requirement.endDate !== 0">{{ getStartDate(requirement.startDate) + " - " + getEndDate(requirement.endDate) }}</span>
            <span class="text-primary fs--2" v-else>No start/end date</span>
            <p class="text-primary fs--2 p-1 mb-0" v-if="!requirement.isAlways">{{ getFrequency(requirement) }}</p>
          </div>
          {{ requirement.name }}
        </span>
        </div>
        <p class="fs--1 text-500" v-if="medicalCard.requirements && !medicalCard.requirements.length">—</p>

        <div class="border-dashed-bottom my-3 d-lg-none ms-3"></div>

        <p class="mb-0 pb-0">Suggestions</p>
        <div class="w-100" style="width: 200px;">
        <span class="badge rounded-pill fs--2 me-2 mt-2"
              v-for="(suggestion, index) in medicalCard.suggestions"
              :key="index"
              :class="[isRelevant(suggestion) ? 'bg-success' : 'badge-soft-success', {'bg-body text-success' : activeIndex === suggestion}]"
              @click ="setActive(suggestion)"
        >
          <div
              class="p-1 mt-3"
              style="position:absolute; z-index:100; background-color:white;"
              v-if="activeIndex === suggestion"
          >
            <span class="text-success fs--2" v-if="suggestion.startDate + suggestion.endDate !== 0">{{ getStartDate(suggestion.startDate) + " - " + getEndDate(suggestion.endDate) }}</span>
            <span class="text-success fs--2" v-else>No start/end date</span>
            <p class="text-success fs--2 p-1 mb-0" v-if="!suggestion.isAlways">{{ getFrequency(suggestion) }}</p>
          </div>
          {{ suggestion.name }}
        </span>
        </div>
        <p class="fs--1 text-500" v-if="medicalCard.suggestions && !medicalCard.suggestions.length">—</p>

        <!--   CALENDAR-->
        <div class="card mb-3 overflow-hidden mt-5">
          <div class="card-header">
            <div class="row gx-0 align-items-center">
              <div class="col-auto d-flex justify-content-end order-md-1">
                <button class="btn icon-item icon-item-sm shadow-none p-0 me-1 ms-md-2" type="button" data-event="prev" data-bs-toggle="tooltip" title="" data-bs-original-title="Previous" aria-label="Previous"><svg class="svg-inline--fa fa-arrow-left fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg><!-- <span class="fas fa-arrow-left"></span> Font Awesome fontawesome.com --></button>
                <button class="btn icon-item icon-item-sm shadow-none p-0 me-1 me-lg-2" type="button" data-event="next" data-bs-toggle="tooltip" title="" data-bs-original-title="Next" aria-label="Next"><svg class="svg-inline--fa fa-arrow-right fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path></svg><!-- <span class="fas fa-arrow-right"></span> Font Awesome fontawesome.com --></button>
              </div>
              <div class="col-auto col-md-auto order-md-2">
                <h4 class="mb-0 fs-0 fs-sm-1 fs-lg-2 calendar-title">April 2021</h4>
              </div>
              <div class="col col-md-auto d-flex justify-content-end order-md-3">
              </div>
              <div class="col-md-auto d-md-none">
                <hr>
              </div>
              <div class="d-flex order-md-0">
                <button class="btn btn-primary btn-sm" type="button" data-bs-toggle="modal" data-bs-target="#addEventModal"> <svg class="svg-inline--fa fa-plus fa-w-14 me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg><!-- <span class="fas fa-plus me-2"></span> Font Awesome fontawesome.com -->Add Event</button>
              </div>
            </div>
          </div>

          <div class="card-body p-0">
            <div class="calendar-outline fc fc-media-screen fc-direction-ltr fc-theme-standard" style="height: 800px;">
              <div class="fc-view-harness fc-view-harness-active">
                <div class="fc-daygrid fc-dayGridMonth-view fc-view">
                  <table class="fc-scrollgrid  fc-scrollgrid-liquid">
                    <thead>
                    <tr class="fc-scrollgrid-section fc-scrollgrid-section-header "><td>
                      <div class="fc-scroller-harness">
                        <div class="fc-scroller" style="overflow: hidden;">
                          <table class="fc-col-header " style="width: 276px;">
                            <colgroup></colgroup>
                            <tbody>
                            <tr>
                              <th class="fc-col-header-cell fc-day fc-day-sun">
                                <div class="fc-scrollgrid-sync-inner">
                                  <a class="fc-col-header-cell-cushion ">Sun</a>
                                </div>
                              </th>
                              <th class="fc-col-header-cell fc-day fc-day-mon">
                                <div class="fc-scrollgrid-sync-inner">
                                  <a class="fc-col-header-cell-cushion ">Mon</a>
                                </div>
                              </th>
                              <th class="fc-col-header-cell fc-day fc-day-tue">
                                <div class="fc-scrollgrid-sync-inner">
                                  <a class="fc-col-header-cell-cushion ">Tue</a>
                                </div>
                              </th>
                              <th class="fc-col-header-cell fc-day fc-day-wed">
                                <div class="fc-scrollgrid-sync-inner">
                                  <a class="fc-col-header-cell-cushion ">Wed</a>
                                </div>
                              </th>
                              <th class="fc-col-header-cell fc-day fc-day-thu">
                                <div class="fc-scrollgrid-sync-inner">
                                  <a class="fc-col-header-cell-cushion ">Thu</a>
                                </div>
                              </th>
                              <th class="fc-col-header-cell fc-day fc-day-fri">
                                <div class="fc-scrollgrid-sync-inner">
                                  <a class="fc-col-header-cell-cushion ">Fri</a>
                                </div>
                              </th>
                              <th class="fc-col-header-cell fc-day fc-day-sat">
                                <div class="fc-scrollgrid-sync-inner">
                                  <a class="fc-col-header-cell-cushion ">Sat</a>
                                </div>
                              </th>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </td>
                    </tr>
                    </thead>

                    <tbody>
                    <tr class="fc-scrollgrid-section fc-scrollgrid-section-body  fc-scrollgrid-section-liquid">
                      <td>
                        <div class="fc-scroller-harness fc-scroller-harness-liquid">
                          <div class="fc-scroller fc-scroller-liquid-absolute" style="overflow: hidden auto;">
                            <div class="fc-daygrid-body fc-daygrid-body-unbalanced " style="width: 276px;">
                              <table class="fc-scrollgrid-sync-table" style="width: 276px; height: 770px;">
                                <colgroup></colgroup>
                                <tbody>
                                <tr v-for="(week,index) in this.daysList" :key="index">
                                  <td v-for="(day,index) in week" :key="index"
                                      @click ="satCalendarDate(day.day)"
                                      class="fc-daygrid-day fc-day fc-day-past">
<!--                                    to make day grey ----fc-day-other-->
<!--                                    to show week day ----fc-day-sun-->
<!--                                    to specify data  ----data-date="2024-03-31"-->
                                    <div class="fc-daygrid-day-frame fc-scrollgrid-sync-inner" v-if="!(day === 0)">

                                      <div class="fc-daygrid-day-top">
                                        <a class="fc-daygrid-day-number" >{{day.day}}</a>
                                      </div>

                                      <div class="fc-daygrid-day-events">
                                        <div class="fc-daygrid-event-harness" style="margin-top: 0px;">
                                          <a class="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-future bg-soft-primary">
                                            <div class="fc-event-main">
                                              <div class="fc-event-main-frame">
                                                <div class="fc-event-title-container">
                                                  <div class="fc-event-title fc-sticky">{{ day.info[0] }}</div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="fc-event-resizer fc-event-resizer-end"></div>
                                          </a>
                                        </div>
                                        <div class="fc-daygrid-day-bottom" style="margin-top: 0px;" v-if="day.info.length > 1">
                                          <a class="fc-daygrid-more-link fc-more-link">+{{day.info.length-1}}</a>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                        class="p-1 mt-3"
                                        style="position:absolute; z-index:100; background-color:white; width: 100px; height: 100px;"
                                        v-if="day !== 0 && calendarDate === day.day"
                                    >
                                      <span class="text-primary fs--2">Requirements:</span>
                                      <ul>
                                        <li class="text-primary fs--2" v-for="(info, index) in day.info" :key="index"><span class="text-primary fs--2">{{info}}</span></li>
                                      </ul>
                                    </div>
                                  </td>
                                </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
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

        <div class="modal fade" id="authentication-modal" tabindex="-1" role="dialog" aria-labelledby="authentication-modal-label" aria-hidden="true">
          <div class="modal-dialog mt-6" role="document">
            <div class="modal-content border-0">
              <div class="modal-header px-5 position-relative modal-shape-header bg-shape">
                <div class="position-relative z-index-1 light">
                  <h4 class="mb-0 text-white" id="authentication-modal-label">Register</h4>
                  <p class="fs--1 mb-0 text-white">Please create your account</p>
                </div>
                <button class="btn-close btn-close-white position-absolute top-0 end-0 mt-2 me-2" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body py-4 px-5">
                <form>
                  <div class="mb-3">
                    <label class="form-label" for="modal-auth-name">Name</label>
                    <input class="form-control" type="text" autocomplete="on" id="modal-auth-name">
                  </div>
                  <div class="mb-3">
                    <label class="form-label" for="modal-auth-email">Email address</label>
                    <input class="form-control" type="email" autocomplete="on" id="modal-auth-email">
                  </div>
                  <div class="row gx-2">
                    <div class="mb-3 col-sm-6">
                      <label class="form-label" for="modal-auth-password">Password</label>
                      <input class="form-control" type="password" autocomplete="on" id="modal-auth-password">
                    </div>
                    <div class="mb-3 col-sm-6">
                      <label class="form-label" for="modal-auth-confirm-password">Confirm Password</label>
                      <input class="form-control" type="password" autocomplete="on" id="modal-auth-confirm-password">
                    </div>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="modal-auth-register-checkbox">
                    <label class="form-label" for="modal-auth-register-checkbox">I accept the <a href="#!">terms </a>and <a href="#!">privacy policy</a></label>
                  </div>
                  <div class="mb-3">
                    <button class="btn btn-primary d-block w-100 mt-3" type="submit" name="submit">Register</button>
                  </div>
                </form>
                <div class="position-relative mt-5">
                  <hr class="bg-300">
                  <div class="divider-content-center">or register with</div>
                </div>
                <div class="row g-2 mt-2">
                  <div class="col-sm-6"><a class="btn btn-outline-google-plus btn-sm d-block w-100" href="#"><svg class="svg-inline--fa fa-google-plus-g fa-w-20 me-2" data-fa-transform="grow-8" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-plus-g" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="" style="transform-origin: 0.625em 0.5em;"><g transform="translate(320 256)"><g transform="translate(0, 0)  scale(1.5, 1.5)  rotate(0 0 0)"><path fill="currentColor" d="M386.061 228.496c1.834 9.692 3.143 19.384 3.143 31.956C389.204 370.205 315.599 448 204.8 448c-106.084 0-192-85.915-192-192s85.916-192 192-192c51.864 0 95.083 18.859 128.611 50.292l-52.126 50.03c-14.145-13.621-39.028-29.599-76.485-29.599-65.484 0-118.92 54.221-118.92 121.277 0 67.056 53.436 121.277 118.92 121.277 75.961 0 104.513-54.745 108.965-82.773H204.8v-66.009h181.261zm185.406 6.437V179.2h-56.001v55.733h-55.733v56.001h55.733v55.733h56.001v-55.733H627.2v-56.001h-55.733z" transform="translate(-320 -256)"></path></g></g></svg><!-- <span class="fab fa-google-plus-g me-2" data-fa-transform="grow-8"></span> Font Awesome fontawesome.com --> google</a></div>
                  <div class="col-sm-6"><a class="btn btn-outline-facebook btn-sm d-block w-100" href="#"><svg class="svg-inline--fa fa-facebook-square fa-w-14 me-2" data-fa-transform="grow-8" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="" style="transform-origin: 0.4375em 0.5em;"><g transform="translate(224 256)"><g transform="translate(0, 0)  scale(1.5, 1.5)  rotate(0 0 0)"><path fill="currentColor" d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z" transform="translate(-224 -256)"></path></g></g></svg><!-- <span class="fab fa-facebook-square me-2" data-fa-transform="grow-8"></span> Font Awesome fontawesome.com --> facebook</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal fade" id="eventDetailsModal" tabindex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content border"></div>
          </div>
        </div>
        <div class="modal fade" id="addEventModal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content border">
              <form id="addEventForm" autocomplete="off">
                <div class="modal-header px-card bg-light border-bottom-0">
                  <h5 class="modal-title">Create Event</h5>
                  <button class="btn-close me-n1" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-card">
                  <div class="mb-3">
                    <label class="fs-0" for="eventTitle">Title</label>
                    <input class="form-control" id="eventTitle" type="text" name="title" required="required">
                  </div>
                  <div class="mb-3">
                    <label class="fs-0" for="eventStartDate">Start Date</label>
                    <div class="flatpickr-wrapper"><input class="form-control datetimepicker flatpickr-input" id="eventStartDate" type="text" required="required" name="startDate" placeholder="yyyy/mm/dd hh:mm" data-options="{&quot;static&quot;:&quot;true&quot;,&quot;enableTime&quot;:&quot;true&quot;,&quot;dateFormat&quot;:&quot;Y-m-d H:i&quot;}" readonly="readonly"><div class="flatpickr-calendar hasTime animate static" tabindex="-1"><div class="flatpickr-months"><span class="flatpickr-prev-month"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z"></path></svg></span><div class="flatpickr-month"><div class="flatpickr-current-month"><select class="flatpickr-monthDropdown-months" aria-label="Month" tabindex="-1"><option class="flatpickr-monthDropdown-month" value="0" tabindex="-1">January</option><option class="flatpickr-monthDropdown-month" value="1" tabindex="-1">February</option><option class="flatpickr-monthDropdown-month" value="2" tabindex="-1">March</option><option class="flatpickr-monthDropdown-month" value="3" tabindex="-1">April</option><option class="flatpickr-monthDropdown-month" value="4" tabindex="-1">May</option><option class="flatpickr-monthDropdown-month" value="5" tabindex="-1">June</option><option class="flatpickr-monthDropdown-month" value="6" tabindex="-1">July</option><option class="flatpickr-monthDropdown-month" value="7" tabindex="-1">August</option><option class="flatpickr-monthDropdown-month" value="8" tabindex="-1">September</option><option class="flatpickr-monthDropdown-month" value="9" tabindex="-1">October</option><option class="flatpickr-monthDropdown-month" value="10" tabindex="-1">November</option><option class="flatpickr-monthDropdown-month" value="11" tabindex="-1">December</option></select><div class="numInputWrapper"><input class="numInput cur-year" type="number" tabindex="-1" aria-label="Year"><span class="arrowUp"></span><span class="arrowDown"></span></div></div></div><span class="flatpickr-next-month"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path></svg></span></div><div class="flatpickr-innerContainer"><div class="flatpickr-rContainer"><div class="flatpickr-weekdays"><div class="flatpickr-weekdaycontainer">
      <span class="flatpickr-weekday">
        Sun</span><span class="flatpickr-weekday">Mon</span><span class="flatpickr-weekday">Tue</span><span class="flatpickr-weekday">Wed</span><span class="flatpickr-weekday">Thu</span><span class="flatpickr-weekday">Fri</span><span class="flatpickr-weekday">Sat
      </span>
                    </div></div><div class="flatpickr-days" tabindex="-1"><div class="dayContainer"><span class="flatpickr-day prevMonthDay" aria-label="March 31, 2024" tabindex="-1">31</span><span class="flatpickr-day " aria-label="April 1, 2024" tabindex="-1">1</span><span class="flatpickr-day " aria-label="April 2, 2024" tabindex="-1">2</span><span class="flatpickr-day " aria-label="April 3, 2024" tabindex="-1">3</span><span class="flatpickr-day " aria-label="April 4, 2024" tabindex="-1">4</span><span class="flatpickr-day " aria-label="April 5, 2024" tabindex="-1">5</span><span class="flatpickr-day " aria-label="April 6, 2024" tabindex="-1">6</span><span class="flatpickr-day " aria-label="April 7, 2024" tabindex="-1">7</span><span class="flatpickr-day " aria-label="April 8, 2024" tabindex="-1">8</span><span class="flatpickr-day " aria-label="April 9, 2024" tabindex="-1">9</span><span class="flatpickr-day " aria-label="April 10, 2024" tabindex="-1">10</span><span class="flatpickr-day today" aria-label="April 11, 2024" aria-current="date" tabindex="-1">11</span><span class="flatpickr-day " aria-label="April 12, 2024" tabindex="-1">12</span><span class="flatpickr-day " aria-label="April 13, 2024" tabindex="-1">13</span><span class="flatpickr-day " aria-label="April 14, 2024" tabindex="-1">14</span><span class="flatpickr-day " aria-label="April 15, 2024" tabindex="-1">15</span><span class="flatpickr-day " aria-label="April 16, 2024" tabindex="-1">16</span><span class="flatpickr-day " aria-label="April 17, 2024" tabindex="-1">17</span><span class="flatpickr-day " aria-label="April 18, 2024" tabindex="-1">18</span><span class="flatpickr-day " aria-label="April 19, 2024" tabindex="-1">19</span><span class="flatpickr-day " aria-label="April 20, 2024" tabindex="-1">20</span><span class="flatpickr-day " aria-label="April 21, 2024" tabindex="-1">21</span><span class="flatpickr-day " aria-label="April 22, 2024" tabindex="-1">22</span><span class="flatpickr-day " aria-label="April 23, 2024" tabindex="-1">23</span><span class="flatpickr-day " aria-label="April 24, 2024" tabindex="-1">24</span><span class="flatpickr-day " aria-label="April 25, 2024" tabindex="-1">25</span><span class="flatpickr-day " aria-label="April 26, 2024" tabindex="-1">26</span><span class="flatpickr-day " aria-label="April 27, 2024" tabindex="-1">27</span><span class="flatpickr-day " aria-label="April 28, 2024" tabindex="-1">28</span><span class="flatpickr-day " aria-label="April 29, 2024" tabindex="-1">29</span><span class="flatpickr-day " aria-label="April 30, 2024" tabindex="-1">30</span><span class="flatpickr-day nextMonthDay" aria-label="May 1, 2024" tabindex="-1">1</span><span class="flatpickr-day nextMonthDay" aria-label="May 2, 2024" tabindex="-1">2</span><span class="flatpickr-day nextMonthDay" aria-label="May 3, 2024" tabindex="-1">3</span><span class="flatpickr-day nextMonthDay" aria-label="May 4, 2024" tabindex="-1">4</span><span class="flatpickr-day nextMonthDay" aria-label="May 5, 2024" tabindex="-1">5</span><span class="flatpickr-day nextMonthDay" aria-label="May 6, 2024" tabindex="-1">6</span><span class="flatpickr-day nextMonthDay" aria-label="May 7, 2024" tabindex="-1">7</span><span class="flatpickr-day nextMonthDay" aria-label="May 8, 2024" tabindex="-1">8</span><span class="flatpickr-day nextMonthDay" aria-label="May 9, 2024" tabindex="-1">9</span><span class="flatpickr-day nextMonthDay" aria-label="May 10, 2024" tabindex="-1">10</span><span class="flatpickr-day nextMonthDay" aria-label="May 11, 2024" tabindex="-1">11</span></div></div></div></div><div class="flatpickr-time" tabindex="-1"><div class="numInputWrapper"><input class="numInput flatpickr-hour" type="number" aria-label="Hour" tabindex="-1" step="1" min="1" max="12" maxlength="2"><span class="arrowUp"></span><span class="arrowDown"></span></div><span class="flatpickr-time-separator">:</span><div class="numInputWrapper"><input class="numInput flatpickr-minute" type="number" aria-label="Minute" tabindex="-1" step="5" min="0" max="59" maxlength="2"><span class="arrowUp"></span><span class="arrowDown"></span></div><span class="flatpickr-am-pm" title="Click to toggle" tabindex="-1">PM</span></div></div></div>
                  </div>
                  <div class="mb-3">
                    <label class="fs-0" for="eventEndDate">End Date</label>
                    <div class="flatpickr-wrapper"><input class="form-control datetimepicker flatpickr-input" id="eventEndDate" type="text" name="endDate" placeholder="yyyy/mm/dd hh:mm" data-options="{&quot;static&quot;:&quot;true&quot;,&quot;enableTime&quot;:&quot;true&quot;,&quot;dateFormat&quot;:&quot;Y-m-d H:i&quot;}" readonly="readonly"><div class="flatpickr-calendar hasTime animate static" tabindex="-1"><div class="flatpickr-months"><span class="flatpickr-prev-month"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z"></path></svg></span><div class="flatpickr-month"><div class="flatpickr-current-month"><select class="flatpickr-monthDropdown-months" aria-label="Month" tabindex="-1"><option class="flatpickr-monthDropdown-month" value="0" tabindex="-1">January</option><option class="flatpickr-monthDropdown-month" value="1" tabindex="-1">February</option><option class="flatpickr-monthDropdown-month" value="2" tabindex="-1">March</option><option class="flatpickr-monthDropdown-month" value="3" tabindex="-1">April</option><option class="flatpickr-monthDropdown-month" value="4" tabindex="-1">May</option><option class="flatpickr-monthDropdown-month" value="5" tabindex="-1">June</option><option class="flatpickr-monthDropdown-month" value="6" tabindex="-1">July</option><option class="flatpickr-monthDropdown-month" value="7" tabindex="-1">August</option><option class="flatpickr-monthDropdown-month" value="8" tabindex="-1">September</option><option class="flatpickr-monthDropdown-month" value="9" tabindex="-1">October</option><option class="flatpickr-monthDropdown-month" value="10" tabindex="-1">November</option><option class="flatpickr-monthDropdown-month" value="11" tabindex="-1">December</option></select><div class="numInputWrapper"><input class="numInput cur-year" type="number" tabindex="-1" aria-label="Year"><span class="arrowUp"></span><span class="arrowDown"></span></div></div></div><span class="flatpickr-next-month"><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 17 17"><g></g><path d="M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z"></path></svg></span></div><div class="flatpickr-innerContainer"><div class="flatpickr-rContainer"><div class="flatpickr-weekdays"><div class="flatpickr-weekdaycontainer">
      <span class="flatpickr-weekday">
        Sun</span><span class="flatpickr-weekday">Mon</span><span class="flatpickr-weekday">Tue</span><span class="flatpickr-weekday">Wed</span><span class="flatpickr-weekday">Thu</span><span class="flatpickr-weekday">Fri</span><span class="flatpickr-weekday">Sat
      </span>
                    </div></div><div class="flatpickr-days" tabindex="-1"><div class="dayContainer"><span class="flatpickr-day prevMonthDay" aria-label="March 31, 2024" tabindex="-1">31</span><span class="flatpickr-day " aria-label="April 1, 2024" tabindex="-1">1</span><span class="flatpickr-day " aria-label="April 2, 2024" tabindex="-1">2</span><span class="flatpickr-day " aria-label="April 3, 2024" tabindex="-1">3</span><span class="flatpickr-day " aria-label="April 4, 2024" tabindex="-1">4</span><span class="flatpickr-day " aria-label="April 5, 2024" tabindex="-1">5</span><span class="flatpickr-day " aria-label="April 6, 2024" tabindex="-1">6</span><span class="flatpickr-day " aria-label="April 7, 2024" tabindex="-1">7</span><span class="flatpickr-day " aria-label="April 8, 2024" tabindex="-1">8</span><span class="flatpickr-day " aria-label="April 9, 2024" tabindex="-1">9</span><span class="flatpickr-day " aria-label="April 10, 2024" tabindex="-1">10</span><span class="flatpickr-day today" aria-label="April 11, 2024" aria-current="date" tabindex="-1">11</span><span class="flatpickr-day " aria-label="April 12, 2024" tabindex="-1">12</span><span class="flatpickr-day " aria-label="April 13, 2024" tabindex="-1">13</span><span class="flatpickr-day " aria-label="April 14, 2024" tabindex="-1">14</span><span class="flatpickr-day " aria-label="April 15, 2024" tabindex="-1">15</span><span class="flatpickr-day " aria-label="April 16, 2024" tabindex="-1">16</span><span class="flatpickr-day " aria-label="April 17, 2024" tabindex="-1">17</span><span class="flatpickr-day " aria-label="April 18, 2024" tabindex="-1">18</span><span class="flatpickr-day " aria-label="April 19, 2024" tabindex="-1">19</span><span class="flatpickr-day " aria-label="April 20, 2024" tabindex="-1">20</span><span class="flatpickr-day " aria-label="April 21, 2024" tabindex="-1">21</span><span class="flatpickr-day " aria-label="April 22, 2024" tabindex="-1">22</span><span class="flatpickr-day " aria-label="April 23, 2024" tabindex="-1">23</span><span class="flatpickr-day " aria-label="April 24, 2024" tabindex="-1">24</span><span class="flatpickr-day " aria-label="April 25, 2024" tabindex="-1">25</span><span class="flatpickr-day " aria-label="April 26, 2024" tabindex="-1">26</span><span class="flatpickr-day " aria-label="April 27, 2024" tabindex="-1">27</span><span class="flatpickr-day " aria-label="April 28, 2024" tabindex="-1">28</span><span class="flatpickr-day " aria-label="April 29, 2024" tabindex="-1">29</span><span class="flatpickr-day " aria-label="April 30, 2024" tabindex="-1">30</span><span class="flatpickr-day nextMonthDay" aria-label="May 1, 2024" tabindex="-1">1</span><span class="flatpickr-day nextMonthDay" aria-label="May 2, 2024" tabindex="-1">2</span><span class="flatpickr-day nextMonthDay" aria-label="May 3, 2024" tabindex="-1">3</span><span class="flatpickr-day nextMonthDay" aria-label="May 4, 2024" tabindex="-1">4</span><span class="flatpickr-day nextMonthDay" aria-label="May 5, 2024" tabindex="-1">5</span><span class="flatpickr-day nextMonthDay" aria-label="May 6, 2024" tabindex="-1">6</span><span class="flatpickr-day nextMonthDay" aria-label="May 7, 2024" tabindex="-1">7</span><span class="flatpickr-day nextMonthDay" aria-label="May 8, 2024" tabindex="-1">8</span><span class="flatpickr-day nextMonthDay" aria-label="May 9, 2024" tabindex="-1">9</span><span class="flatpickr-day nextMonthDay" aria-label="May 10, 2024" tabindex="-1">10</span><span class="flatpickr-day nextMonthDay" aria-label="May 11, 2024" tabindex="-1">11</span></div></div></div></div><div class="flatpickr-time" tabindex="-1"><div class="numInputWrapper"><input class="numInput flatpickr-hour" type="number" aria-label="Hour" tabindex="-1" step="1" min="1" max="12" maxlength="2"><span class="arrowUp"></span><span class="arrowDown"></span></div><span class="flatpickr-time-separator">:</span><div class="numInputWrapper"><input class="numInput flatpickr-minute" type="number" aria-label="Minute" tabindex="-1" step="5" min="0" max="59" maxlength="2"><span class="arrowUp"></span><span class="arrowDown"></span></div><span class="flatpickr-am-pm" title="Click to toggle" tabindex="-1">PM</span></div></div></div>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="eventAllDay" name="allDay">
                    <label class="form-check-label" for="eventAllDay">All Day
                    </label>
                  </div>
                  <div class="mb-3">
                    <label class="fs-0" for="eventDescription">Description</label>
                    <textarea class="form-control" rows="3" name="description" id="eventDescription"></textarea>
                  </div>
                  <div class="mb-3">
                    <label class="fs-0" for="eventLabel">Label</label>
                    <select class="form-select" id="eventLabel" name="label">
                      <option value="" selected="selected">None</option>
                      <option value="primary">Appointment</option>
                      <option value="danger">Problem</option>
                      <option value="warning">Contraindication</option>
                      <option value="primary">Requirement</option>
                      <option value="success">Suggestion</option>
                    </select>
                  </div>
                </div>
                <div class="card-footer d-flex justify-content-end align-items-center bg-light">
                  <button class="btn btn-primary px-4" type="submit">Save</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import medicalCard from "@/assets/json/medicalCard.json";

export default {
  name: "DiseaseCard",
  data() {
    return {
      daysList: [],
      medicalCard: [],
      diagnosis: {},
      clicked: false,
      activeIndex: undefined,
      calendarDate: undefined
    };
  },
  props: {
    card: {
      type: Object,
      default: null
    },
  },
  computed: {
    calendar() {
      let requirements = this.medicalCard.requirements;
      let startDate = new Date(this.medicalCard.startDate * 1000);
      let endDate;
      if (this.medicalCard.endDate !== 0 ) {
        endDate = new Date(this.medicalCard.endDate * 1000);
      } else {
        endDate = new Date();
      }
      let calendar = [];

      let startMonth = startDate.toLocaleString("default", {month:"long"});
      let startYear = startDate.toLocaleString("default", {year:"numeric"});
      let startWeekDay = startDate.getDay();
      console.log('start date: ', startDate.getDate(), startMonth, startYear, startWeekDay)

      let endMonth = endDate.toLocaleString("default", {month:"long"});
      let endYear = endDate.toLocaleString("default", {year:"numeric"});
      let endWeekDay = endDate.getDay();
      console.log('end date: ', endDate.getDate(), endMonth, endYear, endWeekDay)

      let currentDate = startDate;
      for (let i = startYear; i <= endYear; i++ && currentDate <= endDate) {
        let year = Number(i)
        let monthsDict = {}
        let monthList = []
        // let weeksList = []
        let eachWeek = []
        while (currentDate <= endDate) {
          let nameList = []
          let curYear = Number(currentDate.toLocaleString("default", {year:"numeric"}))
          if (curYear === year) {
            for (let i = 0; i < requirements.length; i++) {
              if (!this.medicalCard.isChronic) {
                if (currentDate >= new Date(requirements[i].startDate * 1000) && currentDate <= new Date(requirements[i].endDate * 1000)) {
                  console.log('yes')
                  nameList.push(requirements[i].name)
                } else {
                  console.log('no')
                }
              } else {
                nameList.push(requirements[i].name)
              }
            }

            let curMonth = currentDate.toLocaleString("default", {month:"long"})
            if (!monthsDict[curMonth]) {
              monthList.push(eachWeek)
              eachWeek = []
              monthList = []
            }
            eachWeek.push({
              "day": currentDate.getDate(),
              "month": currentDate.toLocaleString("default", {month:"long"}),
              "year": Number(currentDate.toLocaleString("default", {year:"numeric"})),
              "info": nameList // { "type" : "", "name" : "", "from" : "", "to" : "", "time": ""}
            })
            if (currentDate.getDay() === 6 || (currentDate.getMonth() === endDate.getMonth() && currentDate.getDate() === endDate.getDate() && currentDate.getFullYear() === endDate.getFullYear())) {
              // check that there are 7 numbers in week array
              if (eachWeek.length < 7) {
                if (currentDate.getDay() === 6) {
                  while (eachWeek.length < 7) {
                    eachWeek.unshift(0)
                  }
                } else {
                  while (eachWeek.length < 7) {
                    eachWeek.push(0)
                  }
                }
              }
              monthList.push(eachWeek)
              eachWeek = []
            }
            monthsDict[curMonth] = monthList
            currentDate.setDate(currentDate.getDate() + 1);
          } else {
            break;
          }
        }
        calendar[year] = monthsDict
      }
      return calendar;
    },
  },
  methods: {
    getDay(date) {
      return date.getDate()
    },
    getMonth(month) {
      console.log(this.calendar['2021'][month])
      return this.calendar['2021'][month]
    },
    getFrequency(feature) {
      if (feature.frequencyFrom === feature.frequencyTo) {
        return feature.frequencyFrom + " per " + feature.per
      } else {
        return feature.frequencyFrom + "-" + feature.frequencyTo + " per " + feature.per
      }
    },
    setActive(index){
      if (this.activeIndex === index) {
        this.activeIndex = undefined
      } else {
        this.activeIndex = index
      }
    },
    satCalendarDate(date) {
        if (this.calendarDate === date) {
          this.calendarDate = undefined
        } else {
          this.calendarDate = date
        }
    },
    isRelevant(feature) {
      let currentDate = moment().unix()
      return !(feature.startDate + feature.endDate !== 0 && feature.endDate < currentDate)
    },
    getDate(unix) {
      return moment.unix(unix).format("DD/MM/YYYY");
    },
    getShortDate(unix) {
      return moment.unix(unix).format("MMM YYYY");
    },
    getShortStartDate(unix) {
      if (unix) {
        return this.getShortDate(unix)
      } else {
        return "unknown"
      }
    },
    getShortEndDate(unix) {
      if (unix) {
        return this.getShortDate(unix)
      } else {
        return "till now"
      }
    },
    getStartDate(unix) {
      if (unix !== 0) {
        return this.getDate(unix)
      } else {
        return "unknown"
      }
    },
    getEndDate(unix) {
      if (unix !== 0) {
        return this.getDate(unix)
      } else {
        return "till now"
      }
    },
  },
  mounted() {
    this.medicalCard = medicalCard.diagnoses[this.$route.params.id];
    console.log(this.medicalCard)
    this.diagnosis = this.card
    this.daysList = this.calendar['2021']['April']
    console.log(this.calendar)
  },
}
</script>

<style scoped>

</style>