<?php
global $post;
$post_type = $post->post_name;

// 電話番号
$phone_number = '090-1682-5652';

// フッターナビゲーションメニュー表示関数
function display_footer_menu()
{
  $menus = wp_get_nav_menu_items('footer');

  $menus = build_menu_tree($menus);
  if (!empty($menus)) {
    echo '<nav class="l-footer__menu--nav"><ul class="l-footer__menu--list">';
    foreach ($menus as $menu) {
      $title = strtoupper($menu->title);
      $post_loop = get_post($menu->object_id);
      $slug = strtoupper($post_loop->post_name);

?>
      <li class="l-footer__menu--items l-header__items">
        <a href="<?php echo $menu->url; ?>" data-slug="<?php echo $slug; ?>" class="l-header__link c-text--white">
          <p class="c-text--en c-text__list-title c-text--white">
            <?php echo $slug; ?>
          </p>
          <p class="c-text__med c-text--med c-text--white">
            <?php echo $title; ?>
          </p>
        </a>
        <?php if (!empty($menu->children)) : ?>
          <ul class="l-header__list--sub nofix">
            <?php foreach ($menu->children as $child) : ?>
              <li class="l-header__items--sub nofix">
                <a href="<?php echo $child->url; ?>" class="l-header__link">
                  <p class="c-text__normal c-text--bold c-text--white">
                    <?php echo strtoupper($child->title); ?>
                  </p>
                </a>
              </li>
            <?php endforeach; ?>
          </ul>
        <?php endif; ?>
      </li>
  <?php }
    echo '</ul></nav>';
  }
}

// ロゴ
function display_logo()
{ ?>
  <div class="l-footer__wrap--logo">
    <a href="<?php echo esc_url(get_site_url()); ?>" class="">
      <img class="l-footer__img--logo" src="<?php echo esc_url(get_template_directory_uri() . '/dist/assets/images/common/icon-logo-footer.webp'); ?>" alt="Logo image">
    </a>
  </div>
<?php }

// スマホ画面底部固定メニュー
function display_fixed_mobile_menu($phone_number)
{ ?>
  <div class="l-footer__fix sp js-fix-bottom">
    <a class="l-footer__fix--inner" href="tel:<?php echo esc_attr($phone_number); ?>">
      <img class="lazyload block-media l-footer__fix--img" data-src="<?php echo esc_url(get_template_directory_uri() . '/dist/assets/images/common/icon-phone.webp'); ?>" alt="phone">
      <p class="c-text__title c-text--en c-text--white c-text--bold">
        <?php echo esc_html($phone_number); ?>
      </p>
    </a>
    <a class="l-footer__fix--inner" href="<?php echo esc_url(site_url('/contact/')); ?>" data-state="line">
      <img class="lazyload block-media l-footer__fix--img" data-src="<?php echo esc_url(get_template_directory_uri() . '/dist/assets/images/common/icon-mail.webp'); ?>" alt="phone">
      <p class="c-text__title c-text--white c-text--bold">
        お問い合わせ
      </p>
    </a>
  </div>
<?php }

// 会社情報リスト
function display_information($phone_number)
{
  $info_list = [
    ['icon' => '', 'text' => '本社 : 〒689-3543<br class="pc"><span>　</span>鳥取県米子市蚊屋316-13'],
    ['icon' => '', 'text' => '長海工場 : 〒690-1112<br class="pc"><span>　</span>島根県松江市長海町624番2'],
    ['icon' => '', 'text' => 'TEL : 090-1682-5652<br class="pc"><span> / </span>FAX : 0859-27-3039'],
  ];
  echo '<div class="l-footer__information__list">';
  foreach ($info_list as $info) {
    echo '<div class="l-footer__information__items">';
    if ($info['icon']) {
      echo '<img class="l-footer__img--information-icon" src="' . esc_url(get_template_directory_uri() . '/dist/assets/images/common/icon-' . $info['icon'] . '.webp') . '" alt="icon">';
    }
    echo '<p class="c-text--white c-text__lh--2 c-text__normal">' . $info['text'] . '</p>';
    echo '</div>';
  }
  echo '</div>';
}
?>

<style>
  html {
    margin-top: 0px !important;
  }
</style>

<div class="l-footer__box">

  <div class="l-footer__banner l-row">
    <a id="" class="p-busi__items js-scroll-up" href="<?php echo site_url().'/company'; ?>">
      <object>
        <picture class="p-busi__img--item__picture ">
          <img decoding="async" class="p-busi__img--item block-media" data-src="/dist/assets/images/media/banner-company.webp" src="" alt="media">
        </picture>
      </object>
    </a>
    <a id="" class="p-busi__items js-scroll-up" href="<?php echo site_url().'/contact'; ?>">
      <object>
        <picture class="p-busi__img--item__picture ">
          <img decoding="async" class="p-busi__img--item block-media" data-src="/dist/assets/images/media/banner-contact.webp" src="" alt="media">
        </picture>
      </object>
    </a>
  </div>

  <footer class="l-footer__wrap ">
    <div class="l-row">
      <div class="l-footer__wrap--top">
        <?php display_logo(); ?>

        <?php display_footer_menu(); ?>

      </div>

      <div class="l-footer__wrap--bottom">
        <?php display_information($phone_number); ?>
        
        <p class="c-text--white c-text__med c-text--en c-text--opacity5">Copyright© BRIGHT RING Inc, All rights Reserved.</p>
      </div>
    </div>
  </footer>
</div>
</main>

<?php
// スマホ画面底部固定メニュー
display_fixed_mobile_menu($phone_number);
?>

<?php wp_footer(); ?>

</body>

</html>