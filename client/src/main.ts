import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// import { library } from '@fortawesome/fontawesome-svg-core'

// import { faMagnifyingGlass, faAngry } from '@fortawesome/free-solid-svg-icons'

// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const app = createApp(App).use(store).use(router)
app.mount("#app");
