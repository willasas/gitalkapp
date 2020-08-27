<template>
  <div class="container">
    <video-player
      class="video-player-box"
      ref="videoPlayer"
      :playsinline="true"
      :options="playerOptions"
      customEventName="customstatechangedeventname"
      @play="onPlayerPlay($event)"
      @pause="onPlayerPause($event)"
      @ended="onPlayerEnded($event)"
      @waiting="onPlayerWaiting($event)"
      @playing="onPlayerPlaying($event)"
      @loadeddata="onPlayerLoadeddata($event)"
      @timeupdate="onPlayerTimeupdate($event)"
      @canplay="onPlayerCanplay($event)"
      @canplaythrough="onPlayerCanplaythrough($event)"
      @statechanged="playerStateChanged($event)"
      @ready="playerReadied"
    >
    </video-player>
  </div>
</template>

<script>
// 1.npm install vue-video-player --save安装组件
// Similarly, you can also introduce the plugin resource pack you want to use within the component
// import 'some-videojs-plugin'
export default {
  data() {
    return {
      playerOptions: {
        playbackRates: [0.5, 1.0, 1.5, 2.0], //可选播放速度
        autoplay: false, //不启用自动播放
        loop: false, //关闭循环播放
        preload: "auto", //加载视频
        language: "en", //多语言支持，可选zh-CN
        aspectRatio: "16:9", //将播放器置于流畅模式，并在计算播放器的动态大小时使用该值.视频比例
        fluid: true, // 当true时，启用流体布局
        sources: [
          //视频配置
          {
            type: "video/mp4", //类型
            src: "../assets/source/video/luoyin.mp4" //视频地址
          }
        ],
        poster: "../assets/img/poster/ps1.png", //视频封面
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true, // 当前时间和持续时间的分隔符
          durationDisplay: true, // 显示持续时间
          remainingTimeDisplay: false, // 是否显示剩余时间功能
          fullscreenToggle: true // 是否显示全屏按钮
        },
        computed: {
          player() {
            return this.$refs.videoPlayer.player;
          }
        },
        mounted() {
          console.log(
            "this is current videojs instance object",
            this.myVideoPlayer
          );
        }
        /*methods: {
          
          // listen event
          onPlayerPlay(player) {
            // console.log('player play!', player)
          },
          onPlayerPause(player) {
            // console.log('player pause!', player)
          },
          // ...player event

          // or listen state event
          playerStateChanged(playerCurrentState) {
            // console.log('player current update state', playerCurrentState)
          },

          // player is ready
          playerReadied(player) {
            console.log('the player is readied', player)
            // you can use it to do something...
            // player.[methods]
          }
        }*/
      }
    };
  }
};
</script>
