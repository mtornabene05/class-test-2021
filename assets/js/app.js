(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space

//User inputs search bar, replaces keyword= with input
var searchBtn = document.querySelector('#search-btn');

    var artistcall = function () {
        var artistinputEl = document.querySelector('#search-box');
        var artistinput = artistinputEl.value;
        
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

// var searchBtn = document.querySelector('#search-btn');
// var searchedTerms = [];
// var currentDataContainer = document.querySelector('.current-price-data')
// var historicalPriceData = document.querySelector('.historical-price-data')

// var baseApis = {
//     'youtube': {
//         url: "https://investing-cryptocurrency-markets.p.rapidapi.com/get-meta-data?locale_info=en_US&lang_ID=1&time_utc_offset=28800",
//         delimiter: '&',
//         key: `AIzaSyCC1H1Vgnsts53jjwoLx2jr_Z6YhhypPjw`,
//         parameters: []
//     },
//     'other-api': {
//         url: "https://investing-cryptocurrency-markets.p.rapidapi.com/get-meta-data?locale_info=en_US&lang_ID=1&time_utc_offset=28800",
//         delimiter: '&',
//         key: ``,
//         parameters: []
//     }
// }

// var checkStorage = function() {
//     window.localStorage.setItem?.('searchs', JSON.stringify(searches))
// }

// var saveSearches = function(searchTerm) {
//     JSON.parse(window.localStorage?.getItem?.('searches')).push(searchTerm).setItem('searches'); //. experimental
// }

// var createBtns = function() {
//     window.localStorage.getItem('searches').forEach(function(search) {
//         var searchBtn = document.createElement('button').setAttribute('class', 'search-btn flex-row a-center j-center');
//         document.querySelector('.btn-container').appendChild(searchBtn)
//     })
// }   

// var pullData = function(base, delimiter, [...parameters]) {
//     var apiUrl = base;  
//     parameters.forEach(param => {apiUrl += `${delimiter}${param}`});
//     fetch(apiUrl)
//         .then(response => {if (response.ok) {response.json().then(data => {return data})}}) // also use optional chaining here?
//         .catch(err => {console.error(err)})
// }

// baseApis.foreach(base => {
//     var data = pullData(base.url, base.delimiter, [...base.parameters])
//     if (base === 'crypto') {populateCryptoData(data)}
//     if (base === 'company') {populateCompanyData(data)}
// })

// // these will depend on apis employed
// var loadSpotifyData = function() {
//     document.querySelector('div').appendChild(element.attribute);
// }

// var loadYoutubeData = function() {

// }
