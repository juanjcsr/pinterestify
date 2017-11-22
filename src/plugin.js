(($) => {

 $.fn.pinterestify = function (options) {

      console.log( "plugin!!!", options.data);
   for(const pin of options.data){
     console.log(pin.title)
     const titulo = $(`<h3>${pin.title}</h3>`);
     const descripcion = $(`<p>${pin.description}</p>`);
     const imagen = $(`<img src="${pin.image_url}" alt="">`);
     const hashTag = $(`<p>#${pin.hashtag}</p>`);
    $(this).append(imagen);
    $(this).append(titulo);
    $(this).append(descripcion);
    $(this).append(hashTag);
     imagen.click(function (){
     $('#modal').removeClass('oculto');
     const imagenModal = $(".imagenModal");
       imagen.append(imagenModal);
   })
     $("#close").click(function (){
       $("#modal").addClass('oculto');
     })
   }
    }


 $(".postsImg").pinterestify({
		data: info
	});
  })(jQuery);
