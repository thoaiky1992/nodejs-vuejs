import Vue from 'vue';
window.axios = require('axios');
Vue.config.devtools = true;
import router from './routes';
import App from './components/App.vue';
import VueSocketIO from 'vue-socket.io';

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.defaults.headers.common['Content-Type'] = 'application/json';
window.axios.defaults.baseURL = 'http://localhost:5000';
//config socket.io client
const SocketInstance = new VueSocketIO({
	connection: 'http://localhost:5000'
});
Vue.use(SocketInstance)
new Vue({
 	el: "#app",
 	router,
 	render: h => h(App)
});