function constructImagePanes () {
    const srcfolder = '../img/headshots/';

    var html = $("div");

    $.ajax({
        url : srcfolder,
        success : function (data) {
            $(data).find("a").attr("href", function (i, val) {
                if (val.match(/\.(jpe?g|png)$/)) {
                    var itemHtml = '<div class="column">'
                        + '<img src='+files[i] +'>'
                        + '</div>';
                    var $itemHtml = $(itemHtml);
                    html.append($itemHtml);
                }
            })
        }
    })
    return html;
}

$(document).ready(function () {
    var pictures = constructImagePanes();
    $(".picture-container").append(pictures);
})

