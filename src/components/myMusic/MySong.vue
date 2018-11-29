<style scoped>
.fl{float: left;}
.fr{float: right;}
header{width: 90%;height: 2rem;text-align: right;margin:0 5%;overflow: hidden;}
header .header-font{width: 76%;margin:0 12%;text-align: center;height: 0.8rem;line-height: 0.8rem;display: none;}
header .header-font p{width: 100%;font-size: 1.2em; float: left;}
header .header-img{float: right;width: 7%;height: 0.8rem;line-height: 0.8rem;}
header .header-img img{width: 100%;vertical-align: middle;}
header h2{margin-top:0.8rem;text-align: left;}
.local-music{width: 94%;height: 1rem; margin:0 3%;line-height: 1rem;}
.name{width: 60%;height: 1rem;line-height: 1rem;}
.name img{width: 0.5rem;vertical-align: -0.05rem;}
.name span{font-size: 1.2em;margin-left: 0.2rem;}
.name span:nth-of-type(2){color:#999;font-size: 1em;}
.pic{width: 40%; height: 1rem;text-align: right;}
.pic img{width: 0.4rem; vertical-align: middle;}
.last-play{width: 94%;height: 1rem; margin:0 3%;line-height: 1rem;}
.last-play .pic img{width: 0.6rem;border-radius: 2px;}
.my-like{width: 94%;height: 1rem; margin:0 3%;line-height: 1rem;}
.my-like .pic img{width: 0.6rem;border-radius: 2px;}
.down-music{width: 94%;height: 1rem; margin:0 3%;line-height: 1rem;}
.down-music .pic{width: 10%;color:#999;}
.buy-music{width: 94%;height: 1rem; margin:0 3%;line-height: 1rem;}
.buy-music .pic{width: 10%;color:#999;}
.create-list{width: 94%;height: 1.2rem;margin:0 3%;border-bottom:1px solid #F2F2F2;border-top:1px solid #F2F2F2;line-height: 1.2rem;}
.create-list h4{padding-left: 2%;}
.create-list .setting{float: right;width: 7%;height: 1.2rem;line-height: 1.2rem;}
.like-list{width: 94%;margin:0 3%;border-bottom:1px solid #F2F2F2;}
.like-title{width: 98%;padding-left: 2%;margin-top:0.4rem;height: 0.8rem;}
.like-title .setting{float: right;width: 7%;height: 0.8rem;margin-top:0.1rem;line-height: normal;}
.setting img{width: 100%;vertical-align: middle;}
.like-songs ul{margin-bottom:1.3rem;}
.like-songs ul li{width: 94%;margin:0 3% 8% 3%;height: 1.7rem;}
.list-left{width: 30%;}
.like-songs ul li img{width: 100%;}
.list-main{margin-left: 3%;width: 60%;}
.list-container{width: 100%;}
.list-container p{font-size: 1.2em;color: #333;font-weight: bold;line-height: 1.2em;height: 1rem;margin-top:0.2rem;overflow: hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}
.list-container span{color: #A4A4A4;}
.list-right{width: 3%;line-height: 1.7rem;height: 1.7rem;font-size: 0.5rem;color: #a3a3a3;font-weight: lighter;}


</style>

<template>
    <div>
        <header>
            <div class="header-img">
                <img src="@/assets/images/moresong.png" alt="">
            </div>
            <div class="header-font"><p>我的音乐</p></div>
            <h2>我的音乐</h2>
        </header>
        <div class="local-music">
            <div class="fl name">
                <img src="@/assets/images/local-music.png" alt="">
                <span>本地歌曲</span>
                <span>78首</span>
            </div>
            <div class="fr pic">
                <img src="@/assets/images/play9.png" alt="">
            </div>
        </div>
        <div class="last-play">
            <div class="fl name">
                <img src="@/assets/images/last-play.png" alt="">
                <span>最近播放</span>
                <span>47首</span>
            </div>
            <div class="fr pic">
                <img src="https://pic.xiami.net/images/artistlogo/63/14966511773763.jpg@1e_1c_100Q_55w_55h" alt="">
                <img src="https://pic.xiami.net/images/artistlogo/81/15344009694381.jpg@1e_1c_100Q_55w_55h" alt="">
                <img src="https://pic.xiami.net/images/artistlogo/88/15095052844788.jpg@1e_1c_100Q_55w_55h" alt="">
            </div>
        </div>
        <div class="my-like">
            <div class="fl name">
                <img src="@/assets/images/my-like.png" alt="">
                <span>我的收藏</span>
                <span>16首</span>
            </div>
            <div class="fr pic">
                <img src="https://pic.xiami.net/images/album/img12/45/5b7521148a820_2253712_1534402836.jpg@1e_1c_100Q_100w_100h" alt="">
                <img src="https://pic.xiami.net/images/album/img60/26/5bd94e7d01355_1318960_1540968061.jpg@1e_1c_100Q_100w_100h" alt="">
                <img src="https://pic.xiami.net/images/album/img58/57/5bb85807af9c0_2878658_1538807815.jpg@1e_1c_100Q_100w_100h" alt="">
            </div>
        </div>
        <div class="down-music">
            <div class="fl name">
                <img src="@/assets/images/down-music.png" alt="">
                <span>离线音乐包</span>
                <span>免流量</span>
            </div>
            <div class="fr pic">
                &gt;
            </div>
        </div>
        <div class="buy-music">
            <div class="fl name">
                <img src="@/assets/images/buy-music.png" alt="">
                <span>已购音乐</span>
            </div>
            <div class="fr pic">
                &gt;
            </div>
        </div>
        <div class="create-list">
            <h4 class="fl">创建的歌单 0</h4>
            <div class="setting">
                <img src="@/assets/images/moresong.png" alt="">
            </div>
        </div>
        <div class="like-list">
            <div class="like-title">
                <h4 class="fl">收藏的歌单 {{likeList.length}}</h4>
                <div class="setting">
                    <img src="@/assets/images/moresong.png" alt="">
                </div>
            </div>
            <div class="like-songs">
                <ul>
                    <li v-for="like in likeList" :key="like.id">
                        <div class="list-left fl">
                            <img :src="like.coverImgUrl" alt="">
                        </div>
                        <div class="list-main fl">
                            <div class="list-container">
                                <p>{{like.title}}</p>
                                <span>{{like.songNum}}首,</span>
                                <span>by {{like.creator}}</span>
                            </div>
                        </div>
                        <div class="list-right fr">
                            <span>&gt;</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            likeList:[],
            
        }
    },
    methods:{
        dataLoad(){
            let url = API_PROXY + 'https://api.bzqll.com/music/netease/highQualitySongList?key=579621905&cat=%E5%85%A8%E9%83%A8&limit=100'
            Axios.get(url).then((res)=>{
                let list = res.data.data.playlists
                this.likeList = list.slice(0,2)
                console.log(this.likeList)
            }).catch()
        }
    },
    mounted(){
        this.dataLoad()
    }
    
}
</script>
