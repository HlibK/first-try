$(window).on("load", function(){

    //PageScroll to ID
    $("a[rel='m_PageScroll2id']").mPageScroll2id();

    //Video background vide.js
    $('#header').vide('../video/laptop', {
        bgColor: '#1E4776;'
    });
});