import { FORM } from 'consts';

function array(size) {
	return [...Array(size).keys()];
}

function checkData(values) {
	let isCompleted = true;
	Object.keys(values).forEach((x) => {
		if (!values[x]) isCompleted = false;
	});
	return isCompleted;
}

function concat(...args) {
	return [].concat(...args);
} 

function formatData(data) {
	let value = data;

	if (value && typeof values === 'string' 
		&& !data.includes(':') && parseInt(data)) {
		value = parseInt(value);
	}

	return value;
}

function hasCommon(arr1 = [], arr2 = []) {
	let common = false;

	if (arr1?.length && arr2?.length) {
		for (let i = 0; i < arr1.length; i++) {
			if (arr2.includes(arr1[i])) {
				common = true;
				break;
			}
		}
	}

	return common;
}

function isEmpty(object) {
	return !object 
	|| object.constructor !== Object 
	|| Object.entries(object).length === 0 
	|| JSON.stringify(object) === JSON.stringify({});
}

function keys(size) {
	return [...Array(size).keys()];
}

function matrix(x, y) {
	return array(x).map(() => array(y).map(() => 0));
}

function merge(...args) {
	return Object.assign({}, ...args);
}

function numbers(min, max) {
	return Array(max - min).fill().map((x, i) => i + min);
}

function random(min = 0, max = 1000) {
	return Math.floor(Math.random(0, 1) * (max - min) + min);
}

function reduce(object) {
	return isEmpty(object) ? 0 : 
	transform(object).reduce((total, value) => (
		(total && !isNaN(total) ? parseInt(total) : 0) + 
		(value && !isNaN(value) ? parseInt(value) : 0)
	));
}

function roundTo(amount = 0, decimals = 0) {
	const exp = Math.pow(10, decimals);
	return Math.round(amount * exp || 0) / exp;
}

function shuffle(array = [], times = 10) {
	for (let i = 0; i < times; i++) {
		array = array.sort(() => (0.5 - Math.random()));
	}
	return array;
}

function sortBy(a, b, sort, order) {
	return a[sort] > b[sort] 
    ? (!order || order === FORM.order.desc ? 1 : -1) : a[sort] < b[sort] 
    ? (!order || order === FORM.order.desc ? -1 : 1) : 0
}

function transform(object, withKey) {
	return object 
	? Object.keys(object).map((key) => (
		!withKey 
		? object[key] 
		: { key, ...object[key] }
	)) 
	: [];
}

function toString(obj) {
	if (!obj || !Array.isArray(obj)) return undefined;
	return obj?.join('; ').toString();
}

function validate(list) {
  let check = true;
  
  list.forEach((key) => {
    const target = find(key);

    if (target.className.includes('error') || target.value === '') {
      check = false;
    }
  });

  return check;
}

function verify(data, list) {
  let count = 0;

  list.forEach((key) => {
    if (data[key] === undefined) {
      count++;
    }
  });

  return count === 0;
}

export default {
	array,
	checkData,
	concat,
	formatData,
	hasCommon,
	isEmpty,
	keys,
	matrix,
	merge,
	numbers,
	random,
	reduce,
	roundTo,
	shuffle,
	sortBy,
	transform,
	toString,
	validate,
	verify
};