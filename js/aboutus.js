
function print(output) {
    console.log(output);
}

function constructImagePanes () {
    const srcfolder = '../img/headshots/';
    const fs = require('fs');
    var files = fs.readdirSync(srcfolder);
    files.forEach(print);
    var html = $("div");

    for (var i = 0; i <files.length; i++) {
        var itemHtml = '<div class="column">'
            + '<img src='+files[i] +'>'
            + '</div>';
        var $itemHtml = $(itemHtml);

        html.append($itemHtml);
    }
    return html;
}

$(document).ready(function () {
    var pictures = constructImagePanes();
    $(".picture-container").append(pictures);
})