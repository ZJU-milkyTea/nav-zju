<template>
    <div class="search-root">
        <!-- 添加搜索引擎对应图标 -->
		<el-input id = "search-input" placeholder="请输入内容" v-model="input" class="input-with-select" @keydown.enter.native="clickSearch()" ref="searchInput">	
            <el-popover placement="bottom-start" slot="prepend" v-model="visible" trigger="hover">
                <p> 搜索引擎: </p>
                <el-row :gutter="10">
                    <el-col :span="6" v-for="(item, index) in urlData" :key="index"> 
                        <div class="hover-card">
                            <div @click="selectEngine(index)">
                                <img :src="item.picpath">
                                <p>{{ item.title }}</p>
                            </div>
                        </div> 
                    </el-col>
                </el-row>
                <el-image
                    style="width: 30px; height: 30px;  vertical-align: middle; cursor: pointer;"
                    :src="urlData[select].picpath"
                    fit="cover" 
                    slot="reference">
                </el-image>
            </el-popover>
            <el-button slot="append" icon="el-icon-search" @click="clickSearch()">
            </el-button>
        </el-input>
	</div>
</template>



<script>
export default {
    data: function(){
        return{
            isjump: false,
            visible: false,
            input: '',
            select: '0',
            urlData:[{
                title:'百度',
                url: 'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd=',
                picpath: require('@/assets/ima/baidu_search.png')
            },{
                title:'Google',
                url: 'https://www.google.com/search?q=',
                picpath: require('@/assets/ima/google_search.png')
            },{
                title:'Bilibili',
                url: 'https://search.bilibili.com/all?keyword=',
                picpath: require('@/assets/ima/bilibili.png')
            },{
                title:'知乎',
                url: 'https://www.zhihu.com/search?q=',
                picpath: require('@/assets/ima/zhihu.png')
            },{
                title:'Github',
                url: 'https://github.com/search?q=',
                picpath: require('@/assets/ima/github.png')
            },{
                title:'Bing',
                url: 'https://cn.bing.com/search?q=',
                picpath: require('@/assets/ima/bing.png')
            },{
                title:'有道',
                url: 'https://www.youdao.com/w/eng/',
                picpath: require('@/assets/ima/youdao.png')
            }]
        }
    },
    methods:{
        clickSearch: function(){
            window.open(this.urlData[this.select].url + this.input);
        },

        selectEngine: function(index) {
            this.select = index;
            this.visible = false;   //  点击后关闭提示弹窗
        }
    },
    created() {
      this.$bus.$on('aevent', (val) => {
        console.log(val);
        this.$nextTick(() => {
            this.$refs.searchInput.focus()
        })
      })
    },
    beforeDestroy() {
      this.$bus.$off('aevent');
    },
    mounted(){
        this.$nextTick(() => {
            this.$refs.searchInput.focus()
            
        })
    },
    showAdd(){
        this.$nextTick(() => {
            this.$refs.searchInput.focus()
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.search-root{
	margin: 0 auto;
	margin-top: 40px;
    margin-bottom: 20px;
}

.el-popover p{
    font-weight: bold;
}

.input-with-select .el-input-group__prepend {
    background-color: #fff;
}

/deep/ .el-input__inner {
    height: 50px;
    font-size: 18px;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}

.hover-card img{
    max-width: 22px;
    vertical-align: middle; /* 对齐 */
}

.hover-card {
    margin-bottom: 10px;
    border-radius: 3px;
    min-height: 36px;
    text-align: center;
    color:rgb(128, 128, 128);
}

.hover-card div {
    background-color: rgb(242, 242, 242);
    border-radius: 3px;
    cursor: pointer;
}

.hover-card p{
    // line-height: 30px;
    // width: 60px;
    // background-color: aqua;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-left: 5px;
    font-size: 15px;
    line-height: 15px;
    display: inline-block; /* 转换为行内元素才可对齐 */ 
}

/deep/ .el-input-group__prepend {
    padding-left: 13px;
    padding-right: 13px;
    width: 10px;
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}

/deep/ .el-input-group__append {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    background-color: #fff;
    line-height: 20px;
    font-size: 20px;
    color: #409EFF;
    transition: 0.3s;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}

/deep/ .el-input-group__append:hover {
    background-color: #409EFF;
    color: #fff;
}

@media only screen and (min-width: 1440px) {
    .search-root {
        width: 30%;
    }
}


@media only screen and (min-width: 1080px) and (max-width: 1440px)  {
    .search-root {
        width: 60%;
    }
}

@media only screen and (min-width: 100px) and (max-width: 1080px) {
    .search-root {
        width: 90%;
    }
}

</style>
