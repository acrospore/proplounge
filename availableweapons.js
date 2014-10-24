var swag = $('body').text()
$('body').html(swag);
swag = $("body").html();
var yolo = swag.replace(/<\/price>/gi,"</price><br>");
yolo = yolo.replace(/<\/marketname>/gi," - </marketname>");
yolo = yolo.replace(/<price>/gi,"<price>$");
yolo = yolo.replace(/StatTrakâ„¢/gi,"StatTrak");
$("body").html(yolo);