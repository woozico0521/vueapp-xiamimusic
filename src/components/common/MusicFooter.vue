<style scoped>
.footer{width: 100%;height: 1rem;background: #F7F7F7;position: fixed;bottom:0;border-top:1px solid #E1E2E4;display: flex;line-height:1rem;}
.img{width:0.8rem;height: 0.8rem;background: #EDEDED;margin:0.1rem 0.2rem;}
.img img{width: 100%;}
.name{flex-grow: 2;}
.name p{color:#333;}
.play{color:#dadada;font-size: 0.5rem;margin:0 0.1rem;}
.like{width: 0.5rem;margin:0.25rem;}
.like img{width: 0.5rem;}

</style>

<template>
    <div class="footer">
        <div class="img">
            <img src="@/assets/images/logo.png" alt="">
        </div>
        <div class="name">
            <p>虾米音乐 听·见不同</p>
        </div>
        <div class="play">
            ▶
        </div>
        <div class="like">
            <img src="@/assets/images/unlike-2.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>
