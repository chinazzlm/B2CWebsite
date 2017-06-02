var num=0;//初始化图片轮播的位置
function bannerChange(bannerNum,imgBox,position,bannerWidth){ 
//bannerNum为地下控制板，imgBox为图片ul,indexi为位置的index,bannerWidth为图片大小
	num=position; //先确定显示的图片是哪张 初始化num
	if(num>=bannerNum.length){
		num=0;
		imgBox.style.left= -bannerWidth*num + "px"; //图片盒子ul的left依据大小改变位置
		for(var j=0;j<bannerNum.length;j++){ //所有显示块清零，只有该位置背景颜色发生改变
			bannerNum[j].style.background="#FFF"; 
		}
		bannerNum[num].style.background="#FF7700";
	}
	else{
		imgBox.style.left= -bannerWidth*num + "px";
		for(var j=0;j<bannerNum.length;j++){
			bannerNum[j].style.background="#FFF";
		}
		bannerNum[num].style.background="#FF7700";
	}
	num++; //改变num的值 并返回
}

// 添加事件方法
function addHander(ele,type,handler){
	if (ele.addEventListener) {
		ele.addEventListener(type,handler,false);
	}else if(ele.attachEvent){
		ele.attachEvent('on'+type,handler);
	}else{
		ele['on'+type]=handler;
	}
}

// 获取classname
function getByCls(ele,clsname) {
	var result=[];
	ele=ele||document;
	var eles=ele.getElementsByTagName('*')
	for (var i = eles.length - 1; i >= 0; i--) {
		if(eles[i].className==clsname){
			result.push(eles[i]);
		}
	}
	return result;
}