<?php
function custom_works_shortcode($atts)
{
  // ショートコードの引数をデフォルト値とマージ
  $atts = shortcode_atts(
    array(
      'count' => 3, // デフォルトで5件表示
      'splide' => false, // デフォルトではスライドオフ
    ),
    $atts,
    'custom_works'
  );

  $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
  $term = (get_query_var('term')) ? get_query_var('term') : '';

  if (!empty($term) && !empty($term)) {
    $tax_query = array(
      array(
        'taxonomy' => 'works-cat',
        'field'    => 'slug',
        'terms'    => $term,
      ),
    );
  } else {
    $tax_query = array(); // タクソノミーが指定されていない場合、空のタクソノミークエリを設定
  }

  // ニュース記事を取得するクエリを作成
  $args = array(
    'post_type' => 'works', // 投稿タイプ
    'posts_per_page' => $atts['count'], // 表示する記事の件数
    'paged' => $paged,
    'tax_query' => $tax_query, // タクソノミークエリを追加
  );
  $query = new WP_Query($args);

  $splide_list = $atts['splide'] ? 'splide__list' : '';
  $splide_slide = $atts['splide'] ? 'splide__slide' : '';

  // 代替の画像 URL を設定
  $fallback_image_url = get_template_directory_uri() . '/dist/assets/images/common/noimage.webp';

  // ニュース記事のループ
  if ($query->have_posts()) {
    if ($atts['splide']) {
      // splide 有り
      $output = '<section class="splide splide__case p-case__splide"><div class="splide__track"><ul class="splide__list">';
      $index = 0;
      while ($query->have_posts()) {
        $index++;
        $query->the_post();
        $formatted_date = get_the_date('Y.m.d'); // フォーマットした投稿日を取得
        $thumbnail = get_the_post_thumbnail(get_the_ID(), 'large', array('class' => 'p-post__img--thumb'));
        if (empty($thumbnail)) {
          $thumbnail = '<img src="' . $fallback_image_url . '" alt="Fallback Image" class="p-post__img--thumb" />';
        }
        $address = get_post_meta(get_the_ID(), 'works_address', true);
        $content = get_the_content();
        $content = wp_filter_nohtml_kses($content); // HTML タグを削除

        ob_start(); ?>
        <li class="splide__slide p-case__slide">
          <a class="p-post__items" href="<?php echo get_permalink() ?>">
            <div class="p-post__items__inner">
              <?php echo $thumbnail; ?>
              <div class="p-post__items__inner--text">
                <p class="c-text--en2 c-text__min c-text--gray">
                  <?php echo $formatted_date ?>
                </p>
                <h4 class="c-text__title-reg c-text--white"><?php echo get_the_title(); ?></h4>
              </div>
            </div>
          </a>
        </li>
      <?php
        $output .= ob_get_clean();
      }
      $output .= '</ul></div></section>';
    } else {
      // splide 無し
      $output = '<ul class="p-post__list ' . $splide_list . '">';
      while ($query->have_posts()) {
        $query->the_post();
        $formatted_date = get_the_date('Y.m.d'); // フォーマットした投稿日を取得
        $thumbnail = get_the_post_thumbnail(get_the_ID(), 'large', array('class' => 'p-post__img--thumb'));
        $categories = get_the_terms(get_the_ID(), 'works-cat');
        if (empty($thumbnail)) {
          $thumbnail = '<img src="' . $fallback_image_url . '" alt="Fallback Image" class="p-post__img--thumb" />';
        }

        ob_start(); ?>
        <li class="items">
          <a class="p-post__items" href="<?php echo get_permalink() ?>">
            <div class="p-post__items__inner">
              <?php echo $thumbnail; ?>
              <div class="p-post__items__inner--text">
                <div class="p-post__items__inner--tag">
                  <p class="c-text--en c-text__normal c-text__space c-text--gray">
                    <?php echo $formatted_date ?>
                  </p>
                  <p class="c-text__normal c-text__space--min c-text--gray">
                    <?php echo $categories[0]->name ?? 'その他'; ?>
                  </p>
                </div>
                <h4 class="c-text__list-content c-text--med"><?php echo get_the_title(); ?></h4>
              </div>
            </div>
          </a>
        </li>
<?php
        $output .= ob_get_clean();
      }
      $output .= '</ul>';
    }
    wp_reset_postdata();
    return $output;
  } else {
    return '記事がありません。';
  }
}
add_shortcode('custom_works', 'custom_works_shortcode');
