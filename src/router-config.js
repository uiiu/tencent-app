import homeView from './components/home.vue'
import hotView from './components/hot.vue'
import vipView from './components/vip.vue'
import dokiView from './components/doki.vue'
import mineView from './components/mine.vue'
import playView from './components/play.vue'

export default[
	{
		path:"/",
		redirect:'/home'
	},
	{
		path:"/home",
		component:homeView
	},
	{
		path:"/hot",
		component:hotView
	},
	{
		path:"/vip",
		component:vipView
	},
	{
		path:"/doki",
		component:dokiView
	},{
		path:"/mine",
		component:mineView
	},{
		path:"/play",
		component:playView
	}
]