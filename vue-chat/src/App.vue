<template>
    <div id="app">
        <van-overlay :show="overlay_show">
            <div class="wrapper">
                <van-loading color="#1989fa" vertical>{{ overlay_loading_text }}</van-loading>
            </div>
        </van-overlay>
        <van-button type="default" @click="send">默认按钮</van-button>
        <router-view/>
        <van-tabbar route fixed v-show="overlay_show === false && $route.name !== 'enter'">
            <van-tabbar-item replace to="/chat" icon="chat-o">消息</van-tabbar-item>
            <van-tabbar-item replace to="/contact" icon="friends-o">联系人</van-tabbar-item>
            <van-tabbar-item replace to="/home" icon="home-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>

    import Vue from 'vue';
    import {Tabbar, TabbarItem} from 'vant';

    Vue.use(Tabbar);
    Vue.use(TabbarItem);

    import Stomp from 'stompjs';
    import SockJS from 'sockjs-client';

    export default {
        name: 'App',
        data() {
            return {
                overlay_show: true,
                overlay_loading_text: '正在连接服务器...',
                stompClient: null,
                timer: null
            }
        },
        mounted() {
            this.initWebSocket();
        },
        beforeDestroy() {
            this.disconnect();
            clearInterval(this.timer);
        },
        methods: {
            initWebSocket() {
                this.connection();
                const that = this;
                this.timer = setInterval(() => {
                    try {
                        that.stompClient.send('PING');
                    } catch (err) {
                        that.overlay_loading_text = '断线了，正在重新连接服务器...';
                        that.overlay_show = true;
                        that.connection();
                    }
                }, 5000);
            },
            connection() {
                const sock = new SockJS('http://127.0.0.1:8080/stomp');
                this.stompClient = Stomp.over(sock);
                const that = this;
                this.stompClient.connect({}, () => {
                    that.overlay_show = false;
                    this.stompClient.subscribe('/topic/d', (msg) => {
                        console.log(msg.body);
                        msg.ack();
                    });
                });
            },
            disconnect() {
                if (this.stompClient) {
                    this.stompClient.disconnect();
                }
            },
            send() {
                this.stompClient.send("/hello", {}, JSON.stringify({ 'name': "123456" }));
            },
        }
    }
</script>

<style>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>
