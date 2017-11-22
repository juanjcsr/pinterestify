(($) => {
  	const template = `
			<div class="col-md-3 card">
				<div class="card-body click" data-toggle="modal" data-target="#myModal">
					<img src="[ image ]" alt="pinterest" class="responsive">
					<h3 class="mt-2">[ Title ]</h3>
					<p>Descripción: [ description ]</p>
					<span>Hashtag [ Hashtag ]</span>
					<label>Escrito por <a href="#" class="author">[ author ]</a></label>
				</div>
			</div>
		`;

	  
    $.fn.pinterestify = function (options) {
  	  let pins = options.data;
      for (let pin of pins) {
      	let image = pin.image_url;
      	let title = pin.title;
      	let description = pin.description;
      	let hashtag = pin.hashtag;
      	let author = pin.username;
      	
      	let newTemplate = template.replace('[ image ]', image)
      							  .replace('[ Title ]', title)
      							  .replace('[ description ]', description)
      							  .replace('[ Hashtag ]', hashtag)
      							  .replace('[ author ]', author);
      	$('.container-pins').append(newTemplate)
      }

      const templateModal = `
			<h3 class="text-center">[ Title ]</h3>
		    <div class="card row">
		       	<img src="[ image ]" alt="pinterest" class="responsive" id="image-modal">        	
		    </div>
		    <p class="mt-2">Descripción: [ description ]</p>
			<p>Hashtag: [ Hashtag ]</p>
			<p>[ Autor ]</p>
      `;
      $('.card-body').on("click", (e) => {
      		let el = e.target;
      		let src = el.getAttribute('src');
      		let content = $(el).parent();
      		let title = $(content).find('h3')[0].textContent;
      		let description = $(content).find('p')[0].textContent;
      		let hashtag = $(content).find('span')[0].textContent;
      		let autor = $(content).find('label')[0].textContent;
      		let newTemplate = templateModal.replace('[ image ]', src)
      										.replace('[ Title ]', title)
      										.replace('[ description ]', description)
      										.replace('[ Hashtag ]', hashtag)
      										.replace('[ Autor ]', autor);
      		$('.modal-body').html(newTemplate);
    	});
      

    }
  
  })(jQuery);