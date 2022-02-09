function makeDark(changes) {
	changes.forEach(element => {
		element.addedNodes?.forEach(colorNode)
		if (element.target) {
			colorNode(element.target)
		}
	})
}

function colorNode(node) {
	if (!(node instanceof HTMLElement)) return
	let style = window.getComputedStyle(node)
	if (style.backgroundColor == 'rgb(247, 247, 247)') node.style.backgroundColor = "#111" //Set light grey background stuff to dark grey
	else if (style.backgroundColor == 'rgb(239, 239, 239)') node.style.backgroundColor = "#111" //Same as above, but specifically for hovered likes
	else if (style.backgroundColor == 'rgb(255, 255, 255)') node.style.backgroundColor = "#000" //Set everything with white background to black background
	else if (style.backgroundColor == 'rgb(229, 241, 246)') node.style.backgroundColor = "#113" //This and the below are for your own messages for different themes
	else if (style.backgroundColor == 'rgb(246, 246, 229)') node.style.backgroundColor = "#221"
	else if (style.backgroundColor == 'rgb(241, 229, 246)') node.style.backgroundColor = "#212"
	else if (style.backgroundColor == 'rgb(229, 246, 229)') node.style.backgroundColor = "#121"
	else if (style.backgroundColor == 'rgb(246, 241, 229)') node.style.backgroundColor = "#221"
	else if (style.backgroundColor == 'rgb(246, 229, 229)') node.style.backgroundColor = "#211"
	
	else if (node.tagName == "SPAN") {
		if (style.color == 'rgb(59, 59, 59)') node.style.color = "#FFF" //Set dark grey text to light grey
		else if (style.color == 'rgb(62, 62, 62)') node.style.color = "#FFF" //Same as above
		else if (style.color == 'rgb(43, 43, 48)') node.style.color = "#CCC" //Same as above, but off-white
		else if (style.color == 'rgb(98, 111, 130)') node.style.color = "#AAB" //Set greyer text (typically the chat preview text) to slightly blue grey
		else if (style.color == 'rgb(0, 0, 0)') node.style.color = "#FFF" //Set totally black text to white
		else if (style.color == 'rgb(170, 170, 187)') node.style.color = "#FFF" //Set multitline text to white
	}
	
	else if (node.tagName == "DIV" && style.color == "rgb(62, 62, 62)") node.style.color = "#AAA" //Set notification title color to soft white
	else if (node.tagName == "STRONG") node.style.color = "#FFF" //All strongs are black, so make them white
	else if (node.tagName == "P") node.style.color = "#FFF" //All paragraphs are black, so make them white
	
	//Make all these elements a soft white
	else if (node.classList.contains("chat-messages") || node.classList.contains("nickname")) {
		node.style.color = "#FFF"
	}
	
	else if (node.classList.contains("message") && !node.style.backgroundColor) {
		node.style.color = "#FFF"
		node.style.backgroundColor = "#111"
	} else if (node.classList.contains("message")) {
		node.style.color = "#FFF"
	}
	
	//Set headers to white
	else if (node.tagName == "H1" || node.tagName == "H2" || node.tagName == "H3" || 
		node.tagName == "H4" || node.tagName == "H5" || node.tagName == "H6") {
		if (!node.style.display) node.style.color = "#FFF"
	}
	
	//Make chat title black if the chat header is themed
	else if (node.classList.contains("chat-header") && style.backgroundImage.includes("assets/banners")) {
		console.log("Header uses assets")
		node.querySelectorAll("h1,h2,h3,h4,h5,h6").forEach(header => {
			header.style.color = "#000"
			header.style.display = "inline-block"
		})
	}

	//Make names and timestamp light grey
	else if (node.classList.contains("nickname") || node.classList.contains("timestamp-divider")) {
		node.style.color = "#AAA"
	}
	
	//Darken system messages
	if (node.classList.contains("message") && node.classList.contains("system")) {
		node.style.backgroundColor = "#333"
	}

	//Find chat list, and make those buttons change color when hovered
	else if (node.classList.contains("chats")) {
		node.querySelectorAll(".list-item").forEach(chat => {
			chat.removeEventListener("mouseenter", makeChatBlack)
			chat.addEventListener("mouseenter", makeChatBlack)
			chat.removeEventListener("mouseleave", makeChatGrey)
			chat.addEventListener("mouseleave", makeChatGrey)
		})
	}
	
	//Make message composition box use white text
	else if (node.classList.contains("message-composer")) node.style.color = "#FFF"
}

//Helper functions for chat list button
function makeChatBlack(e) {
	e.target.style.backgroundColor = "#000"
}

function makeChatGrey(e) {
	e.target.style.backgroundColor = "#111"
}

//Check for the loading screen until we find it, then make it black
function makeLoadingBlack() {
	if (!document) {
		requestAnimationFrame(makeLoadingBlack)
	}
	let target = document.querySelector("#app-loading")
	if (target) {
		target.style.backgroundColor = "#000"
	} else {
		requestAnimationFrame(makeLoadingBlack)
	}
}
requestAnimationFrame(makeLoadingBlack)

function makeChatLoadingBlack() {
	document.querySelectorAll(".chat-messages").forEach(element => {
		element.style.backgroundColor = "#000"
	})
	requestAnimationFrame(makeChatLoadingBlack)
}
makeChatLoadingBlack()

function startReplacement() {
	if (!document?.body || !(document.body instanceof Node)) {
		setTimeout(startReplacement, 1)
		return
	}
	document.body.style.backgroundColor = "#000"
	//Make an observer to have the above function run every time the DOM updates
	let DOMObserver = new MutationObserver(makeDark)

	// Select the node that will be observed for mutations
	const targetNode = document.getElementById('');

	// Options for the observer (which mutations to observe)
	const config = { attributes: true, childList: true, subtree: true };

	//Observe the whole body
	DOMObserver.observe(document.body, config)
}

startReplacement()