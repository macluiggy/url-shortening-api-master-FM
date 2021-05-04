let $$ = els => {
	return document.querySelectorAll(els);
}

let $ = el => document.querySelector(el);

let p = content => console.log(content);

export {$$, $, p};