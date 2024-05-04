<template>
  <div v-if="this.diagnoses !== null">
    <div class="row ps-4 me-4 mb-3">
      <span class="fw-bold ps-4">My Medical Card</span>
    </div>
    <router-link to="/new" >
      <i class="fa fa-plus-circle fa-lg mb-3 mt-2 cursor-pointer" aria-hidden="true" @click="this.addNewCard"></i>
    </router-link>
    <i class="fa fa-trash fa-lg ms-4 mb-3 mt-2" aria-hidden="true"></i>
    <div class="card mb-3"  v-for="(card, index) in medicalCards" :key="index">
      <div class="card-body">
        <div class="ps-4">
          <div>
            <router-link
                class="nav-link ms-0 ps-0"
                :class="{'active' : (this.$route.name === 'DiseaseCard' || this.$route.path === '/disease-card')}"
                :to="{
                      name: 'DiseaseCard',
                      params: {id: index}
                }"
                :card="this.diagnoses"
                data-bs-toggle=""
                aria-expanded="false"
            >
              <h4 class="fw-bold">{{ card.name }}</h4>
            </router-link>
          </div>
        </div>
        <p class="text-500 fs--1 ps-4"><span>{{ getStartDate(card.startDate) }} - {{ getEndDate(card.endDate) }}</span></p>
        <!--        <p class="p-0 m-0 ps-4">Disturbance Frequency-->
        <!--          <span class="dot bg-primary ms-3"></span>-->
        <!--          <span class="dot bg-info"></span>-->
        <!--          <span class="dot bg-200"></span>-->
        <!--          <span class="dot bg-warning"></span>-->
        <!--          <span class="dot bg-danger"></span>-->
        <!--          <i class="fa fa-question-circle text-400 fa-sm ms-3" aria-hidden="true"></i>-->
        <!--        </p>-->
        <!--        <div class="d-flex">-->
        <!--          <div class="d-flex align-items-center">-->
        <!--            <p class="p-0 m-0 ps-4">Treatment</p>-->
        <!--          </div>-->
        <!--          <div class="d-flex align-items-center">-->
        <!--            <div class="progress rounded-3 mb-0 pb-0 ms-3 align-bottom" style="height: 10px; width: 200px;">-->
        <!--              <div class="progress-bar bg-progress-gradient border-end border-white border-2" role="progressbar" style="width: 160px" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"></div>-->
        <!--              <div class="progress-bar bg-200" role="progressbar" style="width: 40px" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>-->
        <!--            </div>-->
        <!--          </div>-->
        <!--        </div>-->
      </div>
    </div>
  </div>

</template>

<script>
import medicalCard from "../assets/json/medicalCard.json";
import moment from 'moment'

export default {
  name: "MedicalCard",
  data() {
    return {
      medicalCards: [],
    };
  },
  computed: {
    diagnoses() {
      console.log(medicalCard)
      return medicalCard
    }
  },
  methods: {
    getShortDate(unix) {
      return moment.unix(unix).format("MMM YYYY");
    },
    getStartDate(unix) {
      if (unix) {
        return this.getShortDate(unix)
      } else {
        return "unknown"
      }
    },
    getEndDate(unix) {
      if (unix) {
        return this.getShortDate(unix)
      } else {
        return "till now"
      }
    },
  },
  mounted() {
    this.medicalCards = medicalCard.diagnoses
    console.log(medicalCard)
    console.log(this.diagnoses)
  },
}
</script>

<style scoped>

</style>