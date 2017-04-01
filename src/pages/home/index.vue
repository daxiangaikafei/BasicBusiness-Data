<template>
<div class="home_container">
	<div class="home_header">
		  <div class="signed">
		      <header class="signed-title">今日签到用户数</header>
		      <div class="signed-numbers number-flow" lang="singNumbers">
		          <ul class="item">
		              <img src="../../images/six.png"/>
		          </ul>
		          <ul class="item">
		              <img src="../../images/six.png"/>
		          </ul>
		          <ul class="item">
		              <img src="../../images/six.png"/>
		          </ul>
		          <ul class="item">
		              <img src="../../images/six.png"/>
		          </ul>
		          <ul class="item">
		              <img src="../../images/six.png"/>
		          </ul>
		          <ul class="item">
		              <img src="../../images/six.png"/>
		          </ul>
		          <ul class="item">
		              <img src="../../images/six.png"/>
		          </ul>
		      </div>
		  </div>
		  <!-- PC and Mobile signed in proportion -->
		  <div class="proportion">
		      <div class="proportion-mobile  left"></div>
		      <div class="proportion-container">
		          <div class="proportion-percent">
		              <div class="left">63%</div>
		              <div class="right">38%</div>
		          </div>
		          <div class="proportion-bar">
		              <span class="proportion-value" style="width: 63%"></span>
		          </div>
		      </div>
		      <div class="proportion-PC right"></div>
		  </div>
		  <div class="icon">
		      <router-link to="credit">
		          <div class="icon-img"></div>
		          <div class="icon-title">信用评分</div>
		      </router-link>
		      <router-link to="credit">
		          <div class="icon-img"></div>
		          <div class="icon-title">人脉认证</div>
		      </router-link>
		      <router-link to="credit">
		          <div class="icon-img"></div>
		          <div class="icon-title">智能服务</div>
		      </router-link>
		      <router-link to="credit">
		          <div class="icon-img"></div>
		          <div class="icon-title">个人成就</div>
		      </router-link>
		  </div>
	</div>

	<section class="data-user">
		<div class="statistics section">
		    <div class="statistics-header">
		        <div class="statistics-title left" v-on:click="reverseMessage">{{ showMessage }}</div>
		        <div class="statistics-action right"><span class="action-text">展开</span><div class="action-icon action-arrow-down"></div></div>
		    </div>
		    
		    <div class="statistics-simple">
		        <div class="simple-user-info">
		            <div class="simple-avator"><img src="//scdn.qbcdn.com/common/img/cm_header_img_40X40.png"/></div>
		            <div class="simple-nickname">数据助手</div>
		            <div lang="sign-simple" class="simple-check-signed-no" ></div>
		        </div>
		        <div class="simple-task">
		            <div class="simple-text">任务</div>
		            <div class="simple-task-container"><span class="simple-task-value">{{ taskNumber }}</span>次</div>
		        </div>
		        <div class="simple-signed">
		            <div class="simple-text">签到</div>
		            <div class="simple-signed-container"><span class="simple-signed-value">{{ signNumber }}</span>次</div>
		        </div>
		        <div class="simple-shopping">
		            <div class="simple-text">购物</div>
		            <div class="simple-shopping-container"><span class="simple-shopping-value">{{ shopNumber }}</span>元</div>
		        </div>
		    </div>
		</div>
	</section>
	<nav class="promotion-nav">
		<div class="swiper-container promotion-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in itemList">
					<router-link to="item.url">
						<figure>
							<img :src="item.imgUrl">
						</figure>
					</router-link>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</nav>
	<nav class="promotion-nav">
		<div class="swiper-container promotion-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in itemList">
					<router-link to="item.url">
						<figure>
							<img :src="item.imgUrl">
						</figure>
					</router-link>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</nav>
	<nav class="promotion-nav">
		<div class="swiper-container promotion-container">
			<div class="swiper-wrapper">
				<div class="swiper-slide" v-for="item in itemList">
					<router-link to="item.url">
						<figure>
							<img :src="item.imgUrl">
						</figure>
					</router-link>
				</div>
			</div>
			<div class="swiper-pagination"></div>
		</div>
	</nav>
</div>
    
</template>

<script>
import ajax from '../../config/ajax'
import '../../plugins/swiper.min.js'
import '../../style/swiper.min.css'
import ApiControl from '../../config/envConfig.home'
var env = 'debug';// set env type for debug or product
export default {
	name: 'home',
	data () {
		return {
			userId: 100,
			signNumber: 100,
			shopNumber: 23405.6,
			taskNumber: 2000,
      showMessage: '近30日数据简报',
			itemList: []
		}
	},
	created () {
		this.userId = Math.ceil(Math.random() * 100)
	},
	mounted () {
		console.log(ApiControl.getApi(env,"promotion"))
		ajax('GET',ApiControl.getApi(env,"promotion")).
		then(res => {
			this.itemList = res.data;
		}).then(() => {
        	//初始化swiper
        	new Swiper('.swiper-container', {
		        pagination: '.swiper-pagination',
		        loop: true,
		        autoplay:3000
		    });
        })
	},
  methods: {
    reverseMessage: function() {
      this.showMessage = this.showMessage.split('').reverse().join('')
    }
  }
}
</script>

<style lang="less">
	body{
		background: #F5F5F5;
	}
    .home_container{
    	height: 100%;
		overflow: hidden;
		.home_header{
			background-color: #427cf3;
		}
    }
    .title-slide-enter,.title-slide-leave-active{
    	transition: all .3s ease-out;
    }
    section{
    	text-align: center;
    }
    section.data-user{
    	background: #fff;
    }
    .signed{
    padding: 15px;
    .signed-title{text-align: center;color:#fff;font-size: 14px;padding-bottom:16px;}
    .signed-numbers{height: 64px;}
    /* styles for signed numbers*/
    .signed-numbers{text-align:center;}
    .signed-numbers .signed-title{font-size:13px;padding:15px 0;color:white;}
    .signed-numbers .signed-numbers{height:63px;margin:0 8% 0 9%;}
    .signed-numbers ul.item{position:relative;width:13.2%;float:left;height:63px;margin-right:1%;}
    .signed-numbers .signed-numbers ul:nth-last-child{margin-right:0;}
    .signed-numbers ul.item li{z-index:1;position:absolute;left:0;top:0;width:100%;height:100%;}
    .number-flow .item li{height:63px;}
    .signed-numbers ul.item{
      position: relative;
      width:13.2%;
      float: left;
      height: 63px;
      margin-right: 1%;
    }
    .signed-numbers ul.item img{
      width: 100%;
      height: 100%;
    }

  }
  .proportion{
    width: 200px;
    margin: 0 auto;
    height: 30px;
    .proportion-PC{
      max-width: 22px;
      min-width: 22px; 
      height: 18px;
      margin-top: 3px;
      background: url('../../images/pc.png') no-repeat;
      width: 12%;
    }
    .proportion-mobile{
      max-width: 10px;
      min-width: 10px;
      height: 18px;
      margin-top: 3px;
      background: url('../../images/mobile.png') no-repeat;
      width: 5%;
    }
    .proportion-container{
      width: 150px;
      display: inline-block;
      padding: 0 8px;
      padding-right: 0px;
    }
    .proportion-percent{
      height: 15px;
      font-size: 12px;
      div{
      	color: #fff;
      }
    }
    .proportion-bar{
      height: 5px;
      border-radius: 12px;
      box-shadow: 0 0 5px 0px #fff inset;
      background: rgb(89,164,259);
      span{
        width: 0%;
        height: 100%;
        display: block;
        border-radius: 6px;
        background: rgb(159,211,252);
        box-shadow: 0 0 5px 0px #fff inset;
      }
    }

  }
    .icon{
        overflow: hidden;
        position: relative;
        padding: 20px 3%;
        padding-bottom: 0;
        .icon-title{
          font-size: 12px;
          text-align: center;
          color: white;
          line-height: 12px;
        }
        >a{
          width: 22%;
          height: 72px;
          margin-right: 3%;
          float: left;
          .icon-img{
            height: 48px;
            background: url('../../images/tab-icon.png') no-repeat;
            background-size: cover;
          }
        }
        >a:nth-child(1){
          .icon-img{
            background-position: 3% 8%;
          }
          .icon-title{
            padding-right: 10px;
          }
        }
        >a:nth-child(2){
          .icon-img{
            background-position: 33% 8%;
          }
        }
        >a:nth-child(3){
          .icon-img{
            background-position: 68% 7%;
          }
        }
        >a:last-child{
          margin-right: 0;
          .icon-img{
            background-position: 96% 7%;
          }
          .icon-title{
            padding-left: 5px;
          }
        }
      }



      //数据统计区域样式
      .statistics{
        //height: 300px;
        .statistics-header{
          overflow: hidden;
          padding: 10px 20px 20px 20px;
          font-size: 13px;
          .statistics-action{
            .action-icon{
              width: 10px;
              height: 10px;
              display: inline-block;
              border-bottom: solid 1px #CDC9C9;
              border-left: solid 1px #CDC9C9;
              margin-left: 10px;
              transform: rotate(135deg);
              -webkit-transform: rotate(135deg);
              -moz-transform: rotate(135deg);
              margin-bottom: 0;
              vertical-align: middle;
            }
            .action-icon.active-arrow-up{
              margin-bottom: 5px;
            }
            .action-icon.action-arrow-up{
              -webkit-animation-timing-function: ease-out;
              -webkit-animation-duration: 200ms;
              -moz-animation-timing-function: ease-out;
              -moz-animation-duration: 200ms;
              animation-timing-function: ease-out;
              animation-duration: 200ms;
              -webkit-transform: rotate(135deg);
              -moz-transform: rotate(135deg);
              transform: rotate(135deg);
              -webkit-animation-name: arrow-down;
              -moz-animation-name: arrow-down;
              animation-name: arrow-down;

            }
            .action-icon.action-arrow-down{
              -webkit-animation-timing-function: ease-out;
              -webkit-animation-duration: 200ms;
              -moz-animation-timing-function: ease-out;
              -moz-animation-duration: 200ms;
              animation-timing-function: ease-out;
              animation-duration: 200ms;
              -webkit-transform: rotate(-45deg);
              -moz-transform: rotate(-45deg);
              transform: rotate(-45deg);
              -webkit-animation-name: arrow-up;
              -moz-animation-name: arrow-up;
              animation-name: arrow-up;
              margin-bottom: 10px;
            }
          }
        }
        .user-info{
          position: absolute;
          height: 100px;
          width: 100%;
          /* margin: 0 auto; */
          /* top: 0; */
          z-index: 1000;
          margin-top: 60px;
          font-size: 13px;
          text-align: center;
          .avator{
            margin: 0 auto;
            width: 40px;
            height: 40px;
            img{
              width: 100%;
              height: 100%;
              border-radius: 20px;
            }
          }
          .nickname{
            padding-top : 10px;
            padding-bottom: 7px;
            font-size: 13px;
          }
          .check-signed{
            width: 45px;
            height: 15px;
            margin: 0 auto;
            background:url('../../images/signed.png');
            background-size: 45px;
          }

          .check-signed-no{
            width: 45px;
            height: 15px;
            margin: 0 auto;
            background:url('../../images/sign.png');
            background-size: 45px;
          }
        }

        .statistics-simple{
          width: 100%;
          overflow: hidden;
          padding-bottom: 10px;
          //display: none;
          .simple-user-info{
            width: 150px;
            margin: 0 auto;
            padding: 20px 0;
            text-align: center;
            .simple-avator{
              width: 40px;
              height: 40px;
              margin: 0 auto;
              img{
                width: 100%;
                height: 100%;
                border-radius: 20px;
              }
            }
            .simple-nickname{
              font-size: 13px;
              padding: 10px 0;
            }
            .simple-check-signed{
              height:15px;
              background:url('../../images/signed.png');
              width: 45px;
              font-size: 13px;
              margin: 0 auto;
              background-size: 45px;
            }

            .simple-check-signed-no{
              height: 15px;
              background: url('../../images/sign.png');
              width: 45px;
              font-size: 13px;
              margin: 0 auto;
              background-size: 45px;
            }
          }
          .simple-text{
            font-size: 10px;
          }
          .simple-task{
            width: 33%;
            float: left;
            text-align: center;
            font-size: 10px;
            .simple-task-value{
              font-size: 18px;
            }
          }
          .simple-signed{
            width: 33%;
            float: left;
            text-align: center;
            font-size: 10px;
            .simple-signed-value{
              font-size: 18px;
            }
          }
          .simple-shopping{
            width: 33%;
            float: left;
            text-align: center;
            font-size: 10px;
            .simple-shopping-value{
              font-size: 18px;
            }
          }
        }
      }


.promotion-container{
	height: 100px;
    width: 100%;
    border-top: solid 10px #eee;
    img{
    	width: 100%;
    	height: 100%;
    }
    .swiper-pagination{
    	text-align: right;
    }
}




</style>
