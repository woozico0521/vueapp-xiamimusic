<template>
    <div>
        <ul class="footer">
            <li class="on">
                <img src="@/assets/images/common-find1.png" alt="">
                <p>发现</p>
            </li>
            <li>
                <img src="@/assets/images/common-mymusic.png" alt="">
                <p>我的音乐</p>
            </li>
            <li>
                <div class="play"><img src="https://p1.music.126.net/OGkguabNGMlph3aQDHP4FA==/2896113629951904.jpg" alt=""></div>
            </li>
            <li>
                <img src="@/assets/images/common-life.png" alt="">
                <p>动态</p>
            </li>
            <li>
                <img src="@/assets/images/common-mine.png" alt="">
                <p>个人中心</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.footer{width: 100%;height: 1.2rem;position: fixed;bottom:0;display: flex;justify-content: space-evenly;background: #ffffff;}
.footer li{text-align: center;font-size: 0.1rem;}
.footer li.on{color: #FA5122;}
.footer img{width: 0.6rem;}
.play{width: 0.8rem;height: 0.8rem;border-radius: 0.8rem;overflow: hidden;margin-top:0.1rem;}
.play img{width: 100%;}
</style>
