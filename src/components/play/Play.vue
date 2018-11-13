<template>
    <div>
        <aplayer autoplay
            :music="{
                title: 'secret base~君がくれたもの~',
                artist: 'Silent Siren',
                src: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3',
                pic: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.jpg'
            }"
        />
    </div>
</template>

<script>
import Aplayer from 'vue-aplayer'
import Axios from 'axios'
export default {
    data(){
        return{
            musicList:[],
        }
    },
    components:{
        Aplayer,
    },
    mounted(){
        
    }
}
</script>

<style scoped>

</style>
