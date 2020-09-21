<template>
	<div class="swipe">
		<div class="indicator">
			<span></span>
			<span></span>
			<span></span>
		</div>
	</div>
</template>

<style lang="scss">
	.swipe {
		position: absolute;
		display: flex;
		justify-content: center;
		width: 100%;
		bottom: 4%;
	    .indicator {
	        position: relative;
	        width: 14px;
	        height: 14px;
	        transform: rotate(45deg);
	        span {
	        	position: absolute;
	        	display: block;
	        	top: 0;
	        	left: 0;
	        	width: 100%;
	        	height: 100%;
	        	box-sizing: border-box;
	        	border: none;
	        	border-right: 2px solid #fff;
	        	border-bottom: 2px solid #fff;
				&:nth-child(1) {
					top: -18px;
					left: -18px;
					animation-delay: 0s;
				}
				&:nth-child(2) {
					top: -9px;
					left: -9px;
					animation-delay: 0.2s;
				}
				&:nth-child(3) {
					top: 0;
					left: 0;
					animation-delay: 0.4s;
				}
				animation: swipeAnimation 1s linear infinite;
	        }
	    }
    }
@keyframes swipeAnimation {
	0% {
		border-color: $orangeColor;
	}
	20% {
		border-color: $orangeColor;
	}
	20.1%, 100% {
		border-color: #fff;
	}
}
</style>