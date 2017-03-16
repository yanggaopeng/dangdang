// 挑选商品
var ph=document.getElementById("IMG");  //获取第一个img;
var obj=document.getElementsByClassName("Sort-center")[0];
var div=document.getElementsByClassName("Sort-title")[0];
obj.style.display="block";
ph.onclick=function(){
	if(obj.style.display=="block"){
		obj.style.display="none";
		ph.src="img/"+"shopping_arrow_up"+".gif";
	}else{
		obj.style.display="block";
		ph.src="img/"+"shopping_arrow_down"+".gif";
	}

}

//购物车变色
var SHOP=document.getElementsByClassName("Shop-center")[0];
SHOP.onmouseover=function(){
	SHOP.style.backgroundColor="#fefbf2";
}
SHOP.onmouseout=function(){
	SHOP.style.backgroundColor="";
}

//购物车计算
var INP=document.querySelectorAll(".Shop-center .Inp input");
var dangdangcost=document.querySelectorAll(".Shop-center .cost");
var shopzj=document.querySelectorAll(".Total .Sp p");
var k,s,m,sum=0;
var pricetotal=[];
for(var i=0;i<INP.length;i++){
	INP[i].index=i;
	INP[i].onchange=function(){
		 var k=INP[this.index].value;
		 var s=parseInt(k*dangdangcost[this.index].innerHTML).toFixed(1);
		 pricetotal.push(s);
		 zj();
	}
}
function zj(){
	var sTotals=document.querySelectorAll(".Total .Sp p");
	for(var i=0;i<pricetotal.length;i++){
		m=parseInt(pricetotal[i]);
		sum+=m;
	}
	console.log(sum);
}
