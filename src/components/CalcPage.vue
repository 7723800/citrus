<template>
    <section class="calculator-wrap entry-content">
        <div class="mid-content">
              <toggle-button v-if="toggleBtn" :value="true" :labels="{checked: 'Калькулятор', unchecked: 'Наши цены'}" :width="160" :height="35" :color="{checked:'transparent',unchecked:'transparent'}" @change="onChangeToggle"/>
            <div class="imac">
                 <transition name="fade-wrappers">
                <div v-show="radioWrap" class="radio-wrapper">
                    <div>
                        <label class="radio">
                            <input @click="showToggle(0)" type="radio" name="r">
                            <span>Визитка цветная</span>
                            <div v-show="boxes[0].show">
                                <div class="price-label">Цена указана:</div>
                                 <select v-model="selected.card">
                                  <option v-for="card in cards" v-bind:value="{one:card.cardOneSide, two:card.cardDoubleSide}">от {{card.val}} шт</option>
                                </select>
                              <p>&#8226; Односторонняя - {{selected.card.one}}тг</p>
                              <p>&#8226; Двусторонняя - {{selected.card.two}}тг</p>
                            </div>
                        </label>
                        <label class="radio">
                            <input @click="showToggle(1)"type="radio" name="r">
                            <span>Распечатать на принтере</span>
                            <div v-show="boxes[1].show">
                                 <div class="price-label">Цена указана:</div>
                                 <select v-model="selected.print">
                                 <option v-for="print in prints" v-bind:value="{grayA4:print.grayA4, colorA4:print.colorA4, grayA3:print.grayA3, colorA3:print.colorA3}">до {{print.val}} стр</option>
                                </select>
                              <p>&#8226; A4 Ч/б = {{selected.print.grayA4}}тг</p>
                              <p>&#8226; A4 Цветная = {{selected.print.colorA4}}тг</p>
                              <p>&#8226; A3 Ч/б = {{selected.print.grayA3}}тг</p>
                              <p>&#8226; A3 Цветная = {{selected.print.colorA3}}тг</p>
                            </div>
                        </label>
                        <label class="radio">
                            <input @click="showToggle(3)"type="radio" name="r">
                            <span>Печать фотографий</span>
                            <div v-show="boxes[3].show">
                                <div class="price-label">Цена указана:</div>
                                <select v-model="selected.fotoPrint">
                                <option v-for="fotoPrint in fotoPrints" v-bind:value="{format10x15:fotoPrint.format10x15, format13x18:fotoPrint.format13x18, formatA4:fotoPrint.formatA4}">до {{fotoPrint.val}} шт</option>
                                </select>
                              <p>&#8226; Формат 10*15 = {{selected.fotoPrint.format10x15}}тг</p>
                              <p>&#8226; Формат 13*18 = {{selected.fotoPrint.format13x18}}тг</p>
                              <p>&#8226; Формат А4 = {{selected.fotoPrint.formatA4}}тг</p>
                            </div>
                        </label>
                         <label class="radio">
                            <input @click="showToggle(4)" type="radio" name="r">
                            <span>Стикеры</span>
                            <div v-show="boxes[4].show">
                             <div class="price-label">Цена указана:</div>
                                <select v-model="selected.sticker">
                                <option v-for="sticker in stickers" v-bind:value="{diameter:sticker.diameter}">от {{sticker.val}} шт</option>
                                </select>
                              <p>&#8226; Диаметр 5-7 мм = {{selected.sticker.diameter}}тг</p>
                            </div>
                        </label>
                        <label class="radio">
                            <input @click="showToggle(5)" type="radio" name="r">
                            <span>Переплет (пружина)</span>
                            <div v-show="boxes[5].show">
                                <div class="price-label">Цена указана:</div>
                                <select v-model="selected.bind">
                                <option v-for="bind in binding" v-bind:value="{quantity:bind.quantity}">до {{bind.val}} стр</option>
                                </select>
                              <p>&#8226; А4 = {{selected.bind.quantity}}тг</p>
                            </div>
                        </label>
                        <label class="radio">
                            <input @click="showToggle(6)" type="radio" name="r">
                            <span>Ламинирование</span>
                            <div v-show="boxes[6].show">
                              <p>&#8226 А4 = 120тг</p>
                            </div>
                        </label>
                        <label class="radio">
                            <input @click="showToggle(7)" type="radio" name="r">
                            <span>Сканирование</span>
                            <div v-show="boxes[7].show">
                              <p>&#8226; A4 - 100тг</p>
                            </div>
                        </label>
                        <label class="radio">
                            <input @click="showToggle(8)" type="radio" name="r">
                            <span>Фирменные бланки</span>
                            <div v-show="boxes[8].show">
                                <div class="price-label">Цена указана:</div>
                                <select v-model="selected.firmForm">
                                <option v-for="firmForm in firmForms" v-bind:value="{colorA4:firmForm.colorA4}">до {{firmForm.val}} шт</option>
                                </select>
                              <p>&#8226; A4 = {{selected.firmForm.colorA4}}тг</p>
                            </div>
                        </label>
                    </div>
                    <div class="design-info"><span style="color:#fc9d6b">&#10033</span> Разработка дизайна от 5000тг</div>
                </div>
                  </transition>
                   <transition name="fade-wrappers">
            <div v-show="calcWrap" class="calc-wrapper">
    <main ontouchstart class="calculator pre-enter">
    <section class="screen">
        <div class="equation">
            <div class="summary"></div>
            <div class="total">0</div>
        </div>
    </section>
    <section class="buttons">
        <div v-on:click="getNumder" class="numbers">
            <ul>
                <li class="clear">
                    <button data-val="clear">AC</button>
                </li>
                <li>
                    <button data-val="7">7</button>
                </li>
                <li>
                    <button data-val="8">8</button>
                </li>
                <li>
                    <button data-val="9">9</button>
                </li>
                <li>
                    <button data-val="4">4</button>
                </li>
                <li>
                    <button data-val="5">5</button>
                </li>
                <li>
                    <button data-val="6">6</button>
                </li>
                <li>
                    <button data-val="1">1</button>
                </li>
                <li>
                    <button data-val="2">2</button>
                </li>
                <li>
                    <button data-val="3">3</button>
                </li>
                <li class="zero">
                    <button data-val="0">0</button>
                </li>
                <li>
                    <button data-val="slice">&larr;</button>
                </li>
            </ul>
        </div>
        <div v-on:click="getNumder" class="operators">
            <ul>
                <li>
                    <button data-val="÷">÷</button>
                </li>
                <li>
                    <button data-val="×">×</button>
                </li>
                <li>
                    <button data-val="-">-</button>
                </li>
                <li>
                    <button data-val="+">+</button>
                </li>
                <li>
                    <button data-val="=">=</button>
                </li>
            </ul>
        </div>
    </section>
</main>
            </div>
        </transition>
             <img src="../assets/images/iMac.png" alt="">
            </div>
            </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
        boxes: [{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false},{show:false}],
        selected: {card:{one:'',two:''}, print:{grayA4:'',colorA4:'',grayA3:'',colorA3:''}, bind:{quantity:''}, firmForm:{colorA4:''},fotoPrint:{format10x15:'',format13x18:'',formatA4:''},sticker:{diameter:''}},
        cards: [
            {val:100, cardOneSide:20, cardDoubleSide:30},
            {val:200, cardOneSide:18, cardDoubleSide:24},
            {val:500, cardOneSide:15, cardDoubleSide:18},
            {val:1000, cardOneSide:12, cardDoubleSide:16}
            ],
        prints: [
            {val:50, grayA4:20, colorA4:100, grayA3:40, colorA3:200},
            {val:200, grayA4:16, colorA4:90, grayA3:30, colorA3:170},
            {val:500, grayA4:12, colorA4:80, grayA3:20, colorA3:150}
            ],
        copies: [
            {val:50, grayA4:20, grayA3:40},
            {val:200, grayA4:16, grayA3:30},
            {val:500, grayA4:12, grayA3:20}
            ],
        binding: [
            {val:20, quantity:350},
            {val:50, quantity:400},
            {val:100, quantity:500},
            {val:500, quantity:700}
            ],
        firmForms: [
            {val:50, colorA4:45},
            {val:500, colorA4:35},
            {val:1000, colorA4:30}
            ],
        fotoPrints: [
            {val:50, format10x15:35, format13x18:45, formatA4:150},
            {val:100, format10x15:30, format13x18:70, formatA4:120},
            {val:500, format10x15:25, format13x18:35, formatA4:100}
            ],
        stickers: [
            {val:100, diameter:30},
            {val:200, diameter:22},
            {val:500, diameter:20}
            ],
            eraseTotal: false,
            radioWrap:true,
            calcWrap:true,
            toggleBtn:false
        }
  },
    methods: {
        getNumder(event) {
            let num = event.target.dataset.val;
            let sumElm = document.querySelector('.summary');
            let totalElm = document.querySelector('.total');
            switch(num) {
                case 'clear': 
                    sumElm.innerHTML = '';
                    totalElm.innerHTML = '0';
                    this.eraseTotal = false;
                break;
                case '=':
                    if(sumElm.innerHTML != '') {
                        let lastChar = sumElm.innerHTML.charAt(sumElm.innerHTML.length - 1);
                        if (isFinite(lastChar)) {
                            let expTrue = sumElm.innerHTML.match(/[÷,×,+,-]/g);
                            if(expTrue) {
                                let regTotal = sumElm.innerHTML.replace(/÷/g,"/").replace(/×/g,"*");
                                let getTotal = eval(regTotal);
                                let checkInteger = Number.isInteger(getTotal);
                                if (checkInteger) totalElm.innerHTML = getTotal;
                                else totalElm.innerHTML = getTotal.toFixed(2);
                                this.eraseTotal = true;
                            }
                        }
                    }
                break;
                case 'slice':
                    if (!this.eraseTotal) {
                        let sliceSumElm = sumElm.innerHTML.slice(0, sumElm.innerHTML.length - 1);
                        sumElm.innerHTML = sliceSumElm; 
                    }
                break;
                default:
                    if (this.eraseTotal) {
                        if (isFinite(num)) sumElm.innerHTML = ''
                        else sumElm.innerHTML = totalElm.innerHTML;
                    }
                    sumElm.innerHTML += num;
                    totalElm.innerHTML = '&#8230;';
                    let checkNumeral = isFinite(sumElm.innerHTML.charAt(0));
                    let preLastChar = sumElm.innerHTML.charAt(sumElm.innerHTML.length - 2);
                    if (!checkNumeral) sumElm.innerHTML = '';
                    if (isNaN(num) && isNaN(preLastChar)) {
                        let newSumElm = sumElm.innerHTML.slice(0, sumElm.innerHTML.length - 1);
                        sumElm.innerHTML = newSumElm;
                    }
                    this.eraseTotal = false;
                break;
            }
        },
        showToggle(n) {
            for(var i = 0; i < this.boxes.length; i++) { 
                this.boxes[i].show = false;
            }
            this.boxes[n].show = true;
        },
        onChangeToggle(e) {
            if (!e.value) {this.radioWrap = true; this.calcWrap = false;}
            else {this.radioWrap = false; this.calcWrap = true;}
        }
    },
    beforeMount() {
        if (screen.width < 1200) {
            this.toggleBtn = true;
            this.radioWrap = false;
        }
    },
    created() {
        this.selected.card.one = this.cards[0].cardOneSide;
        this.selected.card.two = this.cards[0].cardDoubleSide;
        this.selected.print.grayA4 = this.prints[0].grayA4;
        this.selected.print.colorA4 = this.prints[0].colorA4;
        this.selected.print.grayA3 = this.prints[0].grayA3;
        this.selected.print.colorA3 = this.prints[0].colorA3;
        this.selected.bind.quantity = this.binding[0].quantity;
        this.selected.firmForm.colorA4 = this.firmForms[0].colorA4;
        this.selected.fotoPrint.format10x15 = this.fotoPrints[0].format10x15;
        this.selected.fotoPrint.format13x18 = this.fotoPrints[0].format13x18;
        this.selected.fotoPrint.formatA4 = this.fotoPrints[0].formatA4;
        this.selected.sticker.diameter = this.stickers[0].diameter;
    }
}
</script>

<style>
.calculator-wrap{
    background: url('../assets/images/bg-calc.png') center bottom no-repeat;
    background-size: contain;
}
.imac{
    position: relative;
    margin: 3vh 0;
    display: inline-block;
    height: 86vh;
}
.imac img{
    width: 104vh;
}
/*radio*/
.radio-wrapper{
    position: absolute;
    display: flex;
    bottom: 29vh;
    z-index: 1;
    left: 5vw;
    top: 3.5vw;
    width: 100%;
    color: #fff;
    font-size: 2.2vh;
}
.radio {
    margin: 1.3vh 0;
    display: block;
    cursor: pointer;
}
.radio div {
    height: 100%;
}
.radio p {
    cursor: default;
    height: 2.5vh;
    padding-left: 30px;
    text-align: left;
}
.radio input {
    display: none;
}
.price-label {
    float: left;
    margin-left: 30px
}
.radio {
    cursor: pointer;
}
.radio input + span:not(:empty) {
    padding-left: 30px;
}
.radio input + span {
    line-height: 2.1vh;
    padding-left: 22px;
    display: flex;
    position: relative;
    align-items: center;
}
.radio input + span::before {
    transition: background 0.2s ease, -webkit-transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
    transition: background 0.2s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
    transition: background 0.2s ease, transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2),
    -webkit-transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 2);
}
.radio input + span::before, .radio input + span::after {
    content: '';
    width: 22px;
    height: 22px;
    display: block;
    border-radius: 50%;
    left: 0;
    top: 0;
    position: absolute;
}
.radio input + span::after {
    background: #fff;
    -webkit-transform: scale(0.78);
    transform: scale(0.78);
    transition: -webkit-transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
    transition: transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4), -webkit-transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.4);
}
.radio input + span::before, .radio input + span::after {
    content: '';
    width: 2.2vh;
    height: 2.2vh;
    display: block;
    border-radius: 50%;
    left: 0;
    top: 0;
    position: absolute;
}
.radio:hover input + span:before {
  -webkit-transform: scale(0.92);
          transform: scale(0.92);
}
.radio:hover input + span:after {
  -webkit-transform: scale(0.74);
          transform: scale(0.74);
}
.radio:hover input:checked + span:after {
  -webkit-transform: scale(0.4);
          transform: scale(0.4);
}
.radio input:checked + span::before {
    -webkit-transform: scale(1.04);
    transform: scale(1.04);
    background: linear-gradient(to bottom, #f4d063 0%, #fc9d6b 100%);
}
.radio input:checked + span:after {
  -webkit-transform: scale(0.4);
    transform: scale(0.4);
  transition: -webkit-transform .3s ease;
  transition: transform .3s ease;
  transition: transform .3s ease;
  -webkit-transform: .3s ease;
}
.design-info {
    position: absolute;
    bottom: 10px;
    text-align: left;
}
/*calculator*/
.calc-wrapper{
    position: absolute;
    display: flex;
    bottom: 36%;
    z-index: 1;
    right: 6vw;
    top: 3vw;
    align-items: center;
    width:12vw;
}
.calculator {
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  box-shadow: 0 0 10px rgba(85, 85, 85, 0.6);
  border-radius: 12px;
  overflow: hidden;
}
.calculator .screen {
    display: flex;
    width: 100%;
    border-bottom: 1px solid #fff;
    margin-top: 0 !important;
    height: 4vw;
}
.calculator .equation {
    width: 100%;
    padding: 6px;
    border-radius: 12px 12px 0 0;
    background: white;
    color: #333;
    overflow: hidden;
}
.calculator .equation .summary, .calculator .equation .total {
    display: flex;
    justify-content: flex-end;
}
.calculator .summary {
    padding: 0 0.2vw;
    height: 1.5vw;
    font-size: 0.9vw;
    font-weight: 500;
    color: #b3b3b3;
}
.calculator .total {
    padding: 0 0.2vw;
    font-size: 1.3vw;
}
.calculator .buttons {
    display: flex;
    margin-top: 0 !important;
    width: 100%;
}
.calculator .numbers {
    width: 100%;
}
.calculator .numbers ul {
    display: flex;
    flex-flow: row wrap;
    background: rgba(255, 255, 255, 0.4);
    border-bottom-left-radius: 12px;
    height: 100%;
}
.calculator .numbers li.clear, .calculator .numbers li:nth-child(2), .calculator .numbers li:nth-child(5), .calculator .numbers li:nth-child(8), .calculator .numbers li.zero {
    border-left: 0;
    margin: 0 !important;
}
.calculator .numbers .clear {
    width: 100%;
}
.calculator .numbers li {
    border-bottom: 1px solid rgba(0,0,0,0);
    border-left: 1px solid rgba(0,0,0,0);
    margin: 0;
}
.calculator .numbers .clear button {
    width: 100%;
    background: rgba(255, 255, 255, 0.35);
}
.calculator .numbers button {
    font-size: 1.1vw;
    font-weight: 400;
    color: #333;
    background: rgba(255, 255, 255, 0.5);
}
.calculator .operators {
    width: calc(100% / 3);
    border-left: 1px solid rgba(0,0,0,0);
}
.operators li {
    width: 100%;
    height: calc(100% / 5 - 0.8px);
}
.calculator .operators ul {
    background: #f4d063;
    background: linear-gradient(to bottom, #f4d063 0%, #fc9d6b 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='$yellow', endColorstr='$orange',GradientType=0 );
    border-bottom-right-radius: 12px;
    height: 100%;
}
.calculator .operators li:not(:last-child) {
    border-bottom: 1px solid rgba(255,255,255,0.5);
    margin: 0 !important;
}
.calculator .operators button {
    font-size: 1.8vw;
    font-weight: 300;
    color: white;
}
.calculator button {
    display: block;
    padding: 0;
    border: 0;
    width: 100%;
    height: 100%;
    background: none;
    font-family: "brandon-grotesque", "Brandon Grotesque", "Source Sans Pro", "Segoe UI", Frutiger, "Frutiger Linotype", "Dejavu Sans", "Helvetica Neue", Arial, sans-serif;
    cursor: pointer;
    transition: all 200ms ease-out;
    box-sizing: border-box;
}
.calculator .numbers .zero {
    width: calc(100% / 1.5 - 0.3px);
}
.calculator .numbers .zero button {
    width: 100%;
    border-bottom-left-radius: 12px;
}
.calculator .numbers li.zero {
    border-left: 0;
}
.calculator .numbers li.zero, .calculator .numbers li:last-child {
    border-bottom: 0;
}
.calculator li {
    margin: 0 !important;
}
.numbers li {
    width: calc(100% / 3 - 0.7px);
    height: calc(100% / 5 - 0.8px)
}
.calculator .numbers .clear button:hover, .calculator .numbers .clear button:focus {
    background: rgba(255, 255, 255, 0.2);
}
.calculator .numbers button:hover, .calculator .numbers button:focus {
    background: rgba(255, 255, 255, 0.75);
}
.calculator .operators button:hover, .calculator .operators button:focus {
    background: rgba(255, 241, 224, 0.25);
}
button:focus {
    outline:0;
}
select {
  cursor: pointer;
  padding: 0.15vw 0.8vw;
  outline: 0;
  border: 0;
  border-radius: 10px;
  color: #777;
  appearance: none;
  -webkit-appearance: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3); 
  font-size: 0.6vw;
}
@media (max-width: 1200px) {
   .imac img {display: none}
   .imac {display: flex;justify-content: center; margin:0;height: 80vh}
   .radio-wrapper {z-index:2; left:auto;padding-left: 20px;bottom:1vh;top:1vh; font-size: 3.1vh}
   .calc-wrapper {position: relative;right: 0;bottom:0;top:-8vh;width:68vw}
   .calculator {width:100%;flex-direction: column;}
   .calculator-wrap { 
       background: linear-gradient(135deg, #A8C945 0%, #83A429 100%); 
       min-height: calc(100vh - 75px);}
   .calculator .numbers button {font-size: 6vw}
   .calculator .operators button {font-size: 10vw}
   .calculator .screen {height: 12vh;}
   .calculator .summary {font-size: 5vw;height: 4vh;}
    .calculator .total {font-size: 8vw}
    .radio input + span {
        line-height: 3.5vh
    }
   .radio input + span::before, .radio input + span::after {
    width:3.1vh;
    height: 3.1vh;
   }
   .radio p {
    height: 5vh;
   }
   select {
    font-size: 4vw;
    padding: 1vw 3.5vw;
    background: #fff;
   }
   .radio {margin:1.5vh 0;font-size: 5.5vw;}
   .design-info {display: none}
   .vue-js-switch{margin-top: 10px;box-shadow: 0 0 10px rgba(85, 85, 85, 0.6);border-radius: 20px;border:1px solid #FF5A00;}
   .v-switch-label{font-size: 16px}
   .fade-wrappers-enter-active, .fade-wrappers-leave-active {
    transition: opacity .5s;
   }
   .fade-wrappers-enter, .fade-wrappers-leave-to {
  opacity: 0;
}
}
</style>