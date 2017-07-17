<?php
/*
Plugin Name: Extract blockquote info
Plugin URI: http://wordpress.org/extend/plugins/extract-blockquote-info/
Description: A WP plugin based on <a href="http://demo.1976design.com/blockquotes/">Dunstan's Blockquotes</a> that extracts <code>cite=""</code> and <code>title=""</code> details from blockquote to display with attribution and link below the quote. <code>cite</code> field is for the web address of source quoted from. <code>title</code> for the name of the author or source.
Version: 1.2.1
Author: Chyetanya Kunte
Author URI: http://ckunte.net
*/
function wpebi_add_head() {
    echo "\n<script type=\"text/javascript\" src=\"" . get_option('siteurl') . "/wp-content/plugins/blockquotes.js\"></script>\n";
}

if (function_exists('add_action')) {
   add_action( 'wp_head', 'wpebi_add_head' );
}
?>