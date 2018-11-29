<template>
    <div class="main">
        <div class="title">
            <h4>必听歌单</h4>
            <p>更多 <span>&gt;</span></p>
        </div>
        <ul class="music-list">
            <li v-for="music in musicList" :key="music.id" @click="goListDetail(music.id)">
                <img :src="music.pic" alt="">
                <p>{{music.name}}</p>
            </li>
        </ul>






        <!-- <div class="title">
            <h4>新歌新碟</h4>
            <p>更多 <span>&gt;</span></p>
        </div>
        <ul class="music-album">
            <li v-for="album in albumList" :key="album.id">
                <img src="" alt="">
            </li>
        </ul> -->

        <div class="title">
            <h4>热门MV</h4>
            <p>更多 <span>&gt;</span></p>
        </div>
        <ul class="music-video">
            <li v-for="video in videoList" :key="video.id" >
                <video :src="video.url" controls :poster="video.pic"></video>
                <p class="video-name">{{video.name}}</p>
                <p class="singer">{{video.singer}}</p>
            </li>
        </ul>

        <div class="title">
            <h4>头条·看点</h4>
            <p>更多 <span>&gt;</span></p>
        </div>
        <ul class="find-look">
            <li>
                <div class="look-img">
                    <img src="@/assets/images/find-look01.jpg" alt="">
                    <div class="author">
                        <div class="author-logo">
                            <img src="@/assets/images/look-author01.jpg" alt="">
                        </div>
                        <p>摇滚天堂</p>
                    </div>
                </div>
                <p class="look-title">美国总统大选,当霉霉谈政治的时候她在担心什么</p>
                <p class="read">阅读: 1758</p>
            </li>
            <li>
                <div class="look-img">
                    <img src="@/assets/images/find-look02.jpg" alt="">
                    <div class="author">
                        <div class="author-logo">
                            <img src="@/assets/images/look-author02.jpg" alt="">
                        </div>
                        <p>合唱Chorus</p>
                    </div>
                </div>
                <p class="look-title">出道20年10首歌制霸J-POP,来认领你的女神</p>
                <p class="read">阅读: 1966</p>
            </li>
            <li>
                <div class="look-img">
                    <img src="@/assets/images/find-look03.jpg" alt="">
                    <div class="author">
                        <div class="author-logo">
                            <img src="@/assets/images/look-author03.jpg" alt="">
                        </div>
                        <p>乡下野人</p>
                    </div>
                </div>
                <p class="look-title">也许是thank u,next是A妹封diva的开始</p>
                <p class="read">阅读: 756</p>
            </li>
        </ul>

        <div class="red-bag">
            <img src="@/assets/images/redbag.jpg" alt="">
        </div>

        <div class="title">
            <h4>原创·寻光</h4>
            <p>更多 <span>&gt;</span></p>
        </div>
        <ul class="light">
            <li>
                <img src="@/assets/images/find-light01.jpg" alt="">
                <p class="light-title">[新鲜]坐在房间看日落</p>
                <p class="light-author">我是挖掘机小号</p>
            </li>
            <li>
                <img src="@/assets/images/find-light02.jpg" alt="">
                <p class="light-title">[大牌]只不过一闪念</p>
                <p class="light-author">好歌挖掘机</p>
            </li>
            <li>
                <img src="@/assets/images/find-light03.jpg" alt="">
                <p class="light-title">[寻光少年]-阿图什冲浪男孩</p>
                <p class="light-author">虾米音乐人</p>
            </li>
            <li>
                <img src="@/assets/images/find-light04.jpg" alt="">
                <p class="light-title">[欧美][寻光少年]-WAV</p>
                <p class="light-author">虾米音乐人</p>
            </li>
            <li>
                <img src="@/assets/images/find-light05.jpg" alt="">
                <p class="light-title">[寻光少年]-方拾贰</p>
                <p class="light-author">虾米音乐人</p>
            </li>
        </ul>
        <ul class="light-down">
            <li>
                <img src="@/assets/images/light-down01.jpg" alt="">
                <p class="light-name">卢焱</p>
                <p class="light-tag">#国语流行 Mandarin Pop#</p>
            </li>
            <li>
                <img src="@/assets/images/light-down02.jpg" alt="">
                <p class="light-name">G.G</p>
                <p class="light-tag">#流行说唱 Pop Rap#</p>
            </li>
            <li>
                <img src="@/assets/images/light-down03.jpg" alt="">
                <p class="light-name">徐梦圆</p>
                <p class="light-tag">#日本动漫游戏 Japanese ACG#</p>
            </li>
        </ul>

        <div class="title">
            <h4>趴间·一起听</h4>
            <p>更多 <span>&gt;</span></p>
        </div>
        <ul class="pa">
            <li>
                <img src="@/assets/images/find-pa01.jpg" alt="">
                <p class="pa-tag">#韩国流行 #韩语 #韩语流行</p>
            </li>
            <li>
                <img src="@/assets/images/find-pa02.jpg" alt="">
                <p class="pa-tag">#同人音乐 #日本动漫游戏 #日本动漫音乐</p>
            </li>
            <li>
                <img src="@/assets/images/find-pa03.jpg" alt="">
                <p class="pa-tag">#韩语 #流行舞曲</p>
            </li>
            <li>
                <img src="@/assets/images/find-pa04.jpg" alt="">
                <p class="pa-tag">#节奏布鲁斯 #嘻哈</p>
            </li>
            <li>
                <img src="@/assets/images/find-pa05.jpg" alt="">
                <p class="pa-tag">#国语流行 #华语 #经典歌曲</p>
            </li>
        </ul>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            musicList:[],
            videoList:[],
        }
    },
    methods:{
        dataLoad(){
            let url = './static/data/hotsonglist.json'
            let url2 = './static/data/video.json'
            Axios.get(url).then((res)=>{
                let list = res.data.data;
                this.musicList = list.slice(0,6);
                //console.log(res);
            }).catch(()=>{
                alert('请求失败')
            })

            Axios.get(url2).then((res)=>{
                let list2 = res.data.data
                this.videoList = list2.slice(0,7);
                console.log(list2);
            }).catch(()=>{
                alert('请求失败')
            })
        },
        goListDetail(musicId){
            this.$router.push('/find/musicDetail/'+musicId)
        }
    },
    mounted(){
        this.dataLoad();
    }
}
</script>

<style scoped>
.main{margin-bottom:1rem;}
.title{width: 94%;height: 0.8rem; margin:0 auto;line-height: 0.8rem;}
.title h4{float: left;line-height: 0.8rem;font-weight: bold;}
.title p{float: right;color: #777;}
.music-list{width: 90%;margin:0 auto;display: flex;flex-wrap: wrap;justify-content: space-evenly;}
.music-list li{width: 30%; height: 3rem;}
.music-list li img{width: 100%;}
.music-list li p{width: 100%;font-weight: bold;color: #666;line-height: 0.3rem;margin-top:0.2rem;height: 0.6rem;overflow: hidden;text-overflow:ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}

.music-video{width: 90%;display: flex;flex-wrap: wrap;justify-content: space-between;margin:0 5%;}
.music-video li{width: 45%;}
.music-video li video{width: 100%;border-radius: 5px;}
.music-video li video::-webkit-media-controls-overlay-play-button{width: 100px;}
.music-video li:first-child{width: 100%;}
.video-name{width: 100%;font-weight: bold;color: #666;line-height: 0.3rem;/* height: 0.6rem; */overflow: hidden;text-overflow:ellipsis;display: -webkit-box;-webkit-line-clamp: 3;-webkit-box-orient: vertical;}
.singer{width: 100%;white-space: nowrap;overflow: hidden;text-overflow:ellipsis;margin-bottom:0.1rem;color:#999;font-size: 0.2rem;}

.find-look{width: 90%;display: flex;flex-wrap: wrap;justify-content: space-between;margin:0 5%;}

.find-look li {width: 45%; margin-top:0.4rem;}
.find-look li .look-img{height: 2rem;border-radius: 5px;overflow: hidden;position: relative;}
.find-look li:first-child{width: 100%;height: 4.5rem;margin-top: 0;}
.find-look li:first-child .look-img{width: 100%;height: 3.4rem;}
.author{width: 100%;height: 0.7rem; background: rgba(0,0,0,0.8);position: absolute;bottom: 0;color: #fff;}
.author-logo{width: 0.5rem;height: 0.5rem;border-radius: 0.5rem;overflow: hidden;border:1px solid #fff;position: absolute;top:-0.2rem;left: 0.3rem;}
.look-title{width: 100%;font-weight: bold;margin-top:0.1rem;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;line-height: 0.3rem;}
.read{color: #F94F1F;}
.author-logo img{width: 100%;}
/* .find-look li .author-logo{width: 0.5rem;height: 0.5rem;border-radius: 0.5rem;} */
.find-look li .author p{margin-left: 1.2rem;line-height: 0.7rem;}
.red-bag{width: 90%;margin:0.3rem 5%;}

.light{width: 90%;margin:0 5%;display: flex;flex-wrap: wrap;justify-content: space-between;}
.light li{width: 30%;margin-bottom: 0.3rem;}
.light li:first-child{flex-grow: 2;width: 60%;margin-right: 0.3rem;}
.light-title{width: 100%;font-weight: bold;line-height: 0.4rem;color: #666;}
.light-author{width: 100%;font-size: 0.2rem;color:#999}
.light-down{width: 90%;margin:0 5%;display: flex;justify-content: space-between;}
.light-down li{width: 30%;text-align: center;}
.light-name{width: 100%;font-weight: bold;}
.light-tag{width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 0.2rem;color:#F94F1F;}

.pa{width: 90%;margin:0 5%;display: flex;flex-wrap: wrap;justify-content: space-around;}
.pa li{width: 30%;margin-bottom: 0.2rem;}
.pa li:first-child,.pa li:nth-child(2){width: 45%;}
.pa-tag{width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 0.2rem;color:#999;}

/* footer{width: 100%;position:fixed;} */
</style>
