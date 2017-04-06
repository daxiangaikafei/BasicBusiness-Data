<template>
	<section>
		<div class="upgrade-header">
		  <div class="uh-content">
		    <div>
		      <div class="uh-score-t">信用良好</div>
		      <div class="uh-score">{{ nowScore }}</div>
		    </div>
		    <div class="uh-next-text">
		      <div style="text-align:center;">下一级</div>
		      <div class="uh-next-arrow">
		        <i class="icon icon-flickr" style="font-size:15px;"></i>
		        <i class="icon icon-flickr" style="font-size:15px;"></i>
		        <i class="icon icon-flickr" style="font-size:15px;"></i>
		        <i class="icon icon-play3" style="margin-right: -5px;font-size:15px;"></i>
		      </div>
		    </div>

		    <div>
		      <div class="uh-score-t">信用优秀</div>
		      <div class="uh-score">{{ nextScore }}</div>
		    </div>
		  </div>
		  <p class="uh-tip">
		    友情提示：坚持加分日常，完成增信业务，将提高您的评分。
		  </p>
		</div>

		<div class="upgrade-list upgrade-day">
		  <div class="ul-title">加分日常</div>
		  <div class="ul-content">
		    <ul>
		      <li><i class="icon icon-light"></i>按时缴纳水、电、煤气等生活费用</li>
		      <li><i class="icon icon-light"></i>多结交一些信用好的朋友</li>
		      <li><i class="icon icon-light"></i>每日签到，做任务，还有...购物有度</li>
		    </ul>
		  </div>
		</div>
		<div class="upgrade-list upgrade-task">
		  <div class="ul-title"> 增信任务</div>
		  <div class="ul-content">
		    <ul>
		      <li class="ul-refs" data-refs="../personal/page.html">
		        <div class="ul-item-left"><i class="icon"><img style="height: 50%;width:50%;" src="../static/images/credit/creditIndex/gerenxinxi.png"></i></div>
		        <div class="ul-item-right">完善个人信息<i class="icon-arrow icon icon-circle-right"></i></div>
		      </li>
		      <li class="ul-refs" data-refs="../school/page.html">
		        <div class="ul-item-left"><i class="icon"><img src="../static/images/credit/creditIndex/xueli.png"></i></div>
		        <div class="ul-item-right">提交学历学籍<i class="icon-arrow icon icon-circle-right"></i></div>
		      </li>
		      <li class="ul-refs" data-refs="../creditEmail/page.html">
		        <div class="ul-item-left"><i class="icon"><img style="height: 38%;width:50%;" src="../static/images/credit/creditIndex/mail.png"></i></div>
		        <div class="ul-item-right">绑定单位邮箱<i class="icon-arrow icon icon-circle-right"></i></div>
		      </li>
		      <li class="ul-refs" data-refs="../addcar/page.html">
		        <div class="ul-item-left"><i class="icon"><img src="../static/images/credit/creditIndex/car-logo.png"></i></div>
		        <div class="ul-item-right">录入车辆信息<i class="icon-arrow icon icon-circle-right"></i></div>
		      </li>
		      <li class="ul-refs" data-refs="../editlike/page.html">
		        <div class="ul-item-left"><i class="icon"><img style="height: 40%;width:50%;" src="../static/images/credit/creditIndex/like.png"></i></div>
		        <div class="ul-item-right">定制兴趣爱好<i class="icon-arrow icon icon-circle-right"></i></div>
		      </li>
		    </ul>
		  </div>
		</div>
		<div class="upgrade-footer">
		  <p>添加个人信息，让信用评分为你更全面的评估</p>
		</div>

</section>
</template>

<script>
	import ajax from '../config/ajax'
	export default{
		data () {
			return {
				nowScore: 500,
				nextScore: 900,
				flag: 0
			}
		},
		created: function () {
			ajax('GET','/mock/nextScore.json').
			then(res => {
				this.nowScore = res.data[0].score
				this.nextScore = res.data[1].score
			})
		},
		methods: {
		  	getScore: function (){
		  		if(this.flag == 0){
		  			ajax('GET','/mock/newScore.json').
		  			then(res => {
		  				this.nowScore = res.data[0].score
		  				this.nextScore = res.data[1].score
		  				this.flag = 1
		  			})
		  		}else{
		  			ajax('GET','/mock/nextScore.json').
		  		then(res => {
		  			this.nowScore = res.data[0].score
		  			this.nextScore = res.data[1].score
		  			this.flag = 0
		  		})
		  		}
		  		
			}
		}
	}
</script>

<style lang="less">
@import '../static/style/icon-style.css';
@big:   ~"only screen and (min-width: 376px)";
@small:    ~"only screen and (max-width: 340px)";
@middle:    ~"only screen and (min-width: 341px) and (max-width: 375px)";

@font-face {
  font-family: dbold;
  src: url('../static/style/font/default/default-bold.ttf');
}

@media @big {
  .upgrade-header {
    background-color: #3d85f5;
    color: rgb(218,235,250);
    padding: 20px 0;
    height: 130px;
    .uh-content {
      text-align: center;
      margin: 0;
      .uh-score-t {
        font-size: 14px;
        color: rgb(218,235,250);
      }
      .uh-score {
        font-size: 69px;
        font-family: dbold;
        color: rgb(218,235,250);
      }
      > div {
        display: inline-block;
        margin-right: 10px;
      }
    }
    .uh-tip {
      text-align: center;
      font-size: 12px;
      color: rgb(218,235,250);
    }
    .uh-next-text{
      padding-top: 50px;
      div{
      	color: rgb(218,235,250);
      }
    }
    .uh-next-arrow .icon{
      	color: rgb(218,235,250);
    }
  }
}
@media @small {
  .upgrade-header {
    background-color: #3d85f5;
    color: rgb(218,235,250);
    padding: 20px 0;
    .uh-content {
      text-align: center;
      margin: 0;
      .uh-score-t {
        font-size: 14px;
        color: rgb(218,235,250);
      }
      .uh-score {
        font-size: 50px;
        font-family: dbold;
        color: rgb(218,235,250);
      }
      > div {
        display: inline-block;
        margin-right: 10px;
      }
    }
    .uh-tip {
      text-align: center;
      font-size: 12px;
      padding-top: 15px;
      color: rgb(218,235,250);
    }
    .uh-next-text{
      padding-top: 40px;
      div{
      	color: rgb(218,235,250);
      }
    }
    .uh-next-arrow .icon{
      	color: rgb(218,235,250);
    }

  }
}

@media @middle {
  .upgrade-header {
    background-color: #3d85f5;
    color: rgb(218,235,250);
    padding: 20px 0;
    .uh-content {
      text-align: center;
      margin: 0;
      .uh-score-t {
        font-size: 14px;
        color: rgb(218,235,250);
      }
      .uh-score {
        font-size: 55px;
        font-family: dbold;
        color: rgb(218,235,250);
      }
      > div {
        display: inline-block;
        margin-right: 10px;
        color: rgb(218,235,250);
      }
    }
    .uh-tip {
      text-align: center;
      font-size: 12px;
      padding-top: 15px;
      color: rgb(218,235,250);
    }
    .uh-next-text{
      padding-top: 40px;
      color: rgb(218,235,250);
      div{
      	color: rgb(218,235,250);
      }
    }
    .uh-next-arrow .icon{
      	color: rgb(218,235,250);
    }
  }
}
.uh-next-text{
    font-size: 9px;
    width: 65px;
    vertical-align: top;
    color: rgb(218,235,250);
 }

.upgrade-header{
  height: 170px;
  color: #daebfa;
}
.upgrade-list{
  min-height: 50px;
  .ul-title{
    background: #f1f1f6;
    color: #9a9dab;
    padding: 10px 0 10px 10px;
  }
  .ul-content{
    margin: 10px 15px;
    line-height: 28px;
    .icon{
      color: #3270f2;
      margin-right: 10px;
    }

  }
}
.upgrade-day{
  color: #9a9dab;
}
.upgrade-task{
  .ul-content{
    margin:0 0 0 15px;
    line-height: 24px;
    .icon{
      color: #3270f2;
      margin-right: 10px;
    }
    ul{
      li{
        overflow: hidden;
        .ul-item-left{
          float: left;
          margin-top: 19px;

          .icon{
            color: #fff;
            width: 30px;
            height: 30px;
            display: block;
            background: -webkit-linear-gradient(top right, #00afff, #0080ff);
            border-radius: 50%;
            overflow:hidden;
            img{
              width: 60%;
              height: 60%;
              text-align: center;
              padding-left: 7px;
              padding-top: 3px;

            }
          }
          .icon::before{
            display: block;
            margin-top: 8px;
            margin-left: 8px;
          }
        }

        .ul-item-right{
          float: right;
          padding: 20px 0;
          width: 85%;
          overflow: hidden;
          border-bottom: 1px solid #cacbd2;
          .icon-arrow{
            line-height: 25px;
            font-size: 20px;
            float: right;
            margin-right: 15px;
            color: #b4b7c1;
          }
        }
      }
    }
  }
}
.upgrade-footer{
  background: #f1f1f6;
  color: #9a9dab;
  p{
    padding: 20px 0;
    text-align: center;
    font-size: 12px;
  }
}
icon{
	color: rgb(218,235,250);
}
@media (min-width: 320px){
  .uh-tip{
	color: rgb(218,235,250);
    // font-size: 10px!important;
    // -webkit-transform:scale(0.8);
  }
}

</style>