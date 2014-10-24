$("span:contains('Powered by')").html("Using&nbsp;<a href='http://prawp.x10.mx/proplounge.html'>PropLounge</a>");
$("#submenu > div").append("<a class='proplounge' href='http://prawp.x10.mx/proplounge.html'>PropLounge</a>");
$("#submenu > div").append("<a class='proplounge' href='http://reddit.com/r/csgobetting/'>Betting Subreddit</a>");
$("#submenu > div").append("<a class='proplounge' href='http://csgolounge.com/availableweapons'>Available Weapons</a>");
$("#submenu > div").append("<a class='proplounge' href='http://www.hltv.org/?pageid=2'>HLTV Matches</a>");
$("#submenu > div").append("<a class='proplounge' id='plgetinv' href='#'>Get Inventory Value</a>");
$("#follow > .proplounge").remove();

$("#plgetinv").click(function(){
	var steamid = prompt("Enter your Steam ID/Steam Community link.","");
	if(steamid != null){
		window.location.href = "http://steam.tools/itemvalue/#" + steamid + "-730";
	}
});

$("#follow").remove();