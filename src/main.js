import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

import firebase from "firebase";
import { firestorePlugin } from "vuefire";
import vuetify from "./plugins/vuetify";
import "@babel/polyfill";

Vue.use(firestorePlugin);

export const db = firebase.firestore();

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
