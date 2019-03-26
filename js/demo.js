function evt() {
	let cls = document.getElementsByClassName("goog-i");

	let fnc = function() {
		render();
	};

	for(let i = 0; i < cls.length; i++) {
	    cls[i].addEventListener('change', render, false);
	    cls[i].addEventListener('keyup', render, false);
	}	
}

function embold(str, lst) {
	if (lst.length < 1) return str;
    return str.replace(new RegExp('(\\b)(' + lst.join('|') + ')(\\b)','ig'), '$1<b>$2</b>$3');
}

function keywords(str) {
	let arr = str.match(/\w+|"[^"]+"/g);
	if (arr === null) arr = [];
	for(let i = 0; i < arr.length; i++) {
		arr[i] = arr[i].replace(/"/g, '');
	}

	return arr;
}

function render() {
	let title_i = document.getElementById('goog-i-title');
	let link_i = document.getElementById('goog-i-link');
	let desc_i = document.getElementById('goog-i-desc');
	let kwd_i = document.getElementById('goog-i-kwd');

	let kwds = keywords(kwd_i.value);

	let title_o = document.getElementById('goog-o-title');
	let link_o = document.getElementById('goog-o-link');
	let desc_o = document.getElementById('goog-o-desc');

	title_o.innerHTML = title_i.value;
	link_o.innerHTML = link_i.value;
	desc_o.innerHTML = embold(desc_i.value, kwds);
}