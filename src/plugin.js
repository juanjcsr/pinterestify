(($) => {
  
    $.fn.pinterestify = function (options) {
  
      console.log( "plugin!!!", options);
      for(const pin of options.data){

        const $title = $(`<h3 class= "titulo">${pin.title}</h3>`); 
        const $description = $(`<h4>${pin.description}</h4>`);
        const $image = $(`<img src="${pin.image_url}">`);
        const $user = $(`<h4>${pin.user}</h4>`);
        const $username = $(`<h4>${pin.username}</h4>`);
        const $hashtag = $(`<h4>${pin.hashtag}</h4>`);
        
        

        const $modal =  $(`<div class= "modal"><span class= "cerrar">X</span><img id="imagenes" src="" /></div>`)
        $('body').append($modal)
        $modal.hide();

        $image.click(function(){
          // console.log("imagen click");
          $modal.find("#imagenes").prop("src", pin.image_url);
          $modal.show();
        })
        $modal.click(function(){
          // console.log("imagen click");
          $modal.find("#imagenes").prop("src", pin.image_url);
          $modal.hide();
        })

        console.log(pin.title);
        console.log(pin.description);
        console.log(pin.image_url);
        console.log(pin.user);
        console.log(pin.username);
        console.log(pin.hashtag);

        $('.imagenes').append($title); 
        $('.imagenes').append($description);  
        $('.imagenes').append($image);
        $('.imagenes').append($user);
        $('.imagenes').append($username);
        $('.imagenes').append($hashtag);
        


        
        
        
        

        
        
        
      }
    }
  
  })(jQuery);