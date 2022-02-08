function makeDark() {
    jQuery('*').each(function() { //For literally everything, check colors and set backgrounds
        if ( jQuery(this).css('background-color') == 'rgb(247, 247, 247)') jQuery(this).css('background-color', '#222'); //If this uses the default light background, use a darker background
        else if ( jQuery(this).css('background-color') == 'rgb(255, 255, 255)') jQuery(this).css('background-color', '#000000'); //If this uses a white background, use a black background
        else if ( jQuery(this).css('background-color') == 'rgb(229, 241, 246)') jQuery(this).css('background-color', '#112'); //All of the following set the background color for messages you send for different themes
        else if ( jQuery(this).css('background-color') == 'rgb(246, 246, 229)') jQuery(this).css('background-color', '#221');
        else if ( jQuery(this).css('background-color') == 'rgb(241, 229, 246)') jQuery(this).css('background-color', '#212');
        else if ( jQuery(this).css('background-color') == 'rgb(229, 246, 229)') jQuery(this).css('background-color', '#121');
        else if ( jQuery(this).css('background-color') == 'rgb(246, 241, 229)') jQuery(this).css('background-color', '#221');
        else if ( jQuery(this).css('background-color') == 'rgb(246, 229, 229)') jQuery(this).css('background-color', '#211');
        
    })
    jQuery('span').each(function() { //For just <span> tags (which is most of the text
        if ( jQuery(this).css('color') == 'rgb(59, 59, 59)') jQuery(this).css('color', '#FFF'); // Set grey text to white
		  if ( jQuery(this).css('color') == 'rgb(62, 62, 62)') jQuery(this).css('color', '#FFF'); // Set notification text to white
        if ( jQuery(this).css('color') == 'rgb(43, 43, 48)') jQuery(this).css('color', '#CCC'); //Set darker text to off-white
        if ( jQuery(this).css('color') == 'rgb(98, 111, 130)') jQuery(this).css('color', '#AAB') //Set greyer text (typically the chat preview text) to slightly blue white
        if ( jQuery(this).css('color') == 'rgb(0, 0, 0)') jQuery(this).css('color', '#FFF') //Set totally black text to white
    })
	 //Set notification title color to soft white
	 jQuery('div').each(function() {
		 if (jQuery(this).css('color') == "rgb(62, 62, 62)") {
			 jQuery(this).css('color', "#AAA")
		 }
	 })
	 jQuery('strong').css('color', "#FFF") //All strongs are black, so make them white
    jQuery('p').css('color', "#FFF") //All paragraphs are black, so make them white
    jQuery('.chat-messages,.message,.nickname').css('color', "#BBB !important") //Make all of thes elements a soft white
    jQuery(':header').css('color', "#FFF") //Set all heard tags to white
    jQuery(".chat-header").filter(function() {
        return (jQuery(this).css('background-image').includes("assets/banners")) //Find any tags for themed groups
    }).find(":header").css('color', "#000") //Revert the above changes
    jQuery('.nickname,.timestamp-divider').css('color', "#AAA") //Make all these elements a soft white
    jQuery('.message.system').css('background-color', "#333") //Darken system messages
    jQuery('.chats .list-item').unbind('mouseenter mouseleave') //Reset mouse events
    jQuery('.chats .list-item').mouseenter(function() { //Set mouse events for chat list
        jQuery(this).css("background-color", "#000") //Make pure black for hovered text
    }).mouseleave(function() {
        jQuery(this).css("background-color", "#222") //Make softer black for un-hovered text
    })
	 jQuery(".message-composer").css("color", "#FFF") //Make the message composition box use white text
}

//Check for the loading screen until we find it, then make it black
function makeLoadingBlack() {
	if (!jQuery) {
		requestAnimationFrame(makeLoadingBlack)
	}
	let target = jQuery("#app-loading")
	if (target.length > 0) {
		target.css("background-color", "#000")
	} else {
		requestAnimationFrame(makeLoadingBlack)
	}
}
requestAnimationFrame(makeLoadingBlack)

jQuery(document).ready(() => {

	//Make an observer to have the above function run every time the DOM updates
	let DOMObserver = new MutationObserver(makeDark)

	// Select the node that will be observed for mutations
	const targetNode = document.getElementById('');

	// Options for the observer (which mutations to observe)
	const config = { attributes: false, childList: true, subtree: true };

	//Observe the whole body
	DOMObserver.observe(document.body, config)
})