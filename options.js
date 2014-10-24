$("#save").click(function(){
	var themevalue = $("#theme").val();
	chrome.storage.sync.set({'theme': themevalue}, function(){
		alert("Saved.");
	});
});

$(document).ready(function(){
	chrome.storage.sync.get({
		theme: 'dark'
	}, function(items){
		$("#theme").val(items.theme);
	});
});