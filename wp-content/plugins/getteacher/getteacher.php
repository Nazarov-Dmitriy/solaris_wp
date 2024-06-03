<?php
/**
 * Plugin Name: Добавление куратора
 * Plugin URI: NONE
 * Author: Чапланов Иван Сергеевич | BitWizArts
 * Author URI: NONE
 */
 
 function get_teacher_id($atts) {
    $atts = shortcode_atts(array(
    'id' => '10', // Значение по умолчанию для атрибута ID
    ), $atts);
    
    return $atts['id'];
    }
    
    // Регистрируем шорткод и указываем обработчик для него
    add_shortcode('TeacherID', 'get_teacher_id');
