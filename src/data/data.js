
var menu = [
		{
			title: '首页'
		},
		{
			title: '开发服务',
			description: 'development service'
		},
		{
			title: '项目开发流程',
			description: 'project development process'
		},
		{
			title: '关于我们',
			description: 'about caiton network'
		},
		{
			title: '联系我们',
			description: 'contact us'
		}
	]

export var data = {
	menu: menu,
	header: [
		{
			des_cn: '专注于互联网开发',
			des_en: 'focus on internet development'
		},
		{
			des_cn: '专业铸造品质',
			des_en: 'professional casting quality'
		},
		{
			des_cn: '为您提供最全的技术服务',
			des_en: 'to provide you with the most comprehensive<br/> technical service'
		}
	],
	server: function(){
		var serObj = {}
		serObj.head = menu[1]
		serObj.list = [
			{
				title: '官网开发',
				description: ''
			},
			{
				title: '手机端开发',
				description: ''
			},
			{
				title: '微信公众号开发',
				description: ''
			},
			{
				title: '小程序开发',
				description: ''
			}
		]
		serObj.des = [
			'CAITON 为您提供',
			'最有价值的解决方案'
		]
		return serObj
	},
	process: function(){
		var proObj = {}
		proObj.head = menu[2]
		proObj.list = [
			{
				title: '原型开发',
				description: ''
			},
			{
				title: 'UI设计',
				description: ''
			},
			{
				title: '技术研发',
				description: ''
			},
			{
				title: '测试上线',
				description: ''
			},
			{
				title: '维护服务',
				description: ''
			}
		]
		return proObj
	},
	about: function(){
		var aboutObj = {}
		aboutObj.head = menu[3]
		aboutObj.content = {
			name_cn: '珠海财通网络有限公司',
			name_en: 'Zhuhai Caiton Network Co., Ltd.',
			logo: '../images/logo-big.png',
			description: '财通网络2018年创立于美丽的滨海城市珠海，是一家专注于网络产品开发的软件公司，如果你刚好有网络开发的需求，可以通过下面的联系方式联系我们，我们将为你提供专业的网络开发服务。'
		}
		return aboutObj
	},
	contact: function() {
		var contentObj = {}
		contentObj.head = menu[4]
		contentObj.content = {
			'Wechat': 'lipeijian2202',
			'QQ': '200814174',
			'Email': 'lpjsteel@hotmail.com'
		}
		return contentObj
	},
	footer: function() {
		var footerObj = {}
		footerObj.menu = menu.slice(1)
		footerObj.copyright = 'Copyright © 2018-'+ new Date().getFullYear() +' caiton 财通网络'

		return footerObj
	}

}