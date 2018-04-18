<template>
	<div id="hot">
        <div class="hot_title_box">
            <h3 class="hot_title">
                热点
                <span class="hot_search"></span>
            </h3>
        </div>
        <div class="hot_list">
            <div class="video_box">
                <video poster="../../src/img/preview_img1.jpg" src="../../src/video/video_1.mp4" id="myvideo">

                </video>
                <div class="mask_box">
                    <h4 class="mask_title">
                        这是一段话的简介这是一段话的简介这是一段话的简介
                    </h4>
                    <div class="bf_btn" @click="playClick(0)">
                        <span class="hot_bf"></span>
                        <span class="num_flow">16M</span>流量
                    </div>
                </div>
            </div>
            <div class="hot_list_bottom">
                <div class="label_box">
                    <a href="#">标签</a>
                    <a href="#">标签</a>
                    <a href="#">标签</a>
                </div>
                <div class="comment_share">
                    <span class="hot_lt"></span>19
                    <span class="hot_share"></span>
                </div>
            </div>
        </div>
        <div class="hot_list">
            <div class="video_box">
                <video poster="../../src/img/preview_img2.jpg" src="../../src/video/video_1.mp4">
                </video>
                <div class="mask_box">
                    <h4 class="mask_title">
                        这是一段话的简介这是一段话的简介这是一段话的简介
                    </h4>
                    <div class="bf_btn" @click="playClick(1)">
                        <span class="hot_bf"></span>
                        <span class="num_flow">16M</span>流量
                    </div>
                </div>
            </div>
            <div class="hot_list_bottom">
                <div class="label_box">
                    <a href="#">标签</a>
                    <a href="#">标签</a>
                    <a href="#">标签</a>
                </div>
                <div class="comment_share">
                    <span class="hot_lt"></span>19
                    <span class="hot_share"></span>
                </div>
            </div>
        </div>
        <div class="hot_list">
            <div class="video_box">
                <video poster="../../src/img/preview_img3.jpg" src="../../src/video/video_1.mp4">
                </video>
                <div class="mask_box">
                    <h4 class="mask_title">
                        这是一段话的简介这是一段话的简介这是一段话的简介
                    </h4>
                    <div class="bf_btn" @click="playClick(2)">
                        <span class="hot_bf"></span>
                        <span class="num_flow">16M</span>流量
                    </div>
                </div>
            </div>
            <div class="hot_list_bottom">
                <div class="label_box">
                    <a href="#">标签</a>
                    <a href="#">标签</a>
                    <a href="#">标签</a>
                </div>
                <div class="comment_share">
                    <span class="hot_lt"></span>19
                    <span class="hot_share"></span>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
	export default{
        mounted(){
            this.hotSlider()
          },
          methods:{
            hotSlider(){
                $(function () {
                    var innerSwiper = new Swiper('.relevant_swiper', {
                        direction: 'horizontal',
                        slidesPerView: "auto",
                        spaceBetween: 5,
                        freeMode: true,
                        freeModeMomentumRatio: 0,
                    })
                })
            },
            playClick(num){
                this._dom = document.getElementsByTagName('video')[num];
                this.isPlay = !this.isPlay;
                this._dom.play(); 
                this._dom.setAttribute("controls","controls")
                var introduction= document.getElementsByClassName('mask_box')[num];
                 introduction.style.display = "none";
            },
        }
    }
</script>
<style>
	@import'../css/hot.css'
</style>