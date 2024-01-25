function capitalize(text, bool1, bool2) {
	const tiping = text.slice(-1) === ' ' && bool2;

  if (!bool1 || !text) {
  	return (
  		text 
  		? text.charAt(0).toUpperCase() 
  		+ text.trim().slice(1).toLowerCase()
  		: ''
  	);
  }
  else { 
  	let words = text.split(' ');
  	
  	words.forEach((word, i) => {
  		let str = word.split('-');

  		str.forEach((char, j) => str[j] = capitalize(char));
  		words[i] = str.join('-');
  	})
  	
  	return words.join(' ').trim() + (tiping ? ' ' : '');
  }
}

function includes(target, value) {
	return target !== undefined && value !== undefined
		&& normalize(target).includes(normalize(value));
}

function match(target, value) {
	return target !== undefined && value !== undefined
		&& normalize(target) === normalize(value);
}

function normalize(text) {
	const chars = { 
		'á':'a', 'é':'e', 'í':'i', 'ó':'o', 'ö':'o', 'ú':'u', 'ü':'u', 
		'Á':'A', 'É':'E', 'Í':'I', 'Ó':'O', 'Ö':'O', 'Ú':'U', 'Ü':'U' 
	};
	
	return (
		text.toString()
		.replace(/[áéíóöúü]/ig, (e) => (chars[e])).trim()
		.replace(/[.-]/g, '')
		.toLowerCase()
	);
}

function repeat(text, times) {
	return text.toString().repeat(times);
}

export default {
	capitalize,
	includes,
	match,
	normalize,
	repeat
};