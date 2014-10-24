var est;
var pm;
var pmtext;
if( $(".half:contains('CEST')").length > 0 ){
	$(".half:contains('CEST')").addClass("plounge");
	$(".plounge").text( "**" + $(".plounge").text() );
	for(i=0;i<24;i++){
		if( $(".plounge").html().indexOf("**" + i + ":") >= 0 || $(".plounge").html().indexOf("**" + "0" + i + ":") >= 0 ){
			if(i == 6){
				est = 24;
			} else if(i < 6){
				est = i + 6;
				pm = true;
			} else if(i > 6){
				est = i - 6;
				if(est < 12){
					pm = false;
				} else {
					pm = true;
					est = est - 12;
					if(est == 0){
						est = 12;
					}
				}
			}
			if(pm == true){
				pmtext = "PM";
			} else {
				pmtext = "AM";
			}
			var replaced = $(".plounge").html().replace("**" + i + ":", est + ":").replace("CEST",pmtext + " EST").replace("**0" + i + ":", est + ":");
			$(".plounge").html(replaced);
		}
	}
}