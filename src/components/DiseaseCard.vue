<template>
  <div v-if="medicalCard" >
    <div style="position:absolute; top:20px; left:35px; z-index:1000000">
      <button @click="goBack" class="btn icon-item icon-item-sm shadow-none p-0 me-1 ms-md-2" type="button" data-event="prev" data-bs-toggle="tooltip" title="" ><svg class="svg-inline--fa fa-arrow-left fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg><!-- <span class="fas fa-arrow-left"></span> Font Awesome fontawesome.com --></button>
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
        <div style="display: flex; justify-content: center;">
          <div class="card mb-3 overflow-hidden mt-5" style="max-width: max-content; display: flex; justify-content: center; ">
            <div class="card-header">
              <div class="gx-0 align-items-center ms-0" style="min-width: 300px;">
                <h4 class="mb-0 fs-0 fs-sm-1 fs-lg-2 calendar-title" @click="toggleDropdown">
                  {{ selectedYear }} {{ selectedMonth }}
                </h4>
                <div v-if="dropdownVisible" class="dropdown mt-2">
                  <div class="form-group mb-2">
                    <label for="monthSelect">Month</label>
                    <select id="monthSelect" v-model="selectedMonth" class="form-control">
                      <option v-for="month in months" :key="month" :value="month">{{ month }}</option>
                    </select>
                  </div>
                  <div class="form-group mb-2">
                    <label for="yearSelect">Year</label>
                    <select id="yearSelect" v-model="selectedYear" class="form-control">
                      <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
                    </select>
                  </div>
                  <button @click="applySelection" class="btn btn-primary">Apply</button>
                </div>
                <div class="col-md-auto d-md-none mt-3">
                  <hr>
                </div>
                <div class="d-flex order-md-0">
                  <button class="btn btn-primary btn-sm mb-3" type="button" data-bs-toggle="modal" data-bs-target="#addEventModal"> <svg class="svg-inline--fa fa-plus fa-w-14 me-2" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg><!-- <span class="fas fa-plus me-2"></span> Font Awesome fontawesome.com -->Add Event</button>
                </div>
              </div>
            </div>

            <div class="card-body p-0 ms-2">
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

              <form autocomplete="off" @submit.prevent="pushToCalendar">
                <div class="modal-header px-card bg-light border-bottom-0">
                  <h5 class="modal-title">Create Event</h5>
                  <button class="btn-close me-n1" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-card">
                  <div class="mb-3">
                    <label class="fs-0" for="eventTitle">Title</label>
                    <input class="form-control" id="eventTitle" type="text" name="title" v-model="newEvent.name" required="required">
                  </div>
                  <div class="mb-3">
                    <label class="fs-0" for="eventStartDate">Start Date</label>
                    <input v-if="addTimeChecked" class="form-control datetimepicker flatpickr-input" type="tel" v-mask="'##/##/####'" required="required" name="startDate" placeholder="mm/dd/yyyy" v-model="newEvent.startDate">
                    <input v-else class="form-control datetimepicker flatpickr-input" type="tel" v-mask="'##/##/#### ##:##'" required="required" name="startDate" placeholder="mm/dd/yyyy hh:mm" v-model="newEvent.startDate">
                  </div>
                  <div class="mb-3">
                    <label class="fs-0" for="eventEndDate">End Date</label>
                    <input v-if="addTimeChecked" class="form-control datetimepicker flatpickr-input" type="tel" v-mask="'##/##/####'" name="endDate" placeholder="mm/dd/yyyy" v-model="newEvent.endDate">
                    <input v-else class="form-control datetimepicker flatpickr-input" type="tel" v-mask="'##/##/#### ##:##'"  name="endDate" placeholder="mm/dd/yyyy hh:mm" v-model="newEvent.endDate">
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="eventAllDay" name="allDay" v-model="addTimeChecked">
                    <label class="form-check-label" for="eventAllDay">Add time</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="addFrequency" name="allDay" v-model="isNotAlways">
                    <label class="form-check-label" for="addFrequency">Add Frequency</label>
                  </div>
                  <div class="mb-3" v-if="isNotAlways">
                    <div>
                      <label class="fs-0" for="eventLabel">Frequency</label>
                    </div>
                    <div class="row mx-4">
                      <div class="col-4">
                        <input v-if="diapasonChecked" class="form-control datetimepicker flatpickr-input" type="tel" name="frequency" placeholder="1-2" v-mask="['#-##', '##-##', '###-###']">
                        <input v-else class="form-control datetimepicker flatpickr-input" type="number" name="frequency" placeholder="0">
                      </div>
                      <div class="col-2 d-flex align-items-center text-center">
                        <span class="fs--0">per</span>
                      </div>
                      <div class="col-6">
                        <select class="form-select" name="per">
                          <option value="" selected="selected">hour</option>
                          <option value="primary">day</option>
                          <option value="danger">week</option>
                          <option value="warning">month</option>
                          <option value="primary">year</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" id="addDiapason" name="allDay" v-model="diapasonChecked">
                      <label class="form-check-label" for="addDiapason">Add Diapason</label>
                    </div>
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
                  <button type="button" class="btn btn-secondary me-3" data-bs-dismiss="modal">Close</button>
                  <button class="btn btn-primary px-4">Save</button>
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
import {mask} from 'vue-the-mask';

export default {
  name: "DiseaseCard",
  directives: {mask},
  data() {
    return {
      selectedMonth: 'April',
      selectedYear: 2021,
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      years: [],
      dropdownVisible: false,
      newEvent: {
        "name": "",
        "startDate": undefined,
        "endDate": undefined,
        "isAlways": false,
        "frequencyFrom": undefined,
        "frequencyTo": undefined,
        "per": "",
        "notes": ""
      },
      newEventsList: [],
      addTimeChecked: true,
      diapasonChecked: false,
      isNotAlways: false,
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
      let yearsList = []
      for (let i = startYear; i <= endYear; i++ && currentDate <= endDate) {
        let year = Number(i)
        yearsList.push(year)
        let monthsDict = {}
        let monthList = []
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
    toggleDropdown() {
      this.dropdownVisible = !this.dropdownVisible;
    },
    applySelection() {
      this.updateURLParams();
      this.dropdownVisible = false;
    },
    updateURLParams() {
      this.$router.push({ query: { year: this.selectedYear, month: this.selectedMonth } });
      window.location.reload();
    },
    pushToCalendar() {
      console.log(this.newEvent)
      this.newEventsList.push(this.newEvent)
      console.log(this.newEventsList)
      console.log(this.newEventsList.length)
      if (this.newEventsList.length) {
        for (let i = 0; i < this.newEventsList.length; i++) {
          let newStartDate = new Date(this.newEventsList[i].startDate.substr(0,10))
          let newStartYear = newStartDate.getFullYear()
          let newStartMonth = newStartDate.toLocaleString("default", {month:"long"})
          let newStartDay = newStartDate.getDate()
          console.log('new date', newStartDate)
          console.log('new', newStartYear, newStartMonth, newStartDay)

          let curMonth = this.calendar[newStartYear][newStartMonth]
          for (let weekIndex = 0; weekIndex < curMonth.length; weekIndex++) {
            let week = curMonth[weekIndex]
            for (let dayIndex = 0; dayIndex < week.length; dayIndex++) {
              let day = week[dayIndex]
              if (day.day === newStartDay) {
                day.info.push(this.newEvent.name)
              }
            }
          }
        }
      }
      this.newEvent = {
        "name": "",
        "startDate": undefined,
        "endDate": undefined,
        "isAlways": false,
        "frequencyFrom": undefined,
        "frequencyTo": undefined,
        "per": "",
        "notes": ""
      }
    },
    goBack() {
      this.$router.push({ name: 'MedicalCard'})
    },
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
    console.log('CALENDAR', this.calendar)
    this.years = Object.keys(this.calendar)

    if (this.$route.query.year && this.$route.query.month) {
      let queryYear = this.$route.query.year
      let queryMonth = this.$route.query.month
      this.daysList = this.calendar[queryYear][queryMonth]
    } else {
      this.daysList = this.calendar['2021']['April']
    }
  },
}
</script>

<style scoped>

</style>