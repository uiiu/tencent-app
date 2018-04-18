<template>
	 <!-- footer -->
     <div id="nav">
        <div id="footer">
            <ul class="footer_box">
                <router-link tag="li" to='/home' class="home footer_list" active-class="current">
                    <a href="javascript">
                        <span class="footer_icon"></span>
                        <span class="footer_name">首页</span>
                    </a>
                </router-link>
                <router-link tag="li" to='/hot' class="hot footer_list" active-class="current">
                    <a href="#">
                      <span class="footer_icon"></span>
                      <span class="footer_name">热门</span>
                    </a>

                </router-link>
                <router-link tag="li" to='/vip' class="vip footer_list" active-class="current">
                   <a href="#">
                    <span class="footer_icon"></span>
                    <span class="footer_name">vip会员</span>
                  </a>

                </router-link>
                <router-link tag="li" to='/doki' class="doki footer_list" active-class="current">
                      <a href="#">
                    <span class="footer_icon"></span>
                    <span class="footer_name">doki</span>
                  </a>

                </router-link>
                <router-link tag="li" to='/mine' class="mine footer_list" active-class="current">
                   <a href="#">
                    <span class="footer_icon"></span>
                    <span class="footer_name">我的</span>
                  </a>

                </router-link>
            </ul>
        </div>
    </div>

</template>
<script>

</script>
<style>

</style>