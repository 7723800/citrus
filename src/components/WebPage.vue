
<template>
<div class="wrapper-web">
    <div class="noise-wrap">
    	<full-page ref="fullpage" :options="options" id="fullpage">
<seo-banner v-if="laptopWidth" ref="seobanner"></seo-banner>
<mobile-banner v-else ref="mobilebanner"></mobile-banner>
<section id="to-left" class="section padding-top">
    <div class="slide1-web">
        <div id="text-mobile" class="text-mobile-web">
            <h1></h1>
            <p>Мы создаем эффективные и удобные интерфейсы для мобильных устройств и web-проектов, дизайн которых радует глаз, и вместе с тем направлен на простое решение задач взаимодействия с пользователем.</p>
        </div>
        <div id="parallax-apps">
            <BoxSvg/>
            <Cube1Svg/>
            <Cube2Svg/>
            <ButtonSvg/>
            <Smartphone/>
        </div>
        <Swipe v-show="!laptopWidth" ref="slide1Swipe"/>
    </div>
</section>
<section id="from-right" class="section padding-top">
    <div class="slide2-web">
        <div id="text-web" class="text-mobile-web">
            <h1></h1>
            <p>Если Вы решили создать бизнес-проект в интернете, то Вам непременно потребуется помощь профессионалов. Подключение SMS сервиса. Интеграция с 1С Управление Торговлей. Прием платежей Visa/Mastercard.</p>
        </div>
        <div id="parallax-web">
            <CardWeb/>
            <Laptop/>
            <Pocket/>
            <Dots/>
            <Cubeweb1/>
            <Cubeweb2/>
        </div>
        <Swipe v-show="!laptopWidth" ref="slide2Swipe"/>
    </div>
</section>
<section id="advantages" class="section">
   <div class="mid-content">
	   <h1>Почему вам стоит обратиться к нам</h1>
		<div class="web-services">
			<div class="col-sm-4">
			<div class="feature-box-icon">
                <i class="far fa-code"></i>
            </div>
			<div class="content">
			<h2>Без шаблона</h2>
				<p>Используя современные технологии, такие как <b>Node.js, Vue, React, Laravel</b> мы создаем функциональные и элегантные решения</p>
			</div>
		</div>
		<div class="col-sm-4">
			<div class="feature-box-icon">
				<i class="far fa-paint-brush"></i>
            </div>
			<div class="content">
			<h2>Дизайн</h2>
				<p>Индивидуальная разработка дизайна. Вы получите современный адаптивный дизайн, отвечающий всем новым тенденциям</p>
			</div>
		</div>
		<div class="col-sm-4">
			<div class="feature-box-icon">
                <i class="far fa-money-bill"></i>
            </div>
			<div class="content">
			<h2>Доступные цены</h2>
				<p>Комплексное формирование тарифов, включает в себя все необходимые услуги для привлечения клиентов без лишних затрат</p>
			</div>
		</div>
        <div class="web-mobile">
            <WebMobile/>
        </div>
		<div class="col-sm-4">
			<div class="feature-box-icon">
				<i class="far fa-chart-line"></i>
            </div>
			<div class="content">
			<h2>Комплексный подход</h2>
				<p>Помимо разработки проекта мы оказываем услуги по продвижению в Интернете. Вы получите не только красивый и функциональный дизайн, но и целевых посетителей</p>
			</div>
		</div>
		<div class="col-sm-4">
			<div class="feature-box-icon">
                <i class="far fa-cogs"></i>
            </div>
			<div class="content">
			<h2>Разработка</h2>
				<p>Даже для простых проектов могут быть применены как стандартные решения, так и нестандартные. Мы готовы выполнить задачи любой сложности</p>
			</div>
		</div>	
		<div class="col-sm-4">
			<div class="feature-box-icon">
                <i class="far fa-wrench"></i>
            </div>
			<div class="content">
			<h2>Поддержка</h2>
				<p>Своевременная техническая поддержка гарантирует безотказную работу Вашего проекта и его совершенствование по ходу развития Вашего бизнеса</p>
			</div>
		</div>		
		</div>
	    </div>
    </section>
<section id="cases" class="section">
   <div class="mid-content">
	   <h1>Наши проекты</h1>
	  <div class="products-wrap">
	<div class="container-services products shadow">
		<div class="row-web">
			<div class="dots">
				<span class="dot" style="background:#ED594A;"></span>
				<span class="dot" style="background:#FDD800;"></span>
				<span class="dot" style="background:#5AC05A;"></span>
			</div>
			<span class="address">httpы://nashabechka.kz</span>
				<div class="bars">
					<span class="bar"></span>
					<span class="bar"></span>
					<span class="bar"></span>
			</div>
		</div>
		<div class="">
			<a class="watch-portfolio" href="https://nashabechka.kz/" target="_blank"><img src="@/assets/images/nashabechka.jpg"></a>
		</div>
		 <div class="content">
			<p>Сервис круглосуточной доставки блюд восточной кухни</p>
		</div>
	</div>
	<div class="container-services products shadow">
		<div class="row-web">
			<div class="dots">
				<span class="dot" style="background:#ED594A;"></span>
				<span class="dot" style="background:#FDD800;"></span>
				<span class="dot" style="background:#5AC05A;"></span>
			</div>
			<span class="address">https://estidea.kz</span>
			<div class="bars">
					<span class="bar"></span>
					<span class="bar"></span>
					<span class="bar"></span>
			</div>
		</div>
		<div class="">
			<a class="watch-portfolio" href="https://estidea.kz" target="_blank"><img src="@/assets/images/estidea.jpg"></a>
		</div>
		 <div class="content">
			<p>Интернет-магазин необычных вещиц</p>
		</div>
	</div>	
	<div class="container-services products shadow">
		<div class="row-web">
			<div class="dots">
				<span class="dot" style="background:#ED594A;"></span>
				<span class="dot" style="background:#FDD800;"></span>
				<span class="dot" style="background:#5AC05A;"></span>
			</div>
			<span class="address">https://donato.kz</span>
				<div class="bars">
					<span class="bar"></span>
					<span class="bar"></span>
					<span class="bar"></span>
				</div>
		</div>
		<div class="">
			<a class="watch-portfolio" href="https://donato.kz" target="_blank"><img src="@/assets/images/donato.jpg"></a>
		</div>
		 <div class="content">
			<p>Интернет-магазин одежды<br>премиум класса</p>
		</div>
	</div>
	<div class="container-services products shadow">
		<div class="row-web">
			<div class="dots">
				<span class="dot" style="background:#ED594A;"></span>
				<span class="dot" style="background:#FDD800;"></span>
				<span class="dot" style="background:#5AC05A;"></span>
			</div>
			<span class="address">https://auradostavka.kz</span>
				<div class="bars">
					<span class="bar"></span>
					<span class="bar"></span>
					<span class="bar"></span>
				</div>
		</div>
		<div class="">
			<a class="watch-portfolio" href="https://auradostavka.kz" target="_blank"><img src="@/assets/images/aura-verdant.jpg"></a>
		</div>
		 <div class="content">
			<p>Сайт доставки ресторана Aura</p>
		</div>
	</div>
	</div>		
 </div>
	<div class="book">
		<div class="mid-content">
			<div class="call-to-action">
				<h2>Нужен функциональный интернет-магазин?</h2>
				<p>Современный дизайн. Минимальные сроки. Адекватная цена.</p>
				<a class="btnHover" @click="showModal = !showModal">Обращайтесь</a>
			</div>        		
		</div>
	</div>
</section>
<section class="section fp-auto-height padding-top">
	<perticles-web ref="particles"></perticles-web>
	<Footer/>
</section>
</full-page>
<div v-show="showModal" class="modal">
  <div class="modal-content animate">
  	 <div @click="showModal = !showModal" class="close" title="Закрыть">&times;</div>
    <div class="imgcontainer">
      <img src="@/assets/images/laptop-money.png" class="avatar">
    </div>
    <div class="container">
		<input v-model="orderFormName" class="order" type="text" placeholder="Ваше имя" name="name" required >
        <transition name="fade-alert">
            <div v-if="popupAlert.names.event" class="popupalert-container"><span class="popupalert" id="myPopup">Введите имя</span></div>
        </transition>
		<input v-model="orderFormPhone" id="phone" class="order" type="text" placeholder="+7 777 777 77 77" v-mask="'+# ### ### ## ##'" name="phone" required>
        <transition name="fade-alert">
            <div v-if="popupAlert.phone.event" class="popupalert-container"><span class="popupalert" id="myPopup">Введите номер</span></div>
        </transition>
        <input v-model="orderFormEmail" class="email-frog" type="email" placeholder="Ваше email" name="email" required >
    </div>
     <div @click="sendOrder" type="button" class="btnmodal btnHover">Заказать</div>
  </div>
</div>
  <div v-if="isBubbles" class="bubbles-container">
    <div class="bubbles">
      <div class="bubble">
        <div class="circle"></div>
      </div>
      <div class="bubble">
        <div class="circle"></div>
      </div>
      <div class="bubble">
        <div class="circle"></div>
      </div>
      <div class="bubble">
        <div class="circle"></div>
      </div>
      <div class="bubble">
        <div class="circle"></div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import scrollOverflow from 'fullpage.js/vendors/scrolloverflow'
import ScrollMagic from 'scrollmagic'
import Parallax from 'parallax-js'
import 'imports-loader?define=>false!fullpage.js/dist/fullpage.min.css'
import SeoBanner from '@/components/_seoBanner'
import WebMobile from '@/components/_webMobile'
import ParticlesWeb from '@/components/_particles_web'
import BoxSvg from '@/components/_boxSvg'
import Footer from '@/components/_footer'
import Cube1Svg from '@/components/_cube1Svg'
import Cube2Svg from '@/components/_cube2Svg'
import ButtonSvg from '@/components/_buttonSvg'
import Smartphone from '@/components/_smartphone'
import CardWeb from '@/components/_card'
import Pocket from '@/components/_pocket'
import Dots from '@/components/_dots'
import Cubeweb1 from '@/components/_cubeweb1'
import Cubeweb2 from '@/components/_cubeweb2'
import Laptop from '@/components/_laptop'
import MobileBanner from '@/components/_mobileBanner'
import Swipe from '@/components/_swipe'

export default {
	components: {
        ScrollMagic,
		'seo-banner': SeoBanner,
        WebMobile,
        'perticles-web': ParticlesWeb,
        BoxSvg,
        Footer,
        Cube1Svg,
        Cube2Svg,
        ButtonSvg,
        Smartphone,
        CardWeb,
        Pocket,
        Dots,
        Cubeweb1,
        Cubeweb2,
        Laptop,
        'mobile-banner':MobileBanner,
        Swipe
	},
    data() {
        return {
            showModal: false,
            ajaxSend: true,
            laptopWidth:true,
            popupAlert:{
                names:{event:false},
                phone:{event:false}
            },
            textMobileH1:'Дизайн UI/UX интерфейса',
            textWebH1:'e-Shop разработка',
            delayAlertHide:0,
            delayAlertShow:0,
            webMobile:true,
            orderFormName:null,
            orderFormPhone:null,
            orderFormEmail:null,
            isBubbles:false,
            timeSlide:1.2,
            timeCounter:0,
            options: {
            	licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
                anchors: ['banner', 'apps', 'web', 'advantage', 'case', 'footer'],
                lockAnchors: true,
                paddingTop:'75px',
                navigation: true,
                navigationPosition: 'right',
            	showActiveTooltip: true,
                easingcss3:'cubic-bezier(0.645, 0.045, 0.355, 1)',
                scrollingSpeed: 1000,
                scrollOverflow: true,
                afterLoad: (origin, destination, direction) => {
                    if(screen.width > 1200) {
                        if (destination.anchor == 'apps') this.$refs.seobanner.animateAll.progress(0);
                    }
                },
                onLeave: (origin, destination, direction) => {
                    // console.log(destination.anchor);
                    switch(destination.anchor) {
                        case 'banner': {
                            if (screen.width > 1200) this.$refs.seobanner.animateAll.play();
                            else this.$refs.mobilebanner.mobileBanner.play();
                            this.parallaxApps.disable()
                        }
                        break
                        case 'apps': {
                            this.parallaxWeb.disable()
                            this.parallaxApps.enable()
                            if (direction == 'up') {
                                if(screen.width > 1200) this.slideUp()
                                } else {
                                	this.animateSlideApp
                                    if(screen.width > 1200) this.$refs.seobanner.animateAll.pause()
                                    else this.$refs.mobilebanner.mobileBanner.pause()
                                    
                                }
                            }
                        break

                        case 'web': {
                            this.parallaxWeb.enable()
                            this.parallaxApps.disable()
                            if (direction == 'down') {
                                if(screen.width > 1200){this.slideDown()}
                                this.animateSlideWeb
                                }
                            }
                        break

                        case 'advantage': this.parallaxWeb.disable()
                        break
                    }
                }
            },
        }
    },
    created() {
        if(screen.width < 1200) {
            this.options.navigation = false,
            this.laptopWidth = false
        }
    },
    mounted() {
        this.clickFpNav()
        this.intervalFrog
        console.clear();
    },
    methods: {
        showSnackBar() {
          	let x = document.getElementById("snackbar");
          	x.className = "show-snack";
          	setTimeout(function(){ x.className = x.className.replace("show-snack", ""); }, 3000);
        },
        sendOrder() {
            this.ajaxSend = true;
            let elements = document.querySelectorAll('.order');
            for (let elm of elements) {
                if (elm.name == 'name' && elm.value == '') this.setTimeoutFoo(this.popupAlert.names);
                if (elm.name == 'phone' && elm.value == '') this.setTimeoutFoo(this.popupAlert.phone)
            }
            this.delayAlertHide = 0;
            this.delayAlertShow = 0;
            if (this.ajaxSend) {this.ajaxFetch();this.isBubbles = true;this.showModal = false;this.orderFormName = null;this.orderFormPhone = null;}
        },
        setTimeoutFoo(p) {
            setTimeout(() => {
                p.event = true;
            }, this.delayAlertShow);
            setTimeout(() => {
                p.event = false;
            }, 3000 + this.delayAlertHide);
            this.delayAlertHide += 200;
            this.delayAlertShow += 200;
            this.ajaxSend = false;
        },
        ajaxFetch() {
            fetch('https://data.thecitrus.kz/order.php',{
            method:'post',
            body: JSON.stringify({name:this.orderFormName,phone:this.orderFormPhone, emlhide:this.orderFormEmail,time:this.timeCounter})
            })  
            .then((response) => {
            	this.isBubbles = false;this.showSnackBar();
            }) 
        },
        slideDown() {
            let slideDown = new TimelineMax();
              slideDown
                .fromTo("#to-left", this.timeSlide, {x:"0%"},{x:"-100%", ease: Power2.easeInOut},0)
                .fromTo("#from-right", this.timeSlide, {x:"100%"},{x:"0%", ease: Power2.easeInOut},0)
        },
        slideUp() {
            let slideUp = new TimelineMax();
              slideUp
                .fromTo("#to-left", this.timeSlide, {x:"-100%"},{x:"0%", ease:Power2.easeInOut},0) 
                .fromTo("#from-right", this.timeSlide, {x:"0%"},{x:"100%", ease:Power2.easeInOut},0)
        },
        clickFpNav() {
            let fpNav = document.querySelectorAll('#fp-nav > ul > li');
            for(let nav of fpNav) {
                nav.addEventListener('click', (e) => {
                    let moveToNav = nav.querySelector('a').getAttribute("href").substring(1);
                    let activeSlide = this.$refs.fullpage.api.getActiveSection().anchor;
                    if(activeSlide != 'apps' && moveToNav == 'banner') this.slideUp()
                    if(activeSlide != 'web') {
                        if(moveToNav == 'advantage' || moveToNav == 'case' || moveToNav == 'footer') this.slideDown()
                    }
                })
            }
        },
    },
    computed: {
        animateSlideApp() {
            let svgsSlideUp = new TimelineMax();
               svgsSlideUp
                .from("#box_svg_app", 2, {y:"-300%",opacity:0, ease:Back.easeOut.config(0.7)})
                .from("#cube_1_app", 2, {y:"-300%",opacity:0, ease:Back.easeOut.config(0.7)},"-=1.7")
                .from("#cube_2_app", 2, {y:"-300%",opacity:0, ease:Back.easeOut.config(0.7)},"-=2 ")
                .from("#button_svg_app", 2, {y:"-500%",opacity:0, ease:Back.easeOut.config(0.7)},"-=1.8")
                .to("#text-mobile h1", 2, {scrambleText:{text:this.textMobileH1, chars:"023456789", ease:Linear.easeNone}},"-=1.5")
                .from("#smartphone", 1, {x:"100%",opacity:0, ease:Back.easeOut.config(1.2)},"-=1.5")
                .from("#screen", 1, {opacity:0},"-=0.5")
                .staggerFrom("#screen path:not(#border)", 0.04, {x:-100,opacity:0,ease:Linear.easeNone},0.04,"-=1")
                .from("#scroll", 1, {opacity:0},"-=0.5")
                .from("#text-mobile p", 1, {opacity:0, ease:Linear.easeNone},"-=1.5")
                .fromTo(this.$refs.slide1Swipe.$el, 0.5, {alpha:0}, {alpha:1, ease:Linear.easeNone}, "-=1.5")
            return svgsSlideUp
        },
        animateSlideWeb() {
            let svgsSlideUp = new TimelineMax();
               svgsSlideUp
                .from("#cubeweb1", 2, {x:"-400%",opacity:0, ease:Back.easeOut.config(0.7)},"+=0.5")
                .from("#cubeweb2", 2, {x:"-200%",opacity:0, ease:Back.easeOut.config(0.7)},"-=1.5")
                .from("#dots", 2, {x:"-200%",opacity:0, ease:Back.easeOut.config(0.7)},"-=1.75")
                .to("#text-web h1", 2, {scrambleText:{text:this.textWebH1, chars:"023456789", ease:Linear.easeNone}},"-=1.75")
                .from("#laptop", 2, {x:"100%",opacity:0, ease:Back.easeOut.config(0.7)},"-=1.75")
                .from("#card", 2, {x:"100%", y:"100%",opacity:0, ease:Back.easeOut.config(0.7)},"-=1.25")
                .staggerFrom("#screentext polygon, #screentext path", 0.05, {x:-50,opacity:0,ease:Linear.easeNone},0.05,"-=1.25")
                .from("#pocket", 0.75, {scaleY: 0, transformOrigin: "100% 100%", ease: Circ.easeOut },"-=0.5")
                .from("#text-web p", 1.25, {opacity:0, ease:Linear.easeNone},"-=1")
                .fromTo(this.$refs.slide2Swipe.$el, 0.5, {alpha:0}, {alpha:1, ease:Linear.easeNone}, "-=0.5")
            return svgsSlideUp
        },
        parallaxWeb() {
            let sceneWeb = document.getElementById('parallax-web');
            let parallaxWeb = new Parallax(sceneWeb, {
                relativeInput: true
            });
            return parallaxWeb
        },
        parallaxApps() {
            let sceneApps = document.getElementById('parallax-apps');
            let parallaxApps = new Parallax(sceneApps);
            return parallaxApps
        },
        intervalFrog() {
            let interval = setInterval(() => { this.timeCounter ++}, 1000);
            return interval
        },
    },
    beforeRouteEnter (to, from, next) {
        next(app => {
            if(screen.width < 1200) {
                app.$refs.fullpage.api.reBuild()
            }
        })
    },
    beforeRouteLeave (to, from, next) {
        clearInterval(this.intervalFrog)
        next()
    }
}
</script>

<style>
.web-services {display: flex; flex-wrap: wrap; }
.col-sm-4 {flex-basis: 27%; padding: 30px 35px; }
.col-sm-4 p {text-align: left; text-indent: 25px }
.feature-box-icon {background-color: #FF5A00; padding: 20px; border-radius: 100px 0 100px 100px; height: 30px; width: 30px; line-height: 12px; box-sizing: content-box; background-size: 100% 100%; background-position: center center; transition: all .1s ease-in-out; margin: 0 auto 20px; background-image: url(../assets/images/crease.svg); box-shadow: 5px 1px 10px 0 rgba(255,90,0,0.5); }
.email-frog {position: absolute;z-index: -1;width: 0 !important;height: 0 !important;left:-9999px;}
.feature-box-icon .far {color: #fff; font-size: 30px; }
.products-wrap {display: flex; margin-top:10px; flex-wrap: wrap}
.products img{width: 100%; height: 100%; }
.container-services {border-radius: 10px; margin: 10px; padding: 10px; background: #fff; }
.shadow {box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); transition: 0.3s; }
.row-web {padding: 10px; background: #f1f1f1; border-top-left-radius: 4px; border-top-right-radius: 4px; height: 30px;display: flex;align-items: center; }
.products-wrap .row-web {justify-content: space-around;}
.address {padding: 4px; background: #fff; font-family: 'Roboto', sans-serif; cursor: default; float:left; width: 70%; margin-left: 5px; text-align: left; }
.dot {margin-top: 4px; height: 12px; width: 12px; background-color: #bbb; border-radius: 50%; display: inline-block; margin-right: 4px; }
.dots{float: left }
.bar {width: 22px; height: 3px; background-color: #aaa; margin: 3px 0; display: block; }
.bars {float: right; margin-left: 10px }
.shadow:hover {box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); }
.watch-portfolio {display: inline-flex; position: relative; justify-content: center; align-items: center}
.watch-portfolio::before {content: "Смотреть"; position: absolute; z-index: 1; color: #000; background-color: #fff; padding: 7px 25px; transition: opacity .4s; opacity: 0; border-radius: 20px }
.watch-portfolio::after {content: ""; position: absolute; left: 0; top: 0; background-color: #000; height: 100%; width: 100%; transition: opacity .4s; opacity: 0; }
.watch-portfolio:hover:before {opacity: 1; }
.watch-portfolio:hover:after {opacity: .1; }
.book { color: #fff; display: flex;align-items: center;position: relative;margin-top: 10vh}
.book::before {
	content: "";
	position: absolute;
	bottom: -30px;
	background: linear-gradient(135deg, #83A429 0%, #A8C945 100%);
	width: 100vw;
	height: 105%;
	z-index: -1;
}
.btnHover {display: inline-block; background-image: linear-gradient(to bottom, #FF7F00, #FF5A00); line-height: 1; padding: 20px 100px; text-decoration: none; color: #fff; -webkit-transition: all 0.3s ease 0s; -o-transition: all 0.3s ease 0s; transition: all 0.3s ease 0s; font-size: 25px; border-radius: 30px; box-shadow: 0 5px 10px 0 rgba(0,0,0,.3); cursor: pointer; }
.call-to-action {padding:5vh 0; }
.call-to-action p {font-size: 20px }
.call-to-action h2 {font-size: 35px }
.btnHover {margin-top: 50px }
.btnHover:hover {box-shadow: 0 12px 18px 0 rgba(0,0,0,0.2); }
#to-left {position: absolute;z-index: 1}
.text-mobile-web{position:absolute;color: #fff;top:20vh;left:6vw;width: 27vw;text-align: left;font-size: 22px}
.text-mobile-web h1 {width: 100vw;}
.modal {position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; background-color: rgba(255,255,255,0.96); }
.animate {-webkit-animation: animatezoom 0.6s; animation: animatezoom 0.6s } @-webkit-keyframes animatezoom {from {-webkit-transform: scale(0) } to {-webkit-transform: scale(1) } } @keyframes animatezoom {from {transform: scale(0) } to {transform: scale(1) } }
.modal-content {background-color: #fff; margin: 4% auto 15%; border: 1px solid rgba(0,0,0,0.07); box-shadow: 0 25px 50px -8px rgba(0,0,0,0.1); border-radius: 10px; width: 380px; margin-top: 15vh; }
.imgcontainer {text-align: center; }
.close {text-align: right; color: #000; font-size: 30px; transition: opacity 120ms cubic-bezier(0.4, 0.0, 0.2, 1); opacity: 0.3; cursor: pointer; width: 97%; height: 25px }
img.avatar {width: 50%; border-radius: 50%; }
.container {padding: 0 62px; text-align: left }
.btnmodal {margin: 30px 0; border: none; cursor: pointer; box-shadow: rgba(255, 90, 0, 0.5) 0px 5px 23px 0px !important; }
.btnmodal:hover {box-shadow: rgba(255, 90, 0, 0.4) 0px 12px 18px 0px !important; }
.close:hover, .close:focus {opacity:0.5; }
.noise-wrap {background: url('../assets/images/noise.png') repeat; }
.web-mobile {margin: 15px 100px 20px 100px; opacity: .8; z-index: -1; width: 100% }
.section-banner {overflow: hidden;}
.section-banner svg {height: 83vh;margin-top: 3.5vh}
.slide1-web {
    height: 100%;
    background: url('../assets/images/slider1.png') top center / cover;
    background-color: #FFBC0D
}
.slide2-web {
    height: 100%;
    background: url('../assets/images/slider2.png') top center / cover;
    background-color: #FFBC0D
}
.call-to-action .btnHover {padding:20px 65px;}
.padding-top{padding-top: 0 !important}
#fp-nav ul li a span {
	background: #FF5A00;
	box-shadow: 0 2px 4px 0 rgba(0,0,0,.3)
}
@media (max-width: 1366px) {
     #seobanner {margin-top: -40px;}
    .modal-content {margin-top: 10vh; }
}
@media (max-width: 1200px) {
	.call-to-action .btnHover {padding:18px 45px !important;}
    .products-wrap{flex-wrap: wrap}
    #seobanner {margin-top: 15px !important;width:120%;margin-left: -10%}
    .address {width: 42vw;font-size:3.8vw;margin-top:0;}
    #end-banner {margin-top: 0px}
    .web-services {justify-content: center}
    .col-sm-4 {flex-basis: 100%;padding:30px 0;text-align: center}
    .col-sm-4 p {text-align: center;text-indent: 0}
    .web-mobile {margin:0;display: none}
    #to-left {position: relative;}
    section h1 {font-size: 7vw}
    .text-mobile-web {width: 90vw; top:19vh;}
    .text-mobile-web p {
        display: none;
    }
    #advantages h1,#cases h1 {
        font-size: 9vw !important;
        padding-top: 3vh;
    }
}
</style>