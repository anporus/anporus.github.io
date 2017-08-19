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
    var contents = newtext[2];
    var tit = document.title.split(' - ');
    var namxb = tit[1].replace(/(.+?)\(([0-9]+)\)/gi,'$2');
    var tags = ''+tit[0]+' VietSub Full HD, '+tit[0]+' Thuyết Minh Full HD, '+tit[0]+' Trọn Bộ Full HD, '+tit[0]+' Lồng Tiếng Full HD, '+tit[0]+' Tập Cuối Full HD, '+tit[0]+' Bản CAM Đẹp HD, '+tit[0]+' Phụ Đề Full HD, '+tit[0]+' Bản HDrip, Lịch Chiếu Phim '+tit[0]+' , Nhạc Phim '+tit[0]+' OST, '+tit[0]+' VietSub Full HD, '+tit[0]+' Thuyết Minh Full HD, '+tit[0]+' Trọn Bộ Full HD, '+tit[0]+' Lồng Tiếng Full HD, '+tit[0]+' Tập Cuối Full HD, '+tit[0]+' Bản CAM Đẹp HD, '+tit[0]+' Phụ Đề Full HD, '+tit[0]+' Bản HDrip, Lịch Chiếu Phim '+tit[0]+' , Nhạc Phim '+tit[0]+' OST,  '+tit[0]+' BanhTV, '+tit[0]+' BiluTV, '+tit[0]+' Phim14, '+tit[0]+'PhimMoi, '+tit[0]+' PhimBatHu, '+tit[0]+' PhimNhanh, '+tit[0]+' HDOnline, '+tit[0]+' HDSieuNhanh, '+tit[0]+' HayHayTV, '+tit[0]+' Tập 1, '+tit[0]+' Tập 2, '+tit[0]+' Tập 3, '+tit[0]+' Tập 4, '+tit[0]+' Tập 5, '+tit[0]+' Tập 6, '+tit[0]+' Tập 7, '+tit[0]+' Tập 8, '+tit[0]+' Tập 9, '+tit[0]+' Tập 10, '+tit[0]+' Tập 11, '+tit[0]+' Tập 12, '+tit[0]+' Tập 13, '+tit[0]+' Tập 14, '+tit[0]+' Tập 15, '+tit[0]+' Tập 16, '+tit[0]+' Tập 17, '+tit[0]+' Tập 18, '+tit[0]+' Tập 19, '+tit[0]+' Tập 20, '+tit[0]+' Tập 1, '+tit[0]+' Tập 2, '+tit[0]+' Tập 3, '+tit[0]+' Tập 4, '+tit[0]+' Tập 5, '+tit[0]+' Tập 6, '+tit[0]+' Tập 7, '+tit[0]+' Tập 8, '+tit[0]+' Tập 9, '+tit[0]+' Tập 10, '+tit[0]+' Tập 11, '+tit[0]+' Tập 12, '+tit[0]+' Tập 13, '+tit[0]+' Tập 14, '+tit[0]+' Tập 15, '+tit[0]+' Tập 16, '+tit[0]+' Tập 17, '+tit[0]+' Tập 18, '+tit[0]+' Tập 19, '+tit[0]+' Tập 20, '+tit[0]+' 11/12/13/14/15/16/17/18/19/20, '+tit[0]+' 21/22/23/24/25/26/27/28/29/30, '+tit[0]+' 31/32/33/34/35/36/37/38/39/40,'+tit[0]+' Tập Cuối, '+tit[0]+' Tap Cuoi, '+tit[0]+' Tron bo,.. '+tit[1]+' VietSub Full HD, '+tit[1]+' Thuyết Minh Full HD, '+tit[1]+' Trọn Bộ Full HD, '+tit[1]+' Lồng Tiếng Full HD, '+tit[1]+' Tập Cuối Full HD, '+tit[1]+' Bản CAM Đẹp HD, '+tit[1]+' Phụ Đề Full HD, '+tit[1]+' Bản HDrip, Lịch Chiếu Phim '+tit[1]+' , Nhạc Phim '+tit[1]+' OST, '+tit[1]+' VietSub Full HD, '+tit[1]+' Thuyết Minh Full HD, '+tit[1]+' Trọn Bộ Full HD, '+tit[1]+' Lồng Tiếng Full HD, '+tit[1]+' Tập Cuối Full HD, '+tit[1]+' Bản CAM Đẹp HD, '+tit[1]+' Phụ Đề Full HD, '+tit[1]+' Bản HDrip, Lịch Chiếu Phim '+tit[1]+' , Nhạc Phim '+tit[1]+' OST,  '+tit[1]+' BanhTV, '+tit[1]+' BiluTV, '+tit[1]+' Phim14, '+tit[1]+'PhimMoi, '+tit[1]+' PhimBatHu, '+tit[1]+' PhimNhanh, '+tit[1]+' HDOnline, '+tit[1]+' HDSieuNhanh, '+tit[1]+' HayHayTV, '+tit[1]+' Tập 1, '+tit[1]+' Tập 2, '+tit[1]+' Tập 3, '+tit[1]+' Tập 4, '+tit[1]+' Tập 5, '+tit[1]+' Tập 6, '+tit[1]+' Tập 7, '+tit[1]+' Tập 8, '+tit[1]+' Tập 9, '+tit[1]+' Tập 10, '+tit[1]+' Tập 11, '+tit[1]+' Tập 12, '+tit[1]+' Tập 13, '+tit[1]+' Tập 14, '+tit[1]+' Tập 15, '+tit[1]+' Tập 16, '+tit[1]+' Tập 17, '+tit[1]+' Tập 18, '+tit[1]+' Tập 19, '+tit[1]+' Tập 20, '+tit[1]+' Tập 1, '+tit[1]+' Tập 2, '+tit[1]+' Tập 3, '+tit[1]+' Tập 4, '+tit[1]+' Tập 5, '+tit[1]+' Tập 6, '+tit[1]+' Tập 7, '+tit[1]+' Tập 8, '+tit[1]+' Tập 9, '+tit[1]+' Tập 10, '+tit[1]+' Tập 11, '+tit[1]+' Tập 12, '+tit[1]+' Tập 13, '+tit[1]+' Tập 14, '+tit[1]+' Tập 15, '+tit[1]+' Tập 16, '+tit[1]+' Tập 17, '+tit[1]+' Tập 18, '+tit[1]+' Tập 19, '+tit[1]+' Tập 20, '+tit[1]+' 11/12/13/14/15/16/17/18/19/20, '+tit[1]+' 21/22/23/24/25/26/27/28/29/30, '+tit[1]+' 31/32/33/34/35/36/37/38/39/40,'+tit[1]+' Tập Cuối, '+tit[1]+' Tap Cuoi, '+tit[1]+' Tron bo,.. ';
    //$(".tysunimg:eq("+i+")").html(thumbnew);
    document.getElementsByClassName("tysunimg")[i].innerHTML = thumbnew;

    //$(".tysuncontent:eq("+i+")").html(content);
    document.getElementsByClassName("tysuncontent")[i].innerHTML = contents;

    //$(".tysuntags:eq("+i+")").html(tags)
    document.getElementsByClassName("tysuntags")[i].innerHTML = tags;

    //$(".tysunqg:eq("+i+")").html(quocgia);
    document.getElementsByClassName("tysunqg")[i].innerHTML = quocgia;

    //$(".tysuntl:eq("+i+")").html(theloai);
    document.getElementsByClassName("tysuntl")[i].innerHTML = theloai;

    //$(".tysunnxb:eq("+i+")").html(document.title.split(' - ')[1].replace(/(.+?)\(([0-9]+)\)/gi,'$2'));
    document.getElementsByClassName("tysunnxb")[i].innerHTML = namxb;

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
