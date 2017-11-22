(($) => {

    $.fn.pinterestify = function (options) {
      console.log(options.data);

      const modal = $(`<div class="popup"></div>`);
      const contElementoModal = $(`<div class="popup-inner"><img id="image-modal" src="" /></div>`)
      const tache = $(`<span class="popup-close">X</span>`);
      tache.click(function () {
        modal.hide()
      })
      modal.append(contElementoModal);
      contElementoModal.append(tache);
      $('body').append(modal)
      modal.hide()

      console.log(modal);

      for (const i of options.data){
        const container = $(`<div></div>`);
        const image = $(`<img src='${i.image_url}'/>`);
        const title = $(`<h3>${i.title}</h3>`);
        const descripcion = $(`<p>${i.description}</p>`);
        const autor = $(`<h4>${i.user}</h4>`)
        const hashtag = $(`<p>#${i.hashtag}</p>`);
        container.click(function () {
          console.log(this);
          modal.find("#image-modal").prop("src", i.image_url);
            modal.show();
        });
        // console.log(i.description);
        container.append(image);
        container.append(title);
        container.append(descripcion);
        container.append(autor);
        container.append(hashtag);
        this.append(container);
      }
      return this
    }

  })(jQuery);
