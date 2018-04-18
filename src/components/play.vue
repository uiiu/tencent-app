<template>
	<div id="play">
        <div class="play_list">
            <div class="video_zw">
                <div class="video_box">
                    <video poster="../src/img/preview_img1.jpg" src="../src/video/video_1.mp4">
                    </video>
                    <a class="mask_title" @click="routerBack">
                    	<span></span>
                    </a>
                    <div class="bf_btn" @click="playClick(0)">
                        <span class="hot_bf"></span>
                        <span class="num_flow">16M</span>流量
                    </div>
                </div>
            </div>
            <div class="paly_mad">
                <h3 class="paly_title move_title">
                    电影名称
                    <span class="play_more">更多></span>
                </h3>
                <p class="play_introduce">8.4分·喜剧·4.2亿次播放</p>
                <div class="plfx">
                    <div class="play_pl">
                        <span class="pl_icon"></span>5.3万热评
                    </div>
                    <div class="play_fx">
                        
                    </div>
                </div>
            </div>
        </div>
        <div class="paly_mad">
            <h3 class="paly_title">
                专辑列表
            </h3>
            <div class="play_vid">
                <div class="play_vid_img">
                    <img src="../img/slide2.jpg">
                    <span class="icon">国语</span>
                </div>
                <div class="play_vid_content ">
                    <h3 class="play_vid_name vid_name">影片名称</h3>
                    <p class="play_vid_js vid_js">影片的一句简介放在这里显示</p>
                </div>
            </div>
        </div>
        <div class="paly_mad">
            <h3 class="paly_title">
                片花资讯
            </h3>
            <div class="play_vid">
                <div class="play_vid_img">
                    <img src="../img/slide2.jpg">
                    <span class="icon">国语</span>
                </div>
                <div class="play_vid_content ">
                    <h3 class="play_vid_name ">影片名称</h3>
                    <p class="play_vid_js ">影片的一句简介放在这里显示</p>
                </div>
            </div>
            <div class="play_vid">
                <div class="play_vid_img">
                    <img src="../img/slide2.jpg">
                    <span class="icon">国语</span>
                </div>
                <div class="play_vid_content ">
                    <h3 class="play_vid_name ">影片名称</h3>
                    <p class="play_vid_js ">影片的一句简介放在这里显示</p>
                </div>
            </div>
            <div class="play_vid">
                <div class="play_vid_img">
                    <img src="../img/slide2.jpg">
                    <span class="icon">国语</span>
                </div>
                <div class="play_vid_content ">
                    <h3 class="play_vid_name ">影片名称</h3>
                    <p class="play_vid_js ">影片的一句简介放在这里显示</p>
                </div>
            </div>
            <div class="all_btn">全部</div>
        </div>
        <div class="paly_mad">
            <h3 class="paly_title">
                doki星耀榜人气榜
            </h3>
            <div class="swiper-container play_stars">
                <div class="swiper-wrapper" style="">
                     <div class="swiper-slide first_slide">
                        <div class="slide_top">
                            <span class="slide_img">
                                <img src="../img/head.jpg">
                            </span>
                            <span class="slide_ranking">NO.1</span>
                        </div>
                        <div class="slide_md">
                            赵晓明
                        </div>
                        <div class="slide_bt">140</div>
                    </div>
                    <div class="swiper-slide scend_slide">
                        <div class="slide_top">
                            <span class="slide_img">
                                <img src="../img/head.jpg">
                            </span>
                            <span class="slide_ranking">NO.1</span>
                        </div>
                        <div class="slide_md">
                            赵晓明
                        </div>
                        <div class="slide_bt">140</div>
                    </div>
                     <div class="swiper-slide three_slide">
                        <div class="slide_top">
                            <span class="slide_img">
                                <img src="../img/head.jpg">
                            </span>
                            <span class="slide_ranking">NO.1</span>
                        </div>
                        <div class="slide_md">
                            赵晓明
                        </div>
                        <div class="slide_bt">140</div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide_top">
                            <span class="slide_img">
                                <img src="../img/head.jpg">
                            </span>
                            <span class="slide_ranking">NO.1</span>
                        </div>
                        <div class="slide_md">
                            赵晓明
                        </div>
                        <div class="slide_bt">140</div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide_top">
                            <span class="slide_img">
                                <img src="../img/head.jpg">
                            </span>
                            <span class="slide_ranking">NO.1</span>
                        </div>
                        <div class="slide_md">
                            赵晓明
                        </div>
                        <div class="slide_bt">140</div>
                    </div>
                    <div class="swiper-slide">
                        <div class="slide_top">
                            <span class="slide_img">
                                <img src="../img/head.jpg">
                            </span>
                            <span class="slide_ranking">NO.1</span>
                        </div>
                        <div class="slide_md">
                            赵晓明
                        </div>
                        <div class="slide_bt">140</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="paly_mad">
            <h3 class="paly_title">
                为你推荐
            </h3>
            <div class="play_vid">
                <div class="play_vid_img">
                    <img src="../img/slide2.jpg">
                    <span class="icon">国语</span>
                </div>
                <div class="play_vid_content ">
                    <h3 class="play_vid_name ">影片名称</h3>
                    <p class="play_vid_js ">影片的一句简介放在这里显示</p>
                </div>
            </div>
            <div class="play_vid">
                <div class="play_vid_img">
                    <img src="../img/slide2.jpg">
                    <span class="icon">国语</span>
                </div>
                <div class="play_vid_content ">
                    <h3 class="play_vid_name ">影片名称</h3>
                    <p class="play_vid_js ">影片的一句简介放在这里显示</p>
                </div>
            </div>
            <div class="play_vid">
                <div class="play_vid_img">
                    <img src="../img/slide2.jpg">
                    <span class="icon">国语</span>
                </div>
                <div class="play_vid_content ">
                    <h3 class="play_vid_name ">影片名称</h3>
                    <p class="play_vid_js ">影片的一句简介放在这里显示</p>
                </div>
            </div>
            <div class="all_btn">全部</div>
        </div>
        <div class="paly_mad">
            <h3 class="paly_title">
                大家截的最精彩片段
                <span class="play_more">更多></span>
            </h3>
            <div class="swiper-container like_part">
                <div class="swiper-wrapper" style="">
                    <div class="swiper-slide">
                        <img src="../img//play_pd.png">
                    </div>
                    <div class="swiper-slide">
                        <img src="../img/play_pd.png">
                    </div>
                    <div class="swiper-slide">
                        <img src="../img/play_pd.png">
                    </div>
                    <div class="swiper-slide">
                        <img src="../img/play_pd.png">
                    </div>
                    <div class="swiper-slide">
                        <img src="../img/play_pd.png">
                    </div>
                    <div class="swiper-slide">
                        <img src="../img/play_pd.png">
                    </div>
                </div>
            </div>
        </div>
        <!-- 评论 -->、
        <div class="paly_mad">
            <h3 class="paly_title">
                全部热评
            </h3>
            <div class="hot_review">
                <div class="review_left">
                    <div class="review_img">
                        <img src="../img/head.jpg">
                    </div>
                    <div class="review_content">
                        <h2>虾米影评</h2>
                        <p>08-12</p>
                    </div>
                </div>
                <div class="review_right">
                    <p>
                        <span class="review_zan"></span>3
                    </p>
                    <p>
                        <span class="review_pl"></span>9
                    </p>
                </div>
            </div>
            <div class="hot_review_box">
                <h3 class="hot_review_title">《背叛者联盟带你游遍欧洲风光》</h3>
                <p>这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替</p>
            </div>
        </div>
        <div class="paly_mad">
            <h3 class="paly_title">
                全部热评
            </h3>
            <div class="hot_review">
                <div class="review_left">
                    <div class="review_img">
                        <img src="../img/head.jpg">
                    </div>
                    <div class="review_content">
                        <h2>虾米影评</h2>
                        <p>08-12</p>
                    </div>
                </div>
                <div class="review_right">
                    <p>
                        <span class="review_zan"></span>3
                    </p>
                    <p>
                        <span class="review_pl"></span>9
                    </p>
                </div>
            </div>
            <div class="hot_review_box">
                <h3 class="hot_review_title">《背叛者联盟带你游遍欧洲风光》</h3>
                <p>这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替</p>
            </div>
        </div>
        <div class="paly_mad">
            <h3 class="paly_title">
                全部热评
            </h3>
            <div class="hot_review">
                <div class="review_left">
                    <div class="review_img">
                        <img src="../img/head.jpg">
                    </div>
                    <div class="review_content">
                        <h2>虾米影评</h2>
                        <p>08-12</p>
                    </div>
                </div>
                <div class="review_right">
                    <p>
                        <span class="review_zan"></span>3
                    </p>
                    <p>
                        <span class="review_pl"></span>9
                    </p>
                </div>
            </div>
            <div class="hot_review_box">
                <h3 class="hot_review_title">《背叛者联盟带你游遍欧洲风光》</h3>
                <p>这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替</p>
            </div>
        </div>
        <div class="paly_mad">
            <h3 class="paly_title">
                全部热评
            </h3>
            <div class="hot_review">
                <div class="review_left">
                    <div class="review_img">
                        <img src="../img/head.jpg">
                    </div>
                    <div class="review_content">
                        <h2>虾米影评</h2>
                        <p>08-12</p>
                    </div>
                </div>
                <div class="review_right">
                    <p>
                        <span class="review_zan"></span>3
                    </p>
                    <p>
                        <span class="review_pl"></span>9
                    </p>
                </div>
            </div>
            <div class="hot_review_box">
                <h3 class="hot_review_title">《背叛者联盟带你游遍欧洲风光》</h3>
                <p>这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替这里，这里显示的内容最多显示四行，剩下的可以用省略号来代替</p>
            </div>
        </div>
    </div>
</template>
<script>
	export default{
		methods:{
			routerBack(){
				this.$router.go(-1);
			},
             playClick(num){
                this._dom = document.getElementsByTagName('video')[num];
                this.isPlay = !this.isPlay;
                this._dom.play(); 
                this._dom.setAttribute("controls","controls")
                var introduction= document.getElementsByClassName('bf_btn')[num];
                 introduction.style.display = "none";
            }
      	}
	}
</script>
<style>
	@import '../css/play.css'
</style>