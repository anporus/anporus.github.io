var block = ["daophim.net"];
var domain = document.referrer.match(/:\/\/([^/]+)/)[1];
if(block.contains(domain)){
	SetError2('Vui lòng chèn player này trực tiếp, không thông qua iframe trung gian!');
}
function SetError2(_0xa218x18){html= _0x388f[51]+ _0xa218x18+ _0x388f[52];document[_0x388f[23]](_0x388f[49])[_0x388f[22]]= html;setTimeout(function(){StartTime(_0x388f[50])},500)}
function apiplayer(link){
	if(link.match(/(phimbathu.com|bilutv.com)/ig)){
		var apiplayer = "//player.trunguit.net/play?url=";
	}else if(link.match(/(phimmoi.net)/ig)){
		var apiplayer = "//player.trunguit.net/play?url=";
	}else if(link.match(/(youtube.com)/ig)){
		var apiplayer = "http://videoapi.io/embed/?hash=vs9897u492vs97467s095517t26458u1&amp;url=";
	}else{
		//var apiplayer = "//player.trunguit.net/play?url=";
		var apiplayer = "http://vntool.net/code/player.php?url=";
		//var apiplayer = "//megavn.net/player/iframe.php?film_url=";
	}
	return apiplayer+link;
}
