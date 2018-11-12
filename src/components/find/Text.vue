<template>
<div>
    <video data-icon="0" src="" data-state="a" style="width:100%;height:13.1875rem;" id="videoBox" webkit-playsinline
    playsinline></video><!-- video标签 -->
    <div class="btnPlay">
        <img class="left" src="images/playBagin.png" alt="" data-icon="0">
        <p class="progressTime left">0:00</p>
    </div><!-- 开始按钮div -->
    <div class="progressBox" id="progressBox_special">
        <div class="progressBar"></div><!-- 蓝条进度条div -->
        <div class="imgBox">
            <img id="progressImg" src="images/progressPointer.png" alt="">
        </div>
    </div><!-- 进度条拖拉图片divBox -->
    <div class="biggerBtn" data-icon="0">
        <img class="right" src="images/allBigger.png" alt="">
        <p class="allTime right"></p>
    </div><!-- 全屏div -->
</div>
</template>
