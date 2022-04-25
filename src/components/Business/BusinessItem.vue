<template>
	<router-link to="/profile" class="the-business">
		<img class="cover" src="https://picsum.photos/id/133/2742/1828" />
		<div class="introduction">
			<div class="title">
				<div class="certification">品牌</div>
				<div class="name">沙县小吃西南石油大学店</div>
				<ul class="rights">
					<li class="right">保</li>
					<li class="right">准</li>
					<li class="right">票</li>
				</ul>
			</div>
			<div class="evaluation">
				<ul class="stars">
					<li class="star"></li>
					<li class="star"></li>
					<li class="star"></li>
					<li class="star"></li>
					<li class="star"></li>
				</ul>
				<div class="score">4.1</div>
				<div class="sales">月售104件</div>
				<div class="delivery">硅谷专送</div>
			</div>
			<div class="cost">￥20起送/配送费约5元</div>
		</div>
	</router-link>
</template>

<script>
export default {
	name: "TheBusiness",
};
</script>

<style lang="less" scoped>
.the-business {
	display: grid;
	grid-template-columns: 100px 1fr;
	height: 100px;
	padding: 10px;
	border-bottom: 1px solid #efefef;
	.cover {
		width: 100%;
		height: 100%;
	}
	.introduction {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin-left: 10px;
		.title {
			display: grid;
			// 这里不能使用弹性不行自适应，弹性的自适应不是刚性的，无法约束文字增长
			grid-template-columns: 1.8rem auto 3.6rem;
			align-items: center;
			.certification {
				border-radius: 3px;
				background-color: #f7d94e;
				text-align: center;
				font-size: 0.75rem;
			}
			.name {
				overflow: hidden;
				padding: 0 3px;
				font-weight: bold;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.rights {
				display: grid;
				grid-template-columns: repeat(auto-fill, 1.2rem);
				.right {
					justify-self: end;
					font-size: 0.9rem;
					color: #999;
				}
			}
		}
		.evaluation {
			display: flex;
			justify-content: flex-start;
			// 基线对齐
			align-items: baseline;
			// 必须要换行，因为这里所有内容都必须显示，无法用省略号处理
			flex-wrap: wrap;
			.stars {
				align-self: center;
				display: grid;
				grid-template-columns: repeat(5, 1rem);
				grid-template-rows: 1rem;
				margin-right: 10px;
				// 视觉修饰
				transform: translateY(-1px);
				.star {
					background: url(../../assets/image/sprite.png) no-repeat 0 0/320%;
				}
			}
			.score {
				margin-right: 2px;
				color: #ff9900;
				font-size: 1.2rem;
			}
			.sales {
				flex-grow: 1;
				font-size: 0.8rem;
				color: #999;
			}
			.delivery {
				padding: 0 5px;
				border-radius: 0.8rem;
				border: 1px solid @theme-color;
				font-size: 0.8rem;
				color: @theme-color;
			}
		}
		.cost {
			color: #999;
		}
	}
}
</style>
