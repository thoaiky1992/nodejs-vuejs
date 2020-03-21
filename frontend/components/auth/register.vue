<template>
    <div>
        <Header></Header>
        <div class="page-header">
            <div class="page-header-image" style="background-image:url(assets/images/login.jpg)"></div>
            <div class="container">
                <div class="col-md-12 content-center">
                    <div class="card-plain">
                        <form class="form" method="" action="#">
                            <div class="header">
                                <div class="logo-container">
                                    <img src="assets/images/logo.svg" alt="">
                                </div>
                                <h5>Sign Up</h5>
                            </div>
                            <div class="content">                                                
                                <div class="input-group">
                                    <input type="text" v-model="name" class="form-control" placeholder="Enter User Name">
                                    <span class="input-group-addon">
                                        <i class="zmdi zmdi-account-circle"></i>
                                    </span>
                                </div>
                                <div class="input-group">
                                    <input type="email" v-model="email" class="form-control" placeholder="Enter Email">
                                    <span class="input-group-addon">
                                        <i class="zmdi zmdi-email"></i>
                                    </span>
                                </div>
                                <div class="input-group">
                                    <input type="password" v-model="password" placeholder="Password" class="form-control" />
                                    <span class="input-group-addon">
                                        <i class="zmdi zmdi-lock"></i>
                                    </span>
                                </div>         
                            </div>
                            <div class="checkbox">
                                    <input id="terms" type="checkbox">
                                    <label for="terms">
                                            I read and agree to the <a href="javascript:void(0);">terms of usage</a>
                                    </label>
                                </div>
                            <div class="footer text-center">
                                <a  class="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light" @click="singUp">SIGN UP</a>
                                <h6 class="m-t-20"><a class="link" href="sign-in.html">You already have a membership?</a></h6>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    </div>
</template>
<script>
import Header from './header.vue';
import Footer from './footer.vue';
export default {
    components :  { Header,Footer },
    data(){
        return {
            name : '',
            email : '',
            password : ''
        }
    },
    methods : {
        singUp(){
            axios.post('/api/register',{ name : this.name , email : this.email , password : this.password } )
            .then(res => {
                console.log(res.data)
            })
            .catch(err => console.log(err));
        }

    },

}
</script>