var lnbul;
var currentnum=0;

function lnb(num){
	if(currentnum!=num){
		lnbul[num].className='lnb-on';
		lnbul[currentnum].className='';
	}
	lnbul[num].className='lnb-on';
	currentnum=num;
}

function lnbit(){
	lnbul=document.getElementById('lnbul').getElementsByTagName('li');
	for(i=0; i<lnbul.length; i++){
		lnbul[i].num=i;
		lnbul[i].onclick=function(){
			lnb(this.num);
			return false;
		}
	}
}
window.onload=function(){
	lnbit();
	gnbdepth();
	login();
}