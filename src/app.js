import './stylus/index.styl'
import './stylus/media.styl'
import {data} from './data/data.js'


Vue.prototype.addClass = function(dom, classname){
	if(dom.className) {
		dom.className = dom.className + ' ' + classname
	} else{
		dom.className = classname
	}
}


var app = new Vue({
	el: '#app',
	data() {
		return {
			menu: data['menu'],
			header: data['header'],
			server: data['server'](),
			process: data['process'](),
			about: data['about'](),
			contact: data['contact'](),
			footer: data['footer'](),
			heightArr: [],
			mStand: 'stand-1',
			SCROLL_TOP: 0
		}
	},
	beforeCreate() {

	},
	mounted() {
		// var self = this
		this.addClass(this.$refs.banner, 'Animated')
		var Refs = this.$refs
		var heightArr = []
		Object.keys(Refs).forEach(function(key, index){
			heightArr[index] = (Refs[key].offsetHeight - 50) + (!!heightArr[index-1] ? heightArr[index-1] : 0)

		})
		this.heightArr = heightArr
		window.addEventListener('scroll', () => {
			this.SCROLL_TOP = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
		}, true)

		console.log(this.heightArr)
	},
	methods: {
		scrollHandler() {
			
		},
		MenuHover(i) {
			this.mStand = 'stand-'+(i+1)
		}
	},
	watch: {
		SCROLL_TOP(n, o) {
			// console.log(n, o)
			if(n < this.heightArr[0]){
				this.mStand = 'stand-1'
			}else if(n < this.heightArr[1]){
				this.mStand = 'stand-2'
			}else if(n < this.heightArr[2]){
				this.mStand = 'stand-3'
			}else if(n < this.heightArr[3]){
				this.mStand = 'stand-4'
			}else{
				this.mStand = 'stand-5'
			}
		}
	}
})