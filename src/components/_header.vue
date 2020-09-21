<template>
  <header>
    <div class="header logo-side">
    <div class="mid-content">
      <div class="site-header">
        <div class="logo-wrap">
          <div class="mask">
            <router-link to="/" class="">
              <LogoSvg/>
            </router-link>
          </div>
        </div>
        <div @click="showMobileNav"class="mobile-nav-toggle">
          <div id="nav-icon2" :class="{open:mobileNav}">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <nav id="site-navigation" class="main-navigation">
          <ul class="nav single-page-nav">
            <li>
              <router-link to="/"><div class="roll-nav">Web-студия</div><div class="roll-nav">Web-студия</div></router-link>
            </li>
            <li>
              <router-link to="/constructor"><div class="roll-nav">Конструктор</div><div class="roll-nav">Конструктор</div></router-link>
            </li>
            <li>
              <router-link to="/calc"><div class="roll-nav">Калькулятор цен</div><div class="roll-nav">Калькулятор цен</div></router-link>
            </li>
          </ul>
        </nav>
         <div class="telephone">
          <span>+7 701 772 38 00</span>
        </div>
      </div>
    </div>
    </div>
    <nav ref="mobileNav" v-show="mobileNav" class="mobile-navigation">
      <ul>
        <li>
          <router-link class="item" to="/"><div class="item-wrap"><div class="item-text"><i class="fal fa-globe"></i>Web-студия</div></div></router-link>
        </li>
        <li>
          <router-link class="item" to="/constructor"><div class="item-wrap"><div class="item-text"><i class="fal fa-edit"></i>Конструктор</div></div></router-link>
        </li>
        <li>
          <router-link class="item" to="/calc"><div class="item-wrap"><div class="item-text"><i class="fal fa-calculator"></i>Калькулятор цен</div></div></router-link>
        </li>
        <li>
          <router-link class="item" to="/contact"><div class="item-wrap"><div class="item-text"><i class="fal fa-map-marker-alt"></i>Контакты</div></div></router-link>
        </li>
      </ul>
    </nav>
    <div class="masthead-back"></div>
  </header>
</template>

<script>
  import LogoSvg from '@/components/_logoSvg';
  import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
  export default {
    components: {
      LogoSvg
    },
    data() {
      return {
        mobileNav:false
      }
    },
    methods: {
      showMobileNav() {
        this.mobileNav = !this.mobileNav;
        if(this.mobileNav) {
          new TimelineLite({delay:0.2}).staggerFrom('.item-text', 0.5, {y: 50, ease: Expo. easeOut}, -0.1)
        }
      },
    },
    watch:{
      $route () {
        this.mobileNav = false;
      },
      mobileNav() {
        this.mobileNav ? disableBodyScroll(this.$refs.mobileNav) : enableBodyScroll(this.$refs.mobileNav)
      }
    } 
  }
</script>

<style lang="scss">
.header {
  width: 100%; 
  top: 0; 
  padding: 10px 0 10px; 
  z-index: 1000; 
  background: rgba(255,255,255,0.95); 
  box-shadow: 0 3px 5px -3px rgba(0,0,0,0.5); 
  position: fixed; 
  border-bottom: 1px solid $orangeColor;
  .site-header {
    display: flex; 
    flex-wrap: nowrap; 
    font-weight: normal;
    z-index: 10;
    .logo-wrap {
      display: flex; 
      flex-grow: 3; 
      align-items: flex-start; 
    }
    .main-navigation { 
      flex-grow: 4;
      margin:18px 0 10px;
      ul {
        li {
          a {
            margin: 0 25px; 
            height: 25px; 
            overflow: hidden; 
            position: relative;
            div {
              top: 0;
              transition: top .30s;
            }
            &:hover div {
              top: -28px; 
            }
          }
        }
      }
      .nav {
        a {
          color: #555;
          &::before {
            content: ''; 
            width: 0; 
            height: 1px;
            position: absolute; 
            left: 0; 
            right: 0; 
            bottom: 0;
            transition: width .5s; 
            background: #000; 
            margin: auto; 
          }
          &:hover::before {
            width: 100% 
          }
          .roll-nav {
            position: relative; 
          }
        }
      }
    }
  }
  .telephone { 
    cursor:default;
    margin:18px 0 10px; 
  }
  .masthead-back{
    position: absolute;
    left: 0;
    top: 0;
    height: 75px;
    width: 100%;
    z-index: -1;
    background-color: #fff;
  }
  .mobile-navigation {
    z-index: 2000;
  }
  @include for-mobile-up {
    height: 55px
  }
} 

</style>