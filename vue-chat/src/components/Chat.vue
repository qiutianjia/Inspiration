<template>
    <div>
        <van-search placeholder="请输入搜索关键词"/>
        <van-swipe-cell>
            <van-card
                    title="前娜仙女"
                    class="chat-card"
                    thumb="https://s1.ax1x.com/2020/03/17/8NZB79.jpg"
                    @click="enter"
            >
                <div slot="price-top">宝宝，加油~</div>
                <div slot="price">比心，比心</div>
                <div slot="num">上午 11:26</div>
            </van-card>
            <van-button
                    slot="right"
                    square
                    text="删除"
                    type="danger"
                    class="delete-button"
            />
        </van-swipe-cell>
    </div>
</template>

<script>



    export default {
        name: "Chat",
        data() {
            return {
                imgUrl:require("../assets/2.jpg")
            }
        },
        created() {

        },
        methods: {
            enter() {
                this.$router.replace('/enter');
            }
        }
    }
</script>

<style scoped>
    .chat-card {
        margin: 0;

    }

    .delete-button {
        height: 100%;
    }
</style>