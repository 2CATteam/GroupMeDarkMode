function makeDark() {
	
    jQuery('*').each(function() {
        let shouldFilter = false
        if ( jQuery(this).css('background-color') == 'rgb(247, 247, 247)') jQuery(this).css('background-color', '#222');
        else if ( jQuery(this).css('background-color') == 'rgb(255, 255, 255)') jQuery(this).css('background-color', '#000000');
        else if ( jQuery(this).css('background-color') == 'rgb(229, 241, 246)') jQuery(this).css('background-color', '#112');
        else if ( jQuery(this).css('background-color') == 'rgb(246, 246, 229)') jQuery(this).css('background-color', '#221');
        else if ( jQuery(this).css('background-color') == 'rgb(241, 229, 246)') jQuery(this).css('background-color', '#212');
        else if ( jQuery(this).css('background-color') == 'rgb(229, 246, 229)') jQuery(this).css('background-color', '#121');
        else if ( jQuery(this).css('background-color') == 'rgb(246, 241, 229)') jQuery(this).css('background-color', '#221');
        else if ( jQuery(this).css('background-color') == 'rgb(246, 229, 229)') jQuery(this).css('background-color', '#211');
        
    })
    jQuery('span').each(function() {
        if ( jQuery(this).css('color') == 'rgb(59, 59, 59)') jQuery(this).css('color', '#FFF');
        if ( jQuery(this).css('color') == 'rgb(43, 43, 48)') jQuery(this).css('color', '#CCC');
        if ( jQuery(this).css('color') == 'rgb(98, 111, 130)') jQuery(this).css('color', '#AAB')
        if ( jQuery(this).css('color') == 'rgb(0, 0, 0)') jQuery(this).css('color', '#FFF')
    })
    jQuery('p').css('color', "#FFF")
    jQuery('.chat-messages,.message,.nickname').css('color', "#BBB !important")
    jQuery(':header').css('color', "#FFF")
    jQuery(".chat-header").filter(function() {
        return (jQuery(this).css('background-image').includes("assets/banners"))
    }).find(":header").css('color', "#000")
    jQuery('.nickname,.timestamp-divider').css('color', "#AAA")
    jQuery('.message.system').css('background-color', "#333")
    jQuery('.chats .list-item').unbind('mouseenter mouseleave')
    jQuery('.chats .list-item').mouseenter(function() {
        jQuery(this).css("background-color", "#000")
    }).mouseleave(function() {
        jQuery(this).css("background-color", "#222")
    })
	 jQuery(".message-composer").css("color", "#FFF")
}

let DOMObserver = new MutationObserver(makeDark)

// Select the node that will be observed for mutations
const targetNode = document.getElementById('');

// Options for the observer (which mutations to observe)
const config = { attributes: false, childList: true, subtree: true };

DOMObserver.observe(document.body, config)