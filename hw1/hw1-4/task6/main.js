"use strict";
function addUl1(text) {
    document.write("<ul>");
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>
            `);
    }
    document.write("</ul>");
}
addUl1("qwe");
