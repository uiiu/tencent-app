<template>
	<div id="mine">
        <div class="mine_title_box">
            <h3 class="mine_title">
              <span class="title_icon"></span>个人中心
          </h3>
        </div>
        <div class="mine_mad">
            <div class="name_box">
                <div class="name_box_left">
                    <span class="name_img">
              <img src="../img/head.jpg">
            </span>
                    <span>用户名</span>
                </div>
                <div class="name_box_right">
                    签到+2 <span class="mine_vip"></span>
                </div>
            </div>
        </div>
        <div class="mine_mad">
            <div class="handle_vip_box">
                <div class="handle_vip">
                    <div class="mine_icon vip_img"></div>
                    <div class="handle_vip_content">
                        <p>开通VIP会员</p>
                        <p>开通VIP会员</p>
                    </div>
                </div>
                <div class="handle_mive">
                    <div class="mine_icon teng_icon"></div>
                    <div class="mive_circle">影视圈</div>
                </div>
            </div>
        </div>
        <div class="mine_mad">
            <ul class="mine_relevant">
                <li class="relevant_list">
                    <h3 class="relevant_list_title">
              <span class="mine_icon down_load"></span>
              离线缓存
            </h3>
                </li>
                <li class="relevant_list">
                    <h3 class="relevant_list_title">
              <span class="mine_icon watch_history"></span>
              观看历史
            </h3>
                    <div class="relevant_inner_box">
                        <div class="swiper-container relevant_swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide relevant_inner_list">
                                    <div class="slide_img">
                                        <img src="../img/slide1.jpg">
                                    </div>
                                    <div class="slide_content">我是视频明子</div>
                                </div>
                                <div class="swiper-slide relevant_inner_list">
                                    <div class="slide_img">
                                        <img src="../img/slide2.jpg">
                                    </div>
                                    <div class="slide_content">我是视频明子</div>
                                </div>
                                <div class="swiper-slide relevant_inner_list">
                                    <div class="slide_img">
                                        <img src="../img/slide3.jpg">
                                    </div>
                                    <div class="slide_content">我是视频明子</div>
                                </div>
                                <div class="swiper-slide relevant_inner_list">
                                    <div class="slide_img">
                                        <img src="../img/slide4.jpg">
                                    </div>
                                    <div class="slide_content">我是视频明子</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="relevant_list">
                    <h3 class="relevant_list_title">
              <span class="mine_icon watch_list"></span>
              我的看单
            </h3>
                    <div class="relevant_inner_box">
                        <div class="swiper-container relevant_swiper">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide relevant_inner_list">
                                    <div class="slide_img">
                                        <img src="../img/slide1.jpg">
                                    </div>
                                    <div class="slide_content">我是视频明子</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li class="relevant_list">
                    <h3 class="relevant_list_title">
              <span class="mine_icon subscribe"></span>
              我的订阅
            </h3>
                </li>
                <li class="relevant_list">
                    <h3 class="relevant_list_title">
              <span class="mine_icon watch_stars"></span>
              我关注的明星
            </h3>
                </li>
            </ul>
        </div>
        <div class="mine_mad">
            <ul class="mine_relevant">
                <li class="relevant_list">
                    <h3 class="relevant_list_title">
              <span class="mine_icon free_watch"></span>
              视频免流量任性看，没wifi也尽情追剧
            </h3>
                </li>
                <li class="relevant_list">
                    <h3 class="relevant_list_title">
              <span class="mine_icon stars_close"></span>
              明星装扮
            </h3>
                </li>
                <li class="relevant_list">
                    <h3 class="relevant_list_title">
              <span class="mine_icon ydll"></span>
              移动流量包
            </h3>
                </li>
                <li class="relevant_list">
                    <h3 class="relevant_list_title">
              <span class="mine_icon watch_t"></span>
              投电视
            </h3>
                </li>
                <li class="relevant_list">
                    <h3 class="relevant_list_title">
              <span class="mine_icon play_game"></span>
              游戏中心
            </h3>
                </li>
                <li class="relevant_list">
                    <h3 class="relevant_list_title">
              <span class="mine_icon vip_fuben"></span>
              会员联名卡 副本
            </h3>
                </li>
            </ul>
        </div>
        <div class="mine_mad">
            <ul class="mine_relevant">
                <li class="relevant_list">
                    <h3 class="relevant_list_title">
              <span class="mine_icon set_up"></span>
              设置
            </h3>
                </li>
            </ul>
        </div>
    </div>

</template>
<script>
	export default{
        mounted(){
            this.mineSlider()
          },
          methods:{
            mineSlider(){
                $(function () {
                    var innerSwiper = new Swiper('.relevant_swiper', {
                        direction: 'horizontal',
                        slidesPerView: "auto",
                        spaceBetween: 5,
                        freeMode: true,
                        freeModeMomentumRatio: 0,
                    })
                })
            }
        }
    }
</script>
<style>
	@import'../css/mine.css'
</style>