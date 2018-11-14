<template>
    <div>
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
            <swipe-item class="slide4"></swipe-item>
            <swipe-item class="slide5"></swipe-item>
            <swipe-item class="slide6"></swipe-item>
            <swipe-item class="slide7"></swipe-item>
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
  background-image: url('/static/img/1541149369308.jpg');
  color: #fff;
  background-size: 100%;
}

.slide2 {
  background-image: url('/static/img/1541476544886.jpg');
  color: #000;
  background-size: 100%;
}
 
.slide3 {
  background-image: url('/static/img/1541644166239.jpg');
  color: #fff;
  background-size: 100%;
}
.slide4 {
  background-image: url('/static/img/1541734306453.jpg');
  color: #fff;
  background-size: 100%;
}
.slide5 {
  background-image: url('/static/img/1541735286731.jpg');
  color: #fff;
  background-size: 100%;
}
.slide6 {
  background-image: url('/static/img/1542000824490.jpg');
  color: #fff;
  background-size: 100%;
}
.slide7 {
  background-image: url('/static/img/1542088813434.jpg');
  color: #fff;
  background-size: 100%;
}
</style>
