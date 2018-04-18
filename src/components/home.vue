<template>
	<div id="home">
        <!-- 导航栏 -->
        <div class="topNav_box">
            <div id="topNav" class="swiper-container swiper-container-horizontal swiper-container-free-mode swiper-container-android">
                <div class="swiper-wrapper" style="">
                    <div class="swiper-slide active"><span>精选</span></div>
                    <div class="swiper-slide"><span>电影</span></div>
                    <div class="swiper-slide"><span>动漫</span></div>
                    <div class="swiper-slide"><span>游戏</span></div>
                    <div class="swiper-slide"><span>社会</span></div>
                    <div class="swiper-slide"><span>娱乐</span></div>
                    <div class="swiper-slide"><span>科技</span></div>
                    <div class="swiper-slide"><span>问答</span></div>
                    <div class="swiper-slide"><span>汽车</span></div>
                    <div class="swiper-slide"><span>财经</span></div>
                </div>
            </div>
        </div>
        <!-- 栏目 -->
        <div class="swiper-container gallery-top">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <recommend></recommend>
                </div>
                <div class="swiper-slide">
                    <movieView></movieView>
                </div>
                <div class="swiper-slide" style="background:#333;height: 6rem; "></div>
                <div class="swiper-slide " style="background:red;height: 6rem; "></div>
                <div class="swiper-slide" style="background:#906;height: 6rem;"></div>
                <div class="swiper-slide " style="background:#096;height: 6rem; "></div>
                <div class="swiper-slide" style="background:#888;height: 6rem;"></div>
                <div class="swiper-slide " style="background:#f7f7f7;height: 6rem; "></div>
                <div class="swiper-slide" style="background:#d4d4d4;height: 6rem;"></div>
                <div class="swiper-slide " style="background:#d9d9d9;height: 6rem; "></div>
            </div>
        </div>
        <!-- 查看全部 -->
        <div class="columns_btn" @click="ckAll">
            <span></span>
        </div>
        <!-- 全部栏目浮框 -->
         <div class="columns_box">
            <div class="columns_title_box">
                <h3 class="columns_title">
                    全部频道
                    <span class="close_btn" @click="closeAll"></span>
                </h3>
            </div>
            <div class="columns_content">
                <h3 class="content_title">我的频道</h3>
                <ul class="content_list">
                    <li class="content_list_box">
                        <span class="content_list_img selected"></span>
                        <span class="content_list_name">精选</span>
                    </li>
                    <li class="content_list_box">
                        <span class="content_list_img nineteen"></span>
                        <span class="content_list_name">十九大</span>
                    </li>
                    <li class="content_list_box">
                        <span class="content_list_img tV_play"></span>
                        <span class="content_list_name">电视剧</span>
                    </li>
                </ul>
                <ul class="content_list">
                    <li class="content_list_box">
                        <span class="content_list_img _movie"></span>
                        <span class="content_list_name">电影</span>
                    </li>
                    <li class="content_list_box">
                        <span class="content_list_img variety"></span>
                        <span class="content_list_name">综艺</span>
                    </li>
                    <li class="content_list_box">
                        <span class="content_list_img chlid"></span>
                        <span class="content_list_name">少儿</span>
                    </li>
                </ul>
                <ul class="content_list">
                    <li class="content_list_box">
                        <span class="content_list_img comic"></span>
                        <span class="content_list_name">动漫</span>
                    </li>
                    <li class="content_list_box">
                        <span class="content_list_img _vip"></span>
                        <span class="content_list_name">VIP会员</span>
                    </li>
                    <li class="content_list_box">
                        <span class="content_list_img music"></span>
                        <span class="content_list_name">音乐</span>
                    </li>
                </ul>
                 <ul class="content_list">
                    <li class="content_list_box">
                        <span class="content_list_img american_tv"></span>
                        <span class="content_list_name">美剧</span>
                    </li>
                    <li class="content_list_box">
                        <span class="content_list_img nba"></span>
                        <span class="content_list_name">NBA</span>
                    </li>
                    <li class="content_list_box">
                        <span class="content_list_img documentary"></span>
                        <span class="content_list_name">纪录片</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>

</template>
<script> 
    import movieView from './movie.vue'
    import recommend from './recommend.vue'
	export default {
        components:{
          movieView,
          recommend
        },
        mounted(){
          this.slider()
        },
        methods:{
            slider(){
                $(function(){
                  // 首页 swiper 控制器
                  var mySwiper = new Swiper('#topNav', {
                      freeMode: true,
                      freeModeMomentumRatio: 0.5,
                      slidesPerView: 'auto',

                  });
                  var galleryTop = new Swiper('.gallery-top', {
                      spaceBetween: 10,
                      autoHeight: true,
                      onSlideChangeEnd: function(swiper) {
                          var slide = mySwiper.slides[swiper.activeIndex]
                          var slideLeft = slide.offsetLeft
                          var slideWidth = slide.clientWidth
                          var slideCenter = slideLeft + slideWidth / 2
                          // 被点击slide的中心点
                          mySwiper.setWrapperTransition(300)
                          if (slideCenter < swiperWidth / 2) {
                              mySwiper.setWrapperTranslate(0)
                          } else if (slideCenter > maxWidth) {
                              mySwiper.setWrapperTranslate(maxTranslate)
                          } else {
                              var nowTlanslate = slideCenter - swiperWidth / 2
                              mySwiper.setWrapperTranslate(-nowTlanslate)
                          }
                          $("#topNav  .active").removeClass('active')
                          $("#topNav .swiper-slide").eq(swiper.activeIndex).addClass('active')
                      }
                  });
                  var swiperWidth = mySwiper.container[0].clientWidth
                  var maxTranslate = mySwiper.maxTranslate();
                  var maxWidth = -maxTranslate + swiperWidth / 2

                  $("#topNav .swiper-container").on('touchstart', function(e) {
                      e.preventDefault()
                  })

                  mySwiper.on('tap', function(swiper, e) {

                      //  e.preventDefault()
                      galleryTop.slideTo(swiper.clickedIndex, 1000, false)
                      var slide = swiper.slides[swiper.clickedIndex]
                      var slideLeft = slide.offsetLeft
                      var slideWidth = slide.clientWidth
                      var slideCenter = slideLeft + slideWidth / 2
                      // 被点击slide的中心点
                      mySwiper.setWrapperTransition(300)
                      if (slideCenter < swiperWidth / 2) {
                          mySwiper.setWrapperTranslate(0)
                      } else if (slideCenter > maxWidth) {
                          mySwiper.setWrapperTranslate(maxTranslate)
                      } else {
                          var nowTlanslate = slideCenter - swiperWidth / 2
                          mySwiper.setWrapperTranslate(-nowTlanslate)
                      }
                      $("#topNav  .active").removeClass('active')
                      $("#topNav .swiper-slide").eq(swiper.clickedIndex).addClass('active')

                  })

                  // 推荐swiper控制器
                  var innerSwiper = new Swiper('.innner_swiper', {
                      direction: 'horizontal',
                      loop: true,
                      autoplay: 3000,
                      slidesPerView: "auto",
                      centeredSlides: true,
                      spaceBetween: 5,
                  });
                  //明星swiper控制器
                  var starSwiper = new Swiper('.star_ranking', {
                      direction: 'horizontal',
                      spaceBetween: 5,
                      slidesPerView: 2,
                  });

                  // 即将上映大片swiper控制器
                  var soonplaySwiper = new Swiper($('.soon_play')[0], {
                      direction: 'horizontal',
                      spaceBetween: 5,
                      slidesPerView: 'auto',
                      freeMode: true,
                      freeModeMomentumRatio: 0.5,
                  });

                  // 我的影院Swiper
                  var mycinemaSwiper = new Swiper($('.my_cinema')[0], {
                      direction: 'horizontal',
                      slidesPerView: 3,
                      centeredSlides:true,
                      initialSlide:1,
                  })
                })
            },
            ckAll(){
                $(".columns_box").show()
            },
            closeAll(){
                $(".columns_box").hide()
            }
        }
    }
</script>
<style>
@import '../css/swiper-3.4.2.min.css'
</style>