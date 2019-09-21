<template>
    <div id="header">
        <div class="textLeft">
            <span class="sysTitle">Front-end developer-Dengyt</span>
        </div>
        <div class="textRight">
            <div class="user">
                <!-- <img style="width:25px;" src="../assets/images/login/admin.png"> -->
                <span style="margin-right:5px">{{name?name:userName}}</span>
                <i class="el-icon-arrow-down"></i>
                <ul class="sysMenu">
                    <li @click="logout" style="text-align:center;width:104px">
                        退出
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'headerAssembly',
    data(){
        return{
            test:1,//页面所有的数据写在这里
            userName:''
        }
    },
    computed: mapState({
        // 箭头函数可使代码更简练
        name: state => state.userInfo.name,
    }),
    methods:{
        //页面所有的方法写在这里
        getData(){

        },
        logout(){
            this.$store.commit('LOGOUT')
            this.$router.push('/login')
        },
        jumpUrlFun(url){
            this.$http("get", "/eva/sso?"+url).then(data => {
                window.location.href = data.url;
            });
        }
    },
    mounted(){
        this.getData();//一定要在这里调用
        this.userName = localStorage.getItem('name');
    }
}
</script>

<style lang="less">
/* 在这里写css样式 */
/* 新建完了这个页面要去添加路由，在src/router.js里面添加，添加方法在readme里面 */
#header{
    height:50px;
    background:#d65268;
    text-align: center;
    line-height: 50px;
    font-size:14px;
    font-family:PingFangSC-Regular;
    font-weight:400;
    color:rgba(255,255,255,1);
    display: flex;
    div{
        flex: 1;
        img{
            width: 32px;
            position: relative;
            top: 10px;
        }
        .sysTitle{
            font-size:16px;
            font-family:PingFangSC-Medium;
            font-weight:500;
            color:rgba(255,255,255,1);
            line-height:22px;
            margin-left: 8px;
        }
    }
    div:nth-child(1){
        flex: 0.8
    }
    .textLeft{
        padding-left: 15px;
        position: relative;
    }
    .textRight{
        span{
            margin: 0 20px 0 5px;
        }
        .el-icon-message{
            display: inline-block;
            position: relative;
        }
        .brige{
            display: inline-block;
            position: absolute;
            width: 5px;
            height: 5px;
            border-radius: 5px;
            background-color: red;
            right: 0.5px;
        }
    }
}
.sysMenu{
    display: none;
    position: absolute;
    background-color:#000; 
    text-align: center;
    z-index:10000;
    li{
        height: 35px;
        line-height: 35px;
        font-size: 13px;
        font-weight: bold;
        white-space:nowrap;
        text-align: left;
        cursor: pointer;
        padding: 0 10px;
        a{
        text-decoration: none;
        color:inherit;
        }
    }
    li:hover{
        background-color: #1e4380
    }
    left: 0;
}
.user{
    display: inline-block;
    padding: 0 10px;
    position: relative;
    min-width: 104px;
    cursor: pointer;
}
.user:hover{
    background-color: #000;
}
.user:hover .sysMenu{
    display: block;
}
ul,li{
    list-style: none;
}
.el-icon-arrow-down {
font-size: 12px;
}
.textLeft{
    text-align: left;
}
.textRight{
    text-align: right;
}

</style>

