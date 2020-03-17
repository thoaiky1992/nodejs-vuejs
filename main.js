import Vue from 'vue';
window.axios = require('axios');
Vue.config.devtools = true;
import router from './routes';
import App from './components/App.vue';
import VueSocketIO from 'vue-socket.io'
const SocketInstance = new VueSocketIO({
	connection: 'http://localhost:5000'
  })
Vue.use(SocketInstance)
new Vue({
 	el: "#app",
 	router,
 	render: h => h(App)
});