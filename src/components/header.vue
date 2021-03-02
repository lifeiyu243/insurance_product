<template>
    <div id="head">
        <img src="~@/assets/img/logo.png" />
        <ul>
            <li>
                <a href="#/company">找企业</a>
            </li>
            <li>
                <a href="javascript:;">找金融产品</a>
            </li>
            <li>
                <a href="javascript:;">资讯</a>
            </li>
            <li>
                <a href="javascript:;">帮助中心</a>
            </li>
            <li>
                <a href="javascript:;">关于我们</a>
            </li>
        </ul>
        <div class="search-box">
            <input type="text" class="search-input" placeholder="请输入企业名称" />
            <a href="javascript:;" class="search-btn"></a>
        </div>
        <div class="login">
            <a href="javascript:;">登录</a>
            <span>/</span>
            <a href="javascript:;">注册</a>
        </div>
    </div>
</template>
<style lang="scss" scoped>
#head{
    height:108px;
    width:100%;
    padding-right:20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width:128px;
        height:68px;
        margin-left:80px;
    }
    ul{
        display:flex;
        height:128px;
        align-items: center;
        margin-left: 20px;
        li{
            a{
                display:block;
                color:#222;
                font-size: 18px;
                padding:0 20px;
            }
        }
    }
    .search-box{
        width:340px;
        height:36px;
        border:1px solid #C5C5C5;
        position: relative;
        .search-input{
            border:none;
            width: 100%;
            height: 34px;
            padding: 0 30px 0 10px;
            &:active,&:focus{
               border:none; 
            }
        }
        .search-btn{
            position:absolute;
            width:42px;
            height:35px;
            right:0;
            top:-1px;
            background:url(~@/assets/img/search.png) #1A66FF center center no-repeat;
        }
    }
}
</style>