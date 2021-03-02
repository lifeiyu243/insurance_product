<template>
  <div class="moreCompany">
    <div class="company_wraper">
      <el-breadcrumb separator="/" style="margin-bottom:15px;">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>查看结果</el-breadcrumb-item>
      </el-breadcrumb>
      <!-- 第二部分 -->
      <div class="moreLists">
        <div class="filterBox">
          <span class="filterTitle">筛选条件</span>
          <span class="resetTitle">重置筛选</span>
        </div>
        <el-form :inline="true" :model="formInline">
          <el-form-item label="企业类型">
            <el-select v-model="formInline.type" placeholder="请选择" size="small">
              <el-option label="互联网" value="shanghai"></el-option>
              <el-option label="电力" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="融资金额">
            <el-select v-model="formInline.money" placeholder="请选择" size="small">
              <el-option label="1000" value="shanghai"></el-option>
              <el-option label="10000" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="发布时间" size="small">
            <el-date-picker v-model="formInline.time" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-form>
        <h4 class="financing">融资需求列表</h4>
        <ul class="companyLists">
          <li v-for="(item,index) in listData" :key="index">
            <div class="img_box">
              <img src="../assets/img/company/com.png" />
            </div>
            <div class="content_box">
              <div class="content_top">
                <span class="companyName">{{item.name}}</span>
                <span class="focus">
                  <img src="../assets/img/company/xin.png" />
                  关注（0已关注）
                </span>
              </div>
              <div class="content_bottom">
                <div class="details">
                  <span>所在区域：{{item.area}}</span>
                  <span>行业：{{item.subject}}</span>
                  <span>融资事项：{{item.itemL}}</span>
                  <span>融资金额：{{item.money}}</span>
                </div>
                <div class="plublishDate">发布时间：{{item.plublish}}</div>
              </div>
            </div>
          </li>
        </ul>
        <!-- 分页 -->
        <div class="pageCenter">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="5"
            layout="prev, pager, next, jumper"
            :total="50"
          ></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "moreCompany",
  data() {
    return {
      formInline: {
        type: "",
        money: "",
        time: ""
      },
      listData: [
        {
          name: "阿里巴巴科技股份有限公司",
          area: "杭州余杭区",
          subject: "电商",
          itemL: "扩大按产能",
          money: "5000万元",
          plublish: "2021-05-02"
        },
        {
          name: "阿里巴巴科技股份有限公司",
          area: "杭州余杭区",
          subject: "电商",
          itemL: "扩大按产能",
          money: "5000万元",
          plublish: "2021-05-02"
        },
        {
          name: "阿里巴巴科技股份有限公司",
          area: "杭州余杭区",
          subject: "电商",
          itemL: "扩大按产能",
          money: "5000万元",
          plublish: "2021-05-02"
        },
        {
          name: "阿里巴巴科技股份有限公司",
          area: "杭州余杭区",
          subject: "电商",
          itemL: "扩大按产能",
          money: "5000万元",
          plublish: "2021-05-02"
        },
        {
          name: "阿里巴巴科技股份有限公司",
          area: "杭州余杭区",
          subject: "电商",
          itemL: "扩大按产能",
          money: "5000万元",
          plublish: "2021-05-02"
        }
      ],
      currentPage: 2
    };
  },
  methods: {
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>

<style lang="scss" scoped>
.moreCompany {
  width: 100%;
  background: #f2f2f5;
  padding-top: 15px;
  .company_wraper {
    width: 1120px;
    margin: 0 auto;
    .moreLists {
      background: #fff;
      padding: 30px;
      .filterBox {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }
      .filterTitle {
        width: 72px;
        height: 19px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #222222;
        line-height: 28px;
        cursor: pointer;
      }
      .resetTitle {
        width: 56px;
        height: 14px;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #1a66ff;
        line-height: 28px;
        cursor: pointer;
      }
      .financing {
        width: 127px;
        height: 18px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #222222;
        line-height: 28px;
        margin-top: 30px;
      }
      .companyLists {
        width: 100%;
        li {
          width: 100%;
          height: 170px;
          padding: 25px 0;
          border-bottom: 1px solid #e1e1e1;
          display: flex;
          .img_box {
            width: 180px;
            height: 120px;
            margin-right: 18px;
          }
          .content_box {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .content_top {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .companyName {
                font-size: 18px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #222222;
                line-height: 28px;
              }
              .focus {
                display: flex;
                align-items: center;
                font-size: 14px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #8e8e93;
                line-height: 28px;
              }
            }
            .content_bottom {
              width: 100%;
              display: flex;
              justify-content: space-between;
              .details {
                width: 580px;
                font-size: 14px;
                font-weight: 400;
                color: #8e8e93;
                display: flex;
                justify-content: space-between;
              }
              .plublishDate {
                width: 170px;
                font-size: 14px;
                font-weight: 400;
                color: #8e8e93;
                text-align: right;
              }
            }
          }
        }
      }
      .pageCenter {
        display: flex;
        justify-content: center;
        background: #fff;
        padding-top: 30px;
      }
    }
  }
}
</style>