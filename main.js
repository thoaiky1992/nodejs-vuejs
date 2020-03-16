import Vue from 'vue';
Vue.config.devtools = true;
import router from './routes';
import App from './components/App.vue';
new Vue({
 	el: "#app",
 	router,
 	render: h => h(App)
});