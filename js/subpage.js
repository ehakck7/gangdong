var lnb = {
	init : function(){
		this.lnbAction();
	},
	lnbAction : function(){
		var lnbList = document.getElementById('lnb-list')
		for(var i = 0; i < lnbList.children.length; i++){
			lnbList.children[i].children[0].onclick=function(){
				for(var j = 0; j < lnbList.children.length; j++){
					lnbList.children[j].className=''
				}
				this.parentElement.className='lnb-on'
				return false
			}
		}
	}
}

window.onload=function(){
	lnb.init()
	gnbdepth()
}
