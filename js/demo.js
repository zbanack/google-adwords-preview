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

function trimmer(str, len) {
	return str.length > len ? str.substring(0, len - 3) + "..." : str;	
}

function subs(arr) {
	let ret = '';

	if (arr === null) arr = [];

	let cap = Math.min(arr.length, 4);
	for(let i = 0; i < cap; i++) {
		ret += '<span class="goog goog-sub">' + trimmer(arr[i], 30) + '</span>';
		if (i < cap - 1) ret += '<span class="goog goog-sub-div">&#65112;</span>';
	}

	return ret;
}

function toggle_ratings() {
    document.getElementById("goog-o-ratings-cont").style.display = document.getElementById("goog-i-ratings").checked ? "block" : "none";
}

function render() {
	let title_i = document.getElementById('goog-i-title');
	let link_i = document.getElementById('goog-i-link');
	let desc_i = document.getElementById('goog-i-desc');
	let phone_i = document.getElementById('goog-i-phone');
	let subs_i = document.getElementById('goog-i-subs');
	let kwd_i = document.getElementById('goog-i-kwd');

	let kwds = keywords(kwd_i.value);

	let title_o = document.getElementById('goog-o-title');
	let link_o = document.getElementById('goog-o-link');
	let desc_o = document.getElementById('goog-o-desc');
	let subs_o = document.getElementById('goog-o-subs');
	let phone_o = document.getElementById('goog-o-phone');

	title_o.innerHTML = title_i.value;
	link_o.innerHTML = link_i.value;
	phone_o.innerHTML = phone_i.value;
	subs_o.innerHTML = subs(subs_i.value.replace(/ +(?= )/g,'').replace(/, /g, ',').split(','));
	desc_o.innerHTML = embold(desc_i.value, kwds);

	// limiting
	document.getElementById('lim-title').innerHTML = title_i.value.length + '/60';
	document.getElementById('lim-link').innerHTML = link_i.value.length + '/45';
	document.getElementById('lim-desc').innerHTML = desc_i.value.length + '/150';
}

