<template>
    <div>
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
            <li v-for="video in videoList" :key="video.id">
                <video :src="video.url" controls></video>
                
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
            let url = '/static/data/hotsonglist.json'
            let url2 = '/static/data/video.json'
            Axios.get(url).then((res)=>{
                let list = res.data.data;
                this.musicList = list.slice(0,6);
                console.log(list);
            }).catch(()=>{
                alert('请求失败')
            })

            Axios.get(url2).then((res)=>{
                let list = res.data.data
                this.videoList = list.slice(0,7);
                //console.log(list);
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
.title{width: 94%;height: 0.8rem; margin:0 auto;line-height: 0.8rem;}
.title h4{float: left;line-height: 0.8rem;font-weight: bold;}
.title p{float: right;color: #777;}
.music-list{width: 90%;margin:0 auto;display: flex;flex-wrap: wrap;justify-content: space-evenly;}
.music-list li{width: 30%; height: 3rem;}
.music-list li img{width: 100%;}
.music-list li p{width: 100%;font-weight: bold;color: #666;line-height: 0.3rem;margin-top:0.2rem;height: 0.6rem;overflow: hidden;text-overflow:ellipsis;display: -webkit-box;-webkit-line-clamp: 2;-webkit-box-orient: vertical;}

.music-video{width: 90%;display: flex;flex-wrap: wrap;justify-content: space-between;margin:0 5%;}
.music-video li{width: 45%;}
.music-video li video{width: 100%;}
.music-video li video::-webkit-media-controls-overlay-play-button{width: 100px;}

.music-video li:first-child{width: 100%;}
</style>
