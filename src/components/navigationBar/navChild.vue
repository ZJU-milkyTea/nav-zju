<template>
    <div>
        <el-row :gutter="10" justify="center">   
            <!-- 列循环 -->
            <el-col :xs="24" :sm="12" :md="12" :lg="8" :xl="8" v-for="idx in namelist.length" :key="idx">
                <div class="container-top" v-if="namelist[idx-1]">
                    <p class="container-p"> {{ namelist[idx-1].title }} </p>
                    <el-row :gutter="5">
                        <!-- 九宫格内部循环 -->
                        <el-col :span="8"  v-for="(item,index) in namelist[idx-1].NavItem" :key="index">
                            <div class="grid-content bg-purple"  @click=clickNavChild(item)>
                                <!-- 是否显示图标， 根据路径是否为空判断 -->
                                <div class= "grid-content-img">
                                    <img  v-if="item.picPath !== ''" :src= "item.picPath" >
                                    <p>{{item.nameNav}}</p>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return{
            ifjump:false,
            namelist:[ 
            {
                id: 1,
                title: '农大 · 常用',
                numberBlock:4,
                NavItem: [
                    //农大相关的图标不要只用一样的
                    {nameNav: '农大官网', jumpPath: 'https://www.fafu.edu.cn', picPath: require('@/assets/ima/fafu_logo.png')},
                    {nameNav: '计信院官网', jumpPath: 'https://xxxy.fafu.edu.cn/', picPath: require('@/assets/ima/fafu_logo.png')},
                    {nameNav: '网络教学平台', jumpPath: 'https://jxpt.fafu.edu.cn', picPath: ''},
                    {nameNav: '教务处', jumpPath: 'https://jwc.fafu.edu.cn', picPath: require('@/assets/ima/fafu_logo.png')},
                    {nameNav: '学生处', jumpPath: 'https://xsc.fafu.edu.cn/', picPath: ''},
                    {nameNav: '财务处', jumpPath: 'https://cwc.fafu.edu.cn/main.htm', picPath: ''},  
                    {nameNav: '图书馆', jumpPath: 'https://lib.fafu.edu.cn/', picPath: ''},
                    {nameNav: '团委', jumpPath: 'https://tw.fafu.edu.cn/', picPath: require('@/assets/ima/tuanwei.png')}, 
                    {nameNav: '邮箱系统', jumpPath: 'https://mail.fafu.edu.cn/', picPath: require('@/assets/ima/mail.png')},
                    {nameNav: '网上办事大厅', jumpPath: 'http://app.fafu.edu.cn/new/index.html', picPath: require('@/assets/ima/banshi.png')}, 
                    {nameNav: '易班', jumpPath: 'https://www.yiban.cn/', picPath: require('@/assets/ima/yiban.png')},
                    {nameNav: '教务管理', jumpPath: 'http://jwgl.fafu.edu.cn/', picPath: require('@/assets/ima/jiaowu.png')},
                   
                ]
            },{
                id: 2,
                title: '学习 · 网站',
                numberLink:5,
                NavItem: [
                    {nameNav: 'CSDN', jumpPath: 'https://www.csdn.net/', picPath: require('@/assets/ima/csdn.png')},
                    {nameNav: '知乎', jumpPath: 'https://www.zhihu.com/explore', picPath: require('@/assets/ima/zhihu.png')},
                    {nameNav: 'MOOC', jumpPath: 'https://www.icourse163.org/', picPath: require('@/assets/ima/MOOC.png')},
                    {nameNav: '网易公开课', jumpPath: 'https://open.163.com/', picPath: require('@/assets/ima/wangyi_course.png')},
                    {nameNav: 'GitHub', jumpPath: 'https://github.com/', picPath: require('@/assets/ima/github.png')},
                    {nameNav: 'gitee', jumpPath: 'https://gitee.com/', picPath: require('@/assets/ima/gitee.png')},
                    {nameNav: '掘金', jumpPath: 'https://juejin.cn/', picPath: require('@/assets/ima/juejin.png')},
                    {nameNav: 'infoQ', jumpPath: 'https://www.infoq.cn/', picPath: require('@/assets/ima/infoQ.webp')},
                    {nameNav: '博客园', jumpPath: 'https://www.cnblogs.com/', picPath: require('@/assets/ima/boke.png')},
                    {nameNav: 'W3school', jumpPath: 'https://www.w3school.com.cn/', picPath: require('@/assets/ima/w3school.png')},
                    {nameNav: '菜鸟教程', jumpPath: 'https://www.runoob.com/', picPath: require('@/assets/ima/cainiao.png')},
                    {nameNav: '简书', jumpPath: 'https://www.jianshu.com/techareas/backend', picPath: require('@/assets/ima/jianshu.png')}, 
                ]
            },{
                id: 3,
                title: '刷题 OJ',
                numberLink:5,
                testNumber:[1,1,2,3],
                NavItem: [
                    {nameNav: 'PAT', jumpPath: 'https://pintia.cn/', picPath: require('@/assets/ima/PAT.png')},
                    {nameNav: '牛客竞赛', jumpPath: 'https://ac.nowcoder.com/acm/contest/vip-index', picPath: require('@/assets/ima/newcoder.png')},
                    {nameNav: 'AcWing', jumpPath: 'https://www.acwing.com/problem/', picPath: require('@/assets/ima/AcWing.png')},
                    {nameNav: '洛谷', jumpPath: 'https://www.luogu.com.cn/problem/list', picPath: require('@/assets/ima/luogu.png')},
                    {nameNav: 'LeetCode', jumpPath: 'https://leetcode-cn.com/', picPath: require('@/assets/ima/leetcode.png')},
                    {nameNav: '蓝桥杯', jumpPath: 'http://lx.lanqiao.cn/', picPath: require('@/assets/ima/lanqiao.png')},
                    {nameNav: 'Codeforce', jumpPath: 'https://codeforces.com/', picPath: require('@/assets/ima/codeforce.png')},
                    {nameNav: 'FAFUOJ', jumpPath: 'https://oj.fafu.edu.cn/#/', picPath: require('@/assets/ima/fafuoj.png')}, 
                    {nameNav: 'VOJ', jumpPath: 'https://vjudge.ppsucxtt.cn/', picPath: require('@/assets/ima/voj.png')},
                    {nameNav: 'POJ', jumpPath: 'http://poj.org/', picPath: require('@/assets/ima/POJ.png')},
                    {nameNav: 'HDU', jumpPath: 'https://acm.hdu.edu.cn/', picPath: require('@/assets/ima/HDU.png')},
                    {nameNav: 'ZOJ', jumpPath: 'https://zoj.pintia.cn/home', picPath: require('@/assets/ima/ZOJ.png')},
                    
                   
                ]
            },{
                id: 4,
                title: '学习 · 资源',
                numberLink:5,
                NavItem: [
                    {nameNav: '知网', jumpPath: 'https://www.cnki.net/', picPath: require('@/assets/ima/zhiwang.png')},
                    {nameNav: 'arxiv', jumpPath: 'https://arxiv.org/', picPath: require('@/assets/ima/arxiv.png')},
                    {nameNav: '文本对比', jumpPath: 'https://index.quantumstat.com/', picPath: require('@/assets/ima/text_compare.png')},
                    {nameNav: '高教书苑', jumpPath: 'https://ebook.hep.com.cn/ebooks/index.html#/', picPath: require('@/assets/ima/shu.png')},
                    {nameNav: 'Sci-hub', jumpPath: 'https://gfsoso.99lb.net/sci-hub.html', picPath: require('@/assets/ima/scihub.png')},
                    {nameNav: '学习强国', jumpPath: 'https://www.xuexi.cn/', picPath: require('@/assets/ima/xuexi.png')},
                    {nameNav: '必应学术', jumpPath: 'https://cn.bing.com/academic', picPath: require('@/assets/ima/biying.png')}, 
                    {nameNav: '百度学术', jumpPath: 'https://xueshu.baidu.com/', picPath: require('@/assets/ima/baidu_search.png')},
                    {nameNav: '维普网', jumpPath: 'http://www.cqvip.com/', picPath: require('@/assets/ima/cqvip.png')},
                    {nameNav: '电子书', jumpPath: 'http://shuxiangjia.cn/', picPath: require('@/assets/ima/ebook.png')},
                    {nameNav: '中公网校', jumpPath: 'http://www.eoffcn.com/', picPath: require('@/assets/ima/gong.png')},
                    {nameNav: 'Linux命令', jumpPath: 'https://man.linuxde.net/', picPath: require('@/assets/ima/linux.png')},
                    // {nameNav: '', jumpPath: '', picPath: require('@/assets/ima/.png')},
                    // {nameNav: '', jumpPath: '', picPath: require('@/assets/ima/.png')},
                    // {nameNav: '', jumpPath: '', picPath: require('@/assets/ima/.png')},
                    // {nameNav: '', jumpPath: '', picPath: require('@/assets/ima/.png')},
                ]
            },{
                id: 5,
                title: '效率 · 工具',
                numberLink:5,
                NavItem: [
                    {nameNav: '百度翻译', jumpPath: 'https://fanyi.baidu.com/?aldtype=16047#auto/zh', picPath: require('@/assets/ima/baidufanyi.png')},
                    {nameNav: 'PDF编辑', jumpPath: 'https://lightpdf.com/zh/', picPath: require('@/assets/ima/pdf_online.png')},
                    {nameNav: '文本对比', jumpPath: 'https://www.jq22.com/textDifference', picPath: require('@/assets/ima/text_compare.png')},
                    {nameNav: 'QQ邮箱', jumpPath: 'https://mail.qq.com/', picPath: require('@/assets/ima/qqMail.png')},
                    {nameNav: '网易邮箱', jumpPath: 'https://mail.163.com/', picPath: require('@/assets/ima/163mail.png')},
                    {nameNav: '百度脑图', jumpPath: 'https://naotu.baidu.com/', picPath: require('@/assets/ima/naotu.png')},
                    {nameNav: '阿里云', jumpPath: 'https://www.aliyun.com/', picPath: require('@/assets/ima/aliyun.png')},
                    {nameNav: '腾讯云', jumpPath: 'https://cloud.tencent.com/', picPath: require('@/assets/ima/tengyun.png')},
                    {nameNav: 'AWS', jumpPath: 'https://aws.amazon.com/cn/', picPath: require('@/assets/ima/aws.png')}, 
                    {nameNav: 'MarkDown', jumpPath: 'https://www.zybuluo.com/mdeditor', picPath: require('@/assets/ima/md.png')},
                    {nameNav: '在线转换', jumpPath: 'https://cn.office-converter.com/', picPath: require('@/assets/ima/tarns.png')},
                    {nameNav: 'UI中国', jumpPath: 'https://www.ui.cn/', picPath: require('@/assets/ima/ui.png')}
                ]
            },{
                id: 6,
                title: '大厂 · 招聘',
                numberLink:5,
                NavItem: [
                    {nameNav: '腾讯', jumpPath: 'https://careers.tencent.com/home.html', picPath: require('@/assets/ima/tengxun.png')},
                    {nameNav: '阿里巴巴', jumpPath: 'https://talent.alibaba.com/', picPath: require('@/assets/ima/ali.png')},
                    {nameNav: '字节跳动', jumpPath: 'https://jobs.bytedance.com/', picPath: require('@/assets/ima/byte.png')},
                    {nameNav: '百度招聘', jumpPath: 'https://talent.baidu.com/external/baidu/index.html', picPath: require('@/assets/ima/baidu_search.png')},
                    {nameNav: 'Google', jumpPath: 'http://careers.google.cn/', picPath: ''},
                    {nameNav: 'Microsoft', jumpPath: 'https://careers.microsoft.com/us/en', picPath: require('@/assets/ima/mic.png')},
                    {nameNav: '网易', jumpPath: 'https://campus.163.com/app/net/position', picPath: require('@/assets/ima/wangyi.png')},
                    {nameNav: '华为', jumpPath: 'https://career.huawei.com/reccampportal/portal5/index.html', picPath: require('@/assets/ima/huawei.png')},
                    {nameNav: '美团招聘', jumpPath: 'https://campus.meituan.com/', picPath: require('@/assets/ima/mei.png')},
                    {nameNav: '牛客', jumpPath: 'https://www.nowcoder.com/', picPath: require('@/assets/ima/newcoder.png')},
                    {nameNav: '脉脉', jumpPath: 'https://maimai.cn/', picPath: require('@/assets/ima/mai.png')},
                    {nameNav: '智联招聘', jumpPath: 'https://www.zhaopin.com/', picPath: require('@/assets/ima/zhilian.png')}
                ]
            },{
                id: 7,
                title: '购物 · 网站',
                numberLink:5,
                NavItem: [
                    {nameNav: '淘宝', jumpPath: 'https://www.taobao.com/', picPath: require('@/assets/ima/tao.png')},
                    {nameNav: '京东', jumpPath: 'https://www.jd.com/', picPath: require('@/assets/ima/jing.png')},
                    {nameNav: '亚马逊', jumpPath: 'https://www.amazon.cn/', picPath: require('@/assets/ima/ama.png')},
                    {nameNav: '苏宁易购', jumpPath: 'https://www.suning.com/', picPath: require('@/assets/ima/suning.png')},
                    {nameNav: '网易严选', jumpPath: 'https://you.163.com/', picPath: require('@/assets/ima/yan.png')},
                    {nameNav: '小米商城', jumpPath: 'https://www.mi.com/', picPath: require('@/assets/ima/mi.png')},
                    {nameNav: '唯品会', jumpPath: 'https://www.vip.com/', picPath: require('@/assets/ima/vip.png')},
                    {nameNav: '拼多多', jumpPath: 'https://youhui.pinduoduo.com/', picPath: require('@/assets/ima/pin.png')},
                    {nameNav: '飞猪旅行', jumpPath: 'https://www.fliggy.com/', picPath: require('@/assets/ima/feizhu.png')},
                    {nameNav: '美团', jumpPath: 'https://www.meituan.com/', picPath: require('@/assets/ima/mei.png')},
                    {nameNav: '12306', jumpPath: 'https://www.12306.cn/index/', picPath: require('@/assets/ima/12306.png')}
                    // {nameNav: '', jumpPath: '', picPath: require('@/assets/ima/.png')},
                    // {nameNav: '', jumpPath: '', picPath: require('@/assets/ima/.png')},
                    // {nameNav: '', jumpPath: '', picPath: require('@/assets/ima/.png')},
                    // {nameNav: '', jumpPath: '', picPath: require('@/assets/ima/.png')},
                ]
            },{
                id: 8,
                title: '影视 · 音乐',
                numberLink:5,
                NavItem: [
                    {nameNav: '优酷', jumpPath: 'https://www.youku.com/', picPath: require('@/assets/ima/youku.png')},
                    {nameNav: '爱奇艺', jumpPath: 'https://www.iqiyi.com/', picPath: require('@/assets/ima/iqiy.png')},
                    {nameNav: '腾讯视频', jumpPath: 'https://v.qq.com/', picPath: require('@/assets/ima/tengx.png')},
                    {nameNav: 'Bilibili', jumpPath: 'https://www.bilibili.com/', picPath: require('@/assets/ima/bili.png')},
                    {nameNav: '芒果TV', jumpPath: 'https://www.mgtv.com/', picPath: require('@/assets/ima/mang.png')},
                    {nameNav: '豆瓣', jumpPath: 'https://www.douban.com/', picPath: require('@/assets/ima/dou.png')},
                    {nameNav: '网易云音乐', jumpPath: 'https://music.163.com/', picPath: require('@/assets/ima/163.png')},
                    {nameNav: 'QQ音乐', jumpPath: 'https://y.qq.com/', picPath: require('@/assets/ima/qq.png')},
                    {nameNav: '虎牙', jumpPath: 'https://www.huya.com/', picPath: require('@/assets/ima/huya.png')}, 
                    {nameNav: '新浪微博', jumpPath: 'https://weibo.com/', picPath: require('@/assets/ima/weibo.png')},
                    {nameNav: 'Youtube', jumpPath: 'https://www.youtube.com/', picPath: require('@/assets/ima/youtube.png')}
                    // {nameNav: '', jumpPath: '', picPath: require('@/assets/ima/.png')},
                    // {nameNav: '', jumpPath: '', picPath: require('@/assets/ima/.png')},
                    // {nameNav: '', jumpPath: '', picPath: require('@/assets/ima/.png')},
                    // {nameNav: '', jumpPath: '', picPath: require('@/assets/ima/.png')},
                ]
            },{
                id: 9,
                title: '其他',
                numberLink:5,
                NavItem: [
                    {nameNav: 'fafucs攻略', jumpPath: 'https://guide.efafucs.com/', picPath: require('@/assets/ima/fafu_logo.png')},
                    {nameNav: 'cs-note', jumpPath: 'https://cyc2018.github.io/CS-Notes/#/', picPath: require('@/assets/ima/fafu_logo.png')},
                    {nameNav: '天空之城', jumpPath: 'https://www.skypixel.com/?site=brandsite&from=nav', picPath: require('@/assets/ima/youtube.png')},
                    {nameNav: '视觉中国', jumpPath: 'https://www.vcg.com/', picPath: ''},
                    {nameNav: 'VR校园全景', jumpPath: 'https://720yun.com/t/qqena9jxz9cjpxj8u9?pano_id=RMWYrRWyZvtGibuD', picPath: ''},
                    {nameNav: 'ifafu', jumpPath: 'https://ifafu.cn/', picPath: ''},
                ]
            }] 
        }
    },
    methods:{
        clickNavChild: function(item){
            this.$emit('childevent',!this.isjump);
            window.open(item.jumpPath);
            //this.isjump=!this.isjump
            //console.log(this.isjump)
        },
        test: function(index){
            console.log("index : " + index);
        }
    },
    props:['message']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* .grid-container{
    margin: 0 auto;
} */

.el-row {
    padding-left: 10px;
    padding-right: 10px;
}

.el-col {
    margin: 0 auto;
    border-radius: 2px;
}

.bg-purple-dark {
    background: #99a9bf;
}

.bg-purple {
    /* background: #d3dce6; */
    background: white;
}

.bg-purple-light {
    background: #e5e9f2;
}

.grid-content {
    margin-bottom: 5px;
    border-radius: 3px;
    min-height: 36px;
    text-align: center;
    color:rgb(128, 128, 128);
    transition: 0.2s linear;    /* hover 蓝色背景动画 0.2s */
}

.grid-content div {
    white-space: nowrap;
    transition: all 0.1s linear;   /*  hover 字体放大动画 0.1s  */
}

.grid-content img{
    max-width: 22px;
    vertical-align: middle; /* 对齐 */
}

.grid-content:hover > div{ /* 设置 hover 在 div 子元素上的作用 */
    transform: scale(1.1);
    font-weight: bold;
}

.grid-content:hover{
    background-color: rgb(69, 157, 245);
    color: white;
    cursor: pointer;
}

.grid-content p {
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin-left: 5px;
    font-size: 15px;
    line-height: 15px;
    display: inline-block; /* 转换为行内元素才可对齐 */ 
}  

.row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
}

.container-top{
    /* width: 30%;
    height: 230px; */
    /* background-color:sandybrown; */
    background-color: rgb(242, 242, 242);
    float: left;
    /* margin-left: 50px;
    margin-top: 50px; */
}
.container-p {
    padding-left: 25px;
    margin-bottom: 12px;
    padding-top: 10px;
    color:rgb(128, 128, 128);
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 18px;
    line-height: 18px;
}

@media only screen and (max-width: 380px) {
    .grid-content p {
        font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        margin-left: 5px;
        font-size: 10px;
        line-height: 10px;
        display: inline-block; /* 转换为行内元素才可对齐 */ 
    }  
}


</style>
