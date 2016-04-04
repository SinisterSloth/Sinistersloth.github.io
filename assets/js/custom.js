(function($) {

// prettyPhoto
	jQuery(document).ready(function(){
		jQuery('a[data-gal]').each(function() {
			jQuery(this).attr('rel', jQuery(this).data('gal'));
		});  	
		jQuery("a[data-rel^='prettyPhoto']").prettyPhoto({animationSpeed:'slow',theme:'light_square',slideshow:false,overlay_gallery: false,social_tools:false,deeplinking:false});
	}); 

        var sounds = [
	
	
	
	"./assets/img/sounds/orgasmfemale.wav",
	"./assets/img/sounds/maleorgasm.wav",
			  
			  
			  ],
    oldSounds = [];

var playSounds = function () {
    var index = Math.floor(Math.random() * (sounds.length)),
        thisSound = sounds[index];
    
        oldSounds.push(thisSound);
        sounds.splice(index, 1);
    
        if (sounds.length < 1) {
            sounds = oldSounds.splice(0, oldSounds.length);
        }
    
$("#element").html("<audio autoplay><source src=\"" + thisSound + "\" type=\"audio\/mp3\"><\/audio>");
}
    
    
    
		
})(jQuery);