(($) => {

    $.fn.pinterestify = function (options) {
      console.log( "plugin!!!", options);
      const modal = $(`<div class="modal-estilo"><img id="imageyoutube" src=""  /></div>`)
      $('body').append(modal);
      modal.hide();

      for (const pin of options.data) {

        const description = $(`<p>${pin.description}</p>`);
        const hashtag = $(`<h1>${pin.hashtag}</h1>`);
        const autor = $(`<p>${pin.user}</p>`);
        const img = $(`<img src="${pin.image_url}">`);

        $('.imagenes').append(img);
        $('.imagenes').append(description);
        $('.imagenes').append(hashtag);
        $('.imagenes').append(autor);

        img.click(function(){
          console.log("ya reconoce el click");
          modal.find("#imageyoutube").prop("src", pin.image_url);
          modal.show();
        })
      }


    }

  })(jQuery);
