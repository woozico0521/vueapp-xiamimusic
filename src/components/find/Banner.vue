<template>
    <div>
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
            <swipe-item class="slide4"></swipe-item>
            <swipe-item class="slide5"></swipe-item>
        </swipe>    
        
    </div>
</template>

<script>
import {Swipe,SwipeItem} from 'vue-swipe'
import 'vue-swipe/dist/vue-swipe.css'
export default {
    components:{
        'swipe':Swipe,
        'swipe-item':SwipeItem,
    }
}
</script>

<style scoped>
.my-swipe {
  height: 118px;
  color: #fff;
  font-size: 10px;
  text-align: center;
}

.slide1 {
  background-image: url('https://pic.xiami.net/images/common/uploadpic/63/1543393992863.jpg');
  color: #fff;
  background-size: 100%;
}

.slide2 {
  background-image: url('https://pic.xiami.net/images/common/uploadpic/98/1543220245098.jpg');
  color: #000;
  background-size: 100%;
}
 
.slide3 {
  background-image: url('https://pic.xiami.net/images/common/uploadpic/84/1543399668284.jpg');
  color: #fff;
  background-size: 100%;
}
.slide4 {
  background-image: url('https://pic.xiami.net/images/common/uploadpic/13/1542963016913.jpg');
  color: #fff;
  background-size: 100%;
}
.slide5 {
  background-image: url('https://pic.xiami.net/images/common/uploadpic/56/1542861926956.jpg');
  color: #fff;
  background-size: 100%;
}

</style>
