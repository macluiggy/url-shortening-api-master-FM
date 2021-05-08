import { $$, $, p } from './functions.js'

let apiBase = 'https://api.shrtco.de/v2/'; //la api de terceros
let user_link = $('.user_link'); // el link/url que el ususario agrega
let url; // definimos el url fuera de la funcion donde se va a utilizar, esta es la url completa que va a conterner el archivo JSON
let submit_link = $('.submit_link'); // el boton donde el usuario le dara click para que se muestre el link acortado

//regex para que sea un link apropiado
var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi; // la expresion regular, la cual servira para saber si el texto brindado por el usuario corresponde a un link/url
var regex = new RegExp(expression); // se crea una nueva expresion regular con la variable anterior

p(user_link);
submit_link.addEventListener('click', (e) => {//cuando el usuario presoina el boton para acortar el link se llama a un evento
    e.preventDefault()// se previene la accion por defecto
    let addUrl = user_link.value // se actualiza el link que el usuario agregó
    if (user_link.value == '') {// si el el input text esta vacio, no se hace nada
        // statement
        return
    } else if (!addUrl.match(regex)) {// si el input text de usuario no coincide con un url/link
        $('.error_message').firstChild.innerText = 'Please add a link';//muestra el mensaje de error
        $('.user_link').style.borderColor = 'var(--red)';//cambia el borde del input text a rojo
    } else {// de otra forma
        // statement
        $('.error_message').firstChild.innerText = '';// si habia un mensaje de error se borra
        $('.user_link').style.borderColor = 'white'; //el borde del input text vuelve a su color original
        url = apiBase + 'shorten?url=' + addUrl;// crea el url que contiene el arhivo JSON
        p('hello')
        fetch(url) // trae el archivo json
            .then(jsonObject => jsonObject.json())// conviertelo en un objecto de JavaScript
            .then(object => showLink(object))//llama a la funcion showLink
            .catch(() => alert('Sorry, there was an error, please try again!'));// si hay un error muestralo a la pantalla

        let attribution = $('.attribution')

        let showLink = object => {
            p(object.result.short_link)
            let links = document.createElement('article');// crea un nuevo elemento
            links.setAttribute('class', 'shortened_link');//añadele el atributo class con su valor
            links.innerHTML = `<p class="original_link">${addUrl}</p><p><span class="link_to_copy">${object.result.short_link}</span><button class="copy_shortened_link">copy</button></p>`;// agrega el link original, el link acortado y el boton para copiarlo al elemento creado
            $('.shorted_links_container').appendChild(links);//añade el elemento creado con su contenido al contenedor de los links

            let copyUrls = $$('.copy_shortened_link'); // el boton para copiar el link
            copyUrls.forEach(copyUrl => { // para cada boton
                // statements
                copyUrl.addEventListener('click', () => { //llama un evento para el boton actual
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