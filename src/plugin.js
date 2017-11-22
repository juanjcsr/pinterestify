(($) => {

    $.fn.pinterestify = function (options) {

        var item = $('#container');

      for (let value of options.data) {
        console.log(value);

        var divContenedor = $('<div class="item"></div>');
        var title = $(divContenedor).append(`<h2>${value.title}</h2>`);
        var description = $(divContenedor).append(`<div>${value.description}</div>`);
        var image = $(divContenedor).append(`<img src="${value.image_url}"/>`);
        var user = $(divContenedor).append(`<div>${value.user}</div>`);
        var username = $(divContenedor).append(`<div>${value.username}</div>`);
        var hashtag = $(divContenedor).append(`<div>${value.hashtag}</div>`);

        item.append(divContenedor);
      }

      $(function(){
        $('#container').masonry({
          // options
          itemSelector : '.item'
        });
  });

      // console.log( "plugin!!!", options);
    }

  })(jQuery);
