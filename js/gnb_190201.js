/* gnb */
// ie classname 실행
getElementsByClassNameCompatible = function(className) {
	if(document.getElementsByClassName) {
		return document.getElementsByClassName(className);
	} 
    
    var regEx = new RegExp('(^| )'+className+'( |$)');
	var nodes = new Array();
    var elements = document.body.getElementsByTagName("*");
	var len = elements.length;
    for(var i=0; i < len ; i++) {
        if(regEx.test(elements[i].className)) {
			nodes.push(elements[i]);
		}
	}
	elements = null;
    return nodes;
}

function gnbdepth(){
	var gnb = document.getElementById('gnbmenu')
	var submenu = getElementsByClassNameCompatible('submenu')

	for(var i = 0; i < gnb.children.length; i++){
		gnb.children[i].onmouseover=function(){
			for(var j = 0; j < submenu.length; j++)
			submenu[j].style.display='block'
		}
	
		gnb.children[i].onmouseout=function(){
			for(var k = 0; k < submenu.length; k++){
				submenu[k].style.display='none'
			}
		}
	}
}
