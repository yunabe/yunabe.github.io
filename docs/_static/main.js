(function() {
  $('.body').append($('<div style="text-align:center"><a id="cmtbtn">コメント追加</a></div>'));
  var commentButton = $('#cmtbtn');
  commentButton.click(function() {
      commentButton.hide();
      $('body').append($('<div id="fb-root"></div>'));
      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v2.0";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
      $('.body').append($('<div class="fb-comments" data-numposts="5" data-colorscheme="light" data-width="100%"></div>')
                        .attr({'data-href': location.href.split('#')[0]}));
  });
})();
