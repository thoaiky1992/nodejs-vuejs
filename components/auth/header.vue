<template>
	<nav class="navbar navbar-expand-lg fixed-top navbar-transparent">
	    <div class="container">        
	        <div class="navbar-translate n_logo">
	            <button class="navbar-toggler" type="button">
	                <span class="navbar-toggler-bar bar1"></span>
	                <span class="navbar-toggler-bar bar2"></span>
	                <span class="navbar-toggler-bar bar3"></span>
	            </button>
	        </div>
	        <div class="navbar-collapse">
	            <ul class="navbar-nav">
	                <li class="nav-item">
	                    <a class="nav-link" title="Follow us on Google" href="#" target="_blank">
	                        <i class="zmdi zmdi-google"></i>
	                        <p class="d-lg-none d-xl-none">Google</p>
	                    </a>
	                </li>
	                <li class="nav-item">
	                    <a class="nav-link" title="Like us on Facebook" href="#" target="_blank">
	                        <i class="zmdi zmdi-facebook"></i>
	                        <p class="d-lg-none d-xl-none">Facebook</p>
	                    </a>
	                </li>
	                <li class="nav-item">
	                    <a class="nav-link" title="Follow us on Github" href="#" target="_blank">                        
	                        <i class="zmdi zmdi-github"></i>
	                        <p class="d-lg-none d-xl-none">Github</p>
	                    </a>
	                </li>                
	                <li class="nav-item">
	                    <!-- <a class="nav-link btn btn-primary btn-round" href="sign-up.html">Đăng kí</a> -->
						<router-link class="nav-link btn btn-primary btn-round" to="/register">Đăng kí</router-link>
						<router-link class="nav-link btn btn-success btn-round" to="/">Đăng nhập</router-link>
	                </li>
	            </ul>
	        </div>
	    </div>
	</nav>
</template>
<style scoped>
	.btn{
		width: 120px;
	}
</style>
<script>
	export default {
		
	}
</script>