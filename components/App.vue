<template>
 	<div>
  		<h1>
   			{{ name }}
  		</h1>
 	</div>
</template>

<script>
	export default {
	 	name: "App",
	 	data(){
	 		return{
	 			name : 'Ky Smile'
	 		}
	 	}
	};
</script>
<style scoped>
	h1{
		color :red;
	}
</style>
