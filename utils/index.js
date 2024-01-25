import { DATE } from 'consts';

function currency(amount = 0, prefix = '$') { 
  if (!amount || !parseFloat(amount)) return prefix + '0';

  const digits = parseFloat(amount).toFixed(1).replace(/\d(?=(\d{3})+\.)/g, '$&.');
  return prefix + digits.substr(0, digits.length - 2);
}

function getAge(birth) {
  return Math.floor((
    Date.now() - new Date(birth).getTime()) 
    / DATE.yearInMilliseconds
  );
}

function getById(id) {
  return document.getElementById(id);
}

function getByName(e, name) {
  return e?.target?.querySelector(`[name="${name}"]`);
}

function getItem(name, storage = localStorage) {
  return JSON.parse(storage.getItem(name));
}

function getFile(e, name) {
  const target = getByName(e, name);

  if (target) return target.files[0];
  else return getById(name).files[0];
}

function getPosition(ref) {
  const node = typeof ref === 'string' ? getById(ref) : ref.current;
  return node?.offsetTop - 60;
}

function openURL(url, time = 0) {
  const win = window.open(url, '_blank');

  if (win) {
    win.focus();

    if (time > 0) 
      setInterval(() => win.close(), time);
  }
}

function setClass(condition, className) {
  if (condition) {
    if (!document.body.className.includes(className)) {
      document.body.classList.add(className);
    }
  } else {
    document.body.classList.remove(className);
  }
}

function setItem(name, data, storage = localStorage) {
  storage.setItem(name, JSON.stringify(data));
}

function scrollTo(ref) {
  const top = ref ? getPosition(ref) : 0;
  window.scrollTo({ top, behavior: 'smooth' });
}

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

import parser from './parser';
import obj from './object';
import str from './string';
import trigger from './trigger';

export {
  currency,
  getAge,
  getById,
  getByName,
  getItem,
  getFile,
  getPosition,
  setClass,
  setItem,
  scrollTo,
  openURL,
  obj,
  parser,
  sleep,
  str,
  trigger
};