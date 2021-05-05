import { $$, $, p } from './functions.js'

let apiBase = 'https://api.shrtco.de/v2/';
let addUrl = 'https://www.google.com/';
let url = apiBase + 'shorten?url=' + addUrl;

fetch(url)
    .then(jsonObject => jsonObject.json())
    .then(object => showLink(object))

let attribution = $('.attribution')

let showLink = object => {
	p(object.result.short_link)
}

//burguer

    var burger = $('#containerBurger');
    var lista = $('.nav_list');
    let access = $('.access');

    burger.addEventListener('click', function() {
        if (lista.style.display === 'flex') {
            lista.style.display = 'none';
            access.style.display = 'none';
        } else {
            lista.style.display = 'flex';
            access.style.display = 'flex';
        }
    })
