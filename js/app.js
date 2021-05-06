import { $$, $, p } from './functions.js'

let apiBase = 'https://api.shrtco.de/v2/';
let user_link = $('.user_link');
let url;
let submit_link = $('.submit_link');

//regex para que sea un link apropiado
var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(expression);

p(user_link);
submit_link.addEventListener('click', (e) => {
    e.preventDefault()
    let addUrl = user_link.value
    if (user_link.value == '') {
        // statement
        return
    } else if (!addUrl.match(regex)) {
        $('.error_message').firstChild.innerText = 'Please add a link';
        $('.user_link').style.borderColor = 'var(--red)';
    } else {
        // statement
        $('.error_message').firstChild.innerText = '';
        $('.user_link').style.borderColor = 'white';
        url = apiBase + 'shorten?url=' + addUrl;
        p('hello')
        fetch(url)
            .then(jsonObject => jsonObject.json())
            .then(object => showLink(object))

        let attribution = $('.attribution')

        let showLink = object => {
            p(object.result.short_link)
            let links = document.createElement('article');
            links.setAttribute('class', 'shortened_link')
            links.innerHTML = `<p class="original_link">${addUrl}</p><p><span class="link_to_copy">${object.result.short_link}</span><span class="copy_shortened_link">copy</span></p>`;
            $('.shorted_links_container').appendChild(links);

            let copyUrls = $$('.copy_shortened_link');
            copyUrls.forEach(copyUrl => {
                // statements
                copyUrl.addEventListener('click', () => {
                    var text = copyUrl.previousElementSibling.innerText;
                    navigator.clipboard.writeText(text).then(function() {
                        p('copied')
                        copyUrl.innerText = 'copied!';
                        copyUrl.style.backgroundColor = 'var(--very_dark_blue)';
                    }, function(err) {
                        alert('Async: Could not copy text: ');
                    });

                });
            });
        }

    }
});




user_link.addEventListener('blur', () => {
    if (user_link.value == '') {
        // statement
        $('.error_message').firstChild.innerText = 'Please add a link';
        $('.user_link').style.borderColor = 'var(--red)';
    }
})


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