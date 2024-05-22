<?php 
function media_setup() {
  $theme_directory = str_replace(content_url(), '', get_template_directory_uri());
  $medias_file = glob('wp-content'.$theme_directory.'/dist/assets/images/**/*.webp');
  $default_path = 'wp-content'.$theme_directory.'/dist/assets/images/';
  global $medias;
  foreach($medias_file as $file) {
    $path = str_replace($default_path, '', $file); //不要内パスを削除
    $path = str_replace('.webp', '', $path);
    $file_array = explode('/', $path); //スラッシュで区切り配列に
    if(preg_match('/-sp/', $file_array[1])) {
      $sp = $file_array[1];
      $pc = str_replace('-sp', '', $sp);
      //  スマホ画像
      $medias[$file_array[0]][$pc]['src_sp'] = $file_array[0].'/'.$sp;
    } else {
      if(!isset($medias[$file[0]][$file_array[1]])) {
        // ノーマル画像
        $medias[$file_array[0]][$file_array[1]]['alt'] = $file_array[1];
        $medias[$file_array[0]][$file_array[1]]['src'] = $file_array[0].'/'.$file_array[1];
      }
    }
  }
}

add_action('after_setup_theme', 'media_setup');

?>
