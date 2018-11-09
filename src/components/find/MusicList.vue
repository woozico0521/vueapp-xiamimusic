<template>
    <div>
        <div class="title">
            <h4>必听歌单</h4>
            <p>更多 <span>&gt;</span></p>
        </div>
        <ul class="music-list">
            <li v-for="music in musicList" :key="music.id">
                <img :src="music.coverImgUrl" alt="">
                <p>{{music.title}}</p>
            </li>
        </ul>

        <div class="title">
            <h4>新歌新碟</h4>
            <p>更多 <span>&gt;</span></p>
        </div>
        <ul class="music-album">
            <li v-for="album in albumList" :key="album.id">
                <img src="" alt="">
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
            albumList:[],
        }
    },
    methods:{
        dataLoad(){
            let url = '/static/data/hotsonglist.json'
            let url2 = '/static/data/newmusic.json'
            Axios.get(url).then((res)=>{
                let list = res.data.data;
                this.musicList = list.slice(0,6);
                //console.log(list);
            }).catch(()=>{
                alert('请求失败')
            })

            Axios.get(url2).then((res)=>{
                let list = res.data.songlist;
                //this.musicList = list.slice(0,6);
                console.log(list);
            }).catch(()=>{
                alert('请求失败')
            })
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
</style>
