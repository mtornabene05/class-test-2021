(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space

var searchBtn = document.querySelector('#search-btn');
var getUserInput = function () {
    return document.querySelector('#search-box').value
}

//when user submits via click or enter key => artist call function searches and displays a response
var artistcall = function () {
    document.querySelectorAll('.hide-banner').forEach(banner => {banner.classList.remove('hide-banner')});
    var artistinputEl = document.querySelector('#search-box');
    var artistinput = artistinputEl.value;
    var searchTerm = getUserInput();
    var url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=8cd14927b4cb4879b174cabe1c24f270`
    document.querySelector('.icon-block').innerHTML = '';
    document.querySelector('#ticketmaster').innerHTML = '';

    //checks for data in the news api
    fetch(url).then(response => {
        if (!response.ok){
            var iconBlock = document.querySelector('.icon-block');
            iconBlock.textContent = 'No results found';
            return;
        }  
        response.json().then(data => {
            console.log(data);
            var iconBlock = document.querySelector('.icon-block');
            if (!data) {
                iconBlock.textContent = 'No results found';
                return;
            }    
            for (var i = 0; i < 3; i++) {
                var html = `
                <div class='news-item'>
                    <h2 class="center cyan-text text-lighten-1"><i class="material-icons">rss_feed</i></h2>
                    <h5>${data.articles[i].title}</h5>
                    <p class='author'>by ${data.articles[i].author}</p>
                    <p class='content'>${data.articles[i].description}</p>
                    <a href='${data.articles[i].url}' target='_blank'>Source</a>
                </div> `
                iconBlock.innerHTML += html;
            }
        
        })
        
    })

    //checks for data in ticketmaster api
    fetch(`https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${artistinput}&apikey=lXXeiiHp4jbagNs2QYj0n1bTm6Tr1Q2M`)
        .then(response => response.json())

        .then(function (data) {
            console.log(data)
            if (data.page.totalElements === 0) {
                ticketmaster.textContent = 'No results found';
                return;
            }
            for (var i = 0; i < 3; i++) {
                var tmEl = document.createElement("div");
                var tmAEl = document.createElement("a");
                var tmh5El = document.createElement("h4");
                var tmImgEl = document.createElement("img");
                tmImgEl.setAttribute("class", "AttractionImg");
                tmAEl.setAttribute("href", data._embedded.attractions[i].url);
                tmAEl.setAttribute("target", "_blank");
                tmImgEl.setAttribute("src", data._embedded.attractions[i].images[0].url);
                tmh5El.textContent = data._embedded.attractions[i].name;
                ticketmaster.append(tmAEl);
                tmAEl.append(tmEl);
                tmEl.append(tmh5El);
                tmEl.append(tmImgEl);
            }
        })
}

searchBtn.addEventListener("click", artistcall);

$("#search-box").keyup(function (event) {
    if (event.keyCode === 13) {
        $("#search-btn").click();
    }
});
var ticketmaster = document.querySelector('#ticketmaster');
