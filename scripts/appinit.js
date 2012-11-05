var flashvars = {};
var swfVersionStr = "10.2.0";
var xiSwfUrlStr = "os/playerProductInstall.swf";
var randomVersion = Math.random();
var params = {
	qulity:'high',
	bgcolor:'#FFFFFF',
	allowscriptaccess:'sameDomain',
	allowfullscreen:'true'
};
var attributes = {
	id:'BlessOS',
	name:'BlessOS',
	align:'middle'
};
swfobject.embedSWF("os/main.swf?random="+randomVersion,"blessos","100%","100%",swfVersionStr,xiSwfUrlStr,flashvars,params,attributes);
