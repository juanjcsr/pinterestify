(($) => {
  
    $.fn.pinterestify = function (options) {
  
      console.log( "plugin!!!", options);
      
      for (let pin of options.data) {
        const htmlPin = `
        <div class="col-md-4 ">
          <div class="card">
            <img class="card-img-top" src="${pin.image_url}" alt="pin">
            <div class="card-body">
              <h4 class="card-title">${pin.title}</h4>
              <p class="card-text">${pin.description}</p>
              <h5 class="card-title">${pin.user}</h5>
              <p class="card-text">#${pin.hashtag}</p>
            </div>
          </div>
         </div>`;

        $("#img").append(htmlPin);
     }

   
    }


  })(jQuery);