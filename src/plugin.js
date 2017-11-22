(($) => {
  
    $.fn.pinterestify = function (options) {
  
      console.log( "plugin!!!", options);
      const buildModal = (title, author, img, description) => {
       return `<section class='modal'>
          <h3>${title}</h3>
          <a class="cerrar" href="">X</a>
          <div class='imagen'>  
            <p>${author}</p>
            <img id='modal' src='${img}' />
            <p>${description}</p>
          </div>
          </section>`;
      }
      
      
     
     

      for (const pin of options.data) {
        const $title = $(`<h3>${pin.title}</h3>`);
        const $description = $(`<p>${pin.description}</p>`);
        const $image = $(`<img src='${pin.image_url}'/>`);
        const $hashTag = $(`<span>${pin.hashtag}</span>`);
        const $author = $(`<p>${pin.user}</p>`);

        const $modal = $(buildModal(pin.title, pin.user, pin.image_url, pin.description));

        $('body').append($modal);

        $image.click(function() {
          $modal.show();
        });

        $('.imagenes').append($title);
        $('.imagenes').append($author);
        $('.imagenes').append($description);
        $('.imagenes').append($image);
        $('.imagenes').append($hashTag);
      }
    }
  
  })(jQuery);