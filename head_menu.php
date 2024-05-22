<?php
$menus = wp_get_nav_menu_items('header');
// メニュー項目を階層構造に整理する関数
function build_menu_tree($menu_items)
{
  $menu = array();
  $menu_by_id = array();

  foreach ($menu_items as $menu_item) {
    $menu_by_id[$menu_item->ID] = $menu_item;
    if ($menu_item->menu_item_parent == 0) {
      $menu[$menu_item->ID] = $menu_item;
      $menu[$menu_item->ID]->children = array();
    } else {
      if (!isset($menu_by_id[$menu_item->menu_item_parent]->children)) {
        $menu_by_id[$menu_item->menu_item_parent]->children = array();
      }
      $menu_by_id[$menu_item->menu_item_parent]->children[] = $menu_item;
    }
  }
  return $menu;
}

$menus = build_menu_tree($menus);
$head_index = 0;
$head_count = count($menus);

$post = get_post(get_the_ID());
$slug = $post ? $post->post_name : null;
$head_index = 0;
$head_count = count($menus);
?>

<header class="l-header__wrap <?php echo is_front_page() ? '' : 'active is-active'; ?>">

  <div class="l-row l-header__wrap__inner">
    <!-- ロゴ -->
    <div class="l-header__wrap--logo">
      <a class="l-header__img--logo__wrap" href="<?php echo is_front_page() ? '#top' : get_site_url(); ?>">
        <img class="l-header__img--logo header" src="<?php echo get_template_directory_uri() . '/dist/assets/images/common/icon-logo-header.webp'; ?>" alt="Logo image">
      </a>
    </div>
    <!-- ナビゲーション -->
    <nav class="l-header__nav js-menu-wrap">

      <ul class="l-header__list">
        <?php
        if (!empty($menus)) : foreach ($menus as $menu) :
            $head_index++;
            $title = strtoupper($menu->title);
            $post_loop = get_post($menu->object_id);
            $slug = strtoupper($post_loop->post_name);
            $active = get_the_ID() == $menu->object_id ? 'is-active' : '';
        ?>
            <li class="l-header__items <?php echo $active; ?>">
              <a href="<?php echo $menu->url; ?>" class="l-header__link" data-slug="<?php echo $slug; ?>">
                <p class="c-text--en c-text__med pc c-text--white c-text--center">
                  <?php echo $slug; ?>
                </p>
                <p class="c-text__normal c-text--bold c-text--white c-text--center">
                  <?php echo $title; ?>
                </p>
              </a>
              <?php if (!empty($menu->children)) : ?>
                <ul class="l-header__list--sub">
                  <?php foreach ($menu->children as $child) : ?>
                    <li class="l-header__items--sub">
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
            <?php
            if ($head_index < $head_count) {
              // echo '<div class="l-header__dec--bar"></div>';
            }
            ?>
        <?php endforeach;
        endif;
        ?>
      </ul>

    </nav>
    <button class="p-nav__button sp js-menu-button">
      <span class="p-nav__button--line js-menu-line"></span>
      <span class="p-nav__button--line js-menu-line"></span>
      <span class="p-nav__button--line js-menu-line"></span>
    </button>
  </div>

</header>