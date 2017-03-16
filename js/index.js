// banner轮播导航
var num=0; //声明图片个数
function img1(){  //建立方法名函数
	var img=document.getElementById("Picture");//找出img标签
	if(num>=6){
	num=0;
	}
	num++;
	img.src="img/"+"dd_scroll_"+num+".jpg";
	var li=document.querySelectorAll(".left ul li");
	for(var i=0;i<li.length;i++){
			li[i].style.backgroundColor="";
			li[i].style.color="";
		}
		li[num-1].style.backgroundColor="#ff9966";
		li[num-1].style.color="#fff";
}
var banner=document.getElementsByClassName("banner-bottom")[0]; //找到轮播图片div
var img=document.getElementById("Picture");//找出img标签
var time=setInterval(img1,1000);
function bs(){
	var li=document.querySelectorAll(".left ul li");//找出所有的li标签 
	for(var i=0;i<li.length;i++){
		li[i].index=i;
		li[i].onmouseover=function(){
		for(var i=0;i<li.length;i++){
			li[i].style.backgroundColor="";
			li[i].style.color="";
		}
			this.style.backgroundColor="#ff9966";
			this.style.color="#fff";
		img.src="img/"+"dd_scroll_"+(this.index+1)+".jpg";
			clearInterval(time);
		}
		li[i].onmouseout=function(){
			time=setInterval(img1,1000);
		}
	}
}
bs();

// 最新上架切换
var ud=document.getElementsByClassName("book-new"); //获取四个标题的div
var Tab=document.getElementsByClassName("tab");//获取四大的个div
	ud[0].style.backgroundImage="url(img/dd_book_bg2.jpg)";
for(var i=0;i<ud.length;i++){
	ud[i].index=i;
	ud[i].onmouseover=function(){
	for(var i=0;i<ud.length;i++){
		// ud[i].index=i;
		ud[i].style.backgroundImage="";
		ud[i].style.backgroundImage="url(img/dd_book_bg1.jpg)";
		Tab[i].style.display="none";
		// console.log(Tab[i])
	}
		this.style.backgroundImage="";
		this.style.backgroundImage="url(img/dd_book_bg2.jpg)";
		Tab[this.index].style.display="block";
		console.log(Tab[this.index].style.display);
	}
}
//书讯快递轮播
var obj=document.getElementsByClassName("right-center")[0]; //找出div
var book=document.querySelectorAll(".main-right-top ul")[0];//找出ul;
function BN(){
	if(book.offsetHeight-obj.scrollTop<=260){  //获取book减去div最顶端与可见内容的距离
		obj.scrollTop=0;
	}else{
		obj.scrollTop++;
	}
}
var timer=setInterval(BN,30);
obj.onmouseover=function(){
	clearInterval(timer);
}
obj.onmouseout=function(){
	timer=setInterval(BN,30);
};