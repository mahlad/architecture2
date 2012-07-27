window.onload=function(){
		var currentMessage=0, message=document.getElementsByClassName('message').item(0);
		goMessage=function(n){
			if(n>list.length-1)n=0;
			list.item(currentMessage).className='';
			list.item(n).className='active';
			message.style.right=(-960*n)+'px';
			currentMessage=n;
				
		}
		next=function(){
			goMessage(currentMessage+1);	
		}
		var list=document.getElementsByClassName('nav').item(0).getElementsByTagName('li');
		for(var i=0;i<list.length;i++){
			(function(j){
				list.item(j).onclick=function(){
					goMessage(j);
				}
			})(i);
		}
		setInterval(next,3000);
	}