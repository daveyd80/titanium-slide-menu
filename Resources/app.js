
(function() {
	

	var win = Titanium.UI.createWindow({
	  title: 'Main Window'
	});
	
	
	// bottom view stuff
	var bottomView = Ti.UI.createView({
		width: Ti.UI.FILL,
		height:Ti.UI.FILL,
		backgroundColor:'#ccc',
		layout:'vertical'
	});
	
	win.add(bottomView);
	
	
	// create a few list items
	function createListItem(i) {
		var listLbl = Ti.UI.createLabel({
		  color: '#292929',
		  font: { fontSize:20, fontWeight:200 },
		  text: 'List item ' + i,
		  textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
		  top:( i == 1 ) ? 30 : 20,
		  left: 10,
		  id:'triggerClick' // need this for click event later
		});
		
		return listLbl;
	}

	
	for(var i=1; i < 6; i++) {
		bottomView.add(createListItem(i));
	}
	

		
	// Top View Stuff
	var topView = Ti.UI.createView({
		width: Ti.UI.FILL,
		height:Ti.UI.FILL,
		left:0,
		backgroundColor:'#999',
		open:false
	});
	
	win.add(topView);
	
	var toggleMenuBtn = Titanium.UI.createView({
	   top:26,
	   left:8,
	   width:44,
	   height:44,
	   borderRadius:4,
	   backgroundColor:'#656565'
	});
	
	topView.add(toggleMenuBtn);
	
	
	// animations we need
	var slideOpenAnimation = Titanium.UI.createAnimation({
		left: Ti.Platform.displayCaps.platformWidth - 58, // device width minus 60pts
		duration:300,
		curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
	
	var slideClosedAnimation = Titanium.UI.createAnimation({
		left:0,
		duration:300,
		curve: Titanium.UI.ANIMATION_CURVE_EASE_IN_OUT
	});
	
	
	// button actions
	toggleMenuBtn.addEventListener('click',function(e) {
		if (topView.open == false) {
			  topView.animate(slideOpenAnimation);
	  		  topView.open = true;
		} else {
			  topView.animate(slideClosedAnimation);
	  		  topView.open = false;
		}
	});
	
	
	// close menu on item click actions
	bottomView.addEventListener('click',function(e) {
		if (e.source.id == 'triggerClick') {
		  topView.animate(slideClosedAnimation);
		  topView.open = false;
		}
	});
	
	
	// open the window
	win.open();
	

})();
