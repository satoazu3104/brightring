<?php
function custom_news_shortcode($atts)
{
  // ショートコードの引数をデフォルト値とマージ
  $atts = shortcode_atts(
    array(
      'count' => 4, // デフォルトで5件表示
      'page-type' => '',
    ),
    $atts,
    'custom_news'
  );

  $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

  $page_type = $atts['page-type'];

  // ニュース記事を取得するクエリを作成
  $args = array(
    'post_type' => 'post', // 投稿タイプ
    'posts_per_page' => $atts['count'], // 表示する記事の件数
    'paged' => $paged,
  );
  $query = new WP_Query($args);

  // 代替の画像 URL を設定
  $fallback_image_url = get_template_directory_uri() . '/dist/assets/images/common/noimage.webp';

  // ニュース記事のループ
  if ($query->have_posts()) {
    $output = '<ul class="p-post__list ' . $page_type . '">';
    while ($query->have_posts()) {
      $query->the_post();
      $formatted_date = get_the_date('Y.m.d'); // フォーマットした投稿日を取得
      $thumbnail = get_the_post_thumbnail(get_the_ID(), 'large', array('class' => 'p-post__img--thumb'));
      if (empty($thumbnail)) {
        $thumbnail = '<img src="' . $fallback_image_url . '" alt="Fallback Image" class="p-post__img--thumb" />';
      }
      ob_start(); ?>
      <li class="items">
        <a class="p-post__items p-wrap__border-bottom" href="<?php echo get_permalink() ?>">
          <div class="p-post__items__inner <?php echo $page_type; ?>">
            <?php echo $thumbnail ?>
            <div class="p-post__items__inner--text <?php echo $page_type; ?>">
              <p class="c-text__med c-text__space--80 c-text--en c-text--white"><?php echo $formatted_date; ?></p>
              <h4 class="c-text__title c-text--white"><?php echo get_the_title(); ?></h4>
            </div>
          </div>
        </a>
      </li>
<?php
      $output .= ob_get_clean();
    }
    $output .= '</ul>';
    wp_reset_postdata();
    return $output;
  } else {
    return 'ニュース記事がありません。';
  }
}
add_shortcode('custom_news', 'custom_news_shortcode');
