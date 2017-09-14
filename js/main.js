var screenshot;

document.addEvent('domready', function(){
	var navs = $('slideshow_nav').getElements('a');
	var navsh3 = $('txt_slideshow').getElements('h3');
	
	screenshot = new SlideShow('img_slideshow', {
		autoplay: true,
		delay: 6000,
		duration: 500,
		transition: 'crossFade',
		onShow: function(data){
			/*navs[data.previous.index].removeClass('current');
			navs[data.next.index].addClass('current');*/
			navsh3[data.previous.index].removeClass('current');
			navsh3[data.next.index].addClass('current');
			
			myAccordion.display(data.next.index);
		}
	});
	
	var myAccordion = new Fx.Accordion($$('.toggler'), $$('.txt_item'), {
	    display: 0,
	    alwaysHide: false,
	    initialDisplayFx: false,
	    onActive: function(data){
	    	//console.log('active')
	    }
	    
	});
	
	$$('.img_slideshow_item').each(function(el, index){
		console.log(el);
		el.addEvent('click', function(ev) {
			console.log('next')
			ev.stop();
			screenshot.show('next');
			screenshot.pause();
		});
	});
	
	$$('.toggler').each(function(el, index){
	    el.addEvent('click', function(event){
	      event.stop();
	      screenshot.show(index);
	      screenshot.pause();
	    });
	});
	
	
	/*$$('.nav_item').each(function(el, index){
	    el.addEvent('click', function(event){
	      event.stop();
	      screenshot.show(index);
	      screenshot.pause();
	    });
	});*/

});

