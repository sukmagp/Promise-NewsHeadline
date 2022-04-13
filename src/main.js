axios.get('https://newsapi.org/v2/top-headlines?country=id&apiKey=9e43a771c30c4b81aa1d0c1f5aaba310')
	.then (res => {
		document.getElementById('data').innerHTML = render(res.data.articles);
	// console.log(res.data);
});

var searchInput = document.querySelector('input');
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      axios.get('https://newsapi.org/v2/everything?q='+searchInput.value.toLowerCase()+'&sortBy=publishedAt&apiKey=9e43a771c30c4b81aa1d0c1f5aaba310')
          .then(res => {
              document.getElementById('data').innerHTML = render(res.data.articles); // Do something
			})
	}
});

	document.getElementById("inputan-search").addEventListener("click", function() {
		axios.get('https://newsapi.org/v2/everything?q='+searchInput.value.toLowerCase()+'&sortBy=publishedAt&apiKey=9e43a771c30c4b81aa1d0c1f5aaba310')
		  .then(res => {
			  document.getElementById('data').innerHTML = render(res.data.articles);
			})
	});

function render (result){
	console.log(result);
	let cards ='';
	result.slice(0,12).forEach(data => {
		console.log(result.slice);
		cards += `<div class="col-md-4 my-5">
		                 <div class="card">
		                     <img src="${data.urlToImage}" class="card-img-top">
		                     <div class="card-body">
		                     <h5 class="card-title">${data.title}</h5>
		                     <h6 class="card-source mb-2 text-muted">${data.source.name}</h6>
							 <h6 class="card-date mb-2 text-muted">${data.publishedAt}</h6>
		                     <p class="card-text">${data.description}</p>
		                     <a href="${data.url}" class="btn btn-primary read-news">Read More...</a>
		                     </div>
		                 </div>
		        	</div>`;
	})
	
	return cards;
}
