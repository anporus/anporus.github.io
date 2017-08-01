<?php
$tap = array();
$linkphim = array();
$string = "";
$server = "http://phimbathu.com";

$link = file_get_contents(trim($_POST['link']));

if(preg_match('/<a class=\"btn-see btn btn-info adspruce-streamlink\" href=\"(.*?)\">/is', $link, $getlink)){
	$getlink = $server.$getlink[1];
}

if(preg_match('/id=\"list_episodes\">(.*?)<\/div>/is', file_get_contents($getlink), $match)){
	preg_match_all('/href=\"(.*?)\">(.*?)<\/a>/is', $match[1], $listtap);
	foreach ($listtap[2] as $taps){
		$tap[] =  trim($taps);
	}
	foreach ($listtap[1] as $linkphims){
		$linkphim[] = $linkphims;
	}
	for($i = 0; $i < count($tap); $i++){
		if(!preg_match('/(Trailer|OST|Preview)/is', $tap[$i])){
			$string .= '['.$tap[$i].'*'.$linkphim[$i].']';
		}
	}
	$return['success'] = $string;
}elseif(preg_match('/<ul class=\"choose-server\">(.*?)<\/ul>/is', file_get_contents($getlink), $match)){
	preg_match_all('/<a href=\"(.*?)\">(.*?)<\/a>/is', $match[1], $listtap);
	foreach ($listtap[2] as $taps){
		$taps = preg_replace('/<div class=\"playing\"><\/div>/', '', $taps);
		$tap[] =  trim($taps);
	}
	foreach ($listtap[1] as $linkphims){
		$linkphim[] = $server.$linkphims;
	}
	for($i = 0; $i < count($tap); $i++){
    	if($string) $string .= "\n[".$tap[$i].'*'.$linkphim[$i].']'; else $string .= '['.$tap[$i].'*'.$linkphim[$i].']';
	}
	$return['success'] = $string;
}else{
	$return['error'] = "Có lỗi xảy ra. Vui lòng thử lại!";
}
echo json_encode($return);
?>