(function ($) {
    $(function () {

        $('.sidenav').sidenav();
        $('.parallax').parallax();

    }); // end of document ready
})(jQuery); // end of jQuery name space



// var searchBtn = document.querySelector('#search-btn');
// var searchedTerms = [];
// var currentDataContainer = document.querySelector('.current-price-data')
// var historicalPriceData = document.querySelector('.historical-price-data')

// var baseApis = {
//     'youtube': {
//         url: "https://www.googleapis.com/youtube/v3/search",
//         delimiter: '&',
//         key: `AIzaSyCC1H1Vgnsts53jjwoLx2jr_Z6YhhypPjw`,
//         parameters: ["channel=''"]
//     },
//     'other-api': {
//         url: "",
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

// Use youtube api to pull embed link for video

var yTubeApi = `AIzaSyCC1H1Vgnsts53jjwoLx2jr_Z6YhhypPjw`

var youtubeApi = "https://www.youtube.com/iframe_api"

var pullData = function(artist, base, delimiter, [...parameters]) { 
    var artist = document.querySelector('#search-box').value;
    var apiUrl = base + "delimiter" + artist
    parameters.forEach(param => {apiUrl += `${delimiter}${param}`});
    fetch(apiUrl)
        .then(response => {if (response.ok) {response.json().then(data => {searchYt(data); searchTicketmaster(data)})}}) 
        .catch(err => {console.error(err)})
}

var searches = []

var pullArtistSearch = function() {
    var artist = document.querySelector('#search-box').value;
    searchYt(artist)
}


var searchYt = function(artist, apiKey=`AIzaSyDuOIpDJ_BNj0FKPjmBwXTmbdyhfyguAB4`){
    var api = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${artist}&type=video&key=${apiKey}`;
    fetch(api).then(response => {if (response.ok){response.json().then(data => {
        console.log(data);
        var iFrame = document.createElement('iframe')
        iFrame.src = `https://www.youtube.com/embed/${data.items[0].id.videoId}`
        document.querySelector('.youtube-main').appendChild(iFrame);
        for (var i = 1; i <= 5; i++) {
            var iFrame = document.createElement('iframe');
            iFrame.src = `https://www.youtube.com/embed/${data.items[i].id.videoId}`;
            console.log(iFrame)
            document.querySelector('.youtube-tiles').appendChild(iFrame)
        }
    })}})}


    // var searchYt = function(artist, apiKey=`AIzaSyCC1H1Vgnsts53jjwoLx2jr_Z6YhhypPjw`){
    //     var api = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${artist}&type=video&key=${apiKey}`;
    //     fetch(api).then(response => {if (response.ok){response.json().then(data => {
    //         console.log(data);

    //         var tag = document.createElement('script');
    //         tag.src = "https://www.youtube.com/player_api";
    //         var firstScriptTag = document.getElementsByTagName('script')[0];
    //         firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    //         var player;
    //         function onYouTubePlayerAPIReady() {
    //             player = new YT.Player('ytplayer', {
    //             height: '360',
    //             width: '640',
    //             videoId: '${data.items[0].id.videoId}'
    //             });
    //         }
            
    //         // var player = new YT.Player('player', {
    //         //     height: '390',
    //         //     width: '640',
    //         //     videoId: `${data.items[0].id.videoId}`,
    //         //     playerVars: {
    //         //       'playsinline': 1
    //         //     },
    //         //     // events: {
    //             //   'onReady': onPlayerReady,
    //             //   'onStateChange': onPlayerStateChange
    //             // }
    //           });
    //         for (var i = 1; i <= 5; i++) {
    //             var iFrame = document.createElement('iframe');
    //             iFrame.src = `https://www.youtube.com/embed/${data.items[i].id.videoId}`;
    //             console.log(iFrame)
    //             document.querySelector('.youtube-tiles').appendChild(iFrame)
    //         }
    //     })}})}


// var searchYt = function(artist, apiKey=`AIzaSyCC1H1Vgnsts53jjwoLx2jr_Z6YhhypPjw`){
//     var api = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${artist}&type=video&key=${apiKey}`;
//     fetch(api).then(function(response){
//         if (response.ok){
//             response.json().then(function(data){
//                 console.log(data);

//                 var tag = document.createElement('script');
//                 tag.src = "https://www.youtube.com/player_api";
//                 var firstScriptTag = document.getElementsByTagName('script')[0];
//                 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//                 var player;
//                 function onYouTubePlayerAPIReady() {
//                     player = new YT.Player('ytplayer', {
//                         height: '360',
//                         width: '640',
//                         videoId: data.items[0].id.videoId
//                     });
//                     document.querySelector(".youtube-main").appendChild(player);
//                 }
//             })
//         }
//     })
// }


// var checkStorage = function(){
//     if (!window.localStorage.getItem('searches')) {
//         window.localStorage.setItem(searches, JSON.stringify(searches))
//     }
// }

// var saveSearches = function(){
//     var userSearch = document.querySelector('.search').value;
//     var userSearches = JSON.parse(window.localStorage.getItem('searches'));
//     userSearches.push(userSearch);
//     window.localStorage.setItem('searches', JSON.stringify(userSearches))
// }

    // apiData.forEach(result => {
    //     var ytDiv = document.createElement('div').setAttribute('class', '').textContent(result.video1)
    //     document.querySelector('youtube').appendChild(ytDiv);
    // })
// }

// var searchYt = function(artist, apiKey=`AIzaSyCC1H1Vgnsts53jjwoLx2jr_Z6YhhypPjw`){
//     var api = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${artist}&type=video&key=${apiKey}`;
//     fetch(api).then(function(response){
//         if (response.ok){
//             response.json().then(function(data){
//                 console.log(data);

//                 var tag = document.createElement('script');
//                 tag.src = "https://www.youtube.com/player_api";
//                 var firstScriptTag = document.getElementsByTagName('script')[0];
//                 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//                 var player;
//                 function onYouTubePlayerAPIReady() {
//                     player = new YT.Player('ytplayer', {
//                         height: '360',
//                         width: '640',
//                         videoId: data.items[0].id.videoId
//                     });
//                     document.querySelector(".youtube-main").appendChild(player);
//                 }
//             })
//         }
//     })
// }


var searchTicketmaster = function(){

}

document.querySelector('#search-btn').addEventListener('click', pullArtistSearch)
// document.querySelector('#search-btn').addEventListener('click', saveSearches)