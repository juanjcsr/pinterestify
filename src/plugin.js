(($) => {
    $.fn.pinterestify = (options) => {
      const mostrarModal = (e) =>{
        let templateModal = `<div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
          <h5 class="modal-title">${$(e.target).data("title")}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          </div>
          <div class="modal-body">
          <p>Modal body text goes here.</p>
          </div>
          <div class="modal-footer">
          <button type="button" class="btn btn-primary">Save changes</button>
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
          </div>
        </div>
        </div>`
        $('#modal1').html(templateModal).modal('show');
      }
      let data = options.data;
      console.log(data);
      for( let pin of data){
        let id = pin.id+1;
        let contenedorPin = $(`<article class = "pin"/>`)  
        let img = $(`<img src = "${pin.image_url}" class = "pin-img modal-trigger" data-usuario = ${pin.user} data-title = ${pin.title}>`).on("click",mostrarModal);
        let descripcion = $(`<p class = "pin-description">${pin.description}</p>`);
        let titulo = $(`<h3>${pin.title}</h3>`)
        let hashtag = $(`<p class = "pin-user">${pin.hashtag}</p>`);
        let user = $(`<p class = "pin-user">${pin.user}</p>`);        
        contenedorPin.append(titulo).append(img).append(descripcion).append(hashtag).append(user);
        if(id%8 === 0){
          contenedorPin.addClass("clear");
        }
        $('#imagenes').append(contenedorPin);
      }
    }
  
  })(jQuery);