<template>
    <div>
        <m-head />
        <router-view />
        <m-foot />
    </div>
</template>
<script>
import MHead from '@/components/header.vue'
import MFoot from '@/components/footer.vue'
export default {
    components:{
        MHead,
        MFoot
    }
}
</script>