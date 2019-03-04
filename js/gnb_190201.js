/* gnb */
function gnbdepth(){
	var gnb=document.getElementById('gnbmenu');
	var submenu0=gnb.children[0].getElementsByTagName('ul')[0];
	var submenu1=gnb.children[1].getElementsByTagName('ul')[0];
	var submenu2=gnb.children[2].getElementsByTagName('ul')[0];
	var submenu3=gnb.children[3].getElementsByTagName('ul')[0];
	var submenu4=gnb.children[4].getElementsByTagName('ul')[0];
	var submenu5=gnb.children[5].getElementsByTagName('ul')[0];
	var submenu6=gnb.children[6].getElementsByTagName('ul')[0];
	var submenu7=gnb.children[7].getElementsByTagName('ul')[0];
	
	gnb.onmouseover=function(){
		submenu0.style.display='block';
		submenu1.style.display='block';
		submenu2.style.display='block';
		submenu3.style.display='block';
		submenu4.style.display='block';
		submenu5.style.display='block';
		submenu6.style.display='block';
		submenu7.style.display='block';
	}

	gnb.onmouseout=function(){
		submenu0.style.display='';
		submenu1.style.display='';
		submenu2.style.display='';
		submenu3.style.display='';
		submenu4.style.display='';
		submenu5.style.display='';
		submenu6.style.display='';
		submenu7.style.display='';
	}
}
