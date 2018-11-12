<template>
    <div>
        <header ref="note">
            <div class="marg">
                <span>
                    <img src="@/assets/images/left.png" alt="" >
                </span>
            </div>
        </header>

    </div>
</template>

<script>
import Axios from 'axios'
export default {
    data(){
        return{
            
           /*  note:{
                backgroundImage: "url(" + bg+ ")",
                backgroundRepeat: "no-repeat",
            }, */
        }
    },
    mounted(){
        let url1 = API_PROXY + "https://api.bzqll.com/music/tencent/songList?key=579621905&id=" + this.$route.params.musicId + ".json";
        Axios.get(url1).then((res)=>{
            let bg = res.data.data.logo;
            this.$refs.note.style.background = "url("+bg+") no-repeat center center";
            console.log(bg)

        }).catch(()=>{
            alert('出错了')
        })
    }
}
</script>

<style scoped>
header{width: 100%;height: 4rem;background-position: center;background-size: 100%;}
.marg{width: 94%;height: 100%;padding:0 3%; background: rgba(0,0,0,0.5);}

</style>
