import Vue from 'vue'
//Dòng này để import vue-router
import Router from 'vue-router'
import login from './components/auth/login.vue'
import register from './components/auth/register.vue';
Vue.use(Router)

const router = new Router({

    mode: 'history',
    routes: [ // bao gồm danh sách route
       
        { path: '/' , component : login },
		{ path: '/register' , component : register },
    ]
})


export default router;