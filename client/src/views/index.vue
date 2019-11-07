/** 首页 */
<template>
  <div class="index">
    <div class="content">
        <Header></Header>
        <div class="item1">
            <div class="left">
                <div class="logo">koorty</div>
            </div>
            <div class="right">
                WORK HARD,PLAY HARD
            </div>
        </div>
        <div class="item2">
            <div class="tabs">
                <div class="active">全部</div>
                <div>HTML</div>
                <div>CSS</div>
                <div>JAVASCRIPT</div>
                <div>框架</div>
                <div>打包构建工具</div>
                <div>其他</div>
            </div>
        </div>
        <div class="item3">
            <div class="item">
                <div class="img"></div>
                <div class="title">图解JavaScript事件循环机制</div>
                <div class="type"><span>JAVASCRIPT</span></div>
                <div class="footer-bar">
                    <div>
                        <i class="el-icon-view"></i><span>232</span>
                        <i class="el-icon-star-off" style="margin-left:1rem"></i><span>122</span>
                    </div>
                    <div class="time">2019-09-09 09:09:09</div>
                </div>
            </div>
            <div class="item">
                <div class="img"></div>
                <div class="title">图解JavaScript事件循环机制</div>
                <div class="type"><span>JAVASCRIPT</span></div>
                <div class="footer-bar">
                    <div>
                        <i class="el-icon-view"></i><span>232</span>
                        <i class="el-icon-star-off" style="margin-left:1rem"></i><span>122</span>
                    </div>
                    <div class="time">2019-09-09 09:09:09</div>
                </div>
            </div>
            <div class="item">
                <div class="img"></div>
                <div class="title">图解JavaScript事件循环机制</div>
                <div class="type"><span>JAVASCRIPT</span></div>
                <div class="footer-bar">
                    <div>
                        <i class="el-icon-view"></i><span>232</span>
                        <i class="el-icon-star-off" style="margin-left:1rem"></i><span>122</span>
                    </div>
                    <div class="time">2019-09-09 09:09:09</div>
                </div>
            </div>
            <div class="item">
                <div class="img"></div>
                <div class="title">图解JavaScript事件循环机制</div>
                <div class="type"><span>JAVASCRIPT</span></div>
                <div class="footer-bar">
                    <div>
                        <i class="el-icon-view"></i><span>232</span>
                        <i class="el-icon-star-off" style="margin-left:1rem"></i><span>122</span>
                    </div>
                    <div class="time">2019-09-09 09:09:09</div>
                </div>
            </div>
            <div class="item">
                <div class="img"></div>
                <div class="title">图解JavaScript事件循环机制</div>
                <div class="type"><span>JAVASCRIPT</span></div>
                <div class="footer-bar">
                    <div>
                        <i class="el-icon-view"></i><span>232</span>
                        <i class="el-icon-star-off" style="margin-left:1rem"></i><span>122</span>
                    </div>
                    <div class="time">2019-09-09 09:09:09</div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/header'
export default {
    components:{Header}
}
</script>

<style lang="less" scoped>
.index{
    background-color: #252525;;
    overflow-y:scroll; 
    overflow-x:hidden; 
    color: #ffffff;
    min-height: 100%;
    .content{
        width: 80%;
        margin: 0 auto;
        max-width: 1400px;
        min-width: 1000px;
        .item1{
            padding-top: 4rem;
            display: flex;
            .left{
                flex:0.5;
                .logo{
                    width: 200px;
                    height: 200px;
                    margin: 0 auto;
                    border-radius: 100px;
                    border: 2px solid #793d47;
                    box-shadow:0px 0px 24px 16px rgba(115, 53, 53, 0.8);;
                    font-size: 4rem;
                    font-weight: bold;
                    line-height: 200px;
                    text-align: center;
                }
            }
            .right{
                flex: 0.8;
                font-size: 3rem;
                font-weight: bold;
                line-height: 200px;
            }
        }
        .item2{
            margin-top: 6rem;
            .tabs{
                display: flex;
                width: 60%;
                margin: 0 auto;
                position: relative;
                left: -5%;
                >div{
                    flex: 1;
                    font-size:1.2rem; 
                    text-align: center;
                    cursor: pointer;
                    line-height: 3rem;
                }
                .active{
                    background-color: #d65268;
                }
                >div:hover{
                    background-color: #793d47;
                }
            }
        }
        .item3{
            margin-top: 5rem;
            margin-bottom: 5rem;
            display: flex;
            flex-wrap:wrap;
            .item{
                margin-bottom: 1rem;
                width: 28%;
                height: 400px;
                background-color: #252525;
                border: 20px solid #252525;
                .img{
                    background: #796363;
                    width: 100%;
                    height: 74%;
                    cursor: pointer;
                }
                .title{
                    font-size: 1.4rem;
                    font-weight: bold;
                    margin-top: 1.5rem;
                }
                .type{
                    margin-top: 0.8rem;
                    font-size: 0.8rem;
                    span{
                        display: inline-block;
                        background-color: #793d47;
                        opacity: 0.8;
                    }
                }
                .footer-bar{
                    margin-top: 0.5rem;
                    display: flex;
                    >div{
                        flex: 1;
                        >i{
                            margin-right: 0.3rem;
                        }
                    }
                    .time{
                        text-align: right;
                    }
                }
            }
        }
    }
}
</style>>
