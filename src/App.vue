<template>
  <div id="app">
    <Header/>
    <transition name="router-anim" mode="out-in">
      <router-view></router-view>
    </transition>
      <div class="footer-wrap">
      <footer>
        <Particles/>
        <Footer/>
    </footer>
  </div>
      <div id="snackbar">Спасибо. Ваша заявка принята.</div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/_header';
import Footer from '@/components/_footer';
import Particles from '@/components/_particles';
import '@/assets/styles/fontawesome-all.min.css';
import {TweenMax, Power2, TimelineLite} from "gsap";
import ScrambleTextPlugin from './assets/scripts/ScrambleTextPlugin';
import DrawSVGPlugin from './assets/scripts/DrawSVGPlugin';
import ScrollMagic from 'scrollmagic';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
import 'imports-loader?define=>false!scrollmagic/scrollmagic/minified/plugins/debug.addIndicators.min';


export default {
  name: 'app',
  components: {
    ScrollMagic,
    Particles,
    Header,
    Footer
  }
}
</script>

<style>
@font-face {font-family: Museo Sans; src: url('assets/fonts/MuseoSansCyrl.woff'); }
@font-face {font-family: Segoe UI; src: url('assets/fonts/SegoeUI.woff'); }
@font-face {font-family: gotham pro; src: url('assets/fonts/GothamProRegular.woff') }
@font-face {font-family: myriad pro; src: url('assets/fonts/MyriadPro-Regular.woff') }
@font-face {font-family: courier; src: url('assets/fonts/Courier.woff2') }
#app {font-family: 'Museo Sans', 'Helvetica', 'Arial', sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-align: center; color: #000}
a {color: #000; text-decoration: none; }
body, button, input, textarea {font-size: 18px; line-height: 1.5; }
html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,font,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,dl,dt,dd,ol,ul,li,fieldset,form,legend,table,caption,tbody,tfoot,thead,tr,th,td {border: 0; font-family: Museo Sans; font-style: inherit; font-weight: inherit; margin: 0; outline: 0; padding: 0; vertical-align: baseline; }
body {-webkit-overflow-scrolling: auto; }
p {font-family: Segoe UI; }
ul {list-style-type: none; padding: 0; }
li {display: inline-flex; margin: 0 10px; }
.entry-content{margin-top: 75px}
.mobile-nav-toggle {display: none}
.mid-content {max-width: 1200px; margin: 0 auto; padding:0 15px; }
#nprogress .bar {top: -3px !important; background: #ff5a00 !important; } #nprogress .peg {box-shadow: none !important } #nprogress .spinner {display: none !important } 

/*footer*/
.footer-info-wrapper {background-color: #fff; }
.bottom-footer {display: flex; padding: 10px; justify-content: space-between; align-items: center; color:#555; font-size: 15px }
.footer-contact-info .icn {font-size: 22px; padding: 8px 0 0 2px; }
ul.social-icons li a i {display: block; height: 100%; position: relative; top: 1%; -webkit-transition: top .35s; transition: top .35s; }
ul.social-icons li a {display: inline-block; width: 40px; height: 40px; text-align: center; overflow: hidden; -webkit-transition: all .35s; transition: all .35s; }
.mail a:hover {background-color: #FF5A00;}
.instagram a:hover {background-color: #C32AA3;}
.whattsapp a:hover {background-color: #4DC247;}
.tel a:hover {background-color: #83A429;}
.app-store-icon{display: flex;margin-left: 40px;}
.section-entry {padding:20px 0 40px}
.social-icons a {border-radius: 100px 0 100px 100px; color:#555; }
ul.social-icons li a:hover i {top: -49px; color: #fff }
input[type="text"], input[type="password"], input[type="email"], input[type="number"] {width: 100%; padding: 8px 0; padding-left: 2px; margin: 8px 0; display: inline-block; border-bottom: 1px solid rgba(0,0,0,0.2) !important; box-sizing: border-box; outline: none; border:none; }
.router-anim-enter-active {animation: coming .45s linear; }
.router-anim-leave-active {animation: leave .45s linear; }
@keyframes coming {from {transform: translateY(-30px); opacity: 0; } to {transform: translateY(0); opacity: 1; } }
@keyframes leave {from {transform: translateY(0); opacity: 1; } to {transform: translateY(-30px); opacity: 0; } }
.single-page-nav .router-link-exact-active {position: relative; pointer-events: none; color: #000 !important }
.single-page-nav .router-link-exact-active::after {content: ''; width: 100%; height: 1px; position: absolute; left: 0; right: 0; bottom: 0; -webkit-transition: all 1s; transition: all 1s; background: #000; margin: auto; }
.fade-alert-enter-active {animation: fadeAlert .3s linear; }
.fade-alert-leave-active {animation: leaveAlert .3s linear; }
@keyframes fadeAlert {from {transform: translateX(-15px); opacity: 0; } to {transform: translateX(0); opacity: 1; } }
@keyframes leaveAlert {from {transform: translateX(0); opacity: 1; } to {transform: translateX(-15px); opacity: 0; } }
.popupalert-container {position: relative; }
.popupalert {width: 160px; background: linear-gradient(to bottom, #ff0000, #db0303); color: #fff; text-align: center; border-radius: 6px; padding: 8px 0; position: absolute; z-index: 1; bottom: 15px; left: -180px; font-size: 15px; box-shadow: 0 3px 5px -3px rgba(0,0,0,0.5); }
.popupalert::after {content: ""; position: absolute; top: 34%; left: 103%; margin-left: -5px; border-width: 7px; border-style: solid; border-color: transparent transparent transparent #e80707; }
.mobile-navigation .router-link-exact-active {background-image: linear-gradient(to bottom, #FF7F00, #FF5A00); color:#fff; }
.mobile-navigation .router-link-exact-active .fal {color:#fff; }
#snackbar {visibility: hidden; min-width: 250px; margin-left: -145px; background-image: linear-gradient(180deg,#ff7f00,#ff5a00); color: #fff; text-align: center; border-radius: 10px; padding: 14px; position: fixed; z-index: 1001; left: 50%; bottom: 30px; }
#snackbar.show-snack {visibility: visible; animation: fadein 0.5s, fadeout 0.5s 2.5s; }
@keyframes fadein {from {bottom: 0; opacity: 0;} to {bottom: 30px; opacity: 1;} }
@keyframes fadeout {from {bottom: 30px; opacity: 1;} to {bottom: 0; opacity: 0;} }
.bubbles-container{position: fixed;bottom: 30px;width:100%;text-align:center;z-index: 1001;}
.bubbles {margin-top: 50px;position: relative;}
.bubble {display: inline-block;padding: 0px 10px;}
.bubble:nth-of-type(1) .circle {animation-delay: 0.1s;}
.bubble:nth-of-type(2) .circle {animation-delay: 0.2s;}
.bubble:nth-of-type(3) .circle {animation-delay: 0.3s;}
.bubble:nth-of-type(4) .circle {animation-delay: 0.4s;}
.bubble:nth-of-type(5) .circle {animation-delay: 0.5s;}
.bubble .circle {width: 20px;height: 20px;border-radius: 50%;background-image: linear-gradient(to bottom, #FF7F00, #FF5A00);animation: pulse 1s infinite;box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.5);}
@keyframes pulse {0%{transform: scale(1);}50%{transform: scale(0.4);opacity: 0.75;}100%{transform: scale(1);}}
@media (max-width: 1370px) {.text-wrapper{top:130px} }
@media (max-width: 1200px) {
  .app-store-icon{display: none}
  .telephone {display: none}
  #site-navigation {display: none}
  .text-wrapper {width:92vw;font-size: 5vw;top:16vh;}
  .app-store {display: none}
  .copy-right {display: none}
  .bottom-footer {justify-content: center}
  .hamburger {font-size: 30px;color:#ff5a00;margin: 20px 10px }
  .mobile-nav-toggle {display:block;}
  .social-icons li {margin:0 4vw;}
  .mobile-navigation {position: fixed; width: 100%; background: #fff; height: 100%; z-index: 3; top:75px; }
  .mobile-navigation ul {display: flex; flex-direction: column; text-align: left; font-size: 23px }
  .mobile-navigation .item{padding:30px 17px 30px 22px; width: 100%; line-height: 28px; }
  .mobile-navigation li {display: flex; align-items: center; border-bottom: 1px solid #efefef; position: relative; margin: 0; }
  .mobile-navigation .fal {color:#c0c0c0; padding-right: 20px }
  .mobile-navigation a {padding-left: 25px; }
  .item-wrap {overflow: hidden;}
  .mobile-navigation .fa-calculator, .mobile-navigation .fa-map-marker-alt {padding:0 24px 0 3px}
  .call-to-action h2 {font-size: 7vw !important; }
  .call-to-action p {font-size: 4vw !important; }
  .btnHover {padding:18px 85px !important;}
     /*hamburger*/
  #nav-icon2 span {display: block; position: absolute; height: 4px; width: 50%; background: #FF5A00; opacity: 1; -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); -o-transform: rotate(0deg); transform: rotate(0deg); -webkit-transition: .25s ease-in-out; -moz-transition: .25s ease-in-out; -o-transition: .25s ease-in-out; transition: .25s ease-in-out; }
  #nav-icon2 {width: 35px; height: 45px; position: relative; margin: 20px 10px 0; -webkit-transform: rotate(0deg); -moz-transform: rotate(0deg); -o-transform: rotate(0deg); transform: rotate(0deg); -webkit-transition: .5s ease-in-out; -moz-transition: .5s ease-in-out; -o-transition: .5s ease-in-out; transition: .5s ease-in-out; cursor: pointer; } #nav-icon2 span:nth-child(even) {left: 50%; border-radius: 0 9px 9px 0; }
  #nav-icon2 span:nth-child(odd) {left:0px; border-radius: 9px 0 0 9px; }
  #nav-icon2 span:nth-child(1), #nav-icon2 span:nth-child(2) {top: 0px; }
  #nav-icon2 span:nth-child(3), #nav-icon2 span:nth-child(4) {top: 11px; }
  #nav-icon2 span:nth-child(5), #nav-icon2 span:nth-child(6) {top: 22px; }
  #nav-icon2.open span:nth-child(1),#nav-icon2.open span:nth-child(6) {-webkit-transform: rotate(45deg); -moz-transform: rotate(45deg); -o-transform: rotate(45deg); transform: rotate(45deg); }
  #nav-icon2.open span:nth-child(2),#nav-icon2.open span:nth-child(5) {-webkit-transform: rotate(-45deg); -moz-transform: rotate(-45deg); -o-transform: rotate(-45deg); transform: rotate(-45deg); }
  #nav-icon2.open span:nth-child(1) {left: 1px; top: 5px; }
  #nav-icon2.open span:nth-child(2) {left: calc(50% - 5px); top: 5px; }
  #nav-icon2.open span:nth-child(3) {left: -50%; opacity: 0; }
  #nav-icon2.open span:nth-child(4) {left: 100%; opacity: 0; }
  #nav-icon2.open span:nth-child(5) {left: 1px; top: 17px; }
  #nav-icon2.open span:nth-child(6) {left: calc(50% - 5px); top: 17px; }
  .modal-content {width: 80vw !important;margin-top: 5vh !important}
  .modal-content .container {padding:0 20px !important}
  .modal-content .btnHover {padding: 18px 60px !important; }
  .popupalert {left:0} 
  #snackbar {left:0;right:0;margin-left:3vw;margin-right:3vw;}
  .particles > div {
     height: 36vh !important
  }
}
</style>
