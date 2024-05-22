<?php
// カスタム投稿タイプ「スタッフ」を登録
function create_staff_post_type()
{
  register_post_type(
    'staff',
    array(
      'labels' => array(
        'name' => __('スタッフ'),
        'singular_name' => __('スタッフ')
      ),
      'public' => true,
      'show_in_rest' => true,
      'has_archive' => true,
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
      'rewrite' => array('slug' => 'staff'),
    )
  );
}
add_action('init', 'create_staff_post_type');

// カスタムフィールドのメタボックスを追加
function add_staff_meta_boxes()
{
  add_meta_box(
    'staff_details', // ID
    'スタッフ情報', // タイトル
    'staff_meta_box_callback', // コールバック関数
    'staff' // このメタボックスが表示される投稿タイプ
  );
}
add_action('add_meta_boxes', 'add_staff_meta_boxes');

// メタボックスの内容
function staff_meta_box_callback($post)
{
  // ノンスフィールドを出力
  wp_nonce_field(basename(__FILE__), 'staff_nonce');

  // カスタムフィールドの値を取得
  $history = get_post_meta($post->ID, 'employment_history', true);
  $reason = get_post_meta($post->ID, 'employment_reason', true);

  // フォームフィールドを出力
  echo '<div>';
  echo '<p style="display: grid; grid-template-columns: 80px 560px; gap: 24px"><label for="employment_history">入社歴:</label>';
  echo '<input type="text" id="employment_history" name="employment_history" value="' . esc_attr($history) . '" size="25" /></p>';
  echo '<p style="display: grid; grid-template-columns: 80px 560px; gap: 24px"><label for="employment_reason">入社理由:</label>';
  echo '<textarea id="employment_reason" name="employment_reason" rows="4" cols="50">' . esc_textarea($reason) . '</textarea></p>';
  echo '</div>';
}

// カスタムフィールドのデータを保存
function save_staff_meta($post_id)
{
  // ノンスチェック
  if (!isset($_POST['staff_nonce']) || !wp_verify_nonce($_POST['staff_nonce'], basename(__FILE__))) {
    return $post_id;
  }

  // 自動保存ルーチンのチェック
  if (defined('DOING_AUTOSAVE') && DOING_AUTOSAVE) {
    return $post_id;
  }

  // ユーザー権限のチェック
  if ('staff' == $_POST['post_type'] && !current_user_can('edit_post', $post_id)) {
    return $post_id;
  }

  // カスタムフィールドのデータを更新
  if (isset($_POST['employment_history'])) {
    update_post_meta($post_id, 'employment_history', sanitize_text_field($_POST['employment_history']));
  }
  if (isset($_POST['employment_reason'])) {
    update_post_meta($post_id, 'employment_reason', sanitize_textarea_field($_POST['employment_reason']));
  }
}
add_action('save_post', 'save_staff_meta');
