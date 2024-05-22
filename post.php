<?php
$formatted_date = get_the_date('Y.m.d'); // フォーマットした投稿日を取得

$fallback_image_url = get_template_directory_uri() . '/dist/assets/images/common/noimage.webp';

function Space($space, $sp_space)
{
?>
  <div class="pc" style="height: clamp(<?php echo $sp_space . 'px'; ?>, <?php echo $space / 1920 * 100 . 'vw'; ?>, <?php echo $space . 'px'; ?>);"></div>
  <div class="sp" style="height: <?php echo $sp_space . 'px'; ?>;"></div>
<?php
}

$thumbnail = get_the_post_thumbnail(get_the_ID(), '', array('class' => 'p-post__img--thumb'));
if (empty($thumbnail)) {
  $thumbnail = '<img src="' . $fallback_image_url . '" alt="Fallback Image" class="p-post__img--thumb" />';
}
$post_type = get_post_type(get_the_ID());
$title_en = $post_type == 'works' ? "WORKS" : "NEWS";
$title_ja = $post_type == 'works' ? "施工実績" : "新着情報";
$hero = $post_type == 'works' ? 'hero-works' : 'hero-news';
$works_link = get_site_url() . '/work';
$blog_link = get_site_url() . '/news';
if ($post_type == 'works') {
  $categories = get_terms(array(
    'taxonomy' => 'works-cat',
    'hide_empty' => true,
  ));
}
?>

<div id="" class="l-page__wrap min "=""="">
  <div id="" class="l-row l-page__content "=""="">
    <picture class="l-page__img--title__picture "><img decoding="async" class="l-page__img--title block-media" data-src="/dist/assets/images/media/news-title-page.webp" src="" alt="media"></picture>

    <div class="wp-block-portart-bodytext">
      <p class="c-text__header-title c-text--big js-blocks-text " id="">お知らせ</p>
    </div>
  </div>
</div>

<div class="p-dec__back">
  <div class="p-dec__back--clip max">
  </div>
  <?php Space(80, 48); ?>
  <div class="l-row" data-state="med">
    <div class="p-width__fit">
      <h1 class="c-text__header-title c-text--bold"><?php echo get_the_title(); ?></h1>
    </div>

    <?php Space(48, 32); ?>

    <p class="c-text__med c-text--bold c-text--main c-text--en"><?php echo $formatted_date ?></p>

    <?php Space(48, 32); ?>

    <!-- 画像ギャラリー-->
    <?php echo $thumbnail; ?>
    <!-- /画像ギャラリー-->

    <?php Space(80, 48); ?>

    <div class="c-text__normal p-post__content">
      <?php echo the_content(); ?>
    </div>

    <?php Space(80, 48); ?>

    <a href="<?php echo $post_type == 'works' ? $works_link : $blog_link; ?>" class="c-button__wrap center return">
      <div class="c-button__before"></div>
      <div class="c-button">
        <p class="c-text--center c-text__title-reg c-text--med">記事一覧に戻る</p>
      </div>
      <div class="c-button__after"></div>
    </a>

    <?php Space(80, 48); ?>

  </div>
</div>