<!--
// Dunstan Orchard
// http://1976design.com/blog/archive/2003/11/10/updates/
// This code is licensed under: http://creativecommons.org/licenses/by-nc-sa/1.0/
// Altered from original idea by Simon Willison at:
// http://simon.incutio.com/archive/2002/12/20/blockquoteCitations
// Based on Simon's script, WordPress plugin created by Chyetanya Kunte:
// http://ckunte.net
// Script optimised by Chetan Kunte on 17.Nov.2009
function extractBlockquoteInfo() {
  quotes = document.getElementsByTagName("blockquote");
  for(i = 0;i < quotes.length;i++) {
    cite = quotes[i].getAttribute("cite");
    title = quotes[i].getAttribute("title");
    if(cite && cite != "") {
      if(cite.match("http://", "i") || cite.match("ftp://", "i") || cite.match("person://", "i")) {
        newlink = document.createElement("a");
        newlink.setAttribute("href", cite);
        newlink.setAttribute("title", "Go to " + cite);
        (title = quotes[i].getAttribute("title")) && title != "" ? newlink.appendChild(document.createTextNode(title)) : newlink.appendChild(document.createTextNode("Source"));
        newdiv = document.createElement("div");
        newdiv.className = "source";
        newdiv.appendChild(document.createTextNode("\u2014 "));
        newdiv.appendChild(newlink)
      } else {
        newdiv = document.createElement("div");
        newdiv.className = "source";
        newdiv.appendChild(document.createTextNode("\u2014 " + cite))
      } quotes[i].appendChild(newdiv)
    } else if(title && title != "") {
      newdiv = document.createElement("div");
      newdiv.className = "source";
      newdiv.appendChild(document.createTextNode("\u2014 " + title));
      quotes[i].appendChild(newdiv)
    }
  }
}
window.onload = function() {
  extractBlockquoteInfo()
};
-->