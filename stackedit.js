userCustom.onPreviewFinished = function() {
    $('#preview-contents dd').each(function() {
        $(this).html(function(index,html){
            return html.replace(/\[ ?\]/g,'<i class="icon-check-empty"></i>');
        });
        $(this).html(function(index,html){
            return html.replace(/\[X\]/ig,'<i class="icon-check"></i>');
        });
    });
    $('#preview-contents li').each(function() {
        $(this).html(function(index,html){
            return html.replace(/\[ ?\]/g,'<i class="icon-check-empty"></i>');
        });
        $(this).html(function(index,html){
            return html.replace(/\[X\]/ig,'<i class="icon-check"></i>');
        });
    }); 
};



userCustom.onPagedownConfigure = function(editor) {
    var previewContentsElt = document.getElementById('preview-contents');
    editor.hooks.chain("onPreviewRefresh", function() {
        ['class', 'activity', 'usecase'].forEach(function(type) {
            _.each(previewContentsElt.querySelectorAll('.prettyprint > .language-' + type), function(elt) {
                var preElt = elt.parentNode;
                var imgElt = $('<img>').attr({
                    src: 'http://yuml.me/diagram/plain/' + type + '/' + encodeURIComponent(elt.textContent.replace(/\n/g, ', '))
                });
                preElt.parentNode.replaceChild(imgElt[0], preElt);
            });
        });
    });
};


/* Tentativa de uso ccom MERMAID
userCustom.onPagedownConfigure = function(editor) {
	var head = document.getElementsByTagName('head')[0];

	var js = document.createElement("script");
	js.type = "text/javascript";
	js.src = "https://cdn.rawgit.com/knsv/mermaid/0.5.1/dist/mermaid.min.js";
	head.appendChild(js);

	var js = document.createElement("script");
	js.type = "text/javascript";
	js.src = "https://cdn.rawgit.com/knsv/mermaid/0.5.1/dist/mermaidAPI.js";
	head.appendChild(js);

	js = document.createElement("script");
	js.type = "text/javascript";
	js.innerHTML="mermaid.initialize({startOnLoad:false});";
	head.appendChild(js);

    var previewContentsElt = document.getElementById('preview-contents');
    editor.hooks.chain("onPreviewRefresh", function() {
        ['mermaid'].forEach(function(type) {
            _.each(previewContentsElt.querySelectorAll('.prettyprint > .language-' + type), function(elt) {
//                var preElt = elt.parentNode;
//               	
//        		var graph = mermaidAPI.render(elt.textContent);
//    			var nElt = document.createElement('div');
//    			nElt.className="mermaid";
//    			nElt.innerHTML = graph;
//
//                preElt.parentNode.replaceChild(nElt, preElt);
            });
        });
    });
};
*/

