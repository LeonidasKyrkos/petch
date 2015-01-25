'use strict';

var $ = require('jquery');

console.log("jQuery verison: "+$().jquery);



(function(){

	var $playButton = $('.js-play');

	$playButton.on('click',activate);

	function activate() {
		$playButton.toggleClass('hide');
	}

})();