/* m-img */
var currentnum=0;
var num=0;
var mslide;
var mbtn1;
var mbtn2;
var mcircle;
var mtime;

function select(num){
	if(currentnum!=num){
		mslide[num].className='on';
		mslide[currentnum].className='';
		mcircle[num].className='on';
		mcircle[currentnum].className='';

		mcircle[num].onmouseover=function(){
			clearInterval(mtime);
		}
		mcircle[num].onmouseout=function(){
			clearInterval(mtime);
			mtime=setInterval(nextmbtn, 3000);
		}
		mbtn1.onmouseover=function(){
			clearInterval(mtime);
		}
		mbtn1.onmouseout=function(){
			clearInterval(mtime);
			mtime=setInterval(nextmbtn, 3000);
		}
		mbtn2.onmouseover=function(){
			clearInterval(mtime);
		}
		mbtn2.onmouseout=function(){
			clearInterval(mtime);
			mtime=setInterval(nextmbtn, 3000);
		}
	}
	currentnum=num;
}

function prevmbtn(){
	num--
	if(num<0){
		num=mslide.length-1;
	}
	select(num);
}

function nextmbtn(){
	num++
	if(num>mslide.length-1){
		num=0;
	}
	select(num);
}

function init(){
	mslide=document.getElementById('m-slide').getElementsByTagName('li');
	mcircle=document.getElementById('m-circle').getElementsByTagName('li');
	mbtn1=document.getElementById('m-btn1');
	mbtn2=document.getElementById('m-btn2');
	
	mtime=setInterval(nextmbtn, 3000);
	
	for(i=0; i<mcircle.length; i++){
		mcircle[i].num=i;
		mcircle[i].onclick=function(){
			num=this.num;
			select(this.num);
		}
	}
}

/* notice */
var notice;
var noticecurrent=0;

function noticemenu(num){
	if(noticecurrent!=num){
		notice[num].className='on';
		notice[noticecurrent].className='';
	}
	noticecurrent=num;
}

function noticeit(){
	notice=document.getElementById('notice-list').getElementsByTagName('li');
	for(x=0; x<notice.length; x++){
		notice[x].ntc=x;
		notice[x].onclick=function(){
			noticemenu(this.ntc);
			return false;
		}
	}
}

/* slide-banner */
var imgwidth=330;
var isnum=0;
var stime;
var slidebtn;

function slideprev(){
	var slidebanner=document.getElementById('slide-banner-list')
	var slidebannerli=slidebanner.getElementsByTagName('li')

	isnum--
	if(isnum<0){
		isnum=slidebannerli.length-1;
	}
	slidebanner.style.left=-(imgwidth*isnum)+'px';
}
function slidestop(){
	clearInterval(stime);
}
function slideplay(){
	stime=setInterval(slidenext, 2000);
}
function slidenext(){
	var slidebanner=document.getElementById('slide-banner-list')
	var slidebannerli=slidebanner.getElementsByTagName('li')

	isnum++
	if(isnum>slidebannerli.length-1){
		isnum=0;
	}
	slidebanner.style.left=-(imgwidth*isnum)+'px';
}

function slidemove(){
	stime=setInterval(slidenext, 2000);
	slidebtn=document.getElementById('slide-banner-btn');

	slidebtn.onmouseover=function(){
		clearInterval(stime);
	}
	slidebtn.onmouseout=function(){
		clearInterval(stime);
		stime=setInterval(slidenext, 2000);
	}
}

/* banner */
var bannerwidth=145;
var bannernum=0;
var btime;

function bannerprev(){
	var bimgul=document.getElementById('b-img-list');
	var bimgli=bimgul.getElementsByTagName('li');

	bannernum--
	if(bannernum<0){
		bannernum=bimgli.length-7;
	}
	bimgul.style.left=-(bannerwidth*bannernum)+'px';
}

function bannerstop(){
	var bannerstop=document.getElementById('bannerstop');
	var bannerplay=document.getElementById('bannerplay');

	if(bannerstop.className!='banneroff'){
		clearInterval(btime);
		bannerstop.className='banneroff';
		bannerplay.className='';
	}
}

function bannerplay(){
	var bannerstop=document.getElementById('bannerstop');
	var bannerplay=document.getElementById('bannerplay');

	if(bannerplay.className!='banneroff'){
		clearInterval(btime);
		btime=setInterval(bannernext, 1500);
		bannerstop.className='';
		bannerplay.className='banneroff';
	}
}

function bannernext(){
	var bimgul=document.getElementById('b-img-list');
	var bimgli=bimgul.getElementsByTagName('li');

	bannernum++
	if(bannernum>bimgli.length-7){
		bannernum=0;
	}
	bimgul.style.left=-(bannerwidth*bannernum)+'px';
}

function bannermove(){
	btime=setInterval(bannernext, 1500);
}

window.onload=function(){
	init();
	noticeit();
	slidemove();
	bannermove();
	gnbdepth();
}