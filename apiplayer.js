var block = ["phimmoi.net"];
var arrBlock = block.length;
for(var i=0;i<arrBlock;i++){
    if(window.location.href.indexOf(block[i])!=-1){
        window.top.location.href="http://www.daophim.net";
    }else{
        function apiplayer(link){
            var apiplayer = "";
            if(link.match(/(phimbathu.com|bilutv.com)/ig)){
                apiplayer = "//player.trunguit.net/play?url=";
            }else if(link.match(/(phimmoi.net)/ig)){
                apiplayer = "//player.trunguit.net/play?url=";
            }else if(link.match(/(streamango.com)/ig)){
                apiplayer = "//player.trunguit.net/play?url=";
            }else if(link.match(/(docs.google.com|drive.google.com)/ig)){
                apiplayer = "http://animevol.com/embed.php?id=";
            }else if(link.match(/(youtube.com)/ig)){
                apiplayer = "http://videoapi.io/embed/?hash=vs9897u492vs97467s095517t26458u1&amp;url=";
            }else{
                apiplayer = "//player.trunguit.net/play?url=";
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
    var content = newtext[2];var taggs = newtext[3];
    $(".tysunimg:eq("+i+")").html(thumbnew);
    document.getElementsByClassName("tysunimg")[i].innerHTML = thumbnew;

    $(".tysuncontent:eq("+i+")").html(newtext[2]);
    document.getElementsByClassName("tysuncontent")[i].innerHTML = content;

    //$(".tysuntags:eq("+i+")").html(newtext[3]);
    document.getElementsByClassName("tysuntags")[i].innerHTML = taggs;

    $(".tysunqg:eq("+i+")").html(quocgia);
    document.getElementsByClassName("tysunqg")[i].innerHTML = quocgia;

    $(".tysuntl:eq("+i+")").html(theloai);
    document.getElementsByClassName("tysuntl")[i].innerHTML = theloai;

    $(".tysunnxb:eq("+i+")").html(document.title.split(' - ')[1].replace(/(.+?)\(([0-9]+)\)/gi,'$2'));
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
    $("button:eq(1)").addClass('btn_dangnhap_hover');
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
