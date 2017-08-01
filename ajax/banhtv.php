<?php
$tap = array();
$linkphim = array();
$string = "";
$server = "http://banhtv.com";

$link = file_get_contents(trim($_POST['link']));

if(preg_match('/<a class=\"btn-see btn btn-info\" href=\"(.*?)\">/is', $link, $getlink)){
	$getlink = $server.$getlink[1];
}

if(preg_match('/id=\"list_episodes\">(.*?)<\/ul>/is', file_get_contents($getlink), $match)){
	preg_match_all('/href=\"(.*?)\" title="(.*?)">/is', $match[1], $listtap);
	foreach ($listtap[2] as $taps){
		$tap[] =  trim($taps);
	}
	foreach ($listtap[1] as $linkphims){
		$linkphim[] = $server.$linkphims;
	}
	for($i = 0; $i < count($tap); $i++){
		if(!preg_match('/(Trailer|OST|Preview)/is', $tap[$i])){
			$tap[$i] = preg_replace('/Tập /is','',$tap[$i]);
			$string .= '['.$tap[$i].'*'.$linkphim[$i].']';
		}
	}
	$return['success'] = $string;
}else{
	$return['error'] = "Có lỗi xảy ra. Vui lòng thử lại!";
}
echo json_encode($return);
?>