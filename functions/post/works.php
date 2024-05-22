<?php
add_action( 'init', 'create_post_works' );


function create_post_works() {

  register_post_type(
    'works',
    array(
      'label' => '施工事例',
      'public' => true,
      'has_archive' => true,
      'show_in_rest' => true,
      'menu_position' => 5,
      'supports' => array(
        "title",
        "editor",
        "thumbnail",
        "custom-fields",
        "excerpt",
        "author",
        "trackbacks",
        "comments",
        "revisions",
        "page-attributes",
      ),
    )
  );

  register_taxonomy(
    'works-cat',
    'works',
    array(
      'label' => 'カテゴリー',
      'hierarchical' => true,
      'public' => true,
      'show_in_rest' => true,
    )
  );

  register_taxonomy(
    'works-tag',

    array(
      'label' => 'タグ',
      'hierarchical' => false,
      'public' => true,
      'show_in_rest' => true,
      'update_count_callback' => '_update_post_term_count',
    )
  );

}
