var searchBtn = document.querySelector('#search-btn');
var searchedTerms = [];
var currentDataContainer = document.querySelector('.current-price-data')
var historicalPriceData = document.querySelector('.historical-price-data')
var baseApis = {
    'crypto': {
        url: "https://investing-cryptocurrency-markets.p.rapidapi.com/get-meta-data?locale_info=en_US&lang_ID=1&time_utc_offset=28800",
        delimiter: '&',
        parameters: []
    },
    'other-api': {
        url: "https://investing-cryptocurrency-markets.p.rapidapi.com/get-meta-data?locale_info=en_US&lang_ID=1&time_utc_offset=28800",
        delimiter: '&',
        parameters: []
    }
}

var checkStorage = function() {
    if (!window.localStorage.getItem('searches')) {window.localStorage.setItem('searchs', JSON.stringify(searches))}
}

var saveSearches = function(searchTerm) {
    var searchTerms = JSON.parse(window.localStorage.getItem('searches'));
    if (!searchTerms.contains(searchTerm)) {
        searchTerms.push(searchTerm);
        return;
    }
    window.localStorage.setItem('searches', JSON.stringify(searchTerms));
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
        .then(response => {if (response.ok) {response.json().then(data => {return data})}})
        .catch(err => {console.error(err)})
}

baseApis.foreach(base => {
    var data = pullData(base.url, base.delimiter, [...base.parameters])
    if (base === 'crypto') {populateCryptoData(data)}
    if (base === 'company') {populateCompanyData(data)}
})

// these will depend on apis employed
var loadCryptoData = function() {
    var 
}

var loadCompanyData = function() {

}



