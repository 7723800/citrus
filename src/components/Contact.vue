<template>
	<section class="wrap-contact entry-content">
		<div class="mid-content">
		<div class="contact-wrap">
			<div class="about">Разрешите нам создать лучший сайт в вашей нише</div>
		</div>
		<div class="astana-warp">
			<div class="astana">
				<Astana/>
			</div>
			<div class="contacts">Qazaqstan<br><span><p>Z10P6B6 Nur-Sultan</p><p>Kenesary 4</p></span><p><br><a href="tel:+77017723800">+7 701 772 38 00</a><br><a href="mailto:thecitrus.kz@mail.ru">thecitrus.kz@mail.ru</a></p></div>
		</div>
	</div>
	</section>
</template>
<script>
import Astana from '@/components/_astana'
	export default {
		components: {
			Astana
		}
	}
</script>
<style>
	.contacts {font-size: 30px;margin: 10px 0 20px}
	.contacts p {
		font-size: 18px
	}
	.contacts span{
		font-size: 20px;
	}
	.about {
		font-size: 9vw;
		text-align: left;
		padding-top: 20px
	}
	.wrap-contact {background: url('../assets/images/noise.png') repeat;background-color: #fafafa }
	.astana-warp {display: flex;justify-content: center;align-items: center;flex-direction: column;margin-top: 50px}
	.astana {width: 40vw}
</style>