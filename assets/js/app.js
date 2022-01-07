var searchBtn = document.querySelector('#search-btn');
var searchedTerms = [];
var currentDataContainer = document.querySelector('.current-price-data')
var historicalPriceData = document.querySelector('.historical-price-data')

var baseApis = {
    'youtube': {
        url: "https://investing-cryptocurrency-markets.p.rapidapi.com/get-meta-data?locale_info=en_US&lang_ID=1&time_utc_offset=28800",
        delimiter: '&',
        key: `AIzaSyCC1H1Vgnsts53jjwoLx2jr_Z6YhhypPjw`,
        parameters: []
    },
    'other-api': {
        url: "https://investing-cryptocurrency-markets.p.rapidapi.com/get-meta-data?locale_info=en_US&lang_ID=1&time_utc_offset=28800",
        delimiter: '&',
        key: ``,
        parameters: []
    }
}

var checkStorage = function() {
    window.localStorage.setItem?.('searchs', JSON.stringify(searches))
}

var saveSearches = function(searchTerm) {
    JSON.parse(window.localStorage?.getItem?.('searches')).push(searchTerm).setItem('searches'); //. experimental
}

var createBtns = function() {
    window.localStorage.getItem('searches').forEach(function(search) {
        var searchBtn = document.createElement('button').setAttribute('class', 'search-btn flex-row a-center j-center');
        document.querySelector('.btn-container').appendChild(searchBtn)
    })
}   

var pullData = function(base, delimiter, [...parameters]) {
    var apiUrl = base;  
    parameters.forEach(param => {apiUrl += `${delimiter}${param}`});
    fetch(apiUrl)
        .then(response => {if (response.ok) {response.json().then(data => {return data})}}) // also use optional chaining here?
        .catch(err => {console.error(err)})
}

baseApis.foreach(base => {
    var data = pullData(base.url, base.delimiter, [...base.parameters])
    if (base === 'crypto') {populateCryptoData(data)}
    if (base === 'company') {populateCompanyData(data)}
})

// these will depend on apis employed
var loadSpotifyData = function() {
    document.querySelector('div').appendChild(element.attribute);
}

var loadYoutubeData = function() {
    
}



