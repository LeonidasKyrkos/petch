'use strict';

var $ = require('jquery');

console.log("jQuery verison: "+$().jquery);



(function(){

	var $playButton = $('.js-play');
	var $playlist = $('.js-playlist');

	$playButton.on('click',activate);

	function activate() {
		$playButton.toggleClass('hide');
		$playlist.toggleClass('visible');
	}

})();