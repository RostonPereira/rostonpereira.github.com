$(".vpop").on('click', function(e) {
    e.preventDefault();
    $("#video-up-lay,#video-popup-iframe-container,#video-up-tainer,#video-up-ose").show();

    var srchref = '',
        autoplay = '',
        id = $(this).data('id');
    if ($(this).data('type') == 'vimeo') var srchref = "//player.vimeo.com/video/";
    else if ($(this).data('type') == 'youtube') var srchref = "https://www.youtube.com/embed/";

    if ($(this).data('autoplay') == true) autoplay = '?autoplay=1';

    $("#video-popup-iframe").attr('src', srchref + id + autoplay);

    $("#video-popup-iframe").on('load', function() {
        $("#video-up-tainer").show();
    });
});

$("#video-up-ose, #video-up-lay").on('click', function(e) {
    $("#video-popup-iframe-container,#video-up-tainer,#video-up-ose,#video-up-lay").hide();
    $("#video-popup-iframe").attr('src', '');
});
