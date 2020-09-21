<template>
<div class="home-wrap entry-content">
<div class="service-template section-entry">
	<div class="mid-content">
		<h1>Online конструктор</h1>
		<div id="service-editor" class="service-listing">
			<div class="odd-wrap">
				<div class="service-list odd">
				<div class="service-image">
					<img src="@/assets/images/paper-plane.png">
				</div>
					<div class="service-detail">
						<h3>Создавайте прямо сейчас</h3>
						<div class="service-content">
							<p>Конструктор поможет сделать отличные визитки для Вас и Вашей компании</p>
						</div>
					</div>
			</div>
			<div class="service-list odd">
				<div class="service-image">
					<img src="@/assets/images/layers.png">
				</div>
					<div class="service-detail">
						<h3>Оперативность</h3>
						<div class="service-content">
							<p>Как только заказ будет оплачен, срок изготовления не превысит одного рабочего дня</p>
						</div>
					</div>
			</div>
			<div class="service-list odd">
				<div class="service-image">
					<img src="@/assets/images/global.png">
				</div>
					<div class="service-detail">
						<h3>Не выходя из офиса</h3>
						<div class="service-content">
							<p>Создавайте необходимый дизайн в любое удобное для Вас время 24/7</p>
						</div>
					</div>
				</div>
			</div>
			<div class="evan-wrap">
				<div class="service-list even">
				<div class="service-image">
					<img src="@/assets/images/notebook.png">
				</div>
					<div class="service-detail">
						<h3>Конструктор прост в работе</h3>
						<div class="service-content">
							<p>Простой интерфейс с понятными всплывающими подсказками</p>
						</div>
				</div>
			</div>
			<div class="service-list even">
				<div class="service-image">
					<img src="@/assets/images/calculate.png">
				</div>
					<div class="service-detail">
						<h3>Калькулятор</h3>
						<div class="service-content">
							<p>Вы можете рассчитать стоимость изготовления заказа online, прямо на нашем сайте</p>
						</div>
					</div>
			</div>
			<div class="service-list even">
				<div class="service-image">
					<img src="@/assets/images/luxury.png">
				</div>
					<div class="service-detail">
						<h3>Итоговая цена</h3>
						<div class="service-content">
							<p>Без обращения к дизайнеру, стоимость печатной продукции ниже на 30%</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="maket-section section-entry">
	<h1>Макеты</h1>
		<div class="mid-content ">
		<router-link v-for="page in pages" :to="{path:'editor', query:{maket:page.query}}" class="makets-list">
			<div class="portfolio-wrap">
				<div class="card-wrap">
					<img :src="page.url"/>
				</div>
				<h3>{{page.title}}</h3>
			</div>
		</router-link>
	</div>
</div>
<div class="parallax-section">
	<div class="mid-content">
		<div class="content-area blank-section"></div>
	</div>
</div>
</div>
</template>

<script>
import Footer from '@/components/_footer'
export default {
	components:{
		Footer
	},
	data() {
		return {
			pages:{
				page1:{
					title:'Визитка 86см х 54см',
					query:'round',
					url:require('@/assets/images/card_86x54.png')
				},
				page2:{
					title:'Визитка 90см х 50см',
					query:'euro',
					url:require('@/assets/images/card_90x50.png')
				},
				page3:{
					title:'Визитка 90см х 55см',
					query:'rect',
					url:require('@/assets/images/card_90x55.png')
				}
			}
		}
	},
	mounted() {
		if (screen.width > 1200) {
		    let tl = new TimelineLite({delay: 0.25});
		    tl
		    	.staggerFrom('.odd', 2, {x: -30, opacity: 0, ease: Back.easeOut.config(4)}, 0.25)
		    	.staggerFrom('.even', 2, {x: 30, opacity: 0, ease: Back.easeOut.config(4)}, 0.25, 0)
	    	}
	    	document.addEventListener('touchstart',() => {});
		 }
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
	padding: 20px 0 40px;
}
.service-template{
	background-color: #fafafa;
	background: url('../assets/images/noise.png') repeat;
}
.service-list {
	padding: 15px;
	display: flex;
	align-items: center;
}
.service-image {
	display: flex;
    height: 75px;
    width: 75px;
    overflow: hidden;
    border: 3px solid #EEE;
    background-color: #fff;
    border-radius: 10px;
    justify-content: center;
  	align-items: center;
}
.service-image img {
    width: 50px;
}
.service-list.odd {
   flex-direction: row-reverse;
    text-align: right;
}
.service-list .service-detail {
    width: 75%;
    padding: 0 25px;
}
.service-list.even {
    /*float: right;*/
    text-align: left;
}
.service-listing{
	display: flex;
}
/*Makets*/
.maket-section{
	background-color: #f5f5f5;
}
.makets-list{
    padding: 10px;
    background-color: #fff;
    display: inline-block;
    transition: ease .8s;
    border-radius: 10px;
    box-shadow: 0 1px 2px 0 rgba(0,0,0,0.14);
    transition: box-shadow 300ms ease, transform 300ms ease;
    margin: 15px;
    border: 1px solid #eee;
}
.makets-list:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 18px 0 rgba(0,0,0,0.1);
}
.portfolio-wrap img {
	width: 340px
}
.portfolio-wrap {
	position: relative;
}
.card-wrap {
	background: #fafafa;
	transition: ease .5s;
	display: inline-flex;
	border-radius:5px;
}
.card-wrap:hover{
	background: #ffee00;
}
.parallax-section {
	height: 300px;
	position: relative;
	background: url(../assets/images/prlx.jpg) no-repeat fixed bottom center;
}
@media (max-width: 1200px) {
	.service-listing {flex-direction: column;}
	.service-list {flex-direction: column !important; text-align: center !important; padding:0; margin:50px 0;}
	.portfolio-wrap img {
		width:100%;
		height: 100%;
	}
	.entry-content h1{
		font-size: 9vw
	}
	.service-list .service-detail {padding:0;width:auto;margin-top: 10px}
	.service-content {margin-top: 10px}
	.parallax-section {background-position:center center;background-size: cover;background-attachment:scroll;height: 40vh}
	.evan-wrap {margin-top: -50px}
	.page-content {font-size: 4vw}
	.odd-wrap {margin-top: -25px}
}
</style>
