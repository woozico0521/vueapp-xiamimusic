<template>
    <div>
        <div id="container">
            <ul id="imgs">
                <li v-for="(item,index) in imgs" :key="index" v-show="index==nowIndex">
                    <img :src="item" alt="">
                </li>
            </ul>
            <ul id="tabs">
                <li v-for="(item,index) in imgs.length" :key="index" :class="{selected:index==nowIndex}" @click="changeImg(index)">
                    <small></small>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            imgs:[
                require('@/assets/images/1541149369308.jpg'),
                require('@/assets/images/1541476544886.jpg'),
                require('@/assets/images/1541734306453.jpg'),
                require('@/assets/images/1541644166239.jpg'),
                require('@/assets/images/1541735286731.jpg'),
            ],
            nowIndex:0,
            timer:null,
        }
    },
    methods:{
        play(){
            this.timer=setInterval(()=>{
                this.nowIndex++;
                if(this.nowIndex==this.imgs.length){
                    this.nowIndex=0;
                }
            },1000);
        },
        changeImg(index){
            this.nowIndex=index;
        }
    },
    mounted(){
        this.play()
    }
}
</script>

<style scoped>
#container{width: 94%;height: 2.24rem;margin:0 auto; position: relative;border-radius: 0.1rem;overflow: hidden;}
#imgs li{width: 100%;height: 100%;position: absolute;top:0;left: 0;}
#container img{width: 100%;}
#tabs{position:absolute;left:40%;bottom:15px;color: #fff;cursor: pointer;}
#tabs li{width: 0.1rem;height: 0.1rem;float: left;line-height: 0.1rem;margin-right: 0.2rem}
#tabs li small{width:100%;height:100%;display:inline-block;border-radius: 5px;background: rgba(255,255,255,0.7);}
#tabs .selected small{background: rgba(255,255,255,1);}
</style>
