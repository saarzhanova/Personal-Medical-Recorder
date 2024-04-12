<template>
  <div class="card card-chat overflow-hidden">
    <div class="card-body d-flex p-0 h-100">

      <div class="tab-content card-chat-content">
        <div class="tab-pane card-chat-pane active" id="chat-0" role="tabpanel" aria-labelledby="chat-link-0">
          <div class="chat-content-body" style="display: inherit;">

            <div class="conversation-info" data-index="0">
              <div class="h-100 overflow-auto scrollbar">
                <div class="d-flex position-relative align-items-center p-3 border-bottom">
                  <div class="avatar avatar-xl status-online">
                    <img class="rounded-circle" src="../../public/assets/img/team/avatar.png" alt="">

                  </div>
                  <div class="flex-1 ms-2 d-flex flex-between-center">
                    <h6 class="mb-0"><a class="text-decoration-none stretched-link text-700" href="../pages/user/profile.html">Annie</a></h6>
                    <div class="dropdown z-index-1">
                      <button class="btn btn-link btn-sm text-400 dropdown-toggle dropdown-caret-none me-n3" type="button" id="profile-dropdown-0" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><svg class="svg-inline--fa fa-cog fa-w-16" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg><!-- <span class="fas fa-cog"></span> Font Awesome fontawesome.com --></button>
                      <div class="dropdown-menu dropdown-menu-end border py-2" aria-labelledby="profile-dropdown-0"><a class="dropdown-item" href="#!">Mute</a>
                        <div class="dropdown-divider"></div><a class="dropdown-item" href="#!">Archive</a><a class="dropdown-item text-danger" href="#!">Delete</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="px-3 pt-2">
                  <div class="nav flex-column font-sans-serif fw-medium"><a class="nav-link d-flex align-items-center py-1 px-0 text-600" href="#!"><span class="conversation-info-icon"><svg class="svg-inline--fa fa-search fa-w-16 me-1" data-fa-transform="shrink-1 down-3" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.6875em;"><g transform="translate(256 256)"><g transform="translate(0, 96)  scale(0.9375, 0.9375)  rotate(0 0 0)"><path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" transform="translate(-256 -256)"></path></g></g></svg><!-- <span class="fas fa-search me-1" data-fa-transform="shrink-1 down-3"></span> Font Awesome fontawesome.com --></span>Search in Conversation</a><a class="nav-link d-flex align-items-center py-1 px-0 text-600" href="#!"><span class="conversation-info-icon"><svg class="svg-inline--fa fa-pencil-alt fa-w-16 me-1" data-fa-transform="shrink-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="pencil-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.5em;"><g transform="translate(256 256)"><g transform="translate(0, 0)  scale(0.9375, 0.9375)  rotate(0 0 0)"><path fill="currentColor" d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z" transform="translate(-256 -256)"></path></g></g></svg><!-- <span class="fas fa-pencil-alt me-1" data-fa-transform="shrink-1"></span> Font Awesome fontawesome.com --></span>Edit Nicknames</a><a class="nav-link d-flex align-items-center py-1 px-0 text-600" href="#!"><span class="conversation-info-icon"><svg class="svg-inline--fa fa-palette fa-w-16 me-1" data-fa-transform="shrink-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="palette" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.5em;"><g transform="translate(256 256)"><g transform="translate(0, 0)  scale(0.9375, 0.9375)  rotate(0 0 0)"><path fill="currentColor" d="M204.3 5C104.9 24.4 24.8 104.3 5.2 203.4c-37 187 131.7 326.4 258.8 306.7 41.2-6.4 61.4-54.6 42.5-91.7-23.1-45.4 9.9-98.4 60.9-98.4h79.7c35.8 0 64.8-29.6 64.9-65.3C511.5 97.1 368.1-26.9 204.3 5zM96 320c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm32-128c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128-64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm128 64c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" transform="translate(-256 -256)"></path></g></g></svg><!-- <span class="fas fa-palette me-1" data-fa-transform="shrink-1"></span> Font Awesome fontawesome.com --></span><span>Change Color</span></a><a class="nav-link d-flex align-items-center py-1 px-0 text-600" href="#!"><span class="conversation-info-icon"><svg class="svg-inline--fa fa-thumbs-up fa-w-16 me-1" data-fa-transform="shrink-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="thumbs-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg="" style="transform-origin: 0.5em 0.5em;"><g transform="translate(256 256)"><g transform="translate(0, 0)  scale(0.9375, 0.9375)  rotate(0 0 0)"><path fill="currentColor" d="M104 224H24c-13.255 0-24 10.745-24 24v240c0 13.255 10.745 24 24 24h80c13.255 0 24-10.745 24-24V248c0-13.255-10.745-24-24-24zM64 472c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zM384 81.452c0 42.416-25.97 66.208-33.277 94.548h101.723c33.397 0 59.397 27.746 59.553 58.098.084 17.938-7.546 37.249-19.439 49.197l-.11.11c9.836 23.337 8.237 56.037-9.308 79.469 8.681 25.895-.069 57.704-16.382 74.757 4.298 17.598 2.244 32.575-6.148 44.632C440.202 511.587 389.616 512 346.839 512l-2.845-.001c-48.287-.017-87.806-17.598-119.56-31.725-15.957-7.099-36.821-15.887-52.651-16.178-6.54-.12-11.783-5.457-11.783-11.998v-213.77c0-3.2 1.282-6.271 3.558-8.521 39.614-39.144 56.648-80.587 89.117-113.111 14.804-14.832 20.188-37.236 25.393-58.902C282.515 39.293 291.817 0 312 0c24 0 72 8 72 81.452z" transform="translate(-256 -256)"></path></g></g></svg><!-- <span class="fas fa-thumbs-up me-1" data-fa-transform="shrink-1"></span> Font Awesome fontawesome.com --></span>Change Emoji</a><a class="nav-link d-flex align-items-center py-1 px-0 text-600" href="#!"><span class="conversation-info-icon"><svg class="svg-inline--fa fa-bell fa-w-14 me-1" data-fa-transform="shrink-1" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="" style="transform-origin: 0.4375em 0.5em;"><g transform="translate(224 256)"><g transform="translate(0, 0)  scale(0.9375, 0.9375)  rotate(0 0 0)"><path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z" transform="translate(-224 -256)"></path></g></g></svg><!-- <span class="fas fa-bell me-1" data-fa-transform="shrink-1"></span> Font Awesome fontawesome.com --></span>Notifications</a></div>
                </div>
                <hr class="my-2">
                <div class="px-3" id="others-info-0">
                  <div class="title" id="shared-media-title-0"><a class="btn btn-link btn-accordion hover-text-decoration-none dropdown-indicator" href="#shared-media-0" data-bs-toggle="collapse" aria-expanded="false" aria-controls="shared-media-0">Shared media</a></div>
                  <div class="collapse" id="shared-media-0" aria-labelledby="shared-media-title-0" data-parent="#others-info-0">
                    <div class="row mx-n1">
                      <div class="col-6 col-md-4 px-1"><a href="../../public/assets/img/chat/1.jpg" data-gallery="images-1"><img class="img-fluid rounded-1 mb-2" src="../../public/assets/img/chat/1.jpg" alt=""></a></div>
                      <div class="col-6 col-md-4 px-1"><a href="../../public/assets/img/chat/2.jpg" data-gallery="images-1"><img class="img-fluid rounded-1 mb-2" src="../../public/assets/img/chat/2.jpg" alt=""></a></div>
                      <div class="col-6 col-md-4 px-1"> <a href="../../public/assets/img/chat/3.jpg" data-gallery="images-1"><img class="img-fluid rounded-1 mb-2" src="../../public/assets/img/chat/3.jpg" alt=""></a></div>
                      <div class="col-6 col-md-4 px-1"> <a href="../../public/assets/img/chat/4.jpg" data-gallery="images-1"><img class="img-fluid rounded-1 mb-2" src="../../public/assets/img/chat/4.jpg" alt=""></a></div>
                      <div class="col-6 col-md-4 px-1"> <a href="../../public/assets/img/chat/5.jpg" data-gallery="images-1"><img class="img-fluid rounded-1 mb-2" src="../../public/assets/img/chat/5.jpg" alt=""></a></div>
                      <div class="col-6 col-md-4 px-1"> <a href="../../public/assets/img/chat/6.jpg" data-gallery="images-1"><img class="img-fluid rounded-1 mb-2" src="../../public/assets/img/chat/6.jpg" alt=""></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="chat-content-scroll-area scrollbar">
              <div class="d-flex position-relative p-3 border-bottom mb-3 align-items-center">
                <div class="avatar avatar-2xl me-3">
                  <img class="rounded-circle" src="../../public/assets/img/team/avatar.png" alt="">

                </div>
                <div class="flex-1">
                  <h6 class="mb-0">Annie</h6>
                  <p class="mb-0">Hi! I'm Annie, you personal medical assistant. Tell me how are you feeling today.
                  </p>
                </div>
              </div>
              <div class="text-center fs--2 text-500"><span>April 13, 2024, 08:54 am</span></div>

              <div v-for="message in this.dialog" :key="message.id">
                <div class="d-flex p-3" v-if="this.isAMIE(message.speaker)">
                  <div class="avatar avatar-l me-2">
                    <img class="rounded-circle" src="../../public/assets/img/team/avatar.png" alt="">
                  </div>
                  <div class="flex-1">
                    <div class="w-xxl-75">
                      <div class="hover-actions-trigger d-flex align-items-center">
                        <div class="chat-message bg-200 p-2 rounded-2">{{ message.message }}</div>
                      </div>
                      <div class="text-400 fs--2"><span>{{ message.time }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="d-flex p-3" v-else>
                  <div class="flex-1 d-flex justify-content-end">
                    <div class="w-100 w-xxl-75">
                      <div class="hover-actions-trigger d-flex flex-end-center">
                        <div class="bg-primary text-white p-2 rounded-2 chat-message light">
                          <p class="mb-0">{{ message.message }} </p>
                        </div>
                      </div>
                      <div class="text-400 fs--2 text-end">{{ message.time }}<svg class="svg-inline--fa fa-check fa-w-16 ms-2 text-success" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg><!-- <span class="fas fa-check ms-2 text-success"></span> Font Awesome fontawesome.com -->
                      </div>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>

        <div class="w-100 mb-3 ms-4">
          <span class="badge badge-soft-primary rounded-pill fs--2 me-2 mt-2">eat</span>
          <span class="badge badge-soft-primary rounded-pill fs--2 me-2 mt-2">sleep</span>
          <span class="badge badge-soft-primary rounded-pill fs--2 me-2 mt-2">walk</span>
          <span class="badge badge-soft-primary rounded-pill fs--2 me-2 mt-2">walk</span>
          <span class="badge badge-soft-primary rounded-pill fs--2 me-2 mt-2">talk</span>
          <span class="badge badge-soft-primary rounded-pill fs--2 me-2 mt-2">study</span>
        </div>

        <form class="chat-editor-area">
          <div class="emojiarea-editor outline-none scrollbar" contenteditable="true" placeholder="Type your message"></div>
          <input class="d-none" type="file" id="chat-file-upload">
          <label class="chat-file-upload cursor-pointer" for="chat-file-upload"><svg class="svg-inline--fa fa-paperclip fa-w-14" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="paperclip" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M43.246 466.142c-58.43-60.289-57.341-157.511 1.386-217.581L254.392 34c44.316-45.332 116.351-45.336 160.671 0 43.89 44.894 43.943 117.329 0 162.276L232.214 383.128c-29.855 30.537-78.633 30.111-107.982-.998-28.275-29.97-27.368-77.473 1.452-106.953l143.743-146.835c6.182-6.314 16.312-6.422 22.626-.241l22.861 22.379c6.315 6.182 6.422 16.312.241 22.626L171.427 319.927c-4.932 5.045-5.236 13.428-.648 18.292 4.372 4.634 11.245 4.711 15.688.165l182.849-186.851c19.613-20.062 19.613-52.725-.011-72.798-19.189-19.627-49.957-19.637-69.154 0L90.39 293.295c-34.763 35.56-35.299 93.12-1.191 128.313 34.01 35.093 88.985 35.137 123.058.286l172.06-175.999c6.177-6.319 16.307-6.433 22.626-.256l22.877 22.364c6.319 6.177 6.434 16.307.256 22.626l-172.06 175.998c-59.576 60.938-155.943 60.216-214.77-.485z"></path></svg><!-- <span class="fas fa-paperclip"></span> Font Awesome fontawesome.com --></label>
          <div class="btn btn-link emoji-icon" data-emoji-button="data-emoji-button"><svg class="svg-inline--fa fa-laugh-beam fa-w-16" aria-hidden="true" focusable="false" data-prefix="far" data-icon="laugh-beam" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm141.4 389.4c-37.8 37.8-88 58.6-141.4 58.6s-103.6-20.8-141.4-58.6S48 309.4 48 256s20.8-103.6 58.6-141.4S194.6 56 248 56s103.6 20.8 141.4 58.6S448 202.6 448 256s-20.8 103.6-58.6 141.4zM328 152c-23.8 0-52.7 29.3-56 71.4-.7 8.6 10.8 11.9 14.9 4.5l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c4.1 7.4 15.6 4 14.9-4.5-3.1-42.1-32-71.4-55.8-71.4zm-201 75.9l9.5-17c7.7-13.7 19.2-21.6 31.5-21.6s23.8 7.9 31.5 21.6l9.5 17c4.1 7.4 15.6 4 14.9-4.5-3.3-42.1-32.2-71.4-56-71.4s-52.7 29.3-56 71.4c-.6 8.5 10.9 11.9 15.1 4.5zM362.4 288H133.6c-8.2 0-14.5 7-13.5 15 7.5 59.2 58.9 105 121.1 105h13.6c62.2 0 113.6-45.8 121.1-105 1-8-5.3-15-13.5-15z"></path></svg><!-- <span class="far fa-laugh-beam"></span> Font Awesome fontawesome.com --></div>
          <button class="btn btn-sm btn-send">Send</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import chats from "../assets/json/chat.json";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Chat",
  data() {
    return {
      chatList: {}
    }
  },
  computed: {
    dialog() {
      if (this.$route.query.dialog) {
        return this.chatList.conversations[this.$route.query.dialog-1].dialogue
      } else {
        return this.chatList.conversations[0].dialogue
      }
    }
  },
  methods: {
    isAMIE(speaker) {
      return speaker === "AMIE"
    },
  },
  created(){
    this.chatList = chats
    console.log('1', this.chatList)
    console.log('2', this.chatList.conversations)
    console.log('3', this.chatList.conversations[0])
    console.log('4', this.dialog)
  }
}
</script>

<style scoped>

</style>