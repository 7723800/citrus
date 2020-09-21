<template>
	<div class="not-found-wrap">
		<div class="__message">
			<h1>Страница не найдена</h1>
			<router-link to="/" class="btnmodal btnHover">На Главную</router-link>
		</div>
	</div>
</template>
<script>
	export default {
		components: {
		}
	}
</script>
<style scoped>
	.not-found-wrap{
		height:calc(100vh - 360px);
		background: url("../assets/images/404.svg") 98% 85px / 70vw auto no-repeat;
		display: flex;
		justify-content: center;
	}
	.btnHover{
		padding:20px 65px !important;
	}
	.__message	{
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	@media (max-width: 1366px) {
		.not-found-wrap {
			background-size: 40vw
		}
	    .__message	{
			display: flex;
			justify-content: flex-end;
		}
	}
	@media (max-width: 1200px) {
		.not-found-wrap{
			padding: 0 3vw;
			height:calc(80vh);
			background-size: 90vw;
			align-items:flex-end;
			background-position: 80% 83px;
		}
		.btnHover {
			font-size: 22px;
			
		}
	}
</style>