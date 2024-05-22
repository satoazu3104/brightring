<?php
// [custom_pagination post_type="your_post_type" posts_per_page="5"] のように使用。
// 特定のカスタム投稿タイプの一覧とページネーションを表示することができる。
// post_type には表示したいカスタム投稿タイプを、posts_per_page には1ページあたりに表示したい投稿数を指定。
function custom_pagination_shortcode($atts) {
    $atts = shortcode_atts(array(
        'post_type' => 'post',
        'posts_per_page' => 10,
    ), $atts);
    
    $paged = (get_query_var('paged')) ? get_query_var('paged') : 1;
    
    $args = array(
        'post_type' => $atts['post_type'],
        'posts_per_page' => $atts['posts_per_page'],
        'paged' => $paged,
    );

    $query = new WP_Query($args);
    $output = '<div class="c-pagination__wrap">';

    if ($query->have_posts()) {

        $big = 999999999; // need an unlikely integer

        $output .= paginate_links(array(
            'base' => str_replace($big, '%#%', esc_url(get_pagenum_link($big))),
            'format' => '?paged=%#%',
            'current' => max(1, get_query_var('paged')),
            'total' => $query->max_num_pages,
            'prev_next' => true,
            'prev_text' => __('<div class="number-arrow"></div> PREV'),
            'next_text' => __('Next <div class="number-arrow"></div>'),
        ));

        wp_reset_postdata();
    }
    $output .= '</div>';

    return $output;
}
add_shortcode('custom_pagination', 'custom_pagination_shortcode');