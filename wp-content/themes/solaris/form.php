<?php
function ssss()
{
	echo 'Привет';
}

add_action('wad', 'ssss');

?>

<?php
do_action('wad');

if (isset($_POST['login'])) {
	echo  $_POST['login'] . '<br>';
	echo  $_POST['username'] . '<br>';
	echo  $_POST['surname'] . '<br>';
	echo  $_POST['class'] . '<br>';
	
	$done = $wpdb->insert(
		'wp_students',
		[
			'login' => $_POST['login'],
			'name' => $_POST['username'],
			'surname' => $_POST['surname'],
			'class' => $_POST['class'],
		]
	);

	

}

$results = $wpdb->get_results( "SELECT * FROM wp_students" );
?>

<?php foreach ($results as $item): ?>

<p>Логин: <?php echo $item -> login;?></p>
<p>имя: <?php echo $item -> name?></p>
<p>Фамилию: <?php echo $item -> surname?></p>
<p>Класс: <?php echo $item -> class?></p>
<p>------------------------------</p>

<?php endforeach ?>



<form method="post">
	<label for="login">Ваше Логин:</label>
	<input name="login" id="login" type="text">
	<br>
	<label for="username"> имя:</label>
	<input name="username" id="username" type="text">
	<br>
	<label for="surname"> Фамилию:</label>
	<input name="surname" id="surname" type="text">
	<br>
	<label for="class">Класс:</label>
	<input name="class" id="class" type="text">
	<br>
	<button>Submit</button>
</form>

<?php
do_action('wad');

?>