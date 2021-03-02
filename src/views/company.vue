<template>
  <div class="company">
    <div class="company_wraper">
      <div class="bannerBox">
        <div class="banner">
          <img src="../assets/img/company/banner.png" alt srcset />
        </div>
        <div class="company_newsBox">
          <div class="company_news">
            <div class="newsTitle">
              <h2>企业动态</h2>
              <span class="newsdate">2021-02-08</span>
            </div>
            <ul class="newslist">
              <li>
                <i>1</i>
                <span>XXX企业完成注册认证</span>
              </li>
              <li>
                <i>2</i>
                <span>XXX企业成功发布融资需求</span>
              </li>
              <li>
                <i>3</i>
                <span>XXX企业完成注册认证</span>
              </li>
              <li>
                <i>4</i>
                <span>XXX企业成功获得XX银行融资</span>
              </li>
              <li>
                <i>5</i>
                <span>XXX企业成功获得XX银行融资</span>
              </li>
            </ul>
          </div>
          <button class="findCompany">立即查找企业</button>
        </div>
      </div>
      <!-- 第二部分 -->
      <div class="modal_box">
        <div class="modal_item">
          <img src="../assets/img/company/icon1.png" alt srcset />
          <div class="modal_info">
            <h2>752,100</h2>
            <h4>注册企业数</h4>
          </div>
        </div>
        <div class="modal_item">
          <img src="../assets/img/company/icon2.png" alt srcset />
          <div class="modal_info">
            <h2>746,323</h2>
            <h4>认证企业数</h4>
          </div>
        </div>
        <div class="modal_item">
          <img src="../assets/img/company/icon3.png" alt srcset />
          <div class="modal_info">
            <h2>4,275</h2>
            <h4>获得融资企业数</h4>
          </div>
        </div>
      </div>
      <!-- 第三部分 -->
      <div class="list_box">
        <div class="list_title">
          <p>企业融资需求精选</p>
          <div class="line"></div>
          <span class="scanmore" @click="scanmore">查看更多</span>
        </div>
        <ul class="lists">
          <li v-for="(item,index) in list" :key='index'>
            <p>{{item.company}}</p>
            <div class="item_info">
              发布时间：
              <span class="item_infoC">{{item.date}}</span>
            </div>
            <div class="item_info">
              融资事项：
              <span class="item_infoC">{{item.reason}}</span>
            </div>
            <div class="item_info">
              融资金额：
              <span class="item_infoC">{{item.money}}</span>
            </div>
            <div class="item_info">
              所在区域：
              <span class="item_infoC">{{item.area}}</span>
            </div>
            <div class="icon_info">
              <span>
                <img src="../assets/img/company/eyes.png" />{{item.scans}}
              </span>
              <span>
                <img src="../assets/img/company/heart.png" />{{item.hearts}}
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import NUM from '../util/format.js'
export default {
  name: "company",
  data() {
    return {
      list: [{
          company:"XXX有限公司 融资需求",
          date:'2020-02-24',
          reason:'',
          money:'56745',
          area:'北京',
          scans:'34354',
          hearts:'454'
      },{
          company:"XXX有限公司 融资需求",
          date:'2020-02-24',
          reason:'',
          money:'56745',
          area:'北京',
          scans:NUM.formatNumber(34354,0),
          hearts:'454'
      },{
          company:"XXX有限公司 融资需求",
          date:'2020-02-24',
          reason:'',
          money:'56745',
          area:'北京',
          scans:'34354',
          hearts:'454'
      },{
          company:"XXX有限公司 融资需求",
          date:'2020-02-24',
          reason:'',
          money:'56745',
          area:'北京',
          scans:'34354',
          hearts:'454'
      },{
          company:"XXX有限公司 融资需求",
          date:'2020-02-24',
          reason:'',
          money:'56745',
          area:'北京',
          scans:'34354',
          hearts:'454'
      },{
          company:"XXX有限公司 融资需求",
          date:'2020-02-24',
          reason:'',
          money:'56745',
          area:'北京',
          scans:'34354',
          hearts:'454'
      },{
          company:"XXX有限公司 融资需求",
          date:'2020-02-24',
          reason:'',
          money:'56745',
          area:'北京',
          scans:'34354',
          hearts:'454'
      },{
          company:"XXX有限公司 融资需求",
          date:'2020-02-24',
          reason:'',
          money:'56745',
          area:'北京',
          scans:'34354',
          hearts:'454'
      },{
          company:"XXX有限公司 融资需求",
          date:'2020-02-24',
          reason:'',
          money:'56745',
          area:'北京',
          scans:'34354',
          hearts:'454'
      },{
          company:"XXX有限公司 融资需求",
          date:'2020-02-24',
          reason:'',
          money:'56745',
          area:'北京',
          scans:'34354',
          hearts:'454'
      }]
    };
  },
  mounted(){
      console.log(NUM.formatNumber(34354))
  },
  methods: {
    scanmore() {
      this.$router.push({path:'/moreCompany'})
    }
  }
};
</script>

<style lang="scss" scoped>
.company {
  width: 100%;
  background: #f2f2f5;
  padding-top: 20px;
  .company_wraper {
    width: 1120px;
    margin: 0 auto;
    .bannerBox {
      width: 100%;
      height: 400px;
      display: flex;
      justify-content: space-between;
      .banner {
        width: 820px;
        height: 100%;
      }
      .company_newsBox {
        width: 288px;
        height: 100%;
      }
      .company_news {
        padding: 25px 20px;
        width: 288px;
        height: 332px;
        background: url("../assets/img/company/bg4.png");
      }
      .findCompany {
        width: 287px;
        height: 48px;
        background: #1a66ff;
        line-height: 48px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #ffffff;
        outline: none;
        border-radius: 4px;
        border: none;
        margin-top: 20px;
        cursor: pointer;
      }
      .newsTitle {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
        h2 {
          width: 96px;
          height: 25px;
          font-size: 24px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #222222;
          line-height: 30px;
        }
        .newsdate {
          height: 12px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #8e8e93;
          line-height: 44px;
        }
      }
      .newslist {
        li {
          height: 44px;
          padding: 5px 0;
          i {
            font-style: normal;
            width: 24px;
            height: 24px;
            border-radius: 50%;
            display: inline-block;
            text-align: center;
            line-height: center;
            background: #bfc7d7;
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #ffffff;
          }
          span {
            font-size: 14px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #222222;
            line-height: 32px;
          }
        }
      }
    }
    .modal_box {
      margin: 20px 0;
      display: flex;
      justify-content: space-between;
      .modal_item {
        width: 360px;
        height: 150px;
        padding: 38px 42px;
        display: flex;
        color: #ffffff;
        img {
          margin-right: 20px;
        }
        .modal_info {
          h2 {
            font-size: 30px;
          }
          h4 {
            font-size: 14px;
            margin-top: 4px;
          }
        }
      }
      .modal_item:nth-child(1) {
        background: url("../assets/img/company/bg1.png") no-repeat;
      }
      .modal_item:nth-child(2) {
        background: url("../assets/img/company/bg2.png") no-repeat;
      }
      .modal_item:nth-child(3) {
        background: url("../assets/img/company/bg3.png") no-repeat;
      }
    }
    .list_title {
      padding: 30px;
      position: relative;
      p {
        font-size: 24px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #222222;
        line-height: 28px;
        text-align: center;
      }
      .line {
        width: 48px;
        border: 1px solid #1a66ff;
        height: 0;
        margin: 10px auto;
      }
      .scanmore {
        cursor: pointer;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #4a4a4a;
        line-height: 28px;
        position: absolute;
        bottom: 30px;
        right: 0;
      }
    }
    .lists {
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      li {
          cursor: pointer;
        width: 200px;
        height: 260px;
        padding: 20px;
        background: #fff;
        margin-bottom: 20px;
        p {
          width: 110px;
          text-align: center;
          height: 35px;
          font-size: 16px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #222222;
          margin: 10px auto 20px;
        }
        .item_info {
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #8e8e93;
          line-height: 30px;
          .item_infoC{
             color: #555; 
          }
        }
        .icon_info {
          margin-top: 20px;
          font-size: 14px;
          font-family: Microsoft YaHei;
          font-weight: 400;
          color: #8590a6;
          display: flex;
          justify-content: space-between;
          span{
              display: flex;
              align-items: center;
          }
        }
      }
    }
  }
}
</style>