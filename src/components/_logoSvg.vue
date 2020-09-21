<template>
<svg version="1.1" id="citrus-logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 546 179.4" xml:space="preserve">
	<path class="citrus0" d="M66.7,40.6C68,15.9,89.4,2.9,128.3,0C114.4,30.1,96.3,49.7,66.7,40.6z"></path>
	<ellipse transform="matrix(0.7071 -0.7071 0.7071 0.7071 -60.6245 79.964)" class="citrus01" cx="66.2" cy="113.2" rx="66.2" ry="66.2"></ellipse>
	<path class="citrus01" d="M220.8,153.9c-5.3,3.1-13,4.6-23,4.6c-11.7,0-21.2-3.5-28.5-10.7c-7.3-7.1-10.9-16.3-10.9-27.5
	c0-13,3.9-23.2,11.7-30.7c7.8-7.5,18.2-11.2,31.2-11.2c9,0,15.5,1.2,19.5,3.6v20c-4.9-3.7-10.4-5.5-16.5-5.5c-6.8,0-12.1,2-16.1,5.9
	c-3.9,3.9-5.9,9.4-5.9,16.4c0,6.7,1.9,12.1,5.7,15.9c3.8,3.9,9,5.8,15.6,5.8c5.9,0,11.6-1.8,17.2-5.5V153.9L220.8,153.9z
	 M259.8,156.7h-23.5V80.3h23.5V156.7L259.8,156.7z M325.8,155.8c-3.5,1.8-8.7,2.7-15.7,2.7c-16.6,0-24.9-8.6-24.9-25.9v-35h-12.4
	V80.3h12.4V63.8l23.5-6.7v23.2h17.2v17.4h-17.2v30.9c0,7.9,3.2,11.9,9.5,11.9c2.5,0,5.1-0.7,7.7-2.2V155.8L325.8,155.8z M389,101.6
	c-2.9-1.6-6.2-2.3-9.9-2.3c-5.1,0-9.1,1.9-12,5.6c-2.9,3.8-4.3,8.9-4.3,15.3v36.5h-23.5V80.3h23.5v14.2h0.3
	c3.7-10.4,10.4-15.5,20.1-15.5c2.5,0,4.4,0.3,5.8,0.9V101.6L389,101.6z M472.5,156.7H449V145h-0.4c-5.8,9-13.6,13.5-23.3,13.5
	c-17.7,0-26.6-10.7-26.6-32.2V80.3h23.5v44c0,10.8,4.3,16.2,12.8,16.2c4.2,0,7.6-1.5,10.1-4.4c2.5-3,3.8-7,3.8-12V80.3h23.5V156.7
	L472.5,156.7z M487.3,154.7v-19.1c3.9,2.3,7.8,4.1,11.6,5.2c3.8,1.1,7.5,1.7,10.9,1.7c4.2,0,7.5-0.6,9.9-1.7
	c2.4-1.1,3.6-2.9,3.6-5.2c0-1.5-0.5-2.7-1.6-3.7c-1.1-1-2.5-1.9-4.2-2.6c-1.7-0.7-3.6-1.4-5.6-2c-2-0.6-4-1.3-5.9-2
	c-3-1.1-5.7-2.4-8-3.7c-2.3-1.3-4.3-2.9-5.8-4.6c-1.6-1.7-2.7-3.7-3.6-6c-0.8-2.3-1.2-5-1.2-8.1c0-4.3,0.9-8,2.8-11
	c1.9-3.1,4.4-5.6,7.5-7.6c3.1-2,6.7-3.4,10.7-4.3c4-0.9,8.2-1.4,12.5-1.4c3.4,0,6.8,0.3,10.3,0.8c3.5,0.5,6.9,1.3,10.3,2.3v18.2
	c-3-1.8-6.2-3.1-9.6-3.9c-3.4-0.9-6.7-1.3-10-1.3c-1.6,0-3,0.1-4.4,0.4c-1.4,0.3-2.6,0.7-3.6,1.2c-1,0.5-1.9,1.2-2.4,2
	c-0.6,0.8-0.9,1.8-0.9,2.8c0,1.4,0.4,2.6,1.3,3.6c0.9,1,2.1,1.9,3.5,2.6c1.5,0.7,3.1,1.4,4.8,1.9c1.8,0.6,3.5,1.2,5.3,1.8
	c3.1,1.1,6,2.3,8.5,3.6c2.5,1.3,4.7,2.8,6.5,4.6c1.8,1.7,3.2,3.8,4.2,6.1c1,2.3,1.5,5.1,1.5,8.4c0,4.5-1,8.4-3,11.6
	c-2,3.2-4.6,5.8-7.8,7.8c-3.3,2-7,3.5-11.3,4.4c-4.3,0.9-8.7,1.4-13.2,1.4C502.3,158.5,494.5,157.2,487.3,154.7z"></path>
</svg>
</template>

<script>
export default {
mounted() {
	let shineEl = document.querySelector('.mask a');
		setInterval(function() {
			shineEl.classList.add("shine"), 
			setTimeout(function() {
				shineEl.classList.remove("shine")
			}, 1000)
		}, 15000)
  	}
}
</script>
<style type="text/css">
.citrus0{fill-rule:evenodd;clip-rule:evenodd;fill:#83A429;}
.citrus01{fill-rule:evenodd;clip-rule:evenodd;fill:#FF5A00;}
#citrus-logo {
  width: 160px;
  top: 10px;
}
.mask{
  position: absolute;
}
.mask a { 
  display: block;
  background-position: -170px 0;
}
.mask a::after {
  content: '';
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 170px;
  height: 57px;
  background: radial-gradient(0 0, circle farthest-side, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, .8) 98%, rgba(255, 255, 255, 0) 100%) no-repeat;
  background: radial-gradient(circle farthest-side at 0 0, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, .8) 98%, rgba(255, 255, 255, 0) 100%) no-repeat;
  background-position: inherit;
}
.mask a:hover,
.mask a:focus {
  background-position: 30px 0;
  transition: all 1s;
}
.shine {
    background-position: 30px 0 !important;
    transition: all 1s;
}
</style>