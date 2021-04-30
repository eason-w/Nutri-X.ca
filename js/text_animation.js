

	function tm_animate_text(){
	
		"use strict";
		
		var animateSpan			= jQuery('.animation_text_word');
		
			animateSpan.typed({
				strings: [" ", "Micronutrient Deficiencies", "Agricultural Problems", "Food", "Hidden Health Crisis"],
				loop: true,
				startDelay: 2,
				backDelay: 3
			});
	}

	jQuery(document).on('ready', function () {
		(function ($) {
			tm_animate_text();
		})(jQuery);
	});
