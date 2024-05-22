<?php

function create_pages_and_setting()
{
  global $global_menus;
  foreach ($global_menus as $value)
  {
    setting_pages($value);
  }
}

function setting_pages($value)
{
  $parent_id = '';
  $page_slug = $value['slug'];

  if(empty(get_page_by_path( $page_slug )))
  {
    $insert_id = wp_insert_post([
      'post_title' => isset($value['page-title']) ? $value['page-title'] : $value['title'],
      'post_name' => $value['slug'],
      'post_status' => 'publish',
      'post_parent' => $parent_id,
      'post_type' => 'page',
      'post_content' => '',
    ]);
  }
  else
  {
    $page_obj = get_page_by_path( $page_slug );
    $page_id = $page_obj->ID;
    $base_post = [
      'ID' => $page_id,
      'post_title' => isset($value['page-title']) ? $value['page-title'] : $value['title'],
      'post_name' => $value['slug'],
    ];
    wp_update_post($base_post);
  }
}

add_action('after_setup_theme', 'create_pages_and_setting');
?>
