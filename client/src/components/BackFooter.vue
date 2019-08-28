<template>
    <div id="footer">
        <!-- ©️ 2005-2018 勤智数码科技股份有限公司 蜀 ICP 备 11012966 号 -->
    </div>
</template>

<script>
export default {
    name:'FooterAssembly',
    data(){
        return{
            test:1//页面所有的数据写在这里
        }
    },
    methods:{
        //页面所有的方法写在这里
        getData(){

        }
    },
    mounted(){
        this.getData();//一定要在这里调用
    }
}
</script>

<style>
/* 在这里写css样式 */
/* 新建完了这个页面要去添加路由，在src/router.js里面添加，添加方法在readme里面 */
#footer{
    text-align: center;
    line-height: 60px;
    font-size:13px;
    font-family:MicrosoftYaHei;
    color:rgba(153,153,153,1);
    line-height:17px;
}
</style>

