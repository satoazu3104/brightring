<?php
get_header();
$post = get_post(get_the_ID());
$slug = $post ? $post->post_name : null;
console_log($post->post_type);
?>
<?php if (is_front_page()) : ?>
  <!-- <div class="u-anim__first js-first-animation">
    <div class="u-anim__first--icon js-first-animation"></div>
  </div> -->
<?php endif; ?>
<!-- <a href="<?php echo site_url() . '/contact'; ?>" class="c-fv__fixed"></a> -->
<div class="l-section__load"></div>
<div class="l-section__back"></div>
<main class="l-section__main" data-state="main" data-slug="<?php echo $slug; ?>">
  <div class="l-section__back"></div>
  <div class="">
    <?php
    if (is_single()) {
      $post_type = get_post_type(get_the_ID());
      if ($post_type == 'works') {
        // include get_template_directory().'/works.php';
        include get_template_directory() . '/post.php';
      } else {
        include get_template_directory() . '/post.php';
      }
    } else if ($post->post_type == 'works') {
      $work_page = get_page_by_path('work');

      // ページデータが存在する場合のみ処理を実行
      if ($work_page) {
        // ページIDを使ってポストデータをセットアップ
        $post = get_post($work_page->ID);
        setup_postdata($post);

        // ページの内容を出力
        the_content();

        // グローバルな$post変数をリセット
        wp_reset_postdata();
      }
    } else if ($post->post_type == 'post') {
      $work_page = get_page_by_path('news');

      // ページデータが存在する場合のみ処理を実行
      if ($work_page) {
        // ページIDを使ってポストデータをセットアップ
        $post = get_post($work_page->ID);
        setup_postdata($post);

        // ページの内容を出力
        the_content();

        // グローバルな$post変数をリセット
        wp_reset_postdata();
      }
    } else {
      the_content();
    }
    ?>
    <?php
    get_footer();
    ?>