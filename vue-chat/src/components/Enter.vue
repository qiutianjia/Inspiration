<template>
    <div>
        <van-nav-bar
                title="张国荣"
                left-arrow
                @click-left="onClickLeft"
                fixed
        />
        <div class="box van-hairline--top">
            <van-field
                    v-model="msg"
                    rows="1"
                    autosize
                    type="textarea"
                    maxlength="120"
                    placeholder="请输入内容"
            >

            </van-field>
        </div>
    </div>
</template>

<script>

    import {Toast} from 'vant';

    export default {
        name: "Enter",
        data() {
            return {
                msg: '',
            }
        },
        methods: {
            onClickLeft() {
                this.$router.replace('/chat');
            },
            onClickIcon() {
                Toast('点击图标');
            },
            onClickButton() {
                Toast('点击按钮');
            }
        }
    }
</script>

<style scoped>
    .box {
        position: fixed;
        bottom: 0;
        width: 100%;
    }
</style>