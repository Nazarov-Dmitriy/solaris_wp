<?php
/**
 * Plugin Name: Добавление куратора
 * Plugin URI: NONE
 * Author: Чапланов Иван Сергеевич | BitWizArts
 * Author URI: NONE
 */
add_shortcode( 'teacherID', 'curator_get' ); 
    function curator_get($atts){
        return 'UNO'; 
    }
