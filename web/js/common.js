/**
 * 共用方法库
 * author： znyaiw
 * date：2016-10-18
 */
(function(window) {
	var z = {};
	/**
	 * 获取话题标题和内容
	 * 参数：
	 * @param {String} str
	 * 返回数据：
	 * @param {Object} {topic: '...', content: '...'}
	 */
	z.getTopicCon = function(str) {
		var _str = str.trim();
	    if(_str.indexOf('#') == 0) {
	        var _2 = _str.substring(1, _str.length).indexOf('#');
	        if(_2 > -1) {
	            return {
	                topic: _str.substring(1, _2+1),
	                content: _str.substring(_2+2, _str.length)
	            }
	        }
	    }
	    return {
	        topic: '',
	        content: _str
	    }
	};
	/**
	 * 格式化标准时间
	 * 参数：
	 * @param {String} str
	 * 返回数据：
	 * @param {String} 
	 */
	z.formatTime = function(v) {
		var t = {
			y : v.getFullYear(),
	    	m : v.getMonth() + 1 < 10 ? ('0' + v.getMonth() + 1) : v.getMonth() + 1,
	    	d : v.getDate() < 10 ? ('0' + v.getDate()) : v.getDate(),
	    	h : v.getHours() < 10 ? ('0' + v.getHours()) : v.getHours(),
	    	mi : v.getMinutes() < 10 ? ('0' + v.getMinutes()) : v.getMinutes(),
	    	s : v.getSeconds() < 10 ? ('0' + v.getSeconds()) : v.getSeconds()
		};
		
		return t.y + '-' + t.m + '-' + t.d + ' ' + t.h + ':' + t.mi + ':' + t.s;
	};
	/**
	 * 设置匿名身份和头像
	 * 参数：
	 * @param {Array} uinfo
	 * @param {Int} uid
	 * @param {Array} desc
	 * @param {Int} did
	 * 返回数据：
	 * @param {String} 
	 */
	z.setUserInfo = function(user_info, uinfo, uid, desc, did) {
		user_info.uid = uid;
		user_info.did = did;
		user_info.nickname = desc[did] + uinfo[uid].nickname;
		user_info.avatar = uinfo[uid].avatar;
		return user_info;
	};
	// 以时间戳为种子产生随机数
	/**
	 * 
 	 * @param {Object} v
	 */
	z.randByTime = function(v) {
		return Date.parse(new Date()) / 1000 % v;
	};
	// 以数组方式产生随机数
	z.randByArray = function(v) {
		var orArr = new Array;	// 声明数组
		// 数组赋值
		for(var i = 0; i < v; ++i) {
			orArr[i] = i;
		}
		orArr.sort(function() {
			return 0.5 - Math.random();
		});
		return orArr[0];
	};
	// 自动滚动到某个位置
	z.scrollToPos = function(x, y) {
		var curPos = document.documentElement.scrollTop || document.body.scrollTop;
		if(curPos > 0) {
			window.scrollTo(x, y);
		}
	};
	
	window.$z = z;
})(window);