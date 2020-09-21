<template>
	<div class="constructor-wrap entry-content">
		<transition name="view">
		<div @click="closeViewMakets" v-show="openViewMakets" class="bg-makets">
			<div id="img-view" class="maket-show"></div>
		</div>
	</transition>
    <section>
     <div class="mobile-off">
        <i class="far fa-desktop-alt"></i>Конструктор недоступен на устройствах с низким разрешением экрана.<br>Пожалуйста, увеличьте разрешение монитора или воспользуйтесь компьютером, чтобы создать свой неповторимый дизайн.
        <router-link to="/constructor" class="btnHover btnmodal">ОК</router-link>
        </div>
    </section>
<section class="constructor">
    <a id="link" ref="downLoad"></a>
    <div @mousedown="" v-show="qrCodeModal" id="qr-code" class="popup">
    	<span v-show="openQrAlert" id="popupdrag" class="popupdrag show">Если мешает, перетащи!</span>
    	<div @mousedown.self="dragElmnt('qr-code', true);openQrAlert = false;popupDragAlert.pause()" @mouseup="dragElmnt('qr-code', false)" class="row-web">
    		<div class="dots">
	    		<span class="dot dot-close" @click="qrCodeModal = !qrCodeModal" style="background:#ED594A;"></span>
				<span class="dot" style="background:#FDD800;"></span>
				<span class="dot" style="background:#5AC05A;"></span>
    		</div>
    		<span @click="qrCodeModal = !qrCodeModal" class="close-qr">×</span>
    	</div>
  <qr-canvas style="cursor: default;" :options="options"></qr-canvas>
  <br>
  <input @click="$refs.input.focus()" ref="input" type="text" placeholder="Введите данные" v-model="text">
   <br>
  <a @click="getQR" class="btnHover">Вставить</a>
</div>
		<div id="colors-modal" v-show="colorsModal" class="colors-wrap popup">
			<span v-show="openCrAlert" id="popupcolors" class="popupdrag show">Если мешает, перетащи!</span>
			<div @mousedown.self="dragElmnt('colors-modal', true);openCrAlert = false;popupColorsAlert.pause()" @mouseup="dragElmnt('colors-modal', false)" class="row-web">
    		<div class="dots">
	    		<span class="dot dot-close" @click="colorsModal = !colorsModal" style="background:#ED594A;"></span>
				<span class="dot" style="background:#FDD800;"></span>
				<span class="dot" style="background:#5AC05A;"></span>
    		</div>
    		<span @click="colorsModal = !colorsModal" class="close-qr">×</span>
    	</div>
			<sketch-picker :value="colors" @input="updateValue"/>
		</div>
	<transition name="fade-templates">
		<div v-if="templatesWrap" class="teplates-wrap">
			<div @click="templatesWrap = !templatesWrap" class="close" title="Закрыть">&times;</div>
			<div class="mid-content">
				<carousel :items="4" :margin="10" :nav="false" :navText="['‹','›']" :stagePadding="50" :mouseDrag="false">
					<div @click="setTemplate('one')" class="addtmpl"><img src="@/assets/images/tmpl1.jpg"></div>
					<div @click="setTemplate('two')" class="addtmpl"><img src="@/assets/images/tmpl2.jpg"></div>
					<div @click="setTemplate('three')" class="addtmpl"><img src="@/assets/images/tmpl3.jpg"></div>
                    <div @click="setTemplate('nine')" class="addtmpl"><img src="@/assets/images/tmpl9.jpg"></div>
					<div @click="setTemplate('four')" class="addtmpl"><img src="@/assets/images/tmpl4.jpg"></div>
					<div @click="setTemplate('five')" class="addtmpl"><img src="@/assets/images/tmpl5.jpg"></div>
                    <div @click="setTemplate('ten')" class="addtmpl"><img src="@/assets/images/tmpl10.jpg"></div>
					<div @click="setTemplate('six')" class="addtmpl"><img src="@/assets/images/tmpl6.jpg"></div>
					<div @click="setTemplate('seven')" class="addtmpl"><img src="@/assets/images/tmpl7.jpg"></div>
					<div @click="setTemplate('eight')" class="addtmpl"><img src="@/assets/images/tmpl8.jpg"></div>
					<div @click="setTemplate('eleven')" class="addtmpl"><img src="@/assets/images/tmpl11.jpg"></div>
                    <div @click="setTemplate('twelve')" class="addtmpl"><img src="@/assets/images/tmpl12.jpg"></div>
				</carousel>
			</div>
		</div>
	</transition>
	<div class="mid-content">
<h2 id="typeOfMaket">Визитка {{ h2Type }}</h2>
<div class="icon-bar">
    <a class="popup left-radius" @click="addText">
        <i class="fas fa-font"></i>
        <span class="popuptext">Вставить текст</span>
    </a>
      <a @click="loadImg"class="popup">
        <div id="file">
            <i class="fas fa-file-image"></i>
            <span class="popuptext">Вставить картинку</span>
        </div>
    </a>
      <a @mouseleave="hideShapes" @click="showShapes" class="popup shapes">
        <i class="fas fa-cubes shapes" ></i>
        <i id="arrow" :class="{'fas fa-angle-up': angleUp, 'fas fa-angle-down': angleDown}"class="shapes"></i>
        <span class="popuptext">Вставить фигуру</span>
          <div v-if="dropdown" id="createShape" class="dropdown-content shapes">
        	<div @click="addShape" class="shape" data-shape="circle"><i class="far fa-circle shapes inner"></i>Круг</div>
            <div @click="addShape" class="shape" data-shape="line"><i class="fas fa-minus shapes inner"></i>Линия</div>
        	<div @click="addShape" class="shape" data-shape="square"><i class="far fa-square shapes inner"></i>Квадрат</div>
            <div @click="addShape" class="shape" data-shape="triangle"><i class="far fa-triangle shapes inner"></i>Треугольник</div>
        	<div @click="addShape" class="shape" data-shape="rect"><i class="far fa-rectangle-landscape shapes inner"></i>Прямоугольник</div>
        </div>
    </a>
    <a class="popup" @click="downloadCanvas">
    	<i class="fal fa-save"></i>
        <span class="popuptext">Сохранить в файл</span>
    </a>
    <a class="popup" @click="deleteThis">
        <i class="fas fa-trash"></i><span class="popuptext">Удалить элемент</span>
    </a>
    <a class="popup" @click="clearCanvas">
        <i class="fas fa-recycle"></i>
        <span class="popuptext">Очистить холст</span>
    </a>
    <a id="export" class="popup active-send" @click="sendModal = !sendModal">
        <i class="far fa-print"></i>
        <span class="popuptext">Заказать</span></a>
</div>
<div style="height:0;width:0;overflow:hidden">
    <input id="fileupload" ref="fileInput" type="file" name="file" />
</div>
<div class="canvas-wrapper" :class="{'maket-round':isMaketRound}">
	<canvas :class="{'maket-round':isMaketRound}" id="c"></canvas>
	<div class="canvas-borders" :class="{'maket-round':isMaketRound}">
		<div class="canvas-borders__cut" :class="{'maket-round':isMaketRound}"><i class="far fa-cut"></i>
			<div class="canvas-borders__text-padding"></div>
		</div>
	</div>
</div>
<div class="icon-bar bottom">
    <a id="align-left" @click="setStyles" :class="{'active-style':isLeft}" class="popup left-radius" data-text-transform="left">
        <i class="fas fa-align-left"></i>
        <span class="popuptext">По левому</span>
    </a>
    <a id="align-center" @click="setStyles" :class="{'active-style':isCenter}" class="popup" data-text-transform="center">
        <i class="fas fa-align-center"></i>
        <span class="popuptext">По центру</span>
    </a>
    <a id="align-right" @click="setStyles" :class="{'active-style':isRight}" class="popup" data-text-transform="right">
        <i class="fas fa-align-right"></i>
        <span class="popuptext">По правому</span>
    </a>
    <a id="bold" @click="setStyles" :class="{'active-style':isBold}" class="popup" data-text-transform="bold">
        <i class="fas fa-bold"></i>
        <span class="popuptext">Жирный</span>
    </a>
    <a id="italic" @click="setStyles" :class="{'active-style':isItalic}" class="popup" data-text-transform="italic">
        <i class="fas fa-italic"></i>
        <span class="popuptext">Курсив</span>
    </a>
    <a id="underline" @click="setStyles" :class="{'active-style':isUnderline}" class="popup" data-text-transform="underline">
        <i class="fas fa-underline"></i>
        <span class="popuptext">Подчеркивание</span>
    </a>
    <a class="popup select-popup">
        <div class="custom-select" style="width:200px;">
            <select id="font-family">
                <option value="empty"></option>
                <option value="arial">Arial</option>
            	<option value="myriad pro">Myriad Pro</option>
                <option value="times new roman">Times New Roman</option>
                <option value="gotham pro">Gotham Pro</option>
            	<option value="georgia">Georgia</option>
                <option value="courier">Courier</option>
                <option value="comic sans ms">Comic Sans MS</option>
                <option value="impact">Impact</option>
            </select>
            <span style="margin: 17px -80px" class="popuptext">Шрифт</span>
        </div>
    </a>
    <a class="popup" style="margin:0 6px; display: inline-flex;">
        <input v-model="lineHgt" @input="changeLineHeight" type="range" min="0.5" max="1.5" step="0.05" class="slider" id="range_line_height">
	   <span class="popuptext">Межстрочный интервал</span>
    </a>
    <a class="popup" href="#">
    	 <vue-numeric-input  v-model="fontSizeNum" :min="1" align="center" :size="'100px'" @input="setFontSize" @focus="disFontAllow = 6" @blur="disFontAllow = 1" :disabled="isDisFontSize"></vue-numeric-input>
        <span class="popuptext">Размер шрифта</span>
    </a>
    <a class="popup font-color" href="#" style="display: inline-flex;margin-left:6px;">
        <input @change="setColor"class="color-select" type="color" v-model="colorElm" size="10">
        <span class="popuptext">Цвет</span>
    </a>
    <a id="bringToFront" class="popup" @click="setFrontSide">
        <i class="fas fa-level-up"></i>
        <span class="popuptext">На передний план</span>
    </a>
    <a id="sendToBack" class="popup" @click="setBackSide">
        <i class="fas fa-level-down"></i>
        <span class="popuptext">На задний план</span>
    </a>
    <a @click="zoomIn" class="popup">
        <i class="far fa-search-plus"></i>
        <span class="popuptext">Увеличить</span>
    </a>
    <a @click="zoomOut" class="popup">
        <i class="far fa-search-minus"></i>
        <span class="popuptext">Уменьшить</span>
    </a>
    <a class="popup right-radius" @click="undo">
        <i class="fas fa-undo"></i>
        <span class="popuptext">Отменить</span>
    </a>
</div>
<div id="font-icons" class="sidenav" :class="{'open-icons': isOpen}">
  <a href="javascript:void(0)" class="closebtn"  @click="isOpen = !isOpen"><i title="Закрыть" class="fas fa-arrow-to-right"></i></a>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></div >
	<div class="canvas-icons"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe" class="svg-inline--fa fa-globe fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"></path></svg></div>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm121.8 169.9l-40.7 191.8c-3 13.6-11.1 16.9-22.4 10.5l-62-45.7-29.9 28.8c-3.3 3.3-6.1 6.1-12.5 6.1l4.4-63.1 114.9-103.8c5-4.4-1.1-6.9-7.7-2.5l-142 89.4-61.2-19.1c-13.3-4.2-13.6-13.3 2.8-19.7l239.1-92.2c11.1-4 20.8 2.7 17.2 19.5z"/></svg></div>
	<div class="canvas-icons"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="globe-americas" class="svg-inline--fa fa-globe-americas fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm82.29 357.6c-3.9 3.88-7.99 7.95-11.31 11.28-2.99 3-5.1 6.7-6.17 10.71-1.51 5.66-2.73 11.38-4.77 16.87l-17.39 46.85c-13.76 3-28 4.69-42.65 4.69v-27.38c1.69-12.62-7.64-36.26-22.63-51.25-6-6-9.37-14.14-9.37-22.63v-32.01c0-11.64-6.27-22.34-16.46-27.97-14.37-7.95-34.81-19.06-48.81-26.11-11.48-5.78-22.1-13.14-31.65-21.75l-.8-.72a114.792 114.792 0 0 1-18.06-20.74c-9.38-13.77-24.66-36.42-34.59-51.14 20.47-45.5 57.36-82.04 103.2-101.89l24.01 12.01C203.48 89.74 216 82.01 216 70.11v-11.3c7.99-1.29 16.12-2.11 24.39-2.42l28.3 28.3c6.25 6.25 6.25 16.38 0 22.63L264 112l-10.34 10.34c-3.12 3.12-3.12 8.19 0 11.31l4.69 4.69c3.12 3.12 3.12 8.19 0 11.31l-8 8a8.008 8.008 0 0 1-5.66 2.34h-8.99c-2.08 0-4.08.81-5.58 2.27l-9.92 9.65a8.008 8.008 0 0 0-1.58 9.31l15.59 31.19c2.66 5.32-1.21 11.58-7.15 11.58h-5.64c-1.93 0-3.79-.7-5.24-1.96l-9.28-8.06a16.017 16.017 0 0 0-15.55-3.1l-31.17 10.39a11.95 11.95 0 0 0-8.17 11.34c0 4.53 2.56 8.66 6.61 10.69l11.08 5.54c9.41 4.71 19.79 7.16 30.31 7.16s22.59 27.29 32 32h66.75c8.49 0 16.62 3.37 22.63 9.37l13.69 13.69a30.503 30.503 0 0 1 8.93 21.57 46.536 46.536 0 0 1-13.72 32.98zM417 274.25c-5.79-1.45-10.84-5-14.15-9.97l-17.98-26.97a23.97 23.97 0 0 1 0-26.62l19.59-29.38c2.32-3.47 5.5-6.29 9.24-8.15l12.98-6.49C440.2 193.59 448 223.87 448 256c0 8.67-.74 17.16-1.82 25.54L417 274.25z"></path></svg></div>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"/></svg></div>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg></div>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"/></svg></div>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"/></svg></div>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C118.941 8 8 118.919 8 256c0 137.059 110.919 248 248 248 48.154 0 95.342-14.14 135.408-40.223 12.005-7.815 14.625-24.288 5.552-35.372l-10.177-12.433c-7.671-9.371-21.179-11.667-31.373-5.129C325.92 429.757 291.314 440 256 440c-101.458 0-184-82.542-184-184S154.542 72 256 72c100.139 0 184 57.619 184 160 0 38.786-21.093 79.742-58.17 83.693-17.349-.454-16.91-12.857-13.476-30.024l23.433-121.11C394.653 149.75 383.308 136 368.225 136h-44.981a13.518 13.518 0 0 0-13.432 11.993l-.01.092c-14.697-17.901-40.448-21.775-59.971-21.775-74.58 0-137.831 62.234-137.831 151.46 0 65.303 36.785 105.87 96 105.87 26.984 0 57.369-15.637 74.991-38.333 9.522 34.104 40.613 34.103 70.71 34.103C462.609 379.41 504 307.798 504 232 504 95.653 394.023 8 256 8zm-21.68 304.43c-22.249 0-36.07-15.623-36.07-40.771 0-44.993 30.779-72.729 58.63-72.729 22.292 0 35.601 15.241 35.601 40.77 0 45.061-33.875 72.73-58.161 72.73z"/></svg></div>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M448 80v352c0 26.5-21.5 48-48 48h-85.3V302.8h60.6l8.7-67.6h-69.3V192c0-19.6 5.4-32.9 33.5-32.9H384V98.7c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9H184v67.6h60.9V480H48c-26.5 0-48-21.5-48-48V80c0-26.5 21.5-48 48-48h352c26.5 0 48 21.5 48 48z"/></svg></div>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M76.7 512V283H0v-91h76.7v-71.7C76.7 42.4 124.3 0 193.8 0c33.3 0 61.9 2.5 70.2 3.6V85h-48.2c-37.8 0-45.1 18-45.1 44.3V192H256l-11.7 91h-73.6v229"/></svg></div>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 576"><path d="M545 117.7c3.7-12.5 0-21.7-17.8-21.7h-58.9c-15 0-21.9 7.9-25.6 16.7 0 0-30 73.1-72.4 120.5-13.7 13.7-20 18.1-27.5 18.1-3.7 0-9.4-4.4-9.4-16.9V117.7c0-15-4.2-21.7-16.6-21.7h-92.6c-9.4 0-15 7-15 13.5 0 14.2 21.2 17.5 23.4 57.5v86.8c0 19-3.4 22.5-10.9 22.5-20 0-68.6-73.4-97.4-157.4-5.8-16.3-11.5-22.9-26.6-22.9H38.8c-16.8 0-20.2 7.9-20.2 16.7 0 15.6 20 93.1 93.1 195.5C160.4 378.1 229 416 291.4 416c37.5 0 42.1-8.4 42.1-22.9 0-66.8-3.4-73.1 15.4-73.1 8.7 0 23.7 4.4 58.7 38.1 40 40 46.6 57.9 69 57.9h58.9c16.8 0 25.3-8.4 20.4-25-11.2-34.9-86.9-106.7-90.3-111.5-8.7-11.2-6.2-16.2 0-26.2.1-.1 72-101.3 79.4-135.6z"/></svg></div>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"/></svg></div>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17.256,12.253c-0.096-0.667-0.611-1.187-1.274-1.342c-2.577-0.604-3.223-2.088-3.332-3.734  C12.193,7.092,11.38,7,10,7S7.807,7.092,7.35,7.177c-0.109,1.646-0.755,3.13-3.332,3.734c-0.663,0.156-1.178,0.675-1.274,1.342  l-0.497,3.442C2.072,16.907,2.962,18,4.2,18h11.6c1.237,0,2.128-1.093,1.953-2.305L17.256,12.253z M10,15.492  c-1.395,0-2.526-1.12-2.526-2.5s1.131-2.5,2.526-2.5s2.526,1.12,2.526,2.5S11.394,15.492,10,15.492z M19.95,6  C19.926,4.5,16.108,2.001,10,2C3.891,2.001,0.073,4.5,0.05,6s0.021,3.452,2.535,3.127c2.941-0.381,2.76-1.408,2.76-2.876  C5.345,5.227,7.737,4.98,10,4.98s4.654,0.247,4.655,1.271c0,1.468-0.181,2.495,2.76,2.876C19.928,9.452,19.973,7.5,19.95,6z"/></svg></div>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"/></svg></div>
	<div class="canvas-icons"><svg style="width: 30px" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mobile-alt" class="svg-inline--fa fa-mobile-alt fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z"></path></svg></div>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M4.774,15.287l-2.105,3.25L2.893,19.6l1.06-0.227l2.104-3.248c-0.224-0.12-0.446-0.248-0.661-0.39  C5.178,15.594,4.97,15.443,4.774,15.287z M13.686,14.152c0.014-0.029,0.023-0.061,0.036-0.092c0.053-0.117,0.1-0.234,0.138-0.357  c0.006-0.022,0.009-0.044,0.016-0.064c0.039-0.136,0.072-0.27,0.098-0.408c0-0.007,0-0.012,0-0.021  c0.195-1.169-0.145-2.473-0.923-3.651l1.11-1.714c1.279,0.163,2.385-0.159,2.917-0.982c0.923-1.423-0.2-3.792-2.505-5.293  C12.266,0.068,9.65,0.005,8.729,1.426C8.195,2.25,8.351,3.393,9.022,4.499L7.91,6.213C6.521,5.98,5.194,6.197,4.207,6.853  C4.201,6.855,4.194,6.857,4.19,6.861C4.075,6.939,3.963,7.025,3.858,7.115C3.841,7.129,3.821,7.142,3.807,7.156  C3.709,7.24,3.621,7.334,3.536,7.428c-0.02,0.024-0.048,0.045-0.067,0.07c-0.106,0.121-0.204,0.249-0.29,0.385  c-1.384,2.133-0.203,5.361,2.633,7.209c2.838,1.848,6.26,1.614,7.641-0.519C13.54,14.438,13.62,14.297,13.686,14.152z M12.871,4.194  c-0.887-0.577-1.32-1.487-0.965-2.036c0.354-0.547,1.361-0.522,2.246,0.055c0.889,0.577,1.318,1.489,0.965,2.036  C14.764,4.796,13.759,4.771,12.871,4.194z"/></svg></div>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/></svg></div>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"/></svg></div>
	<div class="canvas-icons"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/></svg></div>
 </div>
 <div id="myTemplates" class="teplates">
 	<div @click="viewMaket" id="help">Просмотр<i class="fal fa-eye left-fa"></i></div>
  	<div @click="templatesWrap = !templatesWrap"href="#" id="templates">Шаблоны<i class="fal fa-address-card left-fa"></i></div>
  	<div @click="qrCodeModal = !qrCodeModal;popupDragAlert.play()" id="qrCode">QR код<i class="fal fa-qrcode left-fa"></i></div>
  	<div @click="isOpen = !isOpen" id="icons">Иконки<i class="fab fa-font-awesome-flag left-fa"></i></div>
  	<div @click="colorsModal = !colorsModal;popupColorsAlert.play()" id="fill">Цвет фона<i class="fas fa-rectangle-landscape left-fa"></i></div>
  	 <!-- <div @click="saveJSON" id="save">Вопросы<i class="fal fa-question-circle left-fa"></i></div> -->
 </div>
<div v-if="sendModal" class="modal">
  <form class="modal-content animate">
  	 <div @click="sendModal = !sendModal" class="close" title="Закрыть">&times;</div>
    <div class="container">
    	<input v-model="formQuantity" id="total-price" class="order" placeholder="Общее количество" type="number" name="number" min="100" step="1" value="" @change="correctVal" required>
		<transition name="fade-alert">
			<div v-if="popupAlertNumber" class="popupalert-container"><span class="popupalert" id="popupNumber">Минимум 100шт</span></div>
			<div v-if="popupAlert.quantity.event" class="popupalert-container"><span class="popupalert" id="popupNumber">Введите количество</span></div>
		</transition>
		<input v-model="formName" class="order" type="text" placeholder="Ваше имя" name="name" required>
		<transition name="fade-alert">
			<div v-if="popupAlert.names.event"class="popupalert-container"><span class="popupalert" id="myPopup">Введите имя</span></div>
		</transition>
		<input v-model="formPhone" id="phone" class="order" type="text" placeholder="+7 777 777 77 77" name="phone" v-mask="'+# ### ### ## ##'" required>
		<transition name="fade-alert">
			<div v-if="popupAlert.phone.event"class="popupalert-container"><span class="popupalert" id="myPopup">Введите номер</span></div>
		</transition>
		<input v-model="formEmail" class="order" type="email" placeholder="Ваша почта" name="email" required>
		<transition name="fade-alert">
			<div v-if="popupAlert.email.event"class="popupalert-container"><span class="popupalert" id="myPopup">Введите почту</span></div>
		</transition>
    </div>
     <button @click="sendOrder" type="button" class="btnmodal btnHover">Заказать</button>
  </form>
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
</section>
</div>
</template>

<script>
import { QRCanvas } from 'qrcanvas-vue';
import FontFaceObserver from 'fontfaceobserver';
import carousel from 'vue-owl-carousel';
import { fabric } from 'fabric';
import { Sketch} from 'vue-color';
import tmpls from '../components/Templates';
import VueNumericInput from 'vue-numeric-input'
	export default {
		components: { 
            carousel,
             QrCanvas: QRCanvas,
             'sketch-picker': Sketch,
             tmpls,
             VueNumericInput
             },
		data() {
			return {
                dropdown:false,
                angleUp:false,
                angleDown:true,
                newCircle:10,
			    newTriangle:10,
			    newSquare:10,
			    newLine:20,
                newSVG:40,
			    isLeft:false,
			    isCenter:false,
			    isRight:false,
			    isBold:false,
			    isItalic:false,
			    isUnderline:false,
			    lineHgt:1,
			    fontSizeNum:null,
			    colorElm:'',
			    isOpen:false,
			    scaleFactor:1.2,
                state:[],
                statePush:true,
                fontsMass:['courier', 'myriad pro', 'gotham pro'],
                sendModal:false,
                popupAlert:{
                	names:{event:false},
                	phone:{event:false},
                	email:{event:false},
                	quantity:{event:false}
            	},
                popupAlertNumber:false,
                delayAlertHide:0,
                delayAlertShow:0,
                ajaxSend:true,
                templatesWrap:false,
                text: '',
                qrCodeModal:false,
                openQrAlert: true,
                canvasProps:{
                    height:null,
                    width:null,
                    history:null
                },
                isMaketRound:false,
                h2Type:'',
                openViewMakets:false,
                colors:{rgba:{r:0, g:0, b:0, a:1 } },
                colorsModal:false,
                openCrAlert:true,
                isDisFontSize:true,
                disFontAllow:1,
                formName:null,
                formQuantity:null,
                formPhone:null,
                formEmail:null,
                isBubbles:false
			}
		},
		methods: {
			showShapes() {
				this.dropdown = true; this.angleUp = true; this.angleDown = false;
			},
			hideShapes() {
				this.dropdown = false; this.angleUp = false; this.angleDown = true;
			},
			closeAllSelect(elmnt) {
			  let x, y, i, arrNo = [];
			  x = document.getElementsByClassName("select-items");
			  y = document.getElementsByClassName("select-selected");
			  for (i = 0; i < y.length; i++) {
			    if (elmnt == y[i]) {
			      arrNo.push(i)
			    } else {
			      y[i].classList.remove("select-arrow-active");
			    }
			  }
			  for (i = 0; i < x.length; i++) {
			    if (arrNo.indexOf(i)) {
			      x[i].classList.add("select-hide");
			    }
			  }
			},
			addText() {
    		    let text = new fabric.IText("Текст", {
        		  left: 50,
        		  top: 40,
        		  fontFamily: 'arial',
       			  fill: '#000000',
        		  fontSize: 25
    		  });
    			this.canvas.add(text);
			},
			setControls() {
			    this.canvas.getObjects().forEach(function(e) {
			        "i-text" != e.type && "path" != e.type && "image" != e.type || e.setControlsVisibility({
			            mt: !1, mb: !1, ml: !1, mr: !1 }), 
                    "line" == e.type && e.setControlsVisibility({
			            bl: !1, br: !1, tl: !1, tr: !1
                    })
			    })
			},
			addShape(event) {
						let e = event.currentTarget.getAttribute('data-shape');
					    switch (e) {
				        case "circle":
				            let t = new fabric.Circle({
				                top: 60,
				                left: 15 + this.newCircle,
				                fill: "#" + (16777216 + 16777215 * Math.random()).toString(16).substr(1, 6),
				                radius: 30
				            });
				            this.canvas.add(t), this.newCircle += 50;
				            break;
				        case "triangle":
				            let a = new fabric.Triangle({
				                top: 60,
				                left: 15 + this.newTriangle,
				                width: 50,
				                height: 50,
				                fill: "#" + (16777216 + 16777215 * Math.random()).toString(16).substr(1, 6)
				            });
				            this.canvas.add(a), this.newTriangle += 50;
				            break;
				        case "square":
				            let n = new fabric.Rect({
				                top: 60,
				                left: 15 + this.newSquare,
				                fill: "#" + (16777216 + 16777215 * Math.random()).toString(16).substr(1, 6),
				                width: 50,
				                height: 50
				            });
				            this.canvas.add(n), this.newSquare += 50;
				            break;
				        case "line":
				            let s = new fabric.Line([0, 0, 200, 0], {
				                left: 50,
				                top: 15 + this.newLine,
				                stroke: "#" + (16777216 + 16777215 * Math.random()).toString(16).substr(1, 6),
				                strokeWidth: 4
				            });
				            s.setControlsVisibility({
				                bl: !1,
				                br: !1,
				                tl: !1,
				                tr: !1
				            }), this.canvas.add(s), this.newLine += 10;
				            break;
				        case "rect":
				            n = new fabric.Rect({
				                top: 60,
				                left: 0 + this.newSquare,
				                fill: "#" + (16777216 + 16777215 * Math.random()).toString(16).substr(1, 6),
				                width: 100,
				                height: 50,
				                rx: 10,
				                ry: 10
				            });
				            this.canvas.add(n), this.newSquare += 50
				            break;
					    }
					    this.hideShapes()
			},
			clearCanvas() {
			    this.canvas.clear().setBackgroundColor('rgba(255,255,255,1)');this.state = [];localStorage.removeItem(this.canvasProps.history);
			},
			deleteThis() {
				this.canvas.remove(this.obj())
			},
			setStyles(event) {
				let e = event.currentTarget.getAttribute('data-text-transform');
			    if (this.obj() && "i-text" == this.obj().type) switch (e) {
			        case "left":
			            this.obj().set("textAlign", e), this.canvas.renderAll();
				            this.isLeft = true; this.isRight = false; this.isCenter = false;
			            break;
			        case "right":
			            this.obj().set("textAlign", e), this.canvas.renderAll();
				            this.isLeft = false; this.isRight = true; this.isCenter = false;
			            break;
			        case "center":
			            this.obj().set("textAlign", e), this.canvas.renderAll();
				            this.isLeft = false; this.isRight = false; this.isCenter = true;
			            break;
			        case "bold":
			            if ("bold" !== this.obj().get("fontWeight")) {
			            	this.obj().set("fontWeight", e); this.canvas.renderAll(); this.isBold = true; 
                        } else {
			            	this.obj().set("fontWeight", ""); this.canvas.renderAll(); this.isBold = false; 
                        }
			            break;
			        case "italic":
			        	if ("italic" !== this.obj().get("fontStyle")) {
							this.obj().set("fontStyle", e); this.canvas.renderAll(); this.isItalic = true;
                        } else {
							this.obj().set("fontStyle", ""); this.canvas.renderAll(); this.isItalic = false;
                        }
			            break;
			        case "underline":
			        if (this.obj().get("underline")) {
			            this.obj().set("underline", ""); this.canvas.renderAll(); this.isUnderline = false;
                    } else {
			        	this.obj().set("underline", !0); this.canvas.renderAll(); this.isUnderline = true;
                    }
			        break;
			        default:
			            this.obj().set("fontStyle", ""); this.canvas.renderAll();
			    }
			},
			setActiveStyle(e) {
				this.isLeft = false; this.isCenter = false; this.isRight = false; this.isBold = false; this.isItalic = false; this.isUnderline = false;
				if (e && "i-text" == e.type) {
			        switch (e.get("textAlign")) {
			            case "left":
			                this.isLeft = true;
			                break;
			            case "right":
			               this.isRight = true;
			                break;
			            case "center":
			               this.isCenter = true;
			               break;
			             default:
			        }
			        if ("italic" == e.get("fontStyle")) this.isItalic = true;
			        if ("bold" == e.get("fontWeight"))  this.isBold = true;
			        if (e.get("underline")) this.isUnderline = true;
			    }
			},
			obj() {
				return this.canvas.getActiveObject();
			},
			showFontSize(e) {
			    if (e && "i-text" == e.type) {
			    	this.isDisFontSize = false
			    	this.fontSizeNum = Math.round(e.scaleX * e.fontSize * .475)
			    } else {
			    	this.isDisFontSize = true;
			    	this.fontSizeNum = null;
			    }
			},
			setFontSize(f) {
				if (f >= this.disFontAllow) {
					let e = this.obj();
			    	let size = Math.round(f * 2.083 / e.scaleX);
			    	e.set('fontSize', size);
			    	this.canvas.renderAll();
		    	}
			},
			showColor(e) {
			    e ? "line" == e.type ? this.colorElm = e.stroke : this.colorElm = e.fill : this.colorElm = ''
			},
			showLineHeight(e) {
			    this.lineHgt = e ? e.lineHeight : 1
			},
			setBackSide() {
			    this.canvas.sendToBack(this.obj()).discardActiveObject();
			},
			setFrontSide() {
			    this.canvas.bringToFront(this.obj()).discardActiveObject();
			},
			changeLineHeight() {
			    this.obj() && (this.obj().set("lineHeight", this.lineHgt), this.canvas.renderAll())
			},
			showFontFamily(e) {
			    if (e && e.get("fontFamily")) document.querySelector('.select-selected').innerHTML = document.querySelector('option[value="' + e.get("fontFamily") +'"]').text;
			    else document.querySelector('.select-selected').innerHTML = '';
			},
			setFontFamily(e) {
			    if (this.obj() && "i-text" == this.obj().type) {
			    	for (let font of this.fontsMass) {
			    		if (e == font) {
				    		let fontAdd = new FontFaceObserver(e);
				    		fontAdd.load().then(() => {
				    			this.obj().set("fontFamily", e);
				    			this.canvas.renderAll();
							});
			    		} else {
				    		this.obj().set("fontFamily", e);
				    		this.canvas.renderAll();
				    	}
				    } 
			    } else document.querySelector('.select-selected').innerHTML = '';
			},
			loadSVG(svg) {
			    fabric.loadSVGFromString(svg, (objects, options) => {
					let loadedIcon = fabric.util.groupSVGElements(objects, options);
					loadedIcon.scaleToHeight(this.canvas.height / 10 / this.canvas.getZoom()).set({top:this.newSVG, left:this.newSVG });
					this.canvas.add(loadedIcon).renderAll();
                    this.newSVG += 20;
			    });
			    this.isOpen = false;
			},
			setColor(e) {
   				"line" == this.obj().type ? (this.obj().set("stroke", e.target.value), this.canvas.renderAll()) : (this.obj().set("fill", e.target.value), this.canvas.renderAll())
			},
			zoomIn() {
				this.canvas.setZoom(this.canvas.getZoom() * this.scaleFactor), this.canvas.setHeight(this.canvas.getHeight() * this.scaleFactor), this.canvas.setWidth(this.canvas.getWidth() * this.scaleFactor)
				this.setSizeBoundBox();
			},
			zoomOut() {
				this.canvas.setZoom(this.canvas.getZoom() / this.scaleFactor), this.canvas.setHeight(this.canvas.getHeight() / this.scaleFactor), this.canvas.setWidth(this.canvas.getWidth() / this.scaleFactor)
				this.setSizeBoundBox();
			},
			loadImg() {
				this.$refs.fileInput.click()
			},
			startLoad(e) {
				let file = e.target.files[0];
				let reader = new FileReader();
				reader.onload = (f) => {
				    let data = f.target.result;
				    fabric.Image.fromURL(data, (img) => {
					let aspect = img.width / img.height;
					let oImg = img.set({
						left: 40, 
						top: 40, 
						scaleX: (this.canvas.width - this.canvas.width / 1.25) / img.width,
						scaleY: (this.canvas.width - this.canvas.width / 1.25) / (img.height * aspect)
					 })
					this.canvas.add(oImg).renderAll();
				    });
				};
				reader.readAsDataURL(file);
			},
            updateModifications() {
                let history = JSON.stringify(this.canvas);
                this.state.push(history);
                localStorage.setItem(this.canvasProps.history, history);
            },
            undo() {
            	if (this.state.length > 1) {
	            	this.statePush = false;
	                this.canvas.clear().renderAll();
					const promise = new Promise((resolve, reject) => {
						this.canvas.loadFromJSON(this.state[this.state.length - 2]).renderAll();
	                	this.state.pop();
	                	localStorage.setItem(this.canvasProps.history, JSON.stringify(this.canvas));
					});
	                promise.then(this.statePush = !this.statePush);
            	} else this.clearCanvas();
            },
            boundingBox(e) {
                let boundBox = document.querySelector('.canvas-borders__cut');
            	let top = e.top;
            	let bottom = (top + e.height);
			    let left = e.left;
			    let right = (left + e.width);
			    e.set('left', Math.min(Math.max(left, 30), (this.canvasProps.width - 31) - e.width * e.scaleX));
     			e.set('top', Math.min(Math.max(top, 30), (this.canvasProps.height - 31) - e.height * e.scaleY));
            },
            setSizeBoundBox() {
            	let canvasBorders = document.querySelector('.canvas-borders');
                let widthCut = Math.round(this.canvas.getWidth() - this.canvas.getWidth() * 0.05);
                let heightCut = Math.round(this.canvas.getHeight() - this.canvas.getHeight() * 0.09);
                let widthTextPadding = Math.round(widthCut - widthCut * 0.07);
                let heightTextPadding = Math.round(heightCut - heightCut * 0.13);
                canvasBorders.setAttribute("style", "height:" +  Math.round(this.canvas.getHeight()) + "px;width:" +  Math.round(this.canvas.getWidth()) + "px;box-shadow:inset 0px 0px 0px "+ Math.round(13 * this.canvas.getZoom()) +"px rgba(0,0,0,0.1)");
                document.querySelector('.canvas-borders__cut').setAttribute("style", "height:" + heightCut + "px;width:" + widthCut + "px");
                document.querySelector('.canvas-borders__text-padding').setAttribute("style", "height:" + heightTextPadding + "px;width:" + widthTextPadding + "px");
                let wrap = document.querySelector('.canvas-wrapper');
                let canva = document.querySelector('.upper-canvas');
                if (wrap.offsetHeight < canva.offsetHeight) canvasBorders.style.top = 0;
                if (wrap.offsetWidth < canva.offsetWidth)	canvasBorders.style.left = 0;
            },
            correctVal(e) {
            	this.ajaxSend = true;
            	if (e.target.value < 100) {
            		e.target.value = 100;
            		this.popupAlertNumber = true;
            		setTimeout(() => {
	      				this.popupAlertNumber = false
	    			}, 3000);
	    			this.ajaxSend = false;
            	}
            },
            sendOrder() {
            	this.ajaxSend = true;
            	let elements = document.querySelectorAll('.order');
            	for (let elm of elements) {
            		if (elm.name == 'name' && elm.value == '') this.setTimeoutFoo(this.popupAlert.names);
            		if (elm.name == 'phone' && elm.value == '') this.setTimeoutFoo(this.popupAlert.phone);
            		if (elm.name == 'email' && elm.value == '') this.setTimeoutFoo(this.popupAlert.email);
            		if (elm.name == 'number' && elm.value == '') this.setTimeoutFoo(this.popupAlert.quantity);
            	}
            	this.delayAlertHide = 0;
            	this.delayAlertShow = 0;
            	if (this.ajaxSend) {this.ajaxFetch();this.isBubbles = true;this.sendModal = false}
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
            	let s = this.canvas.toSVG();
        		fetch('https://data.thecitrus.kz/order.php',{
        			method:'post',
        			body: JSON.stringify({order:s,quantity:this.formQuantity,name:this.formName,phone:this.formPhone,email:this.formEmail})
        		})  
		  		.then((response) => {  
					this.formQuantity = null;this.formName = null;this.formPhone = null;this.formEmail = null;this.isBubbles = false;this.showSnackBar()
		   		}) 
            },
            showSnackBar() {
              let x = document.getElementById("snackbar");
              x.className = "show-snack";
              setTimeout(function(){ x.className = x.className.replace("show-snack", ""); }, 3000);
            },
            downloadCanvas(e) {
            	e.stopPropagation;
            	const download = new Promise((resolve, reject) => {
					let link = document.querySelector('#link');;
	            	link.href = this.canvas.toDataURL({multiplier: 4});
	            	link.download = "template.png";
					});
	            download.then(this.$refs.downLoad.click());
            },
            setTemplate(obj) {
            	let tmpl = null;
            	switch(obj) {
            		case 'one': tmpl = tmpls.data.one;
            			break;
        			case 'two': tmpl = tmpls.data.two;
        				break;
        			case 'three': tmpl = tmpls.data.three;
        				break;
    				case 'four': tmpl = tmpls.data.four;
    					break;
    				case 'five': tmpl = tmpls.data.five;
    					break;
    				case 'six': tmpl = tmpls.data.six;
    					break;
    				case 'seven': tmpl = tmpls.data.seven;
    					break;
    				case 'eight': tmpl = tmpls.data.eight;
    					break;
                    case 'nine': tmpl = tmpls.data.nine;
                        break;
                    case 'ten': tmpl = tmpls.data.ten;
                        break;
                    case 'eleven': tmpl = tmpls.data.eleven;
                        break;
                    case 'twelve': tmpl = tmpls.data.twelve;
                        break;
            		default:
            	}
            	this.canvas.clear().loadFromJSON(tmpl);
            	this.templatesWrap = false;
            },
            saveJSON() {
            	let data = JSON.stringify(this.canvas.toJSON())
     //        	fetch('https://data.thecitrus.kz/order.php').then((response) => {  
     //        		console.log(response);
		   //      	response.text().then(function (text) {
					//   console.log(text);
					// });
     //        	});
            	console.log(data);
            },
            getQR() {
                let cnvs = document.querySelector("#qr-code canvas");
                let dataURL = cnvs.toDataURL('image/png');
                fabric.Image.fromURL(dataURL, (qrCode) => {
                    qrCode.set({left: 300,top: 100}).scaleToHeight(this.canvas.height / 4 / this.canvas.getZoom());
                    this.canvas.add(qrCode);
                });
            },
            dragElmnt(e, drag) {
            	let elmnt = document.getElementById(e);
				let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
				if (drag) elmnt.onmousedown = dragMouseDown;
			   	else elmnt.onmousedown = closeDragElement;
			  	function dragMouseDown(e) {
				    e = e || window.event;
				    e.preventDefault();
				    pos3 = e.clientX;
				    pos4 = e.clientY;
				    document.onmouseup = closeDragElement;
				    document.onmousemove = elementDrag;
			  	}
			  	function elementDrag(e) {
				    e = e || window.event;
				    e.preventDefault();
				    pos1 = pos3 - e.clientX;
				    pos2 = pos4 - e.clientY;
				    pos3 = e.clientX;
				    pos4 = e.clientY;
				    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
				    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
			  	}
			  	function closeDragElement() {
				    document.onmouseup = null;
				    document.onmousemove = null;
			  	}
			},
			viewMaket() {
				let img = this.canvas.toDataURL({multiplier: 2});
				let imgNode = document.createElement("img");
				let imageParent = document.getElementById("img-view");
				if (this.isMaketRound) imageParent.style.borderRadius = '20px';
				imgNode.src = img; 
				imageParent.appendChild(imgNode);
				this.openViewMakets = true;
				window.scrollTo(0, 0)
				window.onscroll = function () {window.scrollTo(0, 0)};
			},
			closeViewMakets(e) {
				let imageParent = e.target.firstChild;
				imageParent.innerHTML = '';
				this.openViewMakets = false;
	    		window.onscroll = function () {window.scrollTo()};
			},
			updateValue(e){
				let r, g, b, a, rgba;
				r = e.rgba.r; g = e.rgba.g; b = e.rgba.b; a = e.rgba.a;
				this.canvas.setBackgroundColor(`rgba(${r},${g},${b},${a})`).renderAll();
            }
		},
				// end methods
		beforeMount() {
            let size = this.$route.query.maket;
            switch(size) {
                case('euro'): {this.canvasProps.height = 290; this.canvasProps.width = 531; this.canvasProps.history = size; this.h2Type = '90мм х 50мм'}
                    break;
                case('round'): {this.canvasProps.height = 319; this.canvasProps.width = 508; this.canvasProps.history = size; this.isMaketRound = true;this.h2Type = '86мм х 55мм'}
                    break;
                case('rect'): {this.canvasProps.height = 325; this.canvasProps.width = 531; this.canvasProps.history = size; this.h2Type = '90мм х 55мм'}
                    break;
                default:
            }
        },
        mounted() {
        	let self = this;
            let popup = document.querySelectorAll('.popup');
            for (let thisPopup of popup) {
                thisPopup.addEventListener('mouseover', function(e) {
                let popupText = e.target.querySelector('.popuptext');
                   	if (popupText) popupText.classList.add('show');
            	});
                thisPopup.addEventListener('mouseleave', function(e) {
                    let popupText = e.target.querySelector('.popuptext');
                        if (popupText) popupText.classList.remove('show');
            	});
            }
          let x, i, j, selElmnt, a, b, c;
			x = document.getElementsByClassName("custom-select");
			for (i = 0; i < x.length; i++) {
			  selElmnt = x[i].getElementsByTagName("select")[0];
			  a = document.createElement("DIV");
			  a.setAttribute("class", "select-selected");
			  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
			  x[i].appendChild(a);
			  b = document.createElement("DIV");
			  b.setAttribute("class", "select-items select-hide");
			  for (j = 1; j < selElmnt.length; j++) {
			    c = document.createElement("DIV");
			    c.innerHTML = selElmnt.options[j].innerHTML;
			    c.addEventListener("click", function(e) {
			        let y, i, k, s, h;
			        s = this.parentNode.parentNode.getElementsByTagName("select")[0];
			        h = this.parentNode.previousSibling;
			        for (i = 0; i < s.length; i++) {
			          if (s.options[i].innerHTML == this.innerHTML) {
			            s.selectedIndex = i;
			            h.innerHTML = this.innerHTML;
			            self.setFontFamily(s.options[i].value);
			            break;
			          }
			        }
			        h.click();
			    });
			    b.appendChild(c);
			  }
			  x[i].appendChild(b);
			  a.addEventListener("click", function(e) {
			    e.stopPropagation();
			    self.closeAllSelect(this);
			    this.nextSibling.classList.toggle("select-hide");
			    this.classList.toggle("select-arrow-active");
			  });
			}
           document.addEventListener("click", this.closeAllSelect);
           document.getElementById("fileupload").addEventListener("change", this.startLoad )

          // fabric JS
 		
   			// fabric corners
	        fabric.Object.prototype.set({
			    transparentCorners: !1,
			    cornerColor: "#000000",
			    cornerSize: 8,
			    rotatingPointOffset: 20,
			    borderColor: "rgba(0,0,0,.1)"
			});
			this.canvas.on("selection:created", () => {
			    this.showFontSize(this.obj());
			    this.showColor(this.obj());
			    this.showLineHeight(this.obj());
			    this.setActiveStyle(this.obj());
			    this.showFontFamily(this.obj())
			});
			this.canvas.on("selection:cleared", () => {
			    this.showFontSize(this.obj());
			    this.showColor(this.obj());
			    this.showLineHeight(this.obj());
			    this.setActiveStyle(this.obj());
			    this.showFontFamily(this.obj());
			});
			this.canvas.on("selection:updated", () => {
			    this.showFontSize(this.obj());
			    this.showColor(this.obj());
			    this.showLineHeight(this.obj());
			    this.setActiveStyle(this.obj());
			    this.showFontFamily(this.obj());
			});
			this.canvas.on("object:scaling", () => {
			    this.showFontSize(this.obj());
			});
            this.canvas.on("object:modified", () => {
                this.updateModifications()
            });
            this.canvas.on("object:added", () => {
                if (this.statePush) {
                    this.updateModifications();
                }
                this.setControls();
            });
            this.canvas.on("object:moving", (e) => {
                if (this.obj().type == "i-text" || this.obj().type == "path" ) this.boundingBox(this.obj())
            });
			let icons =  document.querySelectorAll('.canvas-icons');
			for (let icon of icons) {
				icon.addEventListener('click', (e) => {
					this.loadSVG(icon.innerHTML);
				});
			};
			// Promise.all([
			// 	this.fontsMass.forEach((font) => {
  	// 				new FontFaceObserver(font).load();
			// 	})])
			Promise.all([
				new FontFaceObserver('gotham pro').load(),
				new FontFaceObserver('myriad pro').load(),
				new FontFaceObserver('courier').load()
				]).then(() => {
					this.canvas.loadFromJSON(localStorage.getItem(this.canvasProps.history), () => {
					this.setControls();
				});
			});
			this.setSizeBoundBox();
			if (this.isMaketRound) document.querySelector('.canvas-container').style.borderRadius = '20px';
			// end mounted
        },
        computed: {
        	canvas() {
        		let canvas = new fabric.Canvas('c', {
        			hoverCursor: "pointer",
				    rotationCursor: "e-resize",
				    preserveObjectStacking: !0,
				    selection: !1,
				    preserveObjectStacking:true
        		});
        		canvas.setHeight(this.canvasProps.height).setWidth(this.canvasProps.width).setBackgroundColor('rgba(255,255,255,1)');
        		return canvas
        	},
            options() {
              return {
                data: this.text,
                size:150
              };
            },
            popupDragAlert() {
            	let popupalert = new TimelineLite()
            	popupalert.from("#popupdrag", 0.5, {y: -10, repeat: -1, yoyo: true, ease: Linear.easeNone})
            	return popupalert
            },
             popupColorsAlert() {
            	let popupalert = new TimelineLite()
            	popupalert.from("#popupcolors", 0.5, {y: -10, repeat: -1, yoyo: true, ease: Linear.easeNone})
            	return popupalert
            }
        }
	}

</script>

<style>
.constructor {position: relative; padding: 4vh 0; background: url('../assets/images/noise.png') repeat; }
#konstruktor {margin: 40px auto }
.icon-bar {width: 99.99%; background-image: linear-gradient(to bottom, #522C1E, #3B1B0F); height: 6vh; margin: 5px auto; display: flex; align-items: center; border-radius: 10px; box-shadow: 0 5px 10px 0 rgba(0,0,0,.3) }
.icon-bar a {float: left; text-align: center; width: 14.286%; height: 6vh; display:flex;justify-content:center; align-items: center; transition: all .3s ease; color: #fff; font-size: 3vh; }
.icon-bar a:hover:not(.active-send, .font-color) {background-image: linear-gradient(to bottom, #522C1E, #3B1B0F); }
.icon-bar a:hover:not(.font-color) {box-shadow: 0 0.5vh 1.5vh 0 rgba(0,0,0,.3); }
.left-radius {border-top-left-radius: 10px; border-bottom-left-radius: 10px; }
.popup {position: relative; display: inline-block; cursor: pointer }
.popup .popuptext, #qr-code .popupdrag, #colors-modal .popupdrag{visibility: hidden; min-width: 170px; background-image: linear-gradient(to bottom, #522C1E, #3B1B0F); color: #fff; text-align: center; border-radius: 6px; padding: 8px 0; position: absolute; z-index: 1; bottom: 125%; left: 50%; margin-left: -85px; font-size: 15px; box-shadow: 0 3px 8px 0 rgba(0,0,0,.2); }
.popup .popuptext::after, #qr-code .popupdrag::after, #colors-modal .popupdrag::after {content: ""; position: absolute; top: 100%; left: 50%; margin-left: -5px; border-width: 5px; border-style: solid; border-color: #3B1B0F transparent transparent }
.popup .show {visibility: visible; animation: fadeIn 0.75s }
.select-popup {width: 200px !important; }
@keyframes fadeIn {from {opacity: 0 } to {opacity: 1 } }
.active-send {background-image: linear-gradient(to bottom, #FF7F00, #FF5A00); border-top-right-radius: 10px; border-bottom-right-radius: 10px; }
.custom-select select, .select-hide {display: none}
.canvas_overlay {position: absolute; height: 250px; width: 410px; border: 1px dashed red; left: 10px; top: 10px; border-radius: 15px }
.fa-cut {position: absolute; margin: -13px 70px; font-size: 25px }
.fa-angle-down, .fa-angle-up {padding: 0 10px }
.bottom a {width: 100px }
.active-style {color: #83A429!important }
.custom-select {position: relative; font-family: Arial; color: #3B1B0F; font-size: 15px }
.select-selected {background-color: #fff; height: 18px; padding: 8px 0 !important;display: flex;justify-content: center;align-items: center; border-bottom-left-radius: 3px;border-bottom-right-radius: 3px }
.select-selected:after {position: absolute; content: ""; top: 14px; right: 10px; width: 0; height: 0; border: 6px solid transparent; border-color: #3B1B0F transparent transparent }
.select-selected.select-arrow-active:after {border-color: transparent transparent #3B1B0F; top: 7px }
.select-items div, .select-selected {border-color: transparent transparent rgba(0, 0, 0, .1); cursor: pointer; padding: 2px 0; }
.select-items {position: absolute; background-color: #fff; border-bottom: 1px solid #FF5A00; bottom: 100%; left: 0; right: 0; z-index: 999999; font-size: 15px; box-shadow: 0 -3px 16px 0 rgba(0,0,0,.2); border-radius: 10px 10px 0 0 }
.dropdown-content, .sidenav {z-index: 1; position: absolute }
.select-items div:hover {background-image: linear-gradient(to bottom, #91B52F, #83a429); color: #fff; }
.slidecontainer {width: 100% }
.slider {-webkit-appearance: none; width: 100px; height: 34px; background: #fff; outline: 0; margin: 0 8px;border-radius: 3px }
.slider::-webkit-slider-thumb {-webkit-appearance: none; appearance: none; width: 20px; height: 15px; cursor: pointer; transition: all .3s ease }
.slider::-moz-range-thumb {width: 15px; height: 22px; background: #83A429; cursor: pointer; transition: all .3s ease; border-radius: 3px }
.slider::-moz-range-thumb:hover {background: #FF5A00 }
.slider::-webkit-slider-thumb {background: #FF5A00 }
.vue-numeric-input .numeric-input {height: 32px;font-size: 20px !important}
.vue-numeric-input .btn-increment, .vue-numeric-input .btn-decrement {top: 11px !important;height: 26px }
.color-select {cursor: pointer }
input[type=color] {padding: 3px }
.dropdown {position: relative; display: inline-block }
.dropdown-content {background-image: linear-gradient(to bottom, #3B1B0F, #522C1E); width: 171px; box-shadow: 0 8px 16px 0 rgba(0,0,0,.3); top: 6vh; border-top: solid 1px #FF5A00; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; overflow:hidden; }
.dropdown-content div {color: #fff; padding: 3px; text-decoration: none; display: block; transition: all .3s; font-size: 14px; text-align: left; }
.dropdown-content div:hover {background-image: linear-gradient(to bottom, #91B52F, #83a429); }
.inner {padding: 5px 10px; }
.sidenav {height: 76vh; width: 0; top: 0; right: 0; background-color: #3B1B0F; box-shadow: -7px 12px 18px 0 rgba(0,0,0,.3); overflow-x: hidden; padding-top: 15vh; transition: .5s; overflow: hidden; z-index: 1002; }
.sidenav .closebtn {position: absolute; top: 5vh; left: 20px; font-size: 2vw; color: #fff }
@media screen and (max-height:450px) {.sidenav {padding-top: 15px } .sidenav a {font-size: 18px } }
.canvas-icons svg {fill: #fff; cursor: pointer }
.canvas-icons:hover svg {fill: #83A429; transition: all .3s }
.fa-arrow-to-right:hover {color: #FF5A00; transition: all .3s }
.canvas-icons {position: relative; width: 2.3vw; height: 5.5vh; float: left; padding: 10px 0 0 1.5vh }
input[type=range]::-webkit-slider-runnable-track {width: 20px; height: 8%; background: #3B1B0F }
input[type=range]::-webkit-slider-thumb {height: 22px; width: 15px; border-radius: 3px; background: #83A429; margin-top: -10px }
input[type=range]::-webkit-slider-thumb:hover {background: #FF5A00 }
input[type=color] {-webkit-appearance: none; width: 65px; height: 26px; border-radius: 3px}
input[type=color]::-webkit-color-swatch-wrapper {padding: 0 }
input[type=range]::-moz-range-track {background-color: #3B1B0F; height: 3px; }
input[type=range]::-moz-range-thumb {border: none;border-radius: 3px }
.canvas-wrapper {position: relative; height: 62vh; overflow: auto; margin:10px; text-align: center; display: flex; justify-content: center; align-items: center; background: url('../assets/images/chess.png') repeat; border: 1px solid #e5e5e5; border-radius: 10px }
.canvas-container {margin: auto; box-shadow: 0 0 8px 0 rgba(0,0,0,.3); }
#typeOfMaket {margin-bottom: 45px }
.open-icons {width: 8vw }
.right-radius {border-top-right-radius: 10px; border-bottom-right-radius: 10px; }
.canvas-borders {position: absolute; display: flex; pointer-events: none; justify-content: center; align-items: center; }
.canvas-borders__cut {display: flex; border: 1px dashed red; justify-content: center; align-items: center; }
.canvas-borders__text-padding {border: 1px dashed #069ed8; }
.fa-cut {color: red; top: 4.6%; left: 2%; font-size: 1.5rem }
#myTemplates {position: absolute; left: 0; top: 25vh }
#myTemplates div {position: absolute; left:-120px; transition: 0.3s; padding: 10px; width: 150px; text-decoration: none; font-size: 20px; color: white; border-radius: 0 10px 10px 0; text-align: left; padding-left: 15px; background-image:linear-gradient(to bottom, #FF7F00, #FF5A00); box-shadow: 0 5px 10px 0 rgba(0,0,0,.3); cursor: pointer; }
#myTemplates div:hover {left: 0; }
#help {top: 0; }
#templates {top: 60px; }
#qrCode {top: 120px; }
#icons {top: 180px; }
#fill {top: 240px; }
#save {top: 300px;}
.left-fa {position: absolute; right: 15px; top:12px; font-size: 26px; z-index: 1; }
.teplates-wrap {position: fixed; width: 100%; height: 225px; background-color: #fff; top: 75px; left: 0; z-index: 1001; box-shadow: 0 15px 40px 0 rgba(0,0,0,0.15); padding-top:10px; }
.addtmpl::after {content:"Вставить шаблон"; position: absolute; top: 35%; left: 0; right: 0; width: 170px; background: #fff; margin-left: auto; margin-right: auto; padding: 10px; border-radius: 25px; opacity: 0 }
.addtmpl::before {content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; background: #000000; opacity: 0; transition: opacity .3s; }
.addtmpl:hover::after {opacity: 1 }
.addtmpl:hover::before {opacity: 0.2 }
.owl-theme .owl-dots .owl-dot.active span {background: #FF5A00 !important; }
.owl-carousel .owl-item {cursor: pointer; box-shadow: 0 0 6px 0 rgba(0,0,0,.3); margin: 5px 0 }
.fade-templates-enter-active {animation: fadeTemplates .2s linear; }
.fade-templates-leave-active {animation: leaveTemplates .2s linear; }
@keyframes fadeTemplates {from {transform: translateY(10px); opacity: 0; } to {transform: translateY(0); opacity: 1; } }
@keyframes leaveTemplates {from {transform: translateY(0); opacity: 1; } to {transform: translateY(10px); opacity: 0; } }
#qr-code, .colors-wrap {position: absolute; top: 30vh; left: 30vw; z-index: 2; border-radius: 5px; background: #fff; padding:8px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); transition: box-shadow 300ms ease, transform 300ms ease; }
#qr-code:hover, .colors-wrap:hover {box-shadow: 0 12px 18px 0 rgba(0,0,0,0.2); }
#qr-code .row-web, .colors-wrap .row-web{padding: 0; margin-bottom: 5px; cursor: move; height:28px; }
#qr-code input {width: 160px; color:#666; margin: 0 5px; }
#qr-code .dots, .colors-wrap .dots {margin-left: 10px; margin-top: 3px; font-size:15px; }
#qr-code .btnHover {margin: 15px 0 10px; padding: 13px 37px; font-size: 20px }
#qr-code .btnHover {box-shadow: 0 4px 8px 0 rgba(255,90,0,0.5); }
#qr-code .btnHover:hover {box-shadow: 0 8px 16px 0 rgba(255,90,0,0.5); }
.close-qr {position: absolute; right: 16px; font-size: 20px; color: #999; cursor: pointer; transition: color 0.2 linear }
.close-qr:hover {color:#666; }
#qr-code .popupdrag, #colors-modal .popupdrag{visibility: visible; min-width: 200px; background: linear-gradient(to bottom, #ff0000, #db0303); height: 20px; top:-50px; left: 77px; box-shadow: 0 3px 8px 0 rgba(0,0,0,.4);cursor: default; }
#qr-code .popupdrag::after, #colors-modal .popupdrag::after {border-color: #e80707 transparent transparent transparent; }
.dot-close::before {content: "x"; position: absolute; top: 13px; left: 21.5px; cursor: pointer; opacity: 0; transition: opacity .1s linear; font-size: 11px; color: #444 }
.dot-close:hover::before {opacity: 1; }
.maket-round {border-radius: 20px}
.bg-makets {position: absolute; top:0; left: 0; bottom:0; right:0; z-index: 10000; background: url('../assets/images/bg-makets.jpg') no-repeat; background-size: cover; display: flex; justify-content: center; align-items: center; cursor: zoom-out; }
.maket-show {display: inline-flex; align-items: flex-start; box-shadow: 0 15px 18px 0 rgba(0,0,0,.8);}
.maket-show img {width: 20vw; }
.view-enter-active, .view-leave-active {transition: opacity .5s; }
.view-enter, .view-leave-to {opacity: 0; }
#img-view {overflow: hidden; }
.colors-wrap {left: 60vw; }
.colors-wrap .vc-sketch {box-shadow: none; padding: 0 }
#colors-modal .popupdrag {left: 95px !important }
.mobile-off {display: none;}
@media (max-width: 1600px) {
   #typeOfMaket {margin-bottom: 10px }
}
@media (max-width: 1366px) {
   #typeOfMaket {margin-bottom: 0 }
   .canvas-wrapper {height: 59vh}
   .select-selected {height: 15px}
   .slider {height:31px}
   input[type=color] {height: 24px}
   .canvas-icons {padding: 10px 0 0 2vh}
}
@media (max-width: 1200px) {
    .mobile-off {
        display: block;
        background: url('../assets/images/noise.png') repeat;
        background-color: #fafafa;
        height: 90vh;
        z-index: 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding:6vw;
        font-size: 5vw;
    }
    .mobile-off .far {
        font-size: 18vw;
        margin-bottom:4vh;
        color:#555;
    }
    .constructor {display: none}
    .bg-makets {display: none;}
}
</style>