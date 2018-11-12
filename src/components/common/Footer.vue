<template>
    <div>
        <ul class="footer">
            <li class="on">
                <router-link to="/find/findMain">
                    <img src="@/assets/images/common-find1.png" alt="">
                    <p>发现</p>
                </router-link>
            </li>
            <li>
                <router-link to="/myMusic">
                    <img src="@/assets/images/common-mymusic.png" alt="">
                    <p>我的音乐</p>
                </router-link>
            </li>
            <li>
                <router-link to="/play">
                    <div class="play"><img src="https://p1.music.126.net/OGkguabNGMlph3aQDHP4FA==/2896113629951904.jpg" alt=""></div>
                </router-link>
            </li>
            <li>
                <router-link to="/dynamic">
                    <img src="@/assets/images/common-life.png" alt="">
                    <p>动态</p>
                </router-link>
            </li>
            <li>
                <router-link to="/mine">
                    <img src="@/assets/images/common-mine.png" alt="">
                    <p>个人中心</p>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
a{color: #000;outline: none;}
.footer{width: 100%;height: 1.2rem;position: fixed;bottom:0;display: flex;justify-content: space-evenly;background: #ffffff;}
.footer li{text-align: center;font-size: 0.1rem;}
.footer li a.router-link-active{color: #FA5122;}
.footer img{width: 0.6rem;}
.play{width: 0.8rem;height: 0.8rem;border-radius: 0.8rem;overflow: hidden;margin-top:0.1rem;}
.play img{width: 100%;}
</style>
