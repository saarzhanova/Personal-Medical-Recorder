<template>
    <div style="position:absolute; top:20px; left:35px; z-index:1000000">
      <button class="btn icon-item icon-item-sm shadow-none p-0 me-1 ms-md-2" type="button" data-event="prev" data-bs-toggle="tooltip" title="" data-bs-original-title="Previous" aria-label="Previous"><svg class="svg-inline--fa fa-arrow-left fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg><!-- <span class="fas fa-arrow-left"></span> Font Awesome fontawesome.com --></button>
    </div>
  <div class="row ps-4 me-4 mb-3">
    <span class="fw-bold ps-4 col 8">My Medical Card</span>
    <div class="col-4 d-flex flex-row-reverse">
      <button type="button" class="btn btn-primary">Save</button>
    </div>
  </div>
    <div class="text-center me-4" >
      <div class="card-header text-center mt-5">
        <h1 class="me-4">
          <input type="text"
                 style="width:330px;"
                 class="bg-body border-0 text-center me-4"
                 v-model="editedName"
                 @keyup.enter="saveName"
                 autofocus
          >
        </h1>
        <h4 class="text-500 fs--1 mt-3 ms-5">
          <span><input type="text"
                       style="width:100px;"
                       class="bg-body border-0 text-center me-0 pe-0"
                       v-model="editedStartDate"
                       @keyup.enter="saveStartDate"
                       autofocus
          ></span> - <span> <input type="text"
                                   style="width:100px;"
                                   class="bg-body border-0 text-center me-4"
                                   v-model="editedEndDate"
                                   @keyup.enter="saveEndDate"
                                   autofocus
        ></span></h4>
      </div>
      <div class="card-body">
        <p class="mb-0 pb-0">Contraindications</p>
        <div class="w-100" style="width: 200px;">
        </div>

        <div class="border-dashed-bottom my-3 d-lg-none ms-3"></div>

        <p class="mb-0 pb-0">Requirements</p>
        <div class="w-100" style="width: 200px;">
        </div>

        <div class="border-dashed-bottom my-3 d-lg-none ms-3"></div>

        <p class="mb-0 pb-0">Suggestions</p>
        <div class="w-100" style="width: 200px;">
        </div>
      </div>
    </div>
</template>

<script>
import moment from "moment";
import medicalCard from "@/assets/json/medicalCard.json";

export default {
  name: "DiseaseCardModified",
  data() {
    return {
      medicalCard: [],
      editedName: '',
      editedStartDate: '',
      editedEndDate: '',
      clicked: false,
      activeIndex: undefined
    };
  },
  methods: {
    saveName() {
      console.log(this.editedName)
      medicalCard.diagnoses[0].name = this.editedName;
    },
    saveStartDate() {
      console.log(this.editedName)
      medicalCard.diagnoses[0].name = this.editedName;
    },
    saveEndDate() {
      console.log(this.editedName)
      medicalCard.diagnoses[0].name = this.editedName;
    },
    getFrequency(feature) {
      if (feature.frequencyFrom === feature.frequencyTo) {
        return feature.frequencyFrom + " per " + feature.period
      } else {
        return feature.frequencyFrom + "-" + feature.frequencyTo + " per " + feature.period
      }
    },
    setActive(index){
      if (this.activeIndex === index) {
        this.activeIndex = undefined
      } else {
        this.activeIndex = index
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
  created() {
    // this.medicalCard = medicalCard.diagnoses[this.$route.params.id];
    this.medicalCard = medicalCard.diagnoses[0];
    this.editedName = this.medicalCard.name
    this.editedStartDate = this.medicalCard.startDate
    this.editedEndDate = this.medicalCard.endDate
    console.log(this.medicalCard)
  },
}
</script>

<style scoped>

</style>