(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space

//User inputs search bar, replaces keyword= with input
var searchBtn = document.querySelector('#search-btn');
var getUserInput = function() {return document.querySelector('#search-box').value}

    var artistcall = function () {
        var artistinputEl = document.querySelector('#search-box');
        var artistinput = artistinputEl.value;
        var searchTerm = getUserInput();
        var url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=8cd14927b4cb4879b174cabe1c24f270`
        document.querySelector('.icon-block').innerHTML = ''
        
        fetch (`https://app.ticketmaster.com/discovery/v2/attractions.json?keyword=${artistinput}&apikey=lXXeiiHp4jbagNs2QYj0n1bTm6Tr1Q2M`)
        .then(response => response.json())
        
        .then(function (data) { 
            console.log(data)
        
            for (var i = 0; i < 3; i ++){
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

        fetch(url).then(response => {if (response.ok){response.json().then(data => {
            console.log(data);
            for (var i = 0; i < 5; i++) {
                var html = `
                <div class='grid-item}'>
                    <h2 class="center brown-text"><i class="material-icons">flash_on</i></h2>
                    <h5>${data.articles[i].title}</h5>
                    <p class='author'>by ${data.articles[i].author}</p>
                    <p class='content'>${data.articles[i].description}</p>
                    <a href='${data.articles[i].url}' target='_blank'>Source</a>
                </div> `
                document.querySelector('.icon-block').innerHTML += html
            }
        })}})
    })
// .catch (add a catch for when an artist name isn't recognized)
}

searchBtn.addEventListener("click", artistcall);

$("#search-box").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#search-btn").click();
    }
});
var ticketmaster = document.querySelector('#ticketmaster');

