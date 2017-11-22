(($) => {

    $.fn.pinterestify = function (options) {

        var item = $('#container');

        const showModal = (e) =>{

        let modalTemplate = `<div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
          <h2 class="modal-title">${$(e.target).data("title")}</h2>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          </div>
          <div class="modal-body">
             <p>${$(e.target).data("description")}</p>
             <img src ="${e.target.src}" style="width:100%"/>
             <p>${$(e.target).data("user")}</p>
          </div>
        </div>
        </div>`
        $('#modal-img').html(modalTemplate).modal('show');
      }

      for (let value of options.data) {
        console.log(value);

        var divContenedor = $('<div class="item"></div>');
        var title = $(divContenedor).append(`<h2>${value.title}</h2>`);
        var description = $(divContenedor).append(`<div>${value.description}</div>`);
        var image = $(divContenedor).append(`<img src="${value.image_url}" class="modal-trigger" data-title="${value.title}" data-user="${value.user}" data-description="${value.description}"/>`).on("click", showModal);
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
