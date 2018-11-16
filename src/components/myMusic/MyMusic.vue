<template>
    <div>
        <router-view></router-view>
        <common-footer></common-footer>
    </div>
</template>

<script>
import CommonFooter from '@/components/common/Footer'
export default {
    components:{
        CommonFooter,
    }
}
</script>

<style scoped>

</style>
