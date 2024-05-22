<!doctype html>
<!-- -->
<html <?php language_attributes(); ?>>

<head>
  <meta charset="<?php bloginfo('charset'); ?>" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="profile" href="https://gmpg.org/xfn/11" />

  <!-- Adobe fonts -->
  <!-- /Adobe fonts -->

  <!-- google fonts -->
  <!-- <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Noto+Serif+JP:wght@700&family=Roboto:wght@400;700&display=swap" rel="stylesheet"> -->
  <!-- google fonts -->
  <?php
  wp_head();
  ?>
</head>

<body <?php body_class(); ?>>
  <?php
  include get_template_directory() . '/head_menu.php';
  wp_body_open(); ?>