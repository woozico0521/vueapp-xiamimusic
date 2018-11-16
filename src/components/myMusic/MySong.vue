<style scoped>
.fl{float: left;}
.fr{float: right;}
header{width: 90%;height: 2rem;text-align: right;margin:0 5%;overflow: hidden;}
header .header-font{width: 76%;margin:0 12%;text-align: center;height: 0.8rem;line-height: 0.8rem;display: none;}
header .header-font p{width: 100%;font-size: 1.2em; float: left;}
header .header-img{float: right;width: 7%;height: 0.8rem;line-height: 0.8rem;}
header .header-img img{width: 100%;vertical-align: middle;}
header h2{margin-top:0.8rem;text-align: left;}
.local-music{width: 90%;height: 1rem; margin:0 5%;line-height: 1rem;}
.name{width: 60%;height: 1rem;line-height: 1rem;}
.name img{width: 0.4rem;vertical-align: -0.05rem;}
.name span{font-size: 1.2em;margin-left: 0.2rem;}
.name span:nth-of-type(2){color:#999;font-size: 1em;}
.pic{width: 0.4rem;height: 1rem;}
.pic img{vertical-align: middle;}
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
    </div>
</template>

<script>
export default {
    
}
</script>
