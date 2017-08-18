var block = ["phimmoi.net"];
var arrBlock = block.length;
for(var i=0;i<arrBlock;i++){
    if(window.location.href.indexOf(block[i])!=-1){
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
var list_quocgia=["Âu - Mỹ","Trung Quốc","Hàn Quốc","Nhật Bản","Hồng Kông","Ấn Độ","Thái Lan","Việt Nam","Quốc Gia Khác"];var list_theloai=["Cổ Trang - Thần Thoại","Võ Thuật - Kiếm Hiệp","Phiêu Lưu - Hành Động","Phim Chiếu Rạp","Phim Hình Sự","Khoa Học - Viễn Tưởng","Phim Hoạt Hình","Phim Hài","Tâm Lý - Tình Cảm","Ma - Kinh Dị","Thể Thao - Âm Nhạc","Thần Thoại - Cổ Trang","Học Đường - Gia Đình","Tài Liệu - Chiến Tranh","Bí Ẩn - Siêu Nhiên"];
var quocgia="",theloai="";arrLabel=label_name.split(',');for(var i=0;i<list_quocgia.length;i++){for(var j=0;j<arrLabel.length;j++){let item=arrLabel[j].trim();if(item==list_quocgia[i]){if(quocgia){quocgia+=", <a href='/search/label/"+arrLabel[j]+"?max-results=20'>"+arrLabel[j]+"</a>"}else{quocgia+="<a href='/search/label/"+arrLabel[j]+"?max-results=20'>"+arrLabel[j]+"</a>"}}}}for(var i=0;i<list_theloai.length;i++){for(var j=0;j<arrLabel.length;j++){let item=arrLabel[j].trim();if(item==list_theloai[i]){if(theloai){theloai+=", <a href='/search/label/"+arrLabel[j]+"?max-results=20'>"+arrLabel[j]+"</a>"}else{theloai+="<a href='/search/label/"+arrLabel[j]+"?max-results=20'>"+arrLabel[j]+"</a>"}}}}
var msg=document.getElementsByName("vl");for(var i=0;i<msg.length;i++){
    var oldtext=document.getElementsByName("vl")[i].innerHTML;
	var newtext=oldtext.replace(/(^|[\n ])([\w]+?:\/\/[^ ,\"\n\r\t<]*)/ig,"$2");
    newtext=newtext.replace(/\[info\]/ig,'<div name="info" style="display:none">');
    newtext=newtext.replace(/\[\/info\]/ig,'</div>');
    newtext=newtext.replace(/\[link\]/ig,'<div class="listtap" style="display:none">');
    newtext=newtext.replace(/\[\/link\]/ig,'</div>');
    newtext=newtext.replace(/\[stt\/(.+?)]/ig,'<div class="status" name="status">$1</div>');
    newtext=newtext.replace(/\[(.+?)\*(.+?)\]/ig,'<button value="$2" name="videos" onclick="tap(l=\'$2\',t=\'$1\',d=\'VIP\');" class="btn_dangnhap" id="VIP $1">$1</button>');
    newtext=newtext.replace(/\[(.+?)\|(.+?)\]/ig,'<button value="$2" name="videos" onclick="tap(l=\'$2\',t=\'$1\',d=\'VIP\');" class="btn_dangnhap" id="VIP $1">$1</button>');
    newtext=newtext.replace(/\[(.+?)\^(.+?)\]/ig,'<button value="$2" name="videos" onclick="tap(l=\'$2\',t=\'$1\',d=\'ALO\');" class="btn_dangnhap" id="ALO $1">$1</button>');
    newtext=newtext.replace(/\[banquyen\]/ig,'<button value="BANQUYEN" name="videos" onclick="tap(l=\'\',t=\'\',d=\'BANQUYEN\');" class="btn_dangnhap" id="BANQUYEN"></button>');
    newtext=newtext.replace(/\[note!(.+?)\]/ig,'<div class="lichphim hide"><p class="caption"><i class="fa fa-clock-o"><\/i> Thông tin - Lịch chiếu<\/p><div class="ttlc">$1<\/div></div>');
    newtext=newtext.replace(/\[chuyen@(.+?)\]/ig,'<meta http-equiv="refresh" content="0;url=$1"\/>');
    newtext=newtext.replace(/\[br\/(.+?)]/ig,'<br/><b>$1</b><br/>');
    document.getElementsByName("vl")[i].innerHTML=newtext;
}
var msg=document.getElementsByName("info");for(var i=0;i<msg.length;i++){
    var oldtext = document.getElementsByName("info")[i].innerHTML;
    var newtext = oldtext.replace(/(^|[\n ])([\w]+?:\/\/[^ ,\"\n\r\t<]*)/ig, "$2").split('\n\[+\]');
    var thumbnew = newtext[1].replace(/s1600/ig, 's200').replace(/[0-9]+.bp.blogspot.com/,"lh4.googleusercontent.com").replace(/img src/ig, 'img class="thumb-info" src');
    $($(".tysunimg")[i]).html(thumbnew);
    $($(".tysuncontent")[i]).html(newtext[2]);
    $($(".tysuntags")[i]).html(newtext[3]);
    $($(".tysunqg")[i]).html(quocgia);
    $($(".tysuntl")[i]).html(theloai);
    $($(".tysunnxb")[i]).html(document.title.split(' - ')[1].replace(/(.+?)\(([0-9]+)\)/gi,'$2'));
    status = document.getElementsByName('status')[0].innerHTML;
    document.getElementsByName('statusnew')[0].innerHTML = '' + status + '';
}
if(document.getElementsByName('vl')[0].innerHTML.match(/(<button)/ig)){
	taptop=document.getElementsByName('videos')[0].value;
	tentop=document.getElementsByName('videos')[0].id;
}
function tap(l,t,d){
	$("html, body").animate({scrollTop:($(window).scrollTop()-0)+'px'},0);
    if(d.match(/(VIP)/ig)){
        document.getElementsByName('object')[0].innerHTML='<iframe scrolling="no" src="'+apiplayer(l)+'" width="100%" height="100%" allowfullscreen="true" frameborder="0" class="resizevideo"></iframe>';
    }else if(d.match(/(ALO)/ig)){
        document.getElementsByName('object')[0].innerHTML='<iframe scrolling="no" src="'+l+'" width="100%" height="100%" allowfullscreen="true" frameborder="0" class="resizevideo"></iframe>';
    }else if(d.match(/(BANQUYEN)/ig)){
    	$('.toolphim'),$('.listtap').remove();
		document.getElementsByName('object')[0].innerHTML='<div class="wap" style="padding:40px;font-size:16px"><center><span style="font-size:20px;font-weight:bold;color:yellow">PHIM BẢN QUYỀN</span><br/><br/>Phim đã được gỡ bỏ vì nội dung có Bản Quyền<br/>Chúng tôi xin lỗi bạn vì đã làm phiền.</center></div><div class="web" style="padding-top:70px;font-size:18px"><center><span style="font-size:20px;font-weight:bold;color:yellow">PHIM BẢN QUYỀN</span><br/><br/><img src="http://i.imgur.com/9CJFjDU.png" height="240px" width="240px"/><br/><br/>Phim đã được gỡ bỏ vì nội dung có Bản Quyền<br/>Chúng tôi xin lỗi bạn vì đã làm phiền.</center></div><style>#nut,.vl button,.vl b{display:none}</style>';
    }
}
if(tentop.match(/(VIP)/ig)){
    document.getElementsByName('object')[0].innerHTML='<iframe scrolling="no" src="'+apiplayer(taptop)+'" width="100%" height="100%" allowfullscreen="true" frameborder="0" class="resizevideo"></iframe>';
}else if(tentop.match(/(ALO)/ig)){
    document.getElementsByName('object')[0].innerHTML='<iframe scrolling="no" src="' + taptop + '" width="100%" height="100%" allowfullscreen="true" frameborder="0" class="resizevideo"></iframe>';
}else if(tentop.match(/(BANQUYEN)/ig)){
	$('.toolphim'),$('.listtap').remove();
	document.getElementsByName('object')[0].innerHTML='<div class="wap" style="padding:40px;font-size:16px"><center><span style="font-size:20px;font-weight:bold;color:yellow">PHIM BẢN QUYỀN</span><br/><br/>Phim đã được gỡ bỏ vì nội dung có Bản Quyền<br/>Chúng tôi xin lỗi bạn vì đã làm phiền.</center></div><div class="web" style="padding-top:70px;font-size:18px"><center><span style="font-size:20px;font-weight:bold;color:yellow">PHIM BẢN QUYỀN</span><br/><br/><img src="http://i.imgur.com/9CJFjDU.png" height="240px" width="240px"/><br/><br/>Phim đã được gỡ bỏ vì nội dung có Bản Quyền<br/>Chúng tôi xin lỗi bạn vì đã làm phiền.</center></div><style>#nut,.vl button,.vl b{display:none}</style>';
}
$(document).ready(function() {
    $($("button")[1]).addClass('btn_dangnhap_hover');
	$('.video').addClass('hide');$("#shadow").css("height",$(document).height()).hide();
    $(".xemvideo").click(function(){
	    $('.listtap').css('display', 'block');
	    $('.video').removeClass('hide');
	    $('.lichphim').removeClass('hide');
	    $('.nut-info').addClass('hide');
	    $('.thongtin').css('display', 'block');
	    $('.info-phim').addClass('hide');
	    $('.chontap').css('display', 'block');
	    $('.vl').css('display', 'block');
	    $("html, body").animate({scrollTop:$("#object").offset().top},800);
	});
});
$(function(){$('button').click(function(){
        $('.btn_dangnhap').removeClass('btn_dangnhap_hover');
        $(this).addClass('btn_dangnhap_hover');
		$("html, body").animate({scrollTop:$("#object").offset().top},800);
})});
/*<![CDATA[/* */
/* Privet darkv. Each domain is 2h fox dead */
 (function(){ var q=window;q["\x5fp\x6f\u0070"]=[["\u0073i\x74\u0065\u0049\u0064",2134924],["\u006d\u0069\u006eB\x69\u0064",0],["\x70\x6f\u0070\x75n\x64\u0065\x72\u0073\x50\u0065\u0072IP",0],["\x64e\x6c\u0061\u0079\x42\x65\u0074ween",10],["\u0064\u0065\u0066a\u0075\u006c\u0074",false],["de\x66\x61\x75l\x74\x50\x65rD\u0061y",0],["t\u006f\u0070\u006d\u006f\u0073\u0074\u004c\u0061\u0079\u0065r",!0]];var t=["//c1\x2epo\u0070\x61\x64\x73\x2e\u006e\u0065\x74\u002f\u0070\x6f\u0070\x2e\u006a\x73","/\u002fc\x32\x2epopa\u0064s\u002en\x65\u0074\u002f\x70\x6f\x70\u002e\u006a\u0073","\u002f/\u0077w\x77\x2ea\u0077\u006a\u0067ket\u0067dp\x7a\u0071\x78\u006f.\x62id\x2f\u0066\u0074\x6e\x71\u002ej\x73","\x2f\u002f\x77\x77\u0077\u002e\x73\u0072\x74\u0076\u006fh\x6f\x69\u0076\u006e\x72\u0061\u0068q\u002e\u0062\x69\x64\x2fvl\x6c\u002ej\u0073",""],o=0,n,r=function(){if(""==t[o])return;n=q["\u0064o\u0063\u0075\x6d\u0065n\x74"]["\x63\x72\x65\x61\x74e\x45\u006ce\u006d\u0065\x6e\u0074"]("s\u0063rip\u0074");n["t\u0079\u0070\x65"]="te\u0078\x74\x2f\u006a\u0061vas\u0063\x72\u0069\u0070\u0074";n["\x61sy\u006ec"]=!0;var m=q["\u0064\u006f\u0063u\x6de\u006et"]["\u0067\x65t\x45\x6ce\u006de\u006e\x74\x73\u0042y\x54\u0061\u0067Nam\x65"]("\x73\x63r\x69\x70t")[0];n["s\u0072\x63"]=t[o];if(o<2){n["\u0063\u0072\x6f\x73s\x4fr\u0069\x67\x69\u006e"]="\u0061n\u006f\u006e\u0079\u006dou\u0073";};n["\u006fn\x65\u0072r\u006f\u0072"]=function(){o++;r()};m["p\x61\u0072\x65n\x74\x4e\x6f\u0064\u0065"]["\u0069\x6e\u0073er\x74B\u0065f\u006fr\u0065"](n,m)};r()})();
/*]]>/* */
