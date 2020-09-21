<template>
  <div class="particles">
    <div id="particles-js" class="particles-js">
        <div id="text-wrapper" class="text-wrapper">
            <div id="scramble" class="scramble"></div>
            <div id="cursor" class="cursor">|</div>
          </div>
        </div>
    </div>
</template>

<script>
import 'particles.js'
import ScrollMagic from 'scrollmagic';
export default {
  data() {
    return {
      serviceText: [
        'Полиграфия: от визитки до журнала',
        'Создание сайтов любой сложности',
        'Разработка мобильных приложений'
      ]
    }
  },
  mounted() {
    this.initParticles()
    this.particlesText()
    },
  methods: {
    initParticles() {window.particlesJS("particles-js", {"particles": {"number": {"value": 15, "density": {"enable": true, "value_area": 240 } }, "color": {"value": "#83a429"}, "shape": {"type": "circle", "stroke": {"width": 0, "color": "#000000"}, "polygon": {"nb_sides": 5 }, "image": {"src": "img/github.svg", "width": 100, "height": 100 } }, "opacity": {"value": 1, "random": true, "anim": {"enable": true, "speed": 1, "opacity_min": 0.1, "sync": false } }, "size": {"value": 4, "random": false, "anim": {"enable": false, "speed": 40, "size_min": 0.1, "sync": false } }, "line_linked": {"enable": true, "distance": 150.02125301084325, "color": "#000000", "opacity": 0.4, "width": 1 }, "move": {"enable": true, "speed": 2, "direction": "none", "random": true, "straight": false, "out_mode": "out", "bounce": false, "attract": {"enable": false, "rotateX": 600, "rotateY": 1200 } } }, "interactivity": {"detect_on": "canvas", "events": {"onhover": {"enable": true, "mode": "repulse"}, "onclick": {"enable": false, "mode": "push"}, "resize": true }, "modes": {"grab": {"distance": 167.8214379899786, "line_linked": {"opacity": 1 } }, "bubble": {"distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 }, "repulse": {"distance": 60, "duration": 0.4 }, "push": {"particles_nb": 4 }, "remove": {"particles_nb": 2 } } }, "retina_detect": true })
    },
    particlesText() {
      let controller = new ScrollMagic.Controller();
      let stgs = new TimelineMax({delay:1,repeat:-1});
      let showDiv = new TimelineMax();
      showDiv
        // .from("#text-wrapper", 0.75, {width:0})
        .fromTo("#cursor", 0.5, {autoAlpha: 0}, {autoAlpha: 1,repeat: -1, ease: SteppedEase.config(1)}, '-=0.25')
      for (let currentText of this.serviceText) {
       stgs
        .to('#scramble', 4, {scrambleText:{text:currentText, chars:"023456789", speed:1, revealDelay:1, tweenLength:true, ease:Linear.easeNone}})
        .to("#text-wrapper", 0.75, {height:0, yoyo: true, repeat: 1, ease: Power3.easeInOut, onStart: function() {
          setTimeout(function() {
            scramble.innerHTML = ' ';
          }, 500);
        }},"+=2")
      }
      // scr text 1
      new ScrollMagic.Scene({
      triggerElement: ".particles",
      triggerHook: 0.7,
      reverse: false
      })
      .setTween(showDiv)
      // .addIndicators()
      .addTo(controller);
      // scr text 2
      new ScrollMagic.Scene({
      triggerElement: ".particles",
      triggerHook: 0.9,
      reverse: false
      })
      .setTween(stgs)
      // .addIndicators({
      //   indent: 60
      // })
      .addTo(controller);
      return stgs
    }
  }
}
</script>

<style>
.particles-js {
    height: 290px!important;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    background-color: #fafafa;
    position: relative;
    display: flex;
    justify-content: center;
    white-space: nowrap;
}
.text-wrapper {display: flex; position: absolute; top:130px; font-size: 28px; border-bottom: 2px solid #FF5A00; width: 520px; overflow: hidden; justify-content: center; cursor: default; -webkit-user-select: none; user-select: none; }
.cursor {width:6px; }
.scramble {text-align: left; }
</style>
