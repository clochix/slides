if (typeof ids === 'undefined') {
  ids = [];
}
var scripts = document.getElementsByTagName('script');
for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];
    if (script.type != 'text/markdown') continue;
    var md = script.innerHTML.replace(/^\s<!--*/, '')
        .replace(/-->\s*$/, '');
    var markup = new Showdown.converter().makeHtml(md);
    var slides = markup.split('<hr />');
    for (var j = 0; j < slides.length; j++) {
      document.write('<div class="slide slide-' + (ids[j]||j) + '">' + slides[j] + '</div>');
    }
}
w3c_slidy.add_listener(document.body, "touchend", w3c_slidy.mouse_button_click);

