function myInnerHTML() {
    "use strict";
    var items = [], i = 0;
    for (i = 0; i < 100; i += 1) {
        items[i] = i;
    }
    document.getElementById("innerHTML").innerHTML = items.join("</br>");
}
function myAppendChild() {
    "use strict";
    var i = 0, node, textnode;
    while (i < 100) {
        node = document.createElement("LI");
        node.appendChild(document.createTextNode(i));
        document.getElementById("list").appendChild(node);
        i += 1;
    }
}
function myAppendChild_do_while() {
    "use strict";
    var i = 0, node, textnode;
    do {
        node = document.createElement("LI");
        node.appendChild(document.createTextNode(i));
        document.getElementById("list").appendChild(node);
        i += 1;
    } while (i < 100);
}
function myCreateDocumentFragment(x) {
    "use strict";
    var frag, content;
    function addFragment(x) {
        if (x < 100) {
            frag = document.createDocumentFragment();
            content = frag.appendChild(document.createElement('li'));
            content.appendChild(document.createTextNode(x));
            document.getElementById("list").appendChild(frag);
            x += 1;
            addFragment(x);
        }
    }
    addFragment(x);
}
function clear_all() {
    "use strict";
    var list = document.getElementById("list");
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
    }
}