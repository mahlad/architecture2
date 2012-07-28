window.onload=function(){
		//for first slideshow*/
		var currentSlide=0, currentLi=0,
			imgSrc=document.getElementsByClassName('sl-FR-Out').item(0).getElementsByTagName('img'),
			contentLeft=document.getElementsByClassName('sectionFirst').item(0);
		goSlideFirst=function(n){
			if(n>listFirst.length-1)n=0; 
			imgSrc.item(0).src="images/first-slide-"+n+".jpg";
			listFirst.item(currentSlide).className='';
			listFirst.item(n).className='active';
			contentLeft.style.right=(-375*n)+'px';
			currentSlide=n;
		
		}
		nextFirst=function(){
			goSlideFirst(currentSlide+1);
		}
		var listFirst=document.getElementsByClassName('navFirst').item(0).getElementsByTagName('li');
		for(var i=0;i<listFirst.length;i++ ){
			(function(j){
				listFirst.item(j).onclick=function(){
					goSlideFirst(j);
				}
			})(i)	
		}
		setInterval(nextFirst,3000);
		//for second slide show on home page
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