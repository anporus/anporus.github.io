var block = ["phimmoi.net"];
var arrBlock = block.length;
for(var i=0;i<arrBlock;i++){
    if(window.location.href.indexOf(block[i])>-1){
        window.top.location.href="http://www.daophim.net";
    }else{
		function apiplayer(link){
			if(link.match(/(phimbathu.com|bilutv.com)/ig)){
				var apiplayer = "//player.trunguit.net/play?url=";
			}else if(link.match(/(phimmoi.net)/ig)){
				var apiplayer = "//player.trunguit.net/play?url=";
			}else if(link.match(/(streamango.com)/ig)){
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
    }
}
