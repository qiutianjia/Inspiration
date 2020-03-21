<template>
    <div>

    </div>
</template>

<script>

    import Vue from 'vue';
    import {NavBar} from 'vant';
    import {Toast} from 'vant';

    Vue.use(NavBar);

    export default {
        name: "NavBar",
        methods: {
            onClickLeft() {
                Toast('返回');
            },
            onClickRight() {
                Toast('按钮');
            }
        }
    }
</script>

<style scoped>

</style>