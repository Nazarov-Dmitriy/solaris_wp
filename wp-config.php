<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе установки.
 * Необязательно использовать веб-интерфейс, можно скопировать файл в "wp-config.php"
 * и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки базы данных
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://ru.wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Параметры базы данных: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'solaris' );
// define( 'DB_NAME', 'f0948728_solaris' );

/** Имя пользователя базы данных */
define( 'DB_USER', 'solaris-admin' );
// define( 'DB_USER', 'f0948728_solaris-admin' );

/** Пароль к базе данных */
define( 'DB_PASSWORD', 'adminsol2024' );
// define( 'DB_PASSWORD', 'adminsol2024' );

/** Имя сервера базы данных */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

// lдля бд на серваке http://solaris-wp.ru//


/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу. Можно сгенерировать их с помощью
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}.
 *
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными.
 * Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'p{-W ltw<IK=FfHAXPu$kulRI15mA}v*7ECoq@5 ,V>tC=]u2IM^Or830c94y$~[' );
define( 'SECURE_AUTH_KEY',  ':..f4@}X !2q$5R![U/;yLJA[`<luwp1Uyef4:caTCfY,KjGz!z8aRbsvy~moON]' );
define( 'LOGGED_IN_KEY',    '|Vn:{=n8~N;QJ#n-cc;0BF vXWC}n.P7:0uwk*@pTF~f^fkO3^ %8tz/Mb]JD~&<' );
define( 'NONCE_KEY',        '/thgkckO(ABOQpbE/%~{W%r*mmdUaxZ9;oS>KvE~l`J^E:gLlD{CwB1&z)`JBUju' );
define( 'AUTH_SALT',        'YKBrKr7`JhMh!]#>PFSqhGbr9#y}bi+wF6bE3@RtAJ^Uc[1Zb3|zMWd~ X/+ih-L' );
define( 'SECURE_AUTH_SALT', '%>Gr?,O?VdNOS;Ji6`:9Z>w-c{rK[See+^$i1ie]1&2~N&]|tY+Rv!8N8AxWM/o|' );
define( 'LOGGED_IN_SALT',   'M]B&hiImz^KN;L48:)&7Q}Z;Fb0VZbFv6VI@<I]2J -V6,?&%{3[k:51Z?#@<]75' );
define( 'NONCE_SALT',       '&%9;&$S#xdcc9%};$Ae4D|K(%`=gBdjJn[)|>sZELAp! :9<vNU_[aOCBPL#jC~g' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в документации.
 *
 * @link https://ru.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Произвольные значения добавляйте между этой строкой и надписью "дальше не редактируем". */



/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once ABSPATH . 'wp-settings.php';
