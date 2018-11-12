<template>
    <div>
        <header ref="note">
            <div class="marg">
                <div class="header-top">
                    <img src="@/assets/images/left.png" alt="" @click="goBack">
                    <img src="@/assets/images/more.png" alt="" >
                </div>
                <h4>{{musicDetail.title}}</h4>
                <p>{{musicDetail.desc}}</p>
                <div class="header-down">
                    <div class="header-img">
                        <img :src="musicDetail.logo" alt="">
                    </div>
                    <div class="header-author">
                        <p class="author">☞{{musicDetail.author}}☜ 创建</p>
                        <span @click="like" ref="heart"><img src="@/assets/images/unlike.png" alt="" > 3918</span>
                        <span><img src="@/assets/images/word.png" alt="" > 110</span>
                        <span><img src="@/assets/images/share.png" alt=""></span>
                    </div>
                </div>
            </div>
        </header>
        <div class="play">
            <div class="play-left">
                <span class="start">▶ 全部播放</span>
                <span class="num">{{num}}首</span>
            </div>
            <div class="play-right">
                <img src="@/assets/images/download.png" alt="">
                <img src="@/assets/images/checked.png" alt="">
            </div>
        </div>
        <ul>
            <li v-for="music in musicList" :key="music.id">
                <div class="name">
                    <h5>{{music.name}}</h5>
                    <p><span>SQ</span> {{music.singer}}</p>
                </div>
                <div class="des">
                    <span>MV</span>
                    <img src="@/assets/images/moresong.png" alt="">
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            musicDetail:[],
            musicList:[],
            num:0,
        }
    },
    methods:{
        goBack(){
            this.$router.push('/')
        },
        like(){
            this.$refs.heart.innerHTML="<img src='../../src/assets/images/like.png' />"
        }
    },
    mounted(){
        let url1 = API_PROXY + "https://api.bzqll.com/music/tencent/songList?key=579621905&id=" + this.$route.params.musicId + ".json";
        let url2 = '/static/data/musicdetail'
        Axios.get(url1).then((res)=>{
            this.musicDetail = res.data.data;
            let bg = res.data.data.logo;
            this.$refs.note.style.background = "url("+bg+") no-repeat center center";
            this.num = res.data.data.songs.length;
            this.musicList = res.data.data.songs
            console.log(this.musicList)

        }).catch(()=>{
            alert('出错了')
        })
    }
}
</script>

<style scoped>
header{width: 100%;height: 5rem;background-position: center;background-size: 100%;}
.marg{width: 90%;height: 100%;padding:0 5%; background: rgba(0,0,0,0.6);}
.header-top{width: 100%;display: flex;justify-content: space-between;padding-top:0.2rem;}
.header-top img{width: 0.4rem;height: 0.4rem;}
h4{color: #fff;background: #000;margin-top: 0.1rem;font-weight: bold;display: inline-block;padding-right: 0.3rem;}
p{width: 100%;white-space: nowrap;overflow: hidden;text-overflow: ellipsis;color: #fff;background: #000;margin-top:0.1rem;}
.header-down{width: 100%;display: flex;margin-top: 0.5rem;}
.header-img{flex:1 0 0;border-radius: 5px;overflow: hidden;}
.header-author{flex:2 0 0;margin-left: 0.5rem;color: #fff;}
.author{background: none;color: #cccccc;margin-top:0.5rem;}
.header-author span{margin-right: 0.3rem;}
.header-author span img{width: 16px;vertical-align: middle;}
.play{width: 90%;padding:0.3rem 5%;display: flex;justify-content: space-between;}
.play-left .start{display: inline-block;padding: 5px 10px;background: #F5F5F5;border-radius: 5px;color:#D2522F;margin-right: 10px;}
.play-left .num{color: #999;}
.play-right img{width: 30px;margin-top:2px;}
ul{width: 90%;margin:0 5%;border-top:1px solid #F5F5F5;}
ul li{width: 100%;margin:0.3rem 0;display:flex;justify-content: space-between;}
ul li h5{font-weight: bold;line-height: 0.4rem;font-size: 0.35rem;}
ul li p{background: none;color: #999;margin:0;padding: 0;}
ul li p span{display: inline-block;border-radius: 5px;border:1px solid #999;line-height: 0.3rem;padding: 0.04rem;}
ul li .des{padding-top:0.2rem; }
ul li .des span{background: #999;border-radius: 5px;color: #fff;padding: 0.03rem;vertical-align: middle;}
ul li .des img{width: 40%;}
</style>
