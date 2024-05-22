<?php

function voice_shortcode($atts)
{
  // デフォルトの投稿数を設定
  $atts = shortcode_atts(array(
    'count' => 4,
  ), $atts, 'voice');

  // クエリの作成
  $args = array(
    'post_type' => 'voice',
    'posts_per_page' => $atts['count'],
  );

  // カスタムフィールドの取得
  $voices = new WP_Query($args);
  $fallback_image_url = get_template_directory_uri() . '/dist/assets/images/common/noimage.webp';

  // 投稿ループ
  $output = '<ul class="p-voice__list">';
  if ($voices->have_posts()) {
    while ($voices->have_posts()) {
      $voices->the_post();
      $name = get_post_meta(get_the_ID(), 'name', true);
      $review = get_post_meta(get_the_ID(), 'review', true);
      $area = get_post_meta(get_the_ID(), 'area', true);
      $comment = get_post_meta(get_the_ID(), 'comment', true);
      $before_image = get_post_meta(get_the_ID(), 'before_image', true);
      $after_image = get_post_meta(get_the_ID(), 'after_image', true);
      $thumbnail = get_the_post_thumbnail(get_the_ID(), 'large', array('class' => 'p-voice__img--thumb'));
      if ($review > 5) {
        $review = 5;
      }
      $categories = get_terms(array(
        'taxonomy' => 'voice-cat',
        'hide_empty' => true,
      ));
      if (empty($thumbnail)) {
        $thumbnail = '<img src="' . $fallback_image_url . '" alt="Fallback Image" class="p-voice__img--thumb" />';
      }

      ob_start(); ?>
      <li class="p-voice__items">
        <a class="p-voice__link" href="<?php echo get_permalink(); ?>">
          <picture class="p-voice__img--thumb__picture"><?php echo $thumbnail; ?></picture>
          <div class="p-voice__items__content">
            <div class="p-voice__items__head">
              <p class="c-text__title-reg c-text__space--med"><?php echo $categories[0]->name ?? '-'; ?></p>
              <div class="p-voice__reviews">
                <?php for ($i = 0; $i < 5; $i++) {
                  $class = $i < $review ? 'active' : '';
                  echo '<div class="p-voice__reviews__star ' . $class . '"></div>';
                } ?>
              </div>
            </div>
            <div class="p-voice__items__label">
              <p class="c-text__list-title c-text--bold c-text__space--med">
                <?php echo $name; ?>
              </p>
            </div>
            <p class="c-text__normal c-text--bold c-text__space--med c-text__line-cut--1">
              <?php echo $comment; ?>
            </p>
          </div>
          <div class="p-voice__arrow"></div>
        </a>
      </li>
<?php
      $output .= ob_get_clean();
    }
  }
  $output .= '</ul>';
  return $output;
}
add_shortcode('voice', 'voice_shortcode');
