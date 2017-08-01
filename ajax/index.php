<?php
if(!empty($_SERVER['HTTP_X_REQUESTED_WITH'])&&strtolower($_SERVER['HTTP_X_REQUESTED_WITH'])=="xmlhttprequest"){
	if(isset($_POST)){
		if(preg_match('/bilutv.com/is', $_POST['link'])){
			include('bilutv.php');
		}elseif(preg_match('/banhtv.com/is', $_POST['link'])){
			include('banhtv.php');
		}elseif(preg_match('/phimbathu.com/is', $_POST['link'])){
			include('phimbathu.php');
		}
	}
}else{
	header("Location:/");
}
?>