var spanClasses = [`grid-col-span-1`, `grid-col-span-2`]
var categories = ['category=', ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology']]
var colorClasses = ['bg-purple', 'bg-blue', 'bg-green', 'bg-yellow', 'bg-red', 'bg-orange', 'bg-teal']
var searchBy = ['country=', ['country', 'sources', 'category', 'top-headlines']]
var baseUrl = 'https://newsapi.org/v2/everything?'
var apiDelimiter = '&'

var chooseRandomClass = function() {return spanClasses[Math.floor(Math.random() * spanClasses.length)]}
var chooseRandomColor = function() {return colorClasses[Math.floor(Math.random() * colorClasses.length)]}
var getUserInput = function() {return document.querySelector('#search-box').value}
var createUrl = function(url, delimiter, ...parameters) {return parameters.forEach(parameter => url += `${delimiter}${parameter}`)}

var pullNews = function() {
    document.querySelector('.icon-block').innerHTML = '';
    var searchTerm = getUserInput();
    var url = `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=8cd14927b4cb4879b174cabe1c24f270`
    console.log(url);
    fetch(url).then(response => {if (response.ok){response.json().then(data => {
        console.log(data);
        for (var i = 0; i <= 5; i++) {
            var html = `
            <div class='grid-item}'>
                <h2 class="center brown-text"><i class="material-icons">flash_on</i></h2>
                <h3>${data.articles[i].title}</h3>
                <p class='author'>by ${data.articles[i].author}</p>
                <p class='content'>${data.articles[i].description}</p>
                <a href='${data.articles[i].url}' target='_blank'>Source</a>
            </div> `
            document.querySelector('.icon-block').innerHTML += html
        }
    })}})
}

document.querySelector('.search-button').addEventListener('click', pullNews)

// document.querySelector('#search-btn').addEventListener('click', saveSearches)