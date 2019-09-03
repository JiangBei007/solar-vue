<template>
	<div class="introduce">
		<div class="introduce-card">
			<div class="home-logo">
				<img src="../../public/120.png" class="logo-default"/>
				<img src="../../public/home.png" class="logo-hover"/>
			</div>
			<h2>Rain-Misty</h2>
			<div class="home-text">绝对的轻量可靠</div>
		</div>
	</div>
</template>

<script></script>

<style lang="scss">
.introduce {
	.introduce-card {
		width: 700px;
		max-width: 100%;
		box-shadow: 0 0 5px #f0f3f6;
		color: #34495e;
		.logo-hover{
			display: none;
		}
	}
	.introduce-card:hover {
		box-shadow: 0 0 10px #f0f0f0;
		color: #1989fa;
		.logo-default{
			display: none;
		}
		.logo-hover{
			display: block;
		}
	}
	.home-logo {
		padding: 30px 0;
		display: flex;
		justify-content: center;
		img{
			height: 120px;
			width: 120px;
		}
	}
	h2 {
		margin: 0;
		text-align: center;
		font-size: 36px;
		line-height: 60px;
		border: none;
	}
	h2:hover {
		
	}
	.home-text {
		text-align: center;
		
		font-size: 14px;
		line-height: 26px;
		padding-bottom: 20px;
	}
}
</style>
