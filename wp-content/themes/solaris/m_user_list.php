<section>
<?php
include 'bd_config.php';
$sql = "SELECT * FROM `wp_users`;";
		$result = $link->query($sql);

		if ($result->num_rows > 0) {
    		while($row = $result->fetch_assoc()) {
				$user_id = $row["ID"];
				$sql1 = "SELECT `user_coin` ,`user_total`  FROM `wp_user_coin` WHERE `user_id` = $user_id;";
				$result1 = $link->query($sql1);

        		echo "<section class='str_user_list'><p>".$row["ID"]. "</p> ". $row["display_name"]. " ". $row["user_nicename"]. " ". $row["class"]. " ";
				if ($result1->num_rows > 0) {
					while($row1 = $result1->fetch_assoc()) {
		
						echo $row1["user_coin"]. " " . $row1["user_total"]. " ";
					}
				} 
				else {
					echo "Данные не обнаружены ";
				}
				$user = get_user_by('id', $user_id);
				if ($user) {
					$user_roles = $user->roles;
					
					if (!empty($user_roles)) {
						foreach ($user_roles as $role) {
							$role_obj = get_role($role);
							if ($role_obj) {
								echo wp_roles()->roles[$role_obj->name]['name']. "</section><br>". "<br>";
							}
						}
					}
				}
			} 
		}
		else {
    		echo "Данные не обнаружены <br>";
		}
?>
</section>