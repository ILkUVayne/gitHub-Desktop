$(function(){
//	计算滑动时间
	var clearTime = null;
//	当前显示的图片
	var $befordex = 0;
	var $befordexBot = 0;
//	即将显示的图片
	var $index = 0;
	var $indexBot = 0;
	
//	点击向右
	$("#box .rightbtn").click(function(){
		$index ++;
		if($index > 2){
			$index = 0;	
		}
		scrollPlay();
		$befordex = $index;
//		关闭计时器
		clearInterval(clearTime);
		autoPlay();
	});
//	点击向左
	$("#box .leftbtn").click(function(){
		$index --;
		if($index < 0){
			$index = 2;
		}
		scrollPlay();
		$befordex = $index;
//		关闭计时器
		clearInterval(clearTime);
		autoPlay();
	});	

//	bot点击向右
	$(".btnright").click(function(){
		$indexBot ++;
		if($indexBot > 9){
			$indexBot = 9;
			return;	
		}
		scrollBotPlay();
		$befordexBot = $indexBot;
		console.log($indexBot);
		console.log($befordexBot);
//		关闭计时器
		// clearInterval(clearTime);
		// autoPlay();
	});
//	点击向左
	$(".btnleft").click(function(){
		$indexBot --;
		if($indexBot < 0){
			$indexBot = 0;
			return;
		}
		scrollBotPlay();
		$befordexBot = $indexBot;
		console.log($indexBot);
		console.log($befordexBot);
//		关闭计时器
		// clearInterval(clearTime);
		// autoPlay();
	});	
	
//	当鼠标停于元素上方 发生mouseover事件
	$("#list li").mouseover(function(){
//		停掉计时器
		clearInterval(clearTime);
//		获取序列号,当前序列号等于这个li的下标
		$index = $(this).index();
		scrollPlay();
		$befordex = $index;
	}).mouseout(function(){
//		当鼠标移开 继续滑动
		autoPlay();
	})
	
	autoPlay();
	
//	开始滑动
	function autoPlay(){
		clearTime = setInterval(function(){
			$index++;
			if($index > 2){
				$index = 0;
			}
			scrollPlay();
			$befordex = $index;
		},4000)
	}

//  封装滑动动画
	function scrollBotPlay(){
// 		$("#list li").eq($index).addClass("hover").siblings().removeClass("hover");
// //		向左移动
		if($indexBot > $befordexBot){
//			向左滑
			$(".content-2-4-2-list ul").stop(true,true).animate({"left":"-=14.1rem"});
		}else if($indexBot < $befordexBot){
			$(".content-2-4-2-list ul").stop(true,true).animate({"left":"+=14.1rem"});
		}
	}
	
//  封装滑动动画
	function scrollPlay(){
		$("#list li").eq($index).addClass("hover").siblings().removeClass("hover");
//		向左移动
		if($index > $befordex){
//			向左滑
			$("#imgbox img").eq($befordex).stop(true,true).animate({"left":"-96.3rem"});
			$("#imgbox img").eq($index).css("left","96.3rem").stop(true,true).animate({"left":"0rem"});
		}else if($index < $befordex){
			$("#imgbox img").eq($befordex).stop(true,true).animate({"left":"96.3rem"});
			$("#imgbox img").eq($index).css("left","-96.3rem").stop(true,true).animate({"left":"0rem"});
		}
	}
});

var down = false;
//滚动监听
$(window).scroll(function(){
	if($(this).scrollTop()>100){
//		固定导航栏
		$(".header-wrapper-bottom").addClass("fixed");
//		固定动画
		if(down == false){
			$(".header-wrapper-bottom").css({"top":"-40px"});
			$(".header-wrapper-bottom").animate({"top":"0"},500);
			down = true;
		}
	}else{
		$(".header-wrapper-bottom").removeClass("fixed");
		down = false;
	}
});