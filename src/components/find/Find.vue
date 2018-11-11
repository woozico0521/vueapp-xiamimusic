<template>
    <div>
        <common-header></common-header>
        <!-- <find-banner></find-banner>
        <find-nav></find-nav>
        <music-list></music-list> -->
        <router-view></router-view>
        <h2>发现</h2>
        <common-footer></common-footer>
    </div>
</template>

<script>
import CommonHeader from '../common/Header'
import CommonFooter from '../common/Footer'
/* import FindBanner from './Banner'
import FindNav from './Nav'
import MusicList from './MusicList' */
export default {
    components:{
        CommonHeader,
        CommonFooter,
        /* FindBanner,
        FindNav,
        MusicList, */
    }
}
</script>

<style scoped>

</style>
