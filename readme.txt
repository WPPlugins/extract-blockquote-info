=== Extract blockquote info ===
Contributors: chetan
Donate link:
Tags: blockquote, quotes, quotation, cite, citation
Requires at least: 2.0.2
Tested up to: 3.1
Stable tag: 1.2.1

This plugin extracts `cite=""` and `title=""` details from blockquote to display with attribution and link below the quote.

== Description ==

This plugin extracts `cite=""` and `title=""` details from blockquote to display with attribution and link below the quote. `cite` field is for the web address of source quoted from. `title` for the name of the author or source.

An example of a typical block quotation (html mark-up) in use would like the following:

`<blockquote cite="http://www.quotedb.com/quotes/2369" title="Mahatma Gandhi"`>
`    Live as if you were to die tomorrow. Learn as if you were to live forever.`
`</blockquote>`

When viewed on the web, it would look like:

   Live as if you were to die tomorrow. Learn as if you 
   were to live forever.
   
   &mdash; <a href="http://www.quotedb.com/quotes/2369">Mahatma Gandhi</a>
   
This plugin is based on a javascript code by Dunstan Orchard. You might want to see <a href="http://demo.1976design.com/blockquotes/">Dunstan's Demo page</a> on how it works.

== Installation ==

1. Upload `ext-blockquote-info.php` and `blockquotes.js` to the `/wp-content/plugins/` folder.
2. Activate the plugin through the 'Plugins' menu in WordPress.

== Frequently Asked Questions ==

= Does this plugin modify the database? =

No, it does not. So it's safe.

= Is blockquote cite link and title visible in the feed too? =

Feeds do not load javascripts, so no, you'll not see it in the feed. However, by virtue of the additional information within your blockquotes, title is visible when mouse pointer is hovered over a quote. All credits to you for filling in the info, and none to this plugin for such visibility.

== Screenshots ==

None.