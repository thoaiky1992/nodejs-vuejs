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
								<h5>App Chat KỳSmile</h5>
							</div>
							<div class="content">                                                
								<div class="input-group input-lg">
									<input type="text" 
										class="form-control" 
										placeholder="Enter User Name"
										v-model="username"
									>
									<span class="input-group-addon">
										<i class="zmdi zmdi-account-circle"></i>
									</span>
								</div>
								<div class="input-group input-lg">
									<input 
										type="password" 
										placeholder="Password" 
										class="form-control"
										v-model="password" 
									>
									<span class="input-group-addon">
										<i class="zmdi zmdi-lock"></i>
									</span>
								</div>
							</div>
							<div class="footer text-center">
								<a @click="login" class="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light">Đăng nhập</a>
								<a href="index-2.html" class="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light"><i class="zmdi zmdi-facebook"></i> Đăng nhập với Facebook</a>
								<a href="index-2.html" class="btn l-cyan btn-round btn-lg btn-block waves-effect waves-light"><i class="zmdi zmdi-google"></i> Đăng nhập với Google</a>
								<h6 class="m-t-20"><a @click="forgetPassword" class="link">Quên mật khẩu?</a></h6>
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
	components : {
		Header,Footer
	},
	data(){
		return{
			username : '',
			password : ''
		}
	},
	methods : {
		login(){
			axios.post('http://localhost:5000/api/login',
				{ username : this.username}
			).then(res => {
				console.log(res.data)
				localStorage.setItem('token',res.data)
			}
			).catch(err => console.log(err.response));

		},
		forgetPassword(){
			this.$socket.emit('send-token',localStorage.getItem('token'))
		}
	},
	sockets: {
		connect() {
		console.log('socket connected. Authenticating...');
		this.$socket.emit('authenticate', {token: localStorage.getItem('token')})
		},

		authenticated() {
		console.log('Socket authenticated')
		},

		unauthorized(msg) {
		console.log('Socket unauthorized ' + JSON.stringify(msg.data))
		throw new Error(msg.data.type)
		},

		disconnect() {
		console.log('disconnect');
		}
	}
}
</script>