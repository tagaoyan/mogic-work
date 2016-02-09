var MIMETEX = 'https://ygao.org/cgi-bin/mimetex.cgi';

var loadInlineMath = function(elem) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', MIMETEX + "?" + elem.alt);
    xhr.responseType = "blob";
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(this.response);
            elem.src = imageUrl;
            elem.style.verticalAlign = this.getResponseHeader('Vertical-Align') + 'px';
        }
    };
    xhr.send();
};

var loadDisplayMath = function(elem) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', MIMETEX + "?" + elem.alt);
    xhr.responseType = "blob";
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var urlCreator = window.URL || window.webkitURL;
            var imageUrl = urlCreator.createObjectURL(this.response);
            elem.src = imageUrl;
        }
    };
    xhr.send();
};

var math_i = document.getElementsByClassName('math-inline');
for (var i = 0; i < math_i.length; i++) {
    loadInlineMath(math_i[i]);
}

var math_d = document.getElementsByClassName('math-display');
for (var i = 0; i < math_d.length; i++) {
    loadDisplayMath(math_d[i]);
}
