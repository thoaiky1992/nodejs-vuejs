<template>
    <footer class="footer">
        <div class="container">
            <div class="copyright">
                &copy; {{ TimeNow }},
                <span>Designed by <a href="#" target="_blank">Kỳ Smile</a></span>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    computed : {
        TimeNow(){
			let currentYear = new Date().getFullYear();
			return currentYear;
		}
    }
}
</script>