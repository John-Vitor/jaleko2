import Vue from 'vue';
import VueResource from 'vue-resource';
//import App from './App.vue'
// import Vue from 'vue'
import VueYoutube from 'vue-youtube';




Vue.use(VueYoutube)
Vue.use(VueResource);

//new Vue({
//  render: h => h(App),
//}).$mount('#app')


new Vue({
  el: '#app',

  data: {
    Videos: [
      // names of Videos
      {name: "video 1"}
    ], 
    search: ""
  }


})


