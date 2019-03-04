function login(){
	var loginid=document.getElementsByName('loginid')[0];
	var loginpass=document.getElementsByName('loginpass')[0];
	loginid.onclick=function(){
		this.value='';
	}
	loginpass.onclick=function(){
		this.value='';
	}
}