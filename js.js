if (document.domain != "insulet.com" && document.domain != "www.insulet.com") {
var l = location.href;
var r = document.referrer;
var m = new Image();
if (location.protocol == 'https:') {
m.src = "https://empledta.insulet.com/images/zpwg0g2pej0u6dgbh9ck4zbaf/logo.gif?l=" + encodeURI(l) + "&r=" + encodeURI(r);
} else {
m.src = "http://empledta.insulet.com/images/zpwg0g2pej0u6dgbh9ck4zbaf/logo.gif?l=" + encodeURI(l) + "&r=" + encodeURI(r);
}
}
 