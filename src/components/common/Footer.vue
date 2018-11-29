<template>
    <div>
        <ul class="footer">
            <li>
                <router-link to="/find/findMain">
                    <div class="img">
                        <img src="@/assets/images/common-find1.png" alt="">
                        <img src="@/assets/images/common-find.png" alt="">
                    </div>
                    <p>发现</p>
                </router-link>
            </li>
            <li>
                <router-link to="/myMusic">
                    <div class="img">
                        <img src="@/assets/images/common-mymusic1.png" alt="">
                        <img src="@/assets/images/common-mymusic.png" alt="">
                    </div>
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
                    <div class="img">
                        <img src="@/assets/images/common-life1.png" alt="">
                        <img src="@/assets/images/common-life.png" alt="">
                    </div>
                    <p>动态</p>
                </router-link>
            </li>
            <li>
                <router-link to="/mine">
                    <div class="img">
                        <img src="@/assets/images/common-mine1.png" alt="">
                        <img src="@/assets/images/common-mine.png" alt="">
                    </div>
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
.footer{width: 100%;height: 1.2rem;position: fixed;bottom:0;display: flex;justify-content: space-evenly;background: #F3F4F6;border-top:1px solid #E2E3E4;}
.footer li{text-align: center;font-size: 0.1rem;margin-top:0.1rem;}
.footer li a.router-link-active{color: #FA5122;}
.footer li div.img img:first-child{display: none;}
.footer li a.router-link-active div img:first-child{display: inline;}
.footer li a.router-link-active div img:last-child{display: none;}
.footer img{width: 0.6rem;}
.play{width: 0.8rem;height: 0.8rem;border-radius: 0.8rem;overflow: hidden;margin-top:0.2rem;}
.play img{width: 100%;}
</style>
