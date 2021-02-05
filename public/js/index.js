/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Main.elm":
/*!**********************!*\
  !*** ./src/Main.elm ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

(function(scope){
'use strict';

function F(arity, fun, wrapper) {
  wrapper.a = arity;
  wrapper.f = fun;
  return wrapper;
}

function F2(fun) {
  return F(2, fun, function(a) { return function(b) { return fun(a,b); }; })
}
function F3(fun) {
  return F(3, fun, function(a) {
    return function(b) { return function(c) { return fun(a, b, c); }; };
  });
}
function F4(fun) {
  return F(4, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return fun(a, b, c, d); }; }; };
  });
}
function F5(fun) {
  return F(5, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
  });
}
function F6(fun) {
  return F(6, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return fun(a, b, c, d, e, f); }; }; }; }; };
  });
}
function F7(fun) {
  return F(7, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
  });
}
function F8(fun) {
  return F(8, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) {
    return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
  });
}
function F9(fun) {
  return F(9, fun, function(a) { return function(b) { return function(c) {
    return function(d) { return function(e) { return function(f) {
    return function(g) { return function(h) { return function(i) {
    return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
  });
}

function A2(fun, a, b) {
  return fun.a === 2 ? fun.f(a, b) : fun(a)(b);
}
function A3(fun, a, b, c) {
  return fun.a === 3 ? fun.f(a, b, c) : fun(a)(b)(c);
}
function A4(fun, a, b, c, d) {
  return fun.a === 4 ? fun.f(a, b, c, d) : fun(a)(b)(c)(d);
}
function A5(fun, a, b, c, d, e) {
  return fun.a === 5 ? fun.f(a, b, c, d, e) : fun(a)(b)(c)(d)(e);
}
function A6(fun, a, b, c, d, e, f) {
  return fun.a === 6 ? fun.f(a, b, c, d, e, f) : fun(a)(b)(c)(d)(e)(f);
}
function A7(fun, a, b, c, d, e, f, g) {
  return fun.a === 7 ? fun.f(a, b, c, d, e, f, g) : fun(a)(b)(c)(d)(e)(f)(g);
}
function A8(fun, a, b, c, d, e, f, g, h) {
  return fun.a === 8 ? fun.f(a, b, c, d, e, f, g, h) : fun(a)(b)(c)(d)(e)(f)(g)(h);
}
function A9(fun, a, b, c, d, e, f, g, h, i) {
  return fun.a === 9 ? fun.f(a, b, c, d, e, f, g, h, i) : fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
}

console.warn('Compiled in DEBUG mode. Follow the advice at https://elm-lang.org/0.19.1/optimize for better performance and smaller assets.');


// EQUALITY

function _Utils_eq(x, y)
{
	for (
		var pair, stack = [], isEqual = _Utils_eqHelp(x, y, 0, stack);
		isEqual && (pair = stack.pop());
		isEqual = _Utils_eqHelp(pair.a, pair.b, 0, stack)
		)
	{}

	return isEqual;
}

function _Utils_eqHelp(x, y, depth, stack)
{
	if (x === y)
	{
		return true;
	}

	if (typeof x !== 'object' || x === null || y === null)
	{
		typeof x === 'function' && _Debug_crash(5);
		return false;
	}

	if (depth > 100)
	{
		stack.push(_Utils_Tuple2(x,y));
		return true;
	}

	/**/
	if (x.$ === 'Set_elm_builtin')
	{
		x = $elm$core$Set$toList(x);
		y = $elm$core$Set$toList(y);
	}
	if (x.$ === 'RBNode_elm_builtin' || x.$ === 'RBEmpty_elm_builtin')
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	/**_UNUSED/
	if (x.$ < 0)
	{
		x = $elm$core$Dict$toList(x);
		y = $elm$core$Dict$toList(y);
	}
	//*/

	for (var key in x)
	{
		if (!_Utils_eqHelp(x[key], y[key], depth + 1, stack))
		{
			return false;
		}
	}
	return true;
}

var _Utils_equal = F2(_Utils_eq);
var _Utils_notEqual = F2(function(a, b) { return !_Utils_eq(a,b); });



// COMPARISONS

// Code in Generate/JavaScript.hs, Basics.js, and List.js depends on
// the particular integer values assigned to LT, EQ, and GT.

function _Utils_cmp(x, y, ord)
{
	if (typeof x !== 'object')
	{
		return x === y ? /*EQ*/ 0 : x < y ? /*LT*/ -1 : /*GT*/ 1;
	}

	/**/
	if (x instanceof String)
	{
		var a = x.valueOf();
		var b = y.valueOf();
		return a === b ? 0 : a < b ? -1 : 1;
	}
	//*/

	/**_UNUSED/
	if (typeof x.$ === 'undefined')
	//*/
	/**/
	if (x.$[0] === '#')
	//*/
	{
		return (ord = _Utils_cmp(x.a, y.a))
			? ord
			: (ord = _Utils_cmp(x.b, y.b))
				? ord
				: _Utils_cmp(x.c, y.c);
	}

	// traverse conses until end of a list or a mismatch
	for (; x.b && y.b && !(ord = _Utils_cmp(x.a, y.a)); x = x.b, y = y.b) {} // WHILE_CONSES
	return ord || (x.b ? /*GT*/ 1 : y.b ? /*LT*/ -1 : /*EQ*/ 0);
}

var _Utils_lt = F2(function(a, b) { return _Utils_cmp(a, b) < 0; });
var _Utils_le = F2(function(a, b) { return _Utils_cmp(a, b) < 1; });
var _Utils_gt = F2(function(a, b) { return _Utils_cmp(a, b) > 0; });
var _Utils_ge = F2(function(a, b) { return _Utils_cmp(a, b) >= 0; });

var _Utils_compare = F2(function(x, y)
{
	var n = _Utils_cmp(x, y);
	return n < 0 ? $elm$core$Basics$LT : n ? $elm$core$Basics$GT : $elm$core$Basics$EQ;
});


// COMMON VALUES

var _Utils_Tuple0_UNUSED = 0;
var _Utils_Tuple0 = { $: '#0' };

function _Utils_Tuple2_UNUSED(a, b) { return { a: a, b: b }; }
function _Utils_Tuple2(a, b) { return { $: '#2', a: a, b: b }; }

function _Utils_Tuple3_UNUSED(a, b, c) { return { a: a, b: b, c: c }; }
function _Utils_Tuple3(a, b, c) { return { $: '#3', a: a, b: b, c: c }; }

function _Utils_chr_UNUSED(c) { return c; }
function _Utils_chr(c) { return new String(c); }


// RECORDS

function _Utils_update(oldRecord, updatedFields)
{
	var newRecord = {};

	for (var key in oldRecord)
	{
		newRecord[key] = oldRecord[key];
	}

	for (var key in updatedFields)
	{
		newRecord[key] = updatedFields[key];
	}

	return newRecord;
}


// APPEND

var _Utils_append = F2(_Utils_ap);

function _Utils_ap(xs, ys)
{
	// append Strings
	if (typeof xs === 'string')
	{
		return xs + ys;
	}

	// append Lists
	if (!xs.b)
	{
		return ys;
	}
	var root = _List_Cons(xs.a, ys);
	xs = xs.b
	for (var curr = root; xs.b; xs = xs.b) // WHILE_CONS
	{
		curr = curr.b = _List_Cons(xs.a, ys);
	}
	return root;
}



var _List_Nil_UNUSED = { $: 0 };
var _List_Nil = { $: '[]' };

function _List_Cons_UNUSED(hd, tl) { return { $: 1, a: hd, b: tl }; }
function _List_Cons(hd, tl) { return { $: '::', a: hd, b: tl }; }


var _List_cons = F2(_List_Cons);

function _List_fromArray(arr)
{
	var out = _List_Nil;
	for (var i = arr.length; i--; )
	{
		out = _List_Cons(arr[i], out);
	}
	return out;
}

function _List_toArray(xs)
{
	for (var out = []; xs.b; xs = xs.b) // WHILE_CONS
	{
		out.push(xs.a);
	}
	return out;
}

var _List_map2 = F3(function(f, xs, ys)
{
	for (var arr = []; xs.b && ys.b; xs = xs.b, ys = ys.b) // WHILE_CONSES
	{
		arr.push(A2(f, xs.a, ys.a));
	}
	return _List_fromArray(arr);
});

var _List_map3 = F4(function(f, xs, ys, zs)
{
	for (var arr = []; xs.b && ys.b && zs.b; xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A3(f, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map4 = F5(function(f, ws, xs, ys, zs)
{
	for (var arr = []; ws.b && xs.b && ys.b && zs.b; ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A4(f, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_map5 = F6(function(f, vs, ws, xs, ys, zs)
{
	for (var arr = []; vs.b && ws.b && xs.b && ys.b && zs.b; vs = vs.b, ws = ws.b, xs = xs.b, ys = ys.b, zs = zs.b) // WHILE_CONSES
	{
		arr.push(A5(f, vs.a, ws.a, xs.a, ys.a, zs.a));
	}
	return _List_fromArray(arr);
});

var _List_sortBy = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		return _Utils_cmp(f(a), f(b));
	}));
});

var _List_sortWith = F2(function(f, xs)
{
	return _List_fromArray(_List_toArray(xs).sort(function(a, b) {
		var ord = A2(f, a, b);
		return ord === $elm$core$Basics$EQ ? 0 : ord === $elm$core$Basics$LT ? -1 : 1;
	}));
});



var _JsArray_empty = [];

function _JsArray_singleton(value)
{
    return [value];
}

function _JsArray_length(array)
{
    return array.length;
}

var _JsArray_initialize = F3(function(size, offset, func)
{
    var result = new Array(size);

    for (var i = 0; i < size; i++)
    {
        result[i] = func(offset + i);
    }

    return result;
});

var _JsArray_initializeFromList = F2(function (max, ls)
{
    var result = new Array(max);

    for (var i = 0; i < max && ls.b; i++)
    {
        result[i] = ls.a;
        ls = ls.b;
    }

    result.length = i;
    return _Utils_Tuple2(result, ls);
});

var _JsArray_unsafeGet = F2(function(index, array)
{
    return array[index];
});

var _JsArray_unsafeSet = F3(function(index, value, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[index] = value;
    return result;
});

var _JsArray_push = F2(function(value, array)
{
    var length = array.length;
    var result = new Array(length + 1);

    for (var i = 0; i < length; i++)
    {
        result[i] = array[i];
    }

    result[length] = value;
    return result;
});

var _JsArray_foldl = F3(function(func, acc, array)
{
    var length = array.length;

    for (var i = 0; i < length; i++)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_foldr = F3(function(func, acc, array)
{
    for (var i = array.length - 1; i >= 0; i--)
    {
        acc = A2(func, array[i], acc);
    }

    return acc;
});

var _JsArray_map = F2(function(func, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = func(array[i]);
    }

    return result;
});

var _JsArray_indexedMap = F3(function(func, offset, array)
{
    var length = array.length;
    var result = new Array(length);

    for (var i = 0; i < length; i++)
    {
        result[i] = A2(func, offset + i, array[i]);
    }

    return result;
});

var _JsArray_slice = F3(function(from, to, array)
{
    return array.slice(from, to);
});

var _JsArray_appendN = F3(function(n, dest, source)
{
    var destLen = dest.length;
    var itemsToCopy = n - destLen;

    if (itemsToCopy > source.length)
    {
        itemsToCopy = source.length;
    }

    var size = destLen + itemsToCopy;
    var result = new Array(size);

    for (var i = 0; i < destLen; i++)
    {
        result[i] = dest[i];
    }

    for (var i = 0; i < itemsToCopy; i++)
    {
        result[i + destLen] = source[i];
    }

    return result;
});



// LOG

var _Debug_log_UNUSED = F2(function(tag, value)
{
	return value;
});

var _Debug_log = F2(function(tag, value)
{
	console.log(tag + ': ' + _Debug_toString(value));
	return value;
});


// TODOS

function _Debug_todo(moduleName, region)
{
	return function(message) {
		_Debug_crash(8, moduleName, region, message);
	};
}

function _Debug_todoCase(moduleName, region, value)
{
	return function(message) {
		_Debug_crash(9, moduleName, region, value, message);
	};
}


// TO STRING

function _Debug_toString_UNUSED(value)
{
	return '<internals>';
}

function _Debug_toString(value)
{
	return _Debug_toAnsiString(false, value);
}

function _Debug_toAnsiString(ansi, value)
{
	if (typeof value === 'function')
	{
		return _Debug_internalColor(ansi, '<function>');
	}

	if (typeof value === 'boolean')
	{
		return _Debug_ctorColor(ansi, value ? 'True' : 'False');
	}

	if (typeof value === 'number')
	{
		return _Debug_numberColor(ansi, value + '');
	}

	if (value instanceof String)
	{
		return _Debug_charColor(ansi, "'" + _Debug_addSlashes(value, true) + "'");
	}

	if (typeof value === 'string')
	{
		return _Debug_stringColor(ansi, '"' + _Debug_addSlashes(value, false) + '"');
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (typeof tag === 'number')
		{
			return _Debug_internalColor(ansi, '<internals>');
		}

		if (tag[0] === '#')
		{
			var output = [];
			for (var k in value)
			{
				if (k === '$') continue;
				output.push(_Debug_toAnsiString(ansi, value[k]));
			}
			return '(' + output.join(',') + ')';
		}

		if (tag === 'Set_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Set')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Set$toList(value));
		}

		if (tag === 'RBNode_elm_builtin' || tag === 'RBEmpty_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Dict')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Dict$toList(value));
		}

		if (tag === 'Array_elm_builtin')
		{
			return _Debug_ctorColor(ansi, 'Array')
				+ _Debug_fadeColor(ansi, '.fromList') + ' '
				+ _Debug_toAnsiString(ansi, $elm$core$Array$toList(value));
		}

		if (tag === '::' || tag === '[]')
		{
			var output = '[';

			value.b && (output += _Debug_toAnsiString(ansi, value.a), value = value.b)

			for (; value.b; value = value.b) // WHILE_CONS
			{
				output += ',' + _Debug_toAnsiString(ansi, value.a);
			}
			return output + ']';
		}

		var output = '';
		for (var i in value)
		{
			if (i === '$') continue;
			var str = _Debug_toAnsiString(ansi, value[i]);
			var c0 = str[0];
			var parenless = c0 === '{' || c0 === '(' || c0 === '[' || c0 === '<' || c0 === '"' || str.indexOf(' ') < 0;
			output += ' ' + (parenless ? str : '(' + str + ')');
		}
		return _Debug_ctorColor(ansi, tag) + output;
	}

	if (typeof DataView === 'function' && value instanceof DataView)
	{
		return _Debug_stringColor(ansi, '<' + value.byteLength + ' bytes>');
	}

	if (typeof File !== 'undefined' && value instanceof File)
	{
		return _Debug_internalColor(ansi, '<' + value.name + '>');
	}

	if (typeof value === 'object')
	{
		var output = [];
		for (var key in value)
		{
			var field = key[0] === '_' ? key.slice(1) : key;
			output.push(_Debug_fadeColor(ansi, field) + ' = ' + _Debug_toAnsiString(ansi, value[key]));
		}
		if (output.length === 0)
		{
			return '{}';
		}
		return '{ ' + output.join(', ') + ' }';
	}

	return _Debug_internalColor(ansi, '<internals>');
}

function _Debug_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');

	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}

function _Debug_ctorColor(ansi, string)
{
	return ansi ? '\x1b[96m' + string + '\x1b[0m' : string;
}

function _Debug_numberColor(ansi, string)
{
	return ansi ? '\x1b[95m' + string + '\x1b[0m' : string;
}

function _Debug_stringColor(ansi, string)
{
	return ansi ? '\x1b[93m' + string + '\x1b[0m' : string;
}

function _Debug_charColor(ansi, string)
{
	return ansi ? '\x1b[92m' + string + '\x1b[0m' : string;
}

function _Debug_fadeColor(ansi, string)
{
	return ansi ? '\x1b[37m' + string + '\x1b[0m' : string;
}

function _Debug_internalColor(ansi, string)
{
	return ansi ? '\x1b[36m' + string + '\x1b[0m' : string;
}

function _Debug_toHexDigit(n)
{
	return String.fromCharCode(n < 10 ? 48 + n : 55 + n);
}


// CRASH


function _Debug_crash_UNUSED(identifier)
{
	throw new Error('https://github.com/elm/core/blob/1.0.0/hints/' + identifier + '.md');
}


function _Debug_crash(identifier, fact1, fact2, fact3, fact4)
{
	switch(identifier)
	{
		case 0:
			throw new Error('What node should I take over? In JavaScript I need something like:\n\n    Elm.Main.init({\n        node: document.getElementById("elm-node")\n    })\n\nYou need to do this with any Browser.sandbox or Browser.element program.');

		case 1:
			throw new Error('Browser.application programs cannot handle URLs like this:\n\n    ' + document.location.href + '\n\nWhat is the root? The root of your file system? Try looking at this program with `elm reactor` or some other server.');

		case 2:
			var jsonErrorString = fact1;
			throw new Error('Problem with the flags given to your Elm program on initialization.\n\n' + jsonErrorString);

		case 3:
			var portName = fact1;
			throw new Error('There can only be one port named `' + portName + '`, but your program has multiple.');

		case 4:
			var portName = fact1;
			var problem = fact2;
			throw new Error('Trying to send an unexpected type of value through port `' + portName + '`:\n' + problem);

		case 5:
			throw new Error('Trying to use `(==)` on functions.\nThere is no way to know if functions are "the same" in the Elm sense.\nRead more about this at https://package.elm-lang.org/packages/elm/core/latest/Basics#== which describes why it is this way and what the better version will look like.');

		case 6:
			var moduleName = fact1;
			throw new Error('Your page is loading multiple Elm scripts with a module named ' + moduleName + '. Maybe a duplicate script is getting loaded accidentally? If not, rename one of them so I know which is which!');

		case 8:
			var moduleName = fact1;
			var region = fact2;
			var message = fact3;
			throw new Error('TODO in module `' + moduleName + '` ' + _Debug_regionToString(region) + '\n\n' + message);

		case 9:
			var moduleName = fact1;
			var region = fact2;
			var value = fact3;
			var message = fact4;
			throw new Error(
				'TODO in module `' + moduleName + '` from the `case` expression '
				+ _Debug_regionToString(region) + '\n\nIt received the following value:\n\n    '
				+ _Debug_toString(value).replace('\n', '\n    ')
				+ '\n\nBut the branch that handles it says:\n\n    ' + message.replace('\n', '\n    ')
			);

		case 10:
			throw new Error('Bug in https://github.com/elm/virtual-dom/issues');

		case 11:
			throw new Error('Cannot perform mod 0. Division by zero error.');
	}
}

function _Debug_regionToString(region)
{
	if (region.start.line === region.end.line)
	{
		return 'on line ' + region.start.line;
	}
	return 'on lines ' + region.start.line + ' through ' + region.end.line;
}



// MATH

var _Basics_add = F2(function(a, b) { return a + b; });
var _Basics_sub = F2(function(a, b) { return a - b; });
var _Basics_mul = F2(function(a, b) { return a * b; });
var _Basics_fdiv = F2(function(a, b) { return a / b; });
var _Basics_idiv = F2(function(a, b) { return (a / b) | 0; });
var _Basics_pow = F2(Math.pow);

var _Basics_remainderBy = F2(function(b, a) { return a % b; });

// https://www.microsoft.com/en-us/research/wp-content/uploads/2016/02/divmodnote-letter.pdf
var _Basics_modBy = F2(function(modulus, x)
{
	var answer = x % modulus;
	return modulus === 0
		? _Debug_crash(11)
		:
	((answer > 0 && modulus < 0) || (answer < 0 && modulus > 0))
		? answer + modulus
		: answer;
});


// TRIGONOMETRY

var _Basics_pi = Math.PI;
var _Basics_e = Math.E;
var _Basics_cos = Math.cos;
var _Basics_sin = Math.sin;
var _Basics_tan = Math.tan;
var _Basics_acos = Math.acos;
var _Basics_asin = Math.asin;
var _Basics_atan = Math.atan;
var _Basics_atan2 = F2(Math.atan2);


// MORE MATH

function _Basics_toFloat(x) { return x; }
function _Basics_truncate(n) { return n | 0; }
function _Basics_isInfinite(n) { return n === Infinity || n === -Infinity; }

var _Basics_ceiling = Math.ceil;
var _Basics_floor = Math.floor;
var _Basics_round = Math.round;
var _Basics_sqrt = Math.sqrt;
var _Basics_log = Math.log;
var _Basics_isNaN = isNaN;


// BOOLEANS

function _Basics_not(bool) { return !bool; }
var _Basics_and = F2(function(a, b) { return a && b; });
var _Basics_or  = F2(function(a, b) { return a || b; });
var _Basics_xor = F2(function(a, b) { return a !== b; });



var _String_cons = F2(function(chr, str)
{
	return chr + str;
});

function _String_uncons(string)
{
	var word = string.charCodeAt(0);
	return !isNaN(word)
		? $elm$core$Maybe$Just(
			0xD800 <= word && word <= 0xDBFF
				? _Utils_Tuple2(_Utils_chr(string[0] + string[1]), string.slice(2))
				: _Utils_Tuple2(_Utils_chr(string[0]), string.slice(1))
		)
		: $elm$core$Maybe$Nothing;
}

var _String_append = F2(function(a, b)
{
	return a + b;
});

function _String_length(str)
{
	return str.length;
}

var _String_map = F2(function(func, string)
{
	var len = string.length;
	var array = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = string.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			array[i] = func(_Utils_chr(string[i] + string[i+1]));
			i += 2;
			continue;
		}
		array[i] = func(_Utils_chr(string[i]));
		i++;
	}
	return array.join('');
});

var _String_filter = F2(function(isGood, str)
{
	var arr = [];
	var len = str.length;
	var i = 0;
	while (i < len)
	{
		var char = str[i];
		var word = str.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += str[i];
			i++;
		}

		if (isGood(_Utils_chr(char)))
		{
			arr.push(char);
		}
	}
	return arr.join('');
});

function _String_reverse(str)
{
	var len = str.length;
	var arr = new Array(len);
	var i = 0;
	while (i < len)
	{
		var word = str.charCodeAt(i);
		if (0xD800 <= word && word <= 0xDBFF)
		{
			arr[len - i] = str[i + 1];
			i++;
			arr[len - i] = str[i - 1];
			i++;
		}
		else
		{
			arr[len - i] = str[i];
			i++;
		}
	}
	return arr.join('');
}

var _String_foldl = F3(function(func, state, string)
{
	var len = string.length;
	var i = 0;
	while (i < len)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		i++;
		if (0xD800 <= word && word <= 0xDBFF)
		{
			char += string[i];
			i++;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_foldr = F3(function(func, state, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		state = A2(func, _Utils_chr(char), state);
	}
	return state;
});

var _String_split = F2(function(sep, str)
{
	return str.split(sep);
});

var _String_join = F2(function(sep, strs)
{
	return strs.join(sep);
});

var _String_slice = F3(function(start, end, str) {
	return str.slice(start, end);
});

function _String_trim(str)
{
	return str.trim();
}

function _String_trimLeft(str)
{
	return str.replace(/^\s+/, '');
}

function _String_trimRight(str)
{
	return str.replace(/\s+$/, '');
}

function _String_words(str)
{
	return _List_fromArray(str.trim().split(/\s+/g));
}

function _String_lines(str)
{
	return _List_fromArray(str.split(/\r\n|\r|\n/g));
}

function _String_toUpper(str)
{
	return str.toUpperCase();
}

function _String_toLower(str)
{
	return str.toLowerCase();
}

var _String_any = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (isGood(_Utils_chr(char)))
		{
			return true;
		}
	}
	return false;
});

var _String_all = F2(function(isGood, string)
{
	var i = string.length;
	while (i--)
	{
		var char = string[i];
		var word = string.charCodeAt(i);
		if (0xDC00 <= word && word <= 0xDFFF)
		{
			i--;
			char = string[i] + char;
		}
		if (!isGood(_Utils_chr(char)))
		{
			return false;
		}
	}
	return true;
});

var _String_contains = F2(function(sub, str)
{
	return str.indexOf(sub) > -1;
});

var _String_startsWith = F2(function(sub, str)
{
	return str.indexOf(sub) === 0;
});

var _String_endsWith = F2(function(sub, str)
{
	return str.length >= sub.length &&
		str.lastIndexOf(sub) === str.length - sub.length;
});

var _String_indexes = F2(function(sub, str)
{
	var subLen = sub.length;

	if (subLen < 1)
	{
		return _List_Nil;
	}

	var i = 0;
	var is = [];

	while ((i = str.indexOf(sub, i)) > -1)
	{
		is.push(i);
		i = i + subLen;
	}

	return _List_fromArray(is);
});


// TO STRING

function _String_fromNumber(number)
{
	return number + '';
}


// INT CONVERSIONS

function _String_toInt(str)
{
	var total = 0;
	var code0 = str.charCodeAt(0);
	var start = code0 == 0x2B /* + */ || code0 == 0x2D /* - */ ? 1 : 0;

	for (var i = start; i < str.length; ++i)
	{
		var code = str.charCodeAt(i);
		if (code < 0x30 || 0x39 < code)
		{
			return $elm$core$Maybe$Nothing;
		}
		total = 10 * total + code - 0x30;
	}

	return i == start
		? $elm$core$Maybe$Nothing
		: $elm$core$Maybe$Just(code0 == 0x2D ? -total : total);
}


// FLOAT CONVERSIONS

function _String_toFloat(s)
{
	// check if it is a hex, octal, or binary number
	if (s.length === 0 || /[\sxbo]/.test(s))
	{
		return $elm$core$Maybe$Nothing;
	}
	var n = +s;
	// faster isNaN check
	return n === n ? $elm$core$Maybe$Just(n) : $elm$core$Maybe$Nothing;
}

function _String_fromList(chars)
{
	return _List_toArray(chars).join('');
}




function _Char_toCode(char)
{
	var code = char.charCodeAt(0);
	if (0xD800 <= code && code <= 0xDBFF)
	{
		return (code - 0xD800) * 0x400 + char.charCodeAt(1) - 0xDC00 + 0x10000
	}
	return code;
}

function _Char_fromCode(code)
{
	return _Utils_chr(
		(code < 0 || 0x10FFFF < code)
			? '\uFFFD'
			:
		(code <= 0xFFFF)
			? String.fromCharCode(code)
			:
		(code -= 0x10000,
			String.fromCharCode(Math.floor(code / 0x400) + 0xD800, code % 0x400 + 0xDC00)
		)
	);
}

function _Char_toUpper(char)
{
	return _Utils_chr(char.toUpperCase());
}

function _Char_toLower(char)
{
	return _Utils_chr(char.toLowerCase());
}

function _Char_toLocaleUpper(char)
{
	return _Utils_chr(char.toLocaleUpperCase());
}

function _Char_toLocaleLower(char)
{
	return _Utils_chr(char.toLocaleLowerCase());
}



/**/
function _Json_errorToString(error)
{
	return $elm$json$Json$Decode$errorToString(error);
}
//*/


// CORE DECODERS

function _Json_succeed(msg)
{
	return {
		$: 0,
		a: msg
	};
}

function _Json_fail(msg)
{
	return {
		$: 1,
		a: msg
	};
}

function _Json_decodePrim(decoder)
{
	return { $: 2, b: decoder };
}

var _Json_decodeInt = _Json_decodePrim(function(value) {
	return (typeof value !== 'number')
		? _Json_expecting('an INT', value)
		:
	(-2147483647 < value && value < 2147483647 && (value | 0) === value)
		? $elm$core$Result$Ok(value)
		:
	(isFinite(value) && !(value % 1))
		? $elm$core$Result$Ok(value)
		: _Json_expecting('an INT', value);
});

var _Json_decodeBool = _Json_decodePrim(function(value) {
	return (typeof value === 'boolean')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a BOOL', value);
});

var _Json_decodeFloat = _Json_decodePrim(function(value) {
	return (typeof value === 'number')
		? $elm$core$Result$Ok(value)
		: _Json_expecting('a FLOAT', value);
});

var _Json_decodeValue = _Json_decodePrim(function(value) {
	return $elm$core$Result$Ok(_Json_wrap(value));
});

var _Json_decodeString = _Json_decodePrim(function(value) {
	return (typeof value === 'string')
		? $elm$core$Result$Ok(value)
		: (value instanceof String)
			? $elm$core$Result$Ok(value + '')
			: _Json_expecting('a STRING', value);
});

function _Json_decodeList(decoder) { return { $: 3, b: decoder }; }
function _Json_decodeArray(decoder) { return { $: 4, b: decoder }; }

function _Json_decodeNull(value) { return { $: 5, c: value }; }

var _Json_decodeField = F2(function(field, decoder)
{
	return {
		$: 6,
		d: field,
		b: decoder
	};
});

var _Json_decodeIndex = F2(function(index, decoder)
{
	return {
		$: 7,
		e: index,
		b: decoder
	};
});

function _Json_decodeKeyValuePairs(decoder)
{
	return {
		$: 8,
		b: decoder
	};
}

function _Json_mapMany(f, decoders)
{
	return {
		$: 9,
		f: f,
		g: decoders
	};
}

var _Json_andThen = F2(function(callback, decoder)
{
	return {
		$: 10,
		b: decoder,
		h: callback
	};
});

function _Json_oneOf(decoders)
{
	return {
		$: 11,
		g: decoders
	};
}


// DECODING OBJECTS

var _Json_map1 = F2(function(f, d1)
{
	return _Json_mapMany(f, [d1]);
});

var _Json_map2 = F3(function(f, d1, d2)
{
	return _Json_mapMany(f, [d1, d2]);
});

var _Json_map3 = F4(function(f, d1, d2, d3)
{
	return _Json_mapMany(f, [d1, d2, d3]);
});

var _Json_map4 = F5(function(f, d1, d2, d3, d4)
{
	return _Json_mapMany(f, [d1, d2, d3, d4]);
});

var _Json_map5 = F6(function(f, d1, d2, d3, d4, d5)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5]);
});

var _Json_map6 = F7(function(f, d1, d2, d3, d4, d5, d6)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6]);
});

var _Json_map7 = F8(function(f, d1, d2, d3, d4, d5, d6, d7)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7]);
});

var _Json_map8 = F9(function(f, d1, d2, d3, d4, d5, d6, d7, d8)
{
	return _Json_mapMany(f, [d1, d2, d3, d4, d5, d6, d7, d8]);
});


// DECODE

var _Json_runOnString = F2(function(decoder, string)
{
	try
	{
		var value = JSON.parse(string);
		return _Json_runHelp(decoder, value);
	}
	catch (e)
	{
		return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'This is not valid JSON! ' + e.message, _Json_wrap(string)));
	}
});

var _Json_run = F2(function(decoder, value)
{
	return _Json_runHelp(decoder, _Json_unwrap(value));
});

function _Json_runHelp(decoder, value)
{
	switch (decoder.$)
	{
		case 2:
			return decoder.b(value);

		case 5:
			return (value === null)
				? $elm$core$Result$Ok(decoder.c)
				: _Json_expecting('null', value);

		case 3:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('a LIST', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _List_fromArray);

		case 4:
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			return _Json_runArrayDecoder(decoder.b, value, _Json_toElmArray);

		case 6:
			var field = decoder.d;
			if (typeof value !== 'object' || value === null || !(field in value))
			{
				return _Json_expecting('an OBJECT with a field named `' + field + '`', value);
			}
			var result = _Json_runHelp(decoder.b, value[field]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, field, result.a));

		case 7:
			var index = decoder.e;
			if (!_Json_isArray(value))
			{
				return _Json_expecting('an ARRAY', value);
			}
			if (index >= value.length)
			{
				return _Json_expecting('a LONGER array. Need index ' + index + ' but only see ' + value.length + ' entries', value);
			}
			var result = _Json_runHelp(decoder.b, value[index]);
			return ($elm$core$Result$isOk(result)) ? result : $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, index, result.a));

		case 8:
			if (typeof value !== 'object' || value === null || _Json_isArray(value))
			{
				return _Json_expecting('an OBJECT', value);
			}

			var keyValuePairs = _List_Nil;
			// TODO test perf of Object.keys and switch when support is good enough
			for (var key in value)
			{
				if (value.hasOwnProperty(key))
				{
					var result = _Json_runHelp(decoder.b, value[key]);
					if (!$elm$core$Result$isOk(result))
					{
						return $elm$core$Result$Err(A2($elm$json$Json$Decode$Field, key, result.a));
					}
					keyValuePairs = _List_Cons(_Utils_Tuple2(key, result.a), keyValuePairs);
				}
			}
			return $elm$core$Result$Ok($elm$core$List$reverse(keyValuePairs));

		case 9:
			var answer = decoder.f;
			var decoders = decoder.g;
			for (var i = 0; i < decoders.length; i++)
			{
				var result = _Json_runHelp(decoders[i], value);
				if (!$elm$core$Result$isOk(result))
				{
					return result;
				}
				answer = answer(result.a);
			}
			return $elm$core$Result$Ok(answer);

		case 10:
			var result = _Json_runHelp(decoder.b, value);
			return (!$elm$core$Result$isOk(result))
				? result
				: _Json_runHelp(decoder.h(result.a), value);

		case 11:
			var errors = _List_Nil;
			for (var temp = decoder.g; temp.b; temp = temp.b) // WHILE_CONS
			{
				var result = _Json_runHelp(temp.a, value);
				if ($elm$core$Result$isOk(result))
				{
					return result;
				}
				errors = _List_Cons(result.a, errors);
			}
			return $elm$core$Result$Err($elm$json$Json$Decode$OneOf($elm$core$List$reverse(errors)));

		case 1:
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, decoder.a, _Json_wrap(value)));

		case 0:
			return $elm$core$Result$Ok(decoder.a);
	}
}

function _Json_runArrayDecoder(decoder, value, toElmValue)
{
	var len = value.length;
	var array = new Array(len);
	for (var i = 0; i < len; i++)
	{
		var result = _Json_runHelp(decoder, value[i]);
		if (!$elm$core$Result$isOk(result))
		{
			return $elm$core$Result$Err(A2($elm$json$Json$Decode$Index, i, result.a));
		}
		array[i] = result.a;
	}
	return $elm$core$Result$Ok(toElmValue(array));
}

function _Json_isArray(value)
{
	return Array.isArray(value) || (typeof FileList !== 'undefined' && value instanceof FileList);
}

function _Json_toElmArray(array)
{
	return A2($elm$core$Array$initialize, array.length, function(i) { return array[i]; });
}

function _Json_expecting(type, value)
{
	return $elm$core$Result$Err(A2($elm$json$Json$Decode$Failure, 'Expecting ' + type, _Json_wrap(value)));
}


// EQUALITY

function _Json_equality(x, y)
{
	if (x === y)
	{
		return true;
	}

	if (x.$ !== y.$)
	{
		return false;
	}

	switch (x.$)
	{
		case 0:
		case 1:
			return x.a === y.a;

		case 2:
			return x.b === y.b;

		case 5:
			return x.c === y.c;

		case 3:
		case 4:
		case 8:
			return _Json_equality(x.b, y.b);

		case 6:
			return x.d === y.d && _Json_equality(x.b, y.b);

		case 7:
			return x.e === y.e && _Json_equality(x.b, y.b);

		case 9:
			return x.f === y.f && _Json_listEquality(x.g, y.g);

		case 10:
			return x.h === y.h && _Json_equality(x.b, y.b);

		case 11:
			return _Json_listEquality(x.g, y.g);
	}
}

function _Json_listEquality(aDecoders, bDecoders)
{
	var len = aDecoders.length;
	if (len !== bDecoders.length)
	{
		return false;
	}
	for (var i = 0; i < len; i++)
	{
		if (!_Json_equality(aDecoders[i], bDecoders[i]))
		{
			return false;
		}
	}
	return true;
}


// ENCODE

var _Json_encode = F2(function(indentLevel, value)
{
	return JSON.stringify(_Json_unwrap(value), null, indentLevel) + '';
});

function _Json_wrap(value) { return { $: 0, a: value }; }
function _Json_unwrap(value) { return value.a; }

function _Json_wrap_UNUSED(value) { return value; }
function _Json_unwrap_UNUSED(value) { return value; }

function _Json_emptyArray() { return []; }
function _Json_emptyObject() { return {}; }

var _Json_addField = F3(function(key, value, object)
{
	object[key] = _Json_unwrap(value);
	return object;
});

function _Json_addEntry(func)
{
	return F2(function(entry, array)
	{
		array.push(_Json_unwrap(func(entry)));
		return array;
	});
}

var _Json_encodeNull = _Json_wrap(null);



// TASKS

function _Scheduler_succeed(value)
{
	return {
		$: 0,
		a: value
	};
}

function _Scheduler_fail(error)
{
	return {
		$: 1,
		a: error
	};
}

function _Scheduler_binding(callback)
{
	return {
		$: 2,
		b: callback,
		c: null
	};
}

var _Scheduler_andThen = F2(function(callback, task)
{
	return {
		$: 3,
		b: callback,
		d: task
	};
});

var _Scheduler_onError = F2(function(callback, task)
{
	return {
		$: 4,
		b: callback,
		d: task
	};
});

function _Scheduler_receive(callback)
{
	return {
		$: 5,
		b: callback
	};
}


// PROCESSES

var _Scheduler_guid = 0;

function _Scheduler_rawSpawn(task)
{
	var proc = {
		$: 0,
		e: _Scheduler_guid++,
		f: task,
		g: null,
		h: []
	};

	_Scheduler_enqueue(proc);

	return proc;
}

function _Scheduler_spawn(task)
{
	return _Scheduler_binding(function(callback) {
		callback(_Scheduler_succeed(_Scheduler_rawSpawn(task)));
	});
}

function _Scheduler_rawSend(proc, msg)
{
	proc.h.push(msg);
	_Scheduler_enqueue(proc);
}

var _Scheduler_send = F2(function(proc, msg)
{
	return _Scheduler_binding(function(callback) {
		_Scheduler_rawSend(proc, msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});

function _Scheduler_kill(proc)
{
	return _Scheduler_binding(function(callback) {
		var task = proc.f;
		if (task.$ === 2 && task.c)
		{
			task.c();
		}

		proc.f = null;

		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


/* STEP PROCESSES

type alias Process =
  { $ : tag
  , id : unique_id
  , root : Task
  , stack : null | { $: SUCCEED | FAIL, a: callback, b: stack }
  , mailbox : [msg]
  }

*/


var _Scheduler_working = false;
var _Scheduler_queue = [];


function _Scheduler_enqueue(proc)
{
	_Scheduler_queue.push(proc);
	if (_Scheduler_working)
	{
		return;
	}
	_Scheduler_working = true;
	while (proc = _Scheduler_queue.shift())
	{
		_Scheduler_step(proc);
	}
	_Scheduler_working = false;
}


function _Scheduler_step(proc)
{
	while (proc.f)
	{
		var rootTag = proc.f.$;
		if (rootTag === 0 || rootTag === 1)
		{
			while (proc.g && proc.g.$ !== rootTag)
			{
				proc.g = proc.g.i;
			}
			if (!proc.g)
			{
				return;
			}
			proc.f = proc.g.b(proc.f.a);
			proc.g = proc.g.i;
		}
		else if (rootTag === 2)
		{
			proc.f.c = proc.f.b(function(newRoot) {
				proc.f = newRoot;
				_Scheduler_enqueue(proc);
			});
			return;
		}
		else if (rootTag === 5)
		{
			if (proc.h.length === 0)
			{
				return;
			}
			proc.f = proc.f.b(proc.h.shift());
		}
		else // if (rootTag === 3 || rootTag === 4)
		{
			proc.g = {
				$: rootTag === 3 ? 0 : 1,
				b: proc.f.b,
				i: proc.g
			};
			proc.f = proc.f.d;
		}
	}
}



function _Process_sleep(time)
{
	return _Scheduler_binding(function(callback) {
		var id = setTimeout(function() {
			callback(_Scheduler_succeed(_Utils_Tuple0));
		}, time);

		return function() { clearTimeout(id); };
	});
}




// PROGRAMS


var _Platform_worker = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function() { return function() {} }
	);
});



// INITIALIZE A PROGRAM


function _Platform_initialize(flagDecoder, args, init, update, subscriptions, stepperBuilder)
{
	var result = A2(_Json_run, flagDecoder, _Json_wrap(args ? args['flags'] : undefined));
	$elm$core$Result$isOk(result) || _Debug_crash(2 /**/, _Json_errorToString(result.a) /**/);
	var managers = {};
	result = init(result.a);
	var model = result.a;
	var stepper = stepperBuilder(sendToApp, model);
	var ports = _Platform_setupEffects(managers, sendToApp);

	function sendToApp(msg, viewMetadata)
	{
		result = A2(update, msg, model);
		stepper(model = result.a, viewMetadata);
		_Platform_enqueueEffects(managers, result.b, subscriptions(model));
	}

	_Platform_enqueueEffects(managers, result.b, subscriptions(model));

	return ports ? { ports: ports } : {};
}



// TRACK PRELOADS
//
// This is used by code in elm/browser and elm/http
// to register any HTTP requests that are triggered by init.
//


var _Platform_preload;


function _Platform_registerPreload(url)
{
	_Platform_preload.add(url);
}



// EFFECT MANAGERS


var _Platform_effectManagers = {};


function _Platform_setupEffects(managers, sendToApp)
{
	var ports;

	// setup all necessary effect managers
	for (var key in _Platform_effectManagers)
	{
		var manager = _Platform_effectManagers[key];

		if (manager.a)
		{
			ports = ports || {};
			ports[key] = manager.a(key, sendToApp);
		}

		managers[key] = _Platform_instantiateManager(manager, sendToApp);
	}

	return ports;
}


function _Platform_createManager(init, onEffects, onSelfMsg, cmdMap, subMap)
{
	return {
		b: init,
		c: onEffects,
		d: onSelfMsg,
		e: cmdMap,
		f: subMap
	};
}


function _Platform_instantiateManager(info, sendToApp)
{
	var router = {
		g: sendToApp,
		h: undefined
	};

	var onEffects = info.c;
	var onSelfMsg = info.d;
	var cmdMap = info.e;
	var subMap = info.f;

	function loop(state)
	{
		return A2(_Scheduler_andThen, loop, _Scheduler_receive(function(msg)
		{
			var value = msg.a;

			if (msg.$ === 0)
			{
				return A3(onSelfMsg, router, value, state);
			}

			return cmdMap && subMap
				? A4(onEffects, router, value.i, value.j, state)
				: A3(onEffects, router, cmdMap ? value.i : value.j, state);
		}));
	}

	return router.h = _Scheduler_rawSpawn(A2(_Scheduler_andThen, loop, info.b));
}



// ROUTING


var _Platform_sendToApp = F2(function(router, msg)
{
	return _Scheduler_binding(function(callback)
	{
		router.g(msg);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});


var _Platform_sendToSelf = F2(function(router, msg)
{
	return A2(_Scheduler_send, router.h, {
		$: 0,
		a: msg
	});
});



// BAGS


function _Platform_leaf(home)
{
	return function(value)
	{
		return {
			$: 1,
			k: home,
			l: value
		};
	};
}


function _Platform_batch(list)
{
	return {
		$: 2,
		m: list
	};
}


var _Platform_map = F2(function(tagger, bag)
{
	return {
		$: 3,
		n: tagger,
		o: bag
	}
});



// PIPE BAGS INTO EFFECT MANAGERS
//
// Effects must be queued!
//
// Say your init contains a synchronous command, like Time.now or Time.here
//
//   - This will produce a batch of effects (FX_1)
//   - The synchronous task triggers the subsequent `update` call
//   - This will produce a batch of effects (FX_2)
//
// If we just start dispatching FX_2, subscriptions from FX_2 can be processed
// before subscriptions from FX_1. No good! Earlier versions of this code had
// this problem, leading to these reports:
//
//   https://github.com/elm/core/issues/980
//   https://github.com/elm/core/pull/981
//   https://github.com/elm/compiler/issues/1776
//
// The queue is necessary to avoid ordering issues for synchronous commands.


// Why use true/false here? Why not just check the length of the queue?
// The goal is to detect "are we currently dispatching effects?" If we
// are, we need to bail and let the ongoing while loop handle things.
//
// Now say the queue has 1 element. When we dequeue the final element,
// the queue will be empty, but we are still actively dispatching effects.
// So you could get queue jumping in a really tricky category of cases.
//
var _Platform_effectsQueue = [];
var _Platform_effectsActive = false;


function _Platform_enqueueEffects(managers, cmdBag, subBag)
{
	_Platform_effectsQueue.push({ p: managers, q: cmdBag, r: subBag });

	if (_Platform_effectsActive) return;

	_Platform_effectsActive = true;
	for (var fx; fx = _Platform_effectsQueue.shift(); )
	{
		_Platform_dispatchEffects(fx.p, fx.q, fx.r);
	}
	_Platform_effectsActive = false;
}


function _Platform_dispatchEffects(managers, cmdBag, subBag)
{
	var effectsDict = {};
	_Platform_gatherEffects(true, cmdBag, effectsDict, null);
	_Platform_gatherEffects(false, subBag, effectsDict, null);

	for (var home in managers)
	{
		_Scheduler_rawSend(managers[home], {
			$: 'fx',
			a: effectsDict[home] || { i: _List_Nil, j: _List_Nil }
		});
	}
}


function _Platform_gatherEffects(isCmd, bag, effectsDict, taggers)
{
	switch (bag.$)
	{
		case 1:
			var home = bag.k;
			var effect = _Platform_toEffect(isCmd, home, taggers, bag.l);
			effectsDict[home] = _Platform_insert(isCmd, effect, effectsDict[home]);
			return;

		case 2:
			for (var list = bag.m; list.b; list = list.b) // WHILE_CONS
			{
				_Platform_gatherEffects(isCmd, list.a, effectsDict, taggers);
			}
			return;

		case 3:
			_Platform_gatherEffects(isCmd, bag.o, effectsDict, {
				s: bag.n,
				t: taggers
			});
			return;
	}
}


function _Platform_toEffect(isCmd, home, taggers, value)
{
	function applyTaggers(x)
	{
		for (var temp = taggers; temp; temp = temp.t)
		{
			x = temp.s(x);
		}
		return x;
	}

	var map = isCmd
		? _Platform_effectManagers[home].e
		: _Platform_effectManagers[home].f;

	return A2(map, applyTaggers, value)
}


function _Platform_insert(isCmd, newEffect, effects)
{
	effects = effects || { i: _List_Nil, j: _List_Nil };

	isCmd
		? (effects.i = _List_Cons(newEffect, effects.i))
		: (effects.j = _List_Cons(newEffect, effects.j));

	return effects;
}



// PORTS


function _Platform_checkPortName(name)
{
	if (_Platform_effectManagers[name])
	{
		_Debug_crash(3, name)
	}
}



// OUTGOING PORTS


function _Platform_outgoingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		e: _Platform_outgoingPortMap,
		u: converter,
		a: _Platform_setupOutgoingPort
	};
	return _Platform_leaf(name);
}


var _Platform_outgoingPortMap = F2(function(tagger, value) { return value; });


function _Platform_setupOutgoingPort(name)
{
	var subs = [];
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Process_sleep(0);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, cmdList, state)
	{
		for ( ; cmdList.b; cmdList = cmdList.b) // WHILE_CONS
		{
			// grab a separate reference to subs in case unsubscribe is called
			var currentSubs = subs;
			var value = _Json_unwrap(converter(cmdList.a));
			for (var i = 0; i < currentSubs.length; i++)
			{
				currentSubs[i](value);
			}
		}
		return init;
	});

	// PUBLIC API

	function subscribe(callback)
	{
		subs.push(callback);
	}

	function unsubscribe(callback)
	{
		// copy subs into a new array in case unsubscribe is called within a
		// subscribed callback
		subs = subs.slice();
		var index = subs.indexOf(callback);
		if (index >= 0)
		{
			subs.splice(index, 1);
		}
	}

	return {
		subscribe: subscribe,
		unsubscribe: unsubscribe
	};
}



// INCOMING PORTS


function _Platform_incomingPort(name, converter)
{
	_Platform_checkPortName(name);
	_Platform_effectManagers[name] = {
		f: _Platform_incomingPortMap,
		u: converter,
		a: _Platform_setupIncomingPort
	};
	return _Platform_leaf(name);
}


var _Platform_incomingPortMap = F2(function(tagger, finalTagger)
{
	return function(value)
	{
		return tagger(finalTagger(value));
	};
});


function _Platform_setupIncomingPort(name, sendToApp)
{
	var subs = _List_Nil;
	var converter = _Platform_effectManagers[name].u;

	// CREATE MANAGER

	var init = _Scheduler_succeed(null);

	_Platform_effectManagers[name].b = init;
	_Platform_effectManagers[name].c = F3(function(router, subList, state)
	{
		subs = subList;
		return init;
	});

	// PUBLIC API

	function send(incomingValue)
	{
		var result = A2(_Json_run, converter, _Json_wrap(incomingValue));

		$elm$core$Result$isOk(result) || _Debug_crash(4, name, result.a);

		var value = result.a;
		for (var temp = subs; temp.b; temp = temp.b) // WHILE_CONS
		{
			sendToApp(temp.a(value));
		}
	}

	return { send: send };
}



// EXPORT ELM MODULES
//
// Have DEBUG and PROD versions so that we can (1) give nicer errors in
// debug mode and (2) not pay for the bits needed for that in prod mode.
//


function _Platform_export_UNUSED(exports)
{
	scope['Elm']
		? _Platform_mergeExportsProd(scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsProd(obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6)
				: _Platform_mergeExportsProd(obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}


function _Platform_export(exports)
{
	scope['Elm']
		? _Platform_mergeExportsDebug('Elm', scope['Elm'], exports)
		: scope['Elm'] = exports;
}


function _Platform_mergeExportsDebug(moduleName, obj, exports)
{
	for (var name in exports)
	{
		(name in obj)
			? (name == 'init')
				? _Debug_crash(6, moduleName)
				: _Platform_mergeExportsDebug(moduleName + '.' + name, obj[name], exports[name])
			: (obj[name] = exports[name]);
	}
}




// HELPERS


var _VirtualDom_divertHrefToApp;

var _VirtualDom_doc = typeof document !== 'undefined' ? document : {};


function _VirtualDom_appendChild(parent, child)
{
	parent.appendChild(child);
}

var _VirtualDom_init = F4(function(virtualNode, flagDecoder, debugMetadata, args)
{
	// NOTE: this function needs _Platform_export available to work

	/**_UNUSED/
	var node = args['node'];
	//*/
	/**/
	var node = args && args['node'] ? args['node'] : _Debug_crash(0);
	//*/

	node.parentNode.replaceChild(
		_VirtualDom_render(virtualNode, function() {}),
		node
	);

	return {};
});



// TEXT


function _VirtualDom_text(string)
{
	return {
		$: 0,
		a: string
	};
}



// NODE


var _VirtualDom_nodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 1,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_node = _VirtualDom_nodeNS(undefined);



// KEYED NODE


var _VirtualDom_keyedNodeNS = F2(function(namespace, tag)
{
	return F2(function(factList, kidList)
	{
		for (var kids = [], descendantsCount = 0; kidList.b; kidList = kidList.b) // WHILE_CONS
		{
			var kid = kidList.a;
			descendantsCount += (kid.b.b || 0);
			kids.push(kid);
		}
		descendantsCount += kids.length;

		return {
			$: 2,
			c: tag,
			d: _VirtualDom_organizeFacts(factList),
			e: kids,
			f: namespace,
			b: descendantsCount
		};
	});
});


var _VirtualDom_keyedNode = _VirtualDom_keyedNodeNS(undefined);



// CUSTOM


function _VirtualDom_custom(factList, model, render, diff)
{
	return {
		$: 3,
		d: _VirtualDom_organizeFacts(factList),
		g: model,
		h: render,
		i: diff
	};
}



// MAP


var _VirtualDom_map = F2(function(tagger, node)
{
	return {
		$: 4,
		j: tagger,
		k: node,
		b: 1 + (node.b || 0)
	};
});



// LAZY


function _VirtualDom_thunk(refs, thunk)
{
	return {
		$: 5,
		l: refs,
		m: thunk,
		k: undefined
	};
}

var _VirtualDom_lazy = F2(function(func, a)
{
	return _VirtualDom_thunk([func, a], function() {
		return func(a);
	});
});

var _VirtualDom_lazy2 = F3(function(func, a, b)
{
	return _VirtualDom_thunk([func, a, b], function() {
		return A2(func, a, b);
	});
});

var _VirtualDom_lazy3 = F4(function(func, a, b, c)
{
	return _VirtualDom_thunk([func, a, b, c], function() {
		return A3(func, a, b, c);
	});
});

var _VirtualDom_lazy4 = F5(function(func, a, b, c, d)
{
	return _VirtualDom_thunk([func, a, b, c, d], function() {
		return A4(func, a, b, c, d);
	});
});

var _VirtualDom_lazy5 = F6(function(func, a, b, c, d, e)
{
	return _VirtualDom_thunk([func, a, b, c, d, e], function() {
		return A5(func, a, b, c, d, e);
	});
});

var _VirtualDom_lazy6 = F7(function(func, a, b, c, d, e, f)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f], function() {
		return A6(func, a, b, c, d, e, f);
	});
});

var _VirtualDom_lazy7 = F8(function(func, a, b, c, d, e, f, g)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g], function() {
		return A7(func, a, b, c, d, e, f, g);
	});
});

var _VirtualDom_lazy8 = F9(function(func, a, b, c, d, e, f, g, h)
{
	return _VirtualDom_thunk([func, a, b, c, d, e, f, g, h], function() {
		return A8(func, a, b, c, d, e, f, g, h);
	});
});



// FACTS


var _VirtualDom_on = F2(function(key, handler)
{
	return {
		$: 'a0',
		n: key,
		o: handler
	};
});
var _VirtualDom_style = F2(function(key, value)
{
	return {
		$: 'a1',
		n: key,
		o: value
	};
});
var _VirtualDom_property = F2(function(key, value)
{
	return {
		$: 'a2',
		n: key,
		o: value
	};
});
var _VirtualDom_attribute = F2(function(key, value)
{
	return {
		$: 'a3',
		n: key,
		o: value
	};
});
var _VirtualDom_attributeNS = F3(function(namespace, key, value)
{
	return {
		$: 'a4',
		n: key,
		o: { f: namespace, o: value }
	};
});



// XSS ATTACK VECTOR CHECKS


function _VirtualDom_noScript(tag)
{
	return tag == 'script' ? 'p' : tag;
}

function _VirtualDom_noOnOrFormAction(key)
{
	return /^(on|formAction$)/i.test(key) ? 'data-' + key : key;
}

function _VirtualDom_noInnerHtmlOrFormAction(key)
{
	return key == 'innerHTML' || key == 'formAction' ? 'data-' + key : key;
}

function _VirtualDom_noJavaScriptUri_UNUSED(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,'')) ? '' : value;
}

function _VirtualDom_noJavaScriptUri(value)
{
	return /^javascript:/i.test(value.replace(/\s/g,''))
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}

function _VirtualDom_noJavaScriptOrHtmlUri_UNUSED(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value) ? '' : value;
}

function _VirtualDom_noJavaScriptOrHtmlUri(value)
{
	return /^\s*(javascript:|data:text\/html)/i.test(value)
		? 'javascript:alert("This is an XSS vector. Please use ports or web components instead.")'
		: value;
}



// MAP FACTS


var _VirtualDom_mapAttribute = F2(function(func, attr)
{
	return (attr.$ === 'a0')
		? A2(_VirtualDom_on, attr.n, _VirtualDom_mapHandler(func, attr.o))
		: attr;
});

function _VirtualDom_mapHandler(func, handler)
{
	var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

	// 0 = Normal
	// 1 = MayStopPropagation
	// 2 = MayPreventDefault
	// 3 = Custom

	return {
		$: handler.$,
		a:
			!tag
				? A2($elm$json$Json$Decode$map, func, handler.a)
				:
			A3($elm$json$Json$Decode$map2,
				tag < 3
					? _VirtualDom_mapEventTuple
					: _VirtualDom_mapEventRecord,
				$elm$json$Json$Decode$succeed(func),
				handler.a
			)
	};
}

var _VirtualDom_mapEventTuple = F2(function(func, tuple)
{
	return _Utils_Tuple2(func(tuple.a), tuple.b);
});

var _VirtualDom_mapEventRecord = F2(function(func, record)
{
	return {
		message: func(record.message),
		stopPropagation: record.stopPropagation,
		preventDefault: record.preventDefault
	}
});



// ORGANIZE FACTS


function _VirtualDom_organizeFacts(factList)
{
	for (var facts = {}; factList.b; factList = factList.b) // WHILE_CONS
	{
		var entry = factList.a;

		var tag = entry.$;
		var key = entry.n;
		var value = entry.o;

		if (tag === 'a2')
		{
			(key === 'className')
				? _VirtualDom_addClass(facts, key, _Json_unwrap(value))
				: facts[key] = _Json_unwrap(value);

			continue;
		}

		var subFacts = facts[tag] || (facts[tag] = {});
		(tag === 'a3' && key === 'class')
			? _VirtualDom_addClass(subFacts, key, value)
			: subFacts[key] = value;
	}

	return facts;
}

function _VirtualDom_addClass(object, key, newClass)
{
	var classes = object[key];
	object[key] = classes ? classes + ' ' + newClass : newClass;
}



// RENDER


function _VirtualDom_render(vNode, eventNode)
{
	var tag = vNode.$;

	if (tag === 5)
	{
		return _VirtualDom_render(vNode.k || (vNode.k = vNode.m()), eventNode);
	}

	if (tag === 0)
	{
		return _VirtualDom_doc.createTextNode(vNode.a);
	}

	if (tag === 4)
	{
		var subNode = vNode.k;
		var tagger = vNode.j;

		while (subNode.$ === 4)
		{
			typeof tagger !== 'object'
				? tagger = [tagger, subNode.j]
				: tagger.push(subNode.j);

			subNode = subNode.k;
		}

		var subEventRoot = { j: tagger, p: eventNode };
		var domNode = _VirtualDom_render(subNode, subEventRoot);
		domNode.elm_event_node_ref = subEventRoot;
		return domNode;
	}

	if (tag === 3)
	{
		var domNode = vNode.h(vNode.g);
		_VirtualDom_applyFacts(domNode, eventNode, vNode.d);
		return domNode;
	}

	// at this point `tag` must be 1 or 2

	var domNode = vNode.f
		? _VirtualDom_doc.createElementNS(vNode.f, vNode.c)
		: _VirtualDom_doc.createElement(vNode.c);

	if (_VirtualDom_divertHrefToApp && vNode.c == 'a')
	{
		domNode.addEventListener('click', _VirtualDom_divertHrefToApp(domNode));
	}

	_VirtualDom_applyFacts(domNode, eventNode, vNode.d);

	for (var kids = vNode.e, i = 0; i < kids.length; i++)
	{
		_VirtualDom_appendChild(domNode, _VirtualDom_render(tag === 1 ? kids[i] : kids[i].b, eventNode));
	}

	return domNode;
}



// APPLY FACTS


function _VirtualDom_applyFacts(domNode, eventNode, facts)
{
	for (var key in facts)
	{
		var value = facts[key];

		key === 'a1'
			? _VirtualDom_applyStyles(domNode, value)
			:
		key === 'a0'
			? _VirtualDom_applyEvents(domNode, eventNode, value)
			:
		key === 'a3'
			? _VirtualDom_applyAttrs(domNode, value)
			:
		key === 'a4'
			? _VirtualDom_applyAttrsNS(domNode, value)
			:
		((key !== 'value' && key !== 'checked') || domNode[key] !== value) && (domNode[key] = value);
	}
}



// APPLY STYLES


function _VirtualDom_applyStyles(domNode, styles)
{
	var domNodeStyle = domNode.style;

	for (var key in styles)
	{
		domNodeStyle[key] = styles[key];
	}
}



// APPLY ATTRS


function _VirtualDom_applyAttrs(domNode, attrs)
{
	for (var key in attrs)
	{
		var value = attrs[key];
		typeof value !== 'undefined'
			? domNode.setAttribute(key, value)
			: domNode.removeAttribute(key);
	}
}



// APPLY NAMESPACED ATTRS


function _VirtualDom_applyAttrsNS(domNode, nsAttrs)
{
	for (var key in nsAttrs)
	{
		var pair = nsAttrs[key];
		var namespace = pair.f;
		var value = pair.o;

		typeof value !== 'undefined'
			? domNode.setAttributeNS(namespace, key, value)
			: domNode.removeAttributeNS(namespace, key);
	}
}



// APPLY EVENTS


function _VirtualDom_applyEvents(domNode, eventNode, events)
{
	var allCallbacks = domNode.elmFs || (domNode.elmFs = {});

	for (var key in events)
	{
		var newHandler = events[key];
		var oldCallback = allCallbacks[key];

		if (!newHandler)
		{
			domNode.removeEventListener(key, oldCallback);
			allCallbacks[key] = undefined;
			continue;
		}

		if (oldCallback)
		{
			var oldHandler = oldCallback.q;
			if (oldHandler.$ === newHandler.$)
			{
				oldCallback.q = newHandler;
				continue;
			}
			domNode.removeEventListener(key, oldCallback);
		}

		oldCallback = _VirtualDom_makeCallback(eventNode, newHandler);
		domNode.addEventListener(key, oldCallback,
			_VirtualDom_passiveSupported
			&& { passive: $elm$virtual_dom$VirtualDom$toHandlerInt(newHandler) < 2 }
		);
		allCallbacks[key] = oldCallback;
	}
}



// PASSIVE EVENTS


var _VirtualDom_passiveSupported;

try
{
	window.addEventListener('t', null, Object.defineProperty({}, 'passive', {
		get: function() { _VirtualDom_passiveSupported = true; }
	}));
}
catch(e) {}



// EVENT HANDLERS


function _VirtualDom_makeCallback(eventNode, initialHandler)
{
	function callback(event)
	{
		var handler = callback.q;
		var result = _Json_runHelp(handler.a, event);

		if (!$elm$core$Result$isOk(result))
		{
			return;
		}

		var tag = $elm$virtual_dom$VirtualDom$toHandlerInt(handler);

		// 0 = Normal
		// 1 = MayStopPropagation
		// 2 = MayPreventDefault
		// 3 = Custom

		var value = result.a;
		var message = !tag ? value : tag < 3 ? value.a : value.message;
		var stopPropagation = tag == 1 ? value.b : tag == 3 && value.stopPropagation;
		var currentEventNode = (
			stopPropagation && event.stopPropagation(),
			(tag == 2 ? value.b : tag == 3 && value.preventDefault) && event.preventDefault(),
			eventNode
		);
		var tagger;
		var i;
		while (tagger = currentEventNode.j)
		{
			if (typeof tagger == 'function')
			{
				message = tagger(message);
			}
			else
			{
				for (var i = tagger.length; i--; )
				{
					message = tagger[i](message);
				}
			}
			currentEventNode = currentEventNode.p;
		}
		currentEventNode(message, stopPropagation); // stopPropagation implies isSync
	}

	callback.q = initialHandler;

	return callback;
}

function _VirtualDom_equalEvents(x, y)
{
	return x.$ == y.$ && _Json_equality(x.a, y.a);
}



// DIFF


// TODO: Should we do patches like in iOS?
//
// type Patch
//   = At Int Patch
//   | Batch (List Patch)
//   | Change ...
//
// How could it not be better?
//
function _VirtualDom_diff(x, y)
{
	var patches = [];
	_VirtualDom_diffHelp(x, y, patches, 0);
	return patches;
}


function _VirtualDom_pushPatch(patches, type, index, data)
{
	var patch = {
		$: type,
		r: index,
		s: data,
		t: undefined,
		u: undefined
	};
	patches.push(patch);
	return patch;
}


function _VirtualDom_diffHelp(x, y, patches, index)
{
	if (x === y)
	{
		return;
	}

	var xType = x.$;
	var yType = y.$;

	// Bail if you run into different types of nodes. Implies that the
	// structure has changed significantly and it's not worth a diff.
	if (xType !== yType)
	{
		if (xType === 1 && yType === 2)
		{
			y = _VirtualDom_dekey(y);
			yType = 1;
		}
		else
		{
			_VirtualDom_pushPatch(patches, 0, index, y);
			return;
		}
	}

	// Now we know that both nodes are the same $.
	switch (yType)
	{
		case 5:
			var xRefs = x.l;
			var yRefs = y.l;
			var i = xRefs.length;
			var same = i === yRefs.length;
			while (same && i--)
			{
				same = xRefs[i] === yRefs[i];
			}
			if (same)
			{
				y.k = x.k;
				return;
			}
			y.k = y.m();
			var subPatches = [];
			_VirtualDom_diffHelp(x.k, y.k, subPatches, 0);
			subPatches.length > 0 && _VirtualDom_pushPatch(patches, 1, index, subPatches);
			return;

		case 4:
			// gather nested taggers
			var xTaggers = x.j;
			var yTaggers = y.j;
			var nesting = false;

			var xSubNode = x.k;
			while (xSubNode.$ === 4)
			{
				nesting = true;

				typeof xTaggers !== 'object'
					? xTaggers = [xTaggers, xSubNode.j]
					: xTaggers.push(xSubNode.j);

				xSubNode = xSubNode.k;
			}

			var ySubNode = y.k;
			while (ySubNode.$ === 4)
			{
				nesting = true;

				typeof yTaggers !== 'object'
					? yTaggers = [yTaggers, ySubNode.j]
					: yTaggers.push(ySubNode.j);

				ySubNode = ySubNode.k;
			}

			// Just bail if different numbers of taggers. This implies the
			// structure of the virtual DOM has changed.
			if (nesting && xTaggers.length !== yTaggers.length)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			// check if taggers are "the same"
			if (nesting ? !_VirtualDom_pairwiseRefEqual(xTaggers, yTaggers) : xTaggers !== yTaggers)
			{
				_VirtualDom_pushPatch(patches, 2, index, yTaggers);
			}

			// diff everything below the taggers
			_VirtualDom_diffHelp(xSubNode, ySubNode, patches, index + 1);
			return;

		case 0:
			if (x.a !== y.a)
			{
				_VirtualDom_pushPatch(patches, 3, index, y.a);
			}
			return;

		case 1:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKids);
			return;

		case 2:
			_VirtualDom_diffNodes(x, y, patches, index, _VirtualDom_diffKeyedKids);
			return;

		case 3:
			if (x.h !== y.h)
			{
				_VirtualDom_pushPatch(patches, 0, index, y);
				return;
			}

			var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
			factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

			var patch = y.i(x.g, y.g);
			patch && _VirtualDom_pushPatch(patches, 5, index, patch);

			return;
	}
}

// assumes the incoming arrays are the same length
function _VirtualDom_pairwiseRefEqual(as, bs)
{
	for (var i = 0; i < as.length; i++)
	{
		if (as[i] !== bs[i])
		{
			return false;
		}
	}

	return true;
}

function _VirtualDom_diffNodes(x, y, patches, index, diffKids)
{
	// Bail if obvious indicators have changed. Implies more serious
	// structural changes such that it's not worth it to diff.
	if (x.c !== y.c || x.f !== y.f)
	{
		_VirtualDom_pushPatch(patches, 0, index, y);
		return;
	}

	var factsDiff = _VirtualDom_diffFacts(x.d, y.d);
	factsDiff && _VirtualDom_pushPatch(patches, 4, index, factsDiff);

	diffKids(x, y, patches, index);
}



// DIFF FACTS


// TODO Instead of creating a new diff object, it's possible to just test if
// there *is* a diff. During the actual patch, do the diff again and make the
// modifications directly. This way, there's no new allocations. Worth it?
function _VirtualDom_diffFacts(x, y, category)
{
	var diff;

	// look for changes and removals
	for (var xKey in x)
	{
		if (xKey === 'a1' || xKey === 'a0' || xKey === 'a3' || xKey === 'a4')
		{
			var subDiff = _VirtualDom_diffFacts(x[xKey], y[xKey] || {}, xKey);
			if (subDiff)
			{
				diff = diff || {};
				diff[xKey] = subDiff;
			}
			continue;
		}

		// remove if not in the new facts
		if (!(xKey in y))
		{
			diff = diff || {};
			diff[xKey] =
				!category
					? (typeof x[xKey] === 'string' ? '' : null)
					:
				(category === 'a1')
					? ''
					:
				(category === 'a0' || category === 'a3')
					? undefined
					:
				{ f: x[xKey].f, o: undefined };

			continue;
		}

		var xValue = x[xKey];
		var yValue = y[xKey];

		// reference equal, so don't worry about it
		if (xValue === yValue && xKey !== 'value' && xKey !== 'checked'
			|| category === 'a0' && _VirtualDom_equalEvents(xValue, yValue))
		{
			continue;
		}

		diff = diff || {};
		diff[xKey] = yValue;
	}

	// add new stuff
	for (var yKey in y)
	{
		if (!(yKey in x))
		{
			diff = diff || {};
			diff[yKey] = y[yKey];
		}
	}

	return diff;
}



// DIFF KIDS


function _VirtualDom_diffKids(xParent, yParent, patches, index)
{
	var xKids = xParent.e;
	var yKids = yParent.e;

	var xLen = xKids.length;
	var yLen = yKids.length;

	// FIGURE OUT IF THERE ARE INSERTS OR REMOVALS

	if (xLen > yLen)
	{
		_VirtualDom_pushPatch(patches, 6, index, {
			v: yLen,
			i: xLen - yLen
		});
	}
	else if (xLen < yLen)
	{
		_VirtualDom_pushPatch(patches, 7, index, {
			v: xLen,
			e: yKids
		});
	}

	// PAIRWISE DIFF EVERYTHING ELSE

	for (var minLen = xLen < yLen ? xLen : yLen, i = 0; i < minLen; i++)
	{
		var xKid = xKids[i];
		_VirtualDom_diffHelp(xKid, yKids[i], patches, ++index);
		index += xKid.b || 0;
	}
}



// KEYED DIFF


function _VirtualDom_diffKeyedKids(xParent, yParent, patches, rootIndex)
{
	var localPatches = [];

	var changes = {}; // Dict String Entry
	var inserts = []; // Array { index : Int, entry : Entry }
	// type Entry = { tag : String, vnode : VNode, index : Int, data : _ }

	var xKids = xParent.e;
	var yKids = yParent.e;
	var xLen = xKids.length;
	var yLen = yKids.length;
	var xIndex = 0;
	var yIndex = 0;

	var index = rootIndex;

	while (xIndex < xLen && yIndex < yLen)
	{
		var x = xKids[xIndex];
		var y = yKids[yIndex];

		var xKey = x.a;
		var yKey = y.a;
		var xNode = x.b;
		var yNode = y.b;

		var newMatch = undefined;
		var oldMatch = undefined;

		// check if keys match

		if (xKey === yKey)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNode, localPatches, index);
			index += xNode.b || 0;

			xIndex++;
			yIndex++;
			continue;
		}

		// look ahead 1 to detect insertions and removals.

		var xNext = xKids[xIndex + 1];
		var yNext = yKids[yIndex + 1];

		if (xNext)
		{
			var xNextKey = xNext.a;
			var xNextNode = xNext.b;
			oldMatch = yKey === xNextKey;
		}

		if (yNext)
		{
			var yNextKey = yNext.a;
			var yNextNode = yNext.b;
			newMatch = xKey === yNextKey;
		}


		// swap x and y
		if (newMatch && oldMatch)
		{
			index++;
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			_VirtualDom_insertNode(changes, localPatches, xKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNextNode, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		// insert y
		if (newMatch)
		{
			index++;
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			_VirtualDom_diffHelp(xNode, yNextNode, localPatches, index);
			index += xNode.b || 0;

			xIndex += 1;
			yIndex += 2;
			continue;
		}

		// remove x
		if (oldMatch)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 1;
			continue;
		}

		// remove x, insert y
		if (xNext && xNextKey === yNextKey)
		{
			index++;
			_VirtualDom_removeNode(changes, localPatches, xKey, xNode, index);
			_VirtualDom_insertNode(changes, localPatches, yKey, yNode, yIndex, inserts);
			index += xNode.b || 0;

			index++;
			_VirtualDom_diffHelp(xNextNode, yNextNode, localPatches, index);
			index += xNextNode.b || 0;

			xIndex += 2;
			yIndex += 2;
			continue;
		}

		break;
	}

	// eat up any remaining nodes with removeNode and insertNode

	while (xIndex < xLen)
	{
		index++;
		var x = xKids[xIndex];
		var xNode = x.b;
		_VirtualDom_removeNode(changes, localPatches, x.a, xNode, index);
		index += xNode.b || 0;
		xIndex++;
	}

	while (yIndex < yLen)
	{
		var endInserts = endInserts || [];
		var y = yKids[yIndex];
		_VirtualDom_insertNode(changes, localPatches, y.a, y.b, undefined, endInserts);
		yIndex++;
	}

	if (localPatches.length > 0 || inserts.length > 0 || endInserts)
	{
		_VirtualDom_pushPatch(patches, 8, rootIndex, {
			w: localPatches,
			x: inserts,
			y: endInserts
		});
	}
}



// CHANGES FROM KEYED DIFF


var _VirtualDom_POSTFIX = '_elmW6BL';


function _VirtualDom_insertNode(changes, localPatches, key, vnode, yIndex, inserts)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		entry = {
			c: 0,
			z: vnode,
			r: yIndex,
			s: undefined
		};

		inserts.push({ r: yIndex, A: entry });
		changes[key] = entry;

		return;
	}

	// this key was removed earlier, a match!
	if (entry.c === 1)
	{
		inserts.push({ r: yIndex, A: entry });

		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(entry.z, vnode, subPatches, entry.r);
		entry.r = yIndex;
		entry.s.s = {
			w: subPatches,
			A: entry
		};

		return;
	}

	// this key has already been inserted or moved, a duplicate!
	_VirtualDom_insertNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, yIndex, inserts);
}


function _VirtualDom_removeNode(changes, localPatches, key, vnode, index)
{
	var entry = changes[key];

	// never seen this key before
	if (!entry)
	{
		var patch = _VirtualDom_pushPatch(localPatches, 9, index, undefined);

		changes[key] = {
			c: 1,
			z: vnode,
			r: index,
			s: patch
		};

		return;
	}

	// this key was inserted earlier, a match!
	if (entry.c === 0)
	{
		entry.c = 2;
		var subPatches = [];
		_VirtualDom_diffHelp(vnode, entry.z, subPatches, index);

		_VirtualDom_pushPatch(localPatches, 9, index, {
			w: subPatches,
			A: entry
		});

		return;
	}

	// this key has already been removed or moved, a duplicate!
	_VirtualDom_removeNode(changes, localPatches, key + _VirtualDom_POSTFIX, vnode, index);
}



// ADD DOM NODES
//
// Each DOM node has an "index" assigned in order of traversal. It is important
// to minimize our crawl over the actual DOM, so these indexes (along with the
// descendantsCount of virtual nodes) let us skip touching entire subtrees of
// the DOM if we know there are no patches there.


function _VirtualDom_addDomNodes(domNode, vNode, patches, eventNode)
{
	_VirtualDom_addDomNodesHelp(domNode, vNode, patches, 0, 0, vNode.b, eventNode);
}


// assumes `patches` is non-empty and indexes increase monotonically.
function _VirtualDom_addDomNodesHelp(domNode, vNode, patches, i, low, high, eventNode)
{
	var patch = patches[i];
	var index = patch.r;

	while (index === low)
	{
		var patchType = patch.$;

		if (patchType === 1)
		{
			_VirtualDom_addDomNodes(domNode, vNode.k, patch.s, eventNode);
		}
		else if (patchType === 8)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var subPatches = patch.s.w;
			if (subPatches.length > 0)
			{
				_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
			}
		}
		else if (patchType === 9)
		{
			patch.t = domNode;
			patch.u = eventNode;

			var data = patch.s;
			if (data)
			{
				data.A.s = domNode;
				var subPatches = data.w;
				if (subPatches.length > 0)
				{
					_VirtualDom_addDomNodesHelp(domNode, vNode, subPatches, 0, low, high, eventNode);
				}
			}
		}
		else
		{
			patch.t = domNode;
			patch.u = eventNode;
		}

		i++;

		if (!(patch = patches[i]) || (index = patch.r) > high)
		{
			return i;
		}
	}

	var tag = vNode.$;

	if (tag === 4)
	{
		var subNode = vNode.k;

		while (subNode.$ === 4)
		{
			subNode = subNode.k;
		}

		return _VirtualDom_addDomNodesHelp(domNode, subNode, patches, i, low + 1, high, domNode.elm_event_node_ref);
	}

	// tag must be 1 or 2 at this point

	var vKids = vNode.e;
	var childNodes = domNode.childNodes;
	for (var j = 0; j < vKids.length; j++)
	{
		low++;
		var vKid = tag === 1 ? vKids[j] : vKids[j].b;
		var nextLow = low + (vKid.b || 0);
		if (low <= index && index <= nextLow)
		{
			i = _VirtualDom_addDomNodesHelp(childNodes[j], vKid, patches, i, low, nextLow, eventNode);
			if (!(patch = patches[i]) || (index = patch.r) > high)
			{
				return i;
			}
		}
		low = nextLow;
	}
	return i;
}



// APPLY PATCHES


function _VirtualDom_applyPatches(rootDomNode, oldVirtualNode, patches, eventNode)
{
	if (patches.length === 0)
	{
		return rootDomNode;
	}

	_VirtualDom_addDomNodes(rootDomNode, oldVirtualNode, patches, eventNode);
	return _VirtualDom_applyPatchesHelp(rootDomNode, patches);
}

function _VirtualDom_applyPatchesHelp(rootDomNode, patches)
{
	for (var i = 0; i < patches.length; i++)
	{
		var patch = patches[i];
		var localDomNode = patch.t
		var newNode = _VirtualDom_applyPatch(localDomNode, patch);
		if (localDomNode === rootDomNode)
		{
			rootDomNode = newNode;
		}
	}
	return rootDomNode;
}

function _VirtualDom_applyPatch(domNode, patch)
{
	switch (patch.$)
	{
		case 0:
			return _VirtualDom_applyPatchRedraw(domNode, patch.s, patch.u);

		case 4:
			_VirtualDom_applyFacts(domNode, patch.u, patch.s);
			return domNode;

		case 3:
			domNode.replaceData(0, domNode.length, patch.s);
			return domNode;

		case 1:
			return _VirtualDom_applyPatchesHelp(domNode, patch.s);

		case 2:
			if (domNode.elm_event_node_ref)
			{
				domNode.elm_event_node_ref.j = patch.s;
			}
			else
			{
				domNode.elm_event_node_ref = { j: patch.s, p: patch.u };
			}
			return domNode;

		case 6:
			var data = patch.s;
			for (var i = 0; i < data.i; i++)
			{
				domNode.removeChild(domNode.childNodes[data.v]);
			}
			return domNode;

		case 7:
			var data = patch.s;
			var kids = data.e;
			var i = data.v;
			var theEnd = domNode.childNodes[i];
			for (; i < kids.length; i++)
			{
				domNode.insertBefore(_VirtualDom_render(kids[i], patch.u), theEnd);
			}
			return domNode;

		case 9:
			var data = patch.s;
			if (!data)
			{
				domNode.parentNode.removeChild(domNode);
				return domNode;
			}
			var entry = data.A;
			if (typeof entry.r !== 'undefined')
			{
				domNode.parentNode.removeChild(domNode);
			}
			entry.s = _VirtualDom_applyPatchesHelp(domNode, data.w);
			return domNode;

		case 8:
			return _VirtualDom_applyPatchReorder(domNode, patch);

		case 5:
			return patch.s(domNode);

		default:
			_Debug_crash(10); // 'Ran into an unknown patch!'
	}
}


function _VirtualDom_applyPatchRedraw(domNode, vNode, eventNode)
{
	var parentNode = domNode.parentNode;
	var newNode = _VirtualDom_render(vNode, eventNode);

	if (!newNode.elm_event_node_ref)
	{
		newNode.elm_event_node_ref = domNode.elm_event_node_ref;
	}

	if (parentNode && newNode !== domNode)
	{
		parentNode.replaceChild(newNode, domNode);
	}
	return newNode;
}


function _VirtualDom_applyPatchReorder(domNode, patch)
{
	var data = patch.s;

	// remove end inserts
	var frag = _VirtualDom_applyPatchReorderEndInsertsHelp(data.y, patch);

	// removals
	domNode = _VirtualDom_applyPatchesHelp(domNode, data.w);

	// inserts
	var inserts = data.x;
	for (var i = 0; i < inserts.length; i++)
	{
		var insert = inserts[i];
		var entry = insert.A;
		var node = entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u);
		domNode.insertBefore(node, domNode.childNodes[insert.r]);
	}

	// add end inserts
	if (frag)
	{
		_VirtualDom_appendChild(domNode, frag);
	}

	return domNode;
}


function _VirtualDom_applyPatchReorderEndInsertsHelp(endInserts, patch)
{
	if (!endInserts)
	{
		return;
	}

	var frag = _VirtualDom_doc.createDocumentFragment();
	for (var i = 0; i < endInserts.length; i++)
	{
		var insert = endInserts[i];
		var entry = insert.A;
		_VirtualDom_appendChild(frag, entry.c === 2
			? entry.s
			: _VirtualDom_render(entry.z, patch.u)
		);
	}
	return frag;
}


function _VirtualDom_virtualize(node)
{
	// TEXT NODES

	if (node.nodeType === 3)
	{
		return _VirtualDom_text(node.textContent);
	}


	// WEIRD NODES

	if (node.nodeType !== 1)
	{
		return _VirtualDom_text('');
	}


	// ELEMENT NODES

	var attrList = _List_Nil;
	var attrs = node.attributes;
	for (var i = attrs.length; i--; )
	{
		var attr = attrs[i];
		var name = attr.name;
		var value = attr.value;
		attrList = _List_Cons( A2(_VirtualDom_attribute, name, value), attrList );
	}

	var tag = node.tagName.toLowerCase();
	var kidList = _List_Nil;
	var kids = node.childNodes;

	for (var i = kids.length; i--; )
	{
		kidList = _List_Cons(_VirtualDom_virtualize(kids[i]), kidList);
	}
	return A3(_VirtualDom_node, tag, attrList, kidList);
}

function _VirtualDom_dekey(keyedNode)
{
	var keyedKids = keyedNode.e;
	var len = keyedKids.length;
	var kids = new Array(len);
	for (var i = 0; i < len; i++)
	{
		kids[i] = keyedKids[i].b;
	}

	return {
		$: 1,
		c: keyedNode.c,
		d: keyedNode.d,
		e: kids,
		f: keyedNode.f,
		b: keyedNode.b
	};
}



var _Bitwise_and = F2(function(a, b)
{
	return a & b;
});

var _Bitwise_or = F2(function(a, b)
{
	return a | b;
});

var _Bitwise_xor = F2(function(a, b)
{
	return a ^ b;
});

function _Bitwise_complement(a)
{
	return ~a;
};

var _Bitwise_shiftLeftBy = F2(function(offset, a)
{
	return a << offset;
});

var _Bitwise_shiftRightBy = F2(function(offset, a)
{
	return a >> offset;
});

var _Bitwise_shiftRightZfBy = F2(function(offset, a)
{
	return a >>> offset;
});




// HELPERS


function _Debugger_unsafeCoerce(value)
{
	return value;
}



// PROGRAMS


var _Debugger_element = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		$elm$browser$Debugger$Main$wrapUpdate(impl.update),
		$elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			var currNode = _VirtualDom_virtualize(domNode);
			var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			var cornerNode = _VirtualDom_doc.createElement('div');
			domNode.parentNode.insertBefore(cornerNode, domNode.nextSibling);
			var cornerCurr = _VirtualDom_virtualize(cornerNode);

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = A2(_VirtualDom_map, $elm$browser$Debugger$Main$UserMsg, view($elm$browser$Debugger$Main$getUserModel(model)));
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;

				// update blocker

				var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view corner

				var cornerNext = $elm$browser$Debugger$Main$cornerView(model);
				var cornerPatches = _VirtualDom_diff(cornerCurr, cornerNext);
				cornerNode = _VirtualDom_applyPatches(cornerNode, cornerCurr, cornerPatches, sendToApp);
				cornerCurr = cornerNext;

				if (!model.popout.b)
				{
					currPopout = undefined;
					return;
				}

				// view popout

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


var _Debugger_document = F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		A3($elm$browser$Debugger$Main$wrapInit, _Json_wrap(debugMetadata), _Debugger_popout(), impl.init),
		$elm$browser$Debugger$Main$wrapUpdate(impl.update),
		$elm$browser$Debugger$Main$wrapSubs(impl.subscriptions),
		function(sendToApp, initialModel)
		{
			var divertHrefToApp = impl.setup && impl.setup(function(x) { return sendToApp($elm$browser$Debugger$Main$UserMsg(x)); });
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			var currBlocker = $elm$browser$Debugger$Main$toBlockerType(initialModel);
			var currPopout;

			initialModel.popout.a = sendToApp;

			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view($elm$browser$Debugger$Main$getUserModel(model));
				var nextNode = _VirtualDom_node('body')(_List_Nil)(
					_Utils_ap(
						A2($elm$core$List$map, _VirtualDom_map($elm$browser$Debugger$Main$UserMsg), doc.body),
						_List_Cons($elm$browser$Debugger$Main$cornerView(model), _List_Nil)
					)
				);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);

				// update blocker

				var nextBlocker = $elm$browser$Debugger$Main$toBlockerType(model);
				_Debugger_updateBlocker(currBlocker, nextBlocker);
				currBlocker = nextBlocker;

				// view popout

				if (!model.popout.b) { currPopout = undefined; return; }

				_VirtualDom_doc = model.popout.b; // SWITCH TO POPOUT DOC
				currPopout || (currPopout = _VirtualDom_virtualize(model.popout.b));
				var nextPopout = $elm$browser$Debugger$Main$popoutView(model);
				var popoutPatches = _VirtualDom_diff(currPopout, nextPopout);
				_VirtualDom_applyPatches(model.popout.b.body, currPopout, popoutPatches, sendToApp);
				currPopout = nextPopout;
				_VirtualDom_doc = document; // SWITCH BACK TO NORMAL DOC
			});
		}
	);
});


function _Debugger_popout()
{
	return {
		b: undefined,
		a: undefined
	};
}

function _Debugger_isOpen(popout)
{
	return !!popout.b;
}

function _Debugger_open(popout)
{
	return _Scheduler_binding(function(callback)
	{
		_Debugger_openWindow(popout);
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}

function _Debugger_openWindow(popout)
{
	var w = $elm$browser$Debugger$Main$initialWindowWidth,
		h = $elm$browser$Debugger$Main$initialWindowHeight,
	 	x = screen.width - w,
		y = screen.height - h;

	var debuggerWindow = window.open('', '', 'width=' + w + ',height=' + h + ',left=' + x + ',top=' + y);
	var doc = debuggerWindow.document;
	doc.title = 'Elm Debugger';

	// handle arrow keys
	doc.addEventListener('keydown', function(event) {
		event.metaKey && event.which === 82 && window.location.reload();
		event.key === 'ArrowUp'   && (popout.a($elm$browser$Debugger$Main$Up  ), event.preventDefault());
		event.key === 'ArrowDown' && (popout.a($elm$browser$Debugger$Main$Down), event.preventDefault());
	});

	// handle window close
	window.addEventListener('unload', close);
	debuggerWindow.addEventListener('unload', function() {
		popout.b = undefined;
		popout.a($elm$browser$Debugger$Main$NoOp);
		window.removeEventListener('unload', close);
	});

	function close() {
		popout.b = undefined;
		popout.a($elm$browser$Debugger$Main$NoOp);
		debuggerWindow.close();
	}

	// register new window
	popout.b = doc;
}



// SCROLL


function _Debugger_scroll(popout)
{
	return _Scheduler_binding(function(callback)
	{
		if (popout.b)
		{
			var msgs = popout.b.getElementById('elm-debugger-sidebar');
			if (msgs && msgs.scrollTop !== 0)
			{
				msgs.scrollTop = 0;
			}
		}
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
}


var _Debugger_scrollTo = F2(function(id, popout)
{
	return _Scheduler_binding(function(callback)
	{
		if (popout.b)
		{
			var msg = popout.b.getElementById(id);
			if (msg)
			{
				msg.scrollIntoView(false);
			}
		}
		callback(_Scheduler_succeed(_Utils_Tuple0));
	});
});



// UPLOAD


function _Debugger_upload(popout)
{
	return _Scheduler_binding(function(callback)
	{
		var doc = popout.b || document;
		var element = doc.createElement('input');
		element.setAttribute('type', 'file');
		element.setAttribute('accept', 'text/json');
		element.style.display = 'none';
		element.addEventListener('change', function(event)
		{
			var fileReader = new FileReader();
			fileReader.onload = function(e)
			{
				callback(_Scheduler_succeed(e.target.result));
			};
			fileReader.readAsText(event.target.files[0]);
			doc.body.removeChild(element);
		});
		doc.body.appendChild(element);
		element.click();
	});
}



// DOWNLOAD


var _Debugger_download = F2(function(historyLength, json)
{
	return _Scheduler_binding(function(callback)
	{
		var fileName = 'history-' + historyLength + '.txt';
		var jsonString = JSON.stringify(json);
		var mime = 'text/plain;charset=utf-8';
		var done = _Scheduler_succeed(_Utils_Tuple0);

		// for IE10+
		if (navigator.msSaveBlob)
		{
			navigator.msSaveBlob(new Blob([jsonString], {type: mime}), fileName);
			return callback(done);
		}

		// for HTML5
		var element = document.createElement('a');
		element.setAttribute('href', 'data:' + mime + ',' + encodeURIComponent(jsonString));
		element.setAttribute('download', fileName);
		element.style.display = 'none';
		document.body.appendChild(element);
		element.click();
		document.body.removeChild(element);
		callback(done);
	});
});



// POPOUT CONTENT


function _Debugger_messageToString(value)
{
	if (typeof value === 'boolean')
	{
		return value ? 'True' : 'False';
	}

	if (typeof value === 'number')
	{
		return value + '';
	}

	if (typeof value === 'string')
	{
		return '"' + _Debugger_addSlashes(value, false) + '"';
	}

	if (value instanceof String)
	{
		return "'" + _Debugger_addSlashes(value, true) + "'";
	}

	if (typeof value !== 'object' || value === null || !('$' in value))
	{
		return '…';
	}

	if (typeof value.$ === 'number')
	{
		return '…';
	}

	var code = value.$.charCodeAt(0);
	if (code === 0x23 /* # */ || /* a */ 0x61 <= code && code <= 0x7A /* z */)
	{
		return '…';
	}

	if (['Array_elm_builtin', 'Set_elm_builtin', 'RBNode_elm_builtin', 'RBEmpty_elm_builtin'].indexOf(value.$) >= 0)
	{
		return '…';
	}

	var keys = Object.keys(value);
	switch (keys.length)
	{
		case 1:
			return value.$;
		case 2:
			return value.$ + ' ' + _Debugger_messageToString(value.a);
		default:
			return value.$ + ' … ' + _Debugger_messageToString(value[keys[keys.length - 1]]);
	}
}


function _Debugger_init(value)
{
	if (typeof value === 'boolean')
	{
		return A3($elm$browser$Debugger$Expando$Constructor, $elm$core$Maybe$Just(value ? 'True' : 'False'), true, _List_Nil);
	}

	if (typeof value === 'number')
	{
		return $elm$browser$Debugger$Expando$Primitive(value + '');
	}

	if (typeof value === 'string')
	{
		return $elm$browser$Debugger$Expando$S('"' + _Debugger_addSlashes(value, false) + '"');
	}

	if (value instanceof String)
	{
		return $elm$browser$Debugger$Expando$S("'" + _Debugger_addSlashes(value, true) + "'");
	}

	if (typeof value === 'object' && '$' in value)
	{
		var tag = value.$;

		if (tag === '::' || tag === '[]')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ListSeq, true,
				A2($elm$core$List$map, _Debugger_init, value)
			);
		}

		if (tag === 'Set_elm_builtin')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$SetSeq, true,
				A3($elm$core$Set$foldr, _Debugger_initCons, _List_Nil, value)
			);
		}

		if (tag === 'RBNode_elm_builtin' || tag == 'RBEmpty_elm_builtin')
		{
			return A2($elm$browser$Debugger$Expando$Dictionary, true,
				A3($elm$core$Dict$foldr, _Debugger_initKeyValueCons, _List_Nil, value)
			);
		}

		if (tag === 'Array_elm_builtin')
		{
			return A3($elm$browser$Debugger$Expando$Sequence, $elm$browser$Debugger$Expando$ArraySeq, true,
				A3($elm$core$Array$foldr, _Debugger_initCons, _List_Nil, value)
			);
		}

		if (typeof tag === 'number')
		{
			return $elm$browser$Debugger$Expando$Primitive('<internals>');
		}

		var char = tag.charCodeAt(0);
		if (char === 35 || 65 <= char && char <= 90)
		{
			var list = _List_Nil;
			for (var i in value)
			{
				if (i === '$') continue;
				list = _List_Cons(_Debugger_init(value[i]), list);
			}
			return A3($elm$browser$Debugger$Expando$Constructor, char === 35 ? $elm$core$Maybe$Nothing : $elm$core$Maybe$Just(tag), true, $elm$core$List$reverse(list));
		}

		return $elm$browser$Debugger$Expando$Primitive('<internals>');
	}

	if (typeof value === 'object')
	{
		var dict = $elm$core$Dict$empty;
		for (var i in value)
		{
			dict = A3($elm$core$Dict$insert, i, _Debugger_init(value[i]), dict);
		}
		return A2($elm$browser$Debugger$Expando$Record, true, dict);
	}

	return $elm$browser$Debugger$Expando$Primitive('<internals>');
}

var _Debugger_initCons = F2(function initConsHelp(value, list)
{
	return _List_Cons(_Debugger_init(value), list);
});

var _Debugger_initKeyValueCons = F3(function(key, value, list)
{
	return _List_Cons(
		_Utils_Tuple2(_Debugger_init(key), _Debugger_init(value)),
		list
	);
});

function _Debugger_addSlashes(str, isChar)
{
	var s = str
		.replace(/\\/g, '\\\\')
		.replace(/\n/g, '\\n')
		.replace(/\t/g, '\\t')
		.replace(/\r/g, '\\r')
		.replace(/\v/g, '\\v')
		.replace(/\0/g, '\\0');
	if (isChar)
	{
		return s.replace(/\'/g, '\\\'');
	}
	else
	{
		return s.replace(/\"/g, '\\"');
	}
}



// BLOCK EVENTS


function _Debugger_updateBlocker(oldBlocker, newBlocker)
{
	if (oldBlocker === newBlocker) return;

	var oldEvents = _Debugger_blockerToEvents(oldBlocker);
	var newEvents = _Debugger_blockerToEvents(newBlocker);

	// remove old blockers
	for (var i = 0; i < oldEvents.length; i++)
	{
		document.removeEventListener(oldEvents[i], _Debugger_blocker, true);
	}

	// add new blockers
	for (var i = 0; i < newEvents.length; i++)
	{
		document.addEventListener(newEvents[i], _Debugger_blocker, true);
	}
}


function _Debugger_blocker(event)
{
	if (event.type === 'keydown' && event.metaKey && event.which === 82)
	{
		return;
	}

	var isScroll = event.type === 'scroll' || event.type === 'wheel';
	for (var node = event.target; node; node = node.parentNode)
	{
		if (isScroll ? node.id === 'elm-debugger-details' : node.id === 'elm-debugger-overlay')
		{
			return;
		}
	}

	event.stopPropagation();
	event.preventDefault();
}

function _Debugger_blockerToEvents(blocker)
{
	return blocker === $elm$browser$Debugger$Overlay$BlockNone
		? []
		: blocker === $elm$browser$Debugger$Overlay$BlockMost
			? _Debugger_mostEvents
			: _Debugger_allEvents;
}

var _Debugger_mostEvents = [
	'click', 'dblclick', 'mousemove',
	'mouseup', 'mousedown', 'mouseenter', 'mouseleave',
	'touchstart', 'touchend', 'touchcancel', 'touchmove',
	'pointerdown', 'pointerup', 'pointerover', 'pointerout',
	'pointerenter', 'pointerleave', 'pointermove', 'pointercancel',
	'dragstart', 'drag', 'dragend', 'dragenter', 'dragover', 'dragleave', 'drop',
	'keyup', 'keydown', 'keypress',
	'input', 'change',
	'focus', 'blur'
];

var _Debugger_allEvents = _Debugger_mostEvents.concat('wheel', 'scroll');




// ELEMENT


var _Debugger_element;

var _Browser_element = _Debugger_element || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var view = impl.view;
			/**_UNUSED/
			var domNode = args['node'];
			//*/
			/**/
			var domNode = args && args['node'] ? args['node'] : _Debug_crash(0);
			//*/
			var currNode = _VirtualDom_virtualize(domNode);

			return _Browser_makeAnimator(initialModel, function(model)
			{
				var nextNode = view(model);
				var patches = _VirtualDom_diff(currNode, nextNode);
				domNode = _VirtualDom_applyPatches(domNode, currNode, patches, sendToApp);
				currNode = nextNode;
			});
		}
	);
});



// DOCUMENT


var _Debugger_document;

var _Browser_document = _Debugger_document || F4(function(impl, flagDecoder, debugMetadata, args)
{
	return _Platform_initialize(
		flagDecoder,
		args,
		impl.init,
		impl.update,
		impl.subscriptions,
		function(sendToApp, initialModel) {
			var divertHrefToApp = impl.setup && impl.setup(sendToApp)
			var view = impl.view;
			var title = _VirtualDom_doc.title;
			var bodyNode = _VirtualDom_doc.body;
			var currNode = _VirtualDom_virtualize(bodyNode);
			return _Browser_makeAnimator(initialModel, function(model)
			{
				_VirtualDom_divertHrefToApp = divertHrefToApp;
				var doc = view(model);
				var nextNode = _VirtualDom_node('body')(_List_Nil)(doc.body);
				var patches = _VirtualDom_diff(currNode, nextNode);
				bodyNode = _VirtualDom_applyPatches(bodyNode, currNode, patches, sendToApp);
				currNode = nextNode;
				_VirtualDom_divertHrefToApp = 0;
				(title !== doc.title) && (_VirtualDom_doc.title = title = doc.title);
			});
		}
	);
});



// ANIMATION


var _Browser_cancelAnimationFrame =
	typeof cancelAnimationFrame !== 'undefined'
		? cancelAnimationFrame
		: function(id) { clearTimeout(id); };

var _Browser_requestAnimationFrame =
	typeof requestAnimationFrame !== 'undefined'
		? requestAnimationFrame
		: function(callback) { return setTimeout(callback, 1000 / 60); };


function _Browser_makeAnimator(model, draw)
{
	draw(model);

	var state = 0;

	function updateIfNeeded()
	{
		state = state === 1
			? 0
			: ( _Browser_requestAnimationFrame(updateIfNeeded), draw(model), 1 );
	}

	return function(nextModel, isSync)
	{
		model = nextModel;

		isSync
			? ( draw(model),
				state === 2 && (state = 1)
				)
			: ( state === 0 && _Browser_requestAnimationFrame(updateIfNeeded),
				state = 2
				);
	};
}



// APPLICATION


function _Browser_application(impl)
{
	var onUrlChange = impl.onUrlChange;
	var onUrlRequest = impl.onUrlRequest;
	var key = function() { key.a(onUrlChange(_Browser_getUrl())); };
key['elm-hot-nav-key'] = true

	return _Browser_document({
		setup: function(sendToApp)
		{
			key.a = sendToApp;
			_Browser_window.addEventListener('popstate', key);
			_Browser_window.navigator.userAgent.indexOf('Trident') < 0 || _Browser_window.addEventListener('hashchange', key);

			return F2(function(domNode, event)
			{
				if (!event.ctrlKey && !event.metaKey && !event.shiftKey && event.button < 1 && !domNode.target && !domNode.hasAttribute('download'))
				{
					event.preventDefault();
					var href = domNode.href;
					var curr = _Browser_getUrl();
					var next = $elm$url$Url$fromString(href).a;
					sendToApp(onUrlRequest(
						(next
							&& curr.protocol === next.protocol
							&& curr.host === next.host
							&& curr.port_.a === next.port_.a
						)
							? $elm$browser$Browser$Internal(next)
							: $elm$browser$Browser$External(href)
					));
				}
			});
		},
		init: function(flags)
		{
			return A3(impl.init, flags, _Browser_getUrl(), key);
		},
		view: impl.view,
		update: impl.update,
		subscriptions: impl.subscriptions
	});
}

function _Browser_getUrl()
{
	return $elm$url$Url$fromString(_VirtualDom_doc.location.href).a || _Debug_crash(1);
}

var _Browser_go = F2(function(key, n)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		n && history.go(n);
		key();
	}));
});

var _Browser_pushUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.pushState({}, '', url);
		key();
	}));
});

var _Browser_replaceUrl = F2(function(key, url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function() {
		history.replaceState({}, '', url);
		key();
	}));
});



// GLOBAL EVENTS


var _Browser_fakeNode = { addEventListener: function() {}, removeEventListener: function() {} };
var _Browser_doc = typeof document !== 'undefined' ? document : _Browser_fakeNode;
var _Browser_window = typeof window !== 'undefined' ? window : _Browser_fakeNode;

var _Browser_on = F3(function(node, eventName, sendToSelf)
{
	return _Scheduler_spawn(_Scheduler_binding(function(callback)
	{
		function handler(event)	{ _Scheduler_rawSpawn(sendToSelf(event)); }
		node.addEventListener(eventName, handler, _VirtualDom_passiveSupported && { passive: true });
		return function() { node.removeEventListener(eventName, handler); };
	}));
});

var _Browser_decodeEvent = F2(function(decoder, event)
{
	var result = _Json_runHelp(decoder, event);
	return $elm$core$Result$isOk(result) ? $elm$core$Maybe$Just(result.a) : $elm$core$Maybe$Nothing;
});



// PAGE VISIBILITY


function _Browser_visibilityInfo()
{
	return (typeof _VirtualDom_doc.hidden !== 'undefined')
		? { hidden: 'hidden', change: 'visibilitychange' }
		:
	(typeof _VirtualDom_doc.mozHidden !== 'undefined')
		? { hidden: 'mozHidden', change: 'mozvisibilitychange' }
		:
	(typeof _VirtualDom_doc.msHidden !== 'undefined')
		? { hidden: 'msHidden', change: 'msvisibilitychange' }
		:
	(typeof _VirtualDom_doc.webkitHidden !== 'undefined')
		? { hidden: 'webkitHidden', change: 'webkitvisibilitychange' }
		: { hidden: 'hidden', change: 'visibilitychange' };
}



// ANIMATION FRAMES


function _Browser_rAF()
{
	return _Scheduler_binding(function(callback)
	{
		var id = _Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(Date.now()));
		});

		return function() {
			_Browser_cancelAnimationFrame(id);
		};
	});
}


function _Browser_now()
{
	return _Scheduler_binding(function(callback)
	{
		callback(_Scheduler_succeed(Date.now()));
	});
}



// DOM STUFF


function _Browser_withNode(id, doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			var node = document.getElementById(id);
			callback(node
				? _Scheduler_succeed(doStuff(node))
				: _Scheduler_fail($elm$browser$Browser$Dom$NotFound(id))
			);
		});
	});
}


function _Browser_withWindow(doStuff)
{
	return _Scheduler_binding(function(callback)
	{
		_Browser_requestAnimationFrame(function() {
			callback(_Scheduler_succeed(doStuff()));
		});
	});
}


// FOCUS and BLUR


var _Browser_call = F2(function(functionName, id)
{
	return _Browser_withNode(id, function(node) {
		node[functionName]();
		return _Utils_Tuple0;
	});
});



// WINDOW VIEWPORT


function _Browser_getViewport()
{
	return {
		scene: _Browser_getScene(),
		viewport: {
			x: _Browser_window.pageXOffset,
			y: _Browser_window.pageYOffset,
			width: _Browser_doc.documentElement.clientWidth,
			height: _Browser_doc.documentElement.clientHeight
		}
	};
}

function _Browser_getScene()
{
	var body = _Browser_doc.body;
	var elem = _Browser_doc.documentElement;
	return {
		width: Math.max(body.scrollWidth, body.offsetWidth, elem.scrollWidth, elem.offsetWidth, elem.clientWidth),
		height: Math.max(body.scrollHeight, body.offsetHeight, elem.scrollHeight, elem.offsetHeight, elem.clientHeight)
	};
}

var _Browser_setViewport = F2(function(x, y)
{
	return _Browser_withWindow(function()
	{
		_Browser_window.scroll(x, y);
		return _Utils_Tuple0;
	});
});



// ELEMENT VIEWPORT


function _Browser_getViewportOf(id)
{
	return _Browser_withNode(id, function(node)
	{
		return {
			scene: {
				width: node.scrollWidth,
				height: node.scrollHeight
			},
			viewport: {
				x: node.scrollLeft,
				y: node.scrollTop,
				width: node.clientWidth,
				height: node.clientHeight
			}
		};
	});
}


var _Browser_setViewportOf = F3(function(id, x, y)
{
	return _Browser_withNode(id, function(node)
	{
		node.scrollLeft = x;
		node.scrollTop = y;
		return _Utils_Tuple0;
	});
});



// ELEMENT


function _Browser_getElement(id)
{
	return _Browser_withNode(id, function(node)
	{
		var rect = node.getBoundingClientRect();
		var x = _Browser_window.pageXOffset;
		var y = _Browser_window.pageYOffset;
		return {
			scene: _Browser_getScene(),
			viewport: {
				x: x,
				y: y,
				width: _Browser_doc.documentElement.clientWidth,
				height: _Browser_doc.documentElement.clientHeight
			},
			element: {
				x: x + rect.left,
				y: y + rect.top,
				width: rect.width,
				height: rect.height
			}
		};
	});
}



// LOAD and RELOAD


function _Browser_reload(skipCache)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		_VirtualDom_doc.location.reload(skipCache);
	}));
}

function _Browser_load(url)
{
	return A2($elm$core$Task$perform, $elm$core$Basics$never, _Scheduler_binding(function(callback)
	{
		try
		{
			_Browser_window.location = url;
		}
		catch(err)
		{
			// Only Firefox can throw a NS_ERROR_MALFORMED_URI exception here.
			// Other browsers reload the page, so let's be consistent about that.
			_VirtualDom_doc.location.reload(false);
		}
	}));
}


function _Url_percentEncode(string)
{
	return encodeURIComponent(string);
}

function _Url_percentDecode(string)
{
	try
	{
		return $elm$core$Maybe$Just(decodeURIComponent(string));
	}
	catch (e)
	{
		return $elm$core$Maybe$Nothing;
	}
}var $author$project$Main$LinkClicked = function (a) {
	return {$: 'LinkClicked', a: a};
};
var $author$project$Main$UrlChanged = function (a) {
	return {$: 'UrlChanged', a: a};
};
var $elm$core$Basics$EQ = {$: 'EQ'};
var $elm$core$Basics$GT = {$: 'GT'};
var $elm$core$Basics$LT = {$: 'LT'};
var $elm$core$List$cons = _List_cons;
var $elm$core$Dict$foldr = F3(
	function (func, acc, t) {
		foldr:
		while (true) {
			if (t.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = t.b;
				var value = t.c;
				var left = t.d;
				var right = t.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldr, func, acc, right)),
					$temp$t = left;
				func = $temp$func;
				acc = $temp$acc;
				t = $temp$t;
				continue foldr;
			}
		}
	});
var $elm$core$Dict$toList = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, list) {
				return A2(
					$elm$core$List$cons,
					_Utils_Tuple2(key, value),
					list);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Dict$keys = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, keyList) {
				return A2($elm$core$List$cons, key, keyList);
			}),
		_List_Nil,
		dict);
};
var $elm$core$Set$toList = function (_v0) {
	var dict = _v0.a;
	return $elm$core$Dict$keys(dict);
};
var $elm$core$Elm$JsArray$foldr = _JsArray_foldr;
var $elm$core$Array$foldr = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldr, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldr,
			helper,
			A3($elm$core$Elm$JsArray$foldr, func, baseCase, tail),
			tree);
	});
var $elm$core$Array$toList = function (array) {
	return A3($elm$core$Array$foldr, $elm$core$List$cons, _List_Nil, array);
};
var $elm$core$Result$Err = function (a) {
	return {$: 'Err', a: a};
};
var $elm$json$Json$Decode$Failure = F2(
	function (a, b) {
		return {$: 'Failure', a: a, b: b};
	});
var $elm$json$Json$Decode$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$json$Json$Decode$Index = F2(
	function (a, b) {
		return {$: 'Index', a: a, b: b};
	});
var $elm$core$Result$Ok = function (a) {
	return {$: 'Ok', a: a};
};
var $elm$json$Json$Decode$OneOf = function (a) {
	return {$: 'OneOf', a: a};
};
var $elm$core$Basics$False = {$: 'False'};
var $elm$core$Basics$add = _Basics_add;
var $elm$core$Maybe$Just = function (a) {
	return {$: 'Just', a: a};
};
var $elm$core$Maybe$Nothing = {$: 'Nothing'};
var $elm$core$String$all = _String_all;
var $elm$core$Basics$and = _Basics_and;
var $elm$core$Basics$append = _Utils_append;
var $elm$json$Json$Encode$encode = _Json_encode;
var $elm$core$String$fromInt = _String_fromNumber;
var $elm$core$String$join = F2(
	function (sep, chunks) {
		return A2(
			_String_join,
			sep,
			_List_toArray(chunks));
	});
var $elm$core$String$split = F2(
	function (sep, string) {
		return _List_fromArray(
			A2(_String_split, sep, string));
	});
var $elm$json$Json$Decode$indent = function (str) {
	return A2(
		$elm$core$String$join,
		'\n    ',
		A2($elm$core$String$split, '\n', str));
};
var $elm$core$List$foldl = F3(
	function (func, acc, list) {
		foldl:
		while (true) {
			if (!list.b) {
				return acc;
			} else {
				var x = list.a;
				var xs = list.b;
				var $temp$func = func,
					$temp$acc = A2(func, x, acc),
					$temp$list = xs;
				func = $temp$func;
				acc = $temp$acc;
				list = $temp$list;
				continue foldl;
			}
		}
	});
var $elm$core$List$length = function (xs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, i) {
				return i + 1;
			}),
		0,
		xs);
};
var $elm$core$List$map2 = _List_map2;
var $elm$core$Basics$le = _Utils_le;
var $elm$core$Basics$sub = _Basics_sub;
var $elm$core$List$rangeHelp = F3(
	function (lo, hi, list) {
		rangeHelp:
		while (true) {
			if (_Utils_cmp(lo, hi) < 1) {
				var $temp$lo = lo,
					$temp$hi = hi - 1,
					$temp$list = A2($elm$core$List$cons, hi, list);
				lo = $temp$lo;
				hi = $temp$hi;
				list = $temp$list;
				continue rangeHelp;
			} else {
				return list;
			}
		}
	});
var $elm$core$List$range = F2(
	function (lo, hi) {
		return A3($elm$core$List$rangeHelp, lo, hi, _List_Nil);
	});
var $elm$core$List$indexedMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$map2,
			f,
			A2(
				$elm$core$List$range,
				0,
				$elm$core$List$length(xs) - 1),
			xs);
	});
var $elm$core$Char$toCode = _Char_toCode;
var $elm$core$Char$isLower = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (97 <= code) && (code <= 122);
};
var $elm$core$Char$isUpper = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 90) && (65 <= code);
};
var $elm$core$Basics$or = _Basics_or;
var $elm$core$Char$isAlpha = function (_char) {
	return $elm$core$Char$isLower(_char) || $elm$core$Char$isUpper(_char);
};
var $elm$core$Char$isDigit = function (_char) {
	var code = $elm$core$Char$toCode(_char);
	return (code <= 57) && (48 <= code);
};
var $elm$core$Char$isAlphaNum = function (_char) {
	return $elm$core$Char$isLower(_char) || ($elm$core$Char$isUpper(_char) || $elm$core$Char$isDigit(_char));
};
var $elm$core$List$reverse = function (list) {
	return A3($elm$core$List$foldl, $elm$core$List$cons, _List_Nil, list);
};
var $elm$core$String$uncons = _String_uncons;
var $elm$json$Json$Decode$errorOneOf = F2(
	function (i, error) {
		return '\n\n(' + ($elm$core$String$fromInt(i + 1) + (') ' + $elm$json$Json$Decode$indent(
			$elm$json$Json$Decode$errorToString(error))));
	});
var $elm$json$Json$Decode$errorToString = function (error) {
	return A2($elm$json$Json$Decode$errorToStringHelp, error, _List_Nil);
};
var $elm$json$Json$Decode$errorToStringHelp = F2(
	function (error, context) {
		errorToStringHelp:
		while (true) {
			switch (error.$) {
				case 'Field':
					var f = error.a;
					var err = error.b;
					var isSimple = function () {
						var _v1 = $elm$core$String$uncons(f);
						if (_v1.$ === 'Nothing') {
							return false;
						} else {
							var _v2 = _v1.a;
							var _char = _v2.a;
							var rest = _v2.b;
							return $elm$core$Char$isAlpha(_char) && A2($elm$core$String$all, $elm$core$Char$isAlphaNum, rest);
						}
					}();
					var fieldName = isSimple ? ('.' + f) : ('[\'' + (f + '\']'));
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, fieldName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'Index':
					var i = error.a;
					var err = error.b;
					var indexName = '[' + ($elm$core$String$fromInt(i) + ']');
					var $temp$error = err,
						$temp$context = A2($elm$core$List$cons, indexName, context);
					error = $temp$error;
					context = $temp$context;
					continue errorToStringHelp;
				case 'OneOf':
					var errors = error.a;
					if (!errors.b) {
						return 'Ran into a Json.Decode.oneOf with no possibilities' + function () {
							if (!context.b) {
								return '!';
							} else {
								return ' at json' + A2(
									$elm$core$String$join,
									'',
									$elm$core$List$reverse(context));
							}
						}();
					} else {
						if (!errors.b.b) {
							var err = errors.a;
							var $temp$error = err,
								$temp$context = context;
							error = $temp$error;
							context = $temp$context;
							continue errorToStringHelp;
						} else {
							var starter = function () {
								if (!context.b) {
									return 'Json.Decode.oneOf';
								} else {
									return 'The Json.Decode.oneOf at json' + A2(
										$elm$core$String$join,
										'',
										$elm$core$List$reverse(context));
								}
							}();
							var introduction = starter + (' failed in the following ' + ($elm$core$String$fromInt(
								$elm$core$List$length(errors)) + ' ways:'));
							return A2(
								$elm$core$String$join,
								'\n\n',
								A2(
									$elm$core$List$cons,
									introduction,
									A2($elm$core$List$indexedMap, $elm$json$Json$Decode$errorOneOf, errors)));
						}
					}
				default:
					var msg = error.a;
					var json = error.b;
					var introduction = function () {
						if (!context.b) {
							return 'Problem with the given value:\n\n';
						} else {
							return 'Problem with the value at json' + (A2(
								$elm$core$String$join,
								'',
								$elm$core$List$reverse(context)) + ':\n\n    ');
						}
					}();
					return introduction + ($elm$json$Json$Decode$indent(
						A2($elm$json$Json$Encode$encode, 4, json)) + ('\n\n' + msg));
			}
		}
	});
var $elm$core$Array$branchFactor = 32;
var $elm$core$Array$Array_elm_builtin = F4(
	function (a, b, c, d) {
		return {$: 'Array_elm_builtin', a: a, b: b, c: c, d: d};
	});
var $elm$core$Elm$JsArray$empty = _JsArray_empty;
var $elm$core$Basics$ceiling = _Basics_ceiling;
var $elm$core$Basics$fdiv = _Basics_fdiv;
var $elm$core$Basics$logBase = F2(
	function (base, number) {
		return _Basics_log(number) / _Basics_log(base);
	});
var $elm$core$Basics$toFloat = _Basics_toFloat;
var $elm$core$Array$shiftStep = $elm$core$Basics$ceiling(
	A2($elm$core$Basics$logBase, 2, $elm$core$Array$branchFactor));
var $elm$core$Array$empty = A4($elm$core$Array$Array_elm_builtin, 0, $elm$core$Array$shiftStep, $elm$core$Elm$JsArray$empty, $elm$core$Elm$JsArray$empty);
var $elm$core$Elm$JsArray$initialize = _JsArray_initialize;
var $elm$core$Array$Leaf = function (a) {
	return {$: 'Leaf', a: a};
};
var $elm$core$Basics$apL = F2(
	function (f, x) {
		return f(x);
	});
var $elm$core$Basics$apR = F2(
	function (x, f) {
		return f(x);
	});
var $elm$core$Basics$eq = _Utils_equal;
var $elm$core$Basics$floor = _Basics_floor;
var $elm$core$Elm$JsArray$length = _JsArray_length;
var $elm$core$Basics$gt = _Utils_gt;
var $elm$core$Basics$max = F2(
	function (x, y) {
		return (_Utils_cmp(x, y) > 0) ? x : y;
	});
var $elm$core$Basics$mul = _Basics_mul;
var $elm$core$Array$SubTree = function (a) {
	return {$: 'SubTree', a: a};
};
var $elm$core$Elm$JsArray$initializeFromList = _JsArray_initializeFromList;
var $elm$core$Array$compressNodes = F2(
	function (nodes, acc) {
		compressNodes:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodes);
			var node = _v0.a;
			var remainingNodes = _v0.b;
			var newAcc = A2(
				$elm$core$List$cons,
				$elm$core$Array$SubTree(node),
				acc);
			if (!remainingNodes.b) {
				return $elm$core$List$reverse(newAcc);
			} else {
				var $temp$nodes = remainingNodes,
					$temp$acc = newAcc;
				nodes = $temp$nodes;
				acc = $temp$acc;
				continue compressNodes;
			}
		}
	});
var $elm$core$Tuple$first = function (_v0) {
	var x = _v0.a;
	return x;
};
var $elm$core$Array$treeFromBuilder = F2(
	function (nodeList, nodeListSize) {
		treeFromBuilder:
		while (true) {
			var newNodeSize = $elm$core$Basics$ceiling(nodeListSize / $elm$core$Array$branchFactor);
			if (newNodeSize === 1) {
				return A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, nodeList).a;
			} else {
				var $temp$nodeList = A2($elm$core$Array$compressNodes, nodeList, _List_Nil),
					$temp$nodeListSize = newNodeSize;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue treeFromBuilder;
			}
		}
	});
var $elm$core$Array$builderToArray = F2(
	function (reverseNodeList, builder) {
		if (!builder.nodeListSize) {
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail),
				$elm$core$Array$shiftStep,
				$elm$core$Elm$JsArray$empty,
				builder.tail);
		} else {
			var treeLen = builder.nodeListSize * $elm$core$Array$branchFactor;
			var depth = $elm$core$Basics$floor(
				A2($elm$core$Basics$logBase, $elm$core$Array$branchFactor, treeLen - 1));
			var correctNodeList = reverseNodeList ? $elm$core$List$reverse(builder.nodeList) : builder.nodeList;
			var tree = A2($elm$core$Array$treeFromBuilder, correctNodeList, builder.nodeListSize);
			return A4(
				$elm$core$Array$Array_elm_builtin,
				$elm$core$Elm$JsArray$length(builder.tail) + treeLen,
				A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep),
				tree,
				builder.tail);
		}
	});
var $elm$core$Basics$idiv = _Basics_idiv;
var $elm$core$Basics$lt = _Utils_lt;
var $elm$core$Array$initializeHelp = F5(
	function (fn, fromIndex, len, nodeList, tail) {
		initializeHelp:
		while (true) {
			if (fromIndex < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					false,
					{nodeList: nodeList, nodeListSize: (len / $elm$core$Array$branchFactor) | 0, tail: tail});
			} else {
				var leaf = $elm$core$Array$Leaf(
					A3($elm$core$Elm$JsArray$initialize, $elm$core$Array$branchFactor, fromIndex, fn));
				var $temp$fn = fn,
					$temp$fromIndex = fromIndex - $elm$core$Array$branchFactor,
					$temp$len = len,
					$temp$nodeList = A2($elm$core$List$cons, leaf, nodeList),
					$temp$tail = tail;
				fn = $temp$fn;
				fromIndex = $temp$fromIndex;
				len = $temp$len;
				nodeList = $temp$nodeList;
				tail = $temp$tail;
				continue initializeHelp;
			}
		}
	});
var $elm$core$Basics$remainderBy = _Basics_remainderBy;
var $elm$core$Array$initialize = F2(
	function (len, fn) {
		if (len <= 0) {
			return $elm$core$Array$empty;
		} else {
			var tailLen = len % $elm$core$Array$branchFactor;
			var tail = A3($elm$core$Elm$JsArray$initialize, tailLen, len - tailLen, fn);
			var initialFromIndex = (len - tailLen) - $elm$core$Array$branchFactor;
			return A5($elm$core$Array$initializeHelp, fn, initialFromIndex, len, _List_Nil, tail);
		}
	});
var $elm$core$Basics$True = {$: 'True'};
var $elm$core$Result$isOk = function (result) {
	if (result.$ === 'Ok') {
		return true;
	} else {
		return false;
	}
};
var $elm$json$Json$Decode$map = _Json_map1;
var $elm$json$Json$Decode$map2 = _Json_map2;
var $elm$json$Json$Decode$succeed = _Json_succeed;
var $elm$virtual_dom$VirtualDom$toHandlerInt = function (handler) {
	switch (handler.$) {
		case 'Normal':
			return 0;
		case 'MayStopPropagation':
			return 1;
		case 'MayPreventDefault':
			return 2;
		default:
			return 3;
	}
};
var $elm$browser$Debugger$Expando$ArraySeq = {$: 'ArraySeq'};
var $elm$browser$Debugger$Overlay$BlockMost = {$: 'BlockMost'};
var $elm$browser$Debugger$Overlay$BlockNone = {$: 'BlockNone'};
var $elm$browser$Debugger$Expando$Constructor = F3(
	function (a, b, c) {
		return {$: 'Constructor', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$Dictionary = F2(
	function (a, b) {
		return {$: 'Dictionary', a: a, b: b};
	});
var $elm$browser$Debugger$Main$Down = {$: 'Down'};
var $elm$browser$Debugger$Expando$ListSeq = {$: 'ListSeq'};
var $elm$browser$Debugger$Main$NoOp = {$: 'NoOp'};
var $elm$browser$Debugger$Expando$Primitive = function (a) {
	return {$: 'Primitive', a: a};
};
var $elm$browser$Debugger$Expando$Record = F2(
	function (a, b) {
		return {$: 'Record', a: a, b: b};
	});
var $elm$browser$Debugger$Expando$S = function (a) {
	return {$: 'S', a: a};
};
var $elm$browser$Debugger$Expando$Sequence = F3(
	function (a, b, c) {
		return {$: 'Sequence', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$SetSeq = {$: 'SetSeq'};
var $elm$browser$Debugger$Main$Up = {$: 'Up'};
var $elm$browser$Debugger$Main$UserMsg = function (a) {
	return {$: 'UserMsg', a: a};
};
var $elm$browser$Debugger$Main$Export = {$: 'Export'};
var $elm$browser$Debugger$Main$Import = {$: 'Import'};
var $elm$browser$Debugger$Main$Open = {$: 'Open'};
var $elm$browser$Debugger$Main$OverlayMsg = function (a) {
	return {$: 'OverlayMsg', a: a};
};
var $elm$browser$Debugger$Main$Resume = {$: 'Resume'};
var $elm$browser$Debugger$Main$isPaused = function (state) {
	if (state.$ === 'Running') {
		return false;
	} else {
		return true;
	}
};
var $elm$browser$Debugger$History$size = function (history) {
	return history.numMessages;
};
var $elm$browser$Debugger$Overlay$Accept = function (a) {
	return {$: 'Accept', a: a};
};
var $elm$browser$Debugger$Overlay$Choose = F2(
	function (a, b) {
		return {$: 'Choose', a: a, b: b};
	});
var $elm$html$Html$div = _VirtualDom_node('div');
var $elm$json$Json$Encode$string = _Json_wrap;
var $elm$html$Html$Attributes$stringProperty = F2(
	function (key, string) {
		return A2(
			_VirtualDom_property,
			key,
			$elm$json$Json$Encode$string(string));
	});
var $elm$html$Html$Attributes$id = $elm$html$Html$Attributes$stringProperty('id');
var $elm$virtual_dom$VirtualDom$Normal = function (a) {
	return {$: 'Normal', a: a};
};
var $elm$virtual_dom$VirtualDom$on = _VirtualDom_on;
var $elm$html$Html$Events$on = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$Normal(decoder));
	});
var $elm$html$Html$Events$onClick = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'click',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$html$Html$span = _VirtualDom_node('span');
var $elm$virtual_dom$VirtualDom$style = _VirtualDom_style;
var $elm$html$Html$Attributes$style = $elm$virtual_dom$VirtualDom$style;
var $elm$virtual_dom$VirtualDom$text = _VirtualDom_text;
var $elm$html$Html$text = $elm$virtual_dom$VirtualDom$text;
var $elm$html$Html$a = _VirtualDom_node('a');
var $elm$browser$Debugger$Overlay$goodNews1 = '\nThe good news is that having values like this in your message type is not\nso great in the long run. You are better off using simpler data, like\n';
var $elm$browser$Debugger$Overlay$goodNews2 = '\nfunction can pattern match on that data and call whatever functions, JSON\ndecoders, etc. you need. This makes the code much more explicit and easy to\nfollow for other readers (or you in a few months!)\n';
var $elm$html$Html$Attributes$href = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'href',
		_VirtualDom_noJavaScriptUri(url));
};
var $elm$core$List$foldrHelper = F4(
	function (fn, acc, ctr, ls) {
		if (!ls.b) {
			return acc;
		} else {
			var a = ls.a;
			var r1 = ls.b;
			if (!r1.b) {
				return A2(fn, a, acc);
			} else {
				var b = r1.a;
				var r2 = r1.b;
				if (!r2.b) {
					return A2(
						fn,
						a,
						A2(fn, b, acc));
				} else {
					var c = r2.a;
					var r3 = r2.b;
					if (!r3.b) {
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(fn, c, acc)));
					} else {
						var d = r3.a;
						var r4 = r3.b;
						var res = (ctr > 500) ? A3(
							$elm$core$List$foldl,
							fn,
							acc,
							$elm$core$List$reverse(r4)) : A4($elm$core$List$foldrHelper, fn, acc, ctr + 1, r4);
						return A2(
							fn,
							a,
							A2(
								fn,
								b,
								A2(
									fn,
									c,
									A2(fn, d, res))));
					}
				}
			}
		}
	});
var $elm$core$List$foldr = F3(
	function (fn, acc, ls) {
		return A4($elm$core$List$foldrHelper, fn, acc, 0, ls);
	});
var $elm$core$List$map = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			F2(
				function (x, acc) {
					return A2(
						$elm$core$List$cons,
						f(x),
						acc);
				}),
			_List_Nil,
			xs);
	});
var $elm$html$Html$p = _VirtualDom_node('p');
var $elm$html$Html$ul = _VirtualDom_node('ul');
var $elm$html$Html$code = _VirtualDom_node('code');
var $elm$browser$Debugger$Overlay$viewCode = function (name) {
	return A2(
		$elm$html$Html$code,
		_List_Nil,
		_List_fromArray(
			[
				$elm$html$Html$text(name)
			]));
};
var $elm$browser$Debugger$Overlay$addCommas = function (items) {
	if (!items.b) {
		return '';
	} else {
		if (!items.b.b) {
			var item = items.a;
			return item;
		} else {
			if (!items.b.b.b) {
				var item1 = items.a;
				var _v1 = items.b;
				var item2 = _v1.a;
				return item1 + (' and ' + item2);
			} else {
				var lastItem = items.a;
				var otherItems = items.b;
				return A2(
					$elm$core$String$join,
					', ',
					_Utils_ap(
						otherItems,
						_List_fromArray(
							[' and ' + lastItem])));
			}
		}
	}
};
var $elm$html$Html$li = _VirtualDom_node('li');
var $elm$browser$Debugger$Overlay$problemToString = function (problem) {
	switch (problem.$) {
		case 'Function':
			return 'functions';
		case 'Decoder':
			return 'JSON decoders';
		case 'Task':
			return 'tasks';
		case 'Process':
			return 'processes';
		case 'Socket':
			return 'web sockets';
		case 'Request':
			return 'HTTP requests';
		case 'Program':
			return 'programs';
		default:
			return 'virtual DOM values';
	}
};
var $elm$browser$Debugger$Overlay$viewProblemType = function (_v0) {
	var name = _v0.name;
	var problems = _v0.problems;
	return A2(
		$elm$html$Html$li,
		_List_Nil,
		_List_fromArray(
			[
				$elm$browser$Debugger$Overlay$viewCode(name),
				$elm$html$Html$text(
				' can contain ' + ($elm$browser$Debugger$Overlay$addCommas(
					A2($elm$core$List$map, $elm$browser$Debugger$Overlay$problemToString, problems)) + '.'))
			]));
};
var $elm$browser$Debugger$Overlay$viewBadMetadata = function (_v0) {
	var message = _v0.message;
	var problems = _v0.problems;
	return _List_fromArray(
		[
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('The '),
					$elm$browser$Debugger$Overlay$viewCode(message),
					$elm$html$Html$text(' type of your program cannot be reliably serialized for history files.')
				])),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text('Functions cannot be serialized, nor can values that contain functions. This is a problem in these places:')
				])),
			A2(
			$elm$html$Html$ul,
			_List_Nil,
			A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewProblemType, problems)),
			A2(
			$elm$html$Html$p,
			_List_Nil,
			_List_fromArray(
				[
					$elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews1),
					A2(
					$elm$html$Html$a,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$href('https://guide.elm-lang.org/types/custom_types.html')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('custom types')
						])),
					$elm$html$Html$text(', in your messages. From there, your '),
					$elm$browser$Debugger$Overlay$viewCode('update'),
					$elm$html$Html$text($elm$browser$Debugger$Overlay$goodNews2)
				]))
		]);
};
var $elm$virtual_dom$VirtualDom$map = _VirtualDom_map;
var $elm$html$Html$map = $elm$virtual_dom$VirtualDom$map;
var $elm$browser$Debugger$Overlay$Cancel = {$: 'Cancel'};
var $elm$browser$Debugger$Overlay$Proceed = {$: 'Proceed'};
var $elm$html$Html$button = _VirtualDom_node('button');
var $elm$browser$Debugger$Overlay$viewButtons = function (buttons) {
	var btn = F2(
		function (msg, string) {
			return A2(
				$elm$html$Html$button,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'margin-right', '20px'),
						$elm$html$Html$Events$onClick(msg)
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(string)
					]));
		});
	var buttonNodes = function () {
		if (buttons.$ === 'Accept') {
			var proceed = buttons.a;
			return _List_fromArray(
				[
					A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		} else {
			var cancel = buttons.a;
			var proceed = buttons.b;
			return _List_fromArray(
				[
					A2(btn, $elm$browser$Debugger$Overlay$Cancel, cancel),
					A2(btn, $elm$browser$Debugger$Overlay$Proceed, proceed)
				]);
		}
	}();
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'height', '60px'),
				A2($elm$html$Html$Attributes$style, 'line-height', '60px'),
				A2($elm$html$Html$Attributes$style, 'text-align', 'right'),
				A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		buttonNodes);
};
var $elm$browser$Debugger$Overlay$viewMessage = F4(
	function (config, title, details, buttons) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('elm-debugger-overlay'),
					A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2($elm$html$Html$Attributes$style, 'top', '0'),
					A2($elm$html$Html$Attributes$style, 'left', '0'),
					A2($elm$html$Html$Attributes$style, 'width', '100vw'),
					A2($elm$html$Html$Attributes$style, 'height', '100vh'),
					A2($elm$html$Html$Attributes$style, 'color', 'white'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'none'),
					A2($elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
					A2($elm$html$Html$Attributes$style, 'z-index', '2147483647')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
							A2($elm$html$Html$Attributes$style, 'width', '600px'),
							A2($elm$html$Html$Attributes$style, 'height', '100vh'),
							A2($elm$html$Html$Attributes$style, 'padding-left', 'calc(50% - 300px)'),
							A2($elm$html$Html$Attributes$style, 'padding-right', 'calc(50% - 300px)'),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto')
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'font-size', '36px'),
									A2($elm$html$Html$Attributes$style, 'height', '80px'),
									A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)'),
									A2($elm$html$Html$Attributes$style, 'padding-left', '22px'),
									A2($elm$html$Html$Attributes$style, 'vertical-align', 'middle'),
									A2($elm$html$Html$Attributes$style, 'line-height', '80px')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text(title)
								])),
							A2(
							$elm$html$Html$div,
							_List_fromArray(
								[
									$elm$html$Html$Attributes$id('elm-debugger-details'),
									A2($elm$html$Html$Attributes$style, 'padding', ' 8px 20px'),
									A2($elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
									A2($elm$html$Html$Attributes$style, 'max-height', 'calc(100vh - 156px)'),
									A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)')
								]),
							details),
							A2(
							$elm$html$Html$map,
							config.wrap,
							$elm$browser$Debugger$Overlay$viewButtons(buttons))
						]))
				]));
	});
var $elm$virtual_dom$VirtualDom$attribute = F2(
	function (key, value) {
		return A2(
			_VirtualDom_attribute,
			_VirtualDom_noOnOrFormAction(key),
			_VirtualDom_noJavaScriptOrHtmlUri(value));
	});
var $elm$core$Basics$negate = function (n) {
	return -n;
};
var $elm$virtual_dom$VirtualDom$nodeNS = function (tag) {
	return _VirtualDom_nodeNS(
		_VirtualDom_noScript(tag));
};
var $elm$core$String$fromFloat = _String_fromNumber;
var $elm$browser$Debugger$Overlay$viewShape = F4(
	function (x, y, angle, coordinates) {
		return A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			'http://www.w3.org/2000/svg',
			'polygon',
			_List_fromArray(
				[
					A2($elm$virtual_dom$VirtualDom$attribute, 'points', coordinates),
					A2(
					$elm$virtual_dom$VirtualDom$attribute,
					'transform',
					'translate(' + ($elm$core$String$fromFloat(x) + (' ' + ($elm$core$String$fromFloat(y) + (') rotate(' + ($elm$core$String$fromFloat(-angle) + ')'))))))
				]),
			_List_Nil);
	});
var $elm$browser$Debugger$Overlay$elmLogo = A4(
	$elm$virtual_dom$VirtualDom$nodeNS,
	'http://www.w3.org/2000/svg',
	'svg',
	_List_fromArray(
		[
			A2($elm$virtual_dom$VirtualDom$attribute, 'viewBox', '-300 -300 600 600'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'xmlns', 'http://www.w3.org/2000/svg'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'fill', 'currentColor'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'width', '24px'),
			A2($elm$virtual_dom$VirtualDom$attribute, 'height', '24px')
		]),
	_List_fromArray(
		[
			A4(
			$elm$virtual_dom$VirtualDom$nodeNS,
			'http://www.w3.org/2000/svg',
			'g',
			_List_fromArray(
				[
					A2($elm$virtual_dom$VirtualDom$attribute, 'transform', 'scale(1 -1)')
				]),
			_List_fromArray(
				[
					A4($elm$browser$Debugger$Overlay$viewShape, 0, -210, 0, '-280,-90 0,190 280,-90'),
					A4($elm$browser$Debugger$Overlay$viewShape, -210, 0, 90, '-280,-90 0,190 280,-90'),
					A4($elm$browser$Debugger$Overlay$viewShape, 207, 207, 45, '-198,-66 0,132 198,-66'),
					A4($elm$browser$Debugger$Overlay$viewShape, 150, 0, 0, '-130,0 0,-130 130,0 0,130'),
					A4($elm$browser$Debugger$Overlay$viewShape, -89, 239, 0, '-191,61 69,61 191,-61 -69,-61'),
					A4($elm$browser$Debugger$Overlay$viewShape, 0, 106, 180, '-130,-44 0,86  130,-44'),
					A4($elm$browser$Debugger$Overlay$viewShape, 256, -150, 270, '-130,-44 0,86  130,-44')
				]))
		]));
var $elm$core$String$length = _String_length;
var $elm$browser$Debugger$Overlay$viewMiniControls = F2(
	function (config, numMsgs) {
		var string = $elm$core$String$fromInt(numMsgs);
		var width = $elm$core$String$fromInt(
			2 + $elm$core$String$length(string));
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
					A2($elm$html$Html$Attributes$style, 'bottom', '2em'),
					A2($elm$html$Html$Attributes$style, 'right', '2em'),
					A2($elm$html$Html$Attributes$style, 'width', 'calc(42px + ' + (width + 'ch)')),
					A2($elm$html$Html$Attributes$style, 'height', '36px'),
					A2($elm$html$Html$Attributes$style, 'background-color', '#1293D8'),
					A2($elm$html$Html$Attributes$style, 'color', 'white'),
					A2($elm$html$Html$Attributes$style, 'font-family', 'monospace'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
					A2($elm$html$Html$Attributes$style, 'z-index', '2147483647'),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
					$elm$html$Html$Events$onClick(config.open)
				]),
			_List_fromArray(
				[
					$elm$browser$Debugger$Overlay$elmLogo,
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'padding-left', 'calc(1ch + 6px)'),
							A2($elm$html$Html$Attributes$style, 'padding-right', '1ch')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(string)
						]))
				]));
	});
var $elm$browser$Debugger$Overlay$explanationBad = '\nThe messages in this history do not match the messages handled by your\nprogram. I noticed changes in the following types:\n';
var $elm$browser$Debugger$Overlay$explanationRisky = '\nThis history seems old. It will work with this program, but some\nmessages have been added since the history was created:\n';
var $elm$core$List$intersperse = F2(
	function (sep, xs) {
		if (!xs.b) {
			return _List_Nil;
		} else {
			var hd = xs.a;
			var tl = xs.b;
			var step = F2(
				function (x, rest) {
					return A2(
						$elm$core$List$cons,
						sep,
						A2($elm$core$List$cons, x, rest));
				});
			var spersed = A3($elm$core$List$foldr, step, _List_Nil, tl);
			return A2($elm$core$List$cons, hd, spersed);
		}
	});
var $elm$browser$Debugger$Overlay$viewMention = F2(
	function (tags, verbed) {
		var _v0 = A2(
			$elm$core$List$map,
			$elm$browser$Debugger$Overlay$viewCode,
			$elm$core$List$reverse(tags));
		if (!_v0.b) {
			return $elm$html$Html$text('');
		} else {
			if (!_v0.b.b) {
				var tag = _v0.a;
				return A2(
					$elm$html$Html$li,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(verbed),
							tag,
							$elm$html$Html$text('.')
						]));
			} else {
				if (!_v0.b.b.b) {
					var tag2 = _v0.a;
					var _v1 = _v0.b;
					var tag1 = _v1.a;
					return A2(
						$elm$html$Html$li,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(verbed),
								tag1,
								$elm$html$Html$text(' and '),
								tag2,
								$elm$html$Html$text('.')
							]));
				} else {
					var lastTag = _v0.a;
					var otherTags = _v0.b;
					return A2(
						$elm$html$Html$li,
						_List_Nil,
						A2(
							$elm$core$List$cons,
							$elm$html$Html$text(verbed),
							_Utils_ap(
								A2(
									$elm$core$List$intersperse,
									$elm$html$Html$text(', '),
									$elm$core$List$reverse(otherTags)),
								_List_fromArray(
									[
										$elm$html$Html$text(', and '),
										lastTag,
										$elm$html$Html$text('.')
									]))));
				}
			}
		}
	});
var $elm$browser$Debugger$Overlay$viewChange = function (change) {
	return A2(
		$elm$html$Html$li,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'margin', '8px 0')
			]),
		function () {
			if (change.$ === 'AliasChange') {
				var name = change.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								$elm$browser$Debugger$Overlay$viewCode(name)
							]))
					]);
			} else {
				var name = change.a;
				var removed = change.b.removed;
				var changed = change.b.changed;
				var added = change.b.added;
				var argsMatch = change.b.argsMatch;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'font-size', '1.5em')
							]),
						_List_fromArray(
							[
								$elm$browser$Debugger$Overlay$viewCode(name)
							])),
						A2(
						$elm$html$Html$ul,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'list-style-type', 'disc'),
								A2($elm$html$Html$Attributes$style, 'padding-left', '2em')
							]),
						_List_fromArray(
							[
								A2($elm$browser$Debugger$Overlay$viewMention, removed, 'Removed '),
								A2($elm$browser$Debugger$Overlay$viewMention, changed, 'Changed '),
								A2($elm$browser$Debugger$Overlay$viewMention, added, 'Added ')
							])),
						argsMatch ? $elm$html$Html$text('') : $elm$html$Html$text('This may be due to the fact that the type variable names changed.')
					]);
			}
		}());
};
var $elm$browser$Debugger$Overlay$viewReport = F2(
	function (isBad, report) {
		switch (report.$) {
			case 'CorruptHistory':
				return _List_fromArray(
					[
						$elm$html$Html$text('Looks like this history file is corrupt. I cannot understand it.')
					]);
			case 'VersionChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						$elm$html$Html$text('This history was created with Elm ' + (old + (', but you are using Elm ' + (_new + ' right now.'))))
					]);
			case 'MessageChanged':
				var old = report.a;
				var _new = report.b;
				return _List_fromArray(
					[
						$elm$html$Html$text('To import some other history, the overall message type must' + ' be the same. The old history has '),
						$elm$browser$Debugger$Overlay$viewCode(old),
						$elm$html$Html$text(' messages, but the new program works with '),
						$elm$browser$Debugger$Overlay$viewCode(_new),
						$elm$html$Html$text(' messages.')
					]);
			default:
				var changes = report.a;
				return _List_fromArray(
					[
						A2(
						$elm$html$Html$p,
						_List_Nil,
						_List_fromArray(
							[
								$elm$html$Html$text(
								isBad ? $elm$browser$Debugger$Overlay$explanationBad : $elm$browser$Debugger$Overlay$explanationRisky)
							])),
						A2(
						$elm$html$Html$ul,
						_List_fromArray(
							[
								A2($elm$html$Html$Attributes$style, 'list-style-type', 'none'),
								A2($elm$html$Html$Attributes$style, 'padding-left', '20px')
							]),
						A2($elm$core$List$map, $elm$browser$Debugger$Overlay$viewChange, changes))
					]);
		}
	});
var $elm$browser$Debugger$Overlay$view = F5(
	function (config, isPaused, isOpen, numMsgs, state) {
		switch (state.$) {
			case 'None':
				return isOpen ? $elm$html$Html$text('') : (isPaused ? A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$id('elm-debugger-overlay'),
							A2($elm$html$Html$Attributes$style, 'position', 'fixed'),
							A2($elm$html$Html$Attributes$style, 'top', '0'),
							A2($elm$html$Html$Attributes$style, 'left', '0'),
							A2($elm$html$Html$Attributes$style, 'width', '100vw'),
							A2($elm$html$Html$Attributes$style, 'height', '100vh'),
							A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
							A2($elm$html$Html$Attributes$style, 'display', 'flex'),
							A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
							A2($elm$html$Html$Attributes$style, 'justify-content', 'center'),
							A2($elm$html$Html$Attributes$style, 'pointer-events', 'auto'),
							A2($elm$html$Html$Attributes$style, 'background-color', 'rgba(200, 200, 200, 0.7)'),
							A2($elm$html$Html$Attributes$style, 'color', 'white'),
							A2($elm$html$Html$Attributes$style, 'font-family', '\'Trebuchet MS\', \'Lucida Grande\', \'Bitstream Vera Sans\', \'Helvetica Neue\', sans-serif'),
							A2($elm$html$Html$Attributes$style, 'z-index', '2147483646'),
							$elm$html$Html$Events$onClick(config.resume)
						]),
					_List_fromArray(
						[
							A2(
							$elm$html$Html$span,
							_List_fromArray(
								[
									A2($elm$html$Html$Attributes$style, 'font-size', '80px')
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Click to Resume')
								])),
							A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs)
						])) : A2($elm$browser$Debugger$Overlay$viewMiniControls, config, numMsgs));
			case 'BadMetadata':
				var badMetadata_ = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot use Import or Export',
					$elm$browser$Debugger$Overlay$viewBadMetadata(badMetadata_),
					$elm$browser$Debugger$Overlay$Accept('Ok'));
			case 'BadImport':
				var report = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Cannot Import History',
					A2($elm$browser$Debugger$Overlay$viewReport, true, report),
					$elm$browser$Debugger$Overlay$Accept('Ok'));
			default:
				var report = state.a;
				return A4(
					$elm$browser$Debugger$Overlay$viewMessage,
					config,
					'Warning',
					A2($elm$browser$Debugger$Overlay$viewReport, false, report),
					A2($elm$browser$Debugger$Overlay$Choose, 'Cancel', 'Import Anyway'));
		}
	});
var $elm$browser$Debugger$Main$cornerView = function (model) {
	return A5(
		$elm$browser$Debugger$Overlay$view,
		{exportHistory: $elm$browser$Debugger$Main$Export, importHistory: $elm$browser$Debugger$Main$Import, open: $elm$browser$Debugger$Main$Open, resume: $elm$browser$Debugger$Main$Resume, wrap: $elm$browser$Debugger$Main$OverlayMsg},
		$elm$browser$Debugger$Main$isPaused(model.state),
		_Debugger_isOpen(model.popout),
		$elm$browser$Debugger$History$size(model.history),
		model.overlay);
};
var $elm$core$Dict$RBEmpty_elm_builtin = {$: 'RBEmpty_elm_builtin'};
var $elm$core$Dict$empty = $elm$core$Dict$RBEmpty_elm_builtin;
var $elm$core$Set$foldr = F3(
	function (func, initialState, _v0) {
		var dict = _v0.a;
		return A3(
			$elm$core$Dict$foldr,
			F3(
				function (key, _v1, state) {
					return A2(func, key, state);
				}),
			initialState,
			dict);
	});
var $elm$browser$Debugger$Main$getCurrentModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.b;
		return model;
	}
};
var $elm$browser$Debugger$Main$getUserModel = function (model) {
	return $elm$browser$Debugger$Main$getCurrentModel(model.state);
};
var $elm$browser$Debugger$Main$initialWindowHeight = 420;
var $elm$browser$Debugger$Main$initialWindowWidth = 900;
var $elm$core$Dict$Black = {$: 'Black'};
var $elm$core$Dict$RBNode_elm_builtin = F5(
	function (a, b, c, d, e) {
		return {$: 'RBNode_elm_builtin', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$core$Dict$Red = {$: 'Red'};
var $elm$core$Dict$balance = F5(
	function (color, key, value, left, right) {
		if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Red')) {
			var _v1 = right.a;
			var rK = right.b;
			var rV = right.c;
			var rLeft = right.d;
			var rRight = right.e;
			if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
				var _v3 = left.a;
				var lK = left.b;
				var lV = left.c;
				var lLeft = left.d;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					key,
					value,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					rK,
					rV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, left, rLeft),
					rRight);
			}
		} else {
			if ((((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) && (left.d.$ === 'RBNode_elm_builtin')) && (left.d.a.$ === 'Red')) {
				var _v5 = left.a;
				var lK = left.b;
				var lV = left.c;
				var _v6 = left.d;
				var _v7 = _v6.a;
				var llK = _v6.b;
				var llV = _v6.c;
				var llLeft = _v6.d;
				var llRight = _v6.e;
				var lRight = left.e;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Red,
					lK,
					lV,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, key, value, lRight, right));
			} else {
				return A5($elm$core$Dict$RBNode_elm_builtin, color, key, value, left, right);
			}
		}
	});
var $elm$core$Basics$compare = _Utils_compare;
var $elm$core$Dict$insertHelp = F3(
	function (key, value, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, $elm$core$Dict$RBEmpty_elm_builtin, $elm$core$Dict$RBEmpty_elm_builtin);
		} else {
			var nColor = dict.a;
			var nKey = dict.b;
			var nValue = dict.c;
			var nLeft = dict.d;
			var nRight = dict.e;
			var _v1 = A2($elm$core$Basics$compare, key, nKey);
			switch (_v1.$) {
				case 'LT':
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						A3($elm$core$Dict$insertHelp, key, value, nLeft),
						nRight);
				case 'EQ':
					return A5($elm$core$Dict$RBNode_elm_builtin, nColor, nKey, value, nLeft, nRight);
				default:
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						nLeft,
						A3($elm$core$Dict$insertHelp, key, value, nRight));
			}
		}
	});
var $elm$core$Dict$insert = F3(
	function (key, value, dict) {
		var _v0 = A3($elm$core$Dict$insertHelp, key, value, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$browser$Debugger$Main$cachedHistory = function (model) {
	var _v0 = model.state;
	if (_v0.$ === 'Running') {
		return model.history;
	} else {
		var history = _v0.e;
		return history;
	}
};
var $elm$virtual_dom$VirtualDom$node = function (tag) {
	return _VirtualDom_node(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$node = $elm$virtual_dom$VirtualDom$node;
var $elm$browser$Debugger$Main$DragEnd = {$: 'DragEnd'};
var $elm$browser$Debugger$Main$getDragStatus = function (layout) {
	if (layout.$ === 'Horizontal') {
		var status = layout.a;
		return status;
	} else {
		var status = layout.a;
		return status;
	}
};
var $elm$browser$Debugger$Main$Drag = function (a) {
	return {$: 'Drag', a: a};
};
var $elm$browser$Debugger$Main$DragInfo = F5(
	function (x, y, down, width, height) {
		return {down: down, height: height, width: width, x: x, y: y};
	});
var $elm$json$Json$Decode$field = _Json_decodeField;
var $elm$json$Json$Decode$at = F2(
	function (fields, decoder) {
		return A3($elm$core$List$foldr, $elm$json$Json$Decode$field, decoder, fields);
	});
var $elm$json$Json$Decode$float = _Json_decodeFloat;
var $elm$browser$Debugger$Main$decodeDimension = function (field) {
	return A2(
		$elm$json$Json$Decode$at,
		_List_fromArray(
			['currentTarget', 'ownerDocument', 'defaultView', field]),
		$elm$json$Json$Decode$float);
};
var $elm$json$Json$Decode$int = _Json_decodeInt;
var $elm$json$Json$Decode$map5 = _Json_map5;
var $elm$browser$Debugger$Main$onMouseMove = A2(
	$elm$html$Html$Events$on,
	'mousemove',
	A2(
		$elm$json$Json$Decode$map,
		$elm$browser$Debugger$Main$Drag,
		A6(
			$elm$json$Json$Decode$map5,
			$elm$browser$Debugger$Main$DragInfo,
			A2($elm$json$Json$Decode$field, 'pageX', $elm$json$Json$Decode$float),
			A2($elm$json$Json$Decode$field, 'pageY', $elm$json$Json$Decode$float),
			A2(
				$elm$json$Json$Decode$field,
				'buttons',
				A2(
					$elm$json$Json$Decode$map,
					function (v) {
						return v === 1;
					},
					$elm$json$Json$Decode$int)),
			$elm$browser$Debugger$Main$decodeDimension('innerWidth'),
			$elm$browser$Debugger$Main$decodeDimension('innerHeight'))));
var $elm$html$Html$Events$onMouseUp = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mouseup',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$browser$Debugger$Main$toDragListeners = function (layout) {
	var _v0 = $elm$browser$Debugger$Main$getDragStatus(layout);
	if (_v0.$ === 'Static') {
		return _List_Nil;
	} else {
		return _List_fromArray(
			[
				$elm$browser$Debugger$Main$onMouseMove,
				$elm$html$Html$Events$onMouseUp($elm$browser$Debugger$Main$DragEnd)
			]);
	}
};
var $elm$browser$Debugger$Main$toFlexDirection = function (layout) {
	if (layout.$ === 'Horizontal') {
		return 'row';
	} else {
		return 'column-reverse';
	}
};
var $elm$browser$Debugger$Main$DragStart = {$: 'DragStart'};
var $elm$html$Html$Events$onMouseDown = function (msg) {
	return A2(
		$elm$html$Html$Events$on,
		'mousedown',
		$elm$json$Json$Decode$succeed(msg));
};
var $elm$browser$Debugger$Main$toPercent = function (fraction) {
	return $elm$core$String$fromFloat(100 * fraction) + '%';
};
var $elm$browser$Debugger$Main$viewDragZone = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2($elm$html$Html$Attributes$style, 'top', '0'),
					A2(
					$elm$html$Html$Attributes$style,
					'left',
					$elm$browser$Debugger$Main$toPercent(x)),
					A2($elm$html$Html$Attributes$style, 'margin-left', '-5px'),
					A2($elm$html$Html$Attributes$style, 'width', '10px'),
					A2($elm$html$Html$Attributes$style, 'height', '100%'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'col-resize'),
					$elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
				]),
			_List_Nil);
	} else {
		var y = layout.c;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'position', 'absolute'),
					A2(
					$elm$html$Html$Attributes$style,
					'top',
					$elm$browser$Debugger$Main$toPercent(y)),
					A2($elm$html$Html$Attributes$style, 'left', '0'),
					A2($elm$html$Html$Attributes$style, 'margin-top', '-5px'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '10px'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'row-resize'),
					$elm$html$Html$Events$onMouseDown($elm$browser$Debugger$Main$DragStart)
				]),
			_List_Nil);
	}
};
var $elm$browser$Debugger$Main$TweakExpandoModel = function (a) {
	return {$: 'TweakExpandoModel', a: a};
};
var $elm$browser$Debugger$Main$TweakExpandoMsg = function (a) {
	return {$: 'TweakExpandoMsg', a: a};
};
var $elm$browser$Debugger$Main$toExpandoPercents = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return _Utils_Tuple2(
			$elm$browser$Debugger$Main$toPercent(1 - x),
			'100%');
	} else {
		var y = layout.c;
		return _Utils_Tuple2(
			'100%',
			$elm$browser$Debugger$Main$toPercent(y));
	}
};
var $elm$browser$Debugger$Main$toMouseBlocker = function (layout) {
	var _v0 = $elm$browser$Debugger$Main$getDragStatus(layout);
	if (_v0.$ === 'Static') {
		return 'auto';
	} else {
		return 'none';
	}
};
var $elm$browser$Debugger$Expando$Field = F2(
	function (a, b) {
		return {$: 'Field', a: a, b: b};
	});
var $elm$browser$Debugger$Expando$Index = F3(
	function (a, b, c) {
		return {$: 'Index', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Expando$Key = {$: 'Key'};
var $elm$browser$Debugger$Expando$None = {$: 'None'};
var $elm$browser$Debugger$Expando$Toggle = {$: 'Toggle'};
var $elm$browser$Debugger$Expando$Value = {$: 'Value'};
var $elm$browser$Debugger$Expando$blue = A2($elm$html$Html$Attributes$style, 'color', 'rgb(28, 0, 207)');
var $elm$core$Basics$composeL = F3(
	function (g, f, x) {
		return g(
			f(x));
	});
var $elm$browser$Debugger$Expando$leftPad = function (maybeKey) {
	if (maybeKey.$ === 'Nothing') {
		return _List_Nil;
	} else {
		return _List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'padding-left', '4ch')
			]);
	}
};
var $elm$browser$Debugger$Expando$makeArrow = function (arrow) {
	return A2(
		$elm$html$Html$span,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'color', '#777'),
				A2($elm$html$Html$Attributes$style, 'padding-left', '2ch'),
				A2($elm$html$Html$Attributes$style, 'width', '2ch'),
				A2($elm$html$Html$Attributes$style, 'display', 'inline-block')
			]),
		_List_fromArray(
			[
				$elm$html$Html$text(arrow)
			]));
};
var $elm$browser$Debugger$Expando$purple = A2($elm$html$Html$Attributes$style, 'color', 'rgb(136, 19, 145)');
var $elm$browser$Debugger$Expando$lineStarter = F3(
	function (maybeKey, maybeIsClosed, description) {
		var arrow = function () {
			if (maybeIsClosed.$ === 'Nothing') {
				return $elm$browser$Debugger$Expando$makeArrow('');
			} else {
				if (maybeIsClosed.a) {
					return $elm$browser$Debugger$Expando$makeArrow('▸');
				} else {
					return $elm$browser$Debugger$Expando$makeArrow('▾');
				}
			}
		}();
		if (maybeKey.$ === 'Nothing') {
			return A2($elm$core$List$cons, arrow, description);
		} else {
			var key = maybeKey.a;
			return A2(
				$elm$core$List$cons,
				arrow,
				A2(
					$elm$core$List$cons,
					A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$purple]),
						_List_fromArray(
							[
								$elm$html$Html$text(key)
							])),
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(' = '),
						description)));
		}
	});
var $elm$browser$Debugger$Expando$red = A2($elm$html$Html$Attributes$style, 'color', 'rgb(196, 26, 22)');
var $elm$core$Tuple$second = function (_v0) {
	var y = _v0.b;
	return y;
};
var $elm$browser$Debugger$Expando$seqTypeToString = F2(
	function (n, seqType) {
		switch (seqType.$) {
			case 'ListSeq':
				return 'List(' + ($elm$core$String$fromInt(n) + ')');
			case 'SetSeq':
				return 'Set(' + ($elm$core$String$fromInt(n) + ')');
			default:
				return 'Array(' + ($elm$core$String$fromInt(n) + ')');
		}
	});
var $elm$core$String$slice = _String_slice;
var $elm$core$String$left = F2(
	function (n, string) {
		return (n < 1) ? '' : A3($elm$core$String$slice, 0, n, string);
	});
var $elm$core$String$right = F2(
	function (n, string) {
		return (n < 1) ? '' : A3(
			$elm$core$String$slice,
			-n,
			$elm$core$String$length(string),
			string);
	});
var $elm$browser$Debugger$Expando$elideMiddle = function (str) {
	return ($elm$core$String$length(str) <= 18) ? str : (A2($elm$core$String$left, 8, str) + ('...' + A2($elm$core$String$right, 8, str)));
};
var $elm$core$Dict$isEmpty = function (dict) {
	if (dict.$ === 'RBEmpty_elm_builtin') {
		return true;
	} else {
		return false;
	}
};
var $elm$browser$Debugger$Expando$viewExtraTinyRecord = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 1,
				_List_fromArray(
					[
						$elm$html$Html$text('}')
					]));
		} else {
			var field = entries.a;
			var rest = entries.b;
			var nextLength = (length + $elm$core$String$length(field)) + 1;
			if (nextLength > 18) {
				return _Utils_Tuple2(
					length + 2,
					_List_fromArray(
						[
							$elm$html$Html$text('…}')
						]));
			} else {
				var _v1 = A3($elm$browser$Debugger$Expando$viewExtraTinyRecord, nextLength, ',', rest);
				var finalLength = _v1.a;
				var otherHtmls = _v1.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(starter),
						A2(
							$elm$core$List$cons,
							A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										$elm$html$Html$text(field)
									])),
							otherHtmls)));
			}
		}
	});
var $elm$browser$Debugger$Expando$viewTinyHelp = function (str) {
	return _Utils_Tuple2(
		$elm$core$String$length(str),
		_List_fromArray(
			[
				$elm$html$Html$text(str)
			]));
};
var $elm$core$Maybe$withDefault = F2(
	function (_default, maybe) {
		if (maybe.$ === 'Just') {
			var value = maybe.a;
			return value;
		} else {
			return _default;
		}
	});
var $elm$browser$Debugger$Expando$viewExtraTiny = function (value) {
	if (value.$ === 'Record') {
		var record = value.b;
		return A3(
			$elm$browser$Debugger$Expando$viewExtraTinyRecord,
			0,
			'{',
			$elm$core$Dict$keys(record));
	} else {
		return $elm$browser$Debugger$Expando$viewTiny(value);
	}
};
var $elm$browser$Debugger$Expando$viewTiny = function (value) {
	switch (value.$) {
		case 'S':
			var stringRep = value.a;
			var str = $elm$browser$Debugger$Expando$elideMiddle(stringRep);
			return _Utils_Tuple2(
				$elm$core$String$length(str),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$red]),
						_List_fromArray(
							[
								$elm$html$Html$text(str)
							]))
					]));
		case 'Primitive':
			var stringRep = value.a;
			return _Utils_Tuple2(
				$elm$core$String$length(stringRep),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$span,
						_List_fromArray(
							[$elm$browser$Debugger$Expando$blue]),
						_List_fromArray(
							[
								$elm$html$Html$text(stringRep)
							]))
					]));
		case 'Sequence':
			var seqType = value.a;
			var valueList = value.c;
			return $elm$browser$Debugger$Expando$viewTinyHelp(
				A2(
					$elm$browser$Debugger$Expando$seqTypeToString,
					$elm$core$List$length(valueList),
					seqType));
		case 'Dictionary':
			var keyValuePairs = value.b;
			return $elm$browser$Debugger$Expando$viewTinyHelp(
				'Dict(' + ($elm$core$String$fromInt(
					$elm$core$List$length(keyValuePairs)) + ')'));
		case 'Record':
			var record = value.b;
			return $elm$browser$Debugger$Expando$viewTinyRecord(record);
		default:
			if (!value.c.b) {
				var maybeName = value.a;
				return $elm$browser$Debugger$Expando$viewTinyHelp(
					A2($elm$core$Maybe$withDefault, 'Unit', maybeName));
			} else {
				var maybeName = value.a;
				var valueList = value.c;
				return $elm$browser$Debugger$Expando$viewTinyHelp(
					function () {
						if (maybeName.$ === 'Nothing') {
							return 'Tuple(' + ($elm$core$String$fromInt(
								$elm$core$List$length(valueList)) + ')');
						} else {
							var name = maybeName.a;
							return name + ' …';
						}
					}());
			}
	}
};
var $elm$browser$Debugger$Expando$viewTinyRecord = function (record) {
	return $elm$core$Dict$isEmpty(record) ? _Utils_Tuple2(
		2,
		_List_fromArray(
			[
				$elm$html$Html$text('{}')
			])) : A3(
		$elm$browser$Debugger$Expando$viewTinyRecordHelp,
		0,
		'{ ',
		$elm$core$Dict$toList(record));
};
var $elm$browser$Debugger$Expando$viewTinyRecordHelp = F3(
	function (length, starter, entries) {
		if (!entries.b) {
			return _Utils_Tuple2(
				length + 2,
				_List_fromArray(
					[
						$elm$html$Html$text(' }')
					]));
		} else {
			var _v1 = entries.a;
			var field = _v1.a;
			var value = _v1.b;
			var rest = entries.b;
			var fieldLen = $elm$core$String$length(field);
			var _v2 = $elm$browser$Debugger$Expando$viewExtraTiny(value);
			var valueLen = _v2.a;
			var valueHtmls = _v2.b;
			var newLength = ((length + fieldLen) + valueLen) + 5;
			if (newLength > 60) {
				return _Utils_Tuple2(
					length + 4,
					_List_fromArray(
						[
							$elm$html$Html$text(', … }')
						]));
			} else {
				var _v3 = A3($elm$browser$Debugger$Expando$viewTinyRecordHelp, newLength, ', ', rest);
				var finalLength = _v3.a;
				var otherHtmls = _v3.b;
				return _Utils_Tuple2(
					finalLength,
					A2(
						$elm$core$List$cons,
						$elm$html$Html$text(starter),
						A2(
							$elm$core$List$cons,
							A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$purple]),
								_List_fromArray(
									[
										$elm$html$Html$text(field)
									])),
							A2(
								$elm$core$List$cons,
								$elm$html$Html$text(' = '),
								A2(
									$elm$core$List$cons,
									A2($elm$html$Html$span, _List_Nil, valueHtmls),
									otherHtmls)))));
			}
		}
	});
var $elm$browser$Debugger$Expando$view = F2(
	function (maybeKey, expando) {
		switch (expando.$) {
			case 'S':
				var stringRep = expando.a;
				return A2(
					$elm$html$Html$div,
					$elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$red]),
								_List_fromArray(
									[
										$elm$html$Html$text(stringRep)
									]))
							])));
			case 'Primitive':
				var stringRep = expando.a;
				return A2(
					$elm$html$Html$div,
					$elm$browser$Debugger$Expando$leftPad(maybeKey),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Nothing,
						_List_fromArray(
							[
								A2(
								$elm$html$Html$span,
								_List_fromArray(
									[$elm$browser$Debugger$Expando$blue]),
								_List_fromArray(
									[
										$elm$html$Html$text(stringRep)
									]))
							])));
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4($elm$browser$Debugger$Expando$viewSequence, maybeKey, seqType, isClosed, valueList);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return A3($elm$browser$Debugger$Expando$viewDictionary, maybeKey, isClosed, keyValuePairs);
			case 'Record':
				var isClosed = expando.a;
				var valueDict = expando.b;
				return A3($elm$browser$Debugger$Expando$viewRecord, maybeKey, isClosed, valueDict);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var valueList = expando.c;
				return A4($elm$browser$Debugger$Expando$viewConstructor, maybeKey, maybeName, isClosed, valueList);
		}
	});
var $elm$browser$Debugger$Expando$viewConstructor = F4(
	function (maybeKey, maybeName, isClosed, valueList) {
		var tinyArgs = A2(
			$elm$core$List$map,
			A2($elm$core$Basics$composeL, $elm$core$Tuple$second, $elm$browser$Debugger$Expando$viewExtraTiny),
			valueList);
		var description = function () {
			var _v7 = _Utils_Tuple2(maybeName, tinyArgs);
			if (_v7.a.$ === 'Nothing') {
				if (!_v7.b.b) {
					var _v8 = _v7.a;
					return _List_fromArray(
						[
							$elm$html$Html$text('()')
						]);
				} else {
					var _v9 = _v7.a;
					var _v10 = _v7.b;
					var x = _v10.a;
					var xs = _v10.b;
					return A2(
						$elm$core$List$cons,
						$elm$html$Html$text('( '),
						A2(
							$elm$core$List$cons,
							A2($elm$html$Html$span, _List_Nil, x),
							A3(
								$elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											$elm$core$List$cons,
											$elm$html$Html$text(', '),
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_fromArray(
									[
										$elm$html$Html$text(' )')
									]),
								xs)));
				}
			} else {
				if (!_v7.b.b) {
					var name = _v7.a.a;
					return _List_fromArray(
						[
							$elm$html$Html$text(name)
						]);
				} else {
					var name = _v7.a.a;
					var _v11 = _v7.b;
					var x = _v11.a;
					var xs = _v11.b;
					return A2(
						$elm$core$List$cons,
						$elm$html$Html$text(name + ' '),
						A2(
							$elm$core$List$cons,
							A2($elm$html$Html$span, _List_Nil, x),
							A3(
								$elm$core$List$foldr,
								F2(
									function (args, rest) {
										return A2(
											$elm$core$List$cons,
											$elm$html$Html$text(' '),
											A2(
												$elm$core$List$cons,
												A2($elm$html$Html$span, _List_Nil, args),
												rest));
									}),
								_List_Nil,
								xs)));
				}
			}
		}();
		var _v4 = function () {
			if (!valueList.b) {
				return _Utils_Tuple2(
					$elm$core$Maybe$Nothing,
					A2($elm$html$Html$div, _List_Nil, _List_Nil));
			} else {
				if (!valueList.b.b) {
					var entry = valueList.a;
					switch (entry.$) {
						case 'S':
							return _Utils_Tuple2(
								$elm$core$Maybe$Nothing,
								A2($elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Primitive':
							return _Utils_Tuple2(
								$elm$core$Maybe$Nothing,
								A2($elm$html$Html$div, _List_Nil, _List_Nil));
						case 'Sequence':
							var subValueList = entry.c;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewSequenceOpen(subValueList)));
						case 'Dictionary':
							var keyValuePairs = entry.b;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)));
						case 'Record':
							var record = entry.b;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewRecordOpen(record)));
						default:
							var subValueList = entry.c;
							return _Utils_Tuple2(
								$elm$core$Maybe$Just(isClosed),
								isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : A2(
									$elm$html$Html$map,
									A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, 0),
									$elm$browser$Debugger$Expando$viewConstructorOpen(subValueList)));
					}
				} else {
					return _Utils_Tuple2(
						$elm$core$Maybe$Just(isClosed),
						isClosed ? A2($elm$html$Html$div, _List_Nil, _List_Nil) : $elm$browser$Debugger$Expando$viewConstructorOpen(valueList));
				}
			}
		}();
		var maybeIsClosed = _v4.a;
		var openHtml = _v4.b;
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3($elm$browser$Debugger$Expando$lineStarter, maybeKey, maybeIsClosed, description)),
					openHtml
				]));
	});
var $elm$browser$Debugger$Expando$viewConstructorEntry = F2(
	function (index, value) {
		return A2(
			$elm$html$Html$map,
			A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$None, index),
			A2(
				$elm$browser$Debugger$Expando$view,
				$elm$core$Maybe$Just(
					$elm$core$String$fromInt(index)),
				value));
	});
var $elm$browser$Debugger$Expando$viewConstructorOpen = function (valueList) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, valueList));
};
var $elm$browser$Debugger$Expando$viewDictionary = F3(
	function (maybeKey, isClosed, keyValuePairs) {
		var starter = 'Dict(' + ($elm$core$String$fromInt(
			$elm$core$List$length(keyValuePairs)) + ')');
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								$elm$html$Html$text(starter)
							]))),
					isClosed ? $elm$html$Html$text('') : $elm$browser$Debugger$Expando$viewDictionaryOpen(keyValuePairs)
				]));
	});
var $elm$browser$Debugger$Expando$viewDictionaryEntry = F2(
	function (index, _v2) {
		var key = _v2.a;
		var value = _v2.b;
		switch (key.$) {
			case 'S':
				var stringRep = key.a;
				return A2(
					$elm$html$Html$map,
					A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
					A2(
						$elm$browser$Debugger$Expando$view,
						$elm$core$Maybe$Just(stringRep),
						value));
			case 'Primitive':
				var stringRep = key.a;
				return A2(
					$elm$html$Html$map,
					A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
					A2(
						$elm$browser$Debugger$Expando$view,
						$elm$core$Maybe$Just(stringRep),
						value));
			default:
				return A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$map,
							A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Key, index),
							A2(
								$elm$browser$Debugger$Expando$view,
								$elm$core$Maybe$Just('key'),
								key)),
							A2(
							$elm$html$Html$map,
							A2($elm$browser$Debugger$Expando$Index, $elm$browser$Debugger$Expando$Value, index),
							A2(
								$elm$browser$Debugger$Expando$view,
								$elm$core$Maybe$Just('value'),
								value))
						]));
		}
	});
var $elm$browser$Debugger$Expando$viewDictionaryOpen = function (keyValuePairs) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewDictionaryEntry, keyValuePairs));
};
var $elm$browser$Debugger$Expando$viewRecord = F3(
	function (maybeKey, isClosed, record) {
		var _v1 = isClosed ? _Utils_Tuple3(
			$elm$browser$Debugger$Expando$viewTinyRecord(record).b,
			$elm$html$Html$text(''),
			$elm$html$Html$text('')) : _Utils_Tuple3(
			_List_fromArray(
				[
					$elm$html$Html$text('{')
				]),
			$elm$browser$Debugger$Expando$viewRecordOpen(record),
			A2(
				$elm$html$Html$div,
				$elm$browser$Debugger$Expando$leftPad(
					$elm$core$Maybe$Just(_Utils_Tuple0)),
				_List_fromArray(
					[
						$elm$html$Html$text('}')
					])));
		var start = _v1.a;
		var middle = _v1.b;
		var end = _v1.c;
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						start)),
					middle,
					end
				]));
	});
var $elm$browser$Debugger$Expando$viewRecordEntry = function (_v0) {
	var field = _v0.a;
	var value = _v0.b;
	return A2(
		$elm$html$Html$map,
		$elm$browser$Debugger$Expando$Field(field),
		A2(
			$elm$browser$Debugger$Expando$view,
			$elm$core$Maybe$Just(field),
			value));
};
var $elm$browser$Debugger$Expando$viewRecordOpen = function (record) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2(
			$elm$core$List$map,
			$elm$browser$Debugger$Expando$viewRecordEntry,
			$elm$core$Dict$toList(record)));
};
var $elm$browser$Debugger$Expando$viewSequence = F4(
	function (maybeKey, seqType, isClosed, valueList) {
		var starter = A2(
			$elm$browser$Debugger$Expando$seqTypeToString,
			$elm$core$List$length(valueList),
			seqType);
		return A2(
			$elm$html$Html$div,
			$elm$browser$Debugger$Expando$leftPad(maybeKey),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($elm$browser$Debugger$Expando$Toggle)
						]),
					A3(
						$elm$browser$Debugger$Expando$lineStarter,
						maybeKey,
						$elm$core$Maybe$Just(isClosed),
						_List_fromArray(
							[
								$elm$html$Html$text(starter)
							]))),
					isClosed ? $elm$html$Html$text('') : $elm$browser$Debugger$Expando$viewSequenceOpen(valueList)
				]));
	});
var $elm$browser$Debugger$Expando$viewSequenceOpen = function (values) {
	return A2(
		$elm$html$Html$div,
		_List_Nil,
		A2($elm$core$List$indexedMap, $elm$browser$Debugger$Expando$viewConstructorEntry, values));
};
var $elm$browser$Debugger$Main$viewExpando = F3(
	function (expandoMsg, expandoModel, layout) {
		var block = $elm$browser$Debugger$Main$toMouseBlocker(layout);
		var _v0 = $elm$browser$Debugger$Main$toExpandoPercents(layout);
		var w = _v0.a;
		var h = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'block'),
					A2($elm$html$Html$Attributes$style, 'width', 'calc(' + (w + ' - 4em)')),
					A2($elm$html$Html$Attributes$style, 'height', 'calc(' + (h + ' - 4em)')),
					A2($elm$html$Html$Attributes$style, 'padding', '2em'),
					A2($elm$html$Html$Attributes$style, 'margin', '0'),
					A2($elm$html$Html$Attributes$style, 'overflow', 'auto'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', block),
					A2($elm$html$Html$Attributes$style, '-webkit-user-select', block),
					A2($elm$html$Html$Attributes$style, '-moz-user-select', block),
					A2($elm$html$Html$Attributes$style, '-ms-user-select', block),
					A2($elm$html$Html$Attributes$style, 'user-select', block)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'color', '#ccc'),
							A2($elm$html$Html$Attributes$style, 'padding', '0 0 1em 0')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('-- MESSAGE')
						])),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$TweakExpandoMsg,
					A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoMsg)),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'color', '#ccc'),
							A2($elm$html$Html$Attributes$style, 'padding', '1em 0')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('-- MODEL')
						])),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$TweakExpandoModel,
					A2($elm$browser$Debugger$Expando$view, $elm$core$Maybe$Nothing, expandoModel))
				]));
	});
var $elm$browser$Debugger$Main$Jump = function (a) {
	return {$: 'Jump', a: a};
};
var $elm$virtual_dom$VirtualDom$lazy = _VirtualDom_lazy;
var $elm$html$Html$Lazy$lazy = $elm$virtual_dom$VirtualDom$lazy;
var $elm$browser$Debugger$Main$toHistoryPercents = function (layout) {
	if (layout.$ === 'Horizontal') {
		var x = layout.b;
		return _Utils_Tuple2(
			$elm$browser$Debugger$Main$toPercent(x),
			'100%');
	} else {
		var y = layout.c;
		return _Utils_Tuple2(
			'100%',
			$elm$browser$Debugger$Main$toPercent(1 - y));
	}
};
var $elm$virtual_dom$VirtualDom$lazy3 = _VirtualDom_lazy3;
var $elm$html$Html$Lazy$lazy3 = $elm$virtual_dom$VirtualDom$lazy3;
var $elm$html$Html$Attributes$class = $elm$html$Html$Attributes$stringProperty('className');
var $elm$browser$Debugger$History$idForMessageIndex = function (index) {
	return 'msg-' + $elm$core$String$fromInt(index);
};
var $elm$html$Html$Attributes$title = $elm$html$Html$Attributes$stringProperty('title');
var $elm$browser$Debugger$History$viewMessage = F3(
	function (currentIndex, index, msg) {
		var messageName = _Debugger_messageToString(msg);
		var className = _Utils_eq(currentIndex, index) ? 'elm-debugger-entry elm-debugger-entry-selected' : 'elm-debugger-entry';
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id(
					$elm$browser$Debugger$History$idForMessageIndex(index)),
					$elm$html$Html$Attributes$class(className),
					$elm$html$Html$Events$onClick(index)
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$title(messageName),
							$elm$html$Html$Attributes$class('elm-debugger-entry-content')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(messageName)
						])),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('elm-debugger-entry-index')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(
							$elm$core$String$fromInt(index))
						]))
				]));
	});
var $elm$browser$Debugger$History$consMsg = F3(
	function (currentIndex, msg, _v0) {
		var index = _v0.a;
		var rest = _v0.b;
		return _Utils_Tuple2(
			index + 1,
			A2(
				$elm$core$List$cons,
				_Utils_Tuple2(
					$elm$core$String$fromInt(index),
					A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewMessage, currentIndex, index, msg)),
				rest));
	});
var $elm$core$Array$length = function (_v0) {
	var len = _v0.a;
	return len;
};
var $elm$core$Basics$neq = _Utils_notEqual;
var $elm$virtual_dom$VirtualDom$keyedNode = function (tag) {
	return _VirtualDom_keyedNode(
		_VirtualDom_noScript(tag));
};
var $elm$html$Html$Keyed$node = $elm$virtual_dom$VirtualDom$keyedNode;
var $elm$browser$Debugger$History$maxSnapshotSize = 31;
var $elm$browser$Debugger$History$showMoreButton = function (numMessages) {
	var nextIndex = (numMessages - 1) - ($elm$browser$Debugger$History$maxSnapshotSize * 2);
	var labelText = 'View more messages';
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('elm-debugger-entry'),
				$elm$html$Html$Events$onClick(nextIndex)
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$title(labelText),
						$elm$html$Html$Attributes$class('elm-debugger-entry-content')
					]),
				_List_fromArray(
					[
						$elm$html$Html$text(labelText)
					])),
				A2(
				$elm$html$Html$span,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('elm-debugger-entry-index')
					]),
				_List_Nil)
			]));
};
var $elm$browser$Debugger$History$styles = A3(
	$elm$html$Html$node,
	'style',
	_List_Nil,
	_List_fromArray(
		[
			$elm$html$Html$text('\n\n.elm-debugger-entry {\n  cursor: pointer;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 8px;\n}\n\n.elm-debugger-entry:hover {\n  background-color: rgb(41, 41, 41);\n}\n\n.elm-debugger-entry-selected, .elm-debugger-entry-selected:hover {\n  background-color: rgb(10, 10, 10);\n}\n\n.elm-debugger-entry-content {\n  width: calc(100% - 40px);\n  padding: 0 5px;\n  box-sizing: border-box;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  display: inline-block;\n}\n\n.elm-debugger-entry-index {\n  color: #666;\n  width: 40px;\n  text-align: right;\n  display: block;\n  float: right;\n}\n\n')
		]));
var $elm$core$Basics$ge = _Utils_ge;
var $elm$browser$Debugger$History$viewSnapshot = F3(
	function (selectedIndex, index, _v0) {
		var messages = _v0.messages;
		return A3(
			$elm$html$Html$Keyed$node,
			'div',
			_List_Nil,
			A3(
				$elm$core$Array$foldr,
				$elm$browser$Debugger$History$consMsg(selectedIndex),
				_Utils_Tuple2(index, _List_Nil),
				messages).b);
	});
var $elm$browser$Debugger$History$consSnapshot = F3(
	function (selectedIndex, snapshot, _v0) {
		var index = _v0.a;
		var rest = _v0.b;
		var nextIndex = index + $elm$core$Array$length(snapshot.messages);
		var selectedIndexHelp = ((_Utils_cmp(nextIndex, selectedIndex) > 0) && (_Utils_cmp(selectedIndex, index) > -1)) ? selectedIndex : (-1);
		return _Utils_Tuple2(
			nextIndex,
			A2(
				$elm$core$List$cons,
				A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewSnapshot, selectedIndexHelp, index, snapshot),
				rest));
	});
var $elm$core$Elm$JsArray$foldl = _JsArray_foldl;
var $elm$core$Array$foldl = F3(
	function (func, baseCase, _v0) {
		var tree = _v0.c;
		var tail = _v0.d;
		var helper = F2(
			function (node, acc) {
				if (node.$ === 'SubTree') {
					var subTree = node.a;
					return A3($elm$core$Elm$JsArray$foldl, helper, acc, subTree);
				} else {
					var values = node.a;
					return A3($elm$core$Elm$JsArray$foldl, func, acc, values);
				}
			});
		return A3(
			$elm$core$Elm$JsArray$foldl,
			func,
			A3($elm$core$Elm$JsArray$foldl, helper, baseCase, tree),
			tail);
	});
var $elm$browser$Debugger$History$viewAllSnapshots = F3(
	function (selectedIndex, startIndex, snapshots) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			A3(
				$elm$core$Array$foldl,
				$elm$browser$Debugger$History$consSnapshot(selectedIndex),
				_Utils_Tuple2(startIndex, _List_Nil),
				snapshots).b);
	});
var $elm$core$Array$fromListHelp = F3(
	function (list, nodeList, nodeListSize) {
		fromListHelp:
		while (true) {
			var _v0 = A2($elm$core$Elm$JsArray$initializeFromList, $elm$core$Array$branchFactor, list);
			var jsArray = _v0.a;
			var remainingItems = _v0.b;
			if (_Utils_cmp(
				$elm$core$Elm$JsArray$length(jsArray),
				$elm$core$Array$branchFactor) < 0) {
				return A2(
					$elm$core$Array$builderToArray,
					true,
					{nodeList: nodeList, nodeListSize: nodeListSize, tail: jsArray});
			} else {
				var $temp$list = remainingItems,
					$temp$nodeList = A2(
					$elm$core$List$cons,
					$elm$core$Array$Leaf(jsArray),
					nodeList),
					$temp$nodeListSize = nodeListSize + 1;
				list = $temp$list;
				nodeList = $temp$nodeList;
				nodeListSize = $temp$nodeListSize;
				continue fromListHelp;
			}
		}
	});
var $elm$core$Array$fromList = function (list) {
	if (!list.b) {
		return $elm$core$Array$empty;
	} else {
		return A3($elm$core$Array$fromListHelp, list, _List_Nil, 0);
	}
};
var $elm$core$Bitwise$and = _Bitwise_and;
var $elm$core$Bitwise$shiftRightZfBy = _Bitwise_shiftRightZfBy;
var $elm$core$Array$bitMask = 4294967295 >>> (32 - $elm$core$Array$shiftStep);
var $elm$core$Elm$JsArray$unsafeGet = _JsArray_unsafeGet;
var $elm$core$Array$getHelp = F3(
	function (shift, index, tree) {
		getHelp:
		while (true) {
			var pos = $elm$core$Array$bitMask & (index >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var subTree = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$index = index,
					$temp$tree = subTree;
				shift = $temp$shift;
				index = $temp$index;
				tree = $temp$tree;
				continue getHelp;
			} else {
				var values = _v0.a;
				return A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, values);
			}
		}
	});
var $elm$core$Bitwise$shiftLeftBy = _Bitwise_shiftLeftBy;
var $elm$core$Array$tailIndex = function (len) {
	return (len >>> 5) << 5;
};
var $elm$core$Array$get = F2(
	function (index, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		return ((index < 0) || (_Utils_cmp(index, len) > -1)) ? $elm$core$Maybe$Nothing : ((_Utils_cmp(
			index,
			$elm$core$Array$tailIndex(len)) > -1) ? $elm$core$Maybe$Just(
			A2($elm$core$Elm$JsArray$unsafeGet, $elm$core$Array$bitMask & index, tail)) : $elm$core$Maybe$Just(
			A3($elm$core$Array$getHelp, startShift, index, tree)));
	});
var $elm$core$Elm$JsArray$appendN = _JsArray_appendN;
var $elm$core$Elm$JsArray$slice = _JsArray_slice;
var $elm$core$Array$appendHelpBuilder = F2(
	function (tail, builder) {
		var tailLen = $elm$core$Elm$JsArray$length(tail);
		var notAppended = ($elm$core$Array$branchFactor - $elm$core$Elm$JsArray$length(builder.tail)) - tailLen;
		var appended = A3($elm$core$Elm$JsArray$appendN, $elm$core$Array$branchFactor, builder.tail, tail);
		return (notAppended < 0) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: A3($elm$core$Elm$JsArray$slice, notAppended, tailLen, tail)
		} : ((!notAppended) ? {
			nodeList: A2(
				$elm$core$List$cons,
				$elm$core$Array$Leaf(appended),
				builder.nodeList),
			nodeListSize: builder.nodeListSize + 1,
			tail: $elm$core$Elm$JsArray$empty
		} : {nodeList: builder.nodeList, nodeListSize: builder.nodeListSize, tail: appended});
	});
var $elm$core$List$drop = F2(
	function (n, list) {
		drop:
		while (true) {
			if (n <= 0) {
				return list;
			} else {
				if (!list.b) {
					return list;
				} else {
					var x = list.a;
					var xs = list.b;
					var $temp$n = n - 1,
						$temp$list = xs;
					n = $temp$n;
					list = $temp$list;
					continue drop;
				}
			}
		}
	});
var $elm$core$Array$sliceLeft = F2(
	function (from, array) {
		var len = array.a;
		var tree = array.c;
		var tail = array.d;
		if (!from) {
			return array;
		} else {
			if (_Utils_cmp(
				from,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					len - from,
					$elm$core$Array$shiftStep,
					$elm$core$Elm$JsArray$empty,
					A3(
						$elm$core$Elm$JsArray$slice,
						from - $elm$core$Array$tailIndex(len),
						$elm$core$Elm$JsArray$length(tail),
						tail));
			} else {
				var skipNodes = (from / $elm$core$Array$branchFactor) | 0;
				var helper = F2(
					function (node, acc) {
						if (node.$ === 'SubTree') {
							var subTree = node.a;
							return A3($elm$core$Elm$JsArray$foldr, helper, acc, subTree);
						} else {
							var leaf = node.a;
							return A2($elm$core$List$cons, leaf, acc);
						}
					});
				var leafNodes = A3(
					$elm$core$Elm$JsArray$foldr,
					helper,
					_List_fromArray(
						[tail]),
					tree);
				var nodesToInsert = A2($elm$core$List$drop, skipNodes, leafNodes);
				if (!nodesToInsert.b) {
					return $elm$core$Array$empty;
				} else {
					var head = nodesToInsert.a;
					var rest = nodesToInsert.b;
					var firstSlice = from - (skipNodes * $elm$core$Array$branchFactor);
					var initialBuilder = {
						nodeList: _List_Nil,
						nodeListSize: 0,
						tail: A3(
							$elm$core$Elm$JsArray$slice,
							firstSlice,
							$elm$core$Elm$JsArray$length(head),
							head)
					};
					return A2(
						$elm$core$Array$builderToArray,
						true,
						A3($elm$core$List$foldl, $elm$core$Array$appendHelpBuilder, initialBuilder, rest));
				}
			}
		}
	});
var $elm$core$Array$fetchNewTail = F4(
	function (shift, end, treeEnd, tree) {
		fetchNewTail:
		while (true) {
			var pos = $elm$core$Array$bitMask & (treeEnd >>> shift);
			var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (_v0.$ === 'SubTree') {
				var sub = _v0.a;
				var $temp$shift = shift - $elm$core$Array$shiftStep,
					$temp$end = end,
					$temp$treeEnd = treeEnd,
					$temp$tree = sub;
				shift = $temp$shift;
				end = $temp$end;
				treeEnd = $temp$treeEnd;
				tree = $temp$tree;
				continue fetchNewTail;
			} else {
				var values = _v0.a;
				return A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, values);
			}
		}
	});
var $elm$core$Array$hoistTree = F3(
	function (oldShift, newShift, tree) {
		hoistTree:
		while (true) {
			if ((_Utils_cmp(oldShift, newShift) < 1) || (!$elm$core$Elm$JsArray$length(tree))) {
				return tree;
			} else {
				var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, 0, tree);
				if (_v0.$ === 'SubTree') {
					var sub = _v0.a;
					var $temp$oldShift = oldShift - $elm$core$Array$shiftStep,
						$temp$newShift = newShift,
						$temp$tree = sub;
					oldShift = $temp$oldShift;
					newShift = $temp$newShift;
					tree = $temp$tree;
					continue hoistTree;
				} else {
					return tree;
				}
			}
		}
	});
var $elm$core$Elm$JsArray$unsafeSet = _JsArray_unsafeSet;
var $elm$core$Array$sliceTree = F3(
	function (shift, endIdx, tree) {
		var lastPos = $elm$core$Array$bitMask & (endIdx >>> shift);
		var _v0 = A2($elm$core$Elm$JsArray$unsafeGet, lastPos, tree);
		if (_v0.$ === 'SubTree') {
			var sub = _v0.a;
			var newSub = A3($elm$core$Array$sliceTree, shift - $elm$core$Array$shiftStep, endIdx, sub);
			return (!$elm$core$Elm$JsArray$length(newSub)) ? A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree) : A3(
				$elm$core$Elm$JsArray$unsafeSet,
				lastPos,
				$elm$core$Array$SubTree(newSub),
				A3($elm$core$Elm$JsArray$slice, 0, lastPos + 1, tree));
		} else {
			return A3($elm$core$Elm$JsArray$slice, 0, lastPos, tree);
		}
	});
var $elm$core$Array$sliceRight = F2(
	function (end, array) {
		var len = array.a;
		var startShift = array.b;
		var tree = array.c;
		var tail = array.d;
		if (_Utils_eq(end, len)) {
			return array;
		} else {
			if (_Utils_cmp(
				end,
				$elm$core$Array$tailIndex(len)) > -1) {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					startShift,
					tree,
					A3($elm$core$Elm$JsArray$slice, 0, $elm$core$Array$bitMask & end, tail));
			} else {
				var endIdx = $elm$core$Array$tailIndex(end);
				var depth = $elm$core$Basics$floor(
					A2(
						$elm$core$Basics$logBase,
						$elm$core$Array$branchFactor,
						A2($elm$core$Basics$max, 1, endIdx - 1)));
				var newShift = A2($elm$core$Basics$max, 5, depth * $elm$core$Array$shiftStep);
				return A4(
					$elm$core$Array$Array_elm_builtin,
					end,
					newShift,
					A3(
						$elm$core$Array$hoistTree,
						startShift,
						newShift,
						A3($elm$core$Array$sliceTree, startShift, endIdx, tree)),
					A4($elm$core$Array$fetchNewTail, startShift, end, endIdx, tree));
			}
		}
	});
var $elm$core$Array$translateIndex = F2(
	function (index, _v0) {
		var len = _v0.a;
		var posIndex = (index < 0) ? (len + index) : index;
		return (posIndex < 0) ? 0 : ((_Utils_cmp(posIndex, len) > 0) ? len : posIndex);
	});
var $elm$core$Array$slice = F3(
	function (from, to, array) {
		var correctTo = A2($elm$core$Array$translateIndex, to, array);
		var correctFrom = A2($elm$core$Array$translateIndex, from, array);
		return (_Utils_cmp(correctFrom, correctTo) > 0) ? $elm$core$Array$empty : A2(
			$elm$core$Array$sliceLeft,
			correctFrom,
			A2($elm$core$Array$sliceRight, correctTo, array));
	});
var $elm$browser$Debugger$History$viewRecentSnapshots = F3(
	function (selectedIndex, recentMessagesNum, snapshots) {
		var messagesToFill = $elm$browser$Debugger$History$maxSnapshotSize - recentMessagesNum;
		var arrayLength = $elm$core$Array$length(snapshots);
		var snapshotsToRender = function () {
			var _v0 = _Utils_Tuple2(
				A2($elm$core$Array$get, arrayLength - 2, snapshots),
				A2($elm$core$Array$get, arrayLength - 1, snapshots));
			if ((_v0.a.$ === 'Just') && (_v0.b.$ === 'Just')) {
				var fillerSnapshot = _v0.a.a;
				var recentSnapshot = _v0.b.a;
				return $elm$core$Array$fromList(
					_List_fromArray(
						[
							{
							messages: A3($elm$core$Array$slice, 0, messagesToFill, fillerSnapshot.messages),
							model: fillerSnapshot.model
						},
							recentSnapshot
						]));
			} else {
				return snapshots;
			}
		}();
		var startingIndex = ((arrayLength * $elm$browser$Debugger$History$maxSnapshotSize) - $elm$browser$Debugger$History$maxSnapshotSize) - messagesToFill;
		return A3($elm$browser$Debugger$History$viewAllSnapshots, selectedIndex, startingIndex, snapshotsToRender);
	});
var $elm$browser$Debugger$History$view = F2(
	function (maybeIndex, _v0) {
		var snapshots = _v0.snapshots;
		var recent = _v0.recent;
		var numMessages = _v0.numMessages;
		var recentMessageStartIndex = numMessages - recent.numMessages;
		var index = A2($elm$core$Maybe$withDefault, -1, maybeIndex);
		var newStuff = A3(
			$elm$html$Html$Keyed$node,
			'div',
			_List_Nil,
			A3(
				$elm$core$List$foldr,
				$elm$browser$Debugger$History$consMsg(index),
				_Utils_Tuple2(recentMessageStartIndex, _List_Nil),
				recent.messages).b);
		var onlyRenderRecentMessages = (!_Utils_eq(index, -1)) || ($elm$core$Array$length(snapshots) < 2);
		var oldStuff = onlyRenderRecentMessages ? A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewAllSnapshots, index, 0, snapshots) : A4($elm$html$Html$Lazy$lazy3, $elm$browser$Debugger$History$viewRecentSnapshots, index, recent.numMessages, snapshots);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$id('elm-debugger-sidebar'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'overflow-y', 'auto'),
					A2($elm$html$Html$Attributes$style, 'height', 'calc(100% - 72px)')
				]),
			A2(
				$elm$core$List$cons,
				$elm$browser$Debugger$History$styles,
				A2(
					$elm$core$List$cons,
					newStuff,
					A2(
						$elm$core$List$cons,
						oldStuff,
						onlyRenderRecentMessages ? _List_Nil : _List_fromArray(
							[
								$elm$browser$Debugger$History$showMoreButton(numMessages)
							])))));
	});
var $elm$browser$Debugger$Main$SwapLayout = {$: 'SwapLayout'};
var $elm$browser$Debugger$Main$toHistoryIcon = function (layout) {
	if (layout.$ === 'Horizontal') {
		return 'M13 1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M13 3h-10a1 1 0 0 0-1 1v5h12v-5a1 1 0 0 0-1-1z M14 10h-12v2a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1z';
	} else {
		return 'M0 4a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3z M2 4v8a1 1 0 0 0 1 1h2v-10h-2a1 1 0 0 0-1 1z M6 3v10h7a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1z';
	}
};
var $elm$browser$Debugger$Main$icon = function (path) {
	return A4(
		$elm$virtual_dom$VirtualDom$nodeNS,
		'http://www.w3.org/2000/svg',
		'svg',
		_List_fromArray(
			[
				A2($elm$virtual_dom$VirtualDom$attribute, 'viewBox', '0 0 16 16'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'xmlns', 'http://www.w3.org/2000/svg'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'fill', 'currentColor'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'width', '16px'),
				A2($elm$virtual_dom$VirtualDom$attribute, 'height', '16px')
			]),
		_List_fromArray(
			[
				A4(
				$elm$virtual_dom$VirtualDom$nodeNS,
				'http://www.w3.org/2000/svg',
				'path',
				_List_fromArray(
					[
						A2($elm$virtual_dom$VirtualDom$attribute, 'd', path)
					]),
				_List_Nil)
			]));
};
var $elm$browser$Debugger$Main$viewHistoryButton = F3(
	function (label, msg, path) {
		return A2(
			$elm$html$Html$button,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'background', 'none'),
					A2($elm$html$Html$Attributes$style, 'border', 'none'),
					A2($elm$html$Html$Attributes$style, 'color', 'inherit'),
					A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
					$elm$html$Html$Events$onClick(msg)
				]),
			_List_fromArray(
				[
					$elm$browser$Debugger$Main$icon(path),
					A2(
					$elm$html$Html$span,
					_List_fromArray(
						[
							A2($elm$html$Html$Attributes$style, 'padding-left', '6px')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text(label)
						]))
				]));
	});
var $elm$browser$Debugger$Main$viewHistoryOptions = function (layout) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'width', '100%'),
				A2($elm$html$Html$Attributes$style, 'height', '36px'),
				A2($elm$html$Html$Attributes$style, 'display', 'flex'),
				A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
				A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
				A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between'),
				A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
			]),
		_List_fromArray(
			[
				A3(
				$elm$browser$Debugger$Main$viewHistoryButton,
				'Swap Layout',
				$elm$browser$Debugger$Main$SwapLayout,
				$elm$browser$Debugger$Main$toHistoryIcon(layout)),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						A2($elm$html$Html$Attributes$style, 'display', 'flex'),
						A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
						A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
						A2($elm$html$Html$Attributes$style, 'justify-content', 'space-between')
					]),
				_List_fromArray(
					[
						A3($elm$browser$Debugger$Main$viewHistoryButton, 'Import', $elm$browser$Debugger$Main$Import, 'M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M10 2a1 1 0 0 0 -2 0v6a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-3.586l4.293-4.293a1 1 0 0 0-1.414-1.414l-4.293 4.293z'),
						A3($elm$browser$Debugger$Main$viewHistoryButton, 'Export', $elm$browser$Debugger$Main$Export, 'M5 1a1 1 0 0 1 0 2h-2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1 a1 1 0 0 1 2 0a3 3 0 0 1-3 3h-10a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3z M9 3a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586l-5.293 5.293 a1 1 0 0 1-1.414-1.414l5.293 -5.293z')
					]))
			]));
};
var $elm$browser$Debugger$Main$SliderJump = function (a) {
	return {$: 'SliderJump', a: a};
};
var $elm$core$Basics$composeR = F3(
	function (f, g, x) {
		return g(
			f(x));
	});
var $elm$html$Html$input = _VirtualDom_node('input');
var $elm$browser$Debugger$Main$isPlaying = function (maybeIndex) {
	if (maybeIndex.$ === 'Nothing') {
		return true;
	} else {
		return false;
	}
};
var $elm$html$Html$Attributes$max = $elm$html$Html$Attributes$stringProperty('max');
var $elm$html$Html$Attributes$min = $elm$html$Html$Attributes$stringProperty('min');
var $elm$html$Html$Events$alwaysStop = function (x) {
	return _Utils_Tuple2(x, true);
};
var $elm$virtual_dom$VirtualDom$MayStopPropagation = function (a) {
	return {$: 'MayStopPropagation', a: a};
};
var $elm$html$Html$Events$stopPropagationOn = F2(
	function (event, decoder) {
		return A2(
			$elm$virtual_dom$VirtualDom$on,
			event,
			$elm$virtual_dom$VirtualDom$MayStopPropagation(decoder));
	});
var $elm$json$Json$Decode$string = _Json_decodeString;
var $elm$html$Html$Events$targetValue = A2(
	$elm$json$Json$Decode$at,
	_List_fromArray(
		['target', 'value']),
	$elm$json$Json$Decode$string);
var $elm$html$Html$Events$onInput = function (tagger) {
	return A2(
		$elm$html$Html$Events$stopPropagationOn,
		'input',
		A2(
			$elm$json$Json$Decode$map,
			$elm$html$Html$Events$alwaysStop,
			A2($elm$json$Json$Decode$map, tagger, $elm$html$Html$Events$targetValue)));
};
var $elm$core$String$toInt = _String_toInt;
var $elm$html$Html$Attributes$type_ = $elm$html$Html$Attributes$stringProperty('type');
var $elm$html$Html$Attributes$value = $elm$html$Html$Attributes$stringProperty('value');
var $elm$browser$Debugger$Main$viewPlayButton = function (playing) {
	return A2(
		$elm$html$Html$button,
		_List_fromArray(
			[
				A2($elm$html$Html$Attributes$style, 'background', '#1293D8'),
				A2($elm$html$Html$Attributes$style, 'border', 'none'),
				A2($elm$html$Html$Attributes$style, 'color', 'white'),
				A2($elm$html$Html$Attributes$style, 'cursor', 'pointer'),
				A2($elm$html$Html$Attributes$style, 'width', '36px'),
				A2($elm$html$Html$Attributes$style, 'height', '36px'),
				$elm$html$Html$Events$onClick($elm$browser$Debugger$Main$Resume)
			]),
		_List_fromArray(
			[
				playing ? $elm$browser$Debugger$Main$icon('M2 2h4v12h-4v-12z M10 2h4v12h-4v-12z') : $elm$browser$Debugger$Main$icon('M2 2l12 7l-12 7z')
			]));
};
var $elm$browser$Debugger$Main$viewHistorySlider = F2(
	function (history, maybeIndex) {
		var lastIndex = $elm$browser$Debugger$History$size(history) - 1;
		var selectedIndex = A2($elm$core$Maybe$withDefault, lastIndex, maybeIndex);
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'row'),
					A2($elm$html$Html$Attributes$style, 'align-items', 'center'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '36px'),
					A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(50, 50, 50)')
				]),
			_List_fromArray(
				[
					A2(
					$elm$html$Html$Lazy$lazy,
					$elm$browser$Debugger$Main$viewPlayButton,
					$elm$browser$Debugger$Main$isPlaying(maybeIndex)),
					A2(
					$elm$html$Html$input,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$type_('range'),
							A2($elm$html$Html$Attributes$style, 'width', 'calc(100% - 56px)'),
							A2($elm$html$Html$Attributes$style, 'height', '36px'),
							A2($elm$html$Html$Attributes$style, 'margin', '0 10px'),
							$elm$html$Html$Attributes$min('0'),
							$elm$html$Html$Attributes$max(
							$elm$core$String$fromInt(lastIndex)),
							$elm$html$Html$Attributes$value(
							$elm$core$String$fromInt(selectedIndex)),
							$elm$html$Html$Events$onInput(
							A2(
								$elm$core$Basics$composeR,
								$elm$core$String$toInt,
								A2(
									$elm$core$Basics$composeR,
									$elm$core$Maybe$withDefault(lastIndex),
									$elm$browser$Debugger$Main$SliderJump)))
						]),
					_List_Nil)
				]));
	});
var $elm$browser$Debugger$Main$viewHistory = F3(
	function (maybeIndex, history, layout) {
		var block = $elm$browser$Debugger$Main$toMouseBlocker(layout);
		var _v0 = $elm$browser$Debugger$Main$toHistoryPercents(layout);
		var w = _v0.a;
		var h = _v0.b;
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'width', w),
					A2($elm$html$Html$Attributes$style, 'height', h),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2($elm$html$Html$Attributes$style, 'flex-direction', 'column'),
					A2($elm$html$Html$Attributes$style, 'color', '#DDDDDD'),
					A2($elm$html$Html$Attributes$style, 'background-color', 'rgb(61, 61, 61)'),
					A2($elm$html$Html$Attributes$style, 'pointer-events', block),
					A2($elm$html$Html$Attributes$style, 'user-select', block)
				]),
			_List_fromArray(
				[
					A2($elm$browser$Debugger$Main$viewHistorySlider, history, maybeIndex),
					A2(
					$elm$html$Html$map,
					$elm$browser$Debugger$Main$Jump,
					A2($elm$browser$Debugger$History$view, maybeIndex, history)),
					A2($elm$html$Html$Lazy$lazy, $elm$browser$Debugger$Main$viewHistoryOptions, layout)
				]));
	});
var $elm$browser$Debugger$Main$popoutView = function (model) {
	var maybeIndex = function () {
		var _v0 = model.state;
		if (_v0.$ === 'Running') {
			return $elm$core$Maybe$Nothing;
		} else {
			var index = _v0.a;
			return $elm$core$Maybe$Just(index);
		}
	}();
	var historyToRender = $elm$browser$Debugger$Main$cachedHistory(model);
	return A3(
		$elm$html$Html$node,
		'body',
		_Utils_ap(
			$elm$browser$Debugger$Main$toDragListeners(model.layout),
			_List_fromArray(
				[
					A2($elm$html$Html$Attributes$style, 'margin', '0'),
					A2($elm$html$Html$Attributes$style, 'padding', '0'),
					A2($elm$html$Html$Attributes$style, 'width', '100%'),
					A2($elm$html$Html$Attributes$style, 'height', '100%'),
					A2($elm$html$Html$Attributes$style, 'font-family', 'monospace'),
					A2($elm$html$Html$Attributes$style, 'display', 'flex'),
					A2(
					$elm$html$Html$Attributes$style,
					'flex-direction',
					$elm$browser$Debugger$Main$toFlexDirection(model.layout))
				])),
		_List_fromArray(
			[
				A3($elm$browser$Debugger$Main$viewHistory, maybeIndex, historyToRender, model.layout),
				$elm$browser$Debugger$Main$viewDragZone(model.layout),
				A3($elm$browser$Debugger$Main$viewExpando, model.expandoMsg, model.expandoModel, model.layout)
			]));
};
var $elm$browser$Debugger$Overlay$BlockAll = {$: 'BlockAll'};
var $elm$browser$Debugger$Overlay$toBlockerType = F2(
	function (isPaused, state) {
		switch (state.$) {
			case 'None':
				return isPaused ? $elm$browser$Debugger$Overlay$BlockAll : $elm$browser$Debugger$Overlay$BlockNone;
			case 'BadMetadata':
				return $elm$browser$Debugger$Overlay$BlockMost;
			case 'BadImport':
				return $elm$browser$Debugger$Overlay$BlockMost;
			default:
				return $elm$browser$Debugger$Overlay$BlockMost;
		}
	});
var $elm$browser$Debugger$Main$toBlockerType = function (model) {
	return A2(
		$elm$browser$Debugger$Overlay$toBlockerType,
		$elm$browser$Debugger$Main$isPaused(model.state),
		model.overlay);
};
var $elm$browser$Debugger$Main$Horizontal = F3(
	function (a, b, c) {
		return {$: 'Horizontal', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Main$Running = function (a) {
	return {$: 'Running', a: a};
};
var $elm$browser$Debugger$Main$Static = {$: 'Static'};
var $elm$browser$Debugger$Metadata$Error = F2(
	function (message, problems) {
		return {message: message, problems: problems};
	});
var $elm$json$Json$Decode$decodeValue = _Json_run;
var $elm$browser$Debugger$Metadata$Metadata = F2(
	function (versions, types) {
		return {types: types, versions: versions};
	});
var $elm$browser$Debugger$Metadata$Types = F3(
	function (message, aliases, unions) {
		return {aliases: aliases, message: message, unions: unions};
	});
var $elm$browser$Debugger$Metadata$Alias = F2(
	function (args, tipe) {
		return {args: args, tipe: tipe};
	});
var $elm$json$Json$Decode$list = _Json_decodeList;
var $elm$browser$Debugger$Metadata$decodeAlias = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Alias,
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2($elm$json$Json$Decode$field, 'type', $elm$json$Json$Decode$string));
var $elm$browser$Debugger$Metadata$Union = F2(
	function (args, tags) {
		return {args: args, tags: tags};
	});
var $elm$core$Dict$fromList = function (assocs) {
	return A3(
		$elm$core$List$foldl,
		F2(
			function (_v0, dict) {
				var key = _v0.a;
				var value = _v0.b;
				return A3($elm$core$Dict$insert, key, value, dict);
			}),
		$elm$core$Dict$empty,
		assocs);
};
var $elm$json$Json$Decode$keyValuePairs = _Json_decodeKeyValuePairs;
var $elm$json$Json$Decode$dict = function (decoder) {
	return A2(
		$elm$json$Json$Decode$map,
		$elm$core$Dict$fromList,
		$elm$json$Json$Decode$keyValuePairs(decoder));
};
var $elm$browser$Debugger$Metadata$decodeUnion = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Union,
	A2(
		$elm$json$Json$Decode$field,
		'args',
		$elm$json$Json$Decode$list($elm$json$Json$Decode$string)),
	A2(
		$elm$json$Json$Decode$field,
		'tags',
		$elm$json$Json$Decode$dict(
			$elm$json$Json$Decode$list($elm$json$Json$Decode$string))));
var $elm$json$Json$Decode$map3 = _Json_map3;
var $elm$browser$Debugger$Metadata$decodeTypes = A4(
	$elm$json$Json$Decode$map3,
	$elm$browser$Debugger$Metadata$Types,
	A2($elm$json$Json$Decode$field, 'message', $elm$json$Json$Decode$string),
	A2(
		$elm$json$Json$Decode$field,
		'aliases',
		$elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeAlias)),
	A2(
		$elm$json$Json$Decode$field,
		'unions',
		$elm$json$Json$Decode$dict($elm$browser$Debugger$Metadata$decodeUnion)));
var $elm$browser$Debugger$Metadata$Versions = function (elm) {
	return {elm: elm};
};
var $elm$browser$Debugger$Metadata$decodeVersions = A2(
	$elm$json$Json$Decode$map,
	$elm$browser$Debugger$Metadata$Versions,
	A2($elm$json$Json$Decode$field, 'elm', $elm$json$Json$Decode$string));
var $elm$browser$Debugger$Metadata$decoder = A3(
	$elm$json$Json$Decode$map2,
	$elm$browser$Debugger$Metadata$Metadata,
	A2($elm$json$Json$Decode$field, 'versions', $elm$browser$Debugger$Metadata$decodeVersions),
	A2($elm$json$Json$Decode$field, 'types', $elm$browser$Debugger$Metadata$decodeTypes));
var $elm$browser$Debugger$Metadata$ProblemType = F2(
	function (name, problems) {
		return {name: name, problems: problems};
	});
var $elm$core$List$maybeCons = F3(
	function (f, mx, xs) {
		var _v0 = f(mx);
		if (_v0.$ === 'Just') {
			var x = _v0.a;
			return A2($elm$core$List$cons, x, xs);
		} else {
			return xs;
		}
	});
var $elm$core$List$filterMap = F2(
	function (f, xs) {
		return A3(
			$elm$core$List$foldr,
			$elm$core$List$maybeCons(f),
			_List_Nil,
			xs);
	});
var $elm$core$String$contains = _String_contains;
var $elm$browser$Debugger$Metadata$hasProblem = F2(
	function (tipe, _v0) {
		var problem = _v0.a;
		var token = _v0.b;
		return A2($elm$core$String$contains, token, tipe) ? $elm$core$Maybe$Just(problem) : $elm$core$Maybe$Nothing;
	});
var $elm$browser$Debugger$Metadata$Decoder = {$: 'Decoder'};
var $elm$browser$Debugger$Metadata$Function = {$: 'Function'};
var $elm$browser$Debugger$Metadata$Process = {$: 'Process'};
var $elm$browser$Debugger$Metadata$Program = {$: 'Program'};
var $elm$browser$Debugger$Metadata$Request = {$: 'Request'};
var $elm$browser$Debugger$Metadata$Socket = {$: 'Socket'};
var $elm$browser$Debugger$Metadata$Task = {$: 'Task'};
var $elm$browser$Debugger$Metadata$VirtualDom = {$: 'VirtualDom'};
var $elm$browser$Debugger$Metadata$problemTable = _List_fromArray(
	[
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Function, '->'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Decoder, 'Json.Decode.Decoder'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Task, 'Task.Task'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Process, 'Process.Id'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Socket, 'WebSocket.LowLevel.WebSocket'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Request, 'Http.Request'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$Program, 'Platform.Program'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Node'),
		_Utils_Tuple2($elm$browser$Debugger$Metadata$VirtualDom, 'VirtualDom.Attribute')
	]);
var $elm$browser$Debugger$Metadata$findProblems = function (tipe) {
	return A2(
		$elm$core$List$filterMap,
		$elm$browser$Debugger$Metadata$hasProblem(tipe),
		$elm$browser$Debugger$Metadata$problemTable);
};
var $elm$browser$Debugger$Metadata$collectBadAliases = F3(
	function (name, _v0, list) {
		var tipe = _v0.tipe;
		var _v1 = $elm$browser$Debugger$Metadata$findProblems(tipe);
		if (!_v1.b) {
			return list;
		} else {
			var problems = _v1;
			return A2(
				$elm$core$List$cons,
				A2($elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var $elm$core$List$append = F2(
	function (xs, ys) {
		if (!ys.b) {
			return xs;
		} else {
			return A3($elm$core$List$foldr, $elm$core$List$cons, ys, xs);
		}
	});
var $elm$core$List$concat = function (lists) {
	return A3($elm$core$List$foldr, $elm$core$List$append, _List_Nil, lists);
};
var $elm$core$List$concatMap = F2(
	function (f, list) {
		return $elm$core$List$concat(
			A2($elm$core$List$map, f, list));
	});
var $elm$core$Dict$values = function (dict) {
	return A3(
		$elm$core$Dict$foldr,
		F3(
			function (key, value, valueList) {
				return A2($elm$core$List$cons, value, valueList);
			}),
		_List_Nil,
		dict);
};
var $elm$browser$Debugger$Metadata$collectBadUnions = F3(
	function (name, _v0, list) {
		var tags = _v0.tags;
		var _v1 = A2(
			$elm$core$List$concatMap,
			$elm$browser$Debugger$Metadata$findProblems,
			$elm$core$List$concat(
				$elm$core$Dict$values(tags)));
		if (!_v1.b) {
			return list;
		} else {
			var problems = _v1;
			return A2(
				$elm$core$List$cons,
				A2($elm$browser$Debugger$Metadata$ProblemType, name, problems),
				list);
		}
	});
var $elm$core$Dict$foldl = F3(
	function (func, acc, dict) {
		foldl:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return acc;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var $temp$func = func,
					$temp$acc = A3(
					func,
					key,
					value,
					A3($elm$core$Dict$foldl, func, acc, left)),
					$temp$dict = right;
				func = $temp$func;
				acc = $temp$acc;
				dict = $temp$dict;
				continue foldl;
			}
		}
	});
var $elm$browser$Debugger$Metadata$isPortable = function (_v0) {
	var types = _v0.types;
	var badAliases = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadAliases, _List_Nil, types.aliases);
	var _v1 = A3($elm$core$Dict$foldl, $elm$browser$Debugger$Metadata$collectBadUnions, badAliases, types.unions);
	if (!_v1.b) {
		return $elm$core$Maybe$Nothing;
	} else {
		var problems = _v1;
		return $elm$core$Maybe$Just(
			A2($elm$browser$Debugger$Metadata$Error, types.message, problems));
	}
};
var $elm$browser$Debugger$Metadata$decode = function (value) {
	var _v0 = A2($elm$json$Json$Decode$decodeValue, $elm$browser$Debugger$Metadata$decoder, value);
	if (_v0.$ === 'Err') {
		return $elm$core$Result$Err(
			A2($elm$browser$Debugger$Metadata$Error, 'The compiler is generating bad metadata. This is a compiler bug!', _List_Nil));
	} else {
		var metadata = _v0.a;
		var _v1 = $elm$browser$Debugger$Metadata$isPortable(metadata);
		if (_v1.$ === 'Nothing') {
			return $elm$core$Result$Ok(metadata);
		} else {
			var error = _v1.a;
			return $elm$core$Result$Err(error);
		}
	}
};
var $elm$browser$Debugger$History$History = F3(
	function (snapshots, recent, numMessages) {
		return {numMessages: numMessages, recent: recent, snapshots: snapshots};
	});
var $elm$browser$Debugger$History$RecentHistory = F3(
	function (model, messages, numMessages) {
		return {messages: messages, model: model, numMessages: numMessages};
	});
var $elm$browser$Debugger$History$empty = function (model) {
	return A3(
		$elm$browser$Debugger$History$History,
		$elm$core$Array$empty,
		A3($elm$browser$Debugger$History$RecentHistory, model, _List_Nil, 0),
		0);
};
var $elm$core$Dict$map = F2(
	function (func, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				A2(func, key, value),
				A2($elm$core$Dict$map, func, left),
				A2($elm$core$Dict$map, func, right));
		}
	});
var $elm$core$Dict$sizeHelp = F2(
	function (n, dict) {
		sizeHelp:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return n;
			} else {
				var left = dict.d;
				var right = dict.e;
				var $temp$n = A2($elm$core$Dict$sizeHelp, n + 1, right),
					$temp$dict = left;
				n = $temp$n;
				dict = $temp$dict;
				continue sizeHelp;
			}
		}
	});
var $elm$core$Dict$size = function (dict) {
	return A2($elm$core$Dict$sizeHelp, 0, dict);
};
var $elm$browser$Debugger$Expando$initHelp = F2(
	function (isOuter, expando) {
		switch (expando.$) {
			case 'S':
				return expando;
			case 'Primitive':
				return expando;
			case 'Sequence':
				var seqType = expando.a;
				var isClosed = expando.b;
				var items = expando.c;
				return isOuter ? A3(
					$elm$browser$Debugger$Expando$Sequence,
					seqType,
					false,
					A2(
						$elm$core$List$map,
						$elm$browser$Debugger$Expando$initHelp(false),
						items)) : (($elm$core$List$length(items) <= 8) ? A3($elm$browser$Debugger$Expando$Sequence, seqType, false, items) : expando);
			case 'Dictionary':
				var isClosed = expando.a;
				var keyValuePairs = expando.b;
				return isOuter ? A2(
					$elm$browser$Debugger$Expando$Dictionary,
					false,
					A2(
						$elm$core$List$map,
						function (_v1) {
							var k = _v1.a;
							var v = _v1.b;
							return _Utils_Tuple2(
								k,
								A2($elm$browser$Debugger$Expando$initHelp, false, v));
						},
						keyValuePairs)) : (($elm$core$List$length(keyValuePairs) <= 8) ? A2($elm$browser$Debugger$Expando$Dictionary, false, keyValuePairs) : expando);
			case 'Record':
				var isClosed = expando.a;
				var entries = expando.b;
				return isOuter ? A2(
					$elm$browser$Debugger$Expando$Record,
					false,
					A2(
						$elm$core$Dict$map,
						F2(
							function (_v2, v) {
								return A2($elm$browser$Debugger$Expando$initHelp, false, v);
							}),
						entries)) : (($elm$core$Dict$size(entries) <= 4) ? A2($elm$browser$Debugger$Expando$Record, false, entries) : expando);
			default:
				var maybeName = expando.a;
				var isClosed = expando.b;
				var args = expando.c;
				return isOuter ? A3(
					$elm$browser$Debugger$Expando$Constructor,
					maybeName,
					false,
					A2(
						$elm$core$List$map,
						$elm$browser$Debugger$Expando$initHelp(false),
						args)) : (($elm$core$List$length(args) <= 4) ? A3($elm$browser$Debugger$Expando$Constructor, maybeName, false, args) : expando);
		}
	});
var $elm$browser$Debugger$Expando$init = function (value) {
	return A2(
		$elm$browser$Debugger$Expando$initHelp,
		true,
		_Debugger_init(value));
};
var $elm$core$Platform$Cmd$map = _Platform_map;
var $elm$browser$Debugger$Overlay$None = {$: 'None'};
var $elm$browser$Debugger$Overlay$none = $elm$browser$Debugger$Overlay$None;
var $elm$browser$Debugger$Main$wrapInit = F4(
	function (metadata, popout, init, flags) {
		var _v0 = init(flags);
		var userModel = _v0.a;
		var userCommands = _v0.b;
		return _Utils_Tuple2(
			{
				expandoModel: $elm$browser$Debugger$Expando$init(userModel),
				expandoMsg: $elm$browser$Debugger$Expando$init(_Utils_Tuple0),
				history: $elm$browser$Debugger$History$empty(userModel),
				layout: A3($elm$browser$Debugger$Main$Horizontal, $elm$browser$Debugger$Main$Static, 0.3, 0.5),
				metadata: $elm$browser$Debugger$Metadata$decode(metadata),
				overlay: $elm$browser$Debugger$Overlay$none,
				popout: popout,
				state: $elm$browser$Debugger$Main$Running(userModel)
			},
			A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCommands));
	});
var $elm$browser$Debugger$Main$getLatestModel = function (state) {
	if (state.$ === 'Running') {
		var model = state.a;
		return model;
	} else {
		var model = state.c;
		return model;
	}
};
var $elm$core$Platform$Sub$map = _Platform_map;
var $elm$browser$Debugger$Main$wrapSubs = F2(
	function (subscriptions, model) {
		return A2(
			$elm$core$Platform$Sub$map,
			$elm$browser$Debugger$Main$UserMsg,
			subscriptions(
				$elm$browser$Debugger$Main$getLatestModel(model.state)));
	});
var $elm$browser$Debugger$Main$Moving = {$: 'Moving'};
var $elm$browser$Debugger$Main$Paused = F5(
	function (a, b, c, d, e) {
		return {$: 'Paused', a: a, b: b, c: c, d: d, e: e};
	});
var $elm$browser$Debugger$History$Snapshot = F2(
	function (model, messages) {
		return {messages: messages, model: model};
	});
var $elm$browser$Debugger$History$addRecent = F3(
	function (msg, newModel, _v0) {
		var model = _v0.model;
		var messages = _v0.messages;
		var numMessages = _v0.numMessages;
		return _Utils_eq(numMessages, $elm$browser$Debugger$History$maxSnapshotSize) ? _Utils_Tuple2(
			$elm$core$Maybe$Just(
				A2(
					$elm$browser$Debugger$History$Snapshot,
					model,
					$elm$core$Array$fromList(messages))),
			A3(
				$elm$browser$Debugger$History$RecentHistory,
				newModel,
				_List_fromArray(
					[msg]),
				1)) : _Utils_Tuple2(
			$elm$core$Maybe$Nothing,
			A3(
				$elm$browser$Debugger$History$RecentHistory,
				model,
				A2($elm$core$List$cons, msg, messages),
				numMessages + 1));
	});
var $elm$core$Elm$JsArray$push = _JsArray_push;
var $elm$core$Elm$JsArray$singleton = _JsArray_singleton;
var $elm$core$Array$insertTailInTree = F4(
	function (shift, index, tail, tree) {
		var pos = $elm$core$Array$bitMask & (index >>> shift);
		if (_Utils_cmp(
			pos,
			$elm$core$Elm$JsArray$length(tree)) > -1) {
			if (shift === 5) {
				return A2(
					$elm$core$Elm$JsArray$push,
					$elm$core$Array$Leaf(tail),
					tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, $elm$core$Elm$JsArray$empty));
				return A2($elm$core$Elm$JsArray$push, newSub, tree);
			}
		} else {
			var value = A2($elm$core$Elm$JsArray$unsafeGet, pos, tree);
			if (value.$ === 'SubTree') {
				var subTree = value.a;
				var newSub = $elm$core$Array$SubTree(
					A4($elm$core$Array$insertTailInTree, shift - $elm$core$Array$shiftStep, index, tail, subTree));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			} else {
				var newSub = $elm$core$Array$SubTree(
					A4(
						$elm$core$Array$insertTailInTree,
						shift - $elm$core$Array$shiftStep,
						index,
						tail,
						$elm$core$Elm$JsArray$singleton(value)));
				return A3($elm$core$Elm$JsArray$unsafeSet, pos, newSub, tree);
			}
		}
	});
var $elm$core$Array$unsafeReplaceTail = F2(
	function (newTail, _v0) {
		var len = _v0.a;
		var startShift = _v0.b;
		var tree = _v0.c;
		var tail = _v0.d;
		var originalTailLen = $elm$core$Elm$JsArray$length(tail);
		var newTailLen = $elm$core$Elm$JsArray$length(newTail);
		var newArrayLen = len + (newTailLen - originalTailLen);
		if (_Utils_eq(newTailLen, $elm$core$Array$branchFactor)) {
			var overflow = _Utils_cmp(newArrayLen >>> $elm$core$Array$shiftStep, 1 << startShift) > 0;
			if (overflow) {
				var newShift = startShift + $elm$core$Array$shiftStep;
				var newTree = A4(
					$elm$core$Array$insertTailInTree,
					newShift,
					len,
					newTail,
					$elm$core$Elm$JsArray$singleton(
						$elm$core$Array$SubTree(tree)));
				return A4($elm$core$Array$Array_elm_builtin, newArrayLen, newShift, newTree, $elm$core$Elm$JsArray$empty);
			} else {
				return A4(
					$elm$core$Array$Array_elm_builtin,
					newArrayLen,
					startShift,
					A4($elm$core$Array$insertTailInTree, startShift, len, newTail, tree),
					$elm$core$Elm$JsArray$empty);
			}
		} else {
			return A4($elm$core$Array$Array_elm_builtin, newArrayLen, startShift, tree, newTail);
		}
	});
var $elm$core$Array$push = F2(
	function (a, array) {
		var tail = array.d;
		return A2(
			$elm$core$Array$unsafeReplaceTail,
			A2($elm$core$Elm$JsArray$push, a, tail),
			array);
	});
var $elm$browser$Debugger$History$add = F3(
	function (msg, model, _v0) {
		var snapshots = _v0.snapshots;
		var recent = _v0.recent;
		var numMessages = _v0.numMessages;
		var _v1 = A3($elm$browser$Debugger$History$addRecent, msg, model, recent);
		if (_v1.a.$ === 'Just') {
			var snapshot = _v1.a.a;
			var newRecent = _v1.b;
			return A3(
				$elm$browser$Debugger$History$History,
				A2($elm$core$Array$push, snapshot, snapshots),
				newRecent,
				numMessages + 1);
		} else {
			var _v2 = _v1.a;
			var newRecent = _v1.b;
			return A3($elm$browser$Debugger$History$History, snapshots, newRecent, numMessages + 1);
		}
	});
var $elm$core$Basics$always = F2(
	function (a, _v0) {
		return a;
	});
var $elm$browser$Debugger$Overlay$BadImport = function (a) {
	return {$: 'BadImport', a: a};
};
var $elm$browser$Debugger$Overlay$RiskyImport = F2(
	function (a, b) {
		return {$: 'RiskyImport', a: a, b: b};
	});
var $elm$browser$Debugger$Report$VersionChanged = F2(
	function (a, b) {
		return {$: 'VersionChanged', a: a, b: b};
	});
var $elm$browser$Debugger$Report$MessageChanged = F2(
	function (a, b) {
		return {$: 'MessageChanged', a: a, b: b};
	});
var $elm$browser$Debugger$Report$SomethingChanged = function (a) {
	return {$: 'SomethingChanged', a: a};
};
var $elm$browser$Debugger$Report$AliasChange = function (a) {
	return {$: 'AliasChange', a: a};
};
var $elm$browser$Debugger$Metadata$checkAlias = F4(
	function (name, old, _new, changes) {
		return (_Utils_eq(old.tipe, _new.tipe) && _Utils_eq(old.args, _new.args)) ? changes : A2(
			$elm$core$List$cons,
			$elm$browser$Debugger$Report$AliasChange(name),
			changes);
	});
var $elm$browser$Debugger$Report$UnionChange = F2(
	function (a, b) {
		return {$: 'UnionChange', a: a, b: b};
	});
var $elm$browser$Debugger$Metadata$addTag = F3(
	function (tag, _v0, changes) {
		return _Utils_update(
			changes,
			{
				added: A2($elm$core$List$cons, tag, changes.added)
			});
	});
var $elm$browser$Debugger$Metadata$checkTag = F4(
	function (tag, old, _new, changes) {
		return _Utils_eq(old, _new) ? changes : _Utils_update(
			changes,
			{
				changed: A2($elm$core$List$cons, tag, changes.changed)
			});
	});
var $elm$browser$Debugger$Report$TagChanges = F4(
	function (removed, changed, added, argsMatch) {
		return {added: added, argsMatch: argsMatch, changed: changed, removed: removed};
	});
var $elm$browser$Debugger$Report$emptyTagChanges = function (argsMatch) {
	return A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, argsMatch);
};
var $elm$browser$Debugger$Report$hasTagChanges = function (tagChanges) {
	return _Utils_eq(
		tagChanges,
		A4($elm$browser$Debugger$Report$TagChanges, _List_Nil, _List_Nil, _List_Nil, true));
};
var $elm$core$Dict$merge = F6(
	function (leftStep, bothStep, rightStep, leftDict, rightDict, initialResult) {
		var stepState = F3(
			function (rKey, rValue, _v0) {
				stepState:
				while (true) {
					var list = _v0.a;
					var result = _v0.b;
					if (!list.b) {
						return _Utils_Tuple2(
							list,
							A3(rightStep, rKey, rValue, result));
					} else {
						var _v2 = list.a;
						var lKey = _v2.a;
						var lValue = _v2.b;
						var rest = list.b;
						if (_Utils_cmp(lKey, rKey) < 0) {
							var $temp$rKey = rKey,
								$temp$rValue = rValue,
								$temp$_v0 = _Utils_Tuple2(
								rest,
								A3(leftStep, lKey, lValue, result));
							rKey = $temp$rKey;
							rValue = $temp$rValue;
							_v0 = $temp$_v0;
							continue stepState;
						} else {
							if (_Utils_cmp(lKey, rKey) > 0) {
								return _Utils_Tuple2(
									list,
									A3(rightStep, rKey, rValue, result));
							} else {
								return _Utils_Tuple2(
									rest,
									A4(bothStep, lKey, lValue, rValue, result));
							}
						}
					}
				}
			});
		var _v3 = A3(
			$elm$core$Dict$foldl,
			stepState,
			_Utils_Tuple2(
				$elm$core$Dict$toList(leftDict),
				initialResult),
			rightDict);
		var leftovers = _v3.a;
		var intermediateResult = _v3.b;
		return A3(
			$elm$core$List$foldl,
			F2(
				function (_v4, result) {
					var k = _v4.a;
					var v = _v4.b;
					return A3(leftStep, k, v, result);
				}),
			intermediateResult,
			leftovers);
	});
var $elm$browser$Debugger$Metadata$removeTag = F3(
	function (tag, _v0, changes) {
		return _Utils_update(
			changes,
			{
				removed: A2($elm$core$List$cons, tag, changes.removed)
			});
	});
var $elm$browser$Debugger$Metadata$checkUnion = F4(
	function (name, old, _new, changes) {
		var tagChanges = A6(
			$elm$core$Dict$merge,
			$elm$browser$Debugger$Metadata$removeTag,
			$elm$browser$Debugger$Metadata$checkTag,
			$elm$browser$Debugger$Metadata$addTag,
			old.tags,
			_new.tags,
			$elm$browser$Debugger$Report$emptyTagChanges(
				_Utils_eq(old.args, _new.args)));
		return $elm$browser$Debugger$Report$hasTagChanges(tagChanges) ? changes : A2(
			$elm$core$List$cons,
			A2($elm$browser$Debugger$Report$UnionChange, name, tagChanges),
			changes);
	});
var $elm$browser$Debugger$Metadata$ignore = F3(
	function (key, value, report) {
		return report;
	});
var $elm$browser$Debugger$Metadata$checkTypes = F2(
	function (old, _new) {
		return (!_Utils_eq(old.message, _new.message)) ? A2($elm$browser$Debugger$Report$MessageChanged, old.message, _new.message) : $elm$browser$Debugger$Report$SomethingChanged(
			A6(
				$elm$core$Dict$merge,
				$elm$browser$Debugger$Metadata$ignore,
				$elm$browser$Debugger$Metadata$checkUnion,
				$elm$browser$Debugger$Metadata$ignore,
				old.unions,
				_new.unions,
				A6($elm$core$Dict$merge, $elm$browser$Debugger$Metadata$ignore, $elm$browser$Debugger$Metadata$checkAlias, $elm$browser$Debugger$Metadata$ignore, old.aliases, _new.aliases, _List_Nil)));
	});
var $elm$browser$Debugger$Metadata$check = F2(
	function (old, _new) {
		return (!_Utils_eq(old.versions.elm, _new.versions.elm)) ? A2($elm$browser$Debugger$Report$VersionChanged, old.versions.elm, _new.versions.elm) : A2($elm$browser$Debugger$Metadata$checkTypes, old.types, _new.types);
	});
var $elm$browser$Debugger$Report$CorruptHistory = {$: 'CorruptHistory'};
var $elm$browser$Debugger$Overlay$corruptImport = $elm$browser$Debugger$Overlay$BadImport($elm$browser$Debugger$Report$CorruptHistory);
var $elm$json$Json$Decode$decodeString = _Json_runOnString;
var $elm$browser$Debugger$Report$Fine = {$: 'Fine'};
var $elm$browser$Debugger$Report$Impossible = {$: 'Impossible'};
var $elm$browser$Debugger$Report$Risky = {$: 'Risky'};
var $elm$core$Basics$not = _Basics_not;
var $elm$core$List$isEmpty = function (xs) {
	if (!xs.b) {
		return true;
	} else {
		return false;
	}
};
var $elm$browser$Debugger$Report$some = function (list) {
	return !$elm$core$List$isEmpty(list);
};
var $elm$browser$Debugger$Report$evaluateChange = function (change) {
	if (change.$ === 'AliasChange') {
		return $elm$browser$Debugger$Report$Impossible;
	} else {
		var removed = change.b.removed;
		var changed = change.b.changed;
		var added = change.b.added;
		var argsMatch = change.b.argsMatch;
		return ((!argsMatch) || ($elm$browser$Debugger$Report$some(changed) || $elm$browser$Debugger$Report$some(removed))) ? $elm$browser$Debugger$Report$Impossible : ($elm$browser$Debugger$Report$some(added) ? $elm$browser$Debugger$Report$Risky : $elm$browser$Debugger$Report$Fine);
	}
};
var $elm$browser$Debugger$Report$worstCase = F2(
	function (status, statusList) {
		worstCase:
		while (true) {
			if (!statusList.b) {
				return status;
			} else {
				switch (statusList.a.$) {
					case 'Impossible':
						var _v1 = statusList.a;
						return $elm$browser$Debugger$Report$Impossible;
					case 'Risky':
						var _v2 = statusList.a;
						var rest = statusList.b;
						var $temp$status = $elm$browser$Debugger$Report$Risky,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
					default:
						var _v3 = statusList.a;
						var rest = statusList.b;
						var $temp$status = status,
							$temp$statusList = rest;
						status = $temp$status;
						statusList = $temp$statusList;
						continue worstCase;
				}
			}
		}
	});
var $elm$browser$Debugger$Report$evaluate = function (report) {
	switch (report.$) {
		case 'CorruptHistory':
			return $elm$browser$Debugger$Report$Impossible;
		case 'VersionChanged':
			return $elm$browser$Debugger$Report$Impossible;
		case 'MessageChanged':
			return $elm$browser$Debugger$Report$Impossible;
		default:
			var changes = report.a;
			return A2(
				$elm$browser$Debugger$Report$worstCase,
				$elm$browser$Debugger$Report$Fine,
				A2($elm$core$List$map, $elm$browser$Debugger$Report$evaluateChange, changes));
	}
};
var $elm$json$Json$Decode$value = _Json_decodeValue;
var $elm$browser$Debugger$Overlay$uploadDecoder = A3(
	$elm$json$Json$Decode$map2,
	F2(
		function (x, y) {
			return _Utils_Tuple2(x, y);
		}),
	A2($elm$json$Json$Decode$field, 'metadata', $elm$browser$Debugger$Metadata$decoder),
	A2($elm$json$Json$Decode$field, 'history', $elm$json$Json$Decode$value));
var $elm$browser$Debugger$Overlay$assessImport = F2(
	function (metadata, jsonString) {
		var _v0 = A2($elm$json$Json$Decode$decodeString, $elm$browser$Debugger$Overlay$uploadDecoder, jsonString);
		if (_v0.$ === 'Err') {
			return $elm$core$Result$Err($elm$browser$Debugger$Overlay$corruptImport);
		} else {
			var _v1 = _v0.a;
			var foreignMetadata = _v1.a;
			var rawHistory = _v1.b;
			var report = A2($elm$browser$Debugger$Metadata$check, foreignMetadata, metadata);
			var _v2 = $elm$browser$Debugger$Report$evaluate(report);
			switch (_v2.$) {
				case 'Impossible':
					return $elm$core$Result$Err(
						$elm$browser$Debugger$Overlay$BadImport(report));
				case 'Risky':
					return $elm$core$Result$Err(
						A2($elm$browser$Debugger$Overlay$RiskyImport, report, rawHistory));
				default:
					return $elm$core$Result$Ok(rawHistory);
			}
		}
	});
var $elm$core$Platform$Cmd$batch = _Platform_batch;
var $elm$browser$Debugger$Overlay$close = F2(
	function (msg, state) {
		switch (state.$) {
			case 'None':
				return $elm$core$Maybe$Nothing;
			case 'BadMetadata':
				return $elm$core$Maybe$Nothing;
			case 'BadImport':
				return $elm$core$Maybe$Nothing;
			default:
				var rawHistory = state.b;
				if (msg.$ === 'Cancel') {
					return $elm$core$Maybe$Nothing;
				} else {
					return $elm$core$Maybe$Just(rawHistory);
				}
		}
	});
var $elm$browser$Debugger$History$elmToJs = A2($elm$core$Basics$composeR, _Json_wrap, _Debugger_unsafeCoerce);
var $elm$browser$Debugger$History$encodeHelp = F2(
	function (snapshot, allMessages) {
		return A3($elm$core$Array$foldl, $elm$core$List$cons, allMessages, snapshot.messages);
	});
var $elm$json$Json$Encode$list = F2(
	function (func, entries) {
		return _Json_wrap(
			A3(
				$elm$core$List$foldl,
				_Json_addEntry(func),
				_Json_emptyArray(_Utils_Tuple0),
				entries));
	});
var $elm$browser$Debugger$History$encode = function (_v0) {
	var snapshots = _v0.snapshots;
	var recent = _v0.recent;
	return A2(
		$elm$json$Json$Encode$list,
		$elm$browser$Debugger$History$elmToJs,
		A3(
			$elm$core$Array$foldr,
			$elm$browser$Debugger$History$encodeHelp,
			$elm$core$List$reverse(recent.messages),
			snapshots));
};
var $elm$json$Json$Encode$object = function (pairs) {
	return _Json_wrap(
		A3(
			$elm$core$List$foldl,
			F2(
				function (_v0, obj) {
					var k = _v0.a;
					var v = _v0.b;
					return A3(_Json_addField, k, v, obj);
				}),
			_Json_emptyObject(_Utils_Tuple0),
			pairs));
};
var $elm$browser$Debugger$Metadata$encodeAlias = function (_v0) {
	var args = _v0.args;
	var tipe = _v0.tipe;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'type',
				$elm$json$Json$Encode$string(tipe))
			]));
};
var $elm$browser$Debugger$Metadata$encodeDict = F2(
	function (f, dict) {
		return $elm$json$Json$Encode$object(
			$elm$core$Dict$toList(
				A2(
					$elm$core$Dict$map,
					F2(
						function (key, value) {
							return f(value);
						}),
					dict)));
	});
var $elm$browser$Debugger$Metadata$encodeUnion = function (_v0) {
	var args = _v0.args;
	var tags = _v0.tags;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'args',
				A2($elm$json$Json$Encode$list, $elm$json$Json$Encode$string, args)),
				_Utils_Tuple2(
				'tags',
				A2(
					$elm$browser$Debugger$Metadata$encodeDict,
					$elm$json$Json$Encode$list($elm$json$Json$Encode$string),
					tags))
			]));
};
var $elm$browser$Debugger$Metadata$encodeTypes = function (_v0) {
	var message = _v0.message;
	var unions = _v0.unions;
	var aliases = _v0.aliases;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'message',
				$elm$json$Json$Encode$string(message)),
				_Utils_Tuple2(
				'aliases',
				A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeAlias, aliases)),
				_Utils_Tuple2(
				'unions',
				A2($elm$browser$Debugger$Metadata$encodeDict, $elm$browser$Debugger$Metadata$encodeUnion, unions))
			]));
};
var $elm$browser$Debugger$Metadata$encodeVersions = function (_v0) {
	var elm = _v0.elm;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'elm',
				$elm$json$Json$Encode$string(elm))
			]));
};
var $elm$browser$Debugger$Metadata$encode = function (_v0) {
	var versions = _v0.versions;
	var types = _v0.types;
	return $elm$json$Json$Encode$object(
		_List_fromArray(
			[
				_Utils_Tuple2(
				'versions',
				$elm$browser$Debugger$Metadata$encodeVersions(versions)),
				_Utils_Tuple2(
				'types',
				$elm$browser$Debugger$Metadata$encodeTypes(types))
			]));
};
var $elm$core$Basics$identity = function (x) {
	return x;
};
var $elm$core$Task$Perform = function (a) {
	return {$: 'Perform', a: a};
};
var $elm$core$Task$succeed = _Scheduler_succeed;
var $elm$core$Task$init = $elm$core$Task$succeed(_Utils_Tuple0);
var $elm$core$Task$andThen = _Scheduler_andThen;
var $elm$core$Task$map = F2(
	function (func, taskA) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return $elm$core$Task$succeed(
					func(a));
			},
			taskA);
	});
var $elm$core$Task$map2 = F3(
	function (func, taskA, taskB) {
		return A2(
			$elm$core$Task$andThen,
			function (a) {
				return A2(
					$elm$core$Task$andThen,
					function (b) {
						return $elm$core$Task$succeed(
							A2(func, a, b));
					},
					taskB);
			},
			taskA);
	});
var $elm$core$Task$sequence = function (tasks) {
	return A3(
		$elm$core$List$foldr,
		$elm$core$Task$map2($elm$core$List$cons),
		$elm$core$Task$succeed(_List_Nil),
		tasks);
};
var $elm$core$Platform$sendToApp = _Platform_sendToApp;
var $elm$core$Task$spawnCmd = F2(
	function (router, _v0) {
		var task = _v0.a;
		return _Scheduler_spawn(
			A2(
				$elm$core$Task$andThen,
				$elm$core$Platform$sendToApp(router),
				task));
	});
var $elm$core$Task$onEffects = F3(
	function (router, commands, state) {
		return A2(
			$elm$core$Task$map,
			function (_v0) {
				return _Utils_Tuple0;
			},
			$elm$core$Task$sequence(
				A2(
					$elm$core$List$map,
					$elm$core$Task$spawnCmd(router),
					commands)));
	});
var $elm$core$Task$onSelfMsg = F3(
	function (_v0, _v1, _v2) {
		return $elm$core$Task$succeed(_Utils_Tuple0);
	});
var $elm$core$Task$cmdMap = F2(
	function (tagger, _v0) {
		var task = _v0.a;
		return $elm$core$Task$Perform(
			A2($elm$core$Task$map, tagger, task));
	});
_Platform_effectManagers['Task'] = _Platform_createManager($elm$core$Task$init, $elm$core$Task$onEffects, $elm$core$Task$onSelfMsg, $elm$core$Task$cmdMap);
var $elm$core$Task$command = _Platform_leaf('Task');
var $elm$core$Task$perform = F2(
	function (toMessage, task) {
		return $elm$core$Task$command(
			$elm$core$Task$Perform(
				A2($elm$core$Task$map, toMessage, task)));
	});
var $elm$browser$Debugger$Main$download = F2(
	function (metadata, history) {
		var historyLength = $elm$browser$Debugger$History$size(history);
		return A2(
			$elm$core$Task$perform,
			function (_v0) {
				return $elm$browser$Debugger$Main$NoOp;
			},
			A2(
				_Debugger_download,
				historyLength,
				_Json_unwrap(
					$elm$json$Json$Encode$object(
						_List_fromArray(
							[
								_Utils_Tuple2(
								'metadata',
								$elm$browser$Debugger$Metadata$encode(metadata)),
								_Utils_Tuple2(
								'history',
								$elm$browser$Debugger$History$encode(history))
							])))));
	});
var $elm$browser$Debugger$Main$Vertical = F3(
	function (a, b, c) {
		return {$: 'Vertical', a: a, b: b, c: c};
	});
var $elm$browser$Debugger$Main$drag = F2(
	function (info, layout) {
		if (layout.$ === 'Horizontal') {
			var status = layout.a;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Horizontal, status, info.x / info.width, y);
		} else {
			var status = layout.a;
			var x = layout.b;
			return A3($elm$browser$Debugger$Main$Vertical, status, x, info.y / info.height);
		}
	});
var $elm$browser$Debugger$History$Stepping = F2(
	function (a, b) {
		return {$: 'Stepping', a: a, b: b};
	});
var $elm$browser$Debugger$History$Done = F2(
	function (a, b) {
		return {$: 'Done', a: a, b: b};
	});
var $elm$browser$Debugger$History$getHelp = F3(
	function (update, msg, getResult) {
		if (getResult.$ === 'Done') {
			return getResult;
		} else {
			var n = getResult.a;
			var model = getResult.b;
			return (!n) ? A2(
				$elm$browser$Debugger$History$Done,
				msg,
				A2(update, msg, model).a) : A2(
				$elm$browser$Debugger$History$Stepping,
				n - 1,
				A2(update, msg, model).a);
		}
	});
var $elm$browser$Debugger$History$undone = function (getResult) {
	undone:
	while (true) {
		if (getResult.$ === 'Done') {
			var msg = getResult.a;
			var model = getResult.b;
			return _Utils_Tuple2(model, msg);
		} else {
			var $temp$getResult = getResult;
			getResult = $temp$getResult;
			continue undone;
		}
	}
};
var $elm$browser$Debugger$History$get = F3(
	function (update, index, history) {
		get:
		while (true) {
			var recent = history.recent;
			var snapshotMax = history.numMessages - recent.numMessages;
			if (_Utils_cmp(index, snapshotMax) > -1) {
				return $elm$browser$Debugger$History$undone(
					A3(
						$elm$core$List$foldr,
						$elm$browser$Debugger$History$getHelp(update),
						A2($elm$browser$Debugger$History$Stepping, index - snapshotMax, recent.model),
						recent.messages));
			} else {
				var _v0 = A2($elm$core$Array$get, (index / $elm$browser$Debugger$History$maxSnapshotSize) | 0, history.snapshots);
				if (_v0.$ === 'Nothing') {
					var $temp$update = update,
						$temp$index = index,
						$temp$history = history;
					update = $temp$update;
					index = $temp$index;
					history = $temp$history;
					continue get;
				} else {
					var model = _v0.a.model;
					var messages = _v0.a.messages;
					return $elm$browser$Debugger$History$undone(
						A3(
							$elm$core$Array$foldr,
							$elm$browser$Debugger$History$getHelp(update),
							A2($elm$browser$Debugger$History$Stepping, index % $elm$browser$Debugger$History$maxSnapshotSize, model),
							messages));
				}
			}
		}
	});
var $elm$browser$Debugger$History$getRecentMsg = function (history) {
	getRecentMsg:
	while (true) {
		var _v0 = history.recent.messages;
		if (!_v0.b) {
			var $temp$history = history;
			history = $temp$history;
			continue getRecentMsg;
		} else {
			var first = _v0.a;
			return first;
		}
	}
};
var $elm$core$Dict$get = F2(
	function (targetKey, dict) {
		get:
		while (true) {
			if (dict.$ === 'RBEmpty_elm_builtin') {
				return $elm$core$Maybe$Nothing;
			} else {
				var key = dict.b;
				var value = dict.c;
				var left = dict.d;
				var right = dict.e;
				var _v1 = A2($elm$core$Basics$compare, targetKey, key);
				switch (_v1.$) {
					case 'LT':
						var $temp$targetKey = targetKey,
							$temp$dict = left;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
					case 'EQ':
						return $elm$core$Maybe$Just(value);
					default:
						var $temp$targetKey = targetKey,
							$temp$dict = right;
						targetKey = $temp$targetKey;
						dict = $temp$dict;
						continue get;
				}
			}
		}
	});
var $elm$browser$Debugger$Expando$mergeDictHelp = F3(
	function (oldDict, key, value) {
		var _v12 = A2($elm$core$Dict$get, key, oldDict);
		if (_v12.$ === 'Nothing') {
			return value;
		} else {
			var oldValue = _v12.a;
			return A2($elm$browser$Debugger$Expando$mergeHelp, oldValue, value);
		}
	});
var $elm$browser$Debugger$Expando$mergeHelp = F2(
	function (old, _new) {
		var _v3 = _Utils_Tuple2(old, _new);
		_v3$6:
		while (true) {
			switch (_v3.b.$) {
				case 'S':
					return _new;
				case 'Primitive':
					return _new;
				case 'Sequence':
					if (_v3.a.$ === 'Sequence') {
						var _v4 = _v3.a;
						var isClosed = _v4.b;
						var oldValues = _v4.c;
						var _v5 = _v3.b;
						var seqType = _v5.a;
						var newValues = _v5.c;
						return A3(
							$elm$browser$Debugger$Expando$Sequence,
							seqType,
							isClosed,
							A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _v3$6;
					}
				case 'Dictionary':
					if (_v3.a.$ === 'Dictionary') {
						var _v6 = _v3.a;
						var isClosed = _v6.a;
						var _v7 = _v3.b;
						var keyValuePairs = _v7.b;
						return A2($elm$browser$Debugger$Expando$Dictionary, isClosed, keyValuePairs);
					} else {
						break _v3$6;
					}
				case 'Record':
					if (_v3.a.$ === 'Record') {
						var _v8 = _v3.a;
						var isClosed = _v8.a;
						var oldDict = _v8.b;
						var _v9 = _v3.b;
						var newDict = _v9.b;
						return A2(
							$elm$browser$Debugger$Expando$Record,
							isClosed,
							A2(
								$elm$core$Dict$map,
								$elm$browser$Debugger$Expando$mergeDictHelp(oldDict),
								newDict));
					} else {
						break _v3$6;
					}
				default:
					if (_v3.a.$ === 'Constructor') {
						var _v10 = _v3.a;
						var isClosed = _v10.b;
						var oldValues = _v10.c;
						var _v11 = _v3.b;
						var maybeName = _v11.a;
						var newValues = _v11.c;
						return A3(
							$elm$browser$Debugger$Expando$Constructor,
							maybeName,
							isClosed,
							A2($elm$browser$Debugger$Expando$mergeListHelp, oldValues, newValues));
					} else {
						break _v3$6;
					}
			}
		}
		return _new;
	});
var $elm$browser$Debugger$Expando$mergeListHelp = F2(
	function (olds, news) {
		var _v0 = _Utils_Tuple2(olds, news);
		if (!_v0.a.b) {
			return news;
		} else {
			if (!_v0.b.b) {
				return news;
			} else {
				var _v1 = _v0.a;
				var x = _v1.a;
				var xs = _v1.b;
				var _v2 = _v0.b;
				var y = _v2.a;
				var ys = _v2.b;
				return A2(
					$elm$core$List$cons,
					A2($elm$browser$Debugger$Expando$mergeHelp, x, y),
					A2($elm$browser$Debugger$Expando$mergeListHelp, xs, ys));
			}
		}
	});
var $elm$browser$Debugger$Expando$merge = F2(
	function (value, expando) {
		return A2(
			$elm$browser$Debugger$Expando$mergeHelp,
			expando,
			_Debugger_init(value));
	});
var $elm$browser$Debugger$Main$jumpUpdate = F3(
	function (update, index, model) {
		var history = $elm$browser$Debugger$Main$cachedHistory(model);
		var currentMsg = $elm$browser$Debugger$History$getRecentMsg(history);
		var currentModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
		var _v0 = A3($elm$browser$Debugger$History$get, update, index, history);
		var indexModel = _v0.a;
		var indexMsg = _v0.b;
		return _Utils_update(
			model,
			{
				expandoModel: A2($elm$browser$Debugger$Expando$merge, indexModel, model.expandoModel),
				expandoMsg: A2($elm$browser$Debugger$Expando$merge, indexMsg, model.expandoMsg),
				state: A5($elm$browser$Debugger$Main$Paused, index, indexModel, currentModel, currentMsg, history)
			});
	});
var $elm$browser$Debugger$History$jsToElm = A2($elm$core$Basics$composeR, _Json_unwrap, _Debugger_unsafeCoerce);
var $elm$browser$Debugger$History$decoder = F2(
	function (initialModel, update) {
		var addMessage = F2(
			function (rawMsg, _v0) {
				var model = _v0.a;
				var history = _v0.b;
				var msg = $elm$browser$Debugger$History$jsToElm(rawMsg);
				return _Utils_Tuple2(
					A2(update, msg, model),
					A3($elm$browser$Debugger$History$add, msg, model, history));
			});
		var updateModel = function (rawMsgs) {
			return A3(
				$elm$core$List$foldl,
				addMessage,
				_Utils_Tuple2(
					initialModel,
					$elm$browser$Debugger$History$empty(initialModel)),
				rawMsgs);
		};
		return A2(
			$elm$json$Json$Decode$map,
			updateModel,
			$elm$json$Json$Decode$list($elm$json$Json$Decode$value));
	});
var $elm$browser$Debugger$History$getInitialModel = function (_v0) {
	var snapshots = _v0.snapshots;
	var recent = _v0.recent;
	var _v1 = A2($elm$core$Array$get, 0, snapshots);
	if (_v1.$ === 'Just') {
		var model = _v1.a.model;
		return model;
	} else {
		return recent.model;
	}
};
var $elm$core$Platform$Cmd$none = $elm$core$Platform$Cmd$batch(_List_Nil);
var $elm$browser$Debugger$Main$loadNewHistory = F3(
	function (rawHistory, update, model) {
		var pureUserUpdate = F2(
			function (msg, userModel) {
				return A2(update, msg, userModel).a;
			});
		var initialUserModel = $elm$browser$Debugger$History$getInitialModel(model.history);
		var decoder = A2($elm$browser$Debugger$History$decoder, initialUserModel, pureUserUpdate);
		var _v0 = A2($elm$json$Json$Decode$decodeValue, decoder, rawHistory);
		if (_v0.$ === 'Err') {
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{overlay: $elm$browser$Debugger$Overlay$corruptImport}),
				$elm$core$Platform$Cmd$none);
		} else {
			var _v1 = _v0.a;
			var latestUserModel = _v1.a;
			var newHistory = _v1.b;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						expandoModel: $elm$browser$Debugger$Expando$init(latestUserModel),
						expandoMsg: $elm$browser$Debugger$Expando$init(
							$elm$browser$Debugger$History$getRecentMsg(newHistory)),
						history: newHistory,
						overlay: $elm$browser$Debugger$Overlay$none,
						state: $elm$browser$Debugger$Main$Running(latestUserModel)
					}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $elm$browser$Debugger$Main$scroll = function (popout) {
	return A2(
		$elm$core$Task$perform,
		$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
		_Debugger_scroll(popout));
};
var $elm$browser$Debugger$Main$scrollTo = F2(
	function (id, popout) {
		return A2(
			$elm$core$Task$perform,
			$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
			A2(_Debugger_scrollTo, id, popout));
	});
var $elm$browser$Debugger$Main$setDragStatus = F2(
	function (status, layout) {
		if (layout.$ === 'Horizontal') {
			var x = layout.b;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Horizontal, status, x, y);
		} else {
			var x = layout.b;
			var y = layout.c;
			return A3($elm$browser$Debugger$Main$Vertical, status, x, y);
		}
	});
var $elm$browser$Debugger$Main$swapLayout = function (layout) {
	if (layout.$ === 'Horizontal') {
		var s = layout.a;
		var x = layout.b;
		var y = layout.c;
		return A3($elm$browser$Debugger$Main$Vertical, s, x, y);
	} else {
		var s = layout.a;
		var x = layout.b;
		var y = layout.c;
		return A3($elm$browser$Debugger$Main$Horizontal, s, x, y);
	}
};
var $elm$core$Dict$getMin = function (dict) {
	getMin:
	while (true) {
		if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
			var left = dict.d;
			var $temp$dict = left;
			dict = $temp$dict;
			continue getMin;
		} else {
			return dict;
		}
	}
};
var $elm$core$Dict$moveRedLeft = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.e.d.$ === 'RBNode_elm_builtin') && (dict.e.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var lLeft = _v1.d;
			var lRight = _v1.e;
			var _v2 = dict.e;
			var rClr = _v2.a;
			var rK = _v2.b;
			var rV = _v2.c;
			var rLeft = _v2.d;
			var _v3 = rLeft.a;
			var rlK = rLeft.b;
			var rlV = rLeft.c;
			var rlL = rLeft.d;
			var rlR = rLeft.e;
			var rRight = _v2.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				rlK,
				rlV,
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					rlL),
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, rK, rV, rlR, rRight));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v4 = dict.d;
			var lClr = _v4.a;
			var lK = _v4.b;
			var lV = _v4.c;
			var lLeft = _v4.d;
			var lRight = _v4.e;
			var _v5 = dict.e;
			var rClr = _v5.a;
			var rK = _v5.b;
			var rV = _v5.c;
			var rLeft = _v5.d;
			var rRight = _v5.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$moveRedRight = function (dict) {
	if (((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) && (dict.e.$ === 'RBNode_elm_builtin')) {
		if ((dict.d.d.$ === 'RBNode_elm_builtin') && (dict.d.d.a.$ === 'Red')) {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v1 = dict.d;
			var lClr = _v1.a;
			var lK = _v1.b;
			var lV = _v1.c;
			var _v2 = _v1.d;
			var _v3 = _v2.a;
			var llK = _v2.b;
			var llV = _v2.c;
			var llLeft = _v2.d;
			var llRight = _v2.e;
			var lRight = _v1.e;
			var _v4 = dict.e;
			var rClr = _v4.a;
			var rK = _v4.b;
			var rV = _v4.c;
			var rLeft = _v4.d;
			var rRight = _v4.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				$elm$core$Dict$Red,
				lK,
				lV,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, llK, llV, llLeft, llRight),
				A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					lRight,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight)));
		} else {
			var clr = dict.a;
			var k = dict.b;
			var v = dict.c;
			var _v5 = dict.d;
			var lClr = _v5.a;
			var lK = _v5.b;
			var lV = _v5.c;
			var lLeft = _v5.d;
			var lRight = _v5.e;
			var _v6 = dict.e;
			var rClr = _v6.a;
			var rK = _v6.b;
			var rV = _v6.c;
			var rLeft = _v6.d;
			var rRight = _v6.e;
			if (clr.$ === 'Black') {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			} else {
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					$elm$core$Dict$Black,
					k,
					v,
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, lK, lV, lLeft, lRight),
					A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, rK, rV, rLeft, rRight));
			}
		}
	} else {
		return dict;
	}
};
var $elm$core$Dict$removeHelpPrepEQGT = F7(
	function (targetKey, dict, color, key, value, left, right) {
		if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Red')) {
			var _v1 = left.a;
			var lK = left.b;
			var lV = left.c;
			var lLeft = left.d;
			var lRight = left.e;
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				lK,
				lV,
				lLeft,
				A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Red, key, value, lRight, right));
		} else {
			_v2$2:
			while (true) {
				if ((right.$ === 'RBNode_elm_builtin') && (right.a.$ === 'Black')) {
					if (right.d.$ === 'RBNode_elm_builtin') {
						if (right.d.a.$ === 'Black') {
							var _v3 = right.a;
							var _v4 = right.d;
							var _v5 = _v4.a;
							return $elm$core$Dict$moveRedRight(dict);
						} else {
							break _v2$2;
						}
					} else {
						var _v6 = right.a;
						var _v7 = right.d;
						return $elm$core$Dict$moveRedRight(dict);
					}
				} else {
					break _v2$2;
				}
			}
			return dict;
		}
	});
var $elm$core$Dict$removeMin = function (dict) {
	if ((dict.$ === 'RBNode_elm_builtin') && (dict.d.$ === 'RBNode_elm_builtin')) {
		var color = dict.a;
		var key = dict.b;
		var value = dict.c;
		var left = dict.d;
		var lColor = left.a;
		var lLeft = left.d;
		var right = dict.e;
		if (lColor.$ === 'Black') {
			if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
				var _v3 = lLeft.a;
				return A5(
					$elm$core$Dict$RBNode_elm_builtin,
					color,
					key,
					value,
					$elm$core$Dict$removeMin(left),
					right);
			} else {
				var _v4 = $elm$core$Dict$moveRedLeft(dict);
				if (_v4.$ === 'RBNode_elm_builtin') {
					var nColor = _v4.a;
					var nKey = _v4.b;
					var nValue = _v4.c;
					var nLeft = _v4.d;
					var nRight = _v4.e;
					return A5(
						$elm$core$Dict$balance,
						nColor,
						nKey,
						nValue,
						$elm$core$Dict$removeMin(nLeft),
						nRight);
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			}
		} else {
			return A5(
				$elm$core$Dict$RBNode_elm_builtin,
				color,
				key,
				value,
				$elm$core$Dict$removeMin(left),
				right);
		}
	} else {
		return $elm$core$Dict$RBEmpty_elm_builtin;
	}
};
var $elm$core$Dict$removeHelp = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBEmpty_elm_builtin') {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		} else {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_cmp(targetKey, key) < 0) {
				if ((left.$ === 'RBNode_elm_builtin') && (left.a.$ === 'Black')) {
					var _v4 = left.a;
					var lLeft = left.d;
					if ((lLeft.$ === 'RBNode_elm_builtin') && (lLeft.a.$ === 'Red')) {
						var _v6 = lLeft.a;
						return A5(
							$elm$core$Dict$RBNode_elm_builtin,
							color,
							key,
							value,
							A2($elm$core$Dict$removeHelp, targetKey, left),
							right);
					} else {
						var _v7 = $elm$core$Dict$moveRedLeft(dict);
						if (_v7.$ === 'RBNode_elm_builtin') {
							var nColor = _v7.a;
							var nKey = _v7.b;
							var nValue = _v7.c;
							var nLeft = _v7.d;
							var nRight = _v7.e;
							return A5(
								$elm$core$Dict$balance,
								nColor,
								nKey,
								nValue,
								A2($elm$core$Dict$removeHelp, targetKey, nLeft),
								nRight);
						} else {
							return $elm$core$Dict$RBEmpty_elm_builtin;
						}
					}
				} else {
					return A5(
						$elm$core$Dict$RBNode_elm_builtin,
						color,
						key,
						value,
						A2($elm$core$Dict$removeHelp, targetKey, left),
						right);
				}
			} else {
				return A2(
					$elm$core$Dict$removeHelpEQGT,
					targetKey,
					A7($elm$core$Dict$removeHelpPrepEQGT, targetKey, dict, color, key, value, left, right));
			}
		}
	});
var $elm$core$Dict$removeHelpEQGT = F2(
	function (targetKey, dict) {
		if (dict.$ === 'RBNode_elm_builtin') {
			var color = dict.a;
			var key = dict.b;
			var value = dict.c;
			var left = dict.d;
			var right = dict.e;
			if (_Utils_eq(targetKey, key)) {
				var _v1 = $elm$core$Dict$getMin(right);
				if (_v1.$ === 'RBNode_elm_builtin') {
					var minKey = _v1.b;
					var minValue = _v1.c;
					return A5(
						$elm$core$Dict$balance,
						color,
						minKey,
						minValue,
						left,
						$elm$core$Dict$removeMin(right));
				} else {
					return $elm$core$Dict$RBEmpty_elm_builtin;
				}
			} else {
				return A5(
					$elm$core$Dict$balance,
					color,
					key,
					value,
					left,
					A2($elm$core$Dict$removeHelp, targetKey, right));
			}
		} else {
			return $elm$core$Dict$RBEmpty_elm_builtin;
		}
	});
var $elm$core$Dict$remove = F2(
	function (key, dict) {
		var _v0 = A2($elm$core$Dict$removeHelp, key, dict);
		if ((_v0.$ === 'RBNode_elm_builtin') && (_v0.a.$ === 'Red')) {
			var _v1 = _v0.a;
			var k = _v0.b;
			var v = _v0.c;
			var l = _v0.d;
			var r = _v0.e;
			return A5($elm$core$Dict$RBNode_elm_builtin, $elm$core$Dict$Black, k, v, l, r);
		} else {
			var x = _v0;
			return x;
		}
	});
var $elm$core$Dict$update = F3(
	function (targetKey, alter, dictionary) {
		var _v0 = alter(
			A2($elm$core$Dict$get, targetKey, dictionary));
		if (_v0.$ === 'Just') {
			var value = _v0.a;
			return A3($elm$core$Dict$insert, targetKey, value, dictionary);
		} else {
			return A2($elm$core$Dict$remove, targetKey, dictionary);
		}
	});
var $elm$browser$Debugger$Expando$updateIndex = F3(
	function (n, func, list) {
		if (!list.b) {
			return _List_Nil;
		} else {
			var x = list.a;
			var xs = list.b;
			return (n <= 0) ? A2(
				$elm$core$List$cons,
				func(x),
				xs) : A2(
				$elm$core$List$cons,
				x,
				A3($elm$browser$Debugger$Expando$updateIndex, n - 1, func, xs));
		}
	});
var $elm$browser$Debugger$Expando$update = F2(
	function (msg, value) {
		switch (value.$) {
			case 'S':
				return value;
			case 'Primitive':
				return value;
			case 'Sequence':
				var seqType = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3($elm$browser$Debugger$Expando$Sequence, seqType, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _v3 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								$elm$browser$Debugger$Expando$Sequence,
								seqType,
								isClosed,
								A3(
									$elm$browser$Debugger$Expando$updateIndex,
									index,
									$elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
			case 'Dictionary':
				var isClosed = value.a;
				var keyValuePairs = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2($elm$browser$Debugger$Expando$Dictionary, !isClosed, keyValuePairs);
					case 'Index':
						var redirect = msg.a;
						var index = msg.b;
						var subMsg = msg.c;
						switch (redirect.$) {
							case 'None':
								return value;
							case 'Key':
								return A2(
									$elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										$elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_v6) {
											var k = _v6.a;
											var v = _v6.b;
											return _Utils_Tuple2(
												A2($elm$browser$Debugger$Expando$update, subMsg, k),
												v);
										},
										keyValuePairs));
							default:
								return A2(
									$elm$browser$Debugger$Expando$Dictionary,
									isClosed,
									A3(
										$elm$browser$Debugger$Expando$updateIndex,
										index,
										function (_v7) {
											var k = _v7.a;
											var v = _v7.b;
											return _Utils_Tuple2(
												k,
												A2($elm$browser$Debugger$Expando$update, subMsg, v));
										},
										keyValuePairs));
						}
					default:
						return value;
				}
			case 'Record':
				var isClosed = value.a;
				var valueDict = value.b;
				switch (msg.$) {
					case 'Toggle':
						return A2($elm$browser$Debugger$Expando$Record, !isClosed, valueDict);
					case 'Index':
						return value;
					default:
						var field = msg.a;
						var subMsg = msg.b;
						return A2(
							$elm$browser$Debugger$Expando$Record,
							isClosed,
							A3(
								$elm$core$Dict$update,
								field,
								$elm$browser$Debugger$Expando$updateField(subMsg),
								valueDict));
				}
			default:
				var maybeName = value.a;
				var isClosed = value.b;
				var valueList = value.c;
				switch (msg.$) {
					case 'Toggle':
						return A3($elm$browser$Debugger$Expando$Constructor, maybeName, !isClosed, valueList);
					case 'Index':
						if (msg.a.$ === 'None') {
							var _v10 = msg.a;
							var index = msg.b;
							var subMsg = msg.c;
							return A3(
								$elm$browser$Debugger$Expando$Constructor,
								maybeName,
								isClosed,
								A3(
									$elm$browser$Debugger$Expando$updateIndex,
									index,
									$elm$browser$Debugger$Expando$update(subMsg),
									valueList));
						} else {
							return value;
						}
					default:
						return value;
				}
		}
	});
var $elm$browser$Debugger$Expando$updateField = F2(
	function (msg, maybeExpando) {
		if (maybeExpando.$ === 'Nothing') {
			return maybeExpando;
		} else {
			var expando = maybeExpando.a;
			return $elm$core$Maybe$Just(
				A2($elm$browser$Debugger$Expando$update, msg, expando));
		}
	});
var $elm$browser$Debugger$Main$Upload = function (a) {
	return {$: 'Upload', a: a};
};
var $elm$browser$Debugger$Main$upload = function (popout) {
	return A2(
		$elm$core$Task$perform,
		$elm$browser$Debugger$Main$Upload,
		_Debugger_upload(popout));
};
var $elm$browser$Debugger$Overlay$BadMetadata = function (a) {
	return {$: 'BadMetadata', a: a};
};
var $elm$browser$Debugger$Overlay$badMetadata = $elm$browser$Debugger$Overlay$BadMetadata;
var $elm$browser$Debugger$Main$withGoodMetadata = F2(
	function (model, func) {
		var _v0 = model.metadata;
		if (_v0.$ === 'Ok') {
			var metadata = _v0.a;
			return func(metadata);
		} else {
			var error = _v0.a;
			return _Utils_Tuple2(
				_Utils_update(
					model,
					{
						overlay: $elm$browser$Debugger$Overlay$badMetadata(error)
					}),
				$elm$core$Platform$Cmd$none);
		}
	});
var $elm$browser$Debugger$Main$wrapUpdate = F3(
	function (update, msg, model) {
		wrapUpdate:
		while (true) {
			switch (msg.$) {
				case 'NoOp':
					return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
				case 'UserMsg':
					var userMsg = msg.a;
					var userModel = $elm$browser$Debugger$Main$getLatestModel(model.state);
					var newHistory = A3($elm$browser$Debugger$History$add, userMsg, userModel, model.history);
					var _v1 = A2(update, userMsg, userModel);
					var newUserModel = _v1.a;
					var userCmds = _v1.b;
					var commands = A2($elm$core$Platform$Cmd$map, $elm$browser$Debugger$Main$UserMsg, userCmds);
					var _v2 = model.state;
					if (_v2.$ === 'Running') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expandoModel: A2($elm$browser$Debugger$Expando$merge, newUserModel, model.expandoModel),
									expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg, model.expandoMsg),
									history: newHistory,
									state: $elm$browser$Debugger$Main$Running(newUserModel)
								}),
							$elm$core$Platform$Cmd$batch(
								_List_fromArray(
									[
										commands,
										$elm$browser$Debugger$Main$scroll(model.popout)
									])));
					} else {
						var index = _v2.a;
						var indexModel = _v2.b;
						var history = _v2.e;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									history: newHistory,
									state: A5($elm$browser$Debugger$Main$Paused, index, indexModel, newUserModel, userMsg, history)
								}),
							commands);
					}
				case 'TweakExpandoMsg':
					var eMsg = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expandoMsg: A2($elm$browser$Debugger$Expando$update, eMsg, model.expandoMsg)
							}),
						$elm$core$Platform$Cmd$none);
				case 'TweakExpandoModel':
					var eMsg = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								expandoModel: A2($elm$browser$Debugger$Expando$update, eMsg, model.expandoModel)
							}),
						$elm$core$Platform$Cmd$none);
				case 'Resume':
					var _v3 = model.state;
					if (_v3.$ === 'Running') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var userModel = _v3.c;
						var userMsg = _v3.d;
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{
									expandoModel: A2($elm$browser$Debugger$Expando$merge, userModel, model.expandoModel),
									expandoMsg: A2($elm$browser$Debugger$Expando$merge, userMsg, model.expandoMsg),
									state: $elm$browser$Debugger$Main$Running(userModel)
								}),
							$elm$browser$Debugger$Main$scroll(model.popout));
					}
				case 'Jump':
					var index = msg.a;
					return _Utils_Tuple2(
						A3($elm$browser$Debugger$Main$jumpUpdate, update, index, model),
						$elm$core$Platform$Cmd$none);
				case 'SliderJump':
					var index = msg.a;
					return _Utils_Tuple2(
						A3($elm$browser$Debugger$Main$jumpUpdate, update, index, model),
						A2(
							$elm$browser$Debugger$Main$scrollTo,
							$elm$browser$Debugger$History$idForMessageIndex(index),
							model.popout));
				case 'Open':
					return _Utils_Tuple2(
						model,
						A2(
							$elm$core$Task$perform,
							$elm$core$Basics$always($elm$browser$Debugger$Main$NoOp),
							_Debugger_open(model.popout)));
				case 'Up':
					var _v4 = model.state;
					if (_v4.$ === 'Running') {
						return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
					} else {
						var i = _v4.a;
						var history = _v4.e;
						var targetIndex = i + 1;
						if (_Utils_cmp(
							targetIndex,
							$elm$browser$Debugger$History$size(history)) < 0) {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$SliderJump(targetIndex),
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						} else {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$Resume,
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						}
					}
				case 'Down':
					var _v5 = model.state;
					if (_v5.$ === 'Running') {
						var $temp$update = update,
							$temp$msg = $elm$browser$Debugger$Main$Jump(
							$elm$browser$Debugger$History$size(model.history) - 1),
							$temp$model = model;
						update = $temp$update;
						msg = $temp$msg;
						model = $temp$model;
						continue wrapUpdate;
					} else {
						var index = _v5.a;
						if (index > 0) {
							var $temp$update = update,
								$temp$msg = $elm$browser$Debugger$Main$SliderJump(index - 1),
								$temp$model = model;
							update = $temp$update;
							msg = $temp$msg;
							model = $temp$model;
							continue wrapUpdate;
						} else {
							return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
						}
					}
				case 'Import':
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (_v6) {
							return _Utils_Tuple2(
								model,
								$elm$browser$Debugger$Main$upload(model.popout));
						});
				case 'Export':
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							return _Utils_Tuple2(
								model,
								A2($elm$browser$Debugger$Main$download, metadata, model.history));
						});
				case 'Upload':
					var jsonString = msg.a;
					return A2(
						$elm$browser$Debugger$Main$withGoodMetadata,
						model,
						function (metadata) {
							var _v7 = A2($elm$browser$Debugger$Overlay$assessImport, metadata, jsonString);
							if (_v7.$ === 'Err') {
								var newOverlay = _v7.a;
								return _Utils_Tuple2(
									_Utils_update(
										model,
										{overlay: newOverlay}),
									$elm$core$Platform$Cmd$none);
							} else {
								var rawHistory = _v7.a;
								return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
							}
						});
				case 'OverlayMsg':
					var overlayMsg = msg.a;
					var _v8 = A2($elm$browser$Debugger$Overlay$close, overlayMsg, model.overlay);
					if (_v8.$ === 'Nothing') {
						return _Utils_Tuple2(
							_Utils_update(
								model,
								{overlay: $elm$browser$Debugger$Overlay$none}),
							$elm$core$Platform$Cmd$none);
					} else {
						var rawHistory = _v8.a;
						return A3($elm$browser$Debugger$Main$loadNewHistory, rawHistory, update, model);
					}
				case 'SwapLayout':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: $elm$browser$Debugger$Main$swapLayout(model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				case 'DragStart':
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Moving, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				case 'Drag':
					var info = msg.a;
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$drag, info, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
				default:
					return _Utils_Tuple2(
						_Utils_update(
							model,
							{
								layout: A2($elm$browser$Debugger$Main$setDragStatus, $elm$browser$Debugger$Main$Static, model.layout)
							}),
						$elm$core$Platform$Cmd$none);
			}
		}
	});
var $elm$browser$Browser$External = function (a) {
	return {$: 'External', a: a};
};
var $elm$browser$Browser$Internal = function (a) {
	return {$: 'Internal', a: a};
};
var $elm$browser$Browser$Dom$NotFound = function (a) {
	return {$: 'NotFound', a: a};
};
var $elm$url$Url$Http = {$: 'Http'};
var $elm$url$Url$Https = {$: 'Https'};
var $elm$url$Url$Url = F6(
	function (protocol, host, port_, path, query, fragment) {
		return {fragment: fragment, host: host, path: path, port_: port_, protocol: protocol, query: query};
	});
var $elm$core$String$dropLeft = F2(
	function (n, string) {
		return (n < 1) ? string : A3(
			$elm$core$String$slice,
			n,
			$elm$core$String$length(string),
			string);
	});
var $elm$core$String$indexes = _String_indexes;
var $elm$core$String$isEmpty = function (string) {
	return string === '';
};
var $elm$url$Url$chompBeforePath = F5(
	function (protocol, path, params, frag, str) {
		if ($elm$core$String$isEmpty(str) || A2($elm$core$String$contains, '@', str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, ':', str);
			if (!_v0.b) {
				return $elm$core$Maybe$Just(
					A6($elm$url$Url$Url, protocol, str, $elm$core$Maybe$Nothing, path, params, frag));
			} else {
				if (!_v0.b.b) {
					var i = _v0.a;
					var _v1 = $elm$core$String$toInt(
						A2($elm$core$String$dropLeft, i + 1, str));
					if (_v1.$ === 'Nothing') {
						return $elm$core$Maybe$Nothing;
					} else {
						var port_ = _v1;
						return $elm$core$Maybe$Just(
							A6(
								$elm$url$Url$Url,
								protocol,
								A2($elm$core$String$left, i, str),
								port_,
								path,
								params,
								frag));
					}
				} else {
					return $elm$core$Maybe$Nothing;
				}
			}
		}
	});
var $elm$url$Url$chompBeforeQuery = F4(
	function (protocol, params, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '/', str);
			if (!_v0.b) {
				return A5($elm$url$Url$chompBeforePath, protocol, '/', params, frag, str);
			} else {
				var i = _v0.a;
				return A5(
					$elm$url$Url$chompBeforePath,
					protocol,
					A2($elm$core$String$dropLeft, i, str),
					params,
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompBeforeFragment = F3(
	function (protocol, frag, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '?', str);
			if (!_v0.b) {
				return A4($elm$url$Url$chompBeforeQuery, protocol, $elm$core$Maybe$Nothing, frag, str);
			} else {
				var i = _v0.a;
				return A4(
					$elm$url$Url$chompBeforeQuery,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					frag,
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$url$Url$chompAfterProtocol = F2(
	function (protocol, str) {
		if ($elm$core$String$isEmpty(str)) {
			return $elm$core$Maybe$Nothing;
		} else {
			var _v0 = A2($elm$core$String$indexes, '#', str);
			if (!_v0.b) {
				return A3($elm$url$Url$chompBeforeFragment, protocol, $elm$core$Maybe$Nothing, str);
			} else {
				var i = _v0.a;
				return A3(
					$elm$url$Url$chompBeforeFragment,
					protocol,
					$elm$core$Maybe$Just(
						A2($elm$core$String$dropLeft, i + 1, str)),
					A2($elm$core$String$left, i, str));
			}
		}
	});
var $elm$core$String$startsWith = _String_startsWith;
var $elm$url$Url$fromString = function (str) {
	return A2($elm$core$String$startsWith, 'http://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Http,
		A2($elm$core$String$dropLeft, 7, str)) : (A2($elm$core$String$startsWith, 'https://', str) ? A2(
		$elm$url$Url$chompAfterProtocol,
		$elm$url$Url$Https,
		A2($elm$core$String$dropLeft, 8, str)) : $elm$core$Maybe$Nothing);
};
var $elm$core$Basics$never = function (_v0) {
	never:
	while (true) {
		var nvr = _v0.a;
		var $temp$_v0 = nvr;
		_v0 = $temp$_v0;
		continue never;
	}
};
var $elm$browser$Browser$application = _Browser_application;
var $author$project$Main$PagesMsg = function (a) {
	return {$: 'PagesMsg', a: a};
};
var $author$project$Pages$NotFound = {$: 'NotFound'};
var $author$project$Pages$PageOne = function (a) {
	return {$: 'PageOne', a: a};
};
var $author$project$Pages$PageTwo = function (a) {
	return {$: 'PageTwo', a: a};
};
var $author$project$Pages$One$init = {textField: ''};
var $author$project$Pages$Two$init = {counter: 0};
var $author$project$Pages$fromRoute = function (route) {
	switch (route.$) {
		case 'Page1':
			return _Utils_Tuple2(
				$author$project$Pages$PageOne($author$project$Pages$One$init),
				$elm$core$Platform$Cmd$none);
		case 'Page2':
			return _Utils_Tuple2(
				$author$project$Pages$PageTwo($author$project$Pages$Two$init),
				$elm$core$Platform$Cmd$none);
		default:
			return _Utils_Tuple2($author$project$Pages$NotFound, $elm$core$Platform$Cmd$none);
	}
};
var $author$project$Shared$init = F2(
	function (key, url) {
		return {key: key, textField: '', url: url};
	});
var $author$project$Route$NotFound = {$: 'NotFound'};
var $author$project$Route$Page1 = {$: 'Page1'};
var $author$project$Route$Page2 = {$: 'Page2'};
var $elm$url$Url$Parser$Parser = function (a) {
	return {$: 'Parser', a: a};
};
var $elm$url$Url$Parser$State = F5(
	function (visited, unvisited, params, frag, value) {
		return {frag: frag, params: params, unvisited: unvisited, value: value, visited: visited};
	});
var $elm$url$Url$Parser$mapState = F2(
	function (func, _v0) {
		var visited = _v0.visited;
		var unvisited = _v0.unvisited;
		var params = _v0.params;
		var frag = _v0.frag;
		var value = _v0.value;
		return A5(
			$elm$url$Url$Parser$State,
			visited,
			unvisited,
			params,
			frag,
			func(value));
	});
var $elm$url$Url$Parser$map = F2(
	function (subValue, _v0) {
		var parseArg = _v0.a;
		return $elm$url$Url$Parser$Parser(
			function (_v1) {
				var visited = _v1.visited;
				var unvisited = _v1.unvisited;
				var params = _v1.params;
				var frag = _v1.frag;
				var value = _v1.value;
				return A2(
					$elm$core$List$map,
					$elm$url$Url$Parser$mapState(value),
					parseArg(
						A5($elm$url$Url$Parser$State, visited, unvisited, params, frag, subValue)));
			});
	});
var $elm$url$Url$Parser$oneOf = function (parsers) {
	return $elm$url$Url$Parser$Parser(
		function (state) {
			return A2(
				$elm$core$List$concatMap,
				function (_v0) {
					var parser = _v0.a;
					return parser(state);
				},
				parsers);
		});
};
var $elm$url$Url$Parser$s = function (str) {
	return $elm$url$Url$Parser$Parser(
		function (_v0) {
			var visited = _v0.visited;
			var unvisited = _v0.unvisited;
			var params = _v0.params;
			var frag = _v0.frag;
			var value = _v0.value;
			if (!unvisited.b) {
				return _List_Nil;
			} else {
				var next = unvisited.a;
				var rest = unvisited.b;
				return _Utils_eq(next, str) ? _List_fromArray(
					[
						A5(
						$elm$url$Url$Parser$State,
						A2($elm$core$List$cons, next, visited),
						rest,
						params,
						frag,
						value)
					]) : _List_Nil;
			}
		});
};
var $elm$url$Url$Parser$top = $elm$url$Url$Parser$Parser(
	function (state) {
		return _List_fromArray(
			[state]);
	});
var $author$project$Route$matchers = $elm$url$Url$Parser$oneOf(
	_List_fromArray(
		[
			A2($elm$url$Url$Parser$map, $author$project$Route$Page1, $elm$url$Url$Parser$top),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Route$Page2,
			$elm$url$Url$Parser$s('page-2')),
			A2(
			$elm$url$Url$Parser$map,
			$author$project$Route$NotFound,
			$elm$url$Url$Parser$s('nao-encontrada'))
		]));
var $elm$url$Url$Parser$getFirstMatch = function (states) {
	getFirstMatch:
	while (true) {
		if (!states.b) {
			return $elm$core$Maybe$Nothing;
		} else {
			var state = states.a;
			var rest = states.b;
			var _v1 = state.unvisited;
			if (!_v1.b) {
				return $elm$core$Maybe$Just(state.value);
			} else {
				if ((_v1.a === '') && (!_v1.b.b)) {
					return $elm$core$Maybe$Just(state.value);
				} else {
					var $temp$states = rest;
					states = $temp$states;
					continue getFirstMatch;
				}
			}
		}
	}
};
var $elm$url$Url$Parser$removeFinalEmpty = function (segments) {
	if (!segments.b) {
		return _List_Nil;
	} else {
		if ((segments.a === '') && (!segments.b.b)) {
			return _List_Nil;
		} else {
			var segment = segments.a;
			var rest = segments.b;
			return A2(
				$elm$core$List$cons,
				segment,
				$elm$url$Url$Parser$removeFinalEmpty(rest));
		}
	}
};
var $elm$url$Url$Parser$preparePath = function (path) {
	var _v0 = A2($elm$core$String$split, '/', path);
	if (_v0.b && (_v0.a === '')) {
		var segments = _v0.b;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	} else {
		var segments = _v0;
		return $elm$url$Url$Parser$removeFinalEmpty(segments);
	}
};
var $elm$url$Url$Parser$addToParametersHelp = F2(
	function (value, maybeList) {
		if (maybeList.$ === 'Nothing') {
			return $elm$core$Maybe$Just(
				_List_fromArray(
					[value]));
		} else {
			var list = maybeList.a;
			return $elm$core$Maybe$Just(
				A2($elm$core$List$cons, value, list));
		}
	});
var $elm$url$Url$percentDecode = _Url_percentDecode;
var $elm$url$Url$Parser$addParam = F2(
	function (segment, dict) {
		var _v0 = A2($elm$core$String$split, '=', segment);
		if ((_v0.b && _v0.b.b) && (!_v0.b.b.b)) {
			var rawKey = _v0.a;
			var _v1 = _v0.b;
			var rawValue = _v1.a;
			var _v2 = $elm$url$Url$percentDecode(rawKey);
			if (_v2.$ === 'Nothing') {
				return dict;
			} else {
				var key = _v2.a;
				var _v3 = $elm$url$Url$percentDecode(rawValue);
				if (_v3.$ === 'Nothing') {
					return dict;
				} else {
					var value = _v3.a;
					return A3(
						$elm$core$Dict$update,
						key,
						$elm$url$Url$Parser$addToParametersHelp(value),
						dict);
				}
			}
		} else {
			return dict;
		}
	});
var $elm$url$Url$Parser$prepareQuery = function (maybeQuery) {
	if (maybeQuery.$ === 'Nothing') {
		return $elm$core$Dict$empty;
	} else {
		var qry = maybeQuery.a;
		return A3(
			$elm$core$List$foldr,
			$elm$url$Url$Parser$addParam,
			$elm$core$Dict$empty,
			A2($elm$core$String$split, '&', qry));
	}
};
var $elm$url$Url$Parser$parse = F2(
	function (_v0, url) {
		var parser = _v0.a;
		return $elm$url$Url$Parser$getFirstMatch(
			parser(
				A5(
					$elm$url$Url$Parser$State,
					_List_Nil,
					$elm$url$Url$Parser$preparePath(url.path),
					$elm$url$Url$Parser$prepareQuery(url.query),
					url.fragment,
					$elm$core$Basics$identity)));
	});
var $author$project$Route$parseUrl = function (url) {
	return A2(
		$elm$core$Maybe$withDefault,
		$author$project$Route$NotFound,
		A2($elm$url$Url$Parser$parse, $author$project$Route$matchers, url));
};
var $author$project$Main$init = F3(
	function (_v0, url, key) {
		var _v1 = $author$project$Pages$fromRoute(
			$author$project$Route$parseUrl(url));
		var page = _v1.a;
		var cmd = _v1.b;
		return _Utils_Tuple2(
			{
				page: page,
				shared: A2($author$project$Shared$init, key, url)
			},
			A2($elm$core$Platform$Cmd$map, $author$project$Main$PagesMsg, cmd));
	});
var $elm$core$Platform$Sub$batch = _Platform_batch;
var $elm$core$Platform$Sub$none = $elm$core$Platform$Sub$batch(_List_Nil);
var $elm$browser$Browser$Navigation$load = _Browser_load;
var $elm$browser$Browser$Navigation$pushUrl = _Browser_pushUrl;
var $author$project$Route$routeToString = function (page) {
	var pieces = function () {
		switch (page.$) {
			case 'Page1':
				return _List_fromArray(
					['']);
			case 'Page2':
				return _List_fromArray(
					['page-2']);
			default:
				return _List_fromArray(
					['nao-encontrada']);
		}
	}();
	return '/' + A2($elm$core$String$join, '/', pieces);
};
var $author$project$Route$pushUrl = F2(
	function (key, route) {
		return A2(
			$elm$browser$Browser$Navigation$pushUrl,
			key,
			$author$project$Route$routeToString(route));
	});
var $author$project$Shared$NoOp = {$: 'NoOp'};
var $author$project$Pages$NotFoundMsg = function (a) {
	return {$: 'NotFoundMsg', a: a};
};
var $author$project$Pages$PageOneMsg = function (a) {
	return {$: 'PageOneMsg', a: a};
};
var $author$project$Pages$PageTwoMsg = function (a) {
	return {$: 'PageTwoMsg', a: a};
};
var $author$project$Pages$NotFound$update = F2(
	function (msg, shared) {
		return A2($author$project$Route$pushUrl, shared.key, $author$project$Route$Page1);
	});
var $author$project$Shared$UpdateTextField = function (a) {
	return {$: 'UpdateTextField', a: a};
};
var $author$project$Pages$One$update = F3(
	function (msg, model, shared) {
		switch (msg.$) {
			case 'InputTextField':
				var text = msg.a;
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{textField: text}),
					$elm$core$Platform$Cmd$none,
					$author$project$Shared$NoOp);
			case 'InputShared':
				var text = msg.a;
				return _Utils_Tuple3(
					model,
					$elm$core$Platform$Cmd$none,
					$author$project$Shared$UpdateTextField(text));
			default:
				return _Utils_Tuple3(
					model,
					A2($author$project$Route$pushUrl, shared.key, $author$project$Route$Page2),
					$author$project$Shared$NoOp);
		}
	});
var $author$project$Pages$Two$update = F3(
	function (msg, model, shared) {
		switch (msg.$) {
			case 'Increment':
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{counter: model.counter + 1}),
					$elm$core$Platform$Cmd$none,
					$author$project$Shared$NoOp);
			case 'Decrement':
				return _Utils_Tuple3(
					_Utils_update(
						model,
						{counter: model.counter - 1}),
					$elm$core$Platform$Cmd$none,
					$author$project$Shared$NoOp);
			case 'IncrementShared':
				return _Utils_Tuple3(
					model,
					$elm$core$Platform$Cmd$none,
					$author$project$Shared$UpdateTextField(shared.textField + '+'));
			case 'DecrementShared':
				return _Utils_Tuple3(
					model,
					$elm$core$Platform$Cmd$none,
					$author$project$Shared$UpdateTextField(
						A2(
							$elm$core$String$left,
							$elm$core$String$length(shared.textField) - 1,
							shared.textField)));
			default:
				return _Utils_Tuple3(
					model,
					A2($author$project$Route$pushUrl, shared.key, $author$project$Route$Page1),
					$author$project$Shared$NoOp);
		}
	});
var $author$project$Pages$update = F3(
	function (msg, model, shared) {
		var _v0 = _Utils_Tuple2(msg, model);
		switch (_v0.a.$) {
			case 'PageOneMsg':
				if (_v0.b.$ === 'PageOne') {
					var pageOneMsg = _v0.a.a;
					var pageOneModel = _v0.b.a;
					var _v1 = A3($author$project$Pages$One$update, pageOneMsg, pageOneModel, shared);
					var newPageOneModel = _v1.a;
					var cmd = _v1.b;
					var sharedMsg = _v1.c;
					return _Utils_Tuple3(
						$author$project$Pages$PageOne(newPageOneModel),
						A2($elm$core$Platform$Cmd$map, $author$project$Pages$PageOneMsg, cmd),
						sharedMsg);
				} else {
					return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $author$project$Shared$NoOp);
				}
			case 'PageTwoMsg':
				if (_v0.b.$ === 'PageTwo') {
					var pageTwoMsg = _v0.a.a;
					var pageTwoModel = _v0.b.a;
					var _v2 = A3($author$project$Pages$Two$update, pageTwoMsg, pageTwoModel, shared);
					var newPageTwoModel = _v2.a;
					var cmd = _v2.b;
					var sharedMsg = _v2.c;
					return _Utils_Tuple3(
						$author$project$Pages$PageTwo(newPageTwoModel),
						A2($elm$core$Platform$Cmd$map, $author$project$Pages$PageTwoMsg, cmd),
						sharedMsg);
				} else {
					return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $author$project$Shared$NoOp);
				}
			default:
				if (_v0.b.$ === 'NotFound') {
					var pageTwoMsg = _v0.a.a;
					var _v3 = _v0.b;
					var cmd = A2($author$project$Pages$NotFound$update, pageTwoMsg, shared);
					return _Utils_Tuple3(
						$author$project$Pages$NotFound,
						A2($elm$core$Platform$Cmd$map, $author$project$Pages$NotFoundMsg, cmd),
						$author$project$Shared$NoOp);
				} else {
					return _Utils_Tuple3(model, $elm$core$Platform$Cmd$none, $author$project$Shared$NoOp);
				}
		}
	});
var $author$project$Shared$update = F2(
	function (msg, model) {
		switch (msg.$) {
			case 'NoOp':
				return model;
			case 'UpdateTextField':
				var text = msg.a;
				return _Utils_update(
					model,
					{textField: text});
			default:
				var url = msg.a;
				return _Utils_update(
					model,
					{url: url});
		}
	});
var $author$project$Main$update = F2(
	function (msg, model) {
		var shared = model.shared;
		switch (msg.$) {
			case 'NoOp':
				return _Utils_Tuple2(model, $elm$core$Platform$Cmd$none);
			case 'LinkClicked':
				if (msg.a.$ === 'Internal') {
					var url = msg.a.a;
					return _Utils_Tuple2(
						model,
						A2(
							$author$project$Route$pushUrl,
							shared.key,
							$author$project$Route$parseUrl(url)));
				} else {
					var href = msg.a.a;
					return _Utils_Tuple2(
						model,
						$elm$browser$Browser$Navigation$load(href));
				}
			case 'UrlChanged':
				var url = msg.a;
				var _v1 = $author$project$Pages$fromRoute(
					$author$project$Route$parseUrl(url));
				var page = _v1.a;
				var cmd = _v1.b;
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{page: page}),
					A2($elm$core$Platform$Cmd$map, $author$project$Main$PagesMsg, cmd));
			default:
				var pagesMsg = msg.a;
				var _v2 = A3($author$project$Pages$update, pagesMsg, model.page, shared);
				var newPage = _v2.a;
				var cmd = _v2.b;
				var sharedMsg = _v2.c;
				var newShared = A2($author$project$Shared$update, sharedMsg, shared);
				return _Utils_Tuple2(
					_Utils_update(
						model,
						{page: newPage, shared: newShared}),
					A2($elm$core$Platform$Cmd$map, $author$project$Main$PagesMsg, cmd));
		}
	});
var $elm$core$Tuple$mapSecond = F2(
	function (func, _v0) {
		var x = _v0.a;
		var y = _v0.b;
		return _Utils_Tuple2(
			x,
			func(y));
	});
var $author$project$Pages$NotFound$GoToHome = {$: 'GoToHome'};
var $elm$html$Html$section = _VirtualDom_node('section');
var $author$project$Pages$NotFound$viewPage = A2(
	$elm$html$Html$div,
	_List_Nil,
	_List_fromArray(
		[
			A2(
			$elm$html$Html$section,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$p,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text('Ops! Algo de errado aconteceu! Você tentou acessar um recurso que não existe!')
						])),
					A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Events$onClick($author$project$Pages$NotFound$GoToHome)
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Ir para tela inicial')
								]))
						]))
				]))
		]));
var $author$project$Pages$NotFound$view = _Utils_Tuple2('Página não encontrada!', $author$project$Pages$NotFound$viewPage);
var $author$project$Pages$One$GoToPage2 = {$: 'GoToPage2'};
var $elm$html$Html$Attributes$alt = $elm$html$Html$Attributes$stringProperty('alt');
var $elm$html$Html$form = _VirtualDom_node('form');
var $elm$html$Html$h2 = _VirtualDom_node('h2');
var $elm$html$Html$h3 = _VirtualDom_node('h3');
var $elm$html$Html$header = _VirtualDom_node('header');
var $elm$html$Html$img = _VirtualDom_node('img');
var $elm$html$Html$nav = _VirtualDom_node('nav');
var $elm$html$Html$Attributes$placeholder = $elm$html$Html$Attributes$stringProperty('placeholder');
var $elm$html$Html$Attributes$src = function (url) {
	return A2(
		$elm$html$Html$Attributes$stringProperty,
		'src',
		_VirtualDom_noJavaScriptOrHtmlUri(url));
};
var $author$project$Pages$One$headerPage = function (model) {
	return A2(
		$elm$html$Html$header,
		_List_Nil,
		_List_fromArray(
			[
				A2(
				$elm$html$Html$nav,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$class('navTop')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('logoAndSearch')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('search')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$a,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('aLogo'),
												$elm$html$Html$Attributes$href('http://localhost:8080/')
											]),
										_List_fromArray(
											[
												A2(
												$elm$html$Html$img,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('logoHeader'),
														$elm$html$Html$Attributes$src('source/logo.svg'),
														$elm$html$Html$Attributes$alt('KELPIE')
													]),
												_List_Nil)
											]))
									])),
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('allSearchBar')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$form,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('formSearch')
											]),
										_List_fromArray(
											[
												A2(
												$elm$html$Html$button,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('buttonSearch'),
														$elm$html$Html$Attributes$type_('submit'),
														$elm$html$Html$Attributes$alt('Search')
													]),
												_List_fromArray(
													[
														A2(
														$elm$html$Html$img,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$src('source/search.svg')
															]),
														_List_Nil)
													])),
												A2(
												$elm$html$Html$div,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('inputSearch')
													]),
												_List_fromArray(
													[
														A2(
														$elm$html$Html$input,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class('_input'),
																$elm$html$Html$Attributes$placeholder('Search free high-resolution photos')
															]),
														_List_Nil),
														A2(
														$elm$html$Html$div,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class('react-autoWhatever')
															]),
														_List_Nil)
													])),
												A2(
												$elm$html$Html$div,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('VisualSearch')
													]),
												_List_fromArray(
													[
														A2(
														$elm$html$Html$button,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class('buttonVisualSearch')
															]),
														_List_fromArray(
															[
																A2(
																$elm$html$Html$img,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$src('source/scan.svg'),
																		$elm$html$Html$Attributes$alt('Visual Search')
																	]),
																_List_Nil)
															])),
														A2($elm$html$Html$div, _List_Nil, _List_Nil)
													]))
											]))
									]))
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('centerHeader')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$ul,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$class('ulHeader')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$li,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('liNamePage')
											]),
										_List_fromArray(
											[
												A2(
												$elm$html$Html$a,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('aNamePage')
													]),
												_List_fromArray(
													[
														A2(
														$elm$html$Html$h2,
														_List_Nil,
														_List_fromArray(
															[
																$elm$html$Html$text('Home')
															]))
													]))
											])),
										A2(
										$elm$html$Html$li,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('liBrands')
											]),
										_List_fromArray(
											[
												A2(
												$elm$html$Html$a,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('aBrands'),
														$elm$html$Html$Attributes$href('/brands')
													]),
												_List_fromArray(
													[
														A2(
														$elm$html$Html$div,
														_List_Nil,
														_List_fromArray(
															[
																$elm$html$Html$text('Brands'),
																A2(
																$elm$html$Html$span,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$class('spanBrands')
																	]),
																_List_fromArray(
																	[
																		$elm$html$Html$text('New')
																	]))
															]))
													]))
											])),
										A2(
										$elm$html$Html$li,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('liDots')
											]),
										_List_fromArray(
											[
												A2(
												$elm$html$Html$div,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('divDots')
													]),
												_List_fromArray(
													[
														A2(
														$elm$html$Html$button,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$class('buttonDots')
															]),
														_List_fromArray(
															[
																A2(
																$elm$html$Html$img,
																_List_fromArray(
																	[
																		$elm$html$Html$Attributes$src('source/dots.svg'),
																		$elm$html$Html$Attributes$alt('...')
																	]),
																_List_Nil)
															])),
														A2($elm$html$Html$div, _List_Nil, _List_Nil)
													]))
											]))
									]))
							])),
						A2(
						$elm$html$Html$div,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class('rightHeader')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$div,
								_List_Nil,
								_List_fromArray(
									[
										A2(
										$elm$html$Html$div,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('submitPhoto')
											]),
										_List_fromArray(
											[
												A2(
												$elm$html$Html$button,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('buttonSubmitPhoto')
													]),
												_List_fromArray(
													[
														A2(
														$elm$html$Html$a,
														_List_fromArray(
															[
																$elm$html$Html$Attributes$id('aSubmitPhoto'),
																$elm$html$Html$Attributes$href('/Login')
															]),
														_List_fromArray(
															[
																$elm$html$Html$text('Submit Photo')
															]))
													])),
												A2($elm$html$Html$div, _List_Nil, _List_Nil)
											]))
									])),
								A2(
								$elm$html$Html$div,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$id('verticalLeft')
									]),
								_List_fromArray(
									[
										A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('buttonLogin')
											]),
										_List_fromArray(
											[
												A2(
												$elm$html$Html$a,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('aLogin'),
														$elm$html$Html$Attributes$href('/Login')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('Login')
													]))
											])),
										A2(
										$elm$html$Html$button,
										_List_fromArray(
											[
												$elm$html$Html$Attributes$class('buttonJoin')
											]),
										_List_fromArray(
											[
												A2(
												$elm$html$Html$a,
												_List_fromArray(
													[
														$elm$html$Html$Attributes$class('aJoin'),
														$elm$html$Html$Attributes$href('/Login')
													]),
												_List_fromArray(
													[
														$elm$html$Html$text('Join Free')
													]))
											]))
									]))
							]))
					])),
				A2(
				$elm$html$Html$div,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$id('tags')
					]),
				_List_fromArray(
					[
						A2(
						$elm$html$Html$h3,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$id('verticalRight')
							]),
						_List_fromArray(
							[
								$elm$html$Html$text('Tags')
							])),
						A2(
						$elm$html$Html$li,
						_List_fromArray(
							[
								$elm$html$Html$Attributes$class(' listTags')
							]),
						_List_fromArray(
							[
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('People')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Film')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Movie')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Nature')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Dance')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Happy')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Food')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Romance')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('History')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Culture')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Animals')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('LGBTQ+')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Family')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Meme')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Country')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Offices')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Materialize')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Art')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Draw')
									])),
								A2(
								$elm$html$Html$a,
								_List_fromArray(
									[
										$elm$html$Html$Attributes$href('*/t/nameOfTag')
									]),
								_List_fromArray(
									[
										$elm$html$Html$text('Farm')
									]))
							]))
					]))
			]));
};
var $author$project$Pages$One$imgDisplay = function (model) {
	return A2(
		$elm$html$Html$div,
		_List_fromArray(
			[
				$elm$html$Html$Attributes$class('imgs')
			]),
		_List_fromArray(
			[
				A2(
				$elm$html$Html$img,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$src('images/01.jpeg')
					]),
				_List_Nil),
				A2(
				$elm$html$Html$img,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$src('images/02.jpeg')
					]),
				_List_Nil),
				A2(
				$elm$html$Html$img,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$src('images/03.jpeg')
					]),
				_List_Nil),
				A2(
				$elm$html$Html$img,
				_List_fromArray(
					[
						$elm$html$Html$Attributes$src('images/04.jpeg')
					]),
				_List_Nil)
			]));
};
var $author$project$Pages$One$viewPage = F2(
	function (model, shared) {
		return A2(
			$elm$html$Html$div,
			_List_fromArray(
				[
					$elm$html$Html$Attributes$class('bodyElm')
				]),
			_List_fromArray(
				[
					$author$project$Pages$One$headerPage(model),
					$author$project$Pages$One$imgDisplay(model),
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($author$project$Pages$One$GoToPage2)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Go to page 2!')
						]))
				]));
	});
var $author$project$Pages$One$view = F2(
	function (model, shared) {
		return _Utils_Tuple2(
			'Home',
			A2($author$project$Pages$One$viewPage, model, shared));
	});
var $author$project$Pages$Two$Decrement = {$: 'Decrement'};
var $author$project$Pages$Two$DecrementShared = {$: 'DecrementShared'};
var $author$project$Pages$Two$GoToPage1 = {$: 'GoToPage1'};
var $author$project$Pages$Two$Increment = {$: 'Increment'};
var $author$project$Pages$Two$IncrementShared = {$: 'IncrementShared'};
var $author$project$Pages$Two$viewPage = F2(
	function (model, shared) {
		return A2(
			$elm$html$Html$div,
			_List_Nil,
			_List_fromArray(
				[
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('title')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Contador local: ')
						])),
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($author$project$Pages$Two$Increment)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('+')
						])),
					A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							$elm$core$String$fromInt(model.counter))
						])),
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($author$project$Pages$Two$Decrement)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('-')
						])),
					A2(
					$elm$html$Html$div,
					_List_fromArray(
						[
							$elm$html$Html$Attributes$class('title')
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('Quantidade de letras da palavra da Shared: ')
						])),
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($author$project$Pages$Two$IncrementShared)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('+')
						])),
					A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							$elm$html$Html$text(
							$elm$core$String$fromInt(
								$elm$core$String$length(shared.textField)))
						])),
					A2(
					$elm$html$Html$button,
					_List_fromArray(
						[
							$elm$html$Html$Events$onClick($author$project$Pages$Two$DecrementShared)
						]),
					_List_fromArray(
						[
							$elm$html$Html$text('-')
						])),
					A2(
					$elm$html$Html$div,
					_List_Nil,
					_List_fromArray(
						[
							A2(
							$elm$html$Html$button,
							_List_fromArray(
								[
									$elm$html$Html$Events$onClick($author$project$Pages$Two$GoToPage1)
								]),
							_List_fromArray(
								[
									$elm$html$Html$text('Go to page 1!')
								]))
						]))
				]));
	});
var $author$project$Pages$Two$view = F2(
	function (model, shared) {
		return _Utils_Tuple2(
			'Página 2',
			A2($author$project$Pages$Two$viewPage, model, shared));
	});
var $author$project$Pages$view = F2(
	function (model, shared) {
		switch (model.$) {
			case 'PageOne':
				var pageOneModel = model.a;
				return A2(
					$elm$core$Tuple$mapSecond,
					$elm$html$Html$map($author$project$Pages$PageOneMsg),
					A2($author$project$Pages$One$view, pageOneModel, shared));
			case 'PageTwo':
				var pageTwoModel = model.a;
				return A2(
					$elm$core$Tuple$mapSecond,
					$elm$html$Html$map($author$project$Pages$PageTwoMsg),
					A2($author$project$Pages$Two$view, pageTwoModel, shared));
			default:
				return A2(
					$elm$core$Tuple$mapSecond,
					$elm$html$Html$map($author$project$Pages$NotFoundMsg),
					$author$project$Pages$NotFound$view);
		}
	});
var $author$project$Main$view = function (model) {
	var _v0 = A2($author$project$Pages$view, model.page, model.shared);
	var title = _v0.a;
	var body = _v0.b;
	return {
		body: _List_fromArray(
			[
				A2($elm$html$Html$map, $author$project$Main$PagesMsg, body)
			]),
		title: 'KELPIE - ' + title
	};
};
var $author$project$Main$main = $elm$browser$Browser$application(
	{
		init: $author$project$Main$init,
		onUrlChange: $author$project$Main$UrlChanged,
		onUrlRequest: $author$project$Main$LinkClicked,
		subscriptions: function (_v0) {
			return $elm$core$Platform$Sub$none;
		},
		update: $author$project$Main$update,
		view: $author$project$Main$view
	});
_Platform_export({'Main':{'init':$author$project$Main$main(
	$elm$json$Json$Decode$succeed(_Utils_Tuple0))({"versions":{"elm":"0.19.1"},"types":{"message":"Main.Msg","aliases":{"Url.Url":{"args":[],"type":"{ protocol : Url.Protocol, host : String.String, port_ : Maybe.Maybe Basics.Int, path : String.String, query : Maybe.Maybe String.String, fragment : Maybe.Maybe String.String }"}},"unions":{"Main.Msg":{"args":[],"tags":{"NoOp":[],"LinkClicked":["Browser.UrlRequest"],"UrlChanged":["Url.Url"],"PagesMsg":["Pages.Msg"]}},"Basics.Int":{"args":[],"tags":{"Int":[]}},"Maybe.Maybe":{"args":["a"],"tags":{"Just":["a"],"Nothing":[]}},"Pages.Msg":{"args":[],"tags":{"PageOneMsg":["Pages.One.Msg"],"PageTwoMsg":["Pages.Two.Msg"],"NotFoundMsg":["Pages.NotFound.Msg"]}},"Url.Protocol":{"args":[],"tags":{"Http":[],"Https":[]}},"String.String":{"args":[],"tags":{"String":[]}},"Browser.UrlRequest":{"args":[],"tags":{"Internal":["Url.Url"],"External":["String.String"]}},"Pages.NotFound.Msg":{"args":[],"tags":{"GoToHome":[]}},"Pages.One.Msg":{"args":[],"tags":{"InputTextField":["String.String"],"InputShared":["String.String"],"GoToPage2":[]}},"Pages.Two.Msg":{"args":[],"tags":{"Increment":[],"Decrement":[],"IncrementShared":[],"DecrementShared":[],"GoToPage1":[]}}}}})}});

//////////////////// HMR BEGIN ////////////////////

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Original Author: Flux Xu @fluxxu
*/

/*
    A note about the environment that this code runs in...

    assumed globals:
        - `module` (from Node.js module system and webpack)

    assumed in scope after injection into the Elm IIFE:
        - `scope` (has an 'Elm' property which contains the public Elm API)
        - various functions defined by Elm which we have to hook such as `_Platform_initialize` and `_Scheduler_binding`
 */

if (module.hot) {
    (function () {
        "use strict";

        //polyfill for IE: https://github.com/fluxxu/elm-hot-loader/issues/16
        if (typeof Object.assign != 'function') {
            Object.assign = function (target) {
                'use strict';
                if (target == null) {
                    throw new TypeError('Cannot convert undefined or null to object');
                }

                target = Object(target);
                for (var index = 1; index < arguments.length; index++) {
                    var source = arguments[index];
                    if (source != null) {
                        for (var key in source) {
                            if (Object.prototype.hasOwnProperty.call(source, key)) {
                                target[key] = source[key];
                            }
                        }
                    }
                }
                return target;
            };
        }

        // Elm 0.19.1 introduced a '$' prefix at the beginning of the symbols it emits,
        // and we check for `Maybe.Just` because we expect it to be present in all Elm programs.
        var elmVersion;
        if (typeof elm$core$Maybe$Just !== 'undefined')
            elmVersion = '0.19.0';
        else if (typeof $elm$core$Maybe$Just !== 'undefined')
            elmVersion = '0.19.1';
        else
            throw new Error("Could not determine Elm version");

        function elmSymbol(symbol) {
            try {
                switch (elmVersion) {
                    case '0.19.0':
                        return eval(symbol);
                    case '0.19.1':
                        return eval('$' + symbol);
                    default:
                        throw new Error('Cannot resolve ' + symbol + '. Elm version unknown!')
                }
            } catch (e) {
                if (e instanceof ReferenceError) {
                    return undefined;
                } else {
                    throw e;
                }
            }
        }

        var instances = module.hot.data
            ? module.hot.data.instances || {}
            : {};
        var uid = module.hot.data
            ? module.hot.data.uid || 0
            : 0;

        if (Object.keys(instances).length === 0) {
            log("[elm-hot] Enabled");
        }

        var cancellers = [];

        // These 2 variables act as dynamically-scoped variables which are set only when the
        // Elm module's hooked init function is called.
        var initializingInstance = null;
        var swappingInstance = null;

        module.hot.accept();
        module.hot.dispose(function (data) {
            data.instances = instances;
            data.uid = uid;

            // Cleanup pending async tasks

            // First, make sure that no new tasks can be started until we finish replacing the code
            _Scheduler_binding = function () {
                return _Scheduler_fail(new Error('[elm-hot] Inactive Elm instance.'))
            };

            // Second, kill pending tasks belonging to the old instance
            if (cancellers.length) {
                log('[elm-hot] Killing ' + cancellers.length + ' running processes...');
                try {
                    cancellers.forEach(function (cancel) {
                        cancel();
                    });
                } catch (e) {
                    console.warn('[elm-hot] Kill process error: ' + e.message);
                }
            }
        });

        function log(message) {
            if (module.hot.verbose) {
                console.log(message)
            }
        }

        function getId() {
            return ++uid;
        }

        function findPublicModules(parent, path) {
            var modules = [];
            for (var key in parent) {
                var child = parent[key];
                var currentPath = path ? path + '.' + key : key;
                if ('init' in child) {
                    modules.push({
                        path: currentPath,
                        module: child
                    });
                } else {
                    modules = modules.concat(findPublicModules(child, currentPath));
                }
            }
            return modules;
        }

        function registerInstance(domNode, flags, path, portSubscribes, portSends) {
            var id = getId();

            var instance = {
                id: id,
                path: path,
                domNode: domNode,
                flags: flags,
                portSubscribes: portSubscribes,
                portSends: portSends,
                lastState: null // last Elm app state (root model)
            };

            return instances[id] = instance
        }

        function isFullscreenApp() {
            // Returns true if the Elm app will take over the entire DOM body.
            return typeof elmSymbol("elm$browser$Browser$application") !== 'undefined'
                || typeof elmSymbol("elm$browser$Browser$document") !== 'undefined';
        }

        function wrapDomNode(node) {
            // When embedding an Elm app into a specific DOM node, Elm will replace the provided
            // DOM node with the Elm app's content. When the Elm app is compiled normally, the
            // original DOM node is reused (its attributes and content changes, but the object
            // in memory remains the same). But when compiled using `--debug`, Elm will completely
            // destroy the original DOM node and instead replace it with 2 brand new nodes: one
            // for your Elm app's content and the other for the Elm debugger UI. In this case,
            // if you held a reference to the DOM node provided for embedding, it would be orphaned
            // after Elm module initialization.
            //
            // So in order to make both cases consistent and isolate us from changes in how Elm
            // does this, we will insert a dummy node to wrap the node for embedding and hold
            // a reference to the dummy node.
            //
            // We will also put a tag on the dummy node so that the Elm developer knows who went
            // behind their back and rudely put stuff in their DOM.
            var dummyNode = document.createElement("div");
            dummyNode.setAttribute("data-elm-hot", "true");
            dummyNode.style.height = "inherit";
            var parentNode = node.parentNode;
            parentNode.replaceChild(dummyNode, node);
            dummyNode.appendChild(node);
            return dummyNode;
        }

        function wrapPublicModule(path, module) {
            var originalInit = module.init;
            if (originalInit) {
                module.init = function (args) {
                    var elm;
                    var portSubscribes = {};
                    var portSends = {};
                    var domNode = null;
                    var flags = null;
                    if (typeof args !== 'undefined') {
                        // normal case
                        domNode = args['node'] && !isFullscreenApp()
                            ? wrapDomNode(args['node'])
                            : document.body;
                        flags = args['flags'];
                    } else {
                        // rare case: Elm allows init to be called without any arguments at all
                        domNode = document.body;
                        flags = undefined
                    }
                    initializingInstance = registerInstance(domNode, flags, path, portSubscribes, portSends);
                    elm = originalInit(args);
                    wrapPorts(elm, portSubscribes, portSends);
                    initializingInstance = null;
                    return elm;
                };
            } else {
                console.error("Could not find a public module to wrap at path " + path)
            }
        }

        function swap(Elm, instance) {
            log('[elm-hot] Hot-swapping module: ' + instance.path);

            swappingInstance = instance;

            // remove from the DOM everything that had been created by the old Elm app
            var containerNode = instance.domNode;
            while (containerNode.lastChild) {
                containerNode.removeChild(containerNode.lastChild);
            }

            var m = getAt(instance.path.split('.'), Elm);
            var elm;
            if (m) {
                // prepare to initialize the new Elm module
                var args = {flags: instance.flags};
                if (containerNode === document.body) {
                    // fullscreen case: no additional args needed
                } else {
                    // embed case: provide a new node for Elm to use
                    var nodeForEmbed = document.createElement("div");
                    containerNode.appendChild(nodeForEmbed);
                    args['node'] = nodeForEmbed;
                }

                elm = m.init(args);

                Object.keys(instance.portSubscribes).forEach(function (portName) {
                    if (portName in elm.ports && 'subscribe' in elm.ports[portName]) {
                        var handlers = instance.portSubscribes[portName];
                        if (!handlers.length) {
                            return;
                        }
                        log('[elm-hot] Reconnect ' + handlers.length + ' handler(s) to port \''
                            + portName + '\' (' + instance.path + ').');
                        handlers.forEach(function (handler) {
                            elm.ports[portName].subscribe(handler);
                        });
                    } else {
                        delete instance.portSubscribes[portName];
                        log('[elm-hot] Port was removed: ' + portName);
                    }
                });

                Object.keys(instance.portSends).forEach(function (portName) {
                    if (portName in elm.ports && 'send' in elm.ports[portName]) {
                        log('[elm-hot] Replace old port send with the new send');
                        instance.portSends[portName] = elm.ports[portName].send;
                    } else {
                        delete instance.portSends[portName];
                        log('[elm-hot] Port was removed: ' + portName);
                    }
                });
            } else {
                log('[elm-hot] Module was removed: ' + instance.path);
            }

            swappingInstance = null;
        }

        function wrapPorts(elm, portSubscribes, portSends) {
            var portNames = Object.keys(elm.ports || {});
            //hook ports
            if (portNames.length) {
                // hook outgoing ports
                portNames
                    .filter(function (name) {
                        return 'subscribe' in elm.ports[name];
                    })
                    .forEach(function (portName) {
                        var port = elm.ports[portName];
                        var subscribe = port.subscribe;
                        var unsubscribe = port.unsubscribe;
                        elm.ports[portName] = Object.assign(port, {
                            subscribe: function (handler) {
                                log('[elm-hot] ports.' + portName + '.subscribe called.');
                                if (!portSubscribes[portName]) {
                                    portSubscribes[portName] = [handler];
                                } else {
                                    //TODO handle subscribing to single handler more than once?
                                    portSubscribes[portName].push(handler);
                                }
                                return subscribe.call(port, handler);
                            },
                            unsubscribe: function (handler) {
                                log('[elm-hot] ports.' + portName + '.unsubscribe called.');
                                var list = portSubscribes[portName];
                                if (list && list.indexOf(handler) !== -1) {
                                    list.splice(list.lastIndexOf(handler), 1);
                                } else {
                                    console.warn('[elm-hot] ports.' + portName + '.unsubscribe: handler not subscribed');
                                }
                                return unsubscribe.call(port, handler);
                            }
                        });
                    });

                // hook incoming ports
                portNames
                    .filter(function (name) {
                        return 'send' in elm.ports[name];
                    })
                    .forEach(function (portName) {
                        var port = elm.ports[portName];
                        portSends[portName] = port.send;
                        elm.ports[portName] = Object.assign(port, {
                            send: function (val) {
                                return portSends[portName].call(port, val);
                            }
                        });
                    });
            }
            return portSubscribes;
        }

        /*
        Breadth-first search for a `Browser.Navigation.Key` in the user's app model.
        Returns the key and keypath or null if not found.
        */
        function findNavKey(rootModel) {
            var queue = [];
            if (isDebuggerModel(rootModel)) {
                /*
                 Extract the user's app model from the Elm Debugger's model. The Elm debugger
                 can hold multiple references to the user's model (e.g. in its "history"). So
                 we must be careful to only search within the "state" part of the Debugger.
                */
                queue.push({value: rootModel['state'], keypath: ['state']});
            } else {
                queue.push({value: rootModel, keypath: []});
            }

            while (queue.length !== 0) {
                var item = queue.shift();

                if (typeof item.value === "undefined" || item.value === null) {
                    continue;
                }

                // The nav key is identified by a runtime tag added by the elm-hot injector.
                if (item.value.hasOwnProperty("elm-hot-nav-key")) {
                    // found it!
                    return item;
                }

                if (typeof item.value !== "object") {
                    continue;
                }

                for (var propName in item.value) {
                    if (!item.value.hasOwnProperty(propName)) continue;
                    var newKeypath = item.keypath.slice();
                    newKeypath.push(propName);
                    queue.push({value: item.value[propName], keypath: newKeypath})
                }
            }

            return null;
        }


        function isDebuggerModel(model) {
            // Up until elm/browser 1.0.2, the Elm debugger could be identified by a
            // property named "expando". But in version 1.0.2 that was renamed to "expandoModel"
            return model
                && (model.hasOwnProperty("expando") || model.hasOwnProperty("expandoModel"))
                && model.hasOwnProperty("state");
        }

        function getAt(keyPath, obj) {
            return keyPath.reduce(function (xs, x) {
                return (xs && xs[x]) ? xs[x] : null
            }, obj)
        }

        function removeNavKeyListeners(navKey) {
            window.removeEventListener('popstate', navKey.value);
            window.navigator.userAgent.indexOf('Trident') < 0 || window.removeEventListener('hashchange', navKey.value);
        }

        // hook program creation
        var initialize = _Platform_initialize;
        _Platform_initialize = function (flagDecoder, args, init, update, subscriptions, stepperBuilder) {
            var instance = initializingInstance || swappingInstance;
            var tryFirstRender = !!swappingInstance;

            var hookedInit = function (args) {
                var initialStateTuple = init(args);
                if (swappingInstance) {
                    var oldModel = swappingInstance.lastState;
                    var newModel = initialStateTuple.a;

                    if (typeof elmSymbol("elm$browser$Browser$application") !== 'undefined') {
                        var oldKeyLoc = findNavKey(oldModel);

                        // attempt to find the Browser.Navigation.Key in the newly-constructed model
                        // and bring it along with the rest of the old data.
                        var newKeyLoc = findNavKey(newModel);
                        var error = null;
                        if (newKeyLoc === null) {
                            error = "could not find Browser.Navigation.Key in the new app model";
                        } else if (oldKeyLoc === null) {
                            error = "could not find Browser.Navigation.Key in the old app model.";
                        } else if (newKeyLoc.keypath.toString() !== oldKeyLoc.keypath.toString()) {
                            error = "the location of the Browser.Navigation.Key in the model has changed.";
                        } else {
                            // remove event listeners attached to the old nav key
                            removeNavKeyListeners(oldKeyLoc.value);

                            // insert the new nav key into the old model in the exact same location
                            var parentKeyPath = oldKeyLoc.keypath.slice(0, -1);
                            var lastSegment = oldKeyLoc.keypath.slice(-1)[0];
                            var oldParent = getAt(parentKeyPath, oldModel);
                            oldParent[lastSegment] = newKeyLoc.value;
                        }

                        if (error !== null) {
                            console.error("[elm-hot] Hot-swapping " + instance.path + " not possible: " + error);
                            oldModel = newModel;
                        }
                    }

                    // the heart of the app state hot-swap
                    initialStateTuple.a = oldModel;

                    // ignore any Cmds returned by the init during hot-swap
                    initialStateTuple.b = elmSymbol("elm$core$Platform$Cmd$none");
                } else {
                    // capture the initial state for later
                    initializingInstance.lastState = initialStateTuple.a;
                }

                return initialStateTuple
            };

            var hookedStepperBuilder = function (sendToApp, model) {
                var result;
                // first render may fail if shape of model changed too much
                if (tryFirstRender) {
                    tryFirstRender = false;
                    try {
                        result = stepperBuilder(sendToApp, model)
                    } catch (e) {
                        throw new Error('[elm-hot] Hot-swapping ' + instance.path +
                            ' is not possible, please reload page. Error: ' + e.message)
                    }
                } else {
                    result = stepperBuilder(sendToApp, model)
                }

                return function (nextModel, isSync) {
                    if (instance) {
                        // capture the state after every step so that later we can restore from it during a hot-swap
                        instance.lastState = nextModel
                    }
                    return result(nextModel, isSync)
                }
            };

            return initialize(flagDecoder, args, hookedInit, update, subscriptions, hookedStepperBuilder)
        };

        // hook process creation
        var originalBinding = _Scheduler_binding;
        _Scheduler_binding = function (originalCallback) {
            return originalBinding(function () {
                // start the scheduled process, which may return a cancellation function.
                var cancel = originalCallback.apply(this, arguments);
                if (cancel) {
                    cancellers.push(cancel);
                    return function () {
                        cancellers.splice(cancellers.indexOf(cancel), 1);
                        return cancel();
                    };
                }
                return cancel;
            });
        };

        scope['_elm_hot_loader_init'] = function (Elm) {
            // swap instances
            var removedInstances = [];
            for (var id in instances) {
                var instance = instances[id];
                if (instance.domNode.parentNode) {
                    swap(Elm, instance);
                } else {
                    removedInstances.push(id);
                }
            }

            removedInstances.forEach(function (id) {
                delete instance[id];
            });

            // wrap all public modules
            var publicModules = findPublicModules(Elm);
            publicModules.forEach(function (m) {
                wrapPublicModule(m.path, m.module);
            });
        }
    })();

    scope['_elm_hot_loader_init'](scope['Elm']);
}
//////////////////// HMR END ////////////////////


}(this));

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylesheet_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stylesheet/index.scss */ "./src/stylesheet/index.scss");
/* harmony import */ var _stylesheet_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylesheet_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _stylesheet_header_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stylesheet/header.scss */ "./src/stylesheet/header.scss");
/* harmony import */ var _stylesheet_header_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_stylesheet_header_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Main_elm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.elm */ "./src/Main.elm");
/* harmony import */ var _Main_elm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Main_elm__WEBPACK_IMPORTED_MODULE_2__);



console.log("Development mode!");
_Main_elm__WEBPACK_IMPORTED_MODULE_2__["Elm"].Main.init({
  node: document.getElementById("app")
});

/***/ }),

/***/ "./src/stylesheet/header.scss":
/*!************************************!*\
  !*** ./src/stylesheet/header.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: Node Sass version 5.0.0 is incompatible with ^4.0.0.\n    at getSassImplementation (/home/johann/Storage/Programming/front_end/Kelpie/node_modules/sass-loader/dist/getSassImplementation.js:46:13)\n    at Object.loader (/home/johann/Storage/Programming/front_end/Kelpie/node_modules/sass-loader/dist/index.js:40:61)\n    at /home/johann/Storage/Programming/front_end/Kelpie/node_modules/webpack/lib/NormalModule.js:316:20\n    at /home/johann/Storage/Programming/front_end/Kelpie/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /home/johann/Storage/Programming/front_end/Kelpie/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at runSyncOrAsync (/home/johann/Storage/Programming/front_end/Kelpie/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/home/johann/Storage/Programming/front_end/Kelpie/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\n    at Array.<anonymous> (/home/johann/Storage/Programming/front_end/Kelpie/node_modules/loader-runner/lib/LoaderRunner.js:205:4)\n    at Storage.finished (/home/johann/Storage/Programming/front_end/Kelpie/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)\n    at /home/johann/Storage/Programming/front_end/Kelpie/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9\n    at /home/johann/Storage/Programming/front_end/Kelpie/node_modules/graceful-fs/graceful-fs.js:115:16\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:75:3)");

/***/ }),

/***/ "./src/stylesheet/index.scss":
/*!***********************************!*\
  !*** ./src/stylesheet/index.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nError: Node Sass version 5.0.0 is incompatible with ^4.0.0.\n    at getSassImplementation (/home/johann/Storage/Programming/front_end/Kelpie/node_modules/sass-loader/dist/getSassImplementation.js:46:13)\n    at Object.loader (/home/johann/Storage/Programming/front_end/Kelpie/node_modules/sass-loader/dist/index.js:40:61)\n    at /home/johann/Storage/Programming/front_end/Kelpie/node_modules/webpack/lib/NormalModule.js:316:20\n    at /home/johann/Storage/Programming/front_end/Kelpie/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /home/johann/Storage/Programming/front_end/Kelpie/node_modules/loader-runner/lib/LoaderRunner.js:233:18\n    at runSyncOrAsync (/home/johann/Storage/Programming/front_end/Kelpie/node_modules/loader-runner/lib/LoaderRunner.js:143:3)\n    at iterateNormalLoaders (/home/johann/Storage/Programming/front_end/Kelpie/node_modules/loader-runner/lib/LoaderRunner.js:232:2)\n    at Array.<anonymous> (/home/johann/Storage/Programming/front_end/Kelpie/node_modules/loader-runner/lib/LoaderRunner.js:205:4)\n    at Storage.finished (/home/johann/Storage/Programming/front_end/Kelpie/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:55:16)\n    at /home/johann/Storage/Programming/front_end/Kelpie/node_modules/enhanced-resolve/lib/CachedInputFileSystem.js:91:9\n    at /home/johann/Storage/Programming/front_end/Kelpie/node_modules/graceful-fs/graceful-fs.js:115:16\n    at FSReqCallback.readFileAfterClose [as oncomplete] (node:internal/fs/read_file_context:75:3)");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL01haW4uZWxtIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJjb25zb2xlIiwibG9nIiwiRU5WIiwiRWxtIiwiTWFpbiIsImluaXQiLCJub2RlIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxxQkFBcUIsaUJBQWlCLEdBQUcsRUFBRTtBQUMzRTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCLHFCQUFxQixHQUFHO0FBQ3JFLEdBQUc7QUFDSDtBQUNBO0FBQ0EsZ0NBQWdDLHFCQUFxQjtBQUNyRCx3QkFBd0Isd0JBQXdCLEdBQUcsR0FBRztBQUN0RCxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQsd0JBQXdCLHFCQUFxQiwyQkFBMkIsR0FBRyxHQUFHLEdBQUc7QUFDakYsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JELHdCQUF3QixxQkFBcUI7QUFDN0MsaUNBQWlDLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDN0MsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JELHdCQUF3QixxQkFBcUI7QUFDN0Msd0JBQXdCLGlDQUFpQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFDeEUsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQ0FBZ0MscUJBQXFCO0FBQ3JELHdCQUF3QixxQkFBcUI7QUFDN0Msd0JBQXdCO0FBQ3hCLHVDQUF1QyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUN6RCxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdDQUFnQyxxQkFBcUI7QUFDckQsd0JBQXdCLHFCQUFxQjtBQUM3Qyx3QkFBd0IscUJBQXFCO0FBQzdDLDBDQUEwQyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQy9ELEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5Q0FBeUMsd0JBQXdCLEVBQUU7Ozs7QUFJbkU7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8sNkNBQTZDLHFCQUFxQjtBQUN6RTtBQUNBOztBQUVBLG1DQUFtQyw2QkFBNkIsRUFBRTtBQUNsRSxtQ0FBbUMsNkJBQTZCLEVBQUU7QUFDbEUsbUNBQW1DLDZCQUE2QixFQUFFO0FBQ2xFLG1DQUFtQyw4QkFBOEIsRUFBRTs7QUFFbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBLHFCQUFxQjs7QUFFckIscUNBQXFDLFNBQVMsY0FBYztBQUM1RCw4QkFBOEIsU0FBUyx1QkFBdUI7O0FBRTlELHdDQUF3QyxTQUFTLG9CQUFvQjtBQUNyRSxpQ0FBaUMsU0FBUyw2QkFBNkI7O0FBRXZFLCtCQUErQixVQUFVO0FBQ3pDLHdCQUF3QixzQkFBc0I7OztBQUc5Qzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsTUFBTTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUEsd0JBQXdCO0FBQ3hCLGlCQUFpQjs7QUFFakIsb0NBQW9DLFNBQVMsc0JBQXNCO0FBQ25FLDZCQUE2QixTQUFTLHlCQUF5Qjs7O0FBRy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixLQUFLO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixNQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixjQUFjO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsbUJBQW1CLHNCQUFzQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLG1CQUFtQiw4QkFBOEI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxtQkFBbUIsc0NBQXNDO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7OztBQUlEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsVUFBVTtBQUM3QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLFlBQVk7QUFDL0I7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0Esa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1CQUFtQixhQUFhO0FBQ2hDO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLENBQUM7Ozs7QUFJRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsU0FBUyxTQUFTO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsV0FBVyw0QkFBNEI7QUFDdkM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2R0FBNkcsMERBQTBEOztBQUV2SztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOztBQUVBLHFDQUFxQyxjQUFjLEVBQUU7QUFDckQscUNBQXFDLGNBQWMsRUFBRTtBQUNyRCxxQ0FBcUMsY0FBYyxFQUFFO0FBQ3JELHNDQUFzQyxjQUFjLEVBQUU7QUFDdEQsc0NBQXNDLG9CQUFvQixFQUFFO0FBQzVEOztBQUVBLDZDQUE2QyxjQUFjLEVBQUU7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQSw2QkFBNkIsVUFBVTtBQUN2Qyw4QkFBOEIsY0FBYztBQUM1QyxnQ0FBZ0MsMENBQTBDOztBQUUxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBLDRCQUE0QixjQUFjO0FBQzFDLHFDQUFxQyxlQUFlLEVBQUU7QUFDdEQscUNBQXFDLGVBQWUsRUFBRTtBQUN0RCxxQ0FBcUMsZ0JBQWdCLEVBQUU7Ozs7QUFJdkQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxvQ0FBb0MsU0FBUyxvQkFBb0I7QUFDakUscUNBQXFDLFNBQVMsb0JBQW9COztBQUVsRSxrQ0FBa0MsU0FBUyxrQkFBa0I7O0FBRTdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsUUFBUTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrRUFBa0UsaUJBQWlCLEVBQUU7QUFDckY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCw0QkFBNEIsU0FBUyxrQkFBa0I7QUFDdkQsOEJBQThCLGdCQUFnQjs7QUFFOUMsbUNBQW1DLGNBQWM7QUFDakQscUNBQXFDLGNBQWM7O0FBRW5ELDZCQUE2QixXQUFXO0FBQ3hDLDhCQUE4QixXQUFXOztBQUV6QztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUgscUJBQXFCLGtCQUFrQjtBQUN2QyxFQUFFO0FBQ0Y7Ozs7O0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHFCQUFxQjtBQUNuQztBQUNBLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxpQkFBaUIsZUFBZTtBQUNoQzs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsOEJBQThCLG9DQUFvQzs7QUFFbEU7O0FBRUE7QUFDQSxhQUFhLHFDQUFxQztBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLEdBQUc7QUFDSDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE1BQU07QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLHVCQUF1Qjs7QUFFdkI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLDREQUE0RCxjQUFjLEVBQUU7OztBQUc1RTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFdBQVc7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBQXVCLFFBQVE7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBUztBQUNUOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7OztBQUdBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsK0NBQStDO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFdBQVc7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7O0FBR0Q7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsV0FBVztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7QUFHRDs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0EscUJBQXFCLFlBQVk7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxnQ0FBZ0MsaUJBQWlCO0FBQ2pEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBLHdEQUF3RDs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0EsNERBQTREO0FBQzVELG1CQUFtQixxQ0FBcUM7QUFDeEQsRUFBRTtBQUNGO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixLQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3Qzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZUFBZTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7O0FBRUEsb0RBQW9ELFlBQVk7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0I7QUFDbEIsa0JBQWtCLFdBQVc7QUFDN0Isa0JBQWtCOztBQUVsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOzs7O0FBSUE7OztBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQixzQkFBc0I7QUFDdEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isc0JBQXNCOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLFlBQVk7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsaUJBQWlCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLG9CQUFvQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBLDJCQUEyQixLQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLEtBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7OztBQUtEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHFDQUFxQztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrREFBK0QseURBQXlELEVBQUU7QUFDMUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsMEJBQTBCLHdCQUF3QixRQUFROztBQUUxRCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFOztBQUVGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxXQUFXO0FBQzNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0Isc0JBQXNCO0FBQ3RDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixNQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjs7QUFFcEM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHdDQUF3Qzs7O0FBR2hFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix1Q0FBdUM7QUFDOUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0EsRUFBRTtBQUNGLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7QUFJRDs7O0FBR0EseUJBQXlCLGdDQUFnQyxvQ0FBb0M7QUFDN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3Q0FBd0M7QUFDbkUsNkVBQTZFLGdCQUFnQjtBQUM3RixxQkFBcUIsOENBQThDO0FBQ25FLEVBQUU7QUFDRixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsS0FBSztBQUNMOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOzs7O0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7O0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsQ0FBQzs7OztBQUlEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixDQUFDOzs7O0FBSUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLENBQUM7Ozs7QUFJRDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7OztBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsMkJBQTJCO0FBQzNCLDJCQUEyQjtBQUMzQiwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sdUZBQXVGO0FBQzdGLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDLCtDQUErQztBQUMvQywrQ0FBK0M7QUFDL0M7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0YsdUNBQXVDO0FBQ3ZDLDZDQUE2QztBQUM3Qyx1Q0FBdUM7QUFDdkM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGLDRDQUE0QztBQUM1QyxxQ0FBcUM7QUFDckM7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx5Q0FBeUM7QUFDekMseUNBQXlDO0FBQ3pDLHVDQUF1QztBQUN2QztBQUNBLFNBQVM7QUFDVDtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QztBQUM1Qyw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxHQUFHLGtPQUFrTztBQUNyTztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRix5Q0FBeUM7QUFDekMsMENBQTBDO0FBQzFDLDRDQUE0QztBQUM1QywyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsb0JBQW9CLGdCQUFnQiwyQkFBMkIsaUJBQWlCLEdBQUcsK0JBQStCLHNDQUFzQyxHQUFHLHNFQUFzRSxzQ0FBc0MsR0FBRyxpQ0FBaUMsNkJBQTZCLG1CQUFtQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixxQkFBcUIsMEJBQTBCLEdBQUcsK0JBQStCLGdCQUFnQixnQkFBZ0Isc0JBQXNCLG1CQUFtQixpQkFBaUIsR0FBRztBQUN6b0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLDhEQUE4RDtBQUNwRSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLElBQUksK0VBQStFO0FBQ3RGLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsOENBQThDO0FBQzlDLCtDQUErQztBQUMvQyw4Q0FBOEM7QUFDOUMsOENBQThDO0FBQzlDLDhDQUE4QztBQUM5Qyw2Q0FBNkM7QUFDN0MsMkNBQTJDO0FBQzNDLGlEQUFpRDtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLHlDQUF5QztBQUN6QztBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osRUFBRTtBQUNGO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixtREFBbUQ7QUFDbkQ7QUFDQTtBQUNBLHlDQUF5QztBQUN6QywrQ0FBK0M7QUFDL0MsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxJQUFJO0FBQ0o7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHFEQUFxRDtBQUMzRDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxvQkFBb0I7QUFDL0I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyw0Q0FBNEM7QUFDckQ7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHlCQUF5QjtBQUN6QiwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLFVBQVU7QUFDVixFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esc0NBQXNDO0FBQ3RDO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxzQ0FBc0M7QUFDdEMsc0NBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLEVBQUU7QUFDRixzQ0FBc0M7QUFDdEMsbUNBQW1DO0FBQ25DLG1DQUFtQztBQUNuQztBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRixtQ0FBbUM7QUFDbkM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sZ0JBQWdCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDJCQUEyQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLDJCQUEyQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sZ0JBQWdCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxTQUFTO0FBQ2Y7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLFdBQVc7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8saUNBQWlDO0FBQ3hDO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0YsK0NBQStDO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGLDJDQUEyQztBQUMzQyxpREFBaUQ7QUFDakQsMkNBQTJDO0FBQzNDLDJDQUEyQztBQUMzQyxpREFBaUQ7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsRUFBRTtBQUNGLGtCQUFrQixRQUFRO0FBQzFCLGdEQUFnRCxZQUFZLGVBQWUsVUFBVSxnQ0FBZ0MsV0FBVyxtQkFBbUIsK0tBQStLLEdBQUcsV0FBVyxZQUFZLGtCQUFrQixrR0FBa0csZUFBZSxrQkFBa0IsVUFBVSxnQkFBZ0IscUJBQXFCLDJCQUEyQixjQUFjLGtCQUFrQixvR0FBb0csaUJBQWlCLGtCQUFrQixzQkFBc0Isa0JBQWtCLGtCQUFrQixhQUFhLHVCQUF1QixrQkFBa0IscURBQXFELHVCQUF1QixrQkFBa0IsZUFBZSxrQkFBa0Isa0JBQWtCLG1GQUFtRixrQkFBa0Isa0JBQWtCLDJGQUEyRixHQUFHOztBQUV4ckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1DQUFtQywwQkFBMEI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekIscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw4Q0FBOEM7QUFDMUUsYUFBYTtBQUNiLDRCQUE0Qiw4QkFBOEI7QUFDMUQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQWlEO0FBQ2pGO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7O0FBR0EsQ0FBQyxROzs7Ozs7Ozs7Ozs7QUN4cFlEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxtQkFBWjtBQUVBQyw2Q0FBRyxDQUFDQyxJQUFKLENBQVNDLElBQVQsQ0FBYztBQUNWQyxNQUFJLEVBQUVDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixLQUF4QjtBQURJLENBQWQsRSIsImZpbGUiOiJqcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIihmdW5jdGlvbihzY29wZSl7XG4ndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIEYoYXJpdHksIGZ1biwgd3JhcHBlcikge1xuICB3cmFwcGVyLmEgPSBhcml0eTtcbiAgd3JhcHBlci5mID0gZnVuO1xuICByZXR1cm4gd3JhcHBlcjtcbn1cblxuZnVuY3Rpb24gRjIoZnVuKSB7XG4gIHJldHVybiBGKDIsIGZ1biwgZnVuY3Rpb24oYSkgeyByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuKGEsYik7IH07IH0pXG59XG5mdW5jdGlvbiBGMyhmdW4pIHtcbiAgcmV0dXJuIEYoMywgZnVuLCBmdW5jdGlvbihhKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bmN0aW9uKGMpIHsgcmV0dXJuIGZ1bihhLCBiLCBjKTsgfTsgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBGNChmdW4pIHtcbiAgcmV0dXJuIEYoNCwgZnVuLCBmdW5jdGlvbihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bihhLCBiLCBjLCBkKTsgfTsgfTsgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBGNShmdW4pIHtcbiAgcmV0dXJuIEYoNSwgZnVuLCBmdW5jdGlvbihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGZ1bihhLCBiLCBjLCBkLCBlKTsgfTsgfTsgfTsgfTtcbiAgfSk7XG59XG5mdW5jdGlvbiBGNihmdW4pIHtcbiAgcmV0dXJuIEYoNiwgZnVuLCBmdW5jdGlvbihhKSB7IHJldHVybiBmdW5jdGlvbihiKSB7IHJldHVybiBmdW5jdGlvbihjKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGZ1bmN0aW9uKGYpIHtcbiAgICByZXR1cm4gZnVuKGEsIGIsIGMsIGQsIGUsIGYpOyB9OyB9OyB9OyB9OyB9O1xuICB9KTtcbn1cbmZ1bmN0aW9uIEY3KGZ1bikge1xuICByZXR1cm4gRig3LCBmdW4sIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZCkgeyByZXR1cm4gZnVuY3Rpb24oZSkgeyByZXR1cm4gZnVuY3Rpb24oZikge1xuICAgIHJldHVybiBmdW5jdGlvbihnKSB7IHJldHVybiBmdW4oYSwgYiwgYywgZCwgZSwgZiwgZyk7IH07IH07IH07IH07IH07IH07XG4gIH0pO1xufVxuZnVuY3Rpb24gRjgoZnVuKSB7XG4gIHJldHVybiBGKDgsIGZ1biwgZnVuY3Rpb24oYSkgeyByZXR1cm4gZnVuY3Rpb24oYikgeyByZXR1cm4gZnVuY3Rpb24oYykge1xuICAgIHJldHVybiBmdW5jdGlvbihkKSB7IHJldHVybiBmdW5jdGlvbihlKSB7IHJldHVybiBmdW5jdGlvbihmKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKGcpIHsgcmV0dXJuIGZ1bmN0aW9uKGgpIHtcbiAgICByZXR1cm4gZnVuKGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpOyB9OyB9OyB9OyB9OyB9OyB9OyB9O1xuICB9KTtcbn1cbmZ1bmN0aW9uIEY5KGZ1bikge1xuICByZXR1cm4gRig5LCBmdW4sIGZ1bmN0aW9uKGEpIHsgcmV0dXJuIGZ1bmN0aW9uKGIpIHsgcmV0dXJuIGZ1bmN0aW9uKGMpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oZCkgeyByZXR1cm4gZnVuY3Rpb24oZSkgeyByZXR1cm4gZnVuY3Rpb24oZikge1xuICAgIHJldHVybiBmdW5jdGlvbihnKSB7IHJldHVybiBmdW5jdGlvbihoKSB7IHJldHVybiBmdW5jdGlvbihpKSB7XG4gICAgcmV0dXJuIGZ1bihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoLCBpKTsgfTsgfTsgfTsgfTsgfTsgfTsgfTsgfTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIEEyKGZ1biwgYSwgYikge1xuICByZXR1cm4gZnVuLmEgPT09IDIgPyBmdW4uZihhLCBiKSA6IGZ1bihhKShiKTtcbn1cbmZ1bmN0aW9uIEEzKGZ1biwgYSwgYiwgYykge1xuICByZXR1cm4gZnVuLmEgPT09IDMgPyBmdW4uZihhLCBiLCBjKSA6IGZ1bihhKShiKShjKTtcbn1cbmZ1bmN0aW9uIEE0KGZ1biwgYSwgYiwgYywgZCkge1xuICByZXR1cm4gZnVuLmEgPT09IDQgPyBmdW4uZihhLCBiLCBjLCBkKSA6IGZ1bihhKShiKShjKShkKTtcbn1cbmZ1bmN0aW9uIEE1KGZ1biwgYSwgYiwgYywgZCwgZSkge1xuICByZXR1cm4gZnVuLmEgPT09IDUgPyBmdW4uZihhLCBiLCBjLCBkLCBlKSA6IGZ1bihhKShiKShjKShkKShlKTtcbn1cbmZ1bmN0aW9uIEE2KGZ1biwgYSwgYiwgYywgZCwgZSwgZikge1xuICByZXR1cm4gZnVuLmEgPT09IDYgPyBmdW4uZihhLCBiLCBjLCBkLCBlLCBmKSA6IGZ1bihhKShiKShjKShkKShlKShmKTtcbn1cbmZ1bmN0aW9uIEE3KGZ1biwgYSwgYiwgYywgZCwgZSwgZiwgZykge1xuICByZXR1cm4gZnVuLmEgPT09IDcgPyBmdW4uZihhLCBiLCBjLCBkLCBlLCBmLCBnKSA6IGZ1bihhKShiKShjKShkKShlKShmKShnKTtcbn1cbmZ1bmN0aW9uIEE4KGZ1biwgYSwgYiwgYywgZCwgZSwgZiwgZywgaCkge1xuICByZXR1cm4gZnVuLmEgPT09IDggPyBmdW4uZihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKSA6IGZ1bihhKShiKShjKShkKShlKShmKShnKShoKTtcbn1cbmZ1bmN0aW9uIEE5KGZ1biwgYSwgYiwgYywgZCwgZSwgZiwgZywgaCwgaSkge1xuICByZXR1cm4gZnVuLmEgPT09IDkgPyBmdW4uZihhLCBiLCBjLCBkLCBlLCBmLCBnLCBoLCBpKSA6IGZ1bihhKShiKShjKShkKShlKShmKShnKShoKShpKTtcbn1cblxuY29uc29sZS53YXJuKCdDb21waWxlZCBpbiBERUJVRyBtb2RlLiBGb2xsb3cgdGhlIGFkdmljZSBhdCBodHRwczovL2VsbS1sYW5nLm9yZy8wLjE5LjEvb3B0aW1pemUgZm9yIGJldHRlciBwZXJmb3JtYW5jZSBhbmQgc21hbGxlciBhc3NldHMuJyk7XG5cblxuLy8gRVFVQUxJVFlcblxuZnVuY3Rpb24gX1V0aWxzX2VxKHgsIHkpXG57XG5cdGZvciAoXG5cdFx0dmFyIHBhaXIsIHN0YWNrID0gW10sIGlzRXF1YWwgPSBfVXRpbHNfZXFIZWxwKHgsIHksIDAsIHN0YWNrKTtcblx0XHRpc0VxdWFsICYmIChwYWlyID0gc3RhY2sucG9wKCkpO1xuXHRcdGlzRXF1YWwgPSBfVXRpbHNfZXFIZWxwKHBhaXIuYSwgcGFpci5iLCAwLCBzdGFjaylcblx0XHQpXG5cdHt9XG5cblx0cmV0dXJuIGlzRXF1YWw7XG59XG5cbmZ1bmN0aW9uIF9VdGlsc19lcUhlbHAoeCwgeSwgZGVwdGgsIHN0YWNrKVxue1xuXHRpZiAoeCA9PT0geSlcblx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB4ICE9PSAnb2JqZWN0JyB8fCB4ID09PSBudWxsIHx8IHkgPT09IG51bGwpXG5cdHtcblx0XHR0eXBlb2YgeCA9PT0gJ2Z1bmN0aW9uJyAmJiBfRGVidWdfY3Jhc2goNSk7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYgKGRlcHRoID4gMTAwKVxuXHR7XG5cdFx0c3RhY2sucHVzaChfVXRpbHNfVHVwbGUyKHgseSkpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqL1xuXHRpZiAoeC4kID09PSAnU2V0X2VsbV9idWlsdGluJylcblx0e1xuXHRcdHggPSAkZWxtJGNvcmUkU2V0JHRvTGlzdCh4KTtcblx0XHR5ID0gJGVsbSRjb3JlJFNldCR0b0xpc3QoeSk7XG5cdH1cblx0aWYgKHguJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicgfHwgeC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpXG5cdHtcblx0XHR4ID0gJGVsbSRjb3JlJERpY3QkdG9MaXN0KHgpO1xuXHRcdHkgPSAkZWxtJGNvcmUkRGljdCR0b0xpc3QoeSk7XG5cdH1cblx0Ly8qL1xuXG5cdC8qKl9VTlVTRUQvXG5cdGlmICh4LiQgPCAwKVxuXHR7XG5cdFx0eCA9ICRlbG0kY29yZSREaWN0JHRvTGlzdCh4KTtcblx0XHR5ID0gJGVsbSRjb3JlJERpY3QkdG9MaXN0KHkpO1xuXHR9XG5cdC8vKi9cblxuXHRmb3IgKHZhciBrZXkgaW4geClcblx0e1xuXHRcdGlmICghX1V0aWxzX2VxSGVscCh4W2tleV0sIHlba2V5XSwgZGVwdGggKyAxLCBzdGFjaykpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxudmFyIF9VdGlsc19lcXVhbCA9IEYyKF9VdGlsc19lcSk7XG52YXIgX1V0aWxzX25vdEVxdWFsID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gIV9VdGlsc19lcShhLGIpOyB9KTtcblxuXG5cbi8vIENPTVBBUklTT05TXG5cbi8vIENvZGUgaW4gR2VuZXJhdGUvSmF2YVNjcmlwdC5ocywgQmFzaWNzLmpzLCBhbmQgTGlzdC5qcyBkZXBlbmRzIG9uXG4vLyB0aGUgcGFydGljdWxhciBpbnRlZ2VyIHZhbHVlcyBhc3NpZ25lZCB0byBMVCwgRVEsIGFuZCBHVC5cblxuZnVuY3Rpb24gX1V0aWxzX2NtcCh4LCB5LCBvcmQpXG57XG5cdGlmICh0eXBlb2YgeCAhPT0gJ29iamVjdCcpXG5cdHtcblx0XHRyZXR1cm4geCA9PT0geSA/IC8qRVEqLyAwIDogeCA8IHkgPyAvKkxUKi8gLTEgOiAvKkdUKi8gMTtcblx0fVxuXG5cdC8qKi9cblx0aWYgKHggaW5zdGFuY2VvZiBTdHJpbmcpXG5cdHtcblx0XHR2YXIgYSA9IHgudmFsdWVPZigpO1xuXHRcdHZhciBiID0geS52YWx1ZU9mKCk7XG5cdFx0cmV0dXJuIGEgPT09IGIgPyAwIDogYSA8IGIgPyAtMSA6IDE7XG5cdH1cblx0Ly8qL1xuXG5cdC8qKl9VTlVTRUQvXG5cdGlmICh0eXBlb2YgeC4kID09PSAndW5kZWZpbmVkJylcblx0Ly8qL1xuXHQvKiovXG5cdGlmICh4LiRbMF0gPT09ICcjJylcblx0Ly8qL1xuXHR7XG5cdFx0cmV0dXJuIChvcmQgPSBfVXRpbHNfY21wKHguYSwgeS5hKSlcblx0XHRcdD8gb3JkXG5cdFx0XHQ6IChvcmQgPSBfVXRpbHNfY21wKHguYiwgeS5iKSlcblx0XHRcdFx0PyBvcmRcblx0XHRcdFx0OiBfVXRpbHNfY21wKHguYywgeS5jKTtcblx0fVxuXG5cdC8vIHRyYXZlcnNlIGNvbnNlcyB1bnRpbCBlbmQgb2YgYSBsaXN0IG9yIGEgbWlzbWF0Y2hcblx0Zm9yICg7IHguYiAmJiB5LmIgJiYgIShvcmQgPSBfVXRpbHNfY21wKHguYSwgeS5hKSk7IHggPSB4LmIsIHkgPSB5LmIpIHt9IC8vIFdISUxFX0NPTlNFU1xuXHRyZXR1cm4gb3JkIHx8ICh4LmIgPyAvKkdUKi8gMSA6IHkuYiA/IC8qTFQqLyAtMSA6IC8qRVEqLyAwKTtcbn1cblxudmFyIF9VdGlsc19sdCA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIF9VdGlsc19jbXAoYSwgYikgPCAwOyB9KTtcbnZhciBfVXRpbHNfbGUgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBfVXRpbHNfY21wKGEsIGIpIDwgMTsgfSk7XG52YXIgX1V0aWxzX2d0ID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gX1V0aWxzX2NtcChhLCBiKSA+IDA7IH0pO1xudmFyIF9VdGlsc19nZSA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIF9VdGlsc19jbXAoYSwgYikgPj0gMDsgfSk7XG5cbnZhciBfVXRpbHNfY29tcGFyZSA9IEYyKGZ1bmN0aW9uKHgsIHkpXG57XG5cdHZhciBuID0gX1V0aWxzX2NtcCh4LCB5KTtcblx0cmV0dXJuIG4gPCAwID8gJGVsbSRjb3JlJEJhc2ljcyRMVCA6IG4gPyAkZWxtJGNvcmUkQmFzaWNzJEdUIDogJGVsbSRjb3JlJEJhc2ljcyRFUTtcbn0pO1xuXG5cbi8vIENPTU1PTiBWQUxVRVNcblxudmFyIF9VdGlsc19UdXBsZTBfVU5VU0VEID0gMDtcbnZhciBfVXRpbHNfVHVwbGUwID0geyAkOiAnIzAnIH07XG5cbmZ1bmN0aW9uIF9VdGlsc19UdXBsZTJfVU5VU0VEKGEsIGIpIHsgcmV0dXJuIHsgYTogYSwgYjogYiB9OyB9XG5mdW5jdGlvbiBfVXRpbHNfVHVwbGUyKGEsIGIpIHsgcmV0dXJuIHsgJDogJyMyJywgYTogYSwgYjogYiB9OyB9XG5cbmZ1bmN0aW9uIF9VdGlsc19UdXBsZTNfVU5VU0VEKGEsIGIsIGMpIHsgcmV0dXJuIHsgYTogYSwgYjogYiwgYzogYyB9OyB9XG5mdW5jdGlvbiBfVXRpbHNfVHVwbGUzKGEsIGIsIGMpIHsgcmV0dXJuIHsgJDogJyMzJywgYTogYSwgYjogYiwgYzogYyB9OyB9XG5cbmZ1bmN0aW9uIF9VdGlsc19jaHJfVU5VU0VEKGMpIHsgcmV0dXJuIGM7IH1cbmZ1bmN0aW9uIF9VdGlsc19jaHIoYykgeyByZXR1cm4gbmV3IFN0cmluZyhjKTsgfVxuXG5cbi8vIFJFQ09SRFNcblxuZnVuY3Rpb24gX1V0aWxzX3VwZGF0ZShvbGRSZWNvcmQsIHVwZGF0ZWRGaWVsZHMpXG57XG5cdHZhciBuZXdSZWNvcmQgPSB7fTtcblxuXHRmb3IgKHZhciBrZXkgaW4gb2xkUmVjb3JkKVxuXHR7XG5cdFx0bmV3UmVjb3JkW2tleV0gPSBvbGRSZWNvcmRba2V5XTtcblx0fVxuXG5cdGZvciAodmFyIGtleSBpbiB1cGRhdGVkRmllbGRzKVxuXHR7XG5cdFx0bmV3UmVjb3JkW2tleV0gPSB1cGRhdGVkRmllbGRzW2tleV07XG5cdH1cblxuXHRyZXR1cm4gbmV3UmVjb3JkO1xufVxuXG5cbi8vIEFQUEVORFxuXG52YXIgX1V0aWxzX2FwcGVuZCA9IEYyKF9VdGlsc19hcCk7XG5cbmZ1bmN0aW9uIF9VdGlsc19hcCh4cywgeXMpXG57XG5cdC8vIGFwcGVuZCBTdHJpbmdzXG5cdGlmICh0eXBlb2YgeHMgPT09ICdzdHJpbmcnKVxuXHR7XG5cdFx0cmV0dXJuIHhzICsgeXM7XG5cdH1cblxuXHQvLyBhcHBlbmQgTGlzdHNcblx0aWYgKCF4cy5iKVxuXHR7XG5cdFx0cmV0dXJuIHlzO1xuXHR9XG5cdHZhciByb290ID0gX0xpc3RfQ29ucyh4cy5hLCB5cyk7XG5cdHhzID0geHMuYlxuXHRmb3IgKHZhciBjdXJyID0gcm9vdDsgeHMuYjsgeHMgPSB4cy5iKSAvLyBXSElMRV9DT05TXG5cdHtcblx0XHRjdXJyID0gY3Vyci5iID0gX0xpc3RfQ29ucyh4cy5hLCB5cyk7XG5cdH1cblx0cmV0dXJuIHJvb3Q7XG59XG5cblxuXG52YXIgX0xpc3RfTmlsX1VOVVNFRCA9IHsgJDogMCB9O1xudmFyIF9MaXN0X05pbCA9IHsgJDogJ1tdJyB9O1xuXG5mdW5jdGlvbiBfTGlzdF9Db25zX1VOVVNFRChoZCwgdGwpIHsgcmV0dXJuIHsgJDogMSwgYTogaGQsIGI6IHRsIH07IH1cbmZ1bmN0aW9uIF9MaXN0X0NvbnMoaGQsIHRsKSB7IHJldHVybiB7ICQ6ICc6OicsIGE6IGhkLCBiOiB0bCB9OyB9XG5cblxudmFyIF9MaXN0X2NvbnMgPSBGMihfTGlzdF9Db25zKTtcblxuZnVuY3Rpb24gX0xpc3RfZnJvbUFycmF5KGFycilcbntcblx0dmFyIG91dCA9IF9MaXN0X05pbDtcblx0Zm9yICh2YXIgaSA9IGFyci5sZW5ndGg7IGktLTsgKVxuXHR7XG5cdFx0b3V0ID0gX0xpc3RfQ29ucyhhcnJbaV0sIG91dCk7XG5cdH1cblx0cmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gX0xpc3RfdG9BcnJheSh4cylcbntcblx0Zm9yICh2YXIgb3V0ID0gW107IHhzLmI7IHhzID0geHMuYikgLy8gV0hJTEVfQ09OU1xuXHR7XG5cdFx0b3V0LnB1c2goeHMuYSk7XG5cdH1cblx0cmV0dXJuIG91dDtcbn1cblxudmFyIF9MaXN0X21hcDIgPSBGMyhmdW5jdGlvbihmLCB4cywgeXMpXG57XG5cdGZvciAodmFyIGFyciA9IFtdOyB4cy5iICYmIHlzLmI7IHhzID0geHMuYiwgeXMgPSB5cy5iKSAvLyBXSElMRV9DT05TRVNcblx0e1xuXHRcdGFyci5wdXNoKEEyKGYsIHhzLmEsIHlzLmEpKTtcblx0fVxuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KGFycik7XG59KTtcblxudmFyIF9MaXN0X21hcDMgPSBGNChmdW5jdGlvbihmLCB4cywgeXMsIHpzKVxue1xuXHRmb3IgKHZhciBhcnIgPSBbXTsgeHMuYiAmJiB5cy5iICYmIHpzLmI7IHhzID0geHMuYiwgeXMgPSB5cy5iLCB6cyA9IHpzLmIpIC8vIFdISUxFX0NPTlNFU1xuXHR7XG5cdFx0YXJyLnB1c2goQTMoZiwgeHMuYSwgeXMuYSwgenMuYSkpO1xuXHR9XG5cdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoYXJyKTtcbn0pO1xuXG52YXIgX0xpc3RfbWFwNCA9IEY1KGZ1bmN0aW9uKGYsIHdzLCB4cywgeXMsIHpzKVxue1xuXHRmb3IgKHZhciBhcnIgPSBbXTsgd3MuYiAmJiB4cy5iICYmIHlzLmIgJiYgenMuYjsgd3MgPSB3cy5iLCB4cyA9IHhzLmIsIHlzID0geXMuYiwgenMgPSB6cy5iKSAvLyBXSElMRV9DT05TRVNcblx0e1xuXHRcdGFyci5wdXNoKEE0KGYsIHdzLmEsIHhzLmEsIHlzLmEsIHpzLmEpKTtcblx0fVxuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KGFycik7XG59KTtcblxudmFyIF9MaXN0X21hcDUgPSBGNihmdW5jdGlvbihmLCB2cywgd3MsIHhzLCB5cywgenMpXG57XG5cdGZvciAodmFyIGFyciA9IFtdOyB2cy5iICYmIHdzLmIgJiYgeHMuYiAmJiB5cy5iICYmIHpzLmI7IHZzID0gdnMuYiwgd3MgPSB3cy5iLCB4cyA9IHhzLmIsIHlzID0geXMuYiwgenMgPSB6cy5iKSAvLyBXSElMRV9DT05TRVNcblx0e1xuXHRcdGFyci5wdXNoKEE1KGYsIHZzLmEsIHdzLmEsIHhzLmEsIHlzLmEsIHpzLmEpKTtcblx0fVxuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KGFycik7XG59KTtcblxudmFyIF9MaXN0X3NvcnRCeSA9IEYyKGZ1bmN0aW9uKGYsIHhzKVxue1xuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KF9MaXN0X3RvQXJyYXkoeHMpLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuXHRcdHJldHVybiBfVXRpbHNfY21wKGYoYSksIGYoYikpO1xuXHR9KSk7XG59KTtcblxudmFyIF9MaXN0X3NvcnRXaXRoID0gRjIoZnVuY3Rpb24oZiwgeHMpXG57XG5cdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoX0xpc3RfdG9BcnJheSh4cykuc29ydChmdW5jdGlvbihhLCBiKSB7XG5cdFx0dmFyIG9yZCA9IEEyKGYsIGEsIGIpO1xuXHRcdHJldHVybiBvcmQgPT09ICRlbG0kY29yZSRCYXNpY3MkRVEgPyAwIDogb3JkID09PSAkZWxtJGNvcmUkQmFzaWNzJExUID8gLTEgOiAxO1xuXHR9KSk7XG59KTtcblxuXG5cbnZhciBfSnNBcnJheV9lbXB0eSA9IFtdO1xuXG5mdW5jdGlvbiBfSnNBcnJheV9zaW5nbGV0b24odmFsdWUpXG57XG4gICAgcmV0dXJuIFt2YWx1ZV07XG59XG5cbmZ1bmN0aW9uIF9Kc0FycmF5X2xlbmd0aChhcnJheSlcbntcbiAgICByZXR1cm4gYXJyYXkubGVuZ3RoO1xufVxuXG52YXIgX0pzQXJyYXlfaW5pdGlhbGl6ZSA9IEYzKGZ1bmN0aW9uKHNpemUsIG9mZnNldCwgZnVuYylcbntcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KHNpemUpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspXG4gICAge1xuICAgICAgICByZXN1bHRbaV0gPSBmdW5jKG9mZnNldCArIGkpO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59KTtcblxudmFyIF9Kc0FycmF5X2luaXRpYWxpemVGcm9tTGlzdCA9IEYyKGZ1bmN0aW9uIChtYXgsIGxzKVxue1xuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobWF4KTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWF4ICYmIGxzLmI7IGkrKylcbiAgICB7XG4gICAgICAgIHJlc3VsdFtpXSA9IGxzLmE7XG4gICAgICAgIGxzID0gbHMuYjtcbiAgICB9XG5cbiAgICByZXN1bHQubGVuZ3RoID0gaTtcbiAgICByZXR1cm4gX1V0aWxzX1R1cGxlMihyZXN1bHQsIGxzKTtcbn0pO1xuXG52YXIgX0pzQXJyYXlfdW5zYWZlR2V0ID0gRjIoZnVuY3Rpb24oaW5kZXgsIGFycmF5KVxue1xuICAgIHJldHVybiBhcnJheVtpbmRleF07XG59KTtcblxudmFyIF9Kc0FycmF5X3Vuc2FmZVNldCA9IEYzKGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSwgYXJyYXkpXG57XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlbmd0aCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgcmVzdWx0W2ldID0gYXJyYXlbaV07XG4gICAgfVxuXG4gICAgcmVzdWx0W2luZGV4XSA9IHZhbHVlO1xuICAgIHJldHVybiByZXN1bHQ7XG59KTtcblxudmFyIF9Kc0FycmF5X3B1c2ggPSBGMihmdW5jdGlvbih2YWx1ZSwgYXJyYXkpXG57XG4gICAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlbmd0aCArIDEpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHJlc3VsdFtpXSA9IGFycmF5W2ldO1xuICAgIH1cblxuICAgIHJlc3VsdFtsZW5ndGhdID0gdmFsdWU7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuXG52YXIgX0pzQXJyYXlfZm9sZGwgPSBGMyhmdW5jdGlvbihmdW5jLCBhY2MsIGFycmF5KVxue1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgIHtcbiAgICAgICAgYWNjID0gQTIoZnVuYywgYXJyYXlbaV0sIGFjYyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjYztcbn0pO1xuXG52YXIgX0pzQXJyYXlfZm9sZHIgPSBGMyhmdW5jdGlvbihmdW5jLCBhY2MsIGFycmF5KVxue1xuICAgIGZvciAodmFyIGkgPSBhcnJheS5sZW5ndGggLSAxOyBpID49IDA7IGktLSlcbiAgICB7XG4gICAgICAgIGFjYyA9IEEyKGZ1bmMsIGFycmF5W2ldLCBhY2MpO1xuICAgIH1cblxuICAgIHJldHVybiBhY2M7XG59KTtcblxudmFyIF9Kc0FycmF5X21hcCA9IEYyKGZ1bmN0aW9uKGZ1bmMsIGFycmF5KVxue1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHJlc3VsdFtpXSA9IGZ1bmMoYXJyYXlbaV0pO1xuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG59KTtcblxudmFyIF9Kc0FycmF5X2luZGV4ZWRNYXAgPSBGMyhmdW5jdGlvbihmdW5jLCBvZmZzZXQsIGFycmF5KVxue1xuICAgIHZhciBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShsZW5ndGgpO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICAgIHJlc3VsdFtpXSA9IEEyKGZ1bmMsIG9mZnNldCArIGksIGFycmF5W2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG5cbnZhciBfSnNBcnJheV9zbGljZSA9IEYzKGZ1bmN0aW9uKGZyb20sIHRvLCBhcnJheSlcbntcbiAgICByZXR1cm4gYXJyYXkuc2xpY2UoZnJvbSwgdG8pO1xufSk7XG5cbnZhciBfSnNBcnJheV9hcHBlbmROID0gRjMoZnVuY3Rpb24obiwgZGVzdCwgc291cmNlKVxue1xuICAgIHZhciBkZXN0TGVuID0gZGVzdC5sZW5ndGg7XG4gICAgdmFyIGl0ZW1zVG9Db3B5ID0gbiAtIGRlc3RMZW47XG5cbiAgICBpZiAoaXRlbXNUb0NvcHkgPiBzb3VyY2UubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgaXRlbXNUb0NvcHkgPSBzb3VyY2UubGVuZ3RoO1xuICAgIH1cblxuICAgIHZhciBzaXplID0gZGVzdExlbiArIGl0ZW1zVG9Db3B5O1xuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoc2l6ZSk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRlc3RMZW47IGkrKylcbiAgICB7XG4gICAgICAgIHJlc3VsdFtpXSA9IGRlc3RbaV07XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpdGVtc1RvQ29weTsgaSsrKVxuICAgIHtcbiAgICAgICAgcmVzdWx0W2kgKyBkZXN0TGVuXSA9IHNvdXJjZVtpXTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufSk7XG5cblxuXG4vLyBMT0dcblxudmFyIF9EZWJ1Z19sb2dfVU5VU0VEID0gRjIoZnVuY3Rpb24odGFnLCB2YWx1ZSlcbntcblx0cmV0dXJuIHZhbHVlO1xufSk7XG5cbnZhciBfRGVidWdfbG9nID0gRjIoZnVuY3Rpb24odGFnLCB2YWx1ZSlcbntcblx0Y29uc29sZS5sb2codGFnICsgJzogJyArIF9EZWJ1Z190b1N0cmluZyh2YWx1ZSkpO1xuXHRyZXR1cm4gdmFsdWU7XG59KTtcblxuXG4vLyBUT0RPU1xuXG5mdW5jdGlvbiBfRGVidWdfdG9kbyhtb2R1bGVOYW1lLCByZWdpb24pXG57XG5cdHJldHVybiBmdW5jdGlvbihtZXNzYWdlKSB7XG5cdFx0X0RlYnVnX2NyYXNoKDgsIG1vZHVsZU5hbWUsIHJlZ2lvbiwgbWVzc2FnZSk7XG5cdH07XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z190b2RvQ2FzZShtb2R1bGVOYW1lLCByZWdpb24sIHZhbHVlKVxue1xuXHRyZXR1cm4gZnVuY3Rpb24obWVzc2FnZSkge1xuXHRcdF9EZWJ1Z19jcmFzaCg5LCBtb2R1bGVOYW1lLCByZWdpb24sIHZhbHVlLCBtZXNzYWdlKTtcblx0fTtcbn1cblxuXG4vLyBUTyBTVFJJTkdcblxuZnVuY3Rpb24gX0RlYnVnX3RvU3RyaW5nX1VOVVNFRCh2YWx1ZSlcbntcblx0cmV0dXJuICc8aW50ZXJuYWxzPic7XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z190b1N0cmluZyh2YWx1ZSlcbntcblx0cmV0dXJuIF9EZWJ1Z190b0Fuc2lTdHJpbmcoZmFsc2UsIHZhbHVlKTtcbn1cblxuZnVuY3Rpb24gX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCB2YWx1ZSlcbntcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJylcblx0e1xuXHRcdHJldHVybiBfRGVidWdfaW50ZXJuYWxDb2xvcihhbnNpLCAnPGZ1bmN0aW9uPicpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKVxuXHR7XG5cdFx0cmV0dXJuIF9EZWJ1Z19jdG9yQ29sb3IoYW5zaSwgdmFsdWUgPyAnVHJ1ZScgOiAnRmFsc2UnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKVxuXHR7XG5cdFx0cmV0dXJuIF9EZWJ1Z19udW1iZXJDb2xvcihhbnNpLCB2YWx1ZSArICcnKTtcblx0fVxuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZylcblx0e1xuXHRcdHJldHVybiBfRGVidWdfY2hhckNvbG9yKGFuc2ksIFwiJ1wiICsgX0RlYnVnX2FkZFNsYXNoZXModmFsdWUsIHRydWUpICsgXCInXCIpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpXG5cdHtcblx0XHRyZXR1cm4gX0RlYnVnX3N0cmluZ0NvbG9yKGFuc2ksICdcIicgKyBfRGVidWdfYWRkU2xhc2hlcyh2YWx1ZSwgZmFsc2UpICsgJ1wiJyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiAnJCcgaW4gdmFsdWUpXG5cdHtcblx0XHR2YXIgdGFnID0gdmFsdWUuJDtcblxuXHRcdGlmICh0eXBlb2YgdGFnID09PSAnbnVtYmVyJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gX0RlYnVnX2ludGVybmFsQ29sb3IoYW5zaSwgJzxpbnRlcm5hbHM+Jyk7XG5cdFx0fVxuXG5cdFx0aWYgKHRhZ1swXSA9PT0gJyMnKVxuXHRcdHtcblx0XHRcdHZhciBvdXRwdXQgPSBbXTtcblx0XHRcdGZvciAodmFyIGsgaW4gdmFsdWUpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChrID09PSAnJCcpIGNvbnRpbnVlO1xuXHRcdFx0XHRvdXRwdXQucHVzaChfRGVidWdfdG9BbnNpU3RyaW5nKGFuc2ksIHZhbHVlW2tdKSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJygnICsgb3V0cHV0LmpvaW4oJywnKSArICcpJztcblx0XHR9XG5cblx0XHRpZiAodGFnID09PSAnU2V0X2VsbV9idWlsdGluJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gX0RlYnVnX2N0b3JDb2xvcihhbnNpLCAnU2V0Jylcblx0XHRcdFx0KyBfRGVidWdfZmFkZUNvbG9yKGFuc2ksICcuZnJvbUxpc3QnKSArICcgJ1xuXHRcdFx0XHQrIF9EZWJ1Z190b0Fuc2lTdHJpbmcoYW5zaSwgJGVsbSRjb3JlJFNldCR0b0xpc3QodmFsdWUpKTtcblx0XHR9XG5cblx0XHRpZiAodGFnID09PSAnUkJOb2RlX2VsbV9idWlsdGluJyB8fCB0YWcgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gX0RlYnVnX2N0b3JDb2xvcihhbnNpLCAnRGljdCcpXG5cdFx0XHRcdCsgX0RlYnVnX2ZhZGVDb2xvcihhbnNpLCAnLmZyb21MaXN0JykgKyAnICdcblx0XHRcdFx0KyBfRGVidWdfdG9BbnNpU3RyaW5nKGFuc2ksICRlbG0kY29yZSREaWN0JHRvTGlzdCh2YWx1ZSkpO1xuXHRcdH1cblxuXHRcdGlmICh0YWcgPT09ICdBcnJheV9lbG1fYnVpbHRpbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIF9EZWJ1Z19jdG9yQ29sb3IoYW5zaSwgJ0FycmF5Jylcblx0XHRcdFx0KyBfRGVidWdfZmFkZUNvbG9yKGFuc2ksICcuZnJvbUxpc3QnKSArICcgJ1xuXHRcdFx0XHQrIF9EZWJ1Z190b0Fuc2lTdHJpbmcoYW5zaSwgJGVsbSRjb3JlJEFycmF5JHRvTGlzdCh2YWx1ZSkpO1xuXHRcdH1cblxuXHRcdGlmICh0YWcgPT09ICc6OicgfHwgdGFnID09PSAnW10nKVxuXHRcdHtcblx0XHRcdHZhciBvdXRwdXQgPSAnWyc7XG5cblx0XHRcdHZhbHVlLmIgJiYgKG91dHB1dCArPSBfRGVidWdfdG9BbnNpU3RyaW5nKGFuc2ksIHZhbHVlLmEpLCB2YWx1ZSA9IHZhbHVlLmIpXG5cblx0XHRcdGZvciAoOyB2YWx1ZS5iOyB2YWx1ZSA9IHZhbHVlLmIpIC8vIFdISUxFX0NPTlNcblx0XHRcdHtcblx0XHRcdFx0b3V0cHV0ICs9ICcsJyArIF9EZWJ1Z190b0Fuc2lTdHJpbmcoYW5zaSwgdmFsdWUuYSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gb3V0cHV0ICsgJ10nO1xuXHRcdH1cblxuXHRcdHZhciBvdXRwdXQgPSAnJztcblx0XHRmb3IgKHZhciBpIGluIHZhbHVlKVxuXHRcdHtcblx0XHRcdGlmIChpID09PSAnJCcpIGNvbnRpbnVlO1xuXHRcdFx0dmFyIHN0ciA9IF9EZWJ1Z190b0Fuc2lTdHJpbmcoYW5zaSwgdmFsdWVbaV0pO1xuXHRcdFx0dmFyIGMwID0gc3RyWzBdO1xuXHRcdFx0dmFyIHBhcmVubGVzcyA9IGMwID09PSAneycgfHwgYzAgPT09ICcoJyB8fCBjMCA9PT0gJ1snIHx8IGMwID09PSAnPCcgfHwgYzAgPT09ICdcIicgfHwgc3RyLmluZGV4T2YoJyAnKSA8IDA7XG5cdFx0XHRvdXRwdXQgKz0gJyAnICsgKHBhcmVubGVzcyA/IHN0ciA6ICcoJyArIHN0ciArICcpJyk7XG5cdFx0fVxuXHRcdHJldHVybiBfRGVidWdfY3RvckNvbG9yKGFuc2ksIHRhZykgKyBvdXRwdXQ7XG5cdH1cblxuXHRpZiAodHlwZW9mIERhdGFWaWV3ID09PSAnZnVuY3Rpb24nICYmIHZhbHVlIGluc3RhbmNlb2YgRGF0YVZpZXcpXG5cdHtcblx0XHRyZXR1cm4gX0RlYnVnX3N0cmluZ0NvbG9yKGFuc2ksICc8JyArIHZhbHVlLmJ5dGVMZW5ndGggKyAnIGJ5dGVzPicpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiBGaWxlICE9PSAndW5kZWZpbmVkJyAmJiB2YWx1ZSBpbnN0YW5jZW9mIEZpbGUpXG5cdHtcblx0XHRyZXR1cm4gX0RlYnVnX2ludGVybmFsQ29sb3IoYW5zaSwgJzwnICsgdmFsdWUubmFtZSArICc+Jyk7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jylcblx0e1xuXHRcdHZhciBvdXRwdXQgPSBbXTtcblx0XHRmb3IgKHZhciBrZXkgaW4gdmFsdWUpXG5cdFx0e1xuXHRcdFx0dmFyIGZpZWxkID0ga2V5WzBdID09PSAnXycgPyBrZXkuc2xpY2UoMSkgOiBrZXk7XG5cdFx0XHRvdXRwdXQucHVzaChfRGVidWdfZmFkZUNvbG9yKGFuc2ksIGZpZWxkKSArICcgPSAnICsgX0RlYnVnX3RvQW5zaVN0cmluZyhhbnNpLCB2YWx1ZVtrZXldKSk7XG5cdFx0fVxuXHRcdGlmIChvdXRwdXQubGVuZ3RoID09PSAwKVxuXHRcdHtcblx0XHRcdHJldHVybiAne30nO1xuXHRcdH1cblx0XHRyZXR1cm4gJ3sgJyArIG91dHB1dC5qb2luKCcsICcpICsgJyB9Jztcblx0fVxuXG5cdHJldHVybiBfRGVidWdfaW50ZXJuYWxDb2xvcihhbnNpLCAnPGludGVybmFscz4nKTtcbn1cblxuZnVuY3Rpb24gX0RlYnVnX2FkZFNsYXNoZXMoc3RyLCBpc0NoYXIpXG57XG5cdHZhciBzID0gc3RyXG5cdFx0LnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJylcblx0XHQucmVwbGFjZSgvXFxuL2csICdcXFxcbicpXG5cdFx0LnJlcGxhY2UoL1xcdC9nLCAnXFxcXHQnKVxuXHRcdC5yZXBsYWNlKC9cXHIvZywgJ1xcXFxyJylcblx0XHQucmVwbGFjZSgvXFx2L2csICdcXFxcdicpXG5cdFx0LnJlcGxhY2UoL1xcMC9nLCAnXFxcXDAnKTtcblxuXHRpZiAoaXNDaGFyKVxuXHR7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvXFwnL2csICdcXFxcXFwnJyk7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0cmV0dXJuIHMucmVwbGFjZSgvXFxcIi9nLCAnXFxcXFwiJyk7XG5cdH1cbn1cblxuZnVuY3Rpb24gX0RlYnVnX2N0b3JDb2xvcihhbnNpLCBzdHJpbmcpXG57XG5cdHJldHVybiBhbnNpID8gJ1xceDFiWzk2bScgKyBzdHJpbmcgKyAnXFx4MWJbMG0nIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBfRGVidWdfbnVtYmVyQ29sb3IoYW5zaSwgc3RyaW5nKVxue1xuXHRyZXR1cm4gYW5zaSA/ICdcXHgxYls5NW0nICsgc3RyaW5nICsgJ1xceDFiWzBtJyA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gX0RlYnVnX3N0cmluZ0NvbG9yKGFuc2ksIHN0cmluZylcbntcblx0cmV0dXJuIGFuc2kgPyAnXFx4MWJbOTNtJyArIHN0cmluZyArICdcXHgxYlswbScgOiBzdHJpbmc7XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z19jaGFyQ29sb3IoYW5zaSwgc3RyaW5nKVxue1xuXHRyZXR1cm4gYW5zaSA/ICdcXHgxYls5Mm0nICsgc3RyaW5nICsgJ1xceDFiWzBtJyA6IHN0cmluZztcbn1cblxuZnVuY3Rpb24gX0RlYnVnX2ZhZGVDb2xvcihhbnNpLCBzdHJpbmcpXG57XG5cdHJldHVybiBhbnNpID8gJ1xceDFiWzM3bScgKyBzdHJpbmcgKyAnXFx4MWJbMG0nIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBfRGVidWdfaW50ZXJuYWxDb2xvcihhbnNpLCBzdHJpbmcpXG57XG5cdHJldHVybiBhbnNpID8gJ1xceDFiWzM2bScgKyBzdHJpbmcgKyAnXFx4MWJbMG0nIDogc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBfRGVidWdfdG9IZXhEaWdpdChuKVxue1xuXHRyZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShuIDwgMTAgPyA0OCArIG4gOiA1NSArIG4pO1xufVxuXG5cbi8vIENSQVNIXG5cblxuZnVuY3Rpb24gX0RlYnVnX2NyYXNoX1VOVVNFRChpZGVudGlmaWVyKVxue1xuXHR0aHJvdyBuZXcgRXJyb3IoJ2h0dHBzOi8vZ2l0aHViLmNvbS9lbG0vY29yZS9ibG9iLzEuMC4wL2hpbnRzLycgKyBpZGVudGlmaWVyICsgJy5tZCcpO1xufVxuXG5cbmZ1bmN0aW9uIF9EZWJ1Z19jcmFzaChpZGVudGlmaWVyLCBmYWN0MSwgZmFjdDIsIGZhY3QzLCBmYWN0NClcbntcblx0c3dpdGNoKGlkZW50aWZpZXIpXG5cdHtcblx0XHRjYXNlIDA6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1doYXQgbm9kZSBzaG91bGQgSSB0YWtlIG92ZXI/IEluIEphdmFTY3JpcHQgSSBuZWVkIHNvbWV0aGluZyBsaWtlOlxcblxcbiAgICBFbG0uTWFpbi5pbml0KHtcXG4gICAgICAgIG5vZGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZWxtLW5vZGVcIilcXG4gICAgfSlcXG5cXG5Zb3UgbmVlZCB0byBkbyB0aGlzIHdpdGggYW55IEJyb3dzZXIuc2FuZGJveCBvciBCcm93c2VyLmVsZW1lbnQgcHJvZ3JhbS4nKTtcblxuXHRcdGNhc2UgMTpcblx0XHRcdHRocm93IG5ldyBFcnJvcignQnJvd3Nlci5hcHBsaWNhdGlvbiBwcm9ncmFtcyBjYW5ub3QgaGFuZGxlIFVSTHMgbGlrZSB0aGlzOlxcblxcbiAgICAnICsgZG9jdW1lbnQubG9jYXRpb24uaHJlZiArICdcXG5cXG5XaGF0IGlzIHRoZSByb290PyBUaGUgcm9vdCBvZiB5b3VyIGZpbGUgc3lzdGVtPyBUcnkgbG9va2luZyBhdCB0aGlzIHByb2dyYW0gd2l0aCBgZWxtIHJlYWN0b3JgIG9yIHNvbWUgb3RoZXIgc2VydmVyLicpO1xuXG5cdFx0Y2FzZSAyOlxuXHRcdFx0dmFyIGpzb25FcnJvclN0cmluZyA9IGZhY3QxO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdQcm9ibGVtIHdpdGggdGhlIGZsYWdzIGdpdmVuIHRvIHlvdXIgRWxtIHByb2dyYW0gb24gaW5pdGlhbGl6YXRpb24uXFxuXFxuJyArIGpzb25FcnJvclN0cmluZyk7XG5cblx0XHRjYXNlIDM6XG5cdFx0XHR2YXIgcG9ydE5hbWUgPSBmYWN0MTtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVGhlcmUgY2FuIG9ubHkgYmUgb25lIHBvcnQgbmFtZWQgYCcgKyBwb3J0TmFtZSArICdgLCBidXQgeW91ciBwcm9ncmFtIGhhcyBtdWx0aXBsZS4nKTtcblxuXHRcdGNhc2UgNDpcblx0XHRcdHZhciBwb3J0TmFtZSA9IGZhY3QxO1xuXHRcdFx0dmFyIHByb2JsZW0gPSBmYWN0Mjtcblx0XHRcdHRocm93IG5ldyBFcnJvcignVHJ5aW5nIHRvIHNlbmQgYW4gdW5leHBlY3RlZCB0eXBlIG9mIHZhbHVlIHRocm91Z2ggcG9ydCBgJyArIHBvcnROYW1lICsgJ2A6XFxuJyArIHByb2JsZW0pO1xuXG5cdFx0Y2FzZSA1OlxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdUcnlpbmcgdG8gdXNlIGAoPT0pYCBvbiBmdW5jdGlvbnMuXFxuVGhlcmUgaXMgbm8gd2F5IHRvIGtub3cgaWYgZnVuY3Rpb25zIGFyZSBcInRoZSBzYW1lXCIgaW4gdGhlIEVsbSBzZW5zZS5cXG5SZWFkIG1vcmUgYWJvdXQgdGhpcyBhdCBodHRwczovL3BhY2thZ2UuZWxtLWxhbmcub3JnL3BhY2thZ2VzL2VsbS9jb3JlL2xhdGVzdC9CYXNpY3MjPT0gd2hpY2ggZGVzY3JpYmVzIHdoeSBpdCBpcyB0aGlzIHdheSBhbmQgd2hhdCB0aGUgYmV0dGVyIHZlcnNpb24gd2lsbCBsb29rIGxpa2UuJyk7XG5cblx0XHRjYXNlIDY6XG5cdFx0XHR2YXIgbW9kdWxlTmFtZSA9IGZhY3QxO1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdZb3VyIHBhZ2UgaXMgbG9hZGluZyBtdWx0aXBsZSBFbG0gc2NyaXB0cyB3aXRoIGEgbW9kdWxlIG5hbWVkICcgKyBtb2R1bGVOYW1lICsgJy4gTWF5YmUgYSBkdXBsaWNhdGUgc2NyaXB0IGlzIGdldHRpbmcgbG9hZGVkIGFjY2lkZW50YWxseT8gSWYgbm90LCByZW5hbWUgb25lIG9mIHRoZW0gc28gSSBrbm93IHdoaWNoIGlzIHdoaWNoIScpO1xuXG5cdFx0Y2FzZSA4OlxuXHRcdFx0dmFyIG1vZHVsZU5hbWUgPSBmYWN0MTtcblx0XHRcdHZhciByZWdpb24gPSBmYWN0Mjtcblx0XHRcdHZhciBtZXNzYWdlID0gZmFjdDM7XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ1RPRE8gaW4gbW9kdWxlIGAnICsgbW9kdWxlTmFtZSArICdgICcgKyBfRGVidWdfcmVnaW9uVG9TdHJpbmcocmVnaW9uKSArICdcXG5cXG4nICsgbWVzc2FnZSk7XG5cblx0XHRjYXNlIDk6XG5cdFx0XHR2YXIgbW9kdWxlTmFtZSA9IGZhY3QxO1xuXHRcdFx0dmFyIHJlZ2lvbiA9IGZhY3QyO1xuXHRcdFx0dmFyIHZhbHVlID0gZmFjdDM7XG5cdFx0XHR2YXIgbWVzc2FnZSA9IGZhY3Q0O1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHQnVE9ETyBpbiBtb2R1bGUgYCcgKyBtb2R1bGVOYW1lICsgJ2AgZnJvbSB0aGUgYGNhc2VgIGV4cHJlc3Npb24gJ1xuXHRcdFx0XHQrIF9EZWJ1Z19yZWdpb25Ub1N0cmluZyhyZWdpb24pICsgJ1xcblxcbkl0IHJlY2VpdmVkIHRoZSBmb2xsb3dpbmcgdmFsdWU6XFxuXFxuICAgICdcblx0XHRcdFx0KyBfRGVidWdfdG9TdHJpbmcodmFsdWUpLnJlcGxhY2UoJ1xcbicsICdcXG4gICAgJylcblx0XHRcdFx0KyAnXFxuXFxuQnV0IHRoZSBicmFuY2ggdGhhdCBoYW5kbGVzIGl0IHNheXM6XFxuXFxuICAgICcgKyBtZXNzYWdlLnJlcGxhY2UoJ1xcbicsICdcXG4gICAgJylcblx0XHRcdCk7XG5cblx0XHRjYXNlIDEwOlxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCdCdWcgaW4gaHR0cHM6Ly9naXRodWIuY29tL2VsbS92aXJ0dWFsLWRvbS9pc3N1ZXMnKTtcblxuXHRcdGNhc2UgMTE6XG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBwZXJmb3JtIG1vZCAwLiBEaXZpc2lvbiBieSB6ZXJvIGVycm9yLicpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z19yZWdpb25Ub1N0cmluZyhyZWdpb24pXG57XG5cdGlmIChyZWdpb24uc3RhcnQubGluZSA9PT0gcmVnaW9uLmVuZC5saW5lKVxuXHR7XG5cdFx0cmV0dXJuICdvbiBsaW5lICcgKyByZWdpb24uc3RhcnQubGluZTtcblx0fVxuXHRyZXR1cm4gJ29uIGxpbmVzICcgKyByZWdpb24uc3RhcnQubGluZSArICcgdGhyb3VnaCAnICsgcmVnaW9uLmVuZC5saW5lO1xufVxuXG5cblxuLy8gTUFUSFxuXG52YXIgX0Jhc2ljc19hZGQgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhICsgYjsgfSk7XG52YXIgX0Jhc2ljc19zdWIgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhIC0gYjsgfSk7XG52YXIgX0Jhc2ljc19tdWwgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhICogYjsgfSk7XG52YXIgX0Jhc2ljc19mZGl2ID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAvIGI7IH0pO1xudmFyIF9CYXNpY3NfaWRpdiA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIChhIC8gYikgfCAwOyB9KTtcbnZhciBfQmFzaWNzX3BvdyA9IEYyKE1hdGgucG93KTtcblxudmFyIF9CYXNpY3NfcmVtYWluZGVyQnkgPSBGMihmdW5jdGlvbihiLCBhKSB7IHJldHVybiBhICUgYjsgfSk7XG5cbi8vIGh0dHBzOi8vd3d3Lm1pY3Jvc29mdC5jb20vZW4tdXMvcmVzZWFyY2gvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDIvZGl2bW9kbm90ZS1sZXR0ZXIucGRmXG52YXIgX0Jhc2ljc19tb2RCeSA9IEYyKGZ1bmN0aW9uKG1vZHVsdXMsIHgpXG57XG5cdHZhciBhbnN3ZXIgPSB4ICUgbW9kdWx1cztcblx0cmV0dXJuIG1vZHVsdXMgPT09IDBcblx0XHQ/IF9EZWJ1Z19jcmFzaCgxMSlcblx0XHQ6XG5cdCgoYW5zd2VyID4gMCAmJiBtb2R1bHVzIDwgMCkgfHwgKGFuc3dlciA8IDAgJiYgbW9kdWx1cyA+IDApKVxuXHRcdD8gYW5zd2VyICsgbW9kdWx1c1xuXHRcdDogYW5zd2VyO1xufSk7XG5cblxuLy8gVFJJR09OT01FVFJZXG5cbnZhciBfQmFzaWNzX3BpID0gTWF0aC5QSTtcbnZhciBfQmFzaWNzX2UgPSBNYXRoLkU7XG52YXIgX0Jhc2ljc19jb3MgPSBNYXRoLmNvcztcbnZhciBfQmFzaWNzX3NpbiA9IE1hdGguc2luO1xudmFyIF9CYXNpY3NfdGFuID0gTWF0aC50YW47XG52YXIgX0Jhc2ljc19hY29zID0gTWF0aC5hY29zO1xudmFyIF9CYXNpY3NfYXNpbiA9IE1hdGguYXNpbjtcbnZhciBfQmFzaWNzX2F0YW4gPSBNYXRoLmF0YW47XG52YXIgX0Jhc2ljc19hdGFuMiA9IEYyKE1hdGguYXRhbjIpO1xuXG5cbi8vIE1PUkUgTUFUSFxuXG5mdW5jdGlvbiBfQmFzaWNzX3RvRmxvYXQoeCkgeyByZXR1cm4geDsgfVxuZnVuY3Rpb24gX0Jhc2ljc190cnVuY2F0ZShuKSB7IHJldHVybiBuIHwgMDsgfVxuZnVuY3Rpb24gX0Jhc2ljc19pc0luZmluaXRlKG4pIHsgcmV0dXJuIG4gPT09IEluZmluaXR5IHx8IG4gPT09IC1JbmZpbml0eTsgfVxuXG52YXIgX0Jhc2ljc19jZWlsaW5nID0gTWF0aC5jZWlsO1xudmFyIF9CYXNpY3NfZmxvb3IgPSBNYXRoLmZsb29yO1xudmFyIF9CYXNpY3Nfcm91bmQgPSBNYXRoLnJvdW5kO1xudmFyIF9CYXNpY3Nfc3FydCA9IE1hdGguc3FydDtcbnZhciBfQmFzaWNzX2xvZyA9IE1hdGgubG9nO1xudmFyIF9CYXNpY3NfaXNOYU4gPSBpc05hTjtcblxuXG4vLyBCT09MRUFOU1xuXG5mdW5jdGlvbiBfQmFzaWNzX25vdChib29sKSB7IHJldHVybiAhYm9vbDsgfVxudmFyIF9CYXNpY3NfYW5kID0gRjIoZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAmJiBiOyB9KTtcbnZhciBfQmFzaWNzX29yICA9IEYyKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIGEgfHwgYjsgfSk7XG52YXIgX0Jhc2ljc194b3IgPSBGMihmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhICE9PSBiOyB9KTtcblxuXG5cbnZhciBfU3RyaW5nX2NvbnMgPSBGMihmdW5jdGlvbihjaHIsIHN0cilcbntcblx0cmV0dXJuIGNociArIHN0cjtcbn0pO1xuXG5mdW5jdGlvbiBfU3RyaW5nX3VuY29ucyhzdHJpbmcpXG57XG5cdHZhciB3b3JkID0gc3RyaW5nLmNoYXJDb2RlQXQoMCk7XG5cdHJldHVybiAhaXNOYU4od29yZClcblx0XHQ/ICRlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0MHhEODAwIDw9IHdvcmQgJiYgd29yZCA8PSAweERCRkZcblx0XHRcdFx0PyBfVXRpbHNfVHVwbGUyKF9VdGlsc19jaHIoc3RyaW5nWzBdICsgc3RyaW5nWzFdKSwgc3RyaW5nLnNsaWNlKDIpKVxuXHRcdFx0XHQ6IF9VdGlsc19UdXBsZTIoX1V0aWxzX2NocihzdHJpbmdbMF0pLCBzdHJpbmcuc2xpY2UoMSkpXG5cdFx0KVxuXHRcdDogJGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG59XG5cbnZhciBfU3RyaW5nX2FwcGVuZCA9IEYyKGZ1bmN0aW9uKGEsIGIpXG57XG5cdHJldHVybiBhICsgYjtcbn0pO1xuXG5mdW5jdGlvbiBfU3RyaW5nX2xlbmd0aChzdHIpXG57XG5cdHJldHVybiBzdHIubGVuZ3RoO1xufVxuXG52YXIgX1N0cmluZ19tYXAgPSBGMihmdW5jdGlvbihmdW5jLCBzdHJpbmcpXG57XG5cdHZhciBsZW4gPSBzdHJpbmcubGVuZ3RoO1xuXHR2YXIgYXJyYXkgPSBuZXcgQXJyYXkobGVuKTtcblx0dmFyIGkgPSAwO1xuXHR3aGlsZSAoaSA8IGxlbilcblx0e1xuXHRcdHZhciB3b3JkID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cdFx0aWYgKDB4RDgwMCA8PSB3b3JkICYmIHdvcmQgPD0gMHhEQkZGKVxuXHRcdHtcblx0XHRcdGFycmF5W2ldID0gZnVuYyhfVXRpbHNfY2hyKHN0cmluZ1tpXSArIHN0cmluZ1tpKzFdKSk7XG5cdFx0XHRpICs9IDI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0YXJyYXlbaV0gPSBmdW5jKF9VdGlsc19jaHIoc3RyaW5nW2ldKSk7XG5cdFx0aSsrO1xuXHR9XG5cdHJldHVybiBhcnJheS5qb2luKCcnKTtcbn0pO1xuXG52YXIgX1N0cmluZ19maWx0ZXIgPSBGMihmdW5jdGlvbihpc0dvb2QsIHN0cilcbntcblx0dmFyIGFyciA9IFtdO1xuXHR2YXIgbGVuID0gc3RyLmxlbmd0aDtcblx0dmFyIGkgPSAwO1xuXHR3aGlsZSAoaSA8IGxlbilcblx0e1xuXHRcdHZhciBjaGFyID0gc3RyW2ldO1xuXHRcdHZhciB3b3JkID0gc3RyLmNoYXJDb2RlQXQoaSk7XG5cdFx0aSsrO1xuXHRcdGlmICgweEQ4MDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REJGRilcblx0XHR7XG5cdFx0XHRjaGFyICs9IHN0cltpXTtcblx0XHRcdGkrKztcblx0XHR9XG5cblx0XHRpZiAoaXNHb29kKF9VdGlsc19jaHIoY2hhcikpKVxuXHRcdHtcblx0XHRcdGFyci5wdXNoKGNoYXIpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gYXJyLmpvaW4oJycpO1xufSk7XG5cbmZ1bmN0aW9uIF9TdHJpbmdfcmV2ZXJzZShzdHIpXG57XG5cdHZhciBsZW4gPSBzdHIubGVuZ3RoO1xuXHR2YXIgYXJyID0gbmV3IEFycmF5KGxlbik7XG5cdHZhciBpID0gMDtcblx0d2hpbGUgKGkgPCBsZW4pXG5cdHtcblx0XHR2YXIgd29yZCA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuXHRcdGlmICgweEQ4MDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REJGRilcblx0XHR7XG5cdFx0XHRhcnJbbGVuIC0gaV0gPSBzdHJbaSArIDFdO1xuXHRcdFx0aSsrO1xuXHRcdFx0YXJyW2xlbiAtIGldID0gc3RyW2kgLSAxXTtcblx0XHRcdGkrKztcblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdGFycltsZW4gLSBpXSA9IHN0cltpXTtcblx0XHRcdGkrKztcblx0XHR9XG5cdH1cblx0cmV0dXJuIGFyci5qb2luKCcnKTtcbn1cblxudmFyIF9TdHJpbmdfZm9sZGwgPSBGMyhmdW5jdGlvbihmdW5jLCBzdGF0ZSwgc3RyaW5nKVxue1xuXHR2YXIgbGVuID0gc3RyaW5nLmxlbmd0aDtcblx0dmFyIGkgPSAwO1xuXHR3aGlsZSAoaSA8IGxlbilcblx0e1xuXHRcdHZhciBjaGFyID0gc3RyaW5nW2ldO1xuXHRcdHZhciB3b3JkID0gc3RyaW5nLmNoYXJDb2RlQXQoaSk7XG5cdFx0aSsrO1xuXHRcdGlmICgweEQ4MDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REJGRilcblx0XHR7XG5cdFx0XHRjaGFyICs9IHN0cmluZ1tpXTtcblx0XHRcdGkrKztcblx0XHR9XG5cdFx0c3RhdGUgPSBBMihmdW5jLCBfVXRpbHNfY2hyKGNoYXIpLCBzdGF0ZSk7XG5cdH1cblx0cmV0dXJuIHN0YXRlO1xufSk7XG5cbnZhciBfU3RyaW5nX2ZvbGRyID0gRjMoZnVuY3Rpb24oZnVuYywgc3RhdGUsIHN0cmluZylcbntcblx0dmFyIGkgPSBzdHJpbmcubGVuZ3RoO1xuXHR3aGlsZSAoaS0tKVxuXHR7XG5cdFx0dmFyIGNoYXIgPSBzdHJpbmdbaV07XG5cdFx0dmFyIHdvcmQgPSBzdHJpbmcuY2hhckNvZGVBdChpKTtcblx0XHRpZiAoMHhEQzAwIDw9IHdvcmQgJiYgd29yZCA8PSAweERGRkYpXG5cdFx0e1xuXHRcdFx0aS0tO1xuXHRcdFx0Y2hhciA9IHN0cmluZ1tpXSArIGNoYXI7XG5cdFx0fVxuXHRcdHN0YXRlID0gQTIoZnVuYywgX1V0aWxzX2NocihjaGFyKSwgc3RhdGUpO1xuXHR9XG5cdHJldHVybiBzdGF0ZTtcbn0pO1xuXG52YXIgX1N0cmluZ19zcGxpdCA9IEYyKGZ1bmN0aW9uKHNlcCwgc3RyKVxue1xuXHRyZXR1cm4gc3RyLnNwbGl0KHNlcCk7XG59KTtcblxudmFyIF9TdHJpbmdfam9pbiA9IEYyKGZ1bmN0aW9uKHNlcCwgc3Rycylcbntcblx0cmV0dXJuIHN0cnMuam9pbihzZXApO1xufSk7XG5cbnZhciBfU3RyaW5nX3NsaWNlID0gRjMoZnVuY3Rpb24oc3RhcnQsIGVuZCwgc3RyKSB7XG5cdHJldHVybiBzdHIuc2xpY2Uoc3RhcnQsIGVuZCk7XG59KTtcblxuZnVuY3Rpb24gX1N0cmluZ190cmltKHN0cilcbntcblx0cmV0dXJuIHN0ci50cmltKCk7XG59XG5cbmZ1bmN0aW9uIF9TdHJpbmdfdHJpbUxlZnQoc3RyKVxue1xuXHRyZXR1cm4gc3RyLnJlcGxhY2UoL15cXHMrLywgJycpO1xufVxuXG5mdW5jdGlvbiBfU3RyaW5nX3RyaW1SaWdodChzdHIpXG57XG5cdHJldHVybiBzdHIucmVwbGFjZSgvXFxzKyQvLCAnJyk7XG59XG5cbmZ1bmN0aW9uIF9TdHJpbmdfd29yZHMoc3RyKVxue1xuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KHN0ci50cmltKCkuc3BsaXQoL1xccysvZykpO1xufVxuXG5mdW5jdGlvbiBfU3RyaW5nX2xpbmVzKHN0cilcbntcblx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShzdHIuc3BsaXQoL1xcclxcbnxcXHJ8XFxuL2cpKTtcbn1cblxuZnVuY3Rpb24gX1N0cmluZ190b1VwcGVyKHN0cilcbntcblx0cmV0dXJuIHN0ci50b1VwcGVyQ2FzZSgpO1xufVxuXG5mdW5jdGlvbiBfU3RyaW5nX3RvTG93ZXIoc3RyKVxue1xuXHRyZXR1cm4gc3RyLnRvTG93ZXJDYXNlKCk7XG59XG5cbnZhciBfU3RyaW5nX2FueSA9IEYyKGZ1bmN0aW9uKGlzR29vZCwgc3RyaW5nKVxue1xuXHR2YXIgaSA9IHN0cmluZy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pXG5cdHtcblx0XHR2YXIgY2hhciA9IHN0cmluZ1tpXTtcblx0XHR2YXIgd29yZCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXHRcdGlmICgweERDMDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REZGRilcblx0XHR7XG5cdFx0XHRpLS07XG5cdFx0XHRjaGFyID0gc3RyaW5nW2ldICsgY2hhcjtcblx0XHR9XG5cdFx0aWYgKGlzR29vZChfVXRpbHNfY2hyKGNoYXIpKSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGZhbHNlO1xufSk7XG5cbnZhciBfU3RyaW5nX2FsbCA9IEYyKGZ1bmN0aW9uKGlzR29vZCwgc3RyaW5nKVxue1xuXHR2YXIgaSA9IHN0cmluZy5sZW5ndGg7XG5cdHdoaWxlIChpLS0pXG5cdHtcblx0XHR2YXIgY2hhciA9IHN0cmluZ1tpXTtcblx0XHR2YXIgd29yZCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuXHRcdGlmICgweERDMDAgPD0gd29yZCAmJiB3b3JkIDw9IDB4REZGRilcblx0XHR7XG5cdFx0XHRpLS07XG5cdFx0XHRjaGFyID0gc3RyaW5nW2ldICsgY2hhcjtcblx0XHR9XG5cdFx0aWYgKCFpc0dvb2QoX1V0aWxzX2NocihjaGFyKSkpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn0pO1xuXG52YXIgX1N0cmluZ19jb250YWlucyA9IEYyKGZ1bmN0aW9uKHN1Yiwgc3RyKVxue1xuXHRyZXR1cm4gc3RyLmluZGV4T2Yoc3ViKSA+IC0xO1xufSk7XG5cbnZhciBfU3RyaW5nX3N0YXJ0c1dpdGggPSBGMihmdW5jdGlvbihzdWIsIHN0cilcbntcblx0cmV0dXJuIHN0ci5pbmRleE9mKHN1YikgPT09IDA7XG59KTtcblxudmFyIF9TdHJpbmdfZW5kc1dpdGggPSBGMihmdW5jdGlvbihzdWIsIHN0cilcbntcblx0cmV0dXJuIHN0ci5sZW5ndGggPj0gc3ViLmxlbmd0aCAmJlxuXHRcdHN0ci5sYXN0SW5kZXhPZihzdWIpID09PSBzdHIubGVuZ3RoIC0gc3ViLmxlbmd0aDtcbn0pO1xuXG52YXIgX1N0cmluZ19pbmRleGVzID0gRjIoZnVuY3Rpb24oc3ViLCBzdHIpXG57XG5cdHZhciBzdWJMZW4gPSBzdWIubGVuZ3RoO1xuXG5cdGlmIChzdWJMZW4gPCAxKVxuXHR7XG5cdFx0cmV0dXJuIF9MaXN0X05pbDtcblx0fVxuXG5cdHZhciBpID0gMDtcblx0dmFyIGlzID0gW107XG5cblx0d2hpbGUgKChpID0gc3RyLmluZGV4T2Yoc3ViLCBpKSkgPiAtMSlcblx0e1xuXHRcdGlzLnB1c2goaSk7XG5cdFx0aSA9IGkgKyBzdWJMZW47XG5cdH1cblxuXHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KGlzKTtcbn0pO1xuXG5cbi8vIFRPIFNUUklOR1xuXG5mdW5jdGlvbiBfU3RyaW5nX2Zyb21OdW1iZXIobnVtYmVyKVxue1xuXHRyZXR1cm4gbnVtYmVyICsgJyc7XG59XG5cblxuLy8gSU5UIENPTlZFUlNJT05TXG5cbmZ1bmN0aW9uIF9TdHJpbmdfdG9JbnQoc3RyKVxue1xuXHR2YXIgdG90YWwgPSAwO1xuXHR2YXIgY29kZTAgPSBzdHIuY2hhckNvZGVBdCgwKTtcblx0dmFyIHN0YXJ0ID0gY29kZTAgPT0gMHgyQiAvKiArICovIHx8IGNvZGUwID09IDB4MkQgLyogLSAqLyA/IDEgOiAwO1xuXG5cdGZvciAodmFyIGkgPSBzdGFydDsgaSA8IHN0ci5sZW5ndGg7ICsraSlcblx0e1xuXHRcdHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XG5cdFx0aWYgKGNvZGUgPCAweDMwIHx8IDB4MzkgPCBjb2RlKVxuXHRcdHtcblx0XHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHR9XG5cdFx0dG90YWwgPSAxMCAqIHRvdGFsICsgY29kZSAtIDB4MzA7XG5cdH1cblxuXHRyZXR1cm4gaSA9PSBzdGFydFxuXHRcdD8gJGVsbSRjb3JlJE1heWJlJE5vdGhpbmdcblx0XHQ6ICRlbG0kY29yZSRNYXliZSRKdXN0KGNvZGUwID09IDB4MkQgPyAtdG90YWwgOiB0b3RhbCk7XG59XG5cblxuLy8gRkxPQVQgQ09OVkVSU0lPTlNcblxuZnVuY3Rpb24gX1N0cmluZ190b0Zsb2F0KHMpXG57XG5cdC8vIGNoZWNrIGlmIGl0IGlzIGEgaGV4LCBvY3RhbCwgb3IgYmluYXJ5IG51bWJlclxuXHRpZiAocy5sZW5ndGggPT09IDAgfHwgL1tcXHN4Ym9dLy50ZXN0KHMpKVxuXHR7XG5cdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHR9XG5cdHZhciBuID0gK3M7XG5cdC8vIGZhc3RlciBpc05hTiBjaGVja1xuXHRyZXR1cm4gbiA9PT0gbiA/ICRlbG0kY29yZSRNYXliZSRKdXN0KG4pIDogJGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG59XG5cbmZ1bmN0aW9uIF9TdHJpbmdfZnJvbUxpc3QoY2hhcnMpXG57XG5cdHJldHVybiBfTGlzdF90b0FycmF5KGNoYXJzKS5qb2luKCcnKTtcbn1cblxuXG5cblxuZnVuY3Rpb24gX0NoYXJfdG9Db2RlKGNoYXIpXG57XG5cdHZhciBjb2RlID0gY2hhci5jaGFyQ29kZUF0KDApO1xuXHRpZiAoMHhEODAwIDw9IGNvZGUgJiYgY29kZSA8PSAweERCRkYpXG5cdHtcblx0XHRyZXR1cm4gKGNvZGUgLSAweEQ4MDApICogMHg0MDAgKyBjaGFyLmNoYXJDb2RlQXQoMSkgLSAweERDMDAgKyAweDEwMDAwXG5cdH1cblx0cmV0dXJuIGNvZGU7XG59XG5cbmZ1bmN0aW9uIF9DaGFyX2Zyb21Db2RlKGNvZGUpXG57XG5cdHJldHVybiBfVXRpbHNfY2hyKFxuXHRcdChjb2RlIDwgMCB8fCAweDEwRkZGRiA8IGNvZGUpXG5cdFx0XHQ/ICdcXHVGRkZEJ1xuXHRcdFx0OlxuXHRcdChjb2RlIDw9IDB4RkZGRilcblx0XHRcdD8gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlKVxuXHRcdFx0OlxuXHRcdChjb2RlIC09IDB4MTAwMDAsXG5cdFx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlKE1hdGguZmxvb3IoY29kZSAvIDB4NDAwKSArIDB4RDgwMCwgY29kZSAlIDB4NDAwICsgMHhEQzAwKVxuXHRcdClcblx0KTtcbn1cblxuZnVuY3Rpb24gX0NoYXJfdG9VcHBlcihjaGFyKVxue1xuXHRyZXR1cm4gX1V0aWxzX2NocihjaGFyLnRvVXBwZXJDYXNlKCkpO1xufVxuXG5mdW5jdGlvbiBfQ2hhcl90b0xvd2VyKGNoYXIpXG57XG5cdHJldHVybiBfVXRpbHNfY2hyKGNoYXIudG9Mb3dlckNhc2UoKSk7XG59XG5cbmZ1bmN0aW9uIF9DaGFyX3RvTG9jYWxlVXBwZXIoY2hhcilcbntcblx0cmV0dXJuIF9VdGlsc19jaHIoY2hhci50b0xvY2FsZVVwcGVyQ2FzZSgpKTtcbn1cblxuZnVuY3Rpb24gX0NoYXJfdG9Mb2NhbGVMb3dlcihjaGFyKVxue1xuXHRyZXR1cm4gX1V0aWxzX2NocihjaGFyLnRvTG9jYWxlTG93ZXJDYXNlKCkpO1xufVxuXG5cblxuLyoqL1xuZnVuY3Rpb24gX0pzb25fZXJyb3JUb1N0cmluZyhlcnJvcilcbntcblx0cmV0dXJuICRlbG0kanNvbiRKc29uJERlY29kZSRlcnJvclRvU3RyaW5nKGVycm9yKTtcbn1cbi8vKi9cblxuXG4vLyBDT1JFIERFQ09ERVJTXG5cbmZ1bmN0aW9uIF9Kc29uX3N1Y2NlZWQobXNnKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDAsXG5cdFx0YTogbXNnXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9Kc29uX2ZhaWwobXNnKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDEsXG5cdFx0YTogbXNnXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9Kc29uX2RlY29kZVByaW0oZGVjb2Rlcilcbntcblx0cmV0dXJuIHsgJDogMiwgYjogZGVjb2RlciB9O1xufVxuXG52YXIgX0pzb25fZGVjb2RlSW50ID0gX0pzb25fZGVjb2RlUHJpbShmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicpXG5cdFx0PyBfSnNvbl9leHBlY3RpbmcoJ2FuIElOVCcsIHZhbHVlKVxuXHRcdDpcblx0KC0yMTQ3NDgzNjQ3IDwgdmFsdWUgJiYgdmFsdWUgPCAyMTQ3NDgzNjQ3ICYmICh2YWx1ZSB8IDApID09PSB2YWx1ZSlcblx0XHQ/ICRlbG0kY29yZSRSZXN1bHQkT2sodmFsdWUpXG5cdFx0OlxuXHQoaXNGaW5pdGUodmFsdWUpICYmICEodmFsdWUgJSAxKSlcblx0XHQ/ICRlbG0kY29yZSRSZXN1bHQkT2sodmFsdWUpXG5cdFx0OiBfSnNvbl9leHBlY3RpbmcoJ2FuIElOVCcsIHZhbHVlKTtcbn0pO1xuXG52YXIgX0pzb25fZGVjb2RlQm9vbCA9IF9Kc29uX2RlY29kZVByaW0oZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJylcblx0XHQ/ICRlbG0kY29yZSRSZXN1bHQkT2sodmFsdWUpXG5cdFx0OiBfSnNvbl9leHBlY3RpbmcoJ2EgQk9PTCcsIHZhbHVlKTtcbn0pO1xuXG52YXIgX0pzb25fZGVjb2RlRmxvYXQgPSBfSnNvbl9kZWNvZGVQcmltKGZ1bmN0aW9uKHZhbHVlKSB7XG5cdHJldHVybiAodHlwZW9mIHZhbHVlID09PSAnbnVtYmVyJylcblx0XHQ/ICRlbG0kY29yZSRSZXN1bHQkT2sodmFsdWUpXG5cdFx0OiBfSnNvbl9leHBlY3RpbmcoJ2EgRkxPQVQnLCB2YWx1ZSk7XG59KTtcblxudmFyIF9Kc29uX2RlY29kZVZhbHVlID0gX0pzb25fZGVjb2RlUHJpbShmdW5jdGlvbih2YWx1ZSkge1xuXHRyZXR1cm4gJGVsbSRjb3JlJFJlc3VsdCRPayhfSnNvbl93cmFwKHZhbHVlKSk7XG59KTtcblxudmFyIF9Kc29uX2RlY29kZVN0cmluZyA9IF9Kc29uX2RlY29kZVByaW0oZnVuY3Rpb24odmFsdWUpIHtcblx0cmV0dXJuICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKVxuXHRcdD8gJGVsbSRjb3JlJFJlc3VsdCRPayh2YWx1ZSlcblx0XHQ6ICh2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZylcblx0XHRcdD8gJGVsbSRjb3JlJFJlc3VsdCRPayh2YWx1ZSArICcnKVxuXHRcdFx0OiBfSnNvbl9leHBlY3RpbmcoJ2EgU1RSSU5HJywgdmFsdWUpO1xufSk7XG5cbmZ1bmN0aW9uIF9Kc29uX2RlY29kZUxpc3QoZGVjb2RlcikgeyByZXR1cm4geyAkOiAzLCBiOiBkZWNvZGVyIH07IH1cbmZ1bmN0aW9uIF9Kc29uX2RlY29kZUFycmF5KGRlY29kZXIpIHsgcmV0dXJuIHsgJDogNCwgYjogZGVjb2RlciB9OyB9XG5cbmZ1bmN0aW9uIF9Kc29uX2RlY29kZU51bGwodmFsdWUpIHsgcmV0dXJuIHsgJDogNSwgYzogdmFsdWUgfTsgfVxuXG52YXIgX0pzb25fZGVjb2RlRmllbGQgPSBGMihmdW5jdGlvbihmaWVsZCwgZGVjb2Rlcilcbntcblx0cmV0dXJuIHtcblx0XHQkOiA2LFxuXHRcdGQ6IGZpZWxkLFxuXHRcdGI6IGRlY29kZXJcblx0fTtcbn0pO1xuXG52YXIgX0pzb25fZGVjb2RlSW5kZXggPSBGMihmdW5jdGlvbihpbmRleCwgZGVjb2Rlcilcbntcblx0cmV0dXJuIHtcblx0XHQkOiA3LFxuXHRcdGU6IGluZGV4LFxuXHRcdGI6IGRlY29kZXJcblx0fTtcbn0pO1xuXG5mdW5jdGlvbiBfSnNvbl9kZWNvZGVLZXlWYWx1ZVBhaXJzKGRlY29kZXIpXG57XG5cdHJldHVybiB7XG5cdFx0JDogOCxcblx0XHRiOiBkZWNvZGVyXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9Kc29uX21hcE1hbnkoZiwgZGVjb2RlcnMpXG57XG5cdHJldHVybiB7XG5cdFx0JDogOSxcblx0XHRmOiBmLFxuXHRcdGc6IGRlY29kZXJzXG5cdH07XG59XG5cbnZhciBfSnNvbl9hbmRUaGVuID0gRjIoZnVuY3Rpb24oY2FsbGJhY2ssIGRlY29kZXIpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMTAsXG5cdFx0YjogZGVjb2Rlcixcblx0XHRoOiBjYWxsYmFja1xuXHR9O1xufSk7XG5cbmZ1bmN0aW9uIF9Kc29uX29uZU9mKGRlY29kZXJzKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDExLFxuXHRcdGc6IGRlY29kZXJzXG5cdH07XG59XG5cblxuLy8gREVDT0RJTkcgT0JKRUNUU1xuXG52YXIgX0pzb25fbWFwMSA9IEYyKGZ1bmN0aW9uKGYsIGQxKVxue1xuXHRyZXR1cm4gX0pzb25fbWFwTWFueShmLCBbZDFdKTtcbn0pO1xuXG52YXIgX0pzb25fbWFwMiA9IEYzKGZ1bmN0aW9uKGYsIGQxLCBkMilcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxLCBkMl0pO1xufSk7XG5cbnZhciBfSnNvbl9tYXAzID0gRjQoZnVuY3Rpb24oZiwgZDEsIGQyLCBkMylcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxLCBkMiwgZDNdKTtcbn0pO1xuXG52YXIgX0pzb25fbWFwNCA9IEY1KGZ1bmN0aW9uKGYsIGQxLCBkMiwgZDMsIGQ0KVxue1xuXHRyZXR1cm4gX0pzb25fbWFwTWFueShmLCBbZDEsIGQyLCBkMywgZDRdKTtcbn0pO1xuXG52YXIgX0pzb25fbWFwNSA9IEY2KGZ1bmN0aW9uKGYsIGQxLCBkMiwgZDMsIGQ0LCBkNSlcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxLCBkMiwgZDMsIGQ0LCBkNV0pO1xufSk7XG5cbnZhciBfSnNvbl9tYXA2ID0gRjcoZnVuY3Rpb24oZiwgZDEsIGQyLCBkMywgZDQsIGQ1LCBkNilcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxLCBkMiwgZDMsIGQ0LCBkNSwgZDZdKTtcbn0pO1xuXG52YXIgX0pzb25fbWFwNyA9IEY4KGZ1bmN0aW9uKGYsIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3KVxue1xuXHRyZXR1cm4gX0pzb25fbWFwTWFueShmLCBbZDEsIGQyLCBkMywgZDQsIGQ1LCBkNiwgZDddKTtcbn0pO1xuXG52YXIgX0pzb25fbWFwOCA9IEY5KGZ1bmN0aW9uKGYsIGQxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3LCBkOClcbntcblx0cmV0dXJuIF9Kc29uX21hcE1hbnkoZiwgW2QxLCBkMiwgZDMsIGQ0LCBkNSwgZDYsIGQ3LCBkOF0pO1xufSk7XG5cblxuLy8gREVDT0RFXG5cbnZhciBfSnNvbl9ydW5PblN0cmluZyA9IEYyKGZ1bmN0aW9uKGRlY29kZXIsIHN0cmluZylcbntcblx0dHJ5XG5cdHtcblx0XHR2YXIgdmFsdWUgPSBKU09OLnBhcnNlKHN0cmluZyk7XG5cdFx0cmV0dXJuIF9Kc29uX3J1bkhlbHAoZGVjb2RlciwgdmFsdWUpO1xuXHR9XG5cdGNhdGNoIChlKVxuXHR7XG5cdFx0cmV0dXJuICRlbG0kY29yZSRSZXN1bHQkRXJyKEEyKCRlbG0kanNvbiRKc29uJERlY29kZSRGYWlsdXJlLCAnVGhpcyBpcyBub3QgdmFsaWQgSlNPTiEgJyArIGUubWVzc2FnZSwgX0pzb25fd3JhcChzdHJpbmcpKSk7XG5cdH1cbn0pO1xuXG52YXIgX0pzb25fcnVuID0gRjIoZnVuY3Rpb24oZGVjb2RlciwgdmFsdWUpXG57XG5cdHJldHVybiBfSnNvbl9ydW5IZWxwKGRlY29kZXIsIF9Kc29uX3Vud3JhcCh2YWx1ZSkpO1xufSk7XG5cbmZ1bmN0aW9uIF9Kc29uX3J1bkhlbHAoZGVjb2RlciwgdmFsdWUpXG57XG5cdHN3aXRjaCAoZGVjb2Rlci4kKVxuXHR7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIGRlY29kZXIuYih2YWx1ZSk7XG5cblx0XHRjYXNlIDU6XG5cdFx0XHRyZXR1cm4gKHZhbHVlID09PSBudWxsKVxuXHRcdFx0XHQ/ICRlbG0kY29yZSRSZXN1bHQkT2soZGVjb2Rlci5jKVxuXHRcdFx0XHQ6IF9Kc29uX2V4cGVjdGluZygnbnVsbCcsIHZhbHVlKTtcblxuXHRcdGNhc2UgMzpcblx0XHRcdGlmICghX0pzb25faXNBcnJheSh2YWx1ZSkpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBfSnNvbl9leHBlY3RpbmcoJ2EgTElTVCcsIHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBfSnNvbl9ydW5BcnJheURlY29kZXIoZGVjb2Rlci5iLCB2YWx1ZSwgX0xpc3RfZnJvbUFycmF5KTtcblxuXHRcdGNhc2UgNDpcblx0XHRcdGlmICghX0pzb25faXNBcnJheSh2YWx1ZSkpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBfSnNvbl9leHBlY3RpbmcoJ2FuIEFSUkFZJywgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIF9Kc29uX3J1bkFycmF5RGVjb2RlcihkZWNvZGVyLmIsIHZhbHVlLCBfSnNvbl90b0VsbUFycmF5KTtcblxuXHRcdGNhc2UgNjpcblx0XHRcdHZhciBmaWVsZCA9IGRlY29kZXIuZDtcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsIHx8ICEoZmllbGQgaW4gdmFsdWUpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gX0pzb25fZXhwZWN0aW5nKCdhbiBPQkpFQ1Qgd2l0aCBhIGZpZWxkIG5hbWVkIGAnICsgZmllbGQgKyAnYCcsIHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHZhciByZXN1bHQgPSBfSnNvbl9ydW5IZWxwKGRlY29kZXIuYiwgdmFsdWVbZmllbGRdKTtcblx0XHRcdHJldHVybiAoJGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpID8gcmVzdWx0IDogJGVsbSRjb3JlJFJlc3VsdCRFcnIoQTIoJGVsbSRqc29uJEpzb24kRGVjb2RlJEZpZWxkLCBmaWVsZCwgcmVzdWx0LmEpKTtcblxuXHRcdGNhc2UgNzpcblx0XHRcdHZhciBpbmRleCA9IGRlY29kZXIuZTtcblx0XHRcdGlmICghX0pzb25faXNBcnJheSh2YWx1ZSkpXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybiBfSnNvbl9leHBlY3RpbmcoJ2FuIEFSUkFZJywgdmFsdWUpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGluZGV4ID49IHZhbHVlLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIF9Kc29uX2V4cGVjdGluZygnYSBMT05HRVIgYXJyYXkuIE5lZWQgaW5kZXggJyArIGluZGV4ICsgJyBidXQgb25seSBzZWUgJyArIHZhbHVlLmxlbmd0aCArICcgZW50cmllcycsIHZhbHVlKTtcblx0XHRcdH1cblx0XHRcdHZhciByZXN1bHQgPSBfSnNvbl9ydW5IZWxwKGRlY29kZXIuYiwgdmFsdWVbaW5kZXhdKTtcblx0XHRcdHJldHVybiAoJGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpID8gcmVzdWx0IDogJGVsbSRjb3JlJFJlc3VsdCRFcnIoQTIoJGVsbSRqc29uJEpzb24kRGVjb2RlJEluZGV4LCBpbmRleCwgcmVzdWx0LmEpKTtcblxuXHRcdGNhc2UgODpcblx0XHRcdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsIHx8IF9Kc29uX2lzQXJyYXkodmFsdWUpKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm4gX0pzb25fZXhwZWN0aW5nKCdhbiBPQkpFQ1QnLCB2YWx1ZSk7XG5cdFx0XHR9XG5cblx0XHRcdHZhciBrZXlWYWx1ZVBhaXJzID0gX0xpc3RfTmlsO1xuXHRcdFx0Ly8gVE9ETyB0ZXN0IHBlcmYgb2YgT2JqZWN0LmtleXMgYW5kIHN3aXRjaCB3aGVuIHN1cHBvcnQgaXMgZ29vZCBlbm91Z2hcblx0XHRcdGZvciAodmFyIGtleSBpbiB2YWx1ZSlcblx0XHRcdHtcblx0XHRcdFx0aWYgKHZhbHVlLmhhc093blByb3BlcnR5KGtleSkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyLmIsIHZhbHVlW2tleV0pO1xuXHRcdFx0XHRcdGlmICghJGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cmV0dXJuICRlbG0kY29yZSRSZXN1bHQkRXJyKEEyKCRlbG0kanNvbiRKc29uJERlY29kZSRGaWVsZCwga2V5LCByZXN1bHQuYSkpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRrZXlWYWx1ZVBhaXJzID0gX0xpc3RfQ29ucyhfVXRpbHNfVHVwbGUyKGtleSwgcmVzdWx0LmEpLCBrZXlWYWx1ZVBhaXJzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuICRlbG0kY29yZSRSZXN1bHQkT2soJGVsbSRjb3JlJExpc3QkcmV2ZXJzZShrZXlWYWx1ZVBhaXJzKSk7XG5cblx0XHRjYXNlIDk6XG5cdFx0XHR2YXIgYW5zd2VyID0gZGVjb2Rlci5mO1xuXHRcdFx0dmFyIGRlY29kZXJzID0gZGVjb2Rlci5nO1xuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWNvZGVycy5sZW5ndGg7IGkrKylcblx0XHRcdHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IF9Kc29uX3J1bkhlbHAoZGVjb2RlcnNbaV0sIHZhbHVlKTtcblx0XHRcdFx0aWYgKCEkZWxtJGNvcmUkUmVzdWx0JGlzT2socmVzdWx0KSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0YW5zd2VyID0gYW5zd2VyKHJlc3VsdC5hKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiAkZWxtJGNvcmUkUmVzdWx0JE9rKGFuc3dlcik7XG5cblx0XHRjYXNlIDEwOlxuXHRcdFx0dmFyIHJlc3VsdCA9IF9Kc29uX3J1bkhlbHAoZGVjb2Rlci5iLCB2YWx1ZSk7XG5cdFx0XHRyZXR1cm4gKCEkZWxtJGNvcmUkUmVzdWx0JGlzT2socmVzdWx0KSlcblx0XHRcdFx0PyByZXN1bHRcblx0XHRcdFx0OiBfSnNvbl9ydW5IZWxwKGRlY29kZXIuaChyZXN1bHQuYSksIHZhbHVlKTtcblxuXHRcdGNhc2UgMTE6XG5cdFx0XHR2YXIgZXJyb3JzID0gX0xpc3RfTmlsO1xuXHRcdFx0Zm9yICh2YXIgdGVtcCA9IGRlY29kZXIuZzsgdGVtcC5iOyB0ZW1wID0gdGVtcC5iKSAvLyBXSElMRV9DT05TXG5cdFx0XHR7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBfSnNvbl9ydW5IZWxwKHRlbXAuYSwgdmFsdWUpO1xuXHRcdFx0XHRpZiAoJGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVycm9ycyA9IF9MaXN0X0NvbnMocmVzdWx0LmEsIGVycm9ycyk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJFJlc3VsdCRFcnIoJGVsbSRqc29uJEpzb24kRGVjb2RlJE9uZU9mKCRlbG0kY29yZSRMaXN0JHJldmVyc2UoZXJyb3JzKSkpO1xuXG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuICRlbG0kY29yZSRSZXN1bHQkRXJyKEEyKCRlbG0kanNvbiRKc29uJERlY29kZSRGYWlsdXJlLCBkZWNvZGVyLmEsIF9Kc29uX3dyYXAodmFsdWUpKSk7XG5cblx0XHRjYXNlIDA6XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJFJlc3VsdCRPayhkZWNvZGVyLmEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIF9Kc29uX3J1bkFycmF5RGVjb2RlcihkZWNvZGVyLCB2YWx1ZSwgdG9FbG1WYWx1ZSlcbntcblx0dmFyIGxlbiA9IHZhbHVlLmxlbmd0aDtcblx0dmFyIGFycmF5ID0gbmV3IEFycmF5KGxlbik7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG5cdHtcblx0XHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyLCB2YWx1ZVtpXSk7XG5cdFx0aWYgKCEkZWxtJGNvcmUkUmVzdWx0JGlzT2socmVzdWx0KSlcblx0XHR7XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJFJlc3VsdCRFcnIoQTIoJGVsbSRqc29uJEpzb24kRGVjb2RlJEluZGV4LCBpLCByZXN1bHQuYSkpO1xuXHRcdH1cblx0XHRhcnJheVtpXSA9IHJlc3VsdC5hO1xuXHR9XG5cdHJldHVybiAkZWxtJGNvcmUkUmVzdWx0JE9rKHRvRWxtVmFsdWUoYXJyYXkpKTtcbn1cblxuZnVuY3Rpb24gX0pzb25faXNBcnJheSh2YWx1ZSlcbntcblx0cmV0dXJuIEFycmF5LmlzQXJyYXkodmFsdWUpIHx8ICh0eXBlb2YgRmlsZUxpc3QgIT09ICd1bmRlZmluZWQnICYmIHZhbHVlIGluc3RhbmNlb2YgRmlsZUxpc3QpO1xufVxuXG5mdW5jdGlvbiBfSnNvbl90b0VsbUFycmF5KGFycmF5KVxue1xuXHRyZXR1cm4gQTIoJGVsbSRjb3JlJEFycmF5JGluaXRpYWxpemUsIGFycmF5Lmxlbmd0aCwgZnVuY3Rpb24oaSkgeyByZXR1cm4gYXJyYXlbaV07IH0pO1xufVxuXG5mdW5jdGlvbiBfSnNvbl9leHBlY3RpbmcodHlwZSwgdmFsdWUpXG57XG5cdHJldHVybiAkZWxtJGNvcmUkUmVzdWx0JEVycihBMigkZWxtJGpzb24kSnNvbiREZWNvZGUkRmFpbHVyZSwgJ0V4cGVjdGluZyAnICsgdHlwZSwgX0pzb25fd3JhcCh2YWx1ZSkpKTtcbn1cblxuXG4vLyBFUVVBTElUWVxuXG5mdW5jdGlvbiBfSnNvbl9lcXVhbGl0eSh4LCB5KVxue1xuXHRpZiAoeCA9PT0geSlcblx0e1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0aWYgKHguJCAhPT0geS4kKVxuXHR7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0c3dpdGNoICh4LiQpXG5cdHtcblx0XHRjYXNlIDA6XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIHguYSA9PT0geS5hO1xuXG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIHguYiA9PT0geS5iO1xuXG5cdFx0Y2FzZSA1OlxuXHRcdFx0cmV0dXJuIHguYyA9PT0geS5jO1xuXG5cdFx0Y2FzZSAzOlxuXHRcdGNhc2UgNDpcblx0XHRjYXNlIDg6XG5cdFx0XHRyZXR1cm4gX0pzb25fZXF1YWxpdHkoeC5iLCB5LmIpO1xuXG5cdFx0Y2FzZSA2OlxuXHRcdFx0cmV0dXJuIHguZCA9PT0geS5kICYmIF9Kc29uX2VxdWFsaXR5KHguYiwgeS5iKTtcblxuXHRcdGNhc2UgNzpcblx0XHRcdHJldHVybiB4LmUgPT09IHkuZSAmJiBfSnNvbl9lcXVhbGl0eSh4LmIsIHkuYik7XG5cblx0XHRjYXNlIDk6XG5cdFx0XHRyZXR1cm4geC5mID09PSB5LmYgJiYgX0pzb25fbGlzdEVxdWFsaXR5KHguZywgeS5nKTtcblxuXHRcdGNhc2UgMTA6XG5cdFx0XHRyZXR1cm4geC5oID09PSB5LmggJiYgX0pzb25fZXF1YWxpdHkoeC5iLCB5LmIpO1xuXG5cdFx0Y2FzZSAxMTpcblx0XHRcdHJldHVybiBfSnNvbl9saXN0RXF1YWxpdHkoeC5nLCB5LmcpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIF9Kc29uX2xpc3RFcXVhbGl0eShhRGVjb2RlcnMsIGJEZWNvZGVycylcbntcblx0dmFyIGxlbiA9IGFEZWNvZGVycy5sZW5ndGg7XG5cdGlmIChsZW4gIT09IGJEZWNvZGVycy5sZW5ndGgpXG5cdHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKylcblx0e1xuXHRcdGlmICghX0pzb25fZXF1YWxpdHkoYURlY29kZXJzW2ldLCBiRGVjb2RlcnNbaV0pKVxuXHRcdHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59XG5cblxuLy8gRU5DT0RFXG5cbnZhciBfSnNvbl9lbmNvZGUgPSBGMihmdW5jdGlvbihpbmRlbnRMZXZlbCwgdmFsdWUpXG57XG5cdHJldHVybiBKU09OLnN0cmluZ2lmeShfSnNvbl91bndyYXAodmFsdWUpLCBudWxsLCBpbmRlbnRMZXZlbCkgKyAnJztcbn0pO1xuXG5mdW5jdGlvbiBfSnNvbl93cmFwKHZhbHVlKSB7IHJldHVybiB7ICQ6IDAsIGE6IHZhbHVlIH07IH1cbmZ1bmN0aW9uIF9Kc29uX3Vud3JhcCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUuYTsgfVxuXG5mdW5jdGlvbiBfSnNvbl93cmFwX1VOVVNFRCh2YWx1ZSkgeyByZXR1cm4gdmFsdWU7IH1cbmZ1bmN0aW9uIF9Kc29uX3Vud3JhcF9VTlVTRUQodmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9XG5cbmZ1bmN0aW9uIF9Kc29uX2VtcHR5QXJyYXkoKSB7IHJldHVybiBbXTsgfVxuZnVuY3Rpb24gX0pzb25fZW1wdHlPYmplY3QoKSB7IHJldHVybiB7fTsgfVxuXG52YXIgX0pzb25fYWRkRmllbGQgPSBGMyhmdW5jdGlvbihrZXksIHZhbHVlLCBvYmplY3QpXG57XG5cdG9iamVjdFtrZXldID0gX0pzb25fdW53cmFwKHZhbHVlKTtcblx0cmV0dXJuIG9iamVjdDtcbn0pO1xuXG5mdW5jdGlvbiBfSnNvbl9hZGRFbnRyeShmdW5jKVxue1xuXHRyZXR1cm4gRjIoZnVuY3Rpb24oZW50cnksIGFycmF5KVxuXHR7XG5cdFx0YXJyYXkucHVzaChfSnNvbl91bndyYXAoZnVuYyhlbnRyeSkpKTtcblx0XHRyZXR1cm4gYXJyYXk7XG5cdH0pO1xufVxuXG52YXIgX0pzb25fZW5jb2RlTnVsbCA9IF9Kc29uX3dyYXAobnVsbCk7XG5cblxuXG4vLyBUQVNLU1xuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX3N1Y2NlZWQodmFsdWUpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMCxcblx0XHRhOiB2YWx1ZVxuXHR9O1xufVxuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX2ZhaWwoZXJyb3IpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMSxcblx0XHRhOiBlcnJvclxuXHR9O1xufVxuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX2JpbmRpbmcoY2FsbGJhY2spXG57XG5cdHJldHVybiB7XG5cdFx0JDogMixcblx0XHRiOiBjYWxsYmFjayxcblx0XHRjOiBudWxsXG5cdH07XG59XG5cbnZhciBfU2NoZWR1bGVyX2FuZFRoZW4gPSBGMihmdW5jdGlvbihjYWxsYmFjaywgdGFzaylcbntcblx0cmV0dXJuIHtcblx0XHQkOiAzLFxuXHRcdGI6IGNhbGxiYWNrLFxuXHRcdGQ6IHRhc2tcblx0fTtcbn0pO1xuXG52YXIgX1NjaGVkdWxlcl9vbkVycm9yID0gRjIoZnVuY3Rpb24oY2FsbGJhY2ssIHRhc2spXG57XG5cdHJldHVybiB7XG5cdFx0JDogNCxcblx0XHRiOiBjYWxsYmFjayxcblx0XHRkOiB0YXNrXG5cdH07XG59KTtcblxuZnVuY3Rpb24gX1NjaGVkdWxlcl9yZWNlaXZlKGNhbGxiYWNrKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDUsXG5cdFx0YjogY2FsbGJhY2tcblx0fTtcbn1cblxuXG4vLyBQUk9DRVNTRVNcblxudmFyIF9TY2hlZHVsZXJfZ3VpZCA9IDA7XG5cbmZ1bmN0aW9uIF9TY2hlZHVsZXJfcmF3U3Bhd24odGFzaylcbntcblx0dmFyIHByb2MgPSB7XG5cdFx0JDogMCxcblx0XHRlOiBfU2NoZWR1bGVyX2d1aWQrKyxcblx0XHRmOiB0YXNrLFxuXHRcdGc6IG51bGwsXG5cdFx0aDogW11cblx0fTtcblxuXHRfU2NoZWR1bGVyX2VucXVldWUocHJvYyk7XG5cblx0cmV0dXJuIHByb2M7XG59XG5cbmZ1bmN0aW9uIF9TY2hlZHVsZXJfc3Bhd24odGFzaylcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChfU2NoZWR1bGVyX3Jhd1NwYXduKHRhc2spKSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX3Jhd1NlbmQocHJvYywgbXNnKVxue1xuXHRwcm9jLmgucHVzaChtc2cpO1xuXHRfU2NoZWR1bGVyX2VucXVldWUocHJvYyk7XG59XG5cbnZhciBfU2NoZWR1bGVyX3NlbmQgPSBGMihmdW5jdGlvbihwcm9jLCBtc2cpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spIHtcblx0XHRfU2NoZWR1bGVyX3Jhd1NlbmQocHJvYywgbXNnKTtcblx0XHRjYWxsYmFjayhfU2NoZWR1bGVyX3N1Y2NlZWQoX1V0aWxzX1R1cGxlMCkpO1xuXHR9KTtcbn0pO1xuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX2tpbGwocHJvYylcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaykge1xuXHRcdHZhciB0YXNrID0gcHJvYy5mO1xuXHRcdGlmICh0YXNrLiQgPT09IDIgJiYgdGFzay5jKVxuXHRcdHtcblx0XHRcdHRhc2suYygpO1xuXHRcdH1cblxuXHRcdHByb2MuZiA9IG51bGw7XG5cblx0XHRjYWxsYmFjayhfU2NoZWR1bGVyX3N1Y2NlZWQoX1V0aWxzX1R1cGxlMCkpO1xuXHR9KTtcbn1cblxuXG4vKiBTVEVQIFBST0NFU1NFU1xuXG50eXBlIGFsaWFzIFByb2Nlc3MgPVxuICB7ICQgOiB0YWdcbiAgLCBpZCA6IHVuaXF1ZV9pZFxuICAsIHJvb3QgOiBUYXNrXG4gICwgc3RhY2sgOiBudWxsIHwgeyAkOiBTVUNDRUVEIHwgRkFJTCwgYTogY2FsbGJhY2ssIGI6IHN0YWNrIH1cbiAgLCBtYWlsYm94IDogW21zZ11cbiAgfVxuXG4qL1xuXG5cbnZhciBfU2NoZWR1bGVyX3dvcmtpbmcgPSBmYWxzZTtcbnZhciBfU2NoZWR1bGVyX3F1ZXVlID0gW107XG5cblxuZnVuY3Rpb24gX1NjaGVkdWxlcl9lbnF1ZXVlKHByb2MpXG57XG5cdF9TY2hlZHVsZXJfcXVldWUucHVzaChwcm9jKTtcblx0aWYgKF9TY2hlZHVsZXJfd29ya2luZylcblx0e1xuXHRcdHJldHVybjtcblx0fVxuXHRfU2NoZWR1bGVyX3dvcmtpbmcgPSB0cnVlO1xuXHR3aGlsZSAocHJvYyA9IF9TY2hlZHVsZXJfcXVldWUuc2hpZnQoKSlcblx0e1xuXHRcdF9TY2hlZHVsZXJfc3RlcChwcm9jKTtcblx0fVxuXHRfU2NoZWR1bGVyX3dvcmtpbmcgPSBmYWxzZTtcbn1cblxuXG5mdW5jdGlvbiBfU2NoZWR1bGVyX3N0ZXAocHJvYylcbntcblx0d2hpbGUgKHByb2MuZilcblx0e1xuXHRcdHZhciByb290VGFnID0gcHJvYy5mLiQ7XG5cdFx0aWYgKHJvb3RUYWcgPT09IDAgfHwgcm9vdFRhZyA9PT0gMSlcblx0XHR7XG5cdFx0XHR3aGlsZSAocHJvYy5nICYmIHByb2MuZy4kICE9PSByb290VGFnKVxuXHRcdFx0e1xuXHRcdFx0XHRwcm9jLmcgPSBwcm9jLmcuaTtcblx0XHRcdH1cblx0XHRcdGlmICghcHJvYy5nKVxuXHRcdFx0e1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHRwcm9jLmYgPSBwcm9jLmcuYihwcm9jLmYuYSk7XG5cdFx0XHRwcm9jLmcgPSBwcm9jLmcuaTtcblx0XHR9XG5cdFx0ZWxzZSBpZiAocm9vdFRhZyA9PT0gMilcblx0XHR7XG5cdFx0XHRwcm9jLmYuYyA9IHByb2MuZi5iKGZ1bmN0aW9uKG5ld1Jvb3QpIHtcblx0XHRcdFx0cHJvYy5mID0gbmV3Um9vdDtcblx0XHRcdFx0X1NjaGVkdWxlcl9lbnF1ZXVlKHByb2MpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHJvb3RUYWcgPT09IDUpXG5cdFx0e1xuXHRcdFx0aWYgKHByb2MuaC5sZW5ndGggPT09IDApXG5cdFx0XHR7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHByb2MuZiA9IHByb2MuZi5iKHByb2MuaC5zaGlmdCgpKTtcblx0XHR9XG5cdFx0ZWxzZSAvLyBpZiAocm9vdFRhZyA9PT0gMyB8fCByb290VGFnID09PSA0KVxuXHRcdHtcblx0XHRcdHByb2MuZyA9IHtcblx0XHRcdFx0JDogcm9vdFRhZyA9PT0gMyA/IDAgOiAxLFxuXHRcdFx0XHRiOiBwcm9jLmYuYixcblx0XHRcdFx0aTogcHJvYy5nXG5cdFx0XHR9O1xuXHRcdFx0cHJvYy5mID0gcHJvYy5mLmQ7XG5cdFx0fVxuXHR9XG59XG5cblxuXG5mdW5jdGlvbiBfUHJvY2Vzc19zbGVlcCh0aW1lKVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG5cdFx0dmFyIGlkID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChfVXRpbHNfVHVwbGUwKSk7XG5cdFx0fSwgdGltZSk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7IGNsZWFyVGltZW91dChpZCk7IH07XG5cdH0pO1xufVxuXG5cblxuXG4vLyBQUk9HUkFNU1xuXG5cbnZhciBfUGxhdGZvcm1fd29ya2VyID0gRjQoZnVuY3Rpb24oaW1wbCwgZmxhZ0RlY29kZXIsIGRlYnVnTWV0YWRhdGEsIGFyZ3MpXG57XG5cdHJldHVybiBfUGxhdGZvcm1faW5pdGlhbGl6ZShcblx0XHRmbGFnRGVjb2Rlcixcblx0XHRhcmdzLFxuXHRcdGltcGwuaW5pdCxcblx0XHRpbXBsLnVwZGF0ZSxcblx0XHRpbXBsLnN1YnNjcmlwdGlvbnMsXG5cdFx0ZnVuY3Rpb24oKSB7IHJldHVybiBmdW5jdGlvbigpIHt9IH1cblx0KTtcbn0pO1xuXG5cblxuLy8gSU5JVElBTElaRSBBIFBST0dSQU1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1faW5pdGlhbGl6ZShmbGFnRGVjb2RlciwgYXJncywgaW5pdCwgdXBkYXRlLCBzdWJzY3JpcHRpb25zLCBzdGVwcGVyQnVpbGRlcilcbntcblx0dmFyIHJlc3VsdCA9IEEyKF9Kc29uX3J1biwgZmxhZ0RlY29kZXIsIF9Kc29uX3dyYXAoYXJncyA/IGFyZ3NbJ2ZsYWdzJ10gOiB1bmRlZmluZWQpKTtcblx0JGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkgfHwgX0RlYnVnX2NyYXNoKDIgLyoqLywgX0pzb25fZXJyb3JUb1N0cmluZyhyZXN1bHQuYSkgLyoqLyk7XG5cdHZhciBtYW5hZ2VycyA9IHt9O1xuXHRyZXN1bHQgPSBpbml0KHJlc3VsdC5hKTtcblx0dmFyIG1vZGVsID0gcmVzdWx0LmE7XG5cdHZhciBzdGVwcGVyID0gc3RlcHBlckJ1aWxkZXIoc2VuZFRvQXBwLCBtb2RlbCk7XG5cdHZhciBwb3J0cyA9IF9QbGF0Zm9ybV9zZXR1cEVmZmVjdHMobWFuYWdlcnMsIHNlbmRUb0FwcCk7XG5cblx0ZnVuY3Rpb24gc2VuZFRvQXBwKG1zZywgdmlld01ldGFkYXRhKVxuXHR7XG5cdFx0cmVzdWx0ID0gQTIodXBkYXRlLCBtc2csIG1vZGVsKTtcblx0XHRzdGVwcGVyKG1vZGVsID0gcmVzdWx0LmEsIHZpZXdNZXRhZGF0YSk7XG5cdFx0X1BsYXRmb3JtX2VucXVldWVFZmZlY3RzKG1hbmFnZXJzLCByZXN1bHQuYiwgc3Vic2NyaXB0aW9ucyhtb2RlbCkpO1xuXHR9XG5cblx0X1BsYXRmb3JtX2VucXVldWVFZmZlY3RzKG1hbmFnZXJzLCByZXN1bHQuYiwgc3Vic2NyaXB0aW9ucyhtb2RlbCkpO1xuXG5cdHJldHVybiBwb3J0cyA/IHsgcG9ydHM6IHBvcnRzIH0gOiB7fTtcbn1cblxuXG5cbi8vIFRSQUNLIFBSRUxPQURTXG4vL1xuLy8gVGhpcyBpcyB1c2VkIGJ5IGNvZGUgaW4gZWxtL2Jyb3dzZXIgYW5kIGVsbS9odHRwXG4vLyB0byByZWdpc3RlciBhbnkgSFRUUCByZXF1ZXN0cyB0aGF0IGFyZSB0cmlnZ2VyZWQgYnkgaW5pdC5cbi8vXG5cblxudmFyIF9QbGF0Zm9ybV9wcmVsb2FkO1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9yZWdpc3RlclByZWxvYWQodXJsKVxue1xuXHRfUGxhdGZvcm1fcHJlbG9hZC5hZGQodXJsKTtcbn1cblxuXG5cbi8vIEVGRkVDVCBNQU5BR0VSU1xuXG5cbnZhciBfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnMgPSB7fTtcblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fc2V0dXBFZmZlY3RzKG1hbmFnZXJzLCBzZW5kVG9BcHApXG57XG5cdHZhciBwb3J0cztcblxuXHQvLyBzZXR1cCBhbGwgbmVjZXNzYXJ5IGVmZmVjdCBtYW5hZ2Vyc1xuXHRmb3IgKHZhciBrZXkgaW4gX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzKVxuXHR7XG5cdFx0dmFyIG1hbmFnZXIgPSBfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNba2V5XTtcblxuXHRcdGlmIChtYW5hZ2VyLmEpXG5cdFx0e1xuXHRcdFx0cG9ydHMgPSBwb3J0cyB8fCB7fTtcblx0XHRcdHBvcnRzW2tleV0gPSBtYW5hZ2VyLmEoa2V5LCBzZW5kVG9BcHApO1xuXHRcdH1cblxuXHRcdG1hbmFnZXJzW2tleV0gPSBfUGxhdGZvcm1faW5zdGFudGlhdGVNYW5hZ2VyKG1hbmFnZXIsIHNlbmRUb0FwcCk7XG5cdH1cblxuXHRyZXR1cm4gcG9ydHM7XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2NyZWF0ZU1hbmFnZXIoaW5pdCwgb25FZmZlY3RzLCBvblNlbGZNc2csIGNtZE1hcCwgc3ViTWFwKVxue1xuXHRyZXR1cm4ge1xuXHRcdGI6IGluaXQsXG5cdFx0Yzogb25FZmZlY3RzLFxuXHRcdGQ6IG9uU2VsZk1zZyxcblx0XHRlOiBjbWRNYXAsXG5cdFx0Zjogc3ViTWFwXG5cdH07XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2luc3RhbnRpYXRlTWFuYWdlcihpbmZvLCBzZW5kVG9BcHApXG57XG5cdHZhciByb3V0ZXIgPSB7XG5cdFx0Zzogc2VuZFRvQXBwLFxuXHRcdGg6IHVuZGVmaW5lZFxuXHR9O1xuXG5cdHZhciBvbkVmZmVjdHMgPSBpbmZvLmM7XG5cdHZhciBvblNlbGZNc2cgPSBpbmZvLmQ7XG5cdHZhciBjbWRNYXAgPSBpbmZvLmU7XG5cdHZhciBzdWJNYXAgPSBpbmZvLmY7XG5cblx0ZnVuY3Rpb24gbG9vcChzdGF0ZSlcblx0e1xuXHRcdHJldHVybiBBMihfU2NoZWR1bGVyX2FuZFRoZW4sIGxvb3AsIF9TY2hlZHVsZXJfcmVjZWl2ZShmdW5jdGlvbihtc2cpXG5cdFx0e1xuXHRcdFx0dmFyIHZhbHVlID0gbXNnLmE7XG5cblx0XHRcdGlmIChtc2cuJCA9PT0gMClcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIEEzKG9uU2VsZk1zZywgcm91dGVyLCB2YWx1ZSwgc3RhdGUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gY21kTWFwICYmIHN1Yk1hcFxuXHRcdFx0XHQ/IEE0KG9uRWZmZWN0cywgcm91dGVyLCB2YWx1ZS5pLCB2YWx1ZS5qLCBzdGF0ZSlcblx0XHRcdFx0OiBBMyhvbkVmZmVjdHMsIHJvdXRlciwgY21kTWFwID8gdmFsdWUuaSA6IHZhbHVlLmosIHN0YXRlKTtcblx0XHR9KSk7XG5cdH1cblxuXHRyZXR1cm4gcm91dGVyLmggPSBfU2NoZWR1bGVyX3Jhd1NwYXduKEEyKF9TY2hlZHVsZXJfYW5kVGhlbiwgbG9vcCwgaW5mby5iKSk7XG59XG5cblxuXG4vLyBST1VUSU5HXG5cblxudmFyIF9QbGF0Zm9ybV9zZW5kVG9BcHAgPSBGMihmdW5jdGlvbihyb3V0ZXIsIG1zZylcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHJvdXRlci5nKG1zZyk7XG5cdFx0Y2FsbGJhY2soX1NjaGVkdWxlcl9zdWNjZWVkKF9VdGlsc19UdXBsZTApKTtcblx0fSk7XG59KTtcblxuXG52YXIgX1BsYXRmb3JtX3NlbmRUb1NlbGYgPSBGMihmdW5jdGlvbihyb3V0ZXIsIG1zZylcbntcblx0cmV0dXJuIEEyKF9TY2hlZHVsZXJfc2VuZCwgcm91dGVyLmgsIHtcblx0XHQkOiAwLFxuXHRcdGE6IG1zZ1xuXHR9KTtcbn0pO1xuXG5cblxuLy8gQkFHU1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9sZWFmKGhvbWUpXG57XG5cdHJldHVybiBmdW5jdGlvbih2YWx1ZSlcblx0e1xuXHRcdHJldHVybiB7XG5cdFx0XHQkOiAxLFxuXHRcdFx0azogaG9tZSxcblx0XHRcdGw6IHZhbHVlXG5cdFx0fTtcblx0fTtcbn1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fYmF0Y2gobGlzdClcbntcblx0cmV0dXJuIHtcblx0XHQkOiAyLFxuXHRcdG06IGxpc3Rcblx0fTtcbn1cblxuXG52YXIgX1BsYXRmb3JtX21hcCA9IEYyKGZ1bmN0aW9uKHRhZ2dlciwgYmFnKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDMsXG5cdFx0bjogdGFnZ2VyLFxuXHRcdG86IGJhZ1xuXHR9XG59KTtcblxuXG5cbi8vIFBJUEUgQkFHUyBJTlRPIEVGRkVDVCBNQU5BR0VSU1xuLy9cbi8vIEVmZmVjdHMgbXVzdCBiZSBxdWV1ZWQhXG4vL1xuLy8gU2F5IHlvdXIgaW5pdCBjb250YWlucyBhIHN5bmNocm9ub3VzIGNvbW1hbmQsIGxpa2UgVGltZS5ub3cgb3IgVGltZS5oZXJlXG4vL1xuLy8gICAtIFRoaXMgd2lsbCBwcm9kdWNlIGEgYmF0Y2ggb2YgZWZmZWN0cyAoRlhfMSlcbi8vICAgLSBUaGUgc3luY2hyb25vdXMgdGFzayB0cmlnZ2VycyB0aGUgc3Vic2VxdWVudCBgdXBkYXRlYCBjYWxsXG4vLyAgIC0gVGhpcyB3aWxsIHByb2R1Y2UgYSBiYXRjaCBvZiBlZmZlY3RzIChGWF8yKVxuLy9cbi8vIElmIHdlIGp1c3Qgc3RhcnQgZGlzcGF0Y2hpbmcgRlhfMiwgc3Vic2NyaXB0aW9ucyBmcm9tIEZYXzIgY2FuIGJlIHByb2Nlc3NlZFxuLy8gYmVmb3JlIHN1YnNjcmlwdGlvbnMgZnJvbSBGWF8xLiBObyBnb29kISBFYXJsaWVyIHZlcnNpb25zIG9mIHRoaXMgY29kZSBoYWRcbi8vIHRoaXMgcHJvYmxlbSwgbGVhZGluZyB0byB0aGVzZSByZXBvcnRzOlxuLy9cbi8vICAgaHR0cHM6Ly9naXRodWIuY29tL2VsbS9jb3JlL2lzc3Vlcy85ODBcbi8vICAgaHR0cHM6Ly9naXRodWIuY29tL2VsbS9jb3JlL3B1bGwvOTgxXG4vLyAgIGh0dHBzOi8vZ2l0aHViLmNvbS9lbG0vY29tcGlsZXIvaXNzdWVzLzE3NzZcbi8vXG4vLyBUaGUgcXVldWUgaXMgbmVjZXNzYXJ5IHRvIGF2b2lkIG9yZGVyaW5nIGlzc3VlcyBmb3Igc3luY2hyb25vdXMgY29tbWFuZHMuXG5cblxuLy8gV2h5IHVzZSB0cnVlL2ZhbHNlIGhlcmU/IFdoeSBub3QganVzdCBjaGVjayB0aGUgbGVuZ3RoIG9mIHRoZSBxdWV1ZT9cbi8vIFRoZSBnb2FsIGlzIHRvIGRldGVjdCBcImFyZSB3ZSBjdXJyZW50bHkgZGlzcGF0Y2hpbmcgZWZmZWN0cz9cIiBJZiB3ZVxuLy8gYXJlLCB3ZSBuZWVkIHRvIGJhaWwgYW5kIGxldCB0aGUgb25nb2luZyB3aGlsZSBsb29wIGhhbmRsZSB0aGluZ3MuXG4vL1xuLy8gTm93IHNheSB0aGUgcXVldWUgaGFzIDEgZWxlbWVudC4gV2hlbiB3ZSBkZXF1ZXVlIHRoZSBmaW5hbCBlbGVtZW50LFxuLy8gdGhlIHF1ZXVlIHdpbGwgYmUgZW1wdHksIGJ1dCB3ZSBhcmUgc3RpbGwgYWN0aXZlbHkgZGlzcGF0Y2hpbmcgZWZmZWN0cy5cbi8vIFNvIHlvdSBjb3VsZCBnZXQgcXVldWUganVtcGluZyBpbiBhIHJlYWxseSB0cmlja3kgY2F0ZWdvcnkgb2YgY2FzZXMuXG4vL1xudmFyIF9QbGF0Zm9ybV9lZmZlY3RzUXVldWUgPSBbXTtcbnZhciBfUGxhdGZvcm1fZWZmZWN0c0FjdGl2ZSA9IGZhbHNlO1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9lbnF1ZXVlRWZmZWN0cyhtYW5hZ2VycywgY21kQmFnLCBzdWJCYWcpXG57XG5cdF9QbGF0Zm9ybV9lZmZlY3RzUXVldWUucHVzaCh7IHA6IG1hbmFnZXJzLCBxOiBjbWRCYWcsIHI6IHN1YkJhZyB9KTtcblxuXHRpZiAoX1BsYXRmb3JtX2VmZmVjdHNBY3RpdmUpIHJldHVybjtcblxuXHRfUGxhdGZvcm1fZWZmZWN0c0FjdGl2ZSA9IHRydWU7XG5cdGZvciAodmFyIGZ4OyBmeCA9IF9QbGF0Zm9ybV9lZmZlY3RzUXVldWUuc2hpZnQoKTsgKVxuXHR7XG5cdFx0X1BsYXRmb3JtX2Rpc3BhdGNoRWZmZWN0cyhmeC5wLCBmeC5xLCBmeC5yKTtcblx0fVxuXHRfUGxhdGZvcm1fZWZmZWN0c0FjdGl2ZSA9IGZhbHNlO1xufVxuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9kaXNwYXRjaEVmZmVjdHMobWFuYWdlcnMsIGNtZEJhZywgc3ViQmFnKVxue1xuXHR2YXIgZWZmZWN0c0RpY3QgPSB7fTtcblx0X1BsYXRmb3JtX2dhdGhlckVmZmVjdHModHJ1ZSwgY21kQmFnLCBlZmZlY3RzRGljdCwgbnVsbCk7XG5cdF9QbGF0Zm9ybV9nYXRoZXJFZmZlY3RzKGZhbHNlLCBzdWJCYWcsIGVmZmVjdHNEaWN0LCBudWxsKTtcblxuXHRmb3IgKHZhciBob21lIGluIG1hbmFnZXJzKVxuXHR7XG5cdFx0X1NjaGVkdWxlcl9yYXdTZW5kKG1hbmFnZXJzW2hvbWVdLCB7XG5cdFx0XHQkOiAnZngnLFxuXHRcdFx0YTogZWZmZWN0c0RpY3RbaG9tZV0gfHwgeyBpOiBfTGlzdF9OaWwsIGo6IF9MaXN0X05pbCB9XG5cdFx0fSk7XG5cdH1cbn1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fZ2F0aGVyRWZmZWN0cyhpc0NtZCwgYmFnLCBlZmZlY3RzRGljdCwgdGFnZ2Vycylcbntcblx0c3dpdGNoIChiYWcuJClcblx0e1xuXHRcdGNhc2UgMTpcblx0XHRcdHZhciBob21lID0gYmFnLms7XG5cdFx0XHR2YXIgZWZmZWN0ID0gX1BsYXRmb3JtX3RvRWZmZWN0KGlzQ21kLCBob21lLCB0YWdnZXJzLCBiYWcubCk7XG5cdFx0XHRlZmZlY3RzRGljdFtob21lXSA9IF9QbGF0Zm9ybV9pbnNlcnQoaXNDbWQsIGVmZmVjdCwgZWZmZWN0c0RpY3RbaG9tZV0pO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAyOlxuXHRcdFx0Zm9yICh2YXIgbGlzdCA9IGJhZy5tOyBsaXN0LmI7IGxpc3QgPSBsaXN0LmIpIC8vIFdISUxFX0NPTlNcblx0XHRcdHtcblx0XHRcdFx0X1BsYXRmb3JtX2dhdGhlckVmZmVjdHMoaXNDbWQsIGxpc3QuYSwgZWZmZWN0c0RpY3QsIHRhZ2dlcnMpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAzOlxuXHRcdFx0X1BsYXRmb3JtX2dhdGhlckVmZmVjdHMoaXNDbWQsIGJhZy5vLCBlZmZlY3RzRGljdCwge1xuXHRcdFx0XHRzOiBiYWcubixcblx0XHRcdFx0dDogdGFnZ2Vyc1xuXHRcdFx0fSk7XG5cdFx0XHRyZXR1cm47XG5cdH1cbn1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fdG9FZmZlY3QoaXNDbWQsIGhvbWUsIHRhZ2dlcnMsIHZhbHVlKVxue1xuXHRmdW5jdGlvbiBhcHBseVRhZ2dlcnMoeClcblx0e1xuXHRcdGZvciAodmFyIHRlbXAgPSB0YWdnZXJzOyB0ZW1wOyB0ZW1wID0gdGVtcC50KVxuXHRcdHtcblx0XHRcdHggPSB0ZW1wLnMoeCk7XG5cdFx0fVxuXHRcdHJldHVybiB4O1xuXHR9XG5cblx0dmFyIG1hcCA9IGlzQ21kXG5cdFx0PyBfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbaG9tZV0uZVxuXHRcdDogX1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW2hvbWVdLmY7XG5cblx0cmV0dXJuIEEyKG1hcCwgYXBwbHlUYWdnZXJzLCB2YWx1ZSlcbn1cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1faW5zZXJ0KGlzQ21kLCBuZXdFZmZlY3QsIGVmZmVjdHMpXG57XG5cdGVmZmVjdHMgPSBlZmZlY3RzIHx8IHsgaTogX0xpc3RfTmlsLCBqOiBfTGlzdF9OaWwgfTtcblxuXHRpc0NtZFxuXHRcdD8gKGVmZmVjdHMuaSA9IF9MaXN0X0NvbnMobmV3RWZmZWN0LCBlZmZlY3RzLmkpKVxuXHRcdDogKGVmZmVjdHMuaiA9IF9MaXN0X0NvbnMobmV3RWZmZWN0LCBlZmZlY3RzLmopKTtcblxuXHRyZXR1cm4gZWZmZWN0cztcbn1cblxuXG5cbi8vIFBPUlRTXG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX2NoZWNrUG9ydE5hbWUobmFtZSlcbntcblx0aWYgKF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tuYW1lXSlcblx0e1xuXHRcdF9EZWJ1Z19jcmFzaCgzLCBuYW1lKVxuXHR9XG59XG5cblxuXG4vLyBPVVRHT0lORyBQT1JUU1xuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9vdXRnb2luZ1BvcnQobmFtZSwgY29udmVydGVyKVxue1xuXHRfUGxhdGZvcm1fY2hlY2tQb3J0TmFtZShuYW1lKTtcblx0X1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW25hbWVdID0ge1xuXHRcdGU6IF9QbGF0Zm9ybV9vdXRnb2luZ1BvcnRNYXAsXG5cdFx0dTogY29udmVydGVyLFxuXHRcdGE6IF9QbGF0Zm9ybV9zZXR1cE91dGdvaW5nUG9ydFxuXHR9O1xuXHRyZXR1cm4gX1BsYXRmb3JtX2xlYWYobmFtZSk7XG59XG5cblxudmFyIF9QbGF0Zm9ybV9vdXRnb2luZ1BvcnRNYXAgPSBGMihmdW5jdGlvbih0YWdnZXIsIHZhbHVlKSB7IHJldHVybiB2YWx1ZTsgfSk7XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX3NldHVwT3V0Z29pbmdQb3J0KG5hbWUpXG57XG5cdHZhciBzdWJzID0gW107XG5cdHZhciBjb252ZXJ0ZXIgPSBfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbbmFtZV0udTtcblxuXHQvLyBDUkVBVEUgTUFOQUdFUlxuXG5cdHZhciBpbml0ID0gX1Byb2Nlc3Nfc2xlZXAoMCk7XG5cblx0X1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW25hbWVdLmIgPSBpbml0O1xuXHRfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbbmFtZV0uYyA9IEYzKGZ1bmN0aW9uKHJvdXRlciwgY21kTGlzdCwgc3RhdGUpXG5cdHtcblx0XHRmb3IgKCA7IGNtZExpc3QuYjsgY21kTGlzdCA9IGNtZExpc3QuYikgLy8gV0hJTEVfQ09OU1xuXHRcdHtcblx0XHRcdC8vIGdyYWIgYSBzZXBhcmF0ZSByZWZlcmVuY2UgdG8gc3VicyBpbiBjYXNlIHVuc3Vic2NyaWJlIGlzIGNhbGxlZFxuXHRcdFx0dmFyIGN1cnJlbnRTdWJzID0gc3Vicztcblx0XHRcdHZhciB2YWx1ZSA9IF9Kc29uX3Vud3JhcChjb252ZXJ0ZXIoY21kTGlzdC5hKSk7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGN1cnJlbnRTdWJzLmxlbmd0aDsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRjdXJyZW50U3Vic1tpXSh2YWx1ZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBpbml0O1xuXHR9KTtcblxuXHQvLyBQVUJMSUMgQVBJXG5cblx0ZnVuY3Rpb24gc3Vic2NyaWJlKGNhbGxiYWNrKVxuXHR7XG5cdFx0c3Vicy5wdXNoKGNhbGxiYWNrKTtcblx0fVxuXG5cdGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGNhbGxiYWNrKVxuXHR7XG5cdFx0Ly8gY29weSBzdWJzIGludG8gYSBuZXcgYXJyYXkgaW4gY2FzZSB1bnN1YnNjcmliZSBpcyBjYWxsZWQgd2l0aGluIGFcblx0XHQvLyBzdWJzY3JpYmVkIGNhbGxiYWNrXG5cdFx0c3VicyA9IHN1YnMuc2xpY2UoKTtcblx0XHR2YXIgaW5kZXggPSBzdWJzLmluZGV4T2YoY2FsbGJhY2spO1xuXHRcdGlmIChpbmRleCA+PSAwKVxuXHRcdHtcblx0XHRcdHN1YnMuc3BsaWNlKGluZGV4LCAxKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdHN1YnNjcmliZTogc3Vic2NyaWJlLFxuXHRcdHVuc3Vic2NyaWJlOiB1bnN1YnNjcmliZVxuXHR9O1xufVxuXG5cblxuLy8gSU5DT01JTkcgUE9SVFNcblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1faW5jb21pbmdQb3J0KG5hbWUsIGNvbnZlcnRlcilcbntcblx0X1BsYXRmb3JtX2NoZWNrUG9ydE5hbWUobmFtZSk7XG5cdF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tuYW1lXSA9IHtcblx0XHRmOiBfUGxhdGZvcm1faW5jb21pbmdQb3J0TWFwLFxuXHRcdHU6IGNvbnZlcnRlcixcblx0XHRhOiBfUGxhdGZvcm1fc2V0dXBJbmNvbWluZ1BvcnRcblx0fTtcblx0cmV0dXJuIF9QbGF0Zm9ybV9sZWFmKG5hbWUpO1xufVxuXG5cbnZhciBfUGxhdGZvcm1faW5jb21pbmdQb3J0TWFwID0gRjIoZnVuY3Rpb24odGFnZ2VyLCBmaW5hbFRhZ2dlcilcbntcblx0cmV0dXJuIGZ1bmN0aW9uKHZhbHVlKVxuXHR7XG5cdFx0cmV0dXJuIHRhZ2dlcihmaW5hbFRhZ2dlcih2YWx1ZSkpO1xuXHR9O1xufSk7XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX3NldHVwSW5jb21pbmdQb3J0KG5hbWUsIHNlbmRUb0FwcClcbntcblx0dmFyIHN1YnMgPSBfTGlzdF9OaWw7XG5cdHZhciBjb252ZXJ0ZXIgPSBfUGxhdGZvcm1fZWZmZWN0TWFuYWdlcnNbbmFtZV0udTtcblxuXHQvLyBDUkVBVEUgTUFOQUdFUlxuXG5cdHZhciBpbml0ID0gX1NjaGVkdWxlcl9zdWNjZWVkKG51bGwpO1xuXG5cdF9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1tuYW1lXS5iID0gaW5pdDtcblx0X1BsYXRmb3JtX2VmZmVjdE1hbmFnZXJzW25hbWVdLmMgPSBGMyhmdW5jdGlvbihyb3V0ZXIsIHN1Ykxpc3QsIHN0YXRlKVxuXHR7XG5cdFx0c3VicyA9IHN1Ykxpc3Q7XG5cdFx0cmV0dXJuIGluaXQ7XG5cdH0pO1xuXG5cdC8vIFBVQkxJQyBBUElcblxuXHRmdW5jdGlvbiBzZW5kKGluY29taW5nVmFsdWUpXG5cdHtcblx0XHR2YXIgcmVzdWx0ID0gQTIoX0pzb25fcnVuLCBjb252ZXJ0ZXIsIF9Kc29uX3dyYXAoaW5jb21pbmdWYWx1ZSkpO1xuXG5cdFx0JGVsbSRjb3JlJFJlc3VsdCRpc09rKHJlc3VsdCkgfHwgX0RlYnVnX2NyYXNoKDQsIG5hbWUsIHJlc3VsdC5hKTtcblxuXHRcdHZhciB2YWx1ZSA9IHJlc3VsdC5hO1xuXHRcdGZvciAodmFyIHRlbXAgPSBzdWJzOyB0ZW1wLmI7IHRlbXAgPSB0ZW1wLmIpIC8vIFdISUxFX0NPTlNcblx0XHR7XG5cdFx0XHRzZW5kVG9BcHAodGVtcC5hKHZhbHVlKSk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHsgc2VuZDogc2VuZCB9O1xufVxuXG5cblxuLy8gRVhQT1JUIEVMTSBNT0RVTEVTXG4vL1xuLy8gSGF2ZSBERUJVRyBhbmQgUFJPRCB2ZXJzaW9ucyBzbyB0aGF0IHdlIGNhbiAoMSkgZ2l2ZSBuaWNlciBlcnJvcnMgaW5cbi8vIGRlYnVnIG1vZGUgYW5kICgyKSBub3QgcGF5IGZvciB0aGUgYml0cyBuZWVkZWQgZm9yIHRoYXQgaW4gcHJvZCBtb2RlLlxuLy9cblxuXG5mdW5jdGlvbiBfUGxhdGZvcm1fZXhwb3J0X1VOVVNFRChleHBvcnRzKVxue1xuXHRzY29wZVsnRWxtJ11cblx0XHQ/IF9QbGF0Zm9ybV9tZXJnZUV4cG9ydHNQcm9kKHNjb3BlWydFbG0nXSwgZXhwb3J0cylcblx0XHQ6IHNjb3BlWydFbG0nXSA9IGV4cG9ydHM7XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX21lcmdlRXhwb3J0c1Byb2Qob2JqLCBleHBvcnRzKVxue1xuXHRmb3IgKHZhciBuYW1lIGluIGV4cG9ydHMpXG5cdHtcblx0XHQobmFtZSBpbiBvYmopXG5cdFx0XHQ/IChuYW1lID09ICdpbml0Jylcblx0XHRcdFx0PyBfRGVidWdfY3Jhc2goNilcblx0XHRcdFx0OiBfUGxhdGZvcm1fbWVyZ2VFeHBvcnRzUHJvZChvYmpbbmFtZV0sIGV4cG9ydHNbbmFtZV0pXG5cdFx0XHQ6IChvYmpbbmFtZV0gPSBleHBvcnRzW25hbWVdKTtcblx0fVxufVxuXG5cbmZ1bmN0aW9uIF9QbGF0Zm9ybV9leHBvcnQoZXhwb3J0cylcbntcblx0c2NvcGVbJ0VsbSddXG5cdFx0PyBfUGxhdGZvcm1fbWVyZ2VFeHBvcnRzRGVidWcoJ0VsbScsIHNjb3BlWydFbG0nXSwgZXhwb3J0cylcblx0XHQ6IHNjb3BlWydFbG0nXSA9IGV4cG9ydHM7XG59XG5cblxuZnVuY3Rpb24gX1BsYXRmb3JtX21lcmdlRXhwb3J0c0RlYnVnKG1vZHVsZU5hbWUsIG9iaiwgZXhwb3J0cylcbntcblx0Zm9yICh2YXIgbmFtZSBpbiBleHBvcnRzKVxuXHR7XG5cdFx0KG5hbWUgaW4gb2JqKVxuXHRcdFx0PyAobmFtZSA9PSAnaW5pdCcpXG5cdFx0XHRcdD8gX0RlYnVnX2NyYXNoKDYsIG1vZHVsZU5hbWUpXG5cdFx0XHRcdDogX1BsYXRmb3JtX21lcmdlRXhwb3J0c0RlYnVnKG1vZHVsZU5hbWUgKyAnLicgKyBuYW1lLCBvYmpbbmFtZV0sIGV4cG9ydHNbbmFtZV0pXG5cdFx0XHQ6IChvYmpbbmFtZV0gPSBleHBvcnRzW25hbWVdKTtcblx0fVxufVxuXG5cblxuXG4vLyBIRUxQRVJTXG5cblxudmFyIF9WaXJ0dWFsRG9tX2RpdmVydEhyZWZUb0FwcDtcblxudmFyIF9WaXJ0dWFsRG9tX2RvYyA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgPyBkb2N1bWVudCA6IHt9O1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGVuZENoaWxkKHBhcmVudCwgY2hpbGQpXG57XG5cdHBhcmVudC5hcHBlbmRDaGlsZChjaGlsZCk7XG59XG5cbnZhciBfVmlydHVhbERvbV9pbml0ID0gRjQoZnVuY3Rpb24odmlydHVhbE5vZGUsIGZsYWdEZWNvZGVyLCBkZWJ1Z01ldGFkYXRhLCBhcmdzKVxue1xuXHQvLyBOT1RFOiB0aGlzIGZ1bmN0aW9uIG5lZWRzIF9QbGF0Zm9ybV9leHBvcnQgYXZhaWxhYmxlIHRvIHdvcmtcblxuXHQvKipfVU5VU0VEL1xuXHR2YXIgbm9kZSA9IGFyZ3NbJ25vZGUnXTtcblx0Ly8qL1xuXHQvKiovXG5cdHZhciBub2RlID0gYXJncyAmJiBhcmdzWydub2RlJ10gPyBhcmdzWydub2RlJ10gOiBfRGVidWdfY3Jhc2goMCk7XG5cdC8vKi9cblxuXHRub2RlLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKFxuXHRcdF9WaXJ0dWFsRG9tX3JlbmRlcih2aXJ0dWFsTm9kZSwgZnVuY3Rpb24oKSB7fSksXG5cdFx0bm9kZVxuXHQpO1xuXG5cdHJldHVybiB7fTtcbn0pO1xuXG5cblxuLy8gVEVYVFxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX3RleHQoc3RyaW5nKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6IDAsXG5cdFx0YTogc3RyaW5nXG5cdH07XG59XG5cblxuXG4vLyBOT0RFXG5cblxudmFyIF9WaXJ0dWFsRG9tX25vZGVOUyA9IEYyKGZ1bmN0aW9uKG5hbWVzcGFjZSwgdGFnKVxue1xuXHRyZXR1cm4gRjIoZnVuY3Rpb24oZmFjdExpc3QsIGtpZExpc3QpXG5cdHtcblx0XHRmb3IgKHZhciBraWRzID0gW10sIGRlc2NlbmRhbnRzQ291bnQgPSAwOyBraWRMaXN0LmI7IGtpZExpc3QgPSBraWRMaXN0LmIpIC8vIFdISUxFX0NPTlNcblx0XHR7XG5cdFx0XHR2YXIga2lkID0ga2lkTGlzdC5hO1xuXHRcdFx0ZGVzY2VuZGFudHNDb3VudCArPSAoa2lkLmIgfHwgMCk7XG5cdFx0XHRraWRzLnB1c2goa2lkKTtcblx0XHR9XG5cdFx0ZGVzY2VuZGFudHNDb3VudCArPSBraWRzLmxlbmd0aDtcblxuXHRcdHJldHVybiB7XG5cdFx0XHQkOiAxLFxuXHRcdFx0YzogdGFnLFxuXHRcdFx0ZDogX1ZpcnR1YWxEb21fb3JnYW5pemVGYWN0cyhmYWN0TGlzdCksXG5cdFx0XHRlOiBraWRzLFxuXHRcdFx0ZjogbmFtZXNwYWNlLFxuXHRcdFx0YjogZGVzY2VuZGFudHNDb3VudFxuXHRcdH07XG5cdH0pO1xufSk7XG5cblxudmFyIF9WaXJ0dWFsRG9tX25vZGUgPSBfVmlydHVhbERvbV9ub2RlTlModW5kZWZpbmVkKTtcblxuXG5cbi8vIEtFWUVEIE5PREVcblxuXG52YXIgX1ZpcnR1YWxEb21fa2V5ZWROb2RlTlMgPSBGMihmdW5jdGlvbihuYW1lc3BhY2UsIHRhZylcbntcblx0cmV0dXJuIEYyKGZ1bmN0aW9uKGZhY3RMaXN0LCBraWRMaXN0KVxuXHR7XG5cdFx0Zm9yICh2YXIga2lkcyA9IFtdLCBkZXNjZW5kYW50c0NvdW50ID0gMDsga2lkTGlzdC5iOyBraWRMaXN0ID0ga2lkTGlzdC5iKSAvLyBXSElMRV9DT05TXG5cdFx0e1xuXHRcdFx0dmFyIGtpZCA9IGtpZExpc3QuYTtcblx0XHRcdGRlc2NlbmRhbnRzQ291bnQgKz0gKGtpZC5iLmIgfHwgMCk7XG5cdFx0XHRraWRzLnB1c2goa2lkKTtcblx0XHR9XG5cdFx0ZGVzY2VuZGFudHNDb3VudCArPSBraWRzLmxlbmd0aDtcblxuXHRcdHJldHVybiB7XG5cdFx0XHQkOiAyLFxuXHRcdFx0YzogdGFnLFxuXHRcdFx0ZDogX1ZpcnR1YWxEb21fb3JnYW5pemVGYWN0cyhmYWN0TGlzdCksXG5cdFx0XHRlOiBraWRzLFxuXHRcdFx0ZjogbmFtZXNwYWNlLFxuXHRcdFx0YjogZGVzY2VuZGFudHNDb3VudFxuXHRcdH07XG5cdH0pO1xufSk7XG5cblxudmFyIF9WaXJ0dWFsRG9tX2tleWVkTm9kZSA9IF9WaXJ0dWFsRG9tX2tleWVkTm9kZU5TKHVuZGVmaW5lZCk7XG5cblxuXG4vLyBDVVNUT01cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9jdXN0b20oZmFjdExpc3QsIG1vZGVsLCByZW5kZXIsIGRpZmYpXG57XG5cdHJldHVybiB7XG5cdFx0JDogMyxcblx0XHRkOiBfVmlydHVhbERvbV9vcmdhbml6ZUZhY3RzKGZhY3RMaXN0KSxcblx0XHRnOiBtb2RlbCxcblx0XHRoOiByZW5kZXIsXG5cdFx0aTogZGlmZlxuXHR9O1xufVxuXG5cblxuLy8gTUFQXG5cblxudmFyIF9WaXJ0dWFsRG9tX21hcCA9IEYyKGZ1bmN0aW9uKHRhZ2dlciwgbm9kZSlcbntcblx0cmV0dXJuIHtcblx0XHQkOiA0LFxuXHRcdGo6IHRhZ2dlcixcblx0XHRrOiBub2RlLFxuXHRcdGI6IDEgKyAobm9kZS5iIHx8IDApXG5cdH07XG59KTtcblxuXG5cbi8vIExBWllcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV90aHVuayhyZWZzLCB0aHVuaylcbntcblx0cmV0dXJuIHtcblx0XHQkOiA1LFxuXHRcdGw6IHJlZnMsXG5cdFx0bTogdGh1bmssXG5cdFx0azogdW5kZWZpbmVkXG5cdH07XG59XG5cbnZhciBfVmlydHVhbERvbV9sYXp5ID0gRjIoZnVuY3Rpb24oZnVuYywgYSlcbntcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RodW5rKFtmdW5jLCBhXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGZ1bmMoYSk7XG5cdH0pO1xufSk7XG5cbnZhciBfVmlydHVhbERvbV9sYXp5MiA9IEYzKGZ1bmN0aW9uKGZ1bmMsIGEsIGIpXG57XG5cdHJldHVybiBfVmlydHVhbERvbV90aHVuayhbZnVuYywgYSwgYl0sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBBMihmdW5jLCBhLCBiKTtcblx0fSk7XG59KTtcblxudmFyIF9WaXJ0dWFsRG9tX2xhenkzID0gRjQoZnVuY3Rpb24oZnVuYywgYSwgYiwgYylcbntcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RodW5rKFtmdW5jLCBhLCBiLCBjXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIEEzKGZ1bmMsIGEsIGIsIGMpO1xuXHR9KTtcbn0pO1xuXG52YXIgX1ZpcnR1YWxEb21fbGF6eTQgPSBGNShmdW5jdGlvbihmdW5jLCBhLCBiLCBjLCBkKVxue1xuXHRyZXR1cm4gX1ZpcnR1YWxEb21fdGh1bmsoW2Z1bmMsIGEsIGIsIGMsIGRdLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gQTQoZnVuYywgYSwgYiwgYywgZCk7XG5cdH0pO1xufSk7XG5cbnZhciBfVmlydHVhbERvbV9sYXp5NSA9IEY2KGZ1bmN0aW9uKGZ1bmMsIGEsIGIsIGMsIGQsIGUpXG57XG5cdHJldHVybiBfVmlydHVhbERvbV90aHVuayhbZnVuYywgYSwgYiwgYywgZCwgZV0sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBBNShmdW5jLCBhLCBiLCBjLCBkLCBlKTtcblx0fSk7XG59KTtcblxudmFyIF9WaXJ0dWFsRG9tX2xhenk2ID0gRjcoZnVuY3Rpb24oZnVuYywgYSwgYiwgYywgZCwgZSwgZilcbntcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RodW5rKFtmdW5jLCBhLCBiLCBjLCBkLCBlLCBmXSwgZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIEE2KGZ1bmMsIGEsIGIsIGMsIGQsIGUsIGYpO1xuXHR9KTtcbn0pO1xuXG52YXIgX1ZpcnR1YWxEb21fbGF6eTcgPSBGOChmdW5jdGlvbihmdW5jLCBhLCBiLCBjLCBkLCBlLCBmLCBnKVxue1xuXHRyZXR1cm4gX1ZpcnR1YWxEb21fdGh1bmsoW2Z1bmMsIGEsIGIsIGMsIGQsIGUsIGYsIGddLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gQTcoZnVuYywgYSwgYiwgYywgZCwgZSwgZiwgZyk7XG5cdH0pO1xufSk7XG5cbnZhciBfVmlydHVhbERvbV9sYXp5OCA9IEY5KGZ1bmN0aW9uKGZ1bmMsIGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgpXG57XG5cdHJldHVybiBfVmlydHVhbERvbV90aHVuayhbZnVuYywgYSwgYiwgYywgZCwgZSwgZiwgZywgaF0sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBBOChmdW5jLCBhLCBiLCBjLCBkLCBlLCBmLCBnLCBoKTtcblx0fSk7XG59KTtcblxuXG5cbi8vIEZBQ1RTXG5cblxudmFyIF9WaXJ0dWFsRG9tX29uID0gRjIoZnVuY3Rpb24oa2V5LCBoYW5kbGVyKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6ICdhMCcsXG5cdFx0bjoga2V5LFxuXHRcdG86IGhhbmRsZXJcblx0fTtcbn0pO1xudmFyIF9WaXJ0dWFsRG9tX3N0eWxlID0gRjIoZnVuY3Rpb24oa2V5LCB2YWx1ZSlcbntcblx0cmV0dXJuIHtcblx0XHQkOiAnYTEnLFxuXHRcdG46IGtleSxcblx0XHRvOiB2YWx1ZVxuXHR9O1xufSk7XG52YXIgX1ZpcnR1YWxEb21fcHJvcGVydHkgPSBGMihmdW5jdGlvbihrZXksIHZhbHVlKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6ICdhMicsXG5cdFx0bjoga2V5LFxuXHRcdG86IHZhbHVlXG5cdH07XG59KTtcbnZhciBfVmlydHVhbERvbV9hdHRyaWJ1dGUgPSBGMihmdW5jdGlvbihrZXksIHZhbHVlKVxue1xuXHRyZXR1cm4ge1xuXHRcdCQ6ICdhMycsXG5cdFx0bjoga2V5LFxuXHRcdG86IHZhbHVlXG5cdH07XG59KTtcbnZhciBfVmlydHVhbERvbV9hdHRyaWJ1dGVOUyA9IEYzKGZ1bmN0aW9uKG5hbWVzcGFjZSwga2V5LCB2YWx1ZSlcbntcblx0cmV0dXJuIHtcblx0XHQkOiAnYTQnLFxuXHRcdG46IGtleSxcblx0XHRvOiB7IGY6IG5hbWVzcGFjZSwgbzogdmFsdWUgfVxuXHR9O1xufSk7XG5cblxuXG4vLyBYU1MgQVRUQUNLIFZFQ1RPUiBDSEVDS1NcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9ub1NjcmlwdCh0YWcpXG57XG5cdHJldHVybiB0YWcgPT0gJ3NjcmlwdCcgPyAncCcgOiB0YWc7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vT25PckZvcm1BY3Rpb24oa2V5KVxue1xuXHRyZXR1cm4gL14ob258Zm9ybUFjdGlvbiQpL2kudGVzdChrZXkpID8gJ2RhdGEtJyArIGtleSA6IGtleTtcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fbm9Jbm5lckh0bWxPckZvcm1BY3Rpb24oa2V5KVxue1xuXHRyZXR1cm4ga2V5ID09ICdpbm5lckhUTUwnIHx8IGtleSA9PSAnZm9ybUFjdGlvbicgPyAnZGF0YS0nICsga2V5IDoga2V5O1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9ub0phdmFTY3JpcHRVcmlfVU5VU0VEKHZhbHVlKVxue1xuXHRyZXR1cm4gL15qYXZhc2NyaXB0Oi9pLnRlc3QodmFsdWUucmVwbGFjZSgvXFxzL2csJycpKSA/ICcnIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdFVyaSh2YWx1ZSlcbntcblx0cmV0dXJuIC9eamF2YXNjcmlwdDovaS50ZXN0KHZhbHVlLnJlcGxhY2UoL1xccy9nLCcnKSlcblx0XHQ/ICdqYXZhc2NyaXB0OmFsZXJ0KFwiVGhpcyBpcyBhbiBYU1MgdmVjdG9yLiBQbGVhc2UgdXNlIHBvcnRzIG9yIHdlYiBjb21wb25lbnRzIGluc3RlYWQuXCIpJ1xuXHRcdDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdE9ySHRtbFVyaV9VTlVTRUQodmFsdWUpXG57XG5cdHJldHVybiAvXlxccyooamF2YXNjcmlwdDp8ZGF0YTp0ZXh0XFwvaHRtbCkvaS50ZXN0KHZhbHVlKSA/ICcnIDogdmFsdWU7XG59XG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdE9ySHRtbFVyaSh2YWx1ZSlcbntcblx0cmV0dXJuIC9eXFxzKihqYXZhc2NyaXB0OnxkYXRhOnRleHRcXC9odG1sKS9pLnRlc3QodmFsdWUpXG5cdFx0PyAnamF2YXNjcmlwdDphbGVydChcIlRoaXMgaXMgYW4gWFNTIHZlY3Rvci4gUGxlYXNlIHVzZSBwb3J0cyBvciB3ZWIgY29tcG9uZW50cyBpbnN0ZWFkLlwiKSdcblx0XHQ6IHZhbHVlO1xufVxuXG5cblxuLy8gTUFQIEZBQ1RTXG5cblxudmFyIF9WaXJ0dWFsRG9tX21hcEF0dHJpYnV0ZSA9IEYyKGZ1bmN0aW9uKGZ1bmMsIGF0dHIpXG57XG5cdHJldHVybiAoYXR0ci4kID09PSAnYTAnKVxuXHRcdD8gQTIoX1ZpcnR1YWxEb21fb24sIGF0dHIubiwgX1ZpcnR1YWxEb21fbWFwSGFuZGxlcihmdW5jLCBhdHRyLm8pKVxuXHRcdDogYXR0cjtcbn0pO1xuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9tYXBIYW5kbGVyKGZ1bmMsIGhhbmRsZXIpXG57XG5cdHZhciB0YWcgPSAkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kdG9IYW5kbGVySW50KGhhbmRsZXIpO1xuXG5cdC8vIDAgPSBOb3JtYWxcblx0Ly8gMSA9IE1heVN0b3BQcm9wYWdhdGlvblxuXHQvLyAyID0gTWF5UHJldmVudERlZmF1bHRcblx0Ly8gMyA9IEN1c3RvbVxuXG5cdHJldHVybiB7XG5cdFx0JDogaGFuZGxlci4kLFxuXHRcdGE6XG5cdFx0XHQhdGFnXG5cdFx0XHRcdD8gQTIoJGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcCwgZnVuYywgaGFuZGxlci5hKVxuXHRcdFx0XHQ6XG5cdFx0XHRBMygkZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMixcblx0XHRcdFx0dGFnIDwgM1xuXHRcdFx0XHRcdD8gX1ZpcnR1YWxEb21fbWFwRXZlbnRUdXBsZVxuXHRcdFx0XHRcdDogX1ZpcnR1YWxEb21fbWFwRXZlbnRSZWNvcmQsXG5cdFx0XHRcdCRlbG0kanNvbiRKc29uJERlY29kZSRzdWNjZWVkKGZ1bmMpLFxuXHRcdFx0XHRoYW5kbGVyLmFcblx0XHRcdClcblx0fTtcbn1cblxudmFyIF9WaXJ0dWFsRG9tX21hcEV2ZW50VHVwbGUgPSBGMihmdW5jdGlvbihmdW5jLCB0dXBsZSlcbntcblx0cmV0dXJuIF9VdGlsc19UdXBsZTIoZnVuYyh0dXBsZS5hKSwgdHVwbGUuYik7XG59KTtcblxudmFyIF9WaXJ0dWFsRG9tX21hcEV2ZW50UmVjb3JkID0gRjIoZnVuY3Rpb24oZnVuYywgcmVjb3JkKVxue1xuXHRyZXR1cm4ge1xuXHRcdG1lc3NhZ2U6IGZ1bmMocmVjb3JkLm1lc3NhZ2UpLFxuXHRcdHN0b3BQcm9wYWdhdGlvbjogcmVjb3JkLnN0b3BQcm9wYWdhdGlvbixcblx0XHRwcmV2ZW50RGVmYXVsdDogcmVjb3JkLnByZXZlbnREZWZhdWx0XG5cdH1cbn0pO1xuXG5cblxuLy8gT1JHQU5JWkUgRkFDVFNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9vcmdhbml6ZUZhY3RzKGZhY3RMaXN0KVxue1xuXHRmb3IgKHZhciBmYWN0cyA9IHt9OyBmYWN0TGlzdC5iOyBmYWN0TGlzdCA9IGZhY3RMaXN0LmIpIC8vIFdISUxFX0NPTlNcblx0e1xuXHRcdHZhciBlbnRyeSA9IGZhY3RMaXN0LmE7XG5cblx0XHR2YXIgdGFnID0gZW50cnkuJDtcblx0XHR2YXIga2V5ID0gZW50cnkubjtcblx0XHR2YXIgdmFsdWUgPSBlbnRyeS5vO1xuXG5cdFx0aWYgKHRhZyA9PT0gJ2EyJylcblx0XHR7XG5cdFx0XHQoa2V5ID09PSAnY2xhc3NOYW1lJylcblx0XHRcdFx0PyBfVmlydHVhbERvbV9hZGRDbGFzcyhmYWN0cywga2V5LCBfSnNvbl91bndyYXAodmFsdWUpKVxuXHRcdFx0XHQ6IGZhY3RzW2tleV0gPSBfSnNvbl91bndyYXAodmFsdWUpO1xuXG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR2YXIgc3ViRmFjdHMgPSBmYWN0c1t0YWddIHx8IChmYWN0c1t0YWddID0ge30pO1xuXHRcdCh0YWcgPT09ICdhMycgJiYga2V5ID09PSAnY2xhc3MnKVxuXHRcdFx0PyBfVmlydHVhbERvbV9hZGRDbGFzcyhzdWJGYWN0cywga2V5LCB2YWx1ZSlcblx0XHRcdDogc3ViRmFjdHNba2V5XSA9IHZhbHVlO1xuXHR9XG5cblx0cmV0dXJuIGZhY3RzO1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hZGRDbGFzcyhvYmplY3QsIGtleSwgbmV3Q2xhc3MpXG57XG5cdHZhciBjbGFzc2VzID0gb2JqZWN0W2tleV07XG5cdG9iamVjdFtrZXldID0gY2xhc3NlcyA/IGNsYXNzZXMgKyAnICcgKyBuZXdDbGFzcyA6IG5ld0NsYXNzO1xufVxuXG5cblxuLy8gUkVOREVSXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fcmVuZGVyKHZOb2RlLCBldmVudE5vZGUpXG57XG5cdHZhciB0YWcgPSB2Tm9kZS4kO1xuXG5cdGlmICh0YWcgPT09IDUpXG5cdHtcblx0XHRyZXR1cm4gX1ZpcnR1YWxEb21fcmVuZGVyKHZOb2RlLmsgfHwgKHZOb2RlLmsgPSB2Tm9kZS5tKCkpLCBldmVudE5vZGUpO1xuXHR9XG5cblx0aWYgKHRhZyA9PT0gMClcblx0e1xuXHRcdHJldHVybiBfVmlydHVhbERvbV9kb2MuY3JlYXRlVGV4dE5vZGUodk5vZGUuYSk7XG5cdH1cblxuXHRpZiAodGFnID09PSA0KVxuXHR7XG5cdFx0dmFyIHN1Yk5vZGUgPSB2Tm9kZS5rO1xuXHRcdHZhciB0YWdnZXIgPSB2Tm9kZS5qO1xuXG5cdFx0d2hpbGUgKHN1Yk5vZGUuJCA9PT0gNClcblx0XHR7XG5cdFx0XHR0eXBlb2YgdGFnZ2VyICE9PSAnb2JqZWN0J1xuXHRcdFx0XHQ/IHRhZ2dlciA9IFt0YWdnZXIsIHN1Yk5vZGUual1cblx0XHRcdFx0OiB0YWdnZXIucHVzaChzdWJOb2RlLmopO1xuXG5cdFx0XHRzdWJOb2RlID0gc3ViTm9kZS5rO1xuXHRcdH1cblxuXHRcdHZhciBzdWJFdmVudFJvb3QgPSB7IGo6IHRhZ2dlciwgcDogZXZlbnROb2RlIH07XG5cdFx0dmFyIGRvbU5vZGUgPSBfVmlydHVhbERvbV9yZW5kZXIoc3ViTm9kZSwgc3ViRXZlbnRSb290KTtcblx0XHRkb21Ob2RlLmVsbV9ldmVudF9ub2RlX3JlZiA9IHN1YkV2ZW50Um9vdDtcblx0XHRyZXR1cm4gZG9tTm9kZTtcblx0fVxuXG5cdGlmICh0YWcgPT09IDMpXG5cdHtcblx0XHR2YXIgZG9tTm9kZSA9IHZOb2RlLmgodk5vZGUuZyk7XG5cdFx0X1ZpcnR1YWxEb21fYXBwbHlGYWN0cyhkb21Ob2RlLCBldmVudE5vZGUsIHZOb2RlLmQpO1xuXHRcdHJldHVybiBkb21Ob2RlO1xuXHR9XG5cblx0Ly8gYXQgdGhpcyBwb2ludCBgdGFnYCBtdXN0IGJlIDEgb3IgMlxuXG5cdHZhciBkb21Ob2RlID0gdk5vZGUuZlxuXHRcdD8gX1ZpcnR1YWxEb21fZG9jLmNyZWF0ZUVsZW1lbnROUyh2Tm9kZS5mLCB2Tm9kZS5jKVxuXHRcdDogX1ZpcnR1YWxEb21fZG9jLmNyZWF0ZUVsZW1lbnQodk5vZGUuYyk7XG5cblx0aWYgKF9WaXJ0dWFsRG9tX2RpdmVydEhyZWZUb0FwcCAmJiB2Tm9kZS5jID09ICdhJylcblx0e1xuXHRcdGRvbU5vZGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfVmlydHVhbERvbV9kaXZlcnRIcmVmVG9BcHAoZG9tTm9kZSkpO1xuXHR9XG5cblx0X1ZpcnR1YWxEb21fYXBwbHlGYWN0cyhkb21Ob2RlLCBldmVudE5vZGUsIHZOb2RlLmQpO1xuXG5cdGZvciAodmFyIGtpZHMgPSB2Tm9kZS5lLCBpID0gMDsgaSA8IGtpZHMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHRfVmlydHVhbERvbV9hcHBlbmRDaGlsZChkb21Ob2RlLCBfVmlydHVhbERvbV9yZW5kZXIodGFnID09PSAxID8ga2lkc1tpXSA6IGtpZHNbaV0uYiwgZXZlbnROb2RlKSk7XG5cdH1cblxuXHRyZXR1cm4gZG9tTm9kZTtcbn1cblxuXG5cbi8vIEFQUExZIEZBQ1RTXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlGYWN0cyhkb21Ob2RlLCBldmVudE5vZGUsIGZhY3RzKVxue1xuXHRmb3IgKHZhciBrZXkgaW4gZmFjdHMpXG5cdHtcblx0XHR2YXIgdmFsdWUgPSBmYWN0c1trZXldO1xuXG5cdFx0a2V5ID09PSAnYTEnXG5cdFx0XHQ/IF9WaXJ0dWFsRG9tX2FwcGx5U3R5bGVzKGRvbU5vZGUsIHZhbHVlKVxuXHRcdFx0OlxuXHRcdGtleSA9PT0gJ2EwJ1xuXHRcdFx0PyBfVmlydHVhbERvbV9hcHBseUV2ZW50cyhkb21Ob2RlLCBldmVudE5vZGUsIHZhbHVlKVxuXHRcdFx0OlxuXHRcdGtleSA9PT0gJ2EzJ1xuXHRcdFx0PyBfVmlydHVhbERvbV9hcHBseUF0dHJzKGRvbU5vZGUsIHZhbHVlKVxuXHRcdFx0OlxuXHRcdGtleSA9PT0gJ2E0J1xuXHRcdFx0PyBfVmlydHVhbERvbV9hcHBseUF0dHJzTlMoZG9tTm9kZSwgdmFsdWUpXG5cdFx0XHQ6XG5cdFx0KChrZXkgIT09ICd2YWx1ZScgJiYga2V5ICE9PSAnY2hlY2tlZCcpIHx8IGRvbU5vZGVba2V5XSAhPT0gdmFsdWUpICYmIChkb21Ob2RlW2tleV0gPSB2YWx1ZSk7XG5cdH1cbn1cblxuXG5cbi8vIEFQUExZIFNUWUxFU1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGx5U3R5bGVzKGRvbU5vZGUsIHN0eWxlcylcbntcblx0dmFyIGRvbU5vZGVTdHlsZSA9IGRvbU5vZGUuc3R5bGU7XG5cblx0Zm9yICh2YXIga2V5IGluIHN0eWxlcylcblx0e1xuXHRcdGRvbU5vZGVTdHlsZVtrZXldID0gc3R5bGVzW2tleV07XG5cdH1cbn1cblxuXG5cbi8vIEFQUExZIEFUVFJTXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlBdHRycyhkb21Ob2RlLCBhdHRycylcbntcblx0Zm9yICh2YXIga2V5IGluIGF0dHJzKVxuXHR7XG5cdFx0dmFyIHZhbHVlID0gYXR0cnNba2V5XTtcblx0XHR0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnXG5cdFx0XHQ/IGRvbU5vZGUuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpXG5cdFx0XHQ6IGRvbU5vZGUucmVtb3ZlQXR0cmlidXRlKGtleSk7XG5cdH1cbn1cblxuXG5cbi8vIEFQUExZIE5BTUVTUEFDRUQgQVRUUlNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseUF0dHJzTlMoZG9tTm9kZSwgbnNBdHRycylcbntcblx0Zm9yICh2YXIga2V5IGluIG5zQXR0cnMpXG5cdHtcblx0XHR2YXIgcGFpciA9IG5zQXR0cnNba2V5XTtcblx0XHR2YXIgbmFtZXNwYWNlID0gcGFpci5mO1xuXHRcdHZhciB2YWx1ZSA9IHBhaXIubztcblxuXHRcdHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCdcblx0XHRcdD8gZG9tTm9kZS5zZXRBdHRyaWJ1dGVOUyhuYW1lc3BhY2UsIGtleSwgdmFsdWUpXG5cdFx0XHQ6IGRvbU5vZGUucmVtb3ZlQXR0cmlidXRlTlMobmFtZXNwYWNlLCBrZXkpO1xuXHR9XG59XG5cblxuXG4vLyBBUFBMWSBFVkVOVFNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hcHBseUV2ZW50cyhkb21Ob2RlLCBldmVudE5vZGUsIGV2ZW50cylcbntcblx0dmFyIGFsbENhbGxiYWNrcyA9IGRvbU5vZGUuZWxtRnMgfHwgKGRvbU5vZGUuZWxtRnMgPSB7fSk7XG5cblx0Zm9yICh2YXIga2V5IGluIGV2ZW50cylcblx0e1xuXHRcdHZhciBuZXdIYW5kbGVyID0gZXZlbnRzW2tleV07XG5cdFx0dmFyIG9sZENhbGxiYWNrID0gYWxsQ2FsbGJhY2tzW2tleV07XG5cblx0XHRpZiAoIW5ld0hhbmRsZXIpXG5cdFx0e1xuXHRcdFx0ZG9tTm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGtleSwgb2xkQ2FsbGJhY2spO1xuXHRcdFx0YWxsQ2FsbGJhY2tzW2tleV0gPSB1bmRlZmluZWQ7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRpZiAob2xkQ2FsbGJhY2spXG5cdFx0e1xuXHRcdFx0dmFyIG9sZEhhbmRsZXIgPSBvbGRDYWxsYmFjay5xO1xuXHRcdFx0aWYgKG9sZEhhbmRsZXIuJCA9PT0gbmV3SGFuZGxlci4kKVxuXHRcdFx0e1xuXHRcdFx0XHRvbGRDYWxsYmFjay5xID0gbmV3SGFuZGxlcjtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0XHRkb21Ob2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoa2V5LCBvbGRDYWxsYmFjayk7XG5cdFx0fVxuXG5cdFx0b2xkQ2FsbGJhY2sgPSBfVmlydHVhbERvbV9tYWtlQ2FsbGJhY2soZXZlbnROb2RlLCBuZXdIYW5kbGVyKTtcblx0XHRkb21Ob2RlLmFkZEV2ZW50TGlzdGVuZXIoa2V5LCBvbGRDYWxsYmFjayxcblx0XHRcdF9WaXJ0dWFsRG9tX3Bhc3NpdmVTdXBwb3J0ZWRcblx0XHRcdCYmIHsgcGFzc2l2ZTogJGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHRvSGFuZGxlckludChuZXdIYW5kbGVyKSA8IDIgfVxuXHRcdCk7XG5cdFx0YWxsQ2FsbGJhY2tzW2tleV0gPSBvbGRDYWxsYmFjaztcblx0fVxufVxuXG5cblxuLy8gUEFTU0lWRSBFVkVOVFNcblxuXG52YXIgX1ZpcnR1YWxEb21fcGFzc2l2ZVN1cHBvcnRlZDtcblxudHJ5XG57XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0JywgbnVsbCwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAncGFzc2l2ZScsIHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCkgeyBfVmlydHVhbERvbV9wYXNzaXZlU3VwcG9ydGVkID0gdHJ1ZTsgfVxuXHR9KSk7XG59XG5jYXRjaChlKSB7fVxuXG5cblxuLy8gRVZFTlQgSEFORExFUlNcblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9tYWtlQ2FsbGJhY2soZXZlbnROb2RlLCBpbml0aWFsSGFuZGxlcilcbntcblx0ZnVuY3Rpb24gY2FsbGJhY2soZXZlbnQpXG5cdHtcblx0XHR2YXIgaGFuZGxlciA9IGNhbGxiYWNrLnE7XG5cdFx0dmFyIHJlc3VsdCA9IF9Kc29uX3J1bkhlbHAoaGFuZGxlci5hLCBldmVudCk7XG5cblx0XHRpZiAoISRlbG0kY29yZSRSZXN1bHQkaXNPayhyZXN1bHQpKVxuXHRcdHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHR2YXIgdGFnID0gJGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHRvSGFuZGxlckludChoYW5kbGVyKTtcblxuXHRcdC8vIDAgPSBOb3JtYWxcblx0XHQvLyAxID0gTWF5U3RvcFByb3BhZ2F0aW9uXG5cdFx0Ly8gMiA9IE1heVByZXZlbnREZWZhdWx0XG5cdFx0Ly8gMyA9IEN1c3RvbVxuXG5cdFx0dmFyIHZhbHVlID0gcmVzdWx0LmE7XG5cdFx0dmFyIG1lc3NhZ2UgPSAhdGFnID8gdmFsdWUgOiB0YWcgPCAzID8gdmFsdWUuYSA6IHZhbHVlLm1lc3NhZ2U7XG5cdFx0dmFyIHN0b3BQcm9wYWdhdGlvbiA9IHRhZyA9PSAxID8gdmFsdWUuYiA6IHRhZyA9PSAzICYmIHZhbHVlLnN0b3BQcm9wYWdhdGlvbjtcblx0XHR2YXIgY3VycmVudEV2ZW50Tm9kZSA9IChcblx0XHRcdHN0b3BQcm9wYWdhdGlvbiAmJiBldmVudC5zdG9wUHJvcGFnYXRpb24oKSxcblx0XHRcdCh0YWcgPT0gMiA/IHZhbHVlLmIgOiB0YWcgPT0gMyAmJiB2YWx1ZS5wcmV2ZW50RGVmYXVsdCkgJiYgZXZlbnQucHJldmVudERlZmF1bHQoKSxcblx0XHRcdGV2ZW50Tm9kZVxuXHRcdCk7XG5cdFx0dmFyIHRhZ2dlcjtcblx0XHR2YXIgaTtcblx0XHR3aGlsZSAodGFnZ2VyID0gY3VycmVudEV2ZW50Tm9kZS5qKVxuXHRcdHtcblx0XHRcdGlmICh0eXBlb2YgdGFnZ2VyID09ICdmdW5jdGlvbicpXG5cdFx0XHR7XG5cdFx0XHRcdG1lc3NhZ2UgPSB0YWdnZXIobWVzc2FnZSk7XG5cdFx0XHR9XG5cdFx0XHRlbHNlXG5cdFx0XHR7XG5cdFx0XHRcdGZvciAodmFyIGkgPSB0YWdnZXIubGVuZ3RoOyBpLS07IClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG1lc3NhZ2UgPSB0YWdnZXJbaV0obWVzc2FnZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGN1cnJlbnRFdmVudE5vZGUgPSBjdXJyZW50RXZlbnROb2RlLnA7XG5cdFx0fVxuXHRcdGN1cnJlbnRFdmVudE5vZGUobWVzc2FnZSwgc3RvcFByb3BhZ2F0aW9uKTsgLy8gc3RvcFByb3BhZ2F0aW9uIGltcGxpZXMgaXNTeW5jXG5cdH1cblxuXHRjYWxsYmFjay5xID0gaW5pdGlhbEhhbmRsZXI7XG5cblx0cmV0dXJuIGNhbGxiYWNrO1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9lcXVhbEV2ZW50cyh4LCB5KVxue1xuXHRyZXR1cm4geC4kID09IHkuJCAmJiBfSnNvbl9lcXVhbGl0eSh4LmEsIHkuYSk7XG59XG5cblxuXG4vLyBESUZGXG5cblxuLy8gVE9ETzogU2hvdWxkIHdlIGRvIHBhdGNoZXMgbGlrZSBpbiBpT1M/XG4vL1xuLy8gdHlwZSBQYXRjaFxuLy8gICA9IEF0IEludCBQYXRjaFxuLy8gICB8IEJhdGNoIChMaXN0IFBhdGNoKVxuLy8gICB8IENoYW5nZSAuLi5cbi8vXG4vLyBIb3cgY291bGQgaXQgbm90IGJlIGJldHRlcj9cbi8vXG5mdW5jdGlvbiBfVmlydHVhbERvbV9kaWZmKHgsIHkpXG57XG5cdHZhciBwYXRjaGVzID0gW107XG5cdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHgsIHksIHBhdGNoZXMsIDApO1xuXHRyZXR1cm4gcGF0Y2hlcztcbn1cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgdHlwZSwgaW5kZXgsIGRhdGEpXG57XG5cdHZhciBwYXRjaCA9IHtcblx0XHQkOiB0eXBlLFxuXHRcdHI6IGluZGV4LFxuXHRcdHM6IGRhdGEsXG5cdFx0dDogdW5kZWZpbmVkLFxuXHRcdHU6IHVuZGVmaW5lZFxuXHR9O1xuXHRwYXRjaGVzLnB1c2gocGF0Y2gpO1xuXHRyZXR1cm4gcGF0Y2g7XG59XG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fZGlmZkhlbHAoeCwgeSwgcGF0Y2hlcywgaW5kZXgpXG57XG5cdGlmICh4ID09PSB5KVxuXHR7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIHhUeXBlID0geC4kO1xuXHR2YXIgeVR5cGUgPSB5LiQ7XG5cblx0Ly8gQmFpbCBpZiB5b3UgcnVuIGludG8gZGlmZmVyZW50IHR5cGVzIG9mIG5vZGVzLiBJbXBsaWVzIHRoYXQgdGhlXG5cdC8vIHN0cnVjdHVyZSBoYXMgY2hhbmdlZCBzaWduaWZpY2FudGx5IGFuZCBpdCdzIG5vdCB3b3J0aCBhIGRpZmYuXG5cdGlmICh4VHlwZSAhPT0geVR5cGUpXG5cdHtcblx0XHRpZiAoeFR5cGUgPT09IDEgJiYgeVR5cGUgPT09IDIpXG5cdFx0e1xuXHRcdFx0eSA9IF9WaXJ0dWFsRG9tX2Rla2V5KHkpO1xuXHRcdFx0eVR5cGUgPSAxO1xuXHRcdH1cblx0XHRlbHNlXG5cdFx0e1xuXHRcdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDAsIGluZGV4LCB5KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblxuXHQvLyBOb3cgd2Uga25vdyB0aGF0IGJvdGggbm9kZXMgYXJlIHRoZSBzYW1lICQuXG5cdHN3aXRjaCAoeVR5cGUpXG5cdHtcblx0XHRjYXNlIDU6XG5cdFx0XHR2YXIgeFJlZnMgPSB4Lmw7XG5cdFx0XHR2YXIgeVJlZnMgPSB5Lmw7XG5cdFx0XHR2YXIgaSA9IHhSZWZzLmxlbmd0aDtcblx0XHRcdHZhciBzYW1lID0gaSA9PT0geVJlZnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKHNhbWUgJiYgaS0tKVxuXHRcdFx0e1xuXHRcdFx0XHRzYW1lID0geFJlZnNbaV0gPT09IHlSZWZzW2ldO1xuXHRcdFx0fVxuXHRcdFx0aWYgKHNhbWUpXG5cdFx0XHR7XG5cdFx0XHRcdHkuayA9IHguaztcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0eS5rID0geS5tKCk7XG5cdFx0XHR2YXIgc3ViUGF0Y2hlcyA9IFtdO1xuXHRcdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoeC5rLCB5LmssIHN1YlBhdGNoZXMsIDApO1xuXHRcdFx0c3ViUGF0Y2hlcy5sZW5ndGggPiAwICYmIF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCAxLCBpbmRleCwgc3ViUGF0Y2hlcyk7XG5cdFx0XHRyZXR1cm47XG5cblx0XHRjYXNlIDQ6XG5cdFx0XHQvLyBnYXRoZXIgbmVzdGVkIHRhZ2dlcnNcblx0XHRcdHZhciB4VGFnZ2VycyA9IHguajtcblx0XHRcdHZhciB5VGFnZ2VycyA9IHkuajtcblx0XHRcdHZhciBuZXN0aW5nID0gZmFsc2U7XG5cblx0XHRcdHZhciB4U3ViTm9kZSA9IHguaztcblx0XHRcdHdoaWxlICh4U3ViTm9kZS4kID09PSA0KVxuXHRcdFx0e1xuXHRcdFx0XHRuZXN0aW5nID0gdHJ1ZTtcblxuXHRcdFx0XHR0eXBlb2YgeFRhZ2dlcnMgIT09ICdvYmplY3QnXG5cdFx0XHRcdFx0PyB4VGFnZ2VycyA9IFt4VGFnZ2VycywgeFN1Yk5vZGUual1cblx0XHRcdFx0XHQ6IHhUYWdnZXJzLnB1c2goeFN1Yk5vZGUuaik7XG5cblx0XHRcdFx0eFN1Yk5vZGUgPSB4U3ViTm9kZS5rO1xuXHRcdFx0fVxuXG5cdFx0XHR2YXIgeVN1Yk5vZGUgPSB5Lms7XG5cdFx0XHR3aGlsZSAoeVN1Yk5vZGUuJCA9PT0gNClcblx0XHRcdHtcblx0XHRcdFx0bmVzdGluZyA9IHRydWU7XG5cblx0XHRcdFx0dHlwZW9mIHlUYWdnZXJzICE9PSAnb2JqZWN0J1xuXHRcdFx0XHRcdD8geVRhZ2dlcnMgPSBbeVRhZ2dlcnMsIHlTdWJOb2RlLmpdXG5cdFx0XHRcdFx0OiB5VGFnZ2Vycy5wdXNoKHlTdWJOb2RlLmopO1xuXG5cdFx0XHRcdHlTdWJOb2RlID0geVN1Yk5vZGUuaztcblx0XHRcdH1cblxuXHRcdFx0Ly8gSnVzdCBiYWlsIGlmIGRpZmZlcmVudCBudW1iZXJzIG9mIHRhZ2dlcnMuIFRoaXMgaW1wbGllcyB0aGVcblx0XHRcdC8vIHN0cnVjdHVyZSBvZiB0aGUgdmlydHVhbCBET00gaGFzIGNoYW5nZWQuXG5cdFx0XHRpZiAobmVzdGluZyAmJiB4VGFnZ2Vycy5sZW5ndGggIT09IHlUYWdnZXJzLmxlbmd0aClcblx0XHRcdHtcblx0XHRcdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDAsIGluZGV4LCB5KTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBjaGVjayBpZiB0YWdnZXJzIGFyZSBcInRoZSBzYW1lXCJcblx0XHRcdGlmIChuZXN0aW5nID8gIV9WaXJ0dWFsRG9tX3BhaXJ3aXNlUmVmRXF1YWwoeFRhZ2dlcnMsIHlUYWdnZXJzKSA6IHhUYWdnZXJzICE9PSB5VGFnZ2Vycylcblx0XHRcdHtcblx0XHRcdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDIsIGluZGV4LCB5VGFnZ2Vycyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGRpZmYgZXZlcnl0aGluZyBiZWxvdyB0aGUgdGFnZ2Vyc1xuXHRcdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoeFN1Yk5vZGUsIHlTdWJOb2RlLCBwYXRjaGVzLCBpbmRleCArIDEpO1xuXHRcdFx0cmV0dXJuO1xuXG5cdFx0Y2FzZSAwOlxuXHRcdFx0aWYgKHguYSAhPT0geS5hKVxuXHRcdFx0e1xuXHRcdFx0XHRfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgMywgaW5kZXgsIHkuYSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cblx0XHRjYXNlIDE6XG5cdFx0XHRfVmlydHVhbERvbV9kaWZmTm9kZXMoeCwgeSwgcGF0Y2hlcywgaW5kZXgsIF9WaXJ0dWFsRG9tX2RpZmZLaWRzKTtcblx0XHRcdHJldHVybjtcblxuXHRcdGNhc2UgMjpcblx0XHRcdF9WaXJ0dWFsRG9tX2RpZmZOb2Rlcyh4LCB5LCBwYXRjaGVzLCBpbmRleCwgX1ZpcnR1YWxEb21fZGlmZktleWVkS2lkcyk7XG5cdFx0XHRyZXR1cm47XG5cblx0XHRjYXNlIDM6XG5cdFx0XHRpZiAoeC5oICE9PSB5LmgpXG5cdFx0XHR7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCAwLCBpbmRleCwgeSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dmFyIGZhY3RzRGlmZiA9IF9WaXJ0dWFsRG9tX2RpZmZGYWN0cyh4LmQsIHkuZCk7XG5cdFx0XHRmYWN0c0RpZmYgJiYgX1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDQsIGluZGV4LCBmYWN0c0RpZmYpO1xuXG5cdFx0XHR2YXIgcGF0Y2ggPSB5LmkoeC5nLCB5LmcpO1xuXHRcdFx0cGF0Y2ggJiYgX1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDUsIGluZGV4LCBwYXRjaCk7XG5cblx0XHRcdHJldHVybjtcblx0fVxufVxuXG4vLyBhc3N1bWVzIHRoZSBpbmNvbWluZyBhcnJheXMgYXJlIHRoZSBzYW1lIGxlbmd0aFxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fcGFpcndpc2VSZWZFcXVhbChhcywgYnMpXG57XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgYXMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHRpZiAoYXNbaV0gIT09IGJzW2ldKVxuXHRcdHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fZGlmZk5vZGVzKHgsIHksIHBhdGNoZXMsIGluZGV4LCBkaWZmS2lkcylcbntcblx0Ly8gQmFpbCBpZiBvYnZpb3VzIGluZGljYXRvcnMgaGF2ZSBjaGFuZ2VkLiBJbXBsaWVzIG1vcmUgc2VyaW91c1xuXHQvLyBzdHJ1Y3R1cmFsIGNoYW5nZXMgc3VjaCB0aGF0IGl0J3Mgbm90IHdvcnRoIGl0IHRvIGRpZmYuXG5cdGlmICh4LmMgIT09IHkuYyB8fCB4LmYgIT09IHkuZilcblx0e1xuXHRcdF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCAwLCBpbmRleCwgeSk7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGZhY3RzRGlmZiA9IF9WaXJ0dWFsRG9tX2RpZmZGYWN0cyh4LmQsIHkuZCk7XG5cdGZhY3RzRGlmZiAmJiBfVmlydHVhbERvbV9wdXNoUGF0Y2gocGF0Y2hlcywgNCwgaW5kZXgsIGZhY3RzRGlmZik7XG5cblx0ZGlmZktpZHMoeCwgeSwgcGF0Y2hlcywgaW5kZXgpO1xufVxuXG5cblxuLy8gRElGRiBGQUNUU1xuXG5cbi8vIFRPRE8gSW5zdGVhZCBvZiBjcmVhdGluZyBhIG5ldyBkaWZmIG9iamVjdCwgaXQncyBwb3NzaWJsZSB0byBqdXN0IHRlc3QgaWZcbi8vIHRoZXJlICppcyogYSBkaWZmLiBEdXJpbmcgdGhlIGFjdHVhbCBwYXRjaCwgZG8gdGhlIGRpZmYgYWdhaW4gYW5kIG1ha2UgdGhlXG4vLyBtb2RpZmljYXRpb25zIGRpcmVjdGx5LiBUaGlzIHdheSwgdGhlcmUncyBubyBuZXcgYWxsb2NhdGlvbnMuIFdvcnRoIGl0P1xuZnVuY3Rpb24gX1ZpcnR1YWxEb21fZGlmZkZhY3RzKHgsIHksIGNhdGVnb3J5KVxue1xuXHR2YXIgZGlmZjtcblxuXHQvLyBsb29rIGZvciBjaGFuZ2VzIGFuZCByZW1vdmFsc1xuXHRmb3IgKHZhciB4S2V5IGluIHgpXG5cdHtcblx0XHRpZiAoeEtleSA9PT0gJ2ExJyB8fCB4S2V5ID09PSAnYTAnIHx8IHhLZXkgPT09ICdhMycgfHwgeEtleSA9PT0gJ2E0Jylcblx0XHR7XG5cdFx0XHR2YXIgc3ViRGlmZiA9IF9WaXJ0dWFsRG9tX2RpZmZGYWN0cyh4W3hLZXldLCB5W3hLZXldIHx8IHt9LCB4S2V5KTtcblx0XHRcdGlmIChzdWJEaWZmKVxuXHRcdFx0e1xuXHRcdFx0XHRkaWZmID0gZGlmZiB8fCB7fTtcblx0XHRcdFx0ZGlmZlt4S2V5XSA9IHN1YkRpZmY7XG5cdFx0XHR9XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyByZW1vdmUgaWYgbm90IGluIHRoZSBuZXcgZmFjdHNcblx0XHRpZiAoISh4S2V5IGluIHkpKVxuXHRcdHtcblx0XHRcdGRpZmYgPSBkaWZmIHx8IHt9O1xuXHRcdFx0ZGlmZlt4S2V5XSA9XG5cdFx0XHRcdCFjYXRlZ29yeVxuXHRcdFx0XHRcdD8gKHR5cGVvZiB4W3hLZXldID09PSAnc3RyaW5nJyA/ICcnIDogbnVsbClcblx0XHRcdFx0XHQ6XG5cdFx0XHRcdChjYXRlZ29yeSA9PT0gJ2ExJylcblx0XHRcdFx0XHQ/ICcnXG5cdFx0XHRcdFx0OlxuXHRcdFx0XHQoY2F0ZWdvcnkgPT09ICdhMCcgfHwgY2F0ZWdvcnkgPT09ICdhMycpXG5cdFx0XHRcdFx0PyB1bmRlZmluZWRcblx0XHRcdFx0XHQ6XG5cdFx0XHRcdHsgZjogeFt4S2V5XS5mLCBvOiB1bmRlZmluZWQgfTtcblxuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0dmFyIHhWYWx1ZSA9IHhbeEtleV07XG5cdFx0dmFyIHlWYWx1ZSA9IHlbeEtleV07XG5cblx0XHQvLyByZWZlcmVuY2UgZXF1YWwsIHNvIGRvbid0IHdvcnJ5IGFib3V0IGl0XG5cdFx0aWYgKHhWYWx1ZSA9PT0geVZhbHVlICYmIHhLZXkgIT09ICd2YWx1ZScgJiYgeEtleSAhPT0gJ2NoZWNrZWQnXG5cdFx0XHR8fCBjYXRlZ29yeSA9PT0gJ2EwJyAmJiBfVmlydHVhbERvbV9lcXVhbEV2ZW50cyh4VmFsdWUsIHlWYWx1ZSkpXG5cdFx0e1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0ZGlmZiA9IGRpZmYgfHwge307XG5cdFx0ZGlmZlt4S2V5XSA9IHlWYWx1ZTtcblx0fVxuXG5cdC8vIGFkZCBuZXcgc3R1ZmZcblx0Zm9yICh2YXIgeUtleSBpbiB5KVxuXHR7XG5cdFx0aWYgKCEoeUtleSBpbiB4KSlcblx0XHR7XG5cdFx0XHRkaWZmID0gZGlmZiB8fCB7fTtcblx0XHRcdGRpZmZbeUtleV0gPSB5W3lLZXldO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBkaWZmO1xufVxuXG5cblxuLy8gRElGRiBLSURTXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fZGlmZktpZHMoeFBhcmVudCwgeVBhcmVudCwgcGF0Y2hlcywgaW5kZXgpXG57XG5cdHZhciB4S2lkcyA9IHhQYXJlbnQuZTtcblx0dmFyIHlLaWRzID0geVBhcmVudC5lO1xuXG5cdHZhciB4TGVuID0geEtpZHMubGVuZ3RoO1xuXHR2YXIgeUxlbiA9IHlLaWRzLmxlbmd0aDtcblxuXHQvLyBGSUdVUkUgT1VUIElGIFRIRVJFIEFSRSBJTlNFUlRTIE9SIFJFTU9WQUxTXG5cblx0aWYgKHhMZW4gPiB5TGVuKVxuXHR7XG5cdFx0X1ZpcnR1YWxEb21fcHVzaFBhdGNoKHBhdGNoZXMsIDYsIGluZGV4LCB7XG5cdFx0XHR2OiB5TGVuLFxuXHRcdFx0aTogeExlbiAtIHlMZW5cblx0XHR9KTtcblx0fVxuXHRlbHNlIGlmICh4TGVuIDwgeUxlbilcblx0e1xuXHRcdF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCA3LCBpbmRleCwge1xuXHRcdFx0djogeExlbixcblx0XHRcdGU6IHlLaWRzXG5cdFx0fSk7XG5cdH1cblxuXHQvLyBQQUlSV0lTRSBESUZGIEVWRVJZVEhJTkcgRUxTRVxuXG5cdGZvciAodmFyIG1pbkxlbiA9IHhMZW4gPCB5TGVuID8geExlbiA6IHlMZW4sIGkgPSAwOyBpIDwgbWluTGVuOyBpKyspXG5cdHtcblx0XHR2YXIgeEtpZCA9IHhLaWRzW2ldO1xuXHRcdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHhLaWQsIHlLaWRzW2ldLCBwYXRjaGVzLCArK2luZGV4KTtcblx0XHRpbmRleCArPSB4S2lkLmIgfHwgMDtcblx0fVxufVxuXG5cblxuLy8gS0VZRUQgRElGRlxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2RpZmZLZXllZEtpZHMoeFBhcmVudCwgeVBhcmVudCwgcGF0Y2hlcywgcm9vdEluZGV4KVxue1xuXHR2YXIgbG9jYWxQYXRjaGVzID0gW107XG5cblx0dmFyIGNoYW5nZXMgPSB7fTsgLy8gRGljdCBTdHJpbmcgRW50cnlcblx0dmFyIGluc2VydHMgPSBbXTsgLy8gQXJyYXkgeyBpbmRleCA6IEludCwgZW50cnkgOiBFbnRyeSB9XG5cdC8vIHR5cGUgRW50cnkgPSB7IHRhZyA6IFN0cmluZywgdm5vZGUgOiBWTm9kZSwgaW5kZXggOiBJbnQsIGRhdGEgOiBfIH1cblxuXHR2YXIgeEtpZHMgPSB4UGFyZW50LmU7XG5cdHZhciB5S2lkcyA9IHlQYXJlbnQuZTtcblx0dmFyIHhMZW4gPSB4S2lkcy5sZW5ndGg7XG5cdHZhciB5TGVuID0geUtpZHMubGVuZ3RoO1xuXHR2YXIgeEluZGV4ID0gMDtcblx0dmFyIHlJbmRleCA9IDA7XG5cblx0dmFyIGluZGV4ID0gcm9vdEluZGV4O1xuXG5cdHdoaWxlICh4SW5kZXggPCB4TGVuICYmIHlJbmRleCA8IHlMZW4pXG5cdHtcblx0XHR2YXIgeCA9IHhLaWRzW3hJbmRleF07XG5cdFx0dmFyIHkgPSB5S2lkc1t5SW5kZXhdO1xuXG5cdFx0dmFyIHhLZXkgPSB4LmE7XG5cdFx0dmFyIHlLZXkgPSB5LmE7XG5cdFx0dmFyIHhOb2RlID0geC5iO1xuXHRcdHZhciB5Tm9kZSA9IHkuYjtcblxuXHRcdHZhciBuZXdNYXRjaCA9IHVuZGVmaW5lZDtcblx0XHR2YXIgb2xkTWF0Y2ggPSB1bmRlZmluZWQ7XG5cblx0XHQvLyBjaGVjayBpZiBrZXlzIG1hdGNoXG5cblx0XHRpZiAoeEtleSA9PT0geUtleSlcblx0XHR7XG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoeE5vZGUsIHlOb2RlLCBsb2NhbFBhdGNoZXMsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IHhOb2RlLmIgfHwgMDtcblxuXHRcdFx0eEluZGV4Kys7XG5cdFx0XHR5SW5kZXgrKztcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIGxvb2sgYWhlYWQgMSB0byBkZXRlY3QgaW5zZXJ0aW9ucyBhbmQgcmVtb3ZhbHMuXG5cblx0XHR2YXIgeE5leHQgPSB4S2lkc1t4SW5kZXggKyAxXTtcblx0XHR2YXIgeU5leHQgPSB5S2lkc1t5SW5kZXggKyAxXTtcblxuXHRcdGlmICh4TmV4dClcblx0XHR7XG5cdFx0XHR2YXIgeE5leHRLZXkgPSB4TmV4dC5hO1xuXHRcdFx0dmFyIHhOZXh0Tm9kZSA9IHhOZXh0LmI7XG5cdFx0XHRvbGRNYXRjaCA9IHlLZXkgPT09IHhOZXh0S2V5O1xuXHRcdH1cblxuXHRcdGlmICh5TmV4dClcblx0XHR7XG5cdFx0XHR2YXIgeU5leHRLZXkgPSB5TmV4dC5hO1xuXHRcdFx0dmFyIHlOZXh0Tm9kZSA9IHlOZXh0LmI7XG5cdFx0XHRuZXdNYXRjaCA9IHhLZXkgPT09IHlOZXh0S2V5O1xuXHRcdH1cblxuXG5cdFx0Ly8gc3dhcCB4IGFuZCB5XG5cdFx0aWYgKG5ld01hdGNoICYmIG9sZE1hdGNoKVxuXHRcdHtcblx0XHRcdGluZGV4Kys7XG5cdFx0XHRfVmlydHVhbERvbV9kaWZmSGVscCh4Tm9kZSwgeU5leHROb2RlLCBsb2NhbFBhdGNoZXMsIGluZGV4KTtcblx0XHRcdF9WaXJ0dWFsRG9tX2luc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCB4S2V5LCB5Tm9kZSwgeUluZGV4LCBpbnNlcnRzKTtcblx0XHRcdGluZGV4ICs9IHhOb2RlLmIgfHwgMDtcblxuXHRcdFx0aW5kZXgrKztcblx0XHRcdF9WaXJ0dWFsRG9tX3JlbW92ZU5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCB4S2V5LCB4TmV4dE5vZGUsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IHhOZXh0Tm9kZS5iIHx8IDA7XG5cblx0XHRcdHhJbmRleCArPSAyO1xuXHRcdFx0eUluZGV4ICs9IDI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBpbnNlcnQgeVxuXHRcdGlmIChuZXdNYXRjaClcblx0XHR7XG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0X1ZpcnR1YWxEb21faW5zZXJ0Tm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIHlLZXksIHlOb2RlLCB5SW5kZXgsIGluc2VydHMpO1xuXHRcdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoeE5vZGUsIHlOZXh0Tm9kZSwgbG9jYWxQYXRjaGVzLCBpbmRleCk7XG5cdFx0XHRpbmRleCArPSB4Tm9kZS5iIHx8IDA7XG5cblx0XHRcdHhJbmRleCArPSAxO1xuXHRcdFx0eUluZGV4ICs9IDI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyByZW1vdmUgeFxuXHRcdGlmIChvbGRNYXRjaClcblx0XHR7XG5cdFx0XHRpbmRleCsrO1xuXHRcdFx0X1ZpcnR1YWxEb21fcmVtb3ZlTm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIHhLZXksIHhOb2RlLCBpbmRleCk7XG5cdFx0XHRpbmRleCArPSB4Tm9kZS5iIHx8IDA7XG5cblx0XHRcdGluZGV4Kys7XG5cdFx0XHRfVmlydHVhbERvbV9kaWZmSGVscCh4TmV4dE5vZGUsIHlOb2RlLCBsb2NhbFBhdGNoZXMsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IHhOZXh0Tm9kZS5iIHx8IDA7XG5cblx0XHRcdHhJbmRleCArPSAyO1xuXHRcdFx0eUluZGV4ICs9IDE7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyByZW1vdmUgeCwgaW5zZXJ0IHlcblx0XHRpZiAoeE5leHQgJiYgeE5leHRLZXkgPT09IHlOZXh0S2V5KVxuXHRcdHtcblx0XHRcdGluZGV4Kys7XG5cdFx0XHRfVmlydHVhbERvbV9yZW1vdmVOb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywgeEtleSwgeE5vZGUsIGluZGV4KTtcblx0XHRcdF9WaXJ0dWFsRG9tX2luc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCB5S2V5LCB5Tm9kZSwgeUluZGV4LCBpbnNlcnRzKTtcblx0XHRcdGluZGV4ICs9IHhOb2RlLmIgfHwgMDtcblxuXHRcdFx0aW5kZXgrKztcblx0XHRcdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHhOZXh0Tm9kZSwgeU5leHROb2RlLCBsb2NhbFBhdGNoZXMsIGluZGV4KTtcblx0XHRcdGluZGV4ICs9IHhOZXh0Tm9kZS5iIHx8IDA7XG5cblx0XHRcdHhJbmRleCArPSAyO1xuXHRcdFx0eUluZGV4ICs9IDI7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRicmVhaztcblx0fVxuXG5cdC8vIGVhdCB1cCBhbnkgcmVtYWluaW5nIG5vZGVzIHdpdGggcmVtb3ZlTm9kZSBhbmQgaW5zZXJ0Tm9kZVxuXG5cdHdoaWxlICh4SW5kZXggPCB4TGVuKVxuXHR7XG5cdFx0aW5kZXgrKztcblx0XHR2YXIgeCA9IHhLaWRzW3hJbmRleF07XG5cdFx0dmFyIHhOb2RlID0geC5iO1xuXHRcdF9WaXJ0dWFsRG9tX3JlbW92ZU5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCB4LmEsIHhOb2RlLCBpbmRleCk7XG5cdFx0aW5kZXggKz0geE5vZGUuYiB8fCAwO1xuXHRcdHhJbmRleCsrO1xuXHR9XG5cblx0d2hpbGUgKHlJbmRleCA8IHlMZW4pXG5cdHtcblx0XHR2YXIgZW5kSW5zZXJ0cyA9IGVuZEluc2VydHMgfHwgW107XG5cdFx0dmFyIHkgPSB5S2lkc1t5SW5kZXhdO1xuXHRcdF9WaXJ0dWFsRG9tX2luc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCB5LmEsIHkuYiwgdW5kZWZpbmVkLCBlbmRJbnNlcnRzKTtcblx0XHR5SW5kZXgrKztcblx0fVxuXG5cdGlmIChsb2NhbFBhdGNoZXMubGVuZ3RoID4gMCB8fCBpbnNlcnRzLmxlbmd0aCA+IDAgfHwgZW5kSW5zZXJ0cylcblx0e1xuXHRcdF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChwYXRjaGVzLCA4LCByb290SW5kZXgsIHtcblx0XHRcdHc6IGxvY2FsUGF0Y2hlcyxcblx0XHRcdHg6IGluc2VydHMsXG5cdFx0XHR5OiBlbmRJbnNlcnRzXG5cdFx0fSk7XG5cdH1cbn1cblxuXG5cbi8vIENIQU5HRVMgRlJPTSBLRVlFRCBESUZGXG5cblxudmFyIF9WaXJ0dWFsRG9tX1BPU1RGSVggPSAnX2VsbVc2QkwnO1xuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2luc2VydE5vZGUoY2hhbmdlcywgbG9jYWxQYXRjaGVzLCBrZXksIHZub2RlLCB5SW5kZXgsIGluc2VydHMpXG57XG5cdHZhciBlbnRyeSA9IGNoYW5nZXNba2V5XTtcblxuXHQvLyBuZXZlciBzZWVuIHRoaXMga2V5IGJlZm9yZVxuXHRpZiAoIWVudHJ5KVxuXHR7XG5cdFx0ZW50cnkgPSB7XG5cdFx0XHRjOiAwLFxuXHRcdFx0ejogdm5vZGUsXG5cdFx0XHRyOiB5SW5kZXgsXG5cdFx0XHRzOiB1bmRlZmluZWRcblx0XHR9O1xuXG5cdFx0aW5zZXJ0cy5wdXNoKHsgcjogeUluZGV4LCBBOiBlbnRyeSB9KTtcblx0XHRjaGFuZ2VzW2tleV0gPSBlbnRyeTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIHRoaXMga2V5IHdhcyByZW1vdmVkIGVhcmxpZXIsIGEgbWF0Y2ghXG5cdGlmIChlbnRyeS5jID09PSAxKVxuXHR7XG5cdFx0aW5zZXJ0cy5wdXNoKHsgcjogeUluZGV4LCBBOiBlbnRyeSB9KTtcblxuXHRcdGVudHJ5LmMgPSAyO1xuXHRcdHZhciBzdWJQYXRjaGVzID0gW107XG5cdFx0X1ZpcnR1YWxEb21fZGlmZkhlbHAoZW50cnkueiwgdm5vZGUsIHN1YlBhdGNoZXMsIGVudHJ5LnIpO1xuXHRcdGVudHJ5LnIgPSB5SW5kZXg7XG5cdFx0ZW50cnkucy5zID0ge1xuXHRcdFx0dzogc3ViUGF0Y2hlcyxcblx0XHRcdEE6IGVudHJ5XG5cdFx0fTtcblxuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIHRoaXMga2V5IGhhcyBhbHJlYWR5IGJlZW4gaW5zZXJ0ZWQgb3IgbW92ZWQsIGEgZHVwbGljYXRlIVxuXHRfVmlydHVhbERvbV9pbnNlcnROb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywga2V5ICsgX1ZpcnR1YWxEb21fUE9TVEZJWCwgdm5vZGUsIHlJbmRleCwgaW5zZXJ0cyk7XG59XG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fcmVtb3ZlTm9kZShjaGFuZ2VzLCBsb2NhbFBhdGNoZXMsIGtleSwgdm5vZGUsIGluZGV4KVxue1xuXHR2YXIgZW50cnkgPSBjaGFuZ2VzW2tleV07XG5cblx0Ly8gbmV2ZXIgc2VlbiB0aGlzIGtleSBiZWZvcmVcblx0aWYgKCFlbnRyeSlcblx0e1xuXHRcdHZhciBwYXRjaCA9IF9WaXJ0dWFsRG9tX3B1c2hQYXRjaChsb2NhbFBhdGNoZXMsIDksIGluZGV4LCB1bmRlZmluZWQpO1xuXG5cdFx0Y2hhbmdlc1trZXldID0ge1xuXHRcdFx0YzogMSxcblx0XHRcdHo6IHZub2RlLFxuXHRcdFx0cjogaW5kZXgsXG5cdFx0XHRzOiBwYXRjaFxuXHRcdH07XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyB0aGlzIGtleSB3YXMgaW5zZXJ0ZWQgZWFybGllciwgYSBtYXRjaCFcblx0aWYgKGVudHJ5LmMgPT09IDApXG5cdHtcblx0XHRlbnRyeS5jID0gMjtcblx0XHR2YXIgc3ViUGF0Y2hlcyA9IFtdO1xuXHRcdF9WaXJ0dWFsRG9tX2RpZmZIZWxwKHZub2RlLCBlbnRyeS56LCBzdWJQYXRjaGVzLCBpbmRleCk7XG5cblx0XHRfVmlydHVhbERvbV9wdXNoUGF0Y2gobG9jYWxQYXRjaGVzLCA5LCBpbmRleCwge1xuXHRcdFx0dzogc3ViUGF0Y2hlcyxcblx0XHRcdEE6IGVudHJ5XG5cdFx0fSk7XG5cblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyB0aGlzIGtleSBoYXMgYWxyZWFkeSBiZWVuIHJlbW92ZWQgb3IgbW92ZWQsIGEgZHVwbGljYXRlIVxuXHRfVmlydHVhbERvbV9yZW1vdmVOb2RlKGNoYW5nZXMsIGxvY2FsUGF0Y2hlcywga2V5ICsgX1ZpcnR1YWxEb21fUE9TVEZJWCwgdm5vZGUsIGluZGV4KTtcbn1cblxuXG5cbi8vIEFERCBET00gTk9ERVNcbi8vXG4vLyBFYWNoIERPTSBub2RlIGhhcyBhbiBcImluZGV4XCIgYXNzaWduZWQgaW4gb3JkZXIgb2YgdHJhdmVyc2FsLiBJdCBpcyBpbXBvcnRhbnRcbi8vIHRvIG1pbmltaXplIG91ciBjcmF3bCBvdmVyIHRoZSBhY3R1YWwgRE9NLCBzbyB0aGVzZSBpbmRleGVzIChhbG9uZyB3aXRoIHRoZVxuLy8gZGVzY2VuZGFudHNDb3VudCBvZiB2aXJ0dWFsIG5vZGVzKSBsZXQgdXMgc2tpcCB0b3VjaGluZyBlbnRpcmUgc3VidHJlZXMgb2Zcbi8vIHRoZSBET00gaWYgd2Uga25vdyB0aGVyZSBhcmUgbm8gcGF0Y2hlcyB0aGVyZS5cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hZGREb21Ob2Rlcyhkb21Ob2RlLCB2Tm9kZSwgcGF0Y2hlcywgZXZlbnROb2RlKVxue1xuXHRfVmlydHVhbERvbV9hZGREb21Ob2Rlc0hlbHAoZG9tTm9kZSwgdk5vZGUsIHBhdGNoZXMsIDAsIDAsIHZOb2RlLmIsIGV2ZW50Tm9kZSk7XG59XG5cblxuLy8gYXNzdW1lcyBgcGF0Y2hlc2AgaXMgbm9uLWVtcHR5IGFuZCBpbmRleGVzIGluY3JlYXNlIG1vbm90b25pY2FsbHkuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9hZGREb21Ob2Rlc0hlbHAoZG9tTm9kZSwgdk5vZGUsIHBhdGNoZXMsIGksIGxvdywgaGlnaCwgZXZlbnROb2RlKVxue1xuXHR2YXIgcGF0Y2ggPSBwYXRjaGVzW2ldO1xuXHR2YXIgaW5kZXggPSBwYXRjaC5yO1xuXG5cdHdoaWxlIChpbmRleCA9PT0gbG93KVxuXHR7XG5cdFx0dmFyIHBhdGNoVHlwZSA9IHBhdGNoLiQ7XG5cblx0XHRpZiAocGF0Y2hUeXBlID09PSAxKVxuXHRcdHtcblx0XHRcdF9WaXJ0dWFsRG9tX2FkZERvbU5vZGVzKGRvbU5vZGUsIHZOb2RlLmssIHBhdGNoLnMsIGV2ZW50Tm9kZSk7XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHBhdGNoVHlwZSA9PT0gOClcblx0XHR7XG5cdFx0XHRwYXRjaC50ID0gZG9tTm9kZTtcblx0XHRcdHBhdGNoLnUgPSBldmVudE5vZGU7XG5cblx0XHRcdHZhciBzdWJQYXRjaGVzID0gcGF0Y2gucy53O1xuXHRcdFx0aWYgKHN1YlBhdGNoZXMubGVuZ3RoID4gMClcblx0XHRcdHtcblx0XHRcdFx0X1ZpcnR1YWxEb21fYWRkRG9tTm9kZXNIZWxwKGRvbU5vZGUsIHZOb2RlLCBzdWJQYXRjaGVzLCAwLCBsb3csIGhpZ2gsIGV2ZW50Tm9kZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGVsc2UgaWYgKHBhdGNoVHlwZSA9PT0gOSlcblx0XHR7XG5cdFx0XHRwYXRjaC50ID0gZG9tTm9kZTtcblx0XHRcdHBhdGNoLnUgPSBldmVudE5vZGU7XG5cblx0XHRcdHZhciBkYXRhID0gcGF0Y2gucztcblx0XHRcdGlmIChkYXRhKVxuXHRcdFx0e1xuXHRcdFx0XHRkYXRhLkEucyA9IGRvbU5vZGU7XG5cdFx0XHRcdHZhciBzdWJQYXRjaGVzID0gZGF0YS53O1xuXHRcdFx0XHRpZiAoc3ViUGF0Y2hlcy5sZW5ndGggPiAwKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0X1ZpcnR1YWxEb21fYWRkRG9tTm9kZXNIZWxwKGRvbU5vZGUsIHZOb2RlLCBzdWJQYXRjaGVzLCAwLCBsb3csIGhpZ2gsIGV2ZW50Tm9kZSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdHBhdGNoLnQgPSBkb21Ob2RlO1xuXHRcdFx0cGF0Y2gudSA9IGV2ZW50Tm9kZTtcblx0XHR9XG5cblx0XHRpKys7XG5cblx0XHRpZiAoIShwYXRjaCA9IHBhdGNoZXNbaV0pIHx8IChpbmRleCA9IHBhdGNoLnIpID4gaGlnaClcblx0XHR7XG5cdFx0XHRyZXR1cm4gaTtcblx0XHR9XG5cdH1cblxuXHR2YXIgdGFnID0gdk5vZGUuJDtcblxuXHRpZiAodGFnID09PSA0KVxuXHR7XG5cdFx0dmFyIHN1Yk5vZGUgPSB2Tm9kZS5rO1xuXG5cdFx0d2hpbGUgKHN1Yk5vZGUuJCA9PT0gNClcblx0XHR7XG5cdFx0XHRzdWJOb2RlID0gc3ViTm9kZS5rO1xuXHRcdH1cblxuXHRcdHJldHVybiBfVmlydHVhbERvbV9hZGREb21Ob2Rlc0hlbHAoZG9tTm9kZSwgc3ViTm9kZSwgcGF0Y2hlcywgaSwgbG93ICsgMSwgaGlnaCwgZG9tTm9kZS5lbG1fZXZlbnRfbm9kZV9yZWYpO1xuXHR9XG5cblx0Ly8gdGFnIG11c3QgYmUgMSBvciAyIGF0IHRoaXMgcG9pbnRcblxuXHR2YXIgdktpZHMgPSB2Tm9kZS5lO1xuXHR2YXIgY2hpbGROb2RlcyA9IGRvbU5vZGUuY2hpbGROb2Rlcztcblx0Zm9yICh2YXIgaiA9IDA7IGogPCB2S2lkcy5sZW5ndGg7IGorKylcblx0e1xuXHRcdGxvdysrO1xuXHRcdHZhciB2S2lkID0gdGFnID09PSAxID8gdktpZHNbal0gOiB2S2lkc1tqXS5iO1xuXHRcdHZhciBuZXh0TG93ID0gbG93ICsgKHZLaWQuYiB8fCAwKTtcblx0XHRpZiAobG93IDw9IGluZGV4ICYmIGluZGV4IDw9IG5leHRMb3cpXG5cdFx0e1xuXHRcdFx0aSA9IF9WaXJ0dWFsRG9tX2FkZERvbU5vZGVzSGVscChjaGlsZE5vZGVzW2pdLCB2S2lkLCBwYXRjaGVzLCBpLCBsb3csIG5leHRMb3csIGV2ZW50Tm9kZSk7XG5cdFx0XHRpZiAoIShwYXRjaCA9IHBhdGNoZXNbaV0pIHx8IChpbmRleCA9IHBhdGNoLnIpID4gaGlnaClcblx0XHRcdHtcblx0XHRcdFx0cmV0dXJuIGk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxvdyA9IG5leHRMb3c7XG5cdH1cblx0cmV0dXJuIGk7XG59XG5cblxuXG4vLyBBUFBMWSBQQVRDSEVTXG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzKHJvb3REb21Ob2RlLCBvbGRWaXJ0dWFsTm9kZSwgcGF0Y2hlcywgZXZlbnROb2RlKVxue1xuXHRpZiAocGF0Y2hlcy5sZW5ndGggPT09IDApXG5cdHtcblx0XHRyZXR1cm4gcm9vdERvbU5vZGU7XG5cdH1cblxuXHRfVmlydHVhbERvbV9hZGREb21Ob2Rlcyhyb290RG9tTm9kZSwgb2xkVmlydHVhbE5vZGUsIHBhdGNoZXMsIGV2ZW50Tm9kZSk7XG5cdHJldHVybiBfVmlydHVhbERvbV9hcHBseVBhdGNoZXNIZWxwKHJvb3REb21Ob2RlLCBwYXRjaGVzKTtcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzSGVscChyb290RG9tTm9kZSwgcGF0Y2hlcylcbntcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBwYXRjaGVzLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0dmFyIHBhdGNoID0gcGF0Y2hlc1tpXTtcblx0XHR2YXIgbG9jYWxEb21Ob2RlID0gcGF0Y2gudFxuXHRcdHZhciBuZXdOb2RlID0gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaChsb2NhbERvbU5vZGUsIHBhdGNoKTtcblx0XHRpZiAobG9jYWxEb21Ob2RlID09PSByb290RG9tTm9kZSlcblx0XHR7XG5cdFx0XHRyb290RG9tTm9kZSA9IG5ld05vZGU7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByb290RG9tTm9kZTtcbn1cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaChkb21Ob2RlLCBwYXRjaClcbntcblx0c3dpdGNoIChwYXRjaC4kKVxuXHR7XG5cdFx0Y2FzZSAwOlxuXHRcdFx0cmV0dXJuIF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hSZWRyYXcoZG9tTm9kZSwgcGF0Y2gucywgcGF0Y2gudSk7XG5cblx0XHRjYXNlIDQ6XG5cdFx0XHRfVmlydHVhbERvbV9hcHBseUZhY3RzKGRvbU5vZGUsIHBhdGNoLnUsIHBhdGNoLnMpO1xuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cblx0XHRjYXNlIDM6XG5cdFx0XHRkb21Ob2RlLnJlcGxhY2VEYXRhKDAsIGRvbU5vZGUubGVuZ3RoLCBwYXRjaC5zKTtcblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlc0hlbHAoZG9tTm9kZSwgcGF0Y2gucyk7XG5cblx0XHRjYXNlIDI6XG5cdFx0XHRpZiAoZG9tTm9kZS5lbG1fZXZlbnRfbm9kZV9yZWYpXG5cdFx0XHR7XG5cdFx0XHRcdGRvbU5vZGUuZWxtX2V2ZW50X25vZGVfcmVmLmogPSBwYXRjaC5zO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLmVsbV9ldmVudF9ub2RlX3JlZiA9IHsgajogcGF0Y2gucywgcDogcGF0Y2gudSB9O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGRvbU5vZGU7XG5cblx0XHRjYXNlIDY6XG5cdFx0XHR2YXIgZGF0YSA9IHBhdGNoLnM7XG5cdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRhdGEuaTsgaSsrKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLnJlbW92ZUNoaWxkKGRvbU5vZGUuY2hpbGROb2Rlc1tkYXRhLnZdKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXG5cdFx0Y2FzZSA3OlxuXHRcdFx0dmFyIGRhdGEgPSBwYXRjaC5zO1xuXHRcdFx0dmFyIGtpZHMgPSBkYXRhLmU7XG5cdFx0XHR2YXIgaSA9IGRhdGEudjtcblx0XHRcdHZhciB0aGVFbmQgPSBkb21Ob2RlLmNoaWxkTm9kZXNbaV07XG5cdFx0XHRmb3IgKDsgaSA8IGtpZHMubGVuZ3RoOyBpKyspXG5cdFx0XHR7XG5cdFx0XHRcdGRvbU5vZGUuaW5zZXJ0QmVmb3JlKF9WaXJ0dWFsRG9tX3JlbmRlcihraWRzW2ldLCBwYXRjaC51KSwgdGhlRW5kKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXG5cdFx0Y2FzZSA5OlxuXHRcdFx0dmFyIGRhdGEgPSBwYXRjaC5zO1xuXHRcdFx0aWYgKCFkYXRhKVxuXHRcdFx0e1xuXHRcdFx0XHRkb21Ob2RlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZG9tTm9kZSk7XG5cdFx0XHRcdHJldHVybiBkb21Ob2RlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGVudHJ5ID0gZGF0YS5BO1xuXHRcdFx0aWYgKHR5cGVvZiBlbnRyeS5yICE9PSAndW5kZWZpbmVkJylcblx0XHRcdHtcblx0XHRcdFx0ZG9tTm9kZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRvbU5vZGUpO1xuXHRcdFx0fVxuXHRcdFx0ZW50cnkucyA9IF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlc0hlbHAoZG9tTm9kZSwgZGF0YS53KTtcblx0XHRcdHJldHVybiBkb21Ob2RlO1xuXG5cdFx0Y2FzZSA4OlxuXHRcdFx0cmV0dXJuIF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hSZW9yZGVyKGRvbU5vZGUsIHBhdGNoKTtcblxuXHRcdGNhc2UgNTpcblx0XHRcdHJldHVybiBwYXRjaC5zKGRvbU5vZGUpO1xuXG5cdFx0ZGVmYXVsdDpcblx0XHRcdF9EZWJ1Z19jcmFzaCgxMCk7IC8vICdSYW4gaW50byBhbiB1bmtub3duIHBhdGNoISdcblx0fVxufVxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hSZWRyYXcoZG9tTm9kZSwgdk5vZGUsIGV2ZW50Tm9kZSlcbntcblx0dmFyIHBhcmVudE5vZGUgPSBkb21Ob2RlLnBhcmVudE5vZGU7XG5cdHZhciBuZXdOb2RlID0gX1ZpcnR1YWxEb21fcmVuZGVyKHZOb2RlLCBldmVudE5vZGUpO1xuXG5cdGlmICghbmV3Tm9kZS5lbG1fZXZlbnRfbm9kZV9yZWYpXG5cdHtcblx0XHRuZXdOb2RlLmVsbV9ldmVudF9ub2RlX3JlZiA9IGRvbU5vZGUuZWxtX2V2ZW50X25vZGVfcmVmO1xuXHR9XG5cblx0aWYgKHBhcmVudE5vZGUgJiYgbmV3Tm9kZSAhPT0gZG9tTm9kZSlcblx0e1xuXHRcdHBhcmVudE5vZGUucmVwbGFjZUNoaWxkKG5ld05vZGUsIGRvbU5vZGUpO1xuXHR9XG5cdHJldHVybiBuZXdOb2RlO1xufVxuXG5cbmZ1bmN0aW9uIF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hSZW9yZGVyKGRvbU5vZGUsIHBhdGNoKVxue1xuXHR2YXIgZGF0YSA9IHBhdGNoLnM7XG5cblx0Ly8gcmVtb3ZlIGVuZCBpbnNlcnRzXG5cdHZhciBmcmFnID0gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaFJlb3JkZXJFbmRJbnNlcnRzSGVscChkYXRhLnksIHBhdGNoKTtcblxuXHQvLyByZW1vdmFsc1xuXHRkb21Ob2RlID0gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzSGVscChkb21Ob2RlLCBkYXRhLncpO1xuXG5cdC8vIGluc2VydHNcblx0dmFyIGluc2VydHMgPSBkYXRhLng7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgaW5zZXJ0cy5sZW5ndGg7IGkrKylcblx0e1xuXHRcdHZhciBpbnNlcnQgPSBpbnNlcnRzW2ldO1xuXHRcdHZhciBlbnRyeSA9IGluc2VydC5BO1xuXHRcdHZhciBub2RlID0gZW50cnkuYyA9PT0gMlxuXHRcdFx0PyBlbnRyeS5zXG5cdFx0XHQ6IF9WaXJ0dWFsRG9tX3JlbmRlcihlbnRyeS56LCBwYXRjaC51KTtcblx0XHRkb21Ob2RlLmluc2VydEJlZm9yZShub2RlLCBkb21Ob2RlLmNoaWxkTm9kZXNbaW5zZXJ0LnJdKTtcblx0fVxuXG5cdC8vIGFkZCBlbmQgaW5zZXJ0c1xuXHRpZiAoZnJhZylcblx0e1xuXHRcdF9WaXJ0dWFsRG9tX2FwcGVuZENoaWxkKGRvbU5vZGUsIGZyYWcpO1xuXHR9XG5cblx0cmV0dXJuIGRvbU5vZGU7XG59XG5cblxuZnVuY3Rpb24gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaFJlb3JkZXJFbmRJbnNlcnRzSGVscChlbmRJbnNlcnRzLCBwYXRjaClcbntcblx0aWYgKCFlbmRJbnNlcnRzKVxuXHR7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGZyYWcgPSBfVmlydHVhbERvbV9kb2MuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGVuZEluc2VydHMubGVuZ3RoOyBpKyspXG5cdHtcblx0XHR2YXIgaW5zZXJ0ID0gZW5kSW5zZXJ0c1tpXTtcblx0XHR2YXIgZW50cnkgPSBpbnNlcnQuQTtcblx0XHRfVmlydHVhbERvbV9hcHBlbmRDaGlsZChmcmFnLCBlbnRyeS5jID09PSAyXG5cdFx0XHQ/IGVudHJ5LnNcblx0XHRcdDogX1ZpcnR1YWxEb21fcmVuZGVyKGVudHJ5LnosIHBhdGNoLnUpXG5cdFx0KTtcblx0fVxuXHRyZXR1cm4gZnJhZztcbn1cblxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV92aXJ0dWFsaXplKG5vZGUpXG57XG5cdC8vIFRFWFQgTk9ERVNcblxuXHRpZiAobm9kZS5ub2RlVHlwZSA9PT0gMylcblx0e1xuXHRcdHJldHVybiBfVmlydHVhbERvbV90ZXh0KG5vZGUudGV4dENvbnRlbnQpO1xuXHR9XG5cblxuXHQvLyBXRUlSRCBOT0RFU1xuXG5cdGlmIChub2RlLm5vZGVUeXBlICE9PSAxKVxuXHR7XG5cdFx0cmV0dXJuIF9WaXJ0dWFsRG9tX3RleHQoJycpO1xuXHR9XG5cblxuXHQvLyBFTEVNRU5UIE5PREVTXG5cblx0dmFyIGF0dHJMaXN0ID0gX0xpc3RfTmlsO1xuXHR2YXIgYXR0cnMgPSBub2RlLmF0dHJpYnV0ZXM7XG5cdGZvciAodmFyIGkgPSBhdHRycy5sZW5ndGg7IGktLTsgKVxuXHR7XG5cdFx0dmFyIGF0dHIgPSBhdHRyc1tpXTtcblx0XHR2YXIgbmFtZSA9IGF0dHIubmFtZTtcblx0XHR2YXIgdmFsdWUgPSBhdHRyLnZhbHVlO1xuXHRcdGF0dHJMaXN0ID0gX0xpc3RfQ29ucyggQTIoX1ZpcnR1YWxEb21fYXR0cmlidXRlLCBuYW1lLCB2YWx1ZSksIGF0dHJMaXN0ICk7XG5cdH1cblxuXHR2YXIgdGFnID0gbm9kZS50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdHZhciBraWRMaXN0ID0gX0xpc3RfTmlsO1xuXHR2YXIga2lkcyA9IG5vZGUuY2hpbGROb2RlcztcblxuXHRmb3IgKHZhciBpID0ga2lkcy5sZW5ndGg7IGktLTsgKVxuXHR7XG5cdFx0a2lkTGlzdCA9IF9MaXN0X0NvbnMoX1ZpcnR1YWxEb21fdmlydHVhbGl6ZShraWRzW2ldKSwga2lkTGlzdCk7XG5cdH1cblx0cmV0dXJuIEEzKF9WaXJ0dWFsRG9tX25vZGUsIHRhZywgYXR0ckxpc3QsIGtpZExpc3QpO1xufVxuXG5mdW5jdGlvbiBfVmlydHVhbERvbV9kZWtleShrZXllZE5vZGUpXG57XG5cdHZhciBrZXllZEtpZHMgPSBrZXllZE5vZGUuZTtcblx0dmFyIGxlbiA9IGtleWVkS2lkcy5sZW5ndGg7XG5cdHZhciBraWRzID0gbmV3IEFycmF5KGxlbik7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpKyspXG5cdHtcblx0XHRraWRzW2ldID0ga2V5ZWRLaWRzW2ldLmI7XG5cdH1cblxuXHRyZXR1cm4ge1xuXHRcdCQ6IDEsXG5cdFx0Yzoga2V5ZWROb2RlLmMsXG5cdFx0ZDoga2V5ZWROb2RlLmQsXG5cdFx0ZToga2lkcyxcblx0XHRmOiBrZXllZE5vZGUuZixcblx0XHRiOiBrZXllZE5vZGUuYlxuXHR9O1xufVxuXG5cblxudmFyIF9CaXR3aXNlX2FuZCA9IEYyKGZ1bmN0aW9uKGEsIGIpXG57XG5cdHJldHVybiBhICYgYjtcbn0pO1xuXG52YXIgX0JpdHdpc2Vfb3IgPSBGMihmdW5jdGlvbihhLCBiKVxue1xuXHRyZXR1cm4gYSB8IGI7XG59KTtcblxudmFyIF9CaXR3aXNlX3hvciA9IEYyKGZ1bmN0aW9uKGEsIGIpXG57XG5cdHJldHVybiBhIF4gYjtcbn0pO1xuXG5mdW5jdGlvbiBfQml0d2lzZV9jb21wbGVtZW50KGEpXG57XG5cdHJldHVybiB+YTtcbn07XG5cbnZhciBfQml0d2lzZV9zaGlmdExlZnRCeSA9IEYyKGZ1bmN0aW9uKG9mZnNldCwgYSlcbntcblx0cmV0dXJuIGEgPDwgb2Zmc2V0O1xufSk7XG5cbnZhciBfQml0d2lzZV9zaGlmdFJpZ2h0QnkgPSBGMihmdW5jdGlvbihvZmZzZXQsIGEpXG57XG5cdHJldHVybiBhID4+IG9mZnNldDtcbn0pO1xuXG52YXIgX0JpdHdpc2Vfc2hpZnRSaWdodFpmQnkgPSBGMihmdW5jdGlvbihvZmZzZXQsIGEpXG57XG5cdHJldHVybiBhID4+PiBvZmZzZXQ7XG59KTtcblxuXG5cblxuLy8gSEVMUEVSU1xuXG5cbmZ1bmN0aW9uIF9EZWJ1Z2dlcl91bnNhZmVDb2VyY2UodmFsdWUpXG57XG5cdHJldHVybiB2YWx1ZTtcbn1cblxuXG5cbi8vIFBST0dSQU1TXG5cblxudmFyIF9EZWJ1Z2dlcl9lbGVtZW50ID0gRjQoZnVuY3Rpb24oaW1wbCwgZmxhZ0RlY29kZXIsIGRlYnVnTWV0YWRhdGEsIGFyZ3MpXG57XG5cdHJldHVybiBfUGxhdGZvcm1faW5pdGlhbGl6ZShcblx0XHRmbGFnRGVjb2Rlcixcblx0XHRhcmdzLFxuXHRcdEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHdyYXBJbml0LCBfSnNvbl93cmFwKGRlYnVnTWV0YWRhdGEpLCBfRGVidWdnZXJfcG9wb3V0KCksIGltcGwuaW5pdCksXG5cdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd3JhcFVwZGF0ZShpbXBsLnVwZGF0ZSksXG5cdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd3JhcFN1YnMoaW1wbC5zdWJzY3JpcHRpb25zKSxcblx0XHRmdW5jdGlvbihzZW5kVG9BcHAsIGluaXRpYWxNb2RlbClcblx0XHR7XG5cdFx0XHR2YXIgdmlldyA9IGltcGwudmlldztcblx0XHRcdHZhciB0aXRsZSA9IF9WaXJ0dWFsRG9tX2RvYy50aXRsZTtcblx0XHRcdHZhciBkb21Ob2RlID0gYXJncyAmJiBhcmdzWydub2RlJ10gPyBhcmdzWydub2RlJ10gOiBfRGVidWdfY3Jhc2goMCk7XG5cdFx0XHR2YXIgY3Vyck5vZGUgPSBfVmlydHVhbERvbV92aXJ0dWFsaXplKGRvbU5vZGUpO1xuXHRcdFx0dmFyIGN1cnJCbG9ja2VyID0gJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdG9CbG9ja2VyVHlwZShpbml0aWFsTW9kZWwpO1xuXHRcdFx0dmFyIGN1cnJQb3BvdXQ7XG5cblx0XHRcdHZhciBjb3JuZXJOb2RlID0gX1ZpcnR1YWxEb21fZG9jLmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdFx0ZG9tTm9kZS5wYXJlbnROb2RlLmluc2VydEJlZm9yZShjb3JuZXJOb2RlLCBkb21Ob2RlLm5leHRTaWJsaW5nKTtcblx0XHRcdHZhciBjb3JuZXJDdXJyID0gX1ZpcnR1YWxEb21fdmlydHVhbGl6ZShjb3JuZXJOb2RlKTtcblxuXHRcdFx0aW5pdGlhbE1vZGVsLnBvcG91dC5hID0gc2VuZFRvQXBwO1xuXG5cdFx0XHRyZXR1cm4gX0Jyb3dzZXJfbWFrZUFuaW1hdG9yKGluaXRpYWxNb2RlbCwgZnVuY3Rpb24obW9kZWwpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBuZXh0Tm9kZSA9IEEyKF9WaXJ0dWFsRG9tX21hcCwgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kVXNlck1zZywgdmlldygkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRnZXRVc2VyTW9kZWwobW9kZWwpKSk7XG5cdFx0XHRcdHZhciBwYXRjaGVzID0gX1ZpcnR1YWxEb21fZGlmZihjdXJyTm9kZSwgbmV4dE5vZGUpO1xuXHRcdFx0XHRkb21Ob2RlID0gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzKGRvbU5vZGUsIGN1cnJOb2RlLCBwYXRjaGVzLCBzZW5kVG9BcHApO1xuXHRcdFx0XHRjdXJyTm9kZSA9IG5leHROb2RlO1xuXG5cdFx0XHRcdC8vIHVwZGF0ZSBibG9ja2VyXG5cblx0XHRcdFx0dmFyIG5leHRCbG9ja2VyID0gJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdG9CbG9ja2VyVHlwZShtb2RlbCk7XG5cdFx0XHRcdF9EZWJ1Z2dlcl91cGRhdGVCbG9ja2VyKGN1cnJCbG9ja2VyLCBuZXh0QmxvY2tlcik7XG5cdFx0XHRcdGN1cnJCbG9ja2VyID0gbmV4dEJsb2NrZXI7XG5cblx0XHRcdFx0Ly8gdmlldyBjb3JuZXJcblxuXHRcdFx0XHR2YXIgY29ybmVyTmV4dCA9ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGNvcm5lclZpZXcobW9kZWwpO1xuXHRcdFx0XHR2YXIgY29ybmVyUGF0Y2hlcyA9IF9WaXJ0dWFsRG9tX2RpZmYoY29ybmVyQ3VyciwgY29ybmVyTmV4dCk7XG5cdFx0XHRcdGNvcm5lck5vZGUgPSBfVmlydHVhbERvbV9hcHBseVBhdGNoZXMoY29ybmVyTm9kZSwgY29ybmVyQ3VyciwgY29ybmVyUGF0Y2hlcywgc2VuZFRvQXBwKTtcblx0XHRcdFx0Y29ybmVyQ3VyciA9IGNvcm5lck5leHQ7XG5cblx0XHRcdFx0aWYgKCFtb2RlbC5wb3BvdXQuYilcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGN1cnJQb3BvdXQgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gdmlldyBwb3BvdXRcblxuXHRcdFx0XHRfVmlydHVhbERvbV9kb2MgPSBtb2RlbC5wb3BvdXQuYjsgLy8gU1dJVENIIFRPIFBPUE9VVCBET0Ncblx0XHRcdFx0Y3VyclBvcG91dCB8fCAoY3VyclBvcG91dCA9IF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUobW9kZWwucG9wb3V0LmIpKTtcblx0XHRcdFx0dmFyIG5leHRQb3BvdXQgPSAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRwb3BvdXRWaWV3KG1vZGVsKTtcblx0XHRcdFx0dmFyIHBvcG91dFBhdGNoZXMgPSBfVmlydHVhbERvbV9kaWZmKGN1cnJQb3BvdXQsIG5leHRQb3BvdXQpO1xuXHRcdFx0XHRfVmlydHVhbERvbV9hcHBseVBhdGNoZXMobW9kZWwucG9wb3V0LmIuYm9keSwgY3VyclBvcG91dCwgcG9wb3V0UGF0Y2hlcywgc2VuZFRvQXBwKTtcblx0XHRcdFx0Y3VyclBvcG91dCA9IG5leHRQb3BvdXQ7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX2RvYyA9IGRvY3VtZW50OyAvLyBTV0lUQ0ggQkFDSyBUTyBOT1JNQUwgRE9DXG5cdFx0XHR9KTtcblx0XHR9XG5cdCk7XG59KTtcblxuXG52YXIgX0RlYnVnZ2VyX2RvY3VtZW50ID0gRjQoZnVuY3Rpb24oaW1wbCwgZmxhZ0RlY29kZXIsIGRlYnVnTWV0YWRhdGEsIGFyZ3MpXG57XG5cdHJldHVybiBfUGxhdGZvcm1faW5pdGlhbGl6ZShcblx0XHRmbGFnRGVjb2Rlcixcblx0XHRhcmdzLFxuXHRcdEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHdyYXBJbml0LCBfSnNvbl93cmFwKGRlYnVnTWV0YWRhdGEpLCBfRGVidWdnZXJfcG9wb3V0KCksIGltcGwuaW5pdCksXG5cdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd3JhcFVwZGF0ZShpbXBsLnVwZGF0ZSksXG5cdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd3JhcFN1YnMoaW1wbC5zdWJzY3JpcHRpb25zKSxcblx0XHRmdW5jdGlvbihzZW5kVG9BcHAsIGluaXRpYWxNb2RlbClcblx0XHR7XG5cdFx0XHR2YXIgZGl2ZXJ0SHJlZlRvQXBwID0gaW1wbC5zZXR1cCAmJiBpbXBsLnNldHVwKGZ1bmN0aW9uKHgpIHsgcmV0dXJuIHNlbmRUb0FwcCgkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVc2VyTXNnKHgpKTsgfSk7XG5cdFx0XHR2YXIgdmlldyA9IGltcGwudmlldztcblx0XHRcdHZhciB0aXRsZSA9IF9WaXJ0dWFsRG9tX2RvYy50aXRsZTtcblx0XHRcdHZhciBib2R5Tm9kZSA9IF9WaXJ0dWFsRG9tX2RvYy5ib2R5O1xuXHRcdFx0dmFyIGN1cnJOb2RlID0gX1ZpcnR1YWxEb21fdmlydHVhbGl6ZShib2R5Tm9kZSk7XG5cdFx0XHR2YXIgY3VyckJsb2NrZXIgPSAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR0b0Jsb2NrZXJUeXBlKGluaXRpYWxNb2RlbCk7XG5cdFx0XHR2YXIgY3VyclBvcG91dDtcblxuXHRcdFx0aW5pdGlhbE1vZGVsLnBvcG91dC5hID0gc2VuZFRvQXBwO1xuXG5cdFx0XHRyZXR1cm4gX0Jyb3dzZXJfbWFrZUFuaW1hdG9yKGluaXRpYWxNb2RlbCwgZnVuY3Rpb24obW9kZWwpXG5cdFx0XHR7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX2RpdmVydEhyZWZUb0FwcCA9IGRpdmVydEhyZWZUb0FwcDtcblx0XHRcdFx0dmFyIGRvYyA9IHZpZXcoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZ2V0VXNlck1vZGVsKG1vZGVsKSk7XG5cdFx0XHRcdHZhciBuZXh0Tm9kZSA9IF9WaXJ0dWFsRG9tX25vZGUoJ2JvZHknKShfTGlzdF9OaWwpKFxuXHRcdFx0XHRcdF9VdGlsc19hcChcblx0XHRcdFx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JG1hcCwgX1ZpcnR1YWxEb21fbWFwKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFVzZXJNc2cpLCBkb2MuYm9keSksXG5cdFx0XHRcdFx0XHRfTGlzdF9Db25zKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGNvcm5lclZpZXcobW9kZWwpLCBfTGlzdF9OaWwpXG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR2YXIgcGF0Y2hlcyA9IF9WaXJ0dWFsRG9tX2RpZmYoY3Vyck5vZGUsIG5leHROb2RlKTtcblx0XHRcdFx0Ym9keU5vZGUgPSBfVmlydHVhbERvbV9hcHBseVBhdGNoZXMoYm9keU5vZGUsIGN1cnJOb2RlLCBwYXRjaGVzLCBzZW5kVG9BcHApO1xuXHRcdFx0XHRjdXJyTm9kZSA9IG5leHROb2RlO1xuXHRcdFx0XHRfVmlydHVhbERvbV9kaXZlcnRIcmVmVG9BcHAgPSAwO1xuXHRcdFx0XHQodGl0bGUgIT09IGRvYy50aXRsZSkgJiYgKF9WaXJ0dWFsRG9tX2RvYy50aXRsZSA9IHRpdGxlID0gZG9jLnRpdGxlKTtcblxuXHRcdFx0XHQvLyB1cGRhdGUgYmxvY2tlclxuXG5cdFx0XHRcdHZhciBuZXh0QmxvY2tlciA9ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvQmxvY2tlclR5cGUobW9kZWwpO1xuXHRcdFx0XHRfRGVidWdnZXJfdXBkYXRlQmxvY2tlcihjdXJyQmxvY2tlciwgbmV4dEJsb2NrZXIpO1xuXHRcdFx0XHRjdXJyQmxvY2tlciA9IG5leHRCbG9ja2VyO1xuXG5cdFx0XHRcdC8vIHZpZXcgcG9wb3V0XG5cblx0XHRcdFx0aWYgKCFtb2RlbC5wb3BvdXQuYikgeyBjdXJyUG9wb3V0ID0gdW5kZWZpbmVkOyByZXR1cm47IH1cblxuXHRcdFx0XHRfVmlydHVhbERvbV9kb2MgPSBtb2RlbC5wb3BvdXQuYjsgLy8gU1dJVENIIFRPIFBPUE9VVCBET0Ncblx0XHRcdFx0Y3VyclBvcG91dCB8fCAoY3VyclBvcG91dCA9IF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUobW9kZWwucG9wb3V0LmIpKTtcblx0XHRcdFx0dmFyIG5leHRQb3BvdXQgPSAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRwb3BvdXRWaWV3KG1vZGVsKTtcblx0XHRcdFx0dmFyIHBvcG91dFBhdGNoZXMgPSBfVmlydHVhbERvbV9kaWZmKGN1cnJQb3BvdXQsIG5leHRQb3BvdXQpO1xuXHRcdFx0XHRfVmlydHVhbERvbV9hcHBseVBhdGNoZXMobW9kZWwucG9wb3V0LmIuYm9keSwgY3VyclBvcG91dCwgcG9wb3V0UGF0Y2hlcywgc2VuZFRvQXBwKTtcblx0XHRcdFx0Y3VyclBvcG91dCA9IG5leHRQb3BvdXQ7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX2RvYyA9IGRvY3VtZW50OyAvLyBTV0lUQ0ggQkFDSyBUTyBOT1JNQUwgRE9DXG5cdFx0XHR9KTtcblx0XHR9XG5cdCk7XG59KTtcblxuXG5mdW5jdGlvbiBfRGVidWdnZXJfcG9wb3V0KClcbntcblx0cmV0dXJuIHtcblx0XHRiOiB1bmRlZmluZWQsXG5cdFx0YTogdW5kZWZpbmVkXG5cdH07XG59XG5cbmZ1bmN0aW9uIF9EZWJ1Z2dlcl9pc09wZW4ocG9wb3V0KVxue1xuXHRyZXR1cm4gISFwb3BvdXQuYjtcbn1cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX29wZW4ocG9wb3V0KVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0X0RlYnVnZ2VyX29wZW5XaW5kb3cocG9wb3V0KTtcblx0XHRjYWxsYmFjayhfU2NoZWR1bGVyX3N1Y2NlZWQoX1V0aWxzX1R1cGxlMCkpO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX29wZW5XaW5kb3cocG9wb3V0KVxue1xuXHR2YXIgdyA9ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGluaXRpYWxXaW5kb3dXaWR0aCxcblx0XHRoID0gJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kaW5pdGlhbFdpbmRvd0hlaWdodCxcblx0IFx0eCA9IHNjcmVlbi53aWR0aCAtIHcsXG5cdFx0eSA9IHNjcmVlbi5oZWlnaHQgLSBoO1xuXG5cdHZhciBkZWJ1Z2dlcldpbmRvdyA9IHdpbmRvdy5vcGVuKCcnLCAnJywgJ3dpZHRoPScgKyB3ICsgJyxoZWlnaHQ9JyArIGggKyAnLGxlZnQ9JyArIHggKyAnLHRvcD0nICsgeSk7XG5cdHZhciBkb2MgPSBkZWJ1Z2dlcldpbmRvdy5kb2N1bWVudDtcblx0ZG9jLnRpdGxlID0gJ0VsbSBEZWJ1Z2dlcic7XG5cblx0Ly8gaGFuZGxlIGFycm93IGtleXNcblx0ZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xuXHRcdGV2ZW50Lm1ldGFLZXkgJiYgZXZlbnQud2hpY2ggPT09IDgyICYmIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRldmVudC5rZXkgPT09ICdBcnJvd1VwJyAgICYmIChwb3BvdXQuYSgkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVcCAgKSwgZXZlbnQucHJldmVudERlZmF1bHQoKSk7XG5cdFx0ZXZlbnQua2V5ID09PSAnQXJyb3dEb3duJyAmJiAocG9wb3V0LmEoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kRG93biksIGV2ZW50LnByZXZlbnREZWZhdWx0KCkpO1xuXHR9KTtcblxuXHQvLyBoYW5kbGUgd2luZG93IGNsb3NlXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd1bmxvYWQnLCBjbG9zZSk7XG5cdGRlYnVnZ2VyV2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3VubG9hZCcsIGZ1bmN0aW9uKCkge1xuXHRcdHBvcG91dC5iID0gdW5kZWZpbmVkO1xuXHRcdHBvcG91dC5hKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJE5vT3ApO1xuXHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCd1bmxvYWQnLCBjbG9zZSk7XG5cdH0pO1xuXG5cdGZ1bmN0aW9uIGNsb3NlKCkge1xuXHRcdHBvcG91dC5iID0gdW5kZWZpbmVkO1xuXHRcdHBvcG91dC5hKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJE5vT3ApO1xuXHRcdGRlYnVnZ2VyV2luZG93LmNsb3NlKCk7XG5cdH1cblxuXHQvLyByZWdpc3RlciBuZXcgd2luZG93XG5cdHBvcG91dC5iID0gZG9jO1xufVxuXG5cblxuLy8gU0NST0xMXG5cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX3Njcm9sbChwb3BvdXQpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHRpZiAocG9wb3V0LmIpXG5cdFx0e1xuXHRcdFx0dmFyIG1zZ3MgPSBwb3BvdXQuYi5nZXRFbGVtZW50QnlJZCgnZWxtLWRlYnVnZ2VyLXNpZGViYXInKTtcblx0XHRcdGlmIChtc2dzICYmIG1zZ3Muc2Nyb2xsVG9wICE9PSAwKVxuXHRcdFx0e1xuXHRcdFx0XHRtc2dzLnNjcm9sbFRvcCA9IDA7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChfVXRpbHNfVHVwbGUwKSk7XG5cdH0pO1xufVxuXG5cbnZhciBfRGVidWdnZXJfc2Nyb2xsVG8gPSBGMihmdW5jdGlvbihpZCwgcG9wb3V0KVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0aWYgKHBvcG91dC5iKVxuXHRcdHtcblx0XHRcdHZhciBtc2cgPSBwb3BvdXQuYi5nZXRFbGVtZW50QnlJZChpZCk7XG5cdFx0XHRpZiAobXNnKVxuXHRcdFx0e1xuXHRcdFx0XHRtc2cuc2Nyb2xsSW50b1ZpZXcoZmFsc2UpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRjYWxsYmFjayhfU2NoZWR1bGVyX3N1Y2NlZWQoX1V0aWxzX1R1cGxlMCkpO1xuXHR9KTtcbn0pO1xuXG5cblxuLy8gVVBMT0FEXG5cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX3VwbG9hZChwb3BvdXQpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHR2YXIgZG9jID0gcG9wb3V0LmIgfHwgZG9jdW1lbnQ7XG5cdFx0dmFyIGVsZW1lbnQgPSBkb2MuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcblx0XHRlbGVtZW50LnNldEF0dHJpYnV0ZSgndHlwZScsICdmaWxlJyk7XG5cdFx0ZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FjY2VwdCcsICd0ZXh0L2pzb24nKTtcblx0XHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbihldmVudClcblx0XHR7XG5cdFx0XHR2YXIgZmlsZVJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XG5cdFx0XHRmaWxlUmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKGUpXG5cdFx0XHR7XG5cdFx0XHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChlLnRhcmdldC5yZXN1bHQpKTtcblx0XHRcdH07XG5cdFx0XHRmaWxlUmVhZGVyLnJlYWRBc1RleHQoZXZlbnQudGFyZ2V0LmZpbGVzWzBdKTtcblx0XHRcdGRvYy5ib2R5LnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xuXHRcdH0pO1xuXHRcdGRvYy5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuXHRcdGVsZW1lbnQuY2xpY2soKTtcblx0fSk7XG59XG5cblxuXG4vLyBET1dOTE9BRFxuXG5cbnZhciBfRGVidWdnZXJfZG93bmxvYWQgPSBGMihmdW5jdGlvbihoaXN0b3J5TGVuZ3RoLCBqc29uKVxue1xuXHRyZXR1cm4gX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHR7XG5cdFx0dmFyIGZpbGVOYW1lID0gJ2hpc3RvcnktJyArIGhpc3RvcnlMZW5ndGggKyAnLnR4dCc7XG5cdFx0dmFyIGpzb25TdHJpbmcgPSBKU09OLnN0cmluZ2lmeShqc29uKTtcblx0XHR2YXIgbWltZSA9ICd0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgnO1xuXHRcdHZhciBkb25lID0gX1NjaGVkdWxlcl9zdWNjZWVkKF9VdGlsc19UdXBsZTApO1xuXG5cdFx0Ly8gZm9yIElFMTArXG5cdFx0aWYgKG5hdmlnYXRvci5tc1NhdmVCbG9iKVxuXHRcdHtcblx0XHRcdG5hdmlnYXRvci5tc1NhdmVCbG9iKG5ldyBCbG9iKFtqc29uU3RyaW5nXSwge3R5cGU6IG1pbWV9KSwgZmlsZU5hbWUpO1xuXHRcdFx0cmV0dXJuIGNhbGxiYWNrKGRvbmUpO1xuXHRcdH1cblxuXHRcdC8vIGZvciBIVE1MNVxuXHRcdHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdocmVmJywgJ2RhdGE6JyArIG1pbWUgKyAnLCcgKyBlbmNvZGVVUklDb21wb25lbnQoanNvblN0cmluZykpO1xuXHRcdGVsZW1lbnQuc2V0QXR0cmlidXRlKCdkb3dubG9hZCcsIGZpbGVOYW1lKTtcblx0XHRlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChlbGVtZW50KTtcblx0XHRlbGVtZW50LmNsaWNrKCk7XG5cdFx0ZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcblx0XHRjYWxsYmFjayhkb25lKTtcblx0fSk7XG59KTtcblxuXG5cbi8vIFBPUE9VVCBDT05URU5UXG5cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX21lc3NhZ2VUb1N0cmluZyh2YWx1ZSlcbntcblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKVxuXHR7XG5cdFx0cmV0dXJuIHZhbHVlID8gJ1RydWUnIDogJ0ZhbHNlJztcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKVxuXHR7XG5cdFx0cmV0dXJuIHZhbHVlICsgJyc7XG5cdH1cblxuXHRpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJylcblx0e1xuXHRcdHJldHVybiAnXCInICsgX0RlYnVnZ2VyX2FkZFNsYXNoZXModmFsdWUsIGZhbHNlKSArICdcIic7XG5cdH1cblxuXHRpZiAodmFsdWUgaW5zdGFuY2VvZiBTdHJpbmcpXG5cdHtcblx0XHRyZXR1cm4gXCInXCIgKyBfRGVidWdnZXJfYWRkU2xhc2hlcyh2YWx1ZSwgdHJ1ZSkgKyBcIidcIjtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgIT09ICdvYmplY3QnIHx8IHZhbHVlID09PSBudWxsIHx8ICEoJyQnIGluIHZhbHVlKSlcblx0e1xuXHRcdHJldHVybiAn4oCmJztcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUuJCA9PT0gJ251bWJlcicpXG5cdHtcblx0XHRyZXR1cm4gJ+KApic7XG5cdH1cblxuXHR2YXIgY29kZSA9IHZhbHVlLiQuY2hhckNvZGVBdCgwKTtcblx0aWYgKGNvZGUgPT09IDB4MjMgLyogIyAqLyB8fCAvKiBhICovIDB4NjEgPD0gY29kZSAmJiBjb2RlIDw9IDB4N0EgLyogeiAqLylcblx0e1xuXHRcdHJldHVybiAn4oCmJztcblx0fVxuXG5cdGlmIChbJ0FycmF5X2VsbV9idWlsdGluJywgJ1NldF9lbG1fYnVpbHRpbicsICdSQk5vZGVfZWxtX2J1aWx0aW4nLCAnUkJFbXB0eV9lbG1fYnVpbHRpbiddLmluZGV4T2YodmFsdWUuJCkgPj0gMClcblx0e1xuXHRcdHJldHVybiAn4oCmJztcblx0fVxuXG5cdHZhciBrZXlzID0gT2JqZWN0LmtleXModmFsdWUpO1xuXHRzd2l0Y2ggKGtleXMubGVuZ3RoKVxuXHR7XG5cdFx0Y2FzZSAxOlxuXHRcdFx0cmV0dXJuIHZhbHVlLiQ7XG5cdFx0Y2FzZSAyOlxuXHRcdFx0cmV0dXJuIHZhbHVlLiQgKyAnICcgKyBfRGVidWdnZXJfbWVzc2FnZVRvU3RyaW5nKHZhbHVlLmEpO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gdmFsdWUuJCArICcg4oCmICcgKyBfRGVidWdnZXJfbWVzc2FnZVRvU3RyaW5nKHZhbHVlW2tleXNba2V5cy5sZW5ndGggLSAxXV0pO1xuXHR9XG59XG5cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX2luaXQodmFsdWUpXG57XG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJylcblx0e1xuXHRcdHJldHVybiBBMygkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3RvciwgJGVsbSRjb3JlJE1heWJlJEp1c3QodmFsdWUgPyAnVHJ1ZScgOiAnRmFsc2UnKSwgdHJ1ZSwgX0xpc3RfTmlsKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKVxuXHR7XG5cdFx0cmV0dXJuICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFByaW1pdGl2ZSh2YWx1ZSArICcnKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKVxuXHR7XG5cdFx0cmV0dXJuICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFMoJ1wiJyArIF9EZWJ1Z2dlcl9hZGRTbGFzaGVzKHZhbHVlLCBmYWxzZSkgKyAnXCInKTtcblx0fVxuXG5cdGlmICh2YWx1ZSBpbnN0YW5jZW9mIFN0cmluZylcblx0e1xuXHRcdHJldHVybiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRTKFwiJ1wiICsgX0RlYnVnZ2VyX2FkZFNsYXNoZXModmFsdWUsIHRydWUpICsgXCInXCIpO1xuXHR9XG5cblx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgJyQnIGluIHZhbHVlKVxuXHR7XG5cdFx0dmFyIHRhZyA9IHZhbHVlLiQ7XG5cblx0XHRpZiAodGFnID09PSAnOjonIHx8IHRhZyA9PT0gJ1tdJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gQTMoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2VxdWVuY2UsICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJExpc3RTZXEsIHRydWUsXG5cdFx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JG1hcCwgX0RlYnVnZ2VyX2luaXQsIHZhbHVlKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAodGFnID09PSAnU2V0X2VsbV9idWlsdGluJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gQTMoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2VxdWVuY2UsICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFNldFNlcSwgdHJ1ZSxcblx0XHRcdFx0QTMoJGVsbSRjb3JlJFNldCRmb2xkciwgX0RlYnVnZ2VyX2luaXRDb25zLCBfTGlzdF9OaWwsIHZhbHVlKVxuXHRcdFx0KTtcblx0XHR9XG5cblx0XHRpZiAodGFnID09PSAnUkJOb2RlX2VsbV9idWlsdGluJyB8fCB0YWcgPT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKVxuXHRcdHtcblx0XHRcdHJldHVybiBBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyREaWN0aW9uYXJ5LCB0cnVlLFxuXHRcdFx0XHRBMygkZWxtJGNvcmUkRGljdCRmb2xkciwgX0RlYnVnZ2VyX2luaXRLZXlWYWx1ZUNvbnMsIF9MaXN0X05pbCwgdmFsdWUpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICh0YWcgPT09ICdBcnJheV9lbG1fYnVpbHRpbicpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFNlcXVlbmNlLCAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRBcnJheVNlcSwgdHJ1ZSxcblx0XHRcdFx0QTMoJGVsbSRjb3JlJEFycmF5JGZvbGRyLCBfRGVidWdnZXJfaW5pdENvbnMsIF9MaXN0X05pbCwgdmFsdWUpXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdGlmICh0eXBlb2YgdGFnID09PSAnbnVtYmVyJylcblx0XHR7XG5cdFx0XHRyZXR1cm4gJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUHJpbWl0aXZlKCc8aW50ZXJuYWxzPicpO1xuXHRcdH1cblxuXHRcdHZhciBjaGFyID0gdGFnLmNoYXJDb2RlQXQoMCk7XG5cdFx0aWYgKGNoYXIgPT09IDM1IHx8IDY1IDw9IGNoYXIgJiYgY2hhciA8PSA5MClcblx0XHR7XG5cdFx0XHR2YXIgbGlzdCA9IF9MaXN0X05pbDtcblx0XHRcdGZvciAodmFyIGkgaW4gdmFsdWUpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChpID09PSAnJCcpIGNvbnRpbnVlO1xuXHRcdFx0XHRsaXN0ID0gX0xpc3RfQ29ucyhfRGVidWdnZXJfaW5pdCh2YWx1ZVtpXSksIGxpc3QpO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJENvbnN0cnVjdG9yLCBjaGFyID09PSAzNSA/ICRlbG0kY29yZSRNYXliZSROb3RoaW5nIDogJGVsbSRjb3JlJE1heWJlJEp1c3QodGFnKSwgdHJ1ZSwgJGVsbSRjb3JlJExpc3QkcmV2ZXJzZShsaXN0KSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFByaW1pdGl2ZSgnPGludGVybmFscz4nKTtcblx0fVxuXG5cdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKVxuXHR7XG5cdFx0dmFyIGRpY3QgPSAkZWxtJGNvcmUkRGljdCRlbXB0eTtcblx0XHRmb3IgKHZhciBpIGluIHZhbHVlKVxuXHRcdHtcblx0XHRcdGRpY3QgPSBBMygkZWxtJGNvcmUkRGljdCRpbnNlcnQsIGksIF9EZWJ1Z2dlcl9pbml0KHZhbHVlW2ldKSwgZGljdCk7XG5cdFx0fVxuXHRcdHJldHVybiBBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRSZWNvcmQsIHRydWUsIGRpY3QpO1xuXHR9XG5cblx0cmV0dXJuICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFByaW1pdGl2ZSgnPGludGVybmFscz4nKTtcbn1cblxudmFyIF9EZWJ1Z2dlcl9pbml0Q29ucyA9IEYyKGZ1bmN0aW9uIGluaXRDb25zSGVscCh2YWx1ZSwgbGlzdClcbntcblx0cmV0dXJuIF9MaXN0X0NvbnMoX0RlYnVnZ2VyX2luaXQodmFsdWUpLCBsaXN0KTtcbn0pO1xuXG52YXIgX0RlYnVnZ2VyX2luaXRLZXlWYWx1ZUNvbnMgPSBGMyhmdW5jdGlvbihrZXksIHZhbHVlLCBsaXN0KVxue1xuXHRyZXR1cm4gX0xpc3RfQ29ucyhcblx0XHRfVXRpbHNfVHVwbGUyKF9EZWJ1Z2dlcl9pbml0KGtleSksIF9EZWJ1Z2dlcl9pbml0KHZhbHVlKSksXG5cdFx0bGlzdFxuXHQpO1xufSk7XG5cbmZ1bmN0aW9uIF9EZWJ1Z2dlcl9hZGRTbGFzaGVzKHN0ciwgaXNDaGFyKVxue1xuXHR2YXIgcyA9IHN0clxuXHRcdC5yZXBsYWNlKC9cXFxcL2csICdcXFxcXFxcXCcpXG5cdFx0LnJlcGxhY2UoL1xcbi9nLCAnXFxcXG4nKVxuXHRcdC5yZXBsYWNlKC9cXHQvZywgJ1xcXFx0Jylcblx0XHQucmVwbGFjZSgvXFxyL2csICdcXFxccicpXG5cdFx0LnJlcGxhY2UoL1xcdi9nLCAnXFxcXHYnKVxuXHRcdC5yZXBsYWNlKC9cXDAvZywgJ1xcXFwwJyk7XG5cdGlmIChpc0NoYXIpXG5cdHtcblx0XHRyZXR1cm4gcy5yZXBsYWNlKC9cXCcvZywgJ1xcXFxcXCcnKTtcblx0fVxuXHRlbHNlXG5cdHtcblx0XHRyZXR1cm4gcy5yZXBsYWNlKC9cXFwiL2csICdcXFxcXCInKTtcblx0fVxufVxuXG5cblxuLy8gQkxPQ0sgRVZFTlRTXG5cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX3VwZGF0ZUJsb2NrZXIob2xkQmxvY2tlciwgbmV3QmxvY2tlcilcbntcblx0aWYgKG9sZEJsb2NrZXIgPT09IG5ld0Jsb2NrZXIpIHJldHVybjtcblxuXHR2YXIgb2xkRXZlbnRzID0gX0RlYnVnZ2VyX2Jsb2NrZXJUb0V2ZW50cyhvbGRCbG9ja2VyKTtcblx0dmFyIG5ld0V2ZW50cyA9IF9EZWJ1Z2dlcl9ibG9ja2VyVG9FdmVudHMobmV3QmxvY2tlcik7XG5cblx0Ly8gcmVtb3ZlIG9sZCBibG9ja2Vyc1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IG9sZEV2ZW50cy5sZW5ndGg7IGkrKylcblx0e1xuXHRcdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIob2xkRXZlbnRzW2ldLCBfRGVidWdnZXJfYmxvY2tlciwgdHJ1ZSk7XG5cdH1cblxuXHQvLyBhZGQgbmV3IGJsb2NrZXJzXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbmV3RXZlbnRzLmxlbmd0aDsgaSsrKVxuXHR7XG5cdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihuZXdFdmVudHNbaV0sIF9EZWJ1Z2dlcl9ibG9ja2VyLCB0cnVlKTtcblx0fVxufVxuXG5cbmZ1bmN0aW9uIF9EZWJ1Z2dlcl9ibG9ja2VyKGV2ZW50KVxue1xuXHRpZiAoZXZlbnQudHlwZSA9PT0gJ2tleWRvd24nICYmIGV2ZW50Lm1ldGFLZXkgJiYgZXZlbnQud2hpY2ggPT09IDgyKVxuXHR7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0dmFyIGlzU2Nyb2xsID0gZXZlbnQudHlwZSA9PT0gJ3Njcm9sbCcgfHwgZXZlbnQudHlwZSA9PT0gJ3doZWVsJztcblx0Zm9yICh2YXIgbm9kZSA9IGV2ZW50LnRhcmdldDsgbm9kZTsgbm9kZSA9IG5vZGUucGFyZW50Tm9kZSlcblx0e1xuXHRcdGlmIChpc1Njcm9sbCA/IG5vZGUuaWQgPT09ICdlbG0tZGVidWdnZXItZGV0YWlscycgOiBub2RlLmlkID09PSAnZWxtLWRlYnVnZ2VyLW92ZXJsYXknKVxuXHRcdHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdH1cblxuXHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gX0RlYnVnZ2VyX2Jsb2NrZXJUb0V2ZW50cyhibG9ja2VyKVxue1xuXHRyZXR1cm4gYmxvY2tlciA9PT0gJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmxvY2tOb25lXG5cdFx0PyBbXVxuXHRcdDogYmxvY2tlciA9PT0gJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmxvY2tNb3N0XG5cdFx0XHQ/IF9EZWJ1Z2dlcl9tb3N0RXZlbnRzXG5cdFx0XHQ6IF9EZWJ1Z2dlcl9hbGxFdmVudHM7XG59XG5cbnZhciBfRGVidWdnZXJfbW9zdEV2ZW50cyA9IFtcblx0J2NsaWNrJywgJ2RibGNsaWNrJywgJ21vdXNlbW92ZScsXG5cdCdtb3VzZXVwJywgJ21vdXNlZG93bicsICdtb3VzZWVudGVyJywgJ21vdXNlbGVhdmUnLFxuXHQndG91Y2hzdGFydCcsICd0b3VjaGVuZCcsICd0b3VjaGNhbmNlbCcsICd0b3VjaG1vdmUnLFxuXHQncG9pbnRlcmRvd24nLCAncG9pbnRlcnVwJywgJ3BvaW50ZXJvdmVyJywgJ3BvaW50ZXJvdXQnLFxuXHQncG9pbnRlcmVudGVyJywgJ3BvaW50ZXJsZWF2ZScsICdwb2ludGVybW92ZScsICdwb2ludGVyY2FuY2VsJyxcblx0J2RyYWdzdGFydCcsICdkcmFnJywgJ2RyYWdlbmQnLCAnZHJhZ2VudGVyJywgJ2RyYWdvdmVyJywgJ2RyYWdsZWF2ZScsICdkcm9wJyxcblx0J2tleXVwJywgJ2tleWRvd24nLCAna2V5cHJlc3MnLFxuXHQnaW5wdXQnLCAnY2hhbmdlJyxcblx0J2ZvY3VzJywgJ2JsdXInXG5dO1xuXG52YXIgX0RlYnVnZ2VyX2FsbEV2ZW50cyA9IF9EZWJ1Z2dlcl9tb3N0RXZlbnRzLmNvbmNhdCgnd2hlZWwnLCAnc2Nyb2xsJyk7XG5cblxuXG5cbi8vIEVMRU1FTlRcblxuXG52YXIgX0RlYnVnZ2VyX2VsZW1lbnQ7XG5cbnZhciBfQnJvd3Nlcl9lbGVtZW50ID0gX0RlYnVnZ2VyX2VsZW1lbnQgfHwgRjQoZnVuY3Rpb24oaW1wbCwgZmxhZ0RlY29kZXIsIGRlYnVnTWV0YWRhdGEsIGFyZ3MpXG57XG5cdHJldHVybiBfUGxhdGZvcm1faW5pdGlhbGl6ZShcblx0XHRmbGFnRGVjb2Rlcixcblx0XHRhcmdzLFxuXHRcdGltcGwuaW5pdCxcblx0XHRpbXBsLnVwZGF0ZSxcblx0XHRpbXBsLnN1YnNjcmlwdGlvbnMsXG5cdFx0ZnVuY3Rpb24oc2VuZFRvQXBwLCBpbml0aWFsTW9kZWwpIHtcblx0XHRcdHZhciB2aWV3ID0gaW1wbC52aWV3O1xuXHRcdFx0LyoqX1VOVVNFRC9cblx0XHRcdHZhciBkb21Ob2RlID0gYXJnc1snbm9kZSddO1xuXHRcdFx0Ly8qL1xuXHRcdFx0LyoqL1xuXHRcdFx0dmFyIGRvbU5vZGUgPSBhcmdzICYmIGFyZ3NbJ25vZGUnXSA/IGFyZ3NbJ25vZGUnXSA6IF9EZWJ1Z19jcmFzaCgwKTtcblx0XHRcdC8vKi9cblx0XHRcdHZhciBjdXJyTm9kZSA9IF9WaXJ0dWFsRG9tX3ZpcnR1YWxpemUoZG9tTm9kZSk7XG5cblx0XHRcdHJldHVybiBfQnJvd3Nlcl9tYWtlQW5pbWF0b3IoaW5pdGlhbE1vZGVsLCBmdW5jdGlvbihtb2RlbClcblx0XHRcdHtcblx0XHRcdFx0dmFyIG5leHROb2RlID0gdmlldyhtb2RlbCk7XG5cdFx0XHRcdHZhciBwYXRjaGVzID0gX1ZpcnR1YWxEb21fZGlmZihjdXJyTm9kZSwgbmV4dE5vZGUpO1xuXHRcdFx0XHRkb21Ob2RlID0gX1ZpcnR1YWxEb21fYXBwbHlQYXRjaGVzKGRvbU5vZGUsIGN1cnJOb2RlLCBwYXRjaGVzLCBzZW5kVG9BcHApO1xuXHRcdFx0XHRjdXJyTm9kZSA9IG5leHROb2RlO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHQpO1xufSk7XG5cblxuXG4vLyBET0NVTUVOVFxuXG5cbnZhciBfRGVidWdnZXJfZG9jdW1lbnQ7XG5cbnZhciBfQnJvd3Nlcl9kb2N1bWVudCA9IF9EZWJ1Z2dlcl9kb2N1bWVudCB8fCBGNChmdW5jdGlvbihpbXBsLCBmbGFnRGVjb2RlciwgZGVidWdNZXRhZGF0YSwgYXJncylcbntcblx0cmV0dXJuIF9QbGF0Zm9ybV9pbml0aWFsaXplKFxuXHRcdGZsYWdEZWNvZGVyLFxuXHRcdGFyZ3MsXG5cdFx0aW1wbC5pbml0LFxuXHRcdGltcGwudXBkYXRlLFxuXHRcdGltcGwuc3Vic2NyaXB0aW9ucyxcblx0XHRmdW5jdGlvbihzZW5kVG9BcHAsIGluaXRpYWxNb2RlbCkge1xuXHRcdFx0dmFyIGRpdmVydEhyZWZUb0FwcCA9IGltcGwuc2V0dXAgJiYgaW1wbC5zZXR1cChzZW5kVG9BcHApXG5cdFx0XHR2YXIgdmlldyA9IGltcGwudmlldztcblx0XHRcdHZhciB0aXRsZSA9IF9WaXJ0dWFsRG9tX2RvYy50aXRsZTtcblx0XHRcdHZhciBib2R5Tm9kZSA9IF9WaXJ0dWFsRG9tX2RvYy5ib2R5O1xuXHRcdFx0dmFyIGN1cnJOb2RlID0gX1ZpcnR1YWxEb21fdmlydHVhbGl6ZShib2R5Tm9kZSk7XG5cdFx0XHRyZXR1cm4gX0Jyb3dzZXJfbWFrZUFuaW1hdG9yKGluaXRpYWxNb2RlbCwgZnVuY3Rpb24obW9kZWwpXG5cdFx0XHR7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX2RpdmVydEhyZWZUb0FwcCA9IGRpdmVydEhyZWZUb0FwcDtcblx0XHRcdFx0dmFyIGRvYyA9IHZpZXcobW9kZWwpO1xuXHRcdFx0XHR2YXIgbmV4dE5vZGUgPSBfVmlydHVhbERvbV9ub2RlKCdib2R5JykoX0xpc3RfTmlsKShkb2MuYm9keSk7XG5cdFx0XHRcdHZhciBwYXRjaGVzID0gX1ZpcnR1YWxEb21fZGlmZihjdXJyTm9kZSwgbmV4dE5vZGUpO1xuXHRcdFx0XHRib2R5Tm9kZSA9IF9WaXJ0dWFsRG9tX2FwcGx5UGF0Y2hlcyhib2R5Tm9kZSwgY3Vyck5vZGUsIHBhdGNoZXMsIHNlbmRUb0FwcCk7XG5cdFx0XHRcdGN1cnJOb2RlID0gbmV4dE5vZGU7XG5cdFx0XHRcdF9WaXJ0dWFsRG9tX2RpdmVydEhyZWZUb0FwcCA9IDA7XG5cdFx0XHRcdCh0aXRsZSAhPT0gZG9jLnRpdGxlKSAmJiAoX1ZpcnR1YWxEb21fZG9jLnRpdGxlID0gdGl0bGUgPSBkb2MudGl0bGUpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXHQpO1xufSk7XG5cblxuXG4vLyBBTklNQVRJT05cblxuXG52YXIgX0Jyb3dzZXJfY2FuY2VsQW5pbWF0aW9uRnJhbWUgPVxuXHR0eXBlb2YgY2FuY2VsQW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnXG5cdFx0PyBjYW5jZWxBbmltYXRpb25GcmFtZVxuXHRcdDogZnVuY3Rpb24oaWQpIHsgY2xlYXJUaW1lb3V0KGlkKTsgfTtcblxudmFyIF9Ccm93c2VyX3JlcXVlc3RBbmltYXRpb25GcmFtZSA9XG5cdHR5cGVvZiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgIT09ICd1bmRlZmluZWQnXG5cdFx0PyByZXF1ZXN0QW5pbWF0aW9uRnJhbWVcblx0XHQ6IGZ1bmN0aW9uKGNhbGxiYWNrKSB7IHJldHVybiBzZXRUaW1lb3V0KGNhbGxiYWNrLCAxMDAwIC8gNjApOyB9O1xuXG5cbmZ1bmN0aW9uIF9Ccm93c2VyX21ha2VBbmltYXRvcihtb2RlbCwgZHJhdylcbntcblx0ZHJhdyhtb2RlbCk7XG5cblx0dmFyIHN0YXRlID0gMDtcblxuXHRmdW5jdGlvbiB1cGRhdGVJZk5lZWRlZCgpXG5cdHtcblx0XHRzdGF0ZSA9IHN0YXRlID09PSAxXG5cdFx0XHQ/IDBcblx0XHRcdDogKCBfQnJvd3Nlcl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlSWZOZWVkZWQpLCBkcmF3KG1vZGVsKSwgMSApO1xuXHR9XG5cblx0cmV0dXJuIGZ1bmN0aW9uKG5leHRNb2RlbCwgaXNTeW5jKVxuXHR7XG5cdFx0bW9kZWwgPSBuZXh0TW9kZWw7XG5cblx0XHRpc1N5bmNcblx0XHRcdD8gKCBkcmF3KG1vZGVsKSxcblx0XHRcdFx0c3RhdGUgPT09IDIgJiYgKHN0YXRlID0gMSlcblx0XHRcdFx0KVxuXHRcdFx0OiAoIHN0YXRlID09PSAwICYmIF9Ccm93c2VyX3JlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVJZk5lZWRlZCksXG5cdFx0XHRcdHN0YXRlID0gMlxuXHRcdFx0XHQpO1xuXHR9O1xufVxuXG5cblxuLy8gQVBQTElDQVRJT05cblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9hcHBsaWNhdGlvbihpbXBsKVxue1xuXHR2YXIgb25VcmxDaGFuZ2UgPSBpbXBsLm9uVXJsQ2hhbmdlO1xuXHR2YXIgb25VcmxSZXF1ZXN0ID0gaW1wbC5vblVybFJlcXVlc3Q7XG5cdHZhciBrZXkgPSBmdW5jdGlvbigpIHsga2V5LmEob25VcmxDaGFuZ2UoX0Jyb3dzZXJfZ2V0VXJsKCkpKTsgfTtcbmtleVsnZWxtLWhvdC1uYXYta2V5J10gPSB0cnVlXG5cblx0cmV0dXJuIF9Ccm93c2VyX2RvY3VtZW50KHtcblx0XHRzZXR1cDogZnVuY3Rpb24oc2VuZFRvQXBwKVxuXHRcdHtcblx0XHRcdGtleS5hID0gc2VuZFRvQXBwO1xuXHRcdFx0X0Jyb3dzZXJfd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywga2V5KTtcblx0XHRcdF9Ccm93c2VyX3dpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoJ1RyaWRlbnQnKSA8IDAgfHwgX0Jyb3dzZXJfd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBrZXkpO1xuXG5cdFx0XHRyZXR1cm4gRjIoZnVuY3Rpb24oZG9tTm9kZSwgZXZlbnQpXG5cdFx0XHR7XG5cdFx0XHRcdGlmICghZXZlbnQuY3RybEtleSAmJiAhZXZlbnQubWV0YUtleSAmJiAhZXZlbnQuc2hpZnRLZXkgJiYgZXZlbnQuYnV0dG9uIDwgMSAmJiAhZG9tTm9kZS50YXJnZXQgJiYgIWRvbU5vZGUuaGFzQXR0cmlidXRlKCdkb3dubG9hZCcpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHR2YXIgaHJlZiA9IGRvbU5vZGUuaHJlZjtcblx0XHRcdFx0XHR2YXIgY3VyciA9IF9Ccm93c2VyX2dldFVybCgpO1xuXHRcdFx0XHRcdHZhciBuZXh0ID0gJGVsbSR1cmwkVXJsJGZyb21TdHJpbmcoaHJlZikuYTtcblx0XHRcdFx0XHRzZW5kVG9BcHAob25VcmxSZXF1ZXN0KFxuXHRcdFx0XHRcdFx0KG5leHRcblx0XHRcdFx0XHRcdFx0JiYgY3Vyci5wcm90b2NvbCA9PT0gbmV4dC5wcm90b2NvbFxuXHRcdFx0XHRcdFx0XHQmJiBjdXJyLmhvc3QgPT09IG5leHQuaG9zdFxuXHRcdFx0XHRcdFx0XHQmJiBjdXJyLnBvcnRfLmEgPT09IG5leHQucG9ydF8uYVxuXHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHQ/ICRlbG0kYnJvd3NlciRCcm93c2VyJEludGVybmFsKG5leHQpXG5cdFx0XHRcdFx0XHRcdDogJGVsbSRicm93c2VyJEJyb3dzZXIkRXh0ZXJuYWwoaHJlZilcblx0XHRcdFx0XHQpKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSxcblx0XHRpbml0OiBmdW5jdGlvbihmbGFncylcblx0XHR7XG5cdFx0XHRyZXR1cm4gQTMoaW1wbC5pbml0LCBmbGFncywgX0Jyb3dzZXJfZ2V0VXJsKCksIGtleSk7XG5cdFx0fSxcblx0XHR2aWV3OiBpbXBsLnZpZXcsXG5cdFx0dXBkYXRlOiBpbXBsLnVwZGF0ZSxcblx0XHRzdWJzY3JpcHRpb25zOiBpbXBsLnN1YnNjcmlwdGlvbnNcblx0fSk7XG59XG5cbmZ1bmN0aW9uIF9Ccm93c2VyX2dldFVybCgpXG57XG5cdHJldHVybiAkZWxtJHVybCRVcmwkZnJvbVN0cmluZyhfVmlydHVhbERvbV9kb2MubG9jYXRpb24uaHJlZikuYSB8fCBfRGVidWdfY3Jhc2goMSk7XG59XG5cbnZhciBfQnJvd3Nlcl9nbyA9IEYyKGZ1bmN0aW9uKGtleSwgbilcbntcblx0cmV0dXJuIEEyKCRlbG0kY29yZSRUYXNrJHBlcmZvcm0sICRlbG0kY29yZSRCYXNpY3MkbmV2ZXIsIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbigpIHtcblx0XHRuICYmIGhpc3RvcnkuZ28obik7XG5cdFx0a2V5KCk7XG5cdH0pKTtcbn0pO1xuXG52YXIgX0Jyb3dzZXJfcHVzaFVybCA9IEYyKGZ1bmN0aW9uKGtleSwgdXJsKVxue1xuXHRyZXR1cm4gQTIoJGVsbSRjb3JlJFRhc2skcGVyZm9ybSwgJGVsbSRjb3JlJEJhc2ljcyRuZXZlciwgX1NjaGVkdWxlcl9iaW5kaW5nKGZ1bmN0aW9uKCkge1xuXHRcdGhpc3RvcnkucHVzaFN0YXRlKHt9LCAnJywgdXJsKTtcblx0XHRrZXkoKTtcblx0fSkpO1xufSk7XG5cbnZhciBfQnJvd3Nlcl9yZXBsYWNlVXJsID0gRjIoZnVuY3Rpb24oa2V5LCB1cmwpXG57XG5cdHJldHVybiBBMigkZWxtJGNvcmUkVGFzayRwZXJmb3JtLCAkZWxtJGNvcmUkQmFzaWNzJG5ldmVyLCBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oKSB7XG5cdFx0aGlzdG9yeS5yZXBsYWNlU3RhdGUoe30sICcnLCB1cmwpO1xuXHRcdGtleSgpO1xuXHR9KSk7XG59KTtcblxuXG5cbi8vIEdMT0JBTCBFVkVOVFNcblxuXG52YXIgX0Jyb3dzZXJfZmFrZU5vZGUgPSB7IGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKCkge30sIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKCkge30gfTtcbnZhciBfQnJvd3Nlcl9kb2MgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gZG9jdW1lbnQgOiBfQnJvd3Nlcl9mYWtlTm9kZTtcbnZhciBfQnJvd3Nlcl93aW5kb3cgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IF9Ccm93c2VyX2Zha2VOb2RlO1xuXG52YXIgX0Jyb3dzZXJfb24gPSBGMyhmdW5jdGlvbihub2RlLCBldmVudE5hbWUsIHNlbmRUb1NlbGYpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX3NwYXduKF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdGZ1bmN0aW9uIGhhbmRsZXIoZXZlbnQpXHR7IF9TY2hlZHVsZXJfcmF3U3Bhd24oc2VuZFRvU2VsZihldmVudCkpOyB9XG5cdFx0bm9kZS5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgX1ZpcnR1YWxEb21fcGFzc2l2ZVN1cHBvcnRlZCAmJiB7IHBhc3NpdmU6IHRydWUgfSk7XG5cdFx0cmV0dXJuIGZ1bmN0aW9uKCkgeyBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnROYW1lLCBoYW5kbGVyKTsgfTtcblx0fSkpO1xufSk7XG5cbnZhciBfQnJvd3Nlcl9kZWNvZGVFdmVudCA9IEYyKGZ1bmN0aW9uKGRlY29kZXIsIGV2ZW50KVxue1xuXHR2YXIgcmVzdWx0ID0gX0pzb25fcnVuSGVscChkZWNvZGVyLCBldmVudCk7XG5cdHJldHVybiAkZWxtJGNvcmUkUmVzdWx0JGlzT2socmVzdWx0KSA/ICRlbG0kY29yZSRNYXliZSRKdXN0KHJlc3VsdC5hKSA6ICRlbG0kY29yZSRNYXliZSROb3RoaW5nO1xufSk7XG5cblxuXG4vLyBQQUdFIFZJU0lCSUxJVFlcblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl92aXNpYmlsaXR5SW5mbygpXG57XG5cdHJldHVybiAodHlwZW9mIF9WaXJ0dWFsRG9tX2RvYy5oaWRkZW4gIT09ICd1bmRlZmluZWQnKVxuXHRcdD8geyBoaWRkZW46ICdoaWRkZW4nLCBjaGFuZ2U6ICd2aXNpYmlsaXR5Y2hhbmdlJyB9XG5cdFx0OlxuXHQodHlwZW9mIF9WaXJ0dWFsRG9tX2RvYy5tb3pIaWRkZW4gIT09ICd1bmRlZmluZWQnKVxuXHRcdD8geyBoaWRkZW46ICdtb3pIaWRkZW4nLCBjaGFuZ2U6ICdtb3p2aXNpYmlsaXR5Y2hhbmdlJyB9XG5cdFx0OlxuXHQodHlwZW9mIF9WaXJ0dWFsRG9tX2RvYy5tc0hpZGRlbiAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0PyB7IGhpZGRlbjogJ21zSGlkZGVuJywgY2hhbmdlOiAnbXN2aXNpYmlsaXR5Y2hhbmdlJyB9XG5cdFx0OlxuXHQodHlwZW9mIF9WaXJ0dWFsRG9tX2RvYy53ZWJraXRIaWRkZW4gIT09ICd1bmRlZmluZWQnKVxuXHRcdD8geyBoaWRkZW46ICd3ZWJraXRIaWRkZW4nLCBjaGFuZ2U6ICd3ZWJraXR2aXNpYmlsaXR5Y2hhbmdlJyB9XG5cdFx0OiB7IGhpZGRlbjogJ2hpZGRlbicsIGNoYW5nZTogJ3Zpc2liaWxpdHljaGFuZ2UnIH07XG59XG5cblxuXG4vLyBBTklNQVRJT04gRlJBTUVTXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfckFGKClcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHZhciBpZCA9IF9Ccm93c2VyX3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcblx0XHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChEYXRlLm5vdygpKSk7XG5cdFx0fSk7XG5cblx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRfQnJvd3Nlcl9jYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XG5cdFx0fTtcblx0fSk7XG59XG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfbm93KClcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChEYXRlLm5vdygpKSk7XG5cdH0pO1xufVxuXG5cblxuLy8gRE9NIFNUVUZGXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfd2l0aE5vZGUoaWQsIGRvU3R1ZmYpXG57XG5cdHJldHVybiBfU2NoZWR1bGVyX2JpbmRpbmcoZnVuY3Rpb24oY2FsbGJhY2spXG5cdHtcblx0XHRfQnJvd3Nlcl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbm9kZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblx0XHRcdGNhbGxiYWNrKG5vZGVcblx0XHRcdFx0PyBfU2NoZWR1bGVyX3N1Y2NlZWQoZG9TdHVmZihub2RlKSlcblx0XHRcdFx0OiBfU2NoZWR1bGVyX2ZhaWwoJGVsbSRicm93c2VyJEJyb3dzZXIkRG9tJE5vdEZvdW5kKGlkKSlcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5cbmZ1bmN0aW9uIF9Ccm93c2VyX3dpdGhXaW5kb3coZG9TdHVmZilcbntcblx0cmV0dXJuIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdF9Ccm93c2VyX3JlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcblx0XHRcdGNhbGxiYWNrKF9TY2hlZHVsZXJfc3VjY2VlZChkb1N0dWZmKCkpKTtcblx0XHR9KTtcblx0fSk7XG59XG5cblxuLy8gRk9DVVMgYW5kIEJMVVJcblxuXG52YXIgX0Jyb3dzZXJfY2FsbCA9IEYyKGZ1bmN0aW9uKGZ1bmN0aW9uTmFtZSwgaWQpXG57XG5cdHJldHVybiBfQnJvd3Nlcl93aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSkge1xuXHRcdG5vZGVbZnVuY3Rpb25OYW1lXSgpO1xuXHRcdHJldHVybiBfVXRpbHNfVHVwbGUwO1xuXHR9KTtcbn0pO1xuXG5cblxuLy8gV0lORE9XIFZJRVdQT1JUXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfZ2V0Vmlld3BvcnQoKVxue1xuXHRyZXR1cm4ge1xuXHRcdHNjZW5lOiBfQnJvd3Nlcl9nZXRTY2VuZSgpLFxuXHRcdHZpZXdwb3J0OiB7XG5cdFx0XHR4OiBfQnJvd3Nlcl93aW5kb3cucGFnZVhPZmZzZXQsXG5cdFx0XHR5OiBfQnJvd3Nlcl93aW5kb3cucGFnZVlPZmZzZXQsXG5cdFx0XHR3aWR0aDogX0Jyb3dzZXJfZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcblx0XHRcdGhlaWdodDogX0Jyb3dzZXJfZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHRcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIF9Ccm93c2VyX2dldFNjZW5lKClcbntcblx0dmFyIGJvZHkgPSBfQnJvd3Nlcl9kb2MuYm9keTtcblx0dmFyIGVsZW0gPSBfQnJvd3Nlcl9kb2MuZG9jdW1lbnRFbGVtZW50O1xuXHRyZXR1cm4ge1xuXHRcdHdpZHRoOiBNYXRoLm1heChib2R5LnNjcm9sbFdpZHRoLCBib2R5Lm9mZnNldFdpZHRoLCBlbGVtLnNjcm9sbFdpZHRoLCBlbGVtLm9mZnNldFdpZHRoLCBlbGVtLmNsaWVudFdpZHRoKSxcblx0XHRoZWlnaHQ6IE1hdGgubWF4KGJvZHkuc2Nyb2xsSGVpZ2h0LCBib2R5Lm9mZnNldEhlaWdodCwgZWxlbS5zY3JvbGxIZWlnaHQsIGVsZW0ub2Zmc2V0SGVpZ2h0LCBlbGVtLmNsaWVudEhlaWdodClcblx0fTtcbn1cblxudmFyIF9Ccm93c2VyX3NldFZpZXdwb3J0ID0gRjIoZnVuY3Rpb24oeCwgeSlcbntcblx0cmV0dXJuIF9Ccm93c2VyX3dpdGhXaW5kb3coZnVuY3Rpb24oKVxuXHR7XG5cdFx0X0Jyb3dzZXJfd2luZG93LnNjcm9sbCh4LCB5KTtcblx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMDtcblx0fSk7XG59KTtcblxuXG5cbi8vIEVMRU1FTlQgVklFV1BPUlRcblxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9nZXRWaWV3cG9ydE9mKGlkKVxue1xuXHRyZXR1cm4gX0Jyb3dzZXJfd2l0aE5vZGUoaWQsIGZ1bmN0aW9uKG5vZGUpXG5cdHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2NlbmU6IHtcblx0XHRcdFx0d2lkdGg6IG5vZGUuc2Nyb2xsV2lkdGgsXG5cdFx0XHRcdGhlaWdodDogbm9kZS5zY3JvbGxIZWlnaHRcblx0XHRcdH0sXG5cdFx0XHR2aWV3cG9ydDoge1xuXHRcdFx0XHR4OiBub2RlLnNjcm9sbExlZnQsXG5cdFx0XHRcdHk6IG5vZGUuc2Nyb2xsVG9wLFxuXHRcdFx0XHR3aWR0aDogbm9kZS5jbGllbnRXaWR0aCxcblx0XHRcdFx0aGVpZ2h0OiBub2RlLmNsaWVudEhlaWdodFxuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xufVxuXG5cbnZhciBfQnJvd3Nlcl9zZXRWaWV3cG9ydE9mID0gRjMoZnVuY3Rpb24oaWQsIHgsIHkpXG57XG5cdHJldHVybiBfQnJvd3Nlcl93aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSlcblx0e1xuXHRcdG5vZGUuc2Nyb2xsTGVmdCA9IHg7XG5cdFx0bm9kZS5zY3JvbGxUb3AgPSB5O1xuXHRcdHJldHVybiBfVXRpbHNfVHVwbGUwO1xuXHR9KTtcbn0pO1xuXG5cblxuLy8gRUxFTUVOVFxuXG5cbmZ1bmN0aW9uIF9Ccm93c2VyX2dldEVsZW1lbnQoaWQpXG57XG5cdHJldHVybiBfQnJvd3Nlcl93aXRoTm9kZShpZCwgZnVuY3Rpb24obm9kZSlcblx0e1xuXHRcdHZhciByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR2YXIgeCA9IF9Ccm93c2VyX3dpbmRvdy5wYWdlWE9mZnNldDtcblx0XHR2YXIgeSA9IF9Ccm93c2VyX3dpbmRvdy5wYWdlWU9mZnNldDtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2NlbmU6IF9Ccm93c2VyX2dldFNjZW5lKCksXG5cdFx0XHR2aWV3cG9ydDoge1xuXHRcdFx0XHR4OiB4LFxuXHRcdFx0XHR5OiB5LFxuXHRcdFx0XHR3aWR0aDogX0Jyb3dzZXJfZG9jLmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCxcblx0XHRcdFx0aGVpZ2h0OiBfQnJvd3Nlcl9kb2MuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodFxuXHRcdFx0fSxcblx0XHRcdGVsZW1lbnQ6IHtcblx0XHRcdFx0eDogeCArIHJlY3QubGVmdCxcblx0XHRcdFx0eTogeSArIHJlY3QudG9wLFxuXHRcdFx0XHR3aWR0aDogcmVjdC53aWR0aCxcblx0XHRcdFx0aGVpZ2h0OiByZWN0LmhlaWdodFxuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xufVxuXG5cblxuLy8gTE9BRCBhbmQgUkVMT0FEXG5cblxuZnVuY3Rpb24gX0Jyb3dzZXJfcmVsb2FkKHNraXBDYWNoZSlcbntcblx0cmV0dXJuIEEyKCRlbG0kY29yZSRUYXNrJHBlcmZvcm0sICRlbG0kY29yZSRCYXNpY3MkbmV2ZXIsIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdF9WaXJ0dWFsRG9tX2RvYy5sb2NhdGlvbi5yZWxvYWQoc2tpcENhY2hlKTtcblx0fSkpO1xufVxuXG5mdW5jdGlvbiBfQnJvd3Nlcl9sb2FkKHVybClcbntcblx0cmV0dXJuIEEyKCRlbG0kY29yZSRUYXNrJHBlcmZvcm0sICRlbG0kY29yZSRCYXNpY3MkbmV2ZXIsIF9TY2hlZHVsZXJfYmluZGluZyhmdW5jdGlvbihjYWxsYmFjaylcblx0e1xuXHRcdHRyeVxuXHRcdHtcblx0XHRcdF9Ccm93c2VyX3dpbmRvdy5sb2NhdGlvbiA9IHVybDtcblx0XHR9XG5cdFx0Y2F0Y2goZXJyKVxuXHRcdHtcblx0XHRcdC8vIE9ubHkgRmlyZWZveCBjYW4gdGhyb3cgYSBOU19FUlJPUl9NQUxGT1JNRURfVVJJIGV4Y2VwdGlvbiBoZXJlLlxuXHRcdFx0Ly8gT3RoZXIgYnJvd3NlcnMgcmVsb2FkIHRoZSBwYWdlLCBzbyBsZXQncyBiZSBjb25zaXN0ZW50IGFib3V0IHRoYXQuXG5cdFx0XHRfVmlydHVhbERvbV9kb2MubG9jYXRpb24ucmVsb2FkKGZhbHNlKTtcblx0XHR9XG5cdH0pKTtcbn1cblxuXG5mdW5jdGlvbiBfVXJsX3BlcmNlbnRFbmNvZGUoc3RyaW5nKVxue1xuXHRyZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZyk7XG59XG5cbmZ1bmN0aW9uIF9VcmxfcGVyY2VudERlY29kZShzdHJpbmcpXG57XG5cdHRyeVxuXHR7XG5cdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSRKdXN0KGRlY29kZVVSSUNvbXBvbmVudChzdHJpbmcpKTtcblx0fVxuXHRjYXRjaCAoZSlcblx0e1xuXHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0fVxufXZhciAkYXV0aG9yJHByb2plY3QkTWFpbiRMaW5rQ2xpY2tlZCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0xpbmtDbGlja2VkJywgYTogYX07XG59O1xudmFyICRhdXRob3IkcHJvamVjdCRNYWluJFVybENoYW5nZWQgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdVcmxDaGFuZ2VkJywgYTogYX07XG59O1xudmFyICRlbG0kY29yZSRCYXNpY3MkRVEgPSB7JDogJ0VRJ307XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRHVCA9IHskOiAnR1QnfTtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJExUID0geyQ6ICdMVCd9O1xudmFyICRlbG0kY29yZSRMaXN0JGNvbnMgPSBfTGlzdF9jb25zO1xudmFyICRlbG0kY29yZSREaWN0JGZvbGRyID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCBhY2MsIHQpIHtcblx0XHRmb2xkcjpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKHQuJCA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdHJldHVybiBhY2M7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIga2V5ID0gdC5iO1xuXHRcdFx0XHR2YXIgdmFsdWUgPSB0LmM7XG5cdFx0XHRcdHZhciBsZWZ0ID0gdC5kO1xuXHRcdFx0XHR2YXIgcmlnaHQgPSB0LmU7XG5cdFx0XHRcdHZhciAkdGVtcCRmdW5jID0gZnVuYyxcblx0XHRcdFx0XHQkdGVtcCRhY2MgPSBBMyhcblx0XHRcdFx0XHRmdW5jLFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRBMygkZWxtJGNvcmUkRGljdCRmb2xkciwgZnVuYywgYWNjLCByaWdodCkpLFxuXHRcdFx0XHRcdCR0ZW1wJHQgPSBsZWZ0O1xuXHRcdFx0XHRmdW5jID0gJHRlbXAkZnVuYztcblx0XHRcdFx0YWNjID0gJHRlbXAkYWNjO1xuXHRcdFx0XHR0ID0gJHRlbXAkdDtcblx0XHRcdFx0Y29udGludWUgZm9sZHI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkRGljdCR0b0xpc3QgPSBmdW5jdGlvbiAoZGljdCkge1xuXHRyZXR1cm4gQTMoXG5cdFx0JGVsbSRjb3JlJERpY3QkZm9sZHIsXG5cdFx0RjMoXG5cdFx0XHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgbGlzdCkge1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRfVXRpbHNfVHVwbGUyKGtleSwgdmFsdWUpLFxuXHRcdFx0XHRcdGxpc3QpO1xuXHRcdFx0fSksXG5cdFx0X0xpc3RfTmlsLFxuXHRcdGRpY3QpO1xufTtcbnZhciAkZWxtJGNvcmUkRGljdCRrZXlzID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0cmV0dXJuIEEzKFxuXHRcdCRlbG0kY29yZSREaWN0JGZvbGRyLFxuXHRcdEYzKFxuXHRcdFx0ZnVuY3Rpb24gKGtleSwgdmFsdWUsIGtleUxpc3QpIHtcblx0XHRcdFx0cmV0dXJuIEEyKCRlbG0kY29yZSRMaXN0JGNvbnMsIGtleSwga2V5TGlzdCk7XG5cdFx0XHR9KSxcblx0XHRfTGlzdF9OaWwsXG5cdFx0ZGljdCk7XG59O1xudmFyICRlbG0kY29yZSRTZXQkdG9MaXN0ID0gZnVuY3Rpb24gKF92MCkge1xuXHR2YXIgZGljdCA9IF92MC5hO1xuXHRyZXR1cm4gJGVsbSRjb3JlJERpY3Qka2V5cyhkaWN0KTtcbn07XG52YXIgJGVsbSRjb3JlJEVsbSRKc0FycmF5JGZvbGRyID0gX0pzQXJyYXlfZm9sZHI7XG52YXIgJGVsbSRjb3JlJEFycmF5JGZvbGRyID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCBiYXNlQ2FzZSwgX3YwKSB7XG5cdFx0dmFyIHRyZWUgPSBfdjAuYztcblx0XHR2YXIgdGFpbCA9IF92MC5kO1xuXHRcdHZhciBoZWxwZXIgPSBGMihcblx0XHRcdGZ1bmN0aW9uIChub2RlLCBhY2MpIHtcblx0XHRcdFx0aWYgKG5vZGUuJCA9PT0gJ1N1YlRyZWUnKSB7XG5cdFx0XHRcdFx0dmFyIHN1YlRyZWUgPSBub2RlLmE7XG5cdFx0XHRcdFx0cmV0dXJuIEEzKCRlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkciwgaGVscGVyLCBhY2MsIHN1YlRyZWUpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciB2YWx1ZXMgPSBub2RlLmE7XG5cdFx0XHRcdFx0cmV0dXJuIEEzKCRlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkciwgZnVuYywgYWNjLCB2YWx1ZXMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHQkZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZHIsXG5cdFx0XHRoZWxwZXIsXG5cdFx0XHRBMygkZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZHIsIGZ1bmMsIGJhc2VDYXNlLCB0YWlsKSxcblx0XHRcdHRyZWUpO1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkQXJyYXkkdG9MaXN0ID0gZnVuY3Rpb24gKGFycmF5KSB7XG5cdHJldHVybiBBMygkZWxtJGNvcmUkQXJyYXkkZm9sZHIsICRlbG0kY29yZSRMaXN0JGNvbnMsIF9MaXN0X05pbCwgYXJyYXkpO1xufTtcbnZhciAkZWxtJGNvcmUkUmVzdWx0JEVyciA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0VycicsIGE6IGF9O1xufTtcbnZhciAkZWxtJGpzb24kSnNvbiREZWNvZGUkRmFpbHVyZSA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ0ZhaWx1cmUnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgJGVsbSRqc29uJEpzb24kRGVjb2RlJEZpZWxkID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnRmllbGQnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgJGVsbSRqc29uJEpzb24kRGVjb2RlJEluZGV4ID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnSW5kZXgnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJFJlc3VsdCRPayA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ09rJywgYTogYX07XG59O1xudmFyICRlbG0kanNvbiRKc29uJERlY29kZSRPbmVPZiA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ09uZU9mJywgYTogYX07XG59O1xudmFyICRlbG0kY29yZSRCYXNpY3MkRmFsc2UgPSB7JDogJ0ZhbHNlJ307XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRhZGQgPSBfQmFzaWNzX2FkZDtcbnZhciAkZWxtJGNvcmUkTWF5YmUkSnVzdCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0p1c3QnLCBhOiBhfTtcbn07XG52YXIgJGVsbSRjb3JlJE1heWJlJE5vdGhpbmcgPSB7JDogJ05vdGhpbmcnfTtcbnZhciAkZWxtJGNvcmUkU3RyaW5nJGFsbCA9IF9TdHJpbmdfYWxsO1xudmFyICRlbG0kY29yZSRCYXNpY3MkYW5kID0gX0Jhc2ljc19hbmQ7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRhcHBlbmQgPSBfVXRpbHNfYXBwZW5kO1xudmFyICRlbG0kanNvbiRKc29uJEVuY29kZSRlbmNvZGUgPSBfSnNvbl9lbmNvZGU7XG52YXIgJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50ID0gX1N0cmluZ19mcm9tTnVtYmVyO1xudmFyICRlbG0kY29yZSRTdHJpbmckam9pbiA9IEYyKFxuXHRmdW5jdGlvbiAoc2VwLCBjaHVua3MpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfU3RyaW5nX2pvaW4sXG5cdFx0XHRzZXAsXG5cdFx0XHRfTGlzdF90b0FycmF5KGNodW5rcykpO1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkU3RyaW5nJHNwbGl0ID0gRjIoXG5cdGZ1bmN0aW9uIChzZXAsIHN0cmluZykge1xuXHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRBMihfU3RyaW5nX3NwbGl0LCBzZXAsIHN0cmluZykpO1xuXHR9KTtcbnZhciAkZWxtJGpzb24kSnNvbiREZWNvZGUkaW5kZW50ID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gQTIoXG5cdFx0JGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdCdcXG4gICAgJyxcblx0XHRBMigkZWxtJGNvcmUkU3RyaW5nJHNwbGl0LCAnXFxuJywgc3RyKSk7XG59O1xudmFyICRlbG0kY29yZSRMaXN0JGZvbGRsID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCBhY2MsIGxpc3QpIHtcblx0XHRmb2xkbDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKCFsaXN0LmIpIHtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciB4ID0gbGlzdC5hO1xuXHRcdFx0XHR2YXIgeHMgPSBsaXN0LmI7XG5cdFx0XHRcdHZhciAkdGVtcCRmdW5jID0gZnVuYyxcblx0XHRcdFx0XHQkdGVtcCRhY2MgPSBBMihmdW5jLCB4LCBhY2MpLFxuXHRcdFx0XHRcdCR0ZW1wJGxpc3QgPSB4cztcblx0XHRcdFx0ZnVuYyA9ICR0ZW1wJGZ1bmM7XG5cdFx0XHRcdGFjYyA9ICR0ZW1wJGFjYztcblx0XHRcdFx0bGlzdCA9ICR0ZW1wJGxpc3Q7XG5cdFx0XHRcdGNvbnRpbnVlIGZvbGRsO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJExpc3QkbGVuZ3RoID0gZnVuY3Rpb24gKHhzKSB7XG5cdHJldHVybiBBMyhcblx0XHQkZWxtJGNvcmUkTGlzdCRmb2xkbCxcblx0XHRGMihcblx0XHRcdGZ1bmN0aW9uIChfdjAsIGkpIHtcblx0XHRcdFx0cmV0dXJuIGkgKyAxO1xuXHRcdFx0fSksXG5cdFx0MCxcblx0XHR4cyk7XG59O1xudmFyICRlbG0kY29yZSRMaXN0JG1hcDIgPSBfTGlzdF9tYXAyO1xudmFyICRlbG0kY29yZSRCYXNpY3MkbGUgPSBfVXRpbHNfbGU7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRzdWIgPSBfQmFzaWNzX3N1YjtcbnZhciAkZWxtJGNvcmUkTGlzdCRyYW5nZUhlbHAgPSBGMyhcblx0ZnVuY3Rpb24gKGxvLCBoaSwgbGlzdCkge1xuXHRcdHJhbmdlSGVscDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKF9VdGlsc19jbXAobG8sIGhpKSA8IDEpIHtcblx0XHRcdFx0dmFyICR0ZW1wJGxvID0gbG8sXG5cdFx0XHRcdFx0JHRlbXAkaGkgPSBoaSAtIDEsXG5cdFx0XHRcdFx0JHRlbXAkbGlzdCA9IEEyKCRlbG0kY29yZSRMaXN0JGNvbnMsIGhpLCBsaXN0KTtcblx0XHRcdFx0bG8gPSAkdGVtcCRsbztcblx0XHRcdFx0aGkgPSAkdGVtcCRoaTtcblx0XHRcdFx0bGlzdCA9ICR0ZW1wJGxpc3Q7XG5cdFx0XHRcdGNvbnRpbnVlIHJhbmdlSGVscDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJExpc3QkcmFuZ2UgPSBGMihcblx0ZnVuY3Rpb24gKGxvLCBoaSkge1xuXHRcdHJldHVybiBBMygkZWxtJGNvcmUkTGlzdCRyYW5nZUhlbHAsIGxvLCBoaSwgX0xpc3RfTmlsKTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJExpc3QkaW5kZXhlZE1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZiwgeHMpIHtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHQkZWxtJGNvcmUkTGlzdCRtYXAyLFxuXHRcdFx0Zixcblx0XHRcdEEyKFxuXHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRyYW5nZSxcblx0XHRcdFx0MCxcblx0XHRcdFx0JGVsbSRjb3JlJExpc3QkbGVuZ3RoKHhzKSAtIDEpLFxuXHRcdFx0eHMpO1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkQ2hhciR0b0NvZGUgPSBfQ2hhcl90b0NvZGU7XG52YXIgJGVsbSRjb3JlJENoYXIkaXNMb3dlciA9IGZ1bmN0aW9uIChfY2hhcikge1xuXHR2YXIgY29kZSA9ICRlbG0kY29yZSRDaGFyJHRvQ29kZShfY2hhcik7XG5cdHJldHVybiAoOTcgPD0gY29kZSkgJiYgKGNvZGUgPD0gMTIyKTtcbn07XG52YXIgJGVsbSRjb3JlJENoYXIkaXNVcHBlciA9IGZ1bmN0aW9uIChfY2hhcikge1xuXHR2YXIgY29kZSA9ICRlbG0kY29yZSRDaGFyJHRvQ29kZShfY2hhcik7XG5cdHJldHVybiAoY29kZSA8PSA5MCkgJiYgKDY1IDw9IGNvZGUpO1xufTtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJG9yID0gX0Jhc2ljc19vcjtcbnZhciAkZWxtJGNvcmUkQ2hhciRpc0FscGhhID0gZnVuY3Rpb24gKF9jaGFyKSB7XG5cdHJldHVybiAkZWxtJGNvcmUkQ2hhciRpc0xvd2VyKF9jaGFyKSB8fCAkZWxtJGNvcmUkQ2hhciRpc1VwcGVyKF9jaGFyKTtcbn07XG52YXIgJGVsbSRjb3JlJENoYXIkaXNEaWdpdCA9IGZ1bmN0aW9uIChfY2hhcikge1xuXHR2YXIgY29kZSA9ICRlbG0kY29yZSRDaGFyJHRvQ29kZShfY2hhcik7XG5cdHJldHVybiAoY29kZSA8PSA1NykgJiYgKDQ4IDw9IGNvZGUpO1xufTtcbnZhciAkZWxtJGNvcmUkQ2hhciRpc0FscGhhTnVtID0gZnVuY3Rpb24gKF9jaGFyKSB7XG5cdHJldHVybiAkZWxtJGNvcmUkQ2hhciRpc0xvd2VyKF9jaGFyKSB8fCAoJGVsbSRjb3JlJENoYXIkaXNVcHBlcihfY2hhcikgfHwgJGVsbSRjb3JlJENoYXIkaXNEaWdpdChfY2hhcikpO1xufTtcbnZhciAkZWxtJGNvcmUkTGlzdCRyZXZlcnNlID0gZnVuY3Rpb24gKGxpc3QpIHtcblx0cmV0dXJuIEEzKCRlbG0kY29yZSRMaXN0JGZvbGRsLCAkZWxtJGNvcmUkTGlzdCRjb25zLCBfTGlzdF9OaWwsIGxpc3QpO1xufTtcbnZhciAkZWxtJGNvcmUkU3RyaW5nJHVuY29ucyA9IF9TdHJpbmdfdW5jb25zO1xudmFyICRlbG0kanNvbiRKc29uJERlY29kZSRlcnJvck9uZU9mID0gRjIoXG5cdGZ1bmN0aW9uIChpLCBlcnJvcikge1xuXHRcdHJldHVybiAnXFxuXFxuKCcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KGkgKyAxKSArICgnKSAnICsgJGVsbSRqc29uJEpzb24kRGVjb2RlJGluZGVudChcblx0XHRcdCRlbG0kanNvbiRKc29uJERlY29kZSRlcnJvclRvU3RyaW5nKGVycm9yKSkpKTtcblx0fSk7XG52YXIgJGVsbSRqc29uJEpzb24kRGVjb2RlJGVycm9yVG9TdHJpbmcgPSBmdW5jdGlvbiAoZXJyb3IpIHtcblx0cmV0dXJuIEEyKCRlbG0kanNvbiRKc29uJERlY29kZSRlcnJvclRvU3RyaW5nSGVscCwgZXJyb3IsIF9MaXN0X05pbCk7XG59O1xudmFyICRlbG0kanNvbiRKc29uJERlY29kZSRlcnJvclRvU3RyaW5nSGVscCA9IEYyKFxuXHRmdW5jdGlvbiAoZXJyb3IsIGNvbnRleHQpIHtcblx0XHRlcnJvclRvU3RyaW5nSGVscDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0c3dpdGNoIChlcnJvci4kKSB7XG5cdFx0XHRcdGNhc2UgJ0ZpZWxkJzpcblx0XHRcdFx0XHR2YXIgZiA9IGVycm9yLmE7XG5cdFx0XHRcdFx0dmFyIGVyciA9IGVycm9yLmI7XG5cdFx0XHRcdFx0dmFyIGlzU2ltcGxlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0dmFyIF92MSA9ICRlbG0kY29yZSRTdHJpbmckdW5jb25zKGYpO1xuXHRcdFx0XHRcdFx0aWYgKF92MS4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIF92MiA9IF92MS5hO1xuXHRcdFx0XHRcdFx0XHR2YXIgX2NoYXIgPSBfdjIuYTtcblx0XHRcdFx0XHRcdFx0dmFyIHJlc3QgPSBfdjIuYjtcblx0XHRcdFx0XHRcdFx0cmV0dXJuICRlbG0kY29yZSRDaGFyJGlzQWxwaGEoX2NoYXIpICYmIEEyKCRlbG0kY29yZSRTdHJpbmckYWxsLCAkZWxtJGNvcmUkQ2hhciRpc0FscGhhTnVtLCByZXN0KTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KCk7XG5cdFx0XHRcdFx0dmFyIGZpZWxkTmFtZSA9IGlzU2ltcGxlID8gKCcuJyArIGYpIDogKCdbXFwnJyArIChmICsgJ1xcJ10nKSk7XG5cdFx0XHRcdFx0dmFyICR0ZW1wJGVycm9yID0gZXJyLFxuXHRcdFx0XHRcdFx0JHRlbXAkY29udGV4dCA9IEEyKCRlbG0kY29yZSRMaXN0JGNvbnMsIGZpZWxkTmFtZSwgY29udGV4dCk7XG5cdFx0XHRcdFx0ZXJyb3IgPSAkdGVtcCRlcnJvcjtcblx0XHRcdFx0XHRjb250ZXh0ID0gJHRlbXAkY29udGV4dDtcblx0XHRcdFx0XHRjb250aW51ZSBlcnJvclRvU3RyaW5nSGVscDtcblx0XHRcdFx0Y2FzZSAnSW5kZXgnOlxuXHRcdFx0XHRcdHZhciBpID0gZXJyb3IuYTtcblx0XHRcdFx0XHR2YXIgZXJyID0gZXJyb3IuYjtcblx0XHRcdFx0XHR2YXIgaW5kZXhOYW1lID0gJ1snICsgKCRlbG0kY29yZSRTdHJpbmckZnJvbUludChpKSArICddJyk7XG5cdFx0XHRcdFx0dmFyICR0ZW1wJGVycm9yID0gZXJyLFxuXHRcdFx0XHRcdFx0JHRlbXAkY29udGV4dCA9IEEyKCRlbG0kY29yZSRMaXN0JGNvbnMsIGluZGV4TmFtZSwgY29udGV4dCk7XG5cdFx0XHRcdFx0ZXJyb3IgPSAkdGVtcCRlcnJvcjtcblx0XHRcdFx0XHRjb250ZXh0ID0gJHRlbXAkY29udGV4dDtcblx0XHRcdFx0XHRjb250aW51ZSBlcnJvclRvU3RyaW5nSGVscDtcblx0XHRcdFx0Y2FzZSAnT25lT2YnOlxuXHRcdFx0XHRcdHZhciBlcnJvcnMgPSBlcnJvci5hO1xuXHRcdFx0XHRcdGlmICghZXJyb3JzLmIpIHtcblx0XHRcdFx0XHRcdHJldHVybiAnUmFuIGludG8gYSBKc29uLkRlY29kZS5vbmVPZiB3aXRoIG5vIHBvc3NpYmlsaXRpZXMnICsgZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoIWNvbnRleHQuYikge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAnISc7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuICcgYXQganNvbicgKyBBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0XHRcdCcnLFxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkcmV2ZXJzZShjb250ZXh0KSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0oKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aWYgKCFlcnJvcnMuYi5iKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBlcnIgPSBlcnJvcnMuYTtcblx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJGVycm9yID0gZXJyLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJGNvbnRleHQgPSBjb250ZXh0O1xuXHRcdFx0XHRcdFx0XHRlcnJvciA9ICR0ZW1wJGVycm9yO1xuXHRcdFx0XHRcdFx0XHRjb250ZXh0ID0gJHRlbXAkY29udGV4dDtcblx0XHRcdFx0XHRcdFx0Y29udGludWUgZXJyb3JUb1N0cmluZ0hlbHA7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHR2YXIgc3RhcnRlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIWNvbnRleHQuYikge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuICdKc29uLkRlY29kZS5vbmVPZic7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAnVGhlIEpzb24uRGVjb2RlLm9uZU9mIGF0IGpzb24nICsgQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckam9pbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0JycsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JHJldmVyc2UoY29udGV4dCkpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSgpO1xuXHRcdFx0XHRcdFx0XHR2YXIgaW50cm9kdWN0aW9uID0gc3RhcnRlciArICgnIGZhaWxlZCBpbiB0aGUgZm9sbG93aW5nICcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGxlbmd0aChlcnJvcnMpKSArICcgd2F5czonKSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHRcdFx0XHRcdFx0J1xcblxcbicsXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0aW50cm9kdWN0aW9uLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRjb3JlJExpc3QkaW5kZXhlZE1hcCwgJGVsbSRqc29uJEpzb24kRGVjb2RlJGVycm9yT25lT2YsIGVycm9ycykpKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0dmFyIG1zZyA9IGVycm9yLmE7XG5cdFx0XHRcdFx0dmFyIGpzb24gPSBlcnJvci5iO1xuXHRcdFx0XHRcdHZhciBpbnRyb2R1Y3Rpb24gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAoIWNvbnRleHQuYikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gJ1Byb2JsZW0gd2l0aCB0aGUgZ2l2ZW4gdmFsdWU6XFxuXFxuJztcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAnUHJvYmxlbSB3aXRoIHRoZSB2YWx1ZSBhdCBqc29uJyArIChBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGpvaW4sXG5cdFx0XHRcdFx0XHRcdFx0JycsXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkcmV2ZXJzZShjb250ZXh0KSkgKyAnOlxcblxcbiAgICAnKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KCk7XG5cdFx0XHRcdFx0cmV0dXJuIGludHJvZHVjdGlvbiArICgkZWxtJGpzb24kSnNvbiREZWNvZGUkaW5kZW50KFxuXHRcdFx0XHRcdFx0QTIoJGVsbSRqc29uJEpzb24kRW5jb2RlJGVuY29kZSwgNCwganNvbikpICsgKCdcXG5cXG4nICsgbXNnKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yID0gMzI7XG52YXIgJGVsbSRjb3JlJEFycmF5JEFycmF5X2VsbV9idWlsdGluID0gRjQoXG5cdGZ1bmN0aW9uIChhLCBiLCBjLCBkKSB7XG5cdFx0cmV0dXJuIHskOiAnQXJyYXlfZWxtX2J1aWx0aW4nLCBhOiBhLCBiOiBiLCBjOiBjLCBkOiBkfTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJEVsbSRKc0FycmF5JGVtcHR5ID0gX0pzQXJyYXlfZW1wdHk7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRjZWlsaW5nID0gX0Jhc2ljc19jZWlsaW5nO1xudmFyICRlbG0kY29yZSRCYXNpY3MkZmRpdiA9IF9CYXNpY3NfZmRpdjtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJGxvZ0Jhc2UgPSBGMihcblx0ZnVuY3Rpb24gKGJhc2UsIG51bWJlcikge1xuXHRcdHJldHVybiBfQmFzaWNzX2xvZyhudW1iZXIpIC8gX0Jhc2ljc19sb2coYmFzZSk7XG5cdH0pO1xudmFyICRlbG0kY29yZSRCYXNpY3MkdG9GbG9hdCA9IF9CYXNpY3NfdG9GbG9hdDtcbnZhciAkZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwID0gJGVsbSRjb3JlJEJhc2ljcyRjZWlsaW5nKFxuXHRBMigkZWxtJGNvcmUkQmFzaWNzJGxvZ0Jhc2UsIDIsICRlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IpKTtcbnZhciAkZWxtJGNvcmUkQXJyYXkkZW1wdHkgPSBBNCgkZWxtJGNvcmUkQXJyYXkkQXJyYXlfZWxtX2J1aWx0aW4sIDAsICRlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAsICRlbG0kY29yZSRFbG0kSnNBcnJheSRlbXB0eSwgJGVsbSRjb3JlJEVsbSRKc0FycmF5JGVtcHR5KTtcbnZhciAkZWxtJGNvcmUkRWxtJEpzQXJyYXkkaW5pdGlhbGl6ZSA9IF9Kc0FycmF5X2luaXRpYWxpemU7XG52YXIgJGVsbSRjb3JlJEFycmF5JExlYWYgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdMZWFmJywgYTogYX07XG59O1xudmFyICRlbG0kY29yZSRCYXNpY3MkYXBMID0gRjIoXG5cdGZ1bmN0aW9uIChmLCB4KSB7XG5cdFx0cmV0dXJuIGYoeCk7XG5cdH0pO1xudmFyICRlbG0kY29yZSRCYXNpY3MkYXBSID0gRjIoXG5cdGZ1bmN0aW9uICh4LCBmKSB7XG5cdFx0cmV0dXJuIGYoeCk7XG5cdH0pO1xudmFyICRlbG0kY29yZSRCYXNpY3MkZXEgPSBfVXRpbHNfZXF1YWw7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRmbG9vciA9IF9CYXNpY3NfZmxvb3I7XG52YXIgJGVsbSRjb3JlJEVsbSRKc0FycmF5JGxlbmd0aCA9IF9Kc0FycmF5X2xlbmd0aDtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJGd0ID0gX1V0aWxzX2d0O1xudmFyICRlbG0kY29yZSRCYXNpY3MkbWF4ID0gRjIoXG5cdGZ1bmN0aW9uICh4LCB5KSB7XG5cdFx0cmV0dXJuIChfVXRpbHNfY21wKHgsIHkpID4gMCkgPyB4IDogeTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRtdWwgPSBfQmFzaWNzX211bDtcbnZhciAkZWxtJGNvcmUkQXJyYXkkU3ViVHJlZSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ1N1YlRyZWUnLCBhOiBhfTtcbn07XG52YXIgJGVsbSRjb3JlJEVsbSRKc0FycmF5JGluaXRpYWxpemVGcm9tTGlzdCA9IF9Kc0FycmF5X2luaXRpYWxpemVGcm9tTGlzdDtcbnZhciAkZWxtJGNvcmUkQXJyYXkkY29tcHJlc3NOb2RlcyA9IEYyKFxuXHRmdW5jdGlvbiAobm9kZXMsIGFjYykge1xuXHRcdGNvbXByZXNzTm9kZXM6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdHZhciBfdjAgPSBBMigkZWxtJGNvcmUkRWxtJEpzQXJyYXkkaW5pdGlhbGl6ZUZyb21MaXN0LCAkZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yLCBub2Rlcyk7XG5cdFx0XHR2YXIgbm9kZSA9IF92MC5hO1xuXHRcdFx0dmFyIHJlbWFpbmluZ05vZGVzID0gX3YwLmI7XG5cdFx0XHR2YXIgbmV3QWNjID0gQTIoXG5cdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdCRlbG0kY29yZSRBcnJheSRTdWJUcmVlKG5vZGUpLFxuXHRcdFx0XHRhY2MpO1xuXHRcdFx0aWYgKCFyZW1haW5pbmdOb2Rlcy5iKSB7XG5cdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkTGlzdCRyZXZlcnNlKG5ld0FjYyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgJHRlbXAkbm9kZXMgPSByZW1haW5pbmdOb2Rlcyxcblx0XHRcdFx0XHQkdGVtcCRhY2MgPSBuZXdBY2M7XG5cdFx0XHRcdG5vZGVzID0gJHRlbXAkbm9kZXM7XG5cdFx0XHRcdGFjYyA9ICR0ZW1wJGFjYztcblx0XHRcdFx0Y29udGludWUgY29tcHJlc3NOb2Rlcztcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyICRlbG0kY29yZSRUdXBsZSRmaXJzdCA9IGZ1bmN0aW9uIChfdjApIHtcblx0dmFyIHggPSBfdjAuYTtcblx0cmV0dXJuIHg7XG59O1xudmFyICRlbG0kY29yZSRBcnJheSR0cmVlRnJvbUJ1aWxkZXIgPSBGMihcblx0ZnVuY3Rpb24gKG5vZGVMaXN0LCBub2RlTGlzdFNpemUpIHtcblx0XHR0cmVlRnJvbUJ1aWxkZXI6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdHZhciBuZXdOb2RlU2l6ZSA9ICRlbG0kY29yZSRCYXNpY3MkY2VpbGluZyhub2RlTGlzdFNpemUgLyAkZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yKTtcblx0XHRcdGlmIChuZXdOb2RlU2l6ZSA9PT0gMSkge1xuXHRcdFx0XHRyZXR1cm4gQTIoJGVsbSRjb3JlJEVsbSRKc0FycmF5JGluaXRpYWxpemVGcm9tTGlzdCwgJGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3Rvciwgbm9kZUxpc3QpLmE7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgJHRlbXAkbm9kZUxpc3QgPSBBMigkZWxtJGNvcmUkQXJyYXkkY29tcHJlc3NOb2Rlcywgbm9kZUxpc3QsIF9MaXN0X05pbCksXG5cdFx0XHRcdFx0JHRlbXAkbm9kZUxpc3RTaXplID0gbmV3Tm9kZVNpemU7XG5cdFx0XHRcdG5vZGVMaXN0ID0gJHRlbXAkbm9kZUxpc3Q7XG5cdFx0XHRcdG5vZGVMaXN0U2l6ZSA9ICR0ZW1wJG5vZGVMaXN0U2l6ZTtcblx0XHRcdFx0Y29udGludWUgdHJlZUZyb21CdWlsZGVyO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJEFycmF5JGJ1aWxkZXJUb0FycmF5ID0gRjIoXG5cdGZ1bmN0aW9uIChyZXZlcnNlTm9kZUxpc3QsIGJ1aWxkZXIpIHtcblx0XHRpZiAoIWJ1aWxkZXIubm9kZUxpc3RTaXplKSB7XG5cdFx0XHRyZXR1cm4gQTQoXG5cdFx0XHRcdCRlbG0kY29yZSRBcnJheSRBcnJheV9lbG1fYnVpbHRpbixcblx0XHRcdFx0JGVsbSRjb3JlJEVsbSRKc0FycmF5JGxlbmd0aChidWlsZGVyLnRhaWwpLFxuXHRcdFx0XHQkZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwLFxuXHRcdFx0XHQkZWxtJGNvcmUkRWxtJEpzQXJyYXkkZW1wdHksXG5cdFx0XHRcdGJ1aWxkZXIudGFpbCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciB0cmVlTGVuID0gYnVpbGRlci5ub2RlTGlzdFNpemUgKiAkZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yO1xuXHRcdFx0dmFyIGRlcHRoID0gJGVsbSRjb3JlJEJhc2ljcyRmbG9vcihcblx0XHRcdFx0QTIoJGVsbSRjb3JlJEJhc2ljcyRsb2dCYXNlLCAkZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yLCB0cmVlTGVuIC0gMSkpO1xuXHRcdFx0dmFyIGNvcnJlY3ROb2RlTGlzdCA9IHJldmVyc2VOb2RlTGlzdCA/ICRlbG0kY29yZSRMaXN0JHJldmVyc2UoYnVpbGRlci5ub2RlTGlzdCkgOiBidWlsZGVyLm5vZGVMaXN0O1xuXHRcdFx0dmFyIHRyZWUgPSBBMigkZWxtJGNvcmUkQXJyYXkkdHJlZUZyb21CdWlsZGVyLCBjb3JyZWN0Tm9kZUxpc3QsIGJ1aWxkZXIubm9kZUxpc3RTaXplKTtcblx0XHRcdHJldHVybiBBNChcblx0XHRcdFx0JGVsbSRjb3JlJEFycmF5JEFycmF5X2VsbV9idWlsdGluLFxuXHRcdFx0XHQkZWxtJGNvcmUkRWxtJEpzQXJyYXkkbGVuZ3RoKGJ1aWxkZXIudGFpbCkgKyB0cmVlTGVuLFxuXHRcdFx0XHRBMigkZWxtJGNvcmUkQmFzaWNzJG1heCwgNSwgZGVwdGggKiAkZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwKSxcblx0XHRcdFx0dHJlZSxcblx0XHRcdFx0YnVpbGRlci50YWlsKTtcblx0XHR9XG5cdH0pO1xudmFyICRlbG0kY29yZSRCYXNpY3MkaWRpdiA9IF9CYXNpY3NfaWRpdjtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJGx0ID0gX1V0aWxzX2x0O1xudmFyICRlbG0kY29yZSRBcnJheSRpbml0aWFsaXplSGVscCA9IEY1KFxuXHRmdW5jdGlvbiAoZm4sIGZyb21JbmRleCwgbGVuLCBub2RlTGlzdCwgdGFpbCkge1xuXHRcdGluaXRpYWxpemVIZWxwOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAoZnJvbUluZGV4IDwgMCkge1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJEFycmF5JGJ1aWxkZXJUb0FycmF5LFxuXHRcdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRcdHtub2RlTGlzdDogbm9kZUxpc3QsIG5vZGVMaXN0U2l6ZTogKGxlbiAvICRlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IpIHwgMCwgdGFpbDogdGFpbH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGxlYWYgPSAkZWxtJGNvcmUkQXJyYXkkTGVhZihcblx0XHRcdFx0XHRBMygkZWxtJGNvcmUkRWxtJEpzQXJyYXkkaW5pdGlhbGl6ZSwgJGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3RvciwgZnJvbUluZGV4LCBmbikpO1xuXHRcdFx0XHR2YXIgJHRlbXAkZm4gPSBmbixcblx0XHRcdFx0XHQkdGVtcCRmcm9tSW5kZXggPSBmcm9tSW5kZXggLSAkZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yLFxuXHRcdFx0XHRcdCR0ZW1wJGxlbiA9IGxlbixcblx0XHRcdFx0XHQkdGVtcCRub2RlTGlzdCA9IEEyKCRlbG0kY29yZSRMaXN0JGNvbnMsIGxlYWYsIG5vZGVMaXN0KSxcblx0XHRcdFx0XHQkdGVtcCR0YWlsID0gdGFpbDtcblx0XHRcdFx0Zm4gPSAkdGVtcCRmbjtcblx0XHRcdFx0ZnJvbUluZGV4ID0gJHRlbXAkZnJvbUluZGV4O1xuXHRcdFx0XHRsZW4gPSAkdGVtcCRsZW47XG5cdFx0XHRcdG5vZGVMaXN0ID0gJHRlbXAkbm9kZUxpc3Q7XG5cdFx0XHRcdHRhaWwgPSAkdGVtcCR0YWlsO1xuXHRcdFx0XHRjb250aW51ZSBpbml0aWFsaXplSGVscDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyICRlbG0kY29yZSRCYXNpY3MkcmVtYWluZGVyQnkgPSBfQmFzaWNzX3JlbWFpbmRlckJ5O1xudmFyICRlbG0kY29yZSRBcnJheSRpbml0aWFsaXplID0gRjIoXG5cdGZ1bmN0aW9uIChsZW4sIGZuKSB7XG5cdFx0aWYgKGxlbiA8PSAwKSB7XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJEFycmF5JGVtcHR5O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgdGFpbExlbiA9IGxlbiAlICRlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3I7XG5cdFx0XHR2YXIgdGFpbCA9IEEzKCRlbG0kY29yZSRFbG0kSnNBcnJheSRpbml0aWFsaXplLCB0YWlsTGVuLCBsZW4gLSB0YWlsTGVuLCBmbik7XG5cdFx0XHR2YXIgaW5pdGlhbEZyb21JbmRleCA9IChsZW4gLSB0YWlsTGVuKSAtICRlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3I7XG5cdFx0XHRyZXR1cm4gQTUoJGVsbSRjb3JlJEFycmF5JGluaXRpYWxpemVIZWxwLCBmbiwgaW5pdGlhbEZyb21JbmRleCwgbGVuLCBfTGlzdF9OaWwsIHRhaWwpO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRUcnVlID0geyQ6ICdUcnVlJ307XG52YXIgJGVsbSRjb3JlJFJlc3VsdCRpc09rID0gZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRpZiAocmVzdWx0LiQgPT09ICdPaycpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgJGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcCA9IF9Kc29uX21hcDE7XG52YXIgJGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcDIgPSBfSnNvbl9tYXAyO1xudmFyICRlbG0kanNvbiRKc29uJERlY29kZSRzdWNjZWVkID0gX0pzb25fc3VjY2VlZDtcbnZhciAkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kdG9IYW5kbGVySW50ID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcblx0c3dpdGNoIChoYW5kbGVyLiQpIHtcblx0XHRjYXNlICdOb3JtYWwnOlxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0Y2FzZSAnTWF5U3RvcFByb3BhZ2F0aW9uJzpcblx0XHRcdHJldHVybiAxO1xuXHRcdGNhc2UgJ01heVByZXZlbnREZWZhdWx0Jzpcblx0XHRcdHJldHVybiAyO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gMztcblx0fVxufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRBcnJheVNlcSA9IHskOiAnQXJyYXlTZXEnfTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja01vc3QgPSB7JDogJ0Jsb2NrTW9zdCd9O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJsb2NrTm9uZSA9IHskOiAnQmxvY2tOb25lJ307XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kQ29uc3RydWN0b3IgPSBGMyhcblx0ZnVuY3Rpb24gKGEsIGIsIGMpIHtcblx0XHRyZXR1cm4geyQ6ICdDb25zdHJ1Y3RvcicsIGE6IGEsIGI6IGIsIGM6IGN9O1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyREaWN0aW9uYXJ5ID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnRGljdGlvbmFyeScsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiREb3duID0geyQ6ICdEb3duJ307XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kTGlzdFNlcSA9IHskOiAnTGlzdFNlcSd9O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJE5vT3AgPSB7JDogJ05vT3AnfTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRQcmltaXRpdmUgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdQcmltaXRpdmUnLCBhOiBhfTtcbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUmVjb3JkID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnUmVjb3JkJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFMgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdTJywgYTogYX07XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFNlcXVlbmNlID0gRjMoXG5cdGZ1bmN0aW9uIChhLCBiLCBjKSB7XG5cdFx0cmV0dXJuIHskOiAnU2VxdWVuY2UnLCBhOiBhLCBiOiBiLCBjOiBjfTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2V0U2VxID0geyQ6ICdTZXRTZXEnfTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVcCA9IHskOiAnVXAnfTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVc2VyTXNnID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnVXNlck1zZycsIGE6IGF9O1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRFeHBvcnQgPSB7JDogJ0V4cG9ydCd9O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJEltcG9ydCA9IHskOiAnSW1wb3J0J307XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kT3BlbiA9IHskOiAnT3Blbid9O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJE92ZXJsYXlNc2cgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdPdmVybGF5TXNnJywgYTogYX07XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFJlc3VtZSA9IHskOiAnUmVzdW1lJ307XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kaXNQYXVzZWQgPSBmdW5jdGlvbiAoc3RhdGUpIHtcblx0aWYgKHN0YXRlLiQgPT09ICdSdW5uaW5nJykge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRzaXplID0gZnVuY3Rpb24gKGhpc3RvcnkpIHtcblx0cmV0dXJuIGhpc3RvcnkubnVtTWVzc2FnZXM7XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEFjY2VwdCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0FjY2VwdCcsIGE6IGF9O1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRDaG9vc2UgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdDaG9vc2UnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgJGVsbSRodG1sJEh0bWwkZGl2ID0gX1ZpcnR1YWxEb21fbm9kZSgnZGl2Jyk7XG52YXIgJGVsbSRqc29uJEpzb24kRW5jb2RlJHN0cmluZyA9IF9Kc29uX3dyYXA7XG52YXIgJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSA9IEYyKFxuXHRmdW5jdGlvbiAoa2V5LCBzdHJpbmcpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHRfVmlydHVhbERvbV9wcm9wZXJ0eSxcblx0XHRcdGtleSxcblx0XHRcdCRlbG0kanNvbiRKc29uJEVuY29kZSRzdHJpbmcoc3RyaW5nKSk7XG5cdH0pO1xudmFyICRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaWQgPSAkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5KCdpZCcpO1xudmFyICRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSROb3JtYWwgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdOb3JtYWwnLCBhOiBhfTtcbn07XG52YXIgJGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG9uID0gX1ZpcnR1YWxEb21fb247XG52YXIgJGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uID0gRjIoXG5cdGZ1bmN0aW9uIChldmVudCwgZGVjb2Rlcikge1xuXHRcdHJldHVybiBBMihcblx0XHRcdCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRvbixcblx0XHRcdGV2ZW50LFxuXHRcdFx0JGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJE5vcm1hbChkZWNvZGVyKSk7XG5cdH0pO1xudmFyICRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrID0gZnVuY3Rpb24gKG1zZykge1xuXHRyZXR1cm4gQTIoXG5cdFx0JGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uLFxuXHRcdCdjbGljaycsXG5cdFx0JGVsbSRqc29uJEpzb24kRGVjb2RlJHN1Y2NlZWQobXNnKSk7XG59O1xudmFyICRlbG0kaHRtbCRIdG1sJHNwYW4gPSBfVmlydHVhbERvbV9ub2RlKCdzcGFuJyk7XG52YXIgJGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJHN0eWxlID0gX1ZpcnR1YWxEb21fc3R5bGU7XG52YXIgJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSA9ICRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRzdHlsZTtcbnZhciAkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kdGV4dCA9IF9WaXJ0dWFsRG9tX3RleHQ7XG52YXIgJGVsbSRodG1sJEh0bWwkdGV4dCA9ICRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSR0ZXh0O1xudmFyICRlbG0kaHRtbCRIdG1sJGEgPSBfVmlydHVhbERvbV9ub2RlKCdhJyk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkZ29vZE5ld3MxID0gJ1xcblRoZSBnb29kIG5ld3MgaXMgdGhhdCBoYXZpbmcgdmFsdWVzIGxpa2UgdGhpcyBpbiB5b3VyIG1lc3NhZ2UgdHlwZSBpcyBub3RcXG5zbyBncmVhdCBpbiB0aGUgbG9uZyBydW4uIFlvdSBhcmUgYmV0dGVyIG9mZiB1c2luZyBzaW1wbGVyIGRhdGEsIGxpa2VcXG4nO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGdvb2ROZXdzMiA9ICdcXG5mdW5jdGlvbiBjYW4gcGF0dGVybiBtYXRjaCBvbiB0aGF0IGRhdGEgYW5kIGNhbGwgd2hhdGV2ZXIgZnVuY3Rpb25zLCBKU09OXFxuZGVjb2RlcnMsIGV0Yy4geW91IG5lZWQuIFRoaXMgbWFrZXMgdGhlIGNvZGUgbXVjaCBtb3JlIGV4cGxpY2l0IGFuZCBlYXN5IHRvXFxuZm9sbG93IGZvciBvdGhlciByZWFkZXJzIChvciB5b3UgaW4gYSBmZXcgbW9udGhzISlcXG4nO1xudmFyICRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaHJlZiA9IGZ1bmN0aW9uICh1cmwpIHtcblx0cmV0dXJuIEEyKFxuXHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHksXG5cdFx0J2hyZWYnLFxuXHRcdF9WaXJ0dWFsRG9tX25vSmF2YVNjcmlwdFVyaSh1cmwpKTtcbn07XG52YXIgJGVsbSRjb3JlJExpc3QkZm9sZHJIZWxwZXIgPSBGNChcblx0ZnVuY3Rpb24gKGZuLCBhY2MsIGN0ciwgbHMpIHtcblx0XHRpZiAoIWxzLmIpIHtcblx0XHRcdHJldHVybiBhY2M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBhID0gbHMuYTtcblx0XHRcdHZhciByMSA9IGxzLmI7XG5cdFx0XHRpZiAoIXIxLmIpIHtcblx0XHRcdFx0cmV0dXJuIEEyKGZuLCBhLCBhY2MpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGIgPSByMS5hO1xuXHRcdFx0XHR2YXIgcjIgPSByMS5iO1xuXHRcdFx0XHRpZiAoIXIyLmIpIHtcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRmbixcblx0XHRcdFx0XHRcdGEsXG5cdFx0XHRcdFx0XHRBMihmbiwgYiwgYWNjKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIGMgPSByMi5hO1xuXHRcdFx0XHRcdHZhciByMyA9IHIyLmI7XG5cdFx0XHRcdFx0aWYgKCFyMy5iKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdGZuLFxuXHRcdFx0XHRcdFx0XHRhLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRmbixcblx0XHRcdFx0XHRcdFx0XHRiLFxuXHRcdFx0XHRcdFx0XHRcdEEyKGZuLCBjLCBhY2MpKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBkID0gcjMuYTtcblx0XHRcdFx0XHRcdHZhciByNCA9IHIzLmI7XG5cdFx0XHRcdFx0XHR2YXIgcmVzID0gKGN0ciA+IDUwMCkgPyBBMyhcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0XHRcdFx0XHRcdGZuLFxuXHRcdFx0XHRcdFx0XHRhY2MsXG5cdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JHJldmVyc2UocjQpKSA6IEE0KCRlbG0kY29yZSRMaXN0JGZvbGRySGVscGVyLCBmbiwgYWNjLCBjdHIgKyAxLCByNCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdGZuLFxuXHRcdFx0XHRcdFx0XHRhLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRmbixcblx0XHRcdFx0XHRcdFx0XHRiLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0Zm4sXG5cdFx0XHRcdFx0XHRcdFx0XHRjLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoZm4sIGQsIHJlcykpKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkTGlzdCRmb2xkciA9IEYzKFxuXHRmdW5jdGlvbiAoZm4sIGFjYywgbHMpIHtcblx0XHRyZXR1cm4gQTQoJGVsbSRjb3JlJExpc3QkZm9sZHJIZWxwZXIsIGZuLCBhY2MsIDAsIGxzKTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJExpc3QkbWFwID0gRjIoXG5cdGZ1bmN0aW9uIChmLCB4cykge1xuXHRcdHJldHVybiBBMyhcblx0XHRcdCRlbG0kY29yZSRMaXN0JGZvbGRyLFxuXHRcdFx0RjIoXG5cdFx0XHRcdGZ1bmN0aW9uICh4LCBhY2MpIHtcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0Zih4KSxcblx0XHRcdFx0XHRcdGFjYyk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0eHMpO1xuXHR9KTtcbnZhciAkZWxtJGh0bWwkSHRtbCRwID0gX1ZpcnR1YWxEb21fbm9kZSgncCcpO1xudmFyICRlbG0kaHRtbCRIdG1sJHVsID0gX1ZpcnR1YWxEb21fbm9kZSgndWwnKTtcbnZhciAkZWxtJGh0bWwkSHRtbCRjb2RlID0gX1ZpcnR1YWxEb21fbm9kZSgnY29kZScpO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdDb2RlID0gZnVuY3Rpb24gKG5hbWUpIHtcblx0cmV0dXJuIEEyKFxuXHRcdCRlbG0kaHRtbCRIdG1sJGNvZGUsXG5cdFx0X0xpc3RfTmlsLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dChuYW1lKVxuXHRcdFx0XSkpO1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRhZGRDb21tYXMgPSBmdW5jdGlvbiAoaXRlbXMpIHtcblx0aWYgKCFpdGVtcy5iKSB7XG5cdFx0cmV0dXJuICcnO1xuXHR9IGVsc2Uge1xuXHRcdGlmICghaXRlbXMuYi5iKSB7XG5cdFx0XHR2YXIgaXRlbSA9IGl0ZW1zLmE7XG5cdFx0XHRyZXR1cm4gaXRlbTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCFpdGVtcy5iLmIuYikge1xuXHRcdFx0XHR2YXIgaXRlbTEgPSBpdGVtcy5hO1xuXHRcdFx0XHR2YXIgX3YxID0gaXRlbXMuYjtcblx0XHRcdFx0dmFyIGl0ZW0yID0gX3YxLmE7XG5cdFx0XHRcdHJldHVybiBpdGVtMSArICgnIGFuZCAnICsgaXRlbTIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGxhc3RJdGVtID0gaXRlbXMuYTtcblx0XHRcdFx0dmFyIG90aGVySXRlbXMgPSBpdGVtcy5iO1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRqb2luLFxuXHRcdFx0XHRcdCcsICcsXG5cdFx0XHRcdFx0X1V0aWxzX2FwKFxuXHRcdFx0XHRcdFx0b3RoZXJJdGVtcyxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0WycgYW5kICcgKyBsYXN0SXRlbV0pKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xudmFyICRlbG0kaHRtbCRIdG1sJGxpID0gX1ZpcnR1YWxEb21fbm9kZSgnbGknKTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRwcm9ibGVtVG9TdHJpbmcgPSBmdW5jdGlvbiAocHJvYmxlbSkge1xuXHRzd2l0Y2ggKHByb2JsZW0uJCkge1xuXHRcdGNhc2UgJ0Z1bmN0aW9uJzpcblx0XHRcdHJldHVybiAnZnVuY3Rpb25zJztcblx0XHRjYXNlICdEZWNvZGVyJzpcblx0XHRcdHJldHVybiAnSlNPTiBkZWNvZGVycyc7XG5cdFx0Y2FzZSAnVGFzayc6XG5cdFx0XHRyZXR1cm4gJ3Rhc2tzJztcblx0XHRjYXNlICdQcm9jZXNzJzpcblx0XHRcdHJldHVybiAncHJvY2Vzc2VzJztcblx0XHRjYXNlICdTb2NrZXQnOlxuXHRcdFx0cmV0dXJuICd3ZWIgc29ja2V0cyc7XG5cdFx0Y2FzZSAnUmVxdWVzdCc6XG5cdFx0XHRyZXR1cm4gJ0hUVFAgcmVxdWVzdHMnO1xuXHRcdGNhc2UgJ1Byb2dyYW0nOlxuXHRcdFx0cmV0dXJuICdwcm9ncmFtcyc7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHJldHVybiAndmlydHVhbCBET00gdmFsdWVzJztcblx0fVxufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3UHJvYmxlbVR5cGUgPSBmdW5jdGlvbiAoX3YwKSB7XG5cdHZhciBuYW1lID0gX3YwLm5hbWU7XG5cdHZhciBwcm9ibGVtcyA9IF92MC5wcm9ibGVtcztcblx0cmV0dXJuIEEyKFxuXHRcdCRlbG0kaHRtbCRIdG1sJGxpLFxuXHRcdF9MaXN0X05pbCxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdDb2RlKG5hbWUpLFxuXHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KFxuXHRcdFx0XHQnIGNhbiBjb250YWluICcgKyAoJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkYWRkQ29tbWFzKFxuXHRcdFx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JG1hcCwgJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkcHJvYmxlbVRvU3RyaW5nLCBwcm9ibGVtcykpICsgJy4nKSlcblx0XHRcdF0pKTtcbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0JhZE1ldGFkYXRhID0gZnVuY3Rpb24gKF92MCkge1xuXHR2YXIgbWVzc2FnZSA9IF92MC5tZXNzYWdlO1xuXHR2YXIgcHJvYmxlbXMgPSBfdjAucHJvYmxlbXM7XG5cdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0W1xuXHRcdFx0QTIoXG5cdFx0XHQkZWxtJGh0bWwkSHRtbCRwLFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnVGhlICcpLFxuXHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdDb2RlKG1lc3NhZ2UpLFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJyB0eXBlIG9mIHlvdXIgcHJvZ3JhbSBjYW5ub3QgYmUgcmVsaWFibHkgc2VyaWFsaXplZCBmb3IgaGlzdG9yeSBmaWxlcy4nKVxuXHRcdFx0XHRdKSksXG5cdFx0XHRBMihcblx0XHRcdCRlbG0kaHRtbCRIdG1sJHAsXG5cdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCdGdW5jdGlvbnMgY2Fubm90IGJlIHNlcmlhbGl6ZWQsIG5vciBjYW4gdmFsdWVzIHRoYXQgY29udGFpbiBmdW5jdGlvbnMuIFRoaXMgaXMgYSBwcm9ibGVtIGluIHRoZXNlIHBsYWNlczonKVxuXHRcdFx0XHRdKSksXG5cdFx0XHRBMihcblx0XHRcdCRlbG0kaHRtbCRIdG1sJHVsLFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0QTIoJGVsbSRjb3JlJExpc3QkbWFwLCAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3UHJvYmxlbVR5cGUsIHByb2JsZW1zKSksXG5cdFx0XHRBMihcblx0XHRcdCRlbG0kaHRtbCRIdG1sJHAsXG5cdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGdvb2ROZXdzMSksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkYSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaHJlZignaHR0cHM6Ly9ndWlkZS5lbG0tbGFuZy5vcmcvdHlwZXMvY3VzdG9tX3R5cGVzLmh0bWwnKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCdjdXN0b20gdHlwZXMnKVxuXHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJywgaW4geW91ciBtZXNzYWdlcy4gRnJvbSB0aGVyZSwgeW91ciAnKSxcblx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3Q29kZSgndXBkYXRlJyksXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRnb29kTmV3czIpXG5cdFx0XHRcdF0pKVxuXHRcdF0pO1xufTtcbnZhciAkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbWFwID0gX1ZpcnR1YWxEb21fbWFwO1xudmFyICRlbG0kaHRtbCRIdG1sJG1hcCA9ICRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRtYXA7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQ2FuY2VsID0geyQ6ICdDYW5jZWwnfTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRQcm9jZWVkID0geyQ6ICdQcm9jZWVkJ307XG52YXIgJGVsbSRodG1sJEh0bWwkYnV0dG9uID0gX1ZpcnR1YWxEb21fbm9kZSgnYnV0dG9uJyk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0J1dHRvbnMgPSBmdW5jdGlvbiAoYnV0dG9ucykge1xuXHR2YXIgYnRuID0gRjIoXG5cdFx0ZnVuY3Rpb24gKG1zZywgc3RyaW5nKSB7XG5cdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGJ1dHRvbixcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdtYXJnaW4tcmlnaHQnLCAnMjBweCcpLFxuXHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2sobXNnKVxuXHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dChzdHJpbmcpXG5cdFx0XHRcdFx0XSkpO1xuXHRcdH0pO1xuXHR2YXIgYnV0dG9uTm9kZXMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKGJ1dHRvbnMuJCA9PT0gJ0FjY2VwdCcpIHtcblx0XHRcdHZhciBwcm9jZWVkID0gYnV0dG9ucy5hO1xuXHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKGJ0biwgJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkUHJvY2VlZCwgcHJvY2VlZClcblx0XHRcdFx0XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjYW5jZWwgPSBidXR0b25zLmE7XG5cdFx0XHR2YXIgcHJvY2VlZCA9IGJ1dHRvbnMuYjtcblx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihidG4sICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JENhbmNlbCwgY2FuY2VsKSxcblx0XHRcdFx0XHRBMihidG4sICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JFByb2NlZWQsIHByb2NlZWQpXG5cdFx0XHRcdF0pO1xuXHRcdH1cblx0fSgpO1xuXHRyZXR1cm4gQTIoXG5cdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICc2MHB4JyksXG5cdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdsaW5lLWhlaWdodCcsICc2MHB4JyksXG5cdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd0ZXh0LWFsaWduJywgJ3JpZ2h0JyksXG5cdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYig1MCwgNTAsIDUwKScpXG5cdFx0XHRdKSxcblx0XHRidXR0b25Ob2Rlcyk7XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdNZXNzYWdlID0gRjQoXG5cdGZ1bmN0aW9uIChjb25maWcsIHRpdGxlLCBkZXRhaWxzLCBidXR0b25zKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRpZCgnZWxtLWRlYnVnZ2VyLW92ZXJsYXknKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncG9zaXRpb24nLCAnZml4ZWQnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAndG9wJywgJzAnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbGVmdCcsICcwJyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJzEwMHZ3JyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICcxMDB2aCcpLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjb2xvcicsICd3aGl0ZScpLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwb2ludGVyLWV2ZW50cycsICdub25lJyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2ZvbnQtZmFtaWx5JywgJ1xcJ1RyZWJ1Y2hldCBNU1xcJywgXFwnTHVjaWRhIEdyYW5kZVxcJywgXFwnQml0c3RyZWFtIFZlcmEgU2Fuc1xcJywgXFwnSGVsdmV0aWNhIE5ldWVcXCcsIHNhbnMtc2VyaWYnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnei1pbmRleCcsICcyMTQ3NDgzNjQ3Jylcblx0XHRcdFx0XSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncG9zaXRpb24nLCAnYWJzb2x1dGUnKSxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJzYwMHB4JyksXG5cdFx0XHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdoZWlnaHQnLCAnMTAwdmgnKSxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmctbGVmdCcsICdjYWxjKDUwJSAtIDMwMHB4KScpLFxuXHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncGFkZGluZy1yaWdodCcsICdjYWxjKDUwJSAtIDMwMHB4KScpLFxuXHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYmFja2dyb3VuZC1jb2xvcicsICdyZ2JhKDIwMCwgMjAwLCAyMDAsIDAuNyknKSxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BvaW50ZXItZXZlbnRzJywgJ2F1dG8nKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2ZvbnQtc2l6ZScsICczNnB4JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnaGVpZ2h0JywgJzgwcHgnKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYig1MCwgNTAsIDUwKScpLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmctbGVmdCcsICcyMnB4JyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAndmVydGljYWwtYWxpZ24nLCAnbWlkZGxlJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbGluZS1oZWlnaHQnLCAnODBweCcpXG5cdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KHRpdGxlKVxuXHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaWQoJ2VsbS1kZWJ1Z2dlci1kZXRhaWxzJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncGFkZGluZycsICcgOHB4IDIwcHgnKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdvdmVyZmxvdy15JywgJ2F1dG8nKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdtYXgtaGVpZ2h0JywgJ2NhbGMoMTAwdmggLSAxNTZweCknKSxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYig2MSwgNjEsIDYxKScpXG5cdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdGRldGFpbHMpLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkbWFwLFxuXHRcdFx0XHRcdFx0XHRjb25maWcud3JhcCxcblx0XHRcdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0J1dHRvbnMoYnV0dG9ucykpXG5cdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciAkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kYXR0cmlidXRlID0gRjIoXG5cdGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0X1ZpcnR1YWxEb21fYXR0cmlidXRlLFxuXHRcdFx0X1ZpcnR1YWxEb21fbm9Pbk9yRm9ybUFjdGlvbihrZXkpLFxuXHRcdFx0X1ZpcnR1YWxEb21fbm9KYXZhU2NyaXB0T3JIdG1sVXJpKHZhbHVlKSk7XG5cdH0pO1xudmFyICRlbG0kY29yZSRCYXNpY3MkbmVnYXRlID0gZnVuY3Rpb24gKG4pIHtcblx0cmV0dXJuIC1uO1xufTtcbnZhciAkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbm9kZU5TID0gZnVuY3Rpb24gKHRhZykge1xuXHRyZXR1cm4gX1ZpcnR1YWxEb21fbm9kZU5TKFxuXHRcdF9WaXJ0dWFsRG9tX25vU2NyaXB0KHRhZykpO1xufTtcbnZhciAkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdCA9IF9TdHJpbmdfZnJvbU51bWJlcjtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3U2hhcGUgPSBGNChcblx0ZnVuY3Rpb24gKHgsIHksIGFuZ2xlLCBjb29yZGluYXRlcykge1xuXHRcdHJldHVybiBBNChcblx0XHRcdCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRub2RlTlMsXG5cdFx0XHQnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuXHRcdFx0J3BvbHlnb24nLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoJGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGF0dHJpYnV0ZSwgJ3BvaW50cycsIGNvb3JkaW5hdGVzKSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHQkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kYXR0cmlidXRlLFxuXHRcdFx0XHRcdCd0cmFuc2Zvcm0nLFxuXHRcdFx0XHRcdCd0cmFuc2xhdGUoJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21GbG9hdCh4KSArICgnICcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tRmxvYXQoeSkgKyAoJykgcm90YXRlKCcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tRmxvYXQoLWFuZ2xlKSArICcpJykpKSkpKVxuXHRcdFx0XHRdKSxcblx0XHRcdF9MaXN0X05pbCk7XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGVsbUxvZ28gPSBBNChcblx0JGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJG5vZGVOUyxcblx0J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcblx0J3N2ZycsXG5cdF9MaXN0X2Zyb21BcnJheShcblx0XHRbXG5cdFx0XHRBMigkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kYXR0cmlidXRlLCAndmlld0JveCcsICctMzAwIC0zMDAgNjAwIDYwMCcpLFxuXHRcdFx0QTIoJGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGF0dHJpYnV0ZSwgJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyksXG5cdFx0XHRBMigkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kYXR0cmlidXRlLCAnZmlsbCcsICdjdXJyZW50Q29sb3InKSxcblx0XHRcdEEyKCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRhdHRyaWJ1dGUsICd3aWR0aCcsICcyNHB4JyksXG5cdFx0XHRBMigkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kYXR0cmlidXRlLCAnaGVpZ2h0JywgJzI0cHgnKVxuXHRcdF0pLFxuXHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0W1xuXHRcdFx0QTQoXG5cdFx0XHQkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbm9kZU5TLFxuXHRcdFx0J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcblx0XHRcdCdnJyxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRhdHRyaWJ1dGUsICd0cmFuc2Zvcm0nLCAnc2NhbGUoMSAtMSknKVxuXHRcdFx0XHRdKSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEE0KCRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdTaGFwZSwgMCwgLTIxMCwgMCwgJy0yODAsLTkwIDAsMTkwIDI4MCwtOTAnKSxcblx0XHRcdFx0XHRBNCgkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3U2hhcGUsIC0yMTAsIDAsIDkwLCAnLTI4MCwtOTAgMCwxOTAgMjgwLC05MCcpLFxuXHRcdFx0XHRcdEE0KCRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdTaGFwZSwgMjA3LCAyMDcsIDQ1LCAnLTE5OCwtNjYgMCwxMzIgMTk4LC02NicpLFxuXHRcdFx0XHRcdEE0KCRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdTaGFwZSwgMTUwLCAwLCAwLCAnLTEzMCwwIDAsLTEzMCAxMzAsMCAwLDEzMCcpLFxuXHRcdFx0XHRcdEE0KCRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdTaGFwZSwgLTg5LCAyMzksIDAsICctMTkxLDYxIDY5LDYxIDE5MSwtNjEgLTY5LC02MScpLFxuXHRcdFx0XHRcdEE0KCRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdTaGFwZSwgMCwgMTA2LCAxODAsICctMTMwLC00NCAwLDg2ICAxMzAsLTQ0JyksXG5cdFx0XHRcdFx0QTQoJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld1NoYXBlLCAyNTYsIC0xNTAsIDI3MCwgJy0xMzAsLTQ0IDAsODYgIDEzMCwtNDQnKVxuXHRcdFx0XHRdKSlcblx0XHRdKSk7XG52YXIgJGVsbSRjb3JlJFN0cmluZyRsZW5ndGggPSBfU3RyaW5nX2xlbmd0aDtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3TWluaUNvbnRyb2xzID0gRjIoXG5cdGZ1bmN0aW9uIChjb25maWcsIG51bU1zZ3MpIHtcblx0XHR2YXIgc3RyaW5nID0gJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KG51bU1zZ3MpO1xuXHRcdHZhciB3aWR0aCA9ICRlbG0kY29yZSRTdHJpbmckZnJvbUludChcblx0XHRcdDIgKyAkZWxtJGNvcmUkU3RyaW5nJGxlbmd0aChzdHJpbmcpKTtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncG9zaXRpb24nLCAnZml4ZWQnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYm90dG9tJywgJzJlbScpLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdyaWdodCcsICcyZW0nKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnd2lkdGgnLCAnY2FsYyg0MnB4ICsgJyArICh3aWR0aCArICdjaCknKSksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICczNnB4JyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2JhY2tncm91bmQtY29sb3InLCAnIzEyOTNEOCcpLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjb2xvcicsICd3aGl0ZScpLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdmb250LWZhbWlseScsICdtb25vc3BhY2UnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncG9pbnRlci1ldmVudHMnLCAnYXV0bycpLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd6LWluZGV4JywgJzIxNDc0ODM2NDcnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZGlzcGxheScsICdmbGV4JyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2p1c3RpZnktY29udGVudCcsICdjZW50ZXInKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYWxpZ24taXRlbXMnLCAnY2VudGVyJyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2N1cnNvcicsICdwb2ludGVyJyksXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2soY29uZmlnLm9wZW4pXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkZWxtTG9nbyxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmctbGVmdCcsICdjYWxjKDFjaCArIDZweCknKSxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmctcmlnaHQnLCAnMWNoJylcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dChzdHJpbmcpXG5cdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRleHBsYW5hdGlvbkJhZCA9ICdcXG5UaGUgbWVzc2FnZXMgaW4gdGhpcyBoaXN0b3J5IGRvIG5vdCBtYXRjaCB0aGUgbWVzc2FnZXMgaGFuZGxlZCBieSB5b3VyXFxucHJvZ3JhbS4gSSBub3RpY2VkIGNoYW5nZXMgaW4gdGhlIGZvbGxvd2luZyB0eXBlczpcXG4nO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGV4cGxhbmF0aW9uUmlza3kgPSAnXFxuVGhpcyBoaXN0b3J5IHNlZW1zIG9sZC4gSXQgd2lsbCB3b3JrIHdpdGggdGhpcyBwcm9ncmFtLCBidXQgc29tZVxcbm1lc3NhZ2VzIGhhdmUgYmVlbiBhZGRlZCBzaW5jZSB0aGUgaGlzdG9yeSB3YXMgY3JlYXRlZDpcXG4nO1xudmFyICRlbG0kY29yZSRMaXN0JGludGVyc3BlcnNlID0gRjIoXG5cdGZ1bmN0aW9uIChzZXAsIHhzKSB7XG5cdFx0aWYgKCF4cy5iKSB7XG5cdFx0XHRyZXR1cm4gX0xpc3RfTmlsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgaGQgPSB4cy5hO1xuXHRcdFx0dmFyIHRsID0geHMuYjtcblx0XHRcdHZhciBzdGVwID0gRjIoXG5cdFx0XHRcdGZ1bmN0aW9uICh4LCByZXN0KSB7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdHNlcCxcblx0XHRcdFx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JGNvbnMsIHgsIHJlc3QpKTtcblx0XHRcdFx0fSk7XG5cdFx0XHR2YXIgc3BlcnNlZCA9IEEzKCRlbG0kY29yZSRMaXN0JGZvbGRyLCBzdGVwLCBfTGlzdF9OaWwsIHRsKTtcblx0XHRcdHJldHVybiBBMigkZWxtJGNvcmUkTGlzdCRjb25zLCBoZCwgc3BlcnNlZCk7XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3TWVudGlvbiA9IEYyKFxuXHRmdW5jdGlvbiAodGFncywgdmVyYmVkKSB7XG5cdFx0dmFyIF92MCA9IEEyKFxuXHRcdFx0JGVsbSRjb3JlJExpc3QkbWFwLFxuXHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0NvZGUsXG5cdFx0XHQkZWxtJGNvcmUkTGlzdCRyZXZlcnNlKHRhZ3MpKTtcblx0XHRpZiAoIV92MC5iKSB7XG5cdFx0XHRyZXR1cm4gJGVsbSRodG1sJEh0bWwkdGV4dCgnJyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghX3YwLmIuYikge1xuXHRcdFx0XHR2YXIgdGFnID0gX3YwLmE7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRsaSxcblx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KHZlcmJlZCksXG5cdFx0XHRcdFx0XHRcdHRhZyxcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnLicpXG5cdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIV92MC5iLmIuYikge1xuXHRcdFx0XHRcdHZhciB0YWcyID0gX3YwLmE7XG5cdFx0XHRcdFx0dmFyIF92MSA9IF92MC5iO1xuXHRcdFx0XHRcdHZhciB0YWcxID0gX3YxLmE7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkbGksXG5cdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KHZlcmJlZCksXG5cdFx0XHRcdFx0XHRcdFx0dGFnMSxcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCcgYW5kICcpLFxuXHRcdFx0XHRcdFx0XHRcdHRhZzIsXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnLicpXG5cdFx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgbGFzdFRhZyA9IF92MC5hO1xuXHRcdFx0XHRcdHZhciBvdGhlclRhZ3MgPSBfdjAuYjtcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRsaSxcblx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KHZlcmJlZCksXG5cdFx0XHRcdFx0XHRcdF9VdGlsc19hcChcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGludGVyc3BlcnNlLFxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnLCAnKSxcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JHJldmVyc2Uob3RoZXJUYWdzKSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCcsIGFuZCAnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0bGFzdFRhZyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnLicpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSkpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld0NoYW5nZSA9IGZ1bmN0aW9uIChjaGFuZ2UpIHtcblx0cmV0dXJuIEEyKFxuXHRcdCRlbG0kaHRtbCRIdG1sJGxpLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ21hcmdpbicsICc4cHggMCcpXG5cdFx0XHRdKSxcblx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoY2hhbmdlLiQgPT09ICdBbGlhc0NoYW5nZScpIHtcblx0XHRcdFx0dmFyIG5hbWUgPSBjaGFuZ2UuYTtcblx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZm9udC1zaXplJywgJzEuNWVtJylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3Q29kZShuYW1lKVxuXHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRdKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBuYW1lID0gY2hhbmdlLmE7XG5cdFx0XHRcdHZhciByZW1vdmVkID0gY2hhbmdlLmIucmVtb3ZlZDtcblx0XHRcdFx0dmFyIGNoYW5nZWQgPSBjaGFuZ2UuYi5jaGFuZ2VkO1xuXHRcdFx0XHR2YXIgYWRkZWQgPSBjaGFuZ2UuYi5hZGRlZDtcblx0XHRcdFx0dmFyIGFyZ3NNYXRjaCA9IGNoYW5nZS5iLmFyZ3NNYXRjaDtcblx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZm9udC1zaXplJywgJzEuNWVtJylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3Q29kZShuYW1lKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHVsLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2xpc3Qtc3R5bGUtdHlwZScsICdkaXNjJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmctbGVmdCcsICcyZW0nKVxuXHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdEEyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdNZW50aW9uLCByZW1vdmVkLCAnUmVtb3ZlZCAnKSxcblx0XHRcdFx0XHRcdFx0XHRBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3TWVudGlvbiwgY2hhbmdlZCwgJ0NoYW5nZWQgJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld01lbnRpb24sIGFkZGVkLCAnQWRkZWQgJylcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0YXJnc01hdGNoID8gJGVsbSRodG1sJEh0bWwkdGV4dCgnJykgOiAkZWxtJGh0bWwkSHRtbCR0ZXh0KCdUaGlzIG1heSBiZSBkdWUgdG8gdGhlIGZhY3QgdGhhdCB0aGUgdHlwZSB2YXJpYWJsZSBuYW1lcyBjaGFuZ2VkLicpXG5cdFx0XHRcdFx0XSk7XG5cdFx0XHR9XG5cdFx0fSgpKTtcbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld1JlcG9ydCA9IEYyKFxuXHRmdW5jdGlvbiAoaXNCYWQsIHJlcG9ydCkge1xuXHRcdHN3aXRjaCAocmVwb3J0LiQpIHtcblx0XHRcdGNhc2UgJ0NvcnJ1cHRIaXN0b3J5Jzpcblx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCdMb29rcyBsaWtlIHRoaXMgaGlzdG9yeSBmaWxlIGlzIGNvcnJ1cHQuIEkgY2Fubm90IHVuZGVyc3RhbmQgaXQuJylcblx0XHRcdFx0XHRdKTtcblx0XHRcdGNhc2UgJ1ZlcnNpb25DaGFuZ2VkJzpcblx0XHRcdFx0dmFyIG9sZCA9IHJlcG9ydC5hO1xuXHRcdFx0XHR2YXIgX25ldyA9IHJlcG9ydC5iO1xuXHRcdFx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJ1RoaXMgaGlzdG9yeSB3YXMgY3JlYXRlZCB3aXRoIEVsbSAnICsgKG9sZCArICgnLCBidXQgeW91IGFyZSB1c2luZyBFbG0gJyArIChfbmV3ICsgJyByaWdodCBub3cuJykpKSlcblx0XHRcdFx0XHRdKTtcblx0XHRcdGNhc2UgJ01lc3NhZ2VDaGFuZ2VkJzpcblx0XHRcdFx0dmFyIG9sZCA9IHJlcG9ydC5hO1xuXHRcdFx0XHR2YXIgX25ldyA9IHJlcG9ydC5iO1xuXHRcdFx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJ1RvIGltcG9ydCBzb21lIG90aGVyIGhpc3RvcnksIHRoZSBvdmVyYWxsIG1lc3NhZ2UgdHlwZSBtdXN0JyArICcgYmUgdGhlIHNhbWUuIFRoZSBvbGQgaGlzdG9yeSBoYXMgJyksXG5cdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3Q29kZShvbGQpLFxuXHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnIG1lc3NhZ2VzLCBidXQgdGhlIG5ldyBwcm9ncmFtIHdvcmtzIHdpdGggJyksXG5cdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3Q29kZShfbmV3KSxcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJyBtZXNzYWdlcy4nKVxuXHRcdFx0XHRcdF0pO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dmFyIGNoYW5nZXMgPSByZXBvcnQuYTtcblx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHAsXG5cdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KFxuXHRcdFx0XHRcdFx0XHRcdGlzQmFkID8gJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkZXhwbGFuYXRpb25CYWQgOiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRleHBsYW5hdGlvblJpc2t5KVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHVsLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2xpc3Qtc3R5bGUtdHlwZScsICdub25lJyksXG5cdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmctbGVmdCcsICcyMHB4Jylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRBMigkZWxtJGNvcmUkTGlzdCRtYXAsICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdDaGFuZ2UsIGNoYW5nZXMpKVxuXHRcdFx0XHRcdF0pO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlldyA9IEY1KFxuXHRmdW5jdGlvbiAoY29uZmlnLCBpc1BhdXNlZCwgaXNPcGVuLCBudW1Nc2dzLCBzdGF0ZSkge1xuXHRcdHN3aXRjaCAoc3RhdGUuJCkge1xuXHRcdFx0Y2FzZSAnTm9uZSc6XG5cdFx0XHRcdHJldHVybiBpc09wZW4gPyAkZWxtJGh0bWwkSHRtbCR0ZXh0KCcnKSA6IChpc1BhdXNlZCA/IEEyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaWQoJ2VsbS1kZWJ1Z2dlci1vdmVybGF5JyksXG5cdFx0XHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwb3NpdGlvbicsICdmaXhlZCcpLFxuXHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAndG9wJywgJzAnKSxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2xlZnQnLCAnMCcpLFxuXHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnd2lkdGgnLCAnMTAwdncnKSxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICcxMDB2aCcpLFxuXHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY3Vyc29yJywgJ3BvaW50ZXInKSxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2Rpc3BsYXknLCAnZmxleCcpLFxuXHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYWxpZ24taXRlbXMnLCAnY2VudGVyJyksXG5cdFx0XHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdqdXN0aWZ5LWNvbnRlbnQnLCAnY2VudGVyJyksXG5cdFx0XHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwb2ludGVyLWV2ZW50cycsICdhdXRvJyksXG5cdFx0XHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdiYWNrZ3JvdW5kLWNvbG9yJywgJ3JnYmEoMjAwLCAyMDAsIDIwMCwgMC43KScpLFxuXHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY29sb3InLCAnd2hpdGUnKSxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2ZvbnQtZmFtaWx5JywgJ1xcJ1RyZWJ1Y2hldCBNU1xcJywgXFwnTHVjaWRhIEdyYW5kZVxcJywgXFwnQml0c3RyZWFtIFZlcmEgU2Fuc1xcJywgXFwnSGVsdmV0aWNhIE5ldWVcXCcsIHNhbnMtc2VyaWYnKSxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3otaW5kZXgnLCAnMjE0NzQ4MzY0NicpLFxuXHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRFdmVudHMkb25DbGljayhjb25maWcucmVzdW1lKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdmb250LXNpemUnLCAnODBweCcpXG5cdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCdDbGljayB0byBSZXN1bWUnKVxuXHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld01pbmlDb250cm9scywgY29uZmlnLCBudW1Nc2dzKVxuXHRcdFx0XHRcdFx0XSkpIDogQTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld01pbmlDb250cm9scywgY29uZmlnLCBudW1Nc2dzKSk7XG5cdFx0XHRjYXNlICdCYWRNZXRhZGF0YSc6XG5cdFx0XHRcdHZhciBiYWRNZXRhZGF0YV8gPSBzdGF0ZS5hO1xuXHRcdFx0XHRyZXR1cm4gQTQoXG5cdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld01lc3NhZ2UsXG5cdFx0XHRcdFx0Y29uZmlnLFxuXHRcdFx0XHRcdCdDYW5ub3QgdXNlIEltcG9ydCBvciBFeHBvcnQnLFxuXHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdCYWRNZXRhZGF0YShiYWRNZXRhZGF0YV8pLFxuXHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEFjY2VwdCgnT2snKSk7XG5cdFx0XHRjYXNlICdCYWRJbXBvcnQnOlxuXHRcdFx0XHR2YXIgcmVwb3J0ID0gc3RhdGUuYTtcblx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdNZXNzYWdlLFxuXHRcdFx0XHRcdGNvbmZpZyxcblx0XHRcdFx0XHQnQ2Fubm90IEltcG9ydCBIaXN0b3J5Jyxcblx0XHRcdFx0XHRBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3UmVwb3J0LCB0cnVlLCByZXBvcnQpLFxuXHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEFjY2VwdCgnT2snKSk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR2YXIgcmVwb3J0ID0gc3RhdGUuYTtcblx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHZpZXdNZXNzYWdlLFxuXHRcdFx0XHRcdGNvbmZpZyxcblx0XHRcdFx0XHQnV2FybmluZycsXG5cdFx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdmlld1JlcG9ydCwgZmFsc2UsIHJlcG9ydCksXG5cdFx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQ2hvb3NlLCAnQ2FuY2VsJywgJ0ltcG9ydCBBbnl3YXknKSk7XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRjb3JuZXJWaWV3ID0gZnVuY3Rpb24gKG1vZGVsKSB7XG5cdHJldHVybiBBNShcblx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSR2aWV3LFxuXHRcdHtleHBvcnRIaXN0b3J5OiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRFeHBvcnQsIGltcG9ydEhpc3Rvcnk6ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJEltcG9ydCwgb3BlbjogJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kT3BlbiwgcmVzdW1lOiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRSZXN1bWUsIHdyYXA6ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJE92ZXJsYXlNc2d9LFxuXHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGlzUGF1c2VkKG1vZGVsLnN0YXRlKSxcblx0XHRfRGVidWdnZXJfaXNPcGVuKG1vZGVsLnBvcG91dCksXG5cdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkc2l6ZShtb2RlbC5oaXN0b3J5KSxcblx0XHRtb2RlbC5vdmVybGF5KTtcbn07XG52YXIgJGVsbSRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbiA9IHskOiAnUkJFbXB0eV9lbG1fYnVpbHRpbid9O1xudmFyICRlbG0kY29yZSREaWN0JGVtcHR5ID0gJGVsbSRjb3JlJERpY3QkUkJFbXB0eV9lbG1fYnVpbHRpbjtcbnZhciAkZWxtJGNvcmUkU2V0JGZvbGRyID0gRjMoXG5cdGZ1bmN0aW9uIChmdW5jLCBpbml0aWFsU3RhdGUsIF92MCkge1xuXHRcdHZhciBkaWN0ID0gX3YwLmE7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0JGVsbSRjb3JlJERpY3QkZm9sZHIsXG5cdFx0XHRGMyhcblx0XHRcdFx0ZnVuY3Rpb24gKGtleSwgX3YxLCBzdGF0ZSkge1xuXHRcdFx0XHRcdHJldHVybiBBMihmdW5jLCBrZXksIHN0YXRlKTtcblx0XHRcdFx0fSksXG5cdFx0XHRpbml0aWFsU3RhdGUsXG5cdFx0XHRkaWN0KTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZ2V0Q3VycmVudE1vZGVsID0gZnVuY3Rpb24gKHN0YXRlKSB7XG5cdGlmIChzdGF0ZS4kID09PSAnUnVubmluZycpIHtcblx0XHR2YXIgbW9kZWwgPSBzdGF0ZS5hO1xuXHRcdHJldHVybiBtb2RlbDtcblx0fSBlbHNlIHtcblx0XHR2YXIgbW9kZWwgPSBzdGF0ZS5iO1xuXHRcdHJldHVybiBtb2RlbDtcblx0fVxufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRnZXRVc2VyTW9kZWwgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0cmV0dXJuICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGdldEN1cnJlbnRNb2RlbChtb2RlbC5zdGF0ZSk7XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGluaXRpYWxXaW5kb3dIZWlnaHQgPSA0MjA7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kaW5pdGlhbFdpbmRvd1dpZHRoID0gOTAwO1xudmFyICRlbG0kY29yZSREaWN0JEJsYWNrID0geyQ6ICdCbGFjayd9O1xudmFyICRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiA9IEY1KFxuXHRmdW5jdGlvbiAoYSwgYiwgYywgZCwgZSkge1xuXHRcdHJldHVybiB7JDogJ1JCTm9kZV9lbG1fYnVpbHRpbicsIGE6IGEsIGI6IGIsIGM6IGMsIGQ6IGQsIGU6IGV9O1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkRGljdCRSZWQgPSB7JDogJ1JlZCd9O1xudmFyICRlbG0kY29yZSREaWN0JGJhbGFuY2UgPSBGNShcblx0ZnVuY3Rpb24gKGNvbG9yLCBrZXksIHZhbHVlLCBsZWZ0LCByaWdodCkge1xuXHRcdGlmICgocmlnaHQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChyaWdodC5hLiQgPT09ICdSZWQnKSkge1xuXHRcdFx0dmFyIF92MSA9IHJpZ2h0LmE7XG5cdFx0XHR2YXIgcksgPSByaWdodC5iO1xuXHRcdFx0dmFyIHJWID0gcmlnaHQuYztcblx0XHRcdHZhciByTGVmdCA9IHJpZ2h0LmQ7XG5cdFx0XHR2YXIgclJpZ2h0ID0gcmlnaHQuZTtcblx0XHRcdGlmICgobGVmdC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGxlZnQuYS4kID09PSAnUmVkJykpIHtcblx0XHRcdFx0dmFyIF92MyA9IGxlZnQuYTtcblx0XHRcdFx0dmFyIGxLID0gbGVmdC5iO1xuXHRcdFx0XHR2YXIgbFYgPSBsZWZ0LmM7XG5cdFx0XHRcdHZhciBsTGVmdCA9IGxlZnQuZDtcblx0XHRcdFx0dmFyIGxSaWdodCA9IGxlZnQuZTtcblx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdCRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHQkZWxtJGNvcmUkRGljdCRSZWQsXG5cdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdEE1KCRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgJGVsbSRjb3JlJERpY3QkQmxhY2ssIGxLLCBsViwgbExlZnQsIGxSaWdodCksXG5cdFx0XHRcdFx0QTUoJGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCAkZWxtJGNvcmUkRGljdCRCbGFjaywgckssIHJWLCByTGVmdCwgclJpZ2h0KSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRcdHJLLFxuXHRcdFx0XHRcdHJWLFxuXHRcdFx0XHRcdEE1KCRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgJGVsbSRjb3JlJERpY3QkUmVkLCBrZXksIHZhbHVlLCBsZWZ0LCByTGVmdCksXG5cdFx0XHRcdFx0clJpZ2h0KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCgoKGxlZnQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChsZWZ0LmEuJCA9PT0gJ1JlZCcpKSAmJiAobGVmdC5kLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSkgJiYgKGxlZnQuZC5hLiQgPT09ICdSZWQnKSkge1xuXHRcdFx0XHR2YXIgX3Y1ID0gbGVmdC5hO1xuXHRcdFx0XHR2YXIgbEsgPSBsZWZ0LmI7XG5cdFx0XHRcdHZhciBsViA9IGxlZnQuYztcblx0XHRcdFx0dmFyIF92NiA9IGxlZnQuZDtcblx0XHRcdFx0dmFyIF92NyA9IF92Ni5hO1xuXHRcdFx0XHR2YXIgbGxLID0gX3Y2LmI7XG5cdFx0XHRcdHZhciBsbFYgPSBfdjYuYztcblx0XHRcdFx0dmFyIGxsTGVmdCA9IF92Ni5kO1xuXHRcdFx0XHR2YXIgbGxSaWdodCA9IF92Ni5lO1xuXHRcdFx0XHR2YXIgbFJpZ2h0ID0gbGVmdC5lO1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdCRlbG0kY29yZSREaWN0JFJlZCxcblx0XHRcdFx0XHRsSyxcblx0XHRcdFx0XHRsVixcblx0XHRcdFx0XHRBNSgkZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sICRlbG0kY29yZSREaWN0JEJsYWNrLCBsbEssIGxsViwgbGxMZWZ0LCBsbFJpZ2h0KSxcblx0XHRcdFx0XHRBNSgkZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sICRlbG0kY29yZSREaWN0JEJsYWNrLCBrZXksIHZhbHVlLCBsUmlnaHQsIHJpZ2h0KSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gQTUoJGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCBjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRjb21wYXJlID0gX1V0aWxzX2NvbXBhcmU7XG52YXIgJGVsbSRjb3JlJERpY3QkaW5zZXJ0SGVscCA9IEYzKFxuXHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgZGljdCkge1xuXHRcdGlmIChkaWN0LiQgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJykge1xuXHRcdFx0cmV0dXJuIEE1KCRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgJGVsbSRjb3JlJERpY3QkUmVkLCBrZXksIHZhbHVlLCAkZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluLCAkZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIG5Db2xvciA9IGRpY3QuYTtcblx0XHRcdHZhciBuS2V5ID0gZGljdC5iO1xuXHRcdFx0dmFyIG5WYWx1ZSA9IGRpY3QuYztcblx0XHRcdHZhciBuTGVmdCA9IGRpY3QuZDtcblx0XHRcdHZhciBuUmlnaHQgPSBkaWN0LmU7XG5cdFx0XHR2YXIgX3YxID0gQTIoJGVsbSRjb3JlJEJhc2ljcyRjb21wYXJlLCBrZXksIG5LZXkpO1xuXHRcdFx0c3dpdGNoIChfdjEuJCkge1xuXHRcdFx0XHRjYXNlICdMVCc6XG5cdFx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkYmFsYW5jZSxcblx0XHRcdFx0XHRcdG5Db2xvcixcblx0XHRcdFx0XHRcdG5LZXksXG5cdFx0XHRcdFx0XHRuVmFsdWUsXG5cdFx0XHRcdFx0XHRBMygkZWxtJGNvcmUkRGljdCRpbnNlcnRIZWxwLCBrZXksIHZhbHVlLCBuTGVmdCksXG5cdFx0XHRcdFx0XHRuUmlnaHQpO1xuXHRcdFx0XHRjYXNlICdFUSc6XG5cdFx0XHRcdFx0cmV0dXJuIEE1KCRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgbkNvbG9yLCBuS2V5LCB2YWx1ZSwgbkxlZnQsIG5SaWdodCk7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIEE1KFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkYmFsYW5jZSxcblx0XHRcdFx0XHRcdG5Db2xvcixcblx0XHRcdFx0XHRcdG5LZXksXG5cdFx0XHRcdFx0XHRuVmFsdWUsXG5cdFx0XHRcdFx0XHRuTGVmdCxcblx0XHRcdFx0XHRcdEEzKCRlbG0kY29yZSREaWN0JGluc2VydEhlbHAsIGtleSwgdmFsdWUsIG5SaWdodCkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJERpY3QkaW5zZXJ0ID0gRjMoXG5cdGZ1bmN0aW9uIChrZXksIHZhbHVlLCBkaWN0KSB7XG5cdFx0dmFyIF92MCA9IEEzKCRlbG0kY29yZSREaWN0JGluc2VydEhlbHAsIGtleSwgdmFsdWUsIGRpY3QpO1xuXHRcdGlmICgoX3YwLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAoX3YwLmEuJCA9PT0gJ1JlZCcpKSB7XG5cdFx0XHR2YXIgX3YxID0gX3YwLmE7XG5cdFx0XHR2YXIgayA9IF92MC5iO1xuXHRcdFx0dmFyIHYgPSBfdjAuYztcblx0XHRcdHZhciBsID0gX3YwLmQ7XG5cdFx0XHR2YXIgciA9IF92MC5lO1xuXHRcdFx0cmV0dXJuIEE1KCRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgJGVsbSRjb3JlJERpY3QkQmxhY2ssIGssIHYsIGwsIHIpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgeCA9IF92MDtcblx0XHRcdHJldHVybiB4O1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kY2FjaGVkSGlzdG9yeSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuXHR2YXIgX3YwID0gbW9kZWwuc3RhdGU7XG5cdGlmIChfdjAuJCA9PT0gJ1J1bm5pbmcnKSB7XG5cdFx0cmV0dXJuIG1vZGVsLmhpc3Rvcnk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGhpc3RvcnkgPSBfdjAuZTtcblx0XHRyZXR1cm4gaGlzdG9yeTtcblx0fVxufTtcbnZhciAkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbm9kZSA9IGZ1bmN0aW9uICh0YWcpIHtcblx0cmV0dXJuIF9WaXJ0dWFsRG9tX25vZGUoXG5cdFx0X1ZpcnR1YWxEb21fbm9TY3JpcHQodGFnKSk7XG59O1xudmFyICRlbG0kaHRtbCRIdG1sJG5vZGUgPSAkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbm9kZTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiREcmFnRW5kID0geyQ6ICdEcmFnRW5kJ307XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZ2V0RHJhZ1N0YXR1cyA9IGZ1bmN0aW9uIChsYXlvdXQpIHtcblx0aWYgKGxheW91dC4kID09PSAnSG9yaXpvbnRhbCcpIHtcblx0XHR2YXIgc3RhdHVzID0gbGF5b3V0LmE7XG5cdFx0cmV0dXJuIHN0YXR1cztcblx0fSBlbHNlIHtcblx0XHR2YXIgc3RhdHVzID0gbGF5b3V0LmE7XG5cdFx0cmV0dXJuIHN0YXR1cztcblx0fVxufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiREcmFnID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnRHJhZycsIGE6IGF9O1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiREcmFnSW5mbyA9IEY1KFxuXHRmdW5jdGlvbiAoeCwgeSwgZG93biwgd2lkdGgsIGhlaWdodCkge1xuXHRcdHJldHVybiB7ZG93bjogZG93biwgaGVpZ2h0OiBoZWlnaHQsIHdpZHRoOiB3aWR0aCwgeDogeCwgeTogeX07XG5cdH0pO1xudmFyICRlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCA9IF9Kc29uX2RlY29kZUZpZWxkO1xudmFyICRlbG0kanNvbiRKc29uJERlY29kZSRhdCA9IEYyKFxuXHRmdW5jdGlvbiAoZmllbGRzLCBkZWNvZGVyKSB7XG5cdFx0cmV0dXJuIEEzKCRlbG0kY29yZSRMaXN0JGZvbGRyLCAkZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQsIGRlY29kZXIsIGZpZWxkcyk7XG5cdH0pO1xudmFyICRlbG0kanNvbiRKc29uJERlY29kZSRmbG9hdCA9IF9Kc29uX2RlY29kZUZsb2F0O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGRlY29kZURpbWVuc2lvbiA9IGZ1bmN0aW9uIChmaWVsZCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0JGVsbSRqc29uJEpzb24kRGVjb2RlJGF0LFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFsnY3VycmVudFRhcmdldCcsICdvd25lckRvY3VtZW50JywgJ2RlZmF1bHRWaWV3JywgZmllbGRdKSxcblx0XHQkZWxtJGpzb24kSnNvbiREZWNvZGUkZmxvYXQpO1xufTtcbnZhciAkZWxtJGpzb24kSnNvbiREZWNvZGUkaW50ID0gX0pzb25fZGVjb2RlSW50O1xudmFyICRlbG0kanNvbiRKc29uJERlY29kZSRtYXA1ID0gX0pzb25fbWFwNTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRvbk1vdXNlTW92ZSA9IEEyKFxuXHQkZWxtJGh0bWwkSHRtbCRFdmVudHMkb24sXG5cdCdtb3VzZW1vdmUnLFxuXHRBMihcblx0XHQkZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwLFxuXHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJERyYWcsXG5cdFx0QTYoXG5cdFx0XHQkZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwNSxcblx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJERyYWdJbmZvLFxuXHRcdFx0QTIoJGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLCAncGFnZVgnLCAkZWxtJGpzb24kSnNvbiREZWNvZGUkZmxvYXQpLFxuXHRcdFx0QTIoJGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLCAncGFnZVknLCAkZWxtJGpzb24kSnNvbiREZWNvZGUkZmxvYXQpLFxuXHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCxcblx0XHRcdFx0J2J1dHRvbnMnLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0XHQkZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwLFxuXHRcdFx0XHRcdGZ1bmN0aW9uICh2KSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdiA9PT0gMTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdCRlbG0kanNvbiRKc29uJERlY29kZSRpbnQpKSxcblx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGRlY29kZURpbWVuc2lvbignaW5uZXJXaWR0aCcpLFxuXHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZGVjb2RlRGltZW5zaW9uKCdpbm5lckhlaWdodCcpKSkpO1xudmFyICRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbk1vdXNlVXAgPSBmdW5jdGlvbiAobXNnKSB7XG5cdHJldHVybiBBMihcblx0XHQkZWxtJGh0bWwkSHRtbCRFdmVudHMkb24sXG5cdFx0J21vdXNldXAnLFxuXHRcdCRlbG0kanNvbiRKc29uJERlY29kZSRzdWNjZWVkKG1zZykpO1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR0b0RyYWdMaXN0ZW5lcnMgPSBmdW5jdGlvbiAobGF5b3V0KSB7XG5cdHZhciBfdjAgPSAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRnZXREcmFnU3RhdHVzKGxheW91dCk7XG5cdGlmIChfdjAuJCA9PT0gJ1N0YXRpYycpIHtcblx0XHRyZXR1cm4gX0xpc3RfTmlsO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJG9uTW91c2VNb3ZlLFxuXHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRFdmVudHMkb25Nb3VzZVVwKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJERyYWdFbmQpXG5cdFx0XHRdKTtcblx0fVxufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR0b0ZsZXhEaXJlY3Rpb24gPSBmdW5jdGlvbiAobGF5b3V0KSB7XG5cdGlmIChsYXlvdXQuJCA9PT0gJ0hvcml6b250YWwnKSB7XG5cdFx0cmV0dXJuICdyb3cnO1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAnY29sdW1uLXJldmVyc2UnO1xuXHR9XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJERyYWdTdGFydCA9IHskOiAnRHJhZ1N0YXJ0J307XG52YXIgJGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uTW91c2VEb3duID0gZnVuY3Rpb24gKG1zZykge1xuXHRyZXR1cm4gQTIoXG5cdFx0JGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uLFxuXHRcdCdtb3VzZWRvd24nLFxuXHRcdCRlbG0kanNvbiRKc29uJERlY29kZSRzdWNjZWVkKG1zZykpO1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR0b1BlcmNlbnQgPSBmdW5jdGlvbiAoZnJhY3Rpb24pIHtcblx0cmV0dXJuICRlbG0kY29yZSRTdHJpbmckZnJvbUZsb2F0KDEwMCAqIGZyYWN0aW9uKSArICclJztcbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdmlld0RyYWdab25lID0gZnVuY3Rpb24gKGxheW91dCkge1xuXHRpZiAobGF5b3V0LiQgPT09ICdIb3Jpem9udGFsJykge1xuXHRcdHZhciB4ID0gbGF5b3V0LmI7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3RvcCcsICcwJyksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSxcblx0XHRcdFx0XHQnbGVmdCcsXG5cdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdG9QZXJjZW50KHgpKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbWFyZ2luLWxlZnQnLCAnLTVweCcpLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICcxMHB4JyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICcxMDAlJyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2N1cnNvcicsICdjb2wtcmVzaXplJyksXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uTW91c2VEb3duKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJERyYWdTdGFydClcblx0XHRcdFx0XSksXG5cdFx0XHRfTGlzdF9OaWwpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciB5ID0gbGF5b3V0LmM7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3Bvc2l0aW9uJywgJ2Fic29sdXRlJyksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSxcblx0XHRcdFx0XHQndG9wJyxcblx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR0b1BlcmNlbnQoeSkpLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdsZWZ0JywgJzAnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbWFyZ2luLXRvcCcsICctNXB4JyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJzEwMCUnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnaGVpZ2h0JywgJzEwcHgnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY3Vyc29yJywgJ3Jvdy1yZXNpemUnKSxcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRFdmVudHMkb25Nb3VzZURvd24oJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kRHJhZ1N0YXJ0KVxuXHRcdFx0XHRdKSxcblx0XHRcdF9MaXN0X05pbCk7XG5cdH1cbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kVHdlYWtFeHBhbmRvTW9kZWwgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdUd2Vha0V4cGFuZG9Nb2RlbCcsIGE6IGF9O1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRUd2Vha0V4cGFuZG9Nc2cgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdUd2Vha0V4cGFuZG9Nc2cnLCBhOiBhfTtcbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdG9FeHBhbmRvUGVyY2VudHMgPSBmdW5jdGlvbiAobGF5b3V0KSB7XG5cdGlmIChsYXlvdXQuJCA9PT0gJ0hvcml6b250YWwnKSB7XG5cdFx0dmFyIHggPSBsYXlvdXQuYjtcblx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvUGVyY2VudCgxIC0geCksXG5cdFx0XHQnMTAwJScpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciB5ID0gbGF5b3V0LmM7XG5cdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHQnMTAwJScsXG5cdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR0b1BlcmNlbnQoeSkpO1xuXHR9XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvTW91c2VCbG9ja2VyID0gZnVuY3Rpb24gKGxheW91dCkge1xuXHR2YXIgX3YwID0gJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZ2V0RHJhZ1N0YXR1cyhsYXlvdXQpO1xuXHRpZiAoX3YwLiQgPT09ICdTdGF0aWMnKSB7XG5cdFx0cmV0dXJuICdhdXRvJztcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gJ25vbmUnO1xuXHR9XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEZpZWxkID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnRmllbGQnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kSW5kZXggPSBGMyhcblx0ZnVuY3Rpb24gKGEsIGIsIGMpIHtcblx0XHRyZXR1cm4geyQ6ICdJbmRleCcsIGE6IGEsIGI6IGIsIGM6IGN9O1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRLZXkgPSB7JDogJ0tleSd9O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJE5vbmUgPSB7JDogJ05vbmUnfTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRUb2dnbGUgPSB7JDogJ1RvZ2dsZSd9O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFZhbHVlID0geyQ6ICdWYWx1ZSd9O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGJsdWUgPSBBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY29sb3InLCAncmdiKDI4LCAwLCAyMDcpJyk7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRjb21wb3NlTCA9IEYzKFxuXHRmdW5jdGlvbiAoZywgZiwgeCkge1xuXHRcdHJldHVybiBnKFxuXHRcdFx0Zih4KSk7XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxlZnRQYWQgPSBmdW5jdGlvbiAobWF5YmVLZXkpIHtcblx0aWYgKG1heWJlS2V5LiQgPT09ICdOb3RoaW5nJykge1xuXHRcdHJldHVybiBfTGlzdF9OaWw7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmctbGVmdCcsICc0Y2gnKVxuXHRcdFx0XSk7XG5cdH1cbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWFrZUFycm93ID0gZnVuY3Rpb24gKGFycm93KSB7XG5cdHJldHVybiBBMihcblx0XHQkZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2NvbG9yJywgJyM3NzcnKSxcblx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmctbGVmdCcsICcyY2gnKSxcblx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJzJjaCcpLFxuXHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZGlzcGxheScsICdpbmxpbmUtYmxvY2snKVxuXHRcdFx0XSksXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KGFycm93KVxuXHRcdFx0XSkpO1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRwdXJwbGUgPSBBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY29sb3InLCAncmdiKDEzNiwgMTksIDE0NSknKTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsaW5lU3RhcnRlciA9IEYzKFxuXHRmdW5jdGlvbiAobWF5YmVLZXksIG1heWJlSXNDbG9zZWQsIGRlc2NyaXB0aW9uKSB7XG5cdFx0dmFyIGFycm93ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKG1heWJlSXNDbG9zZWQuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdHJldHVybiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtYWtlQXJyb3coJycpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKG1heWJlSXNDbG9zZWQuYSkge1xuXHRcdFx0XHRcdHJldHVybiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtYWtlQXJyb3coJ+KWuCcpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtYWtlQXJyb3coJ+KWvicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSgpO1xuXHRcdGlmIChtYXliZUtleS4kID09PSAnTm90aGluZycpIHtcblx0XHRcdHJldHVybiBBMigkZWxtJGNvcmUkTGlzdCRjb25zLCBhcnJvdywgZGVzY3JpcHRpb24pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIga2V5ID0gbWF5YmVLZXkuYTtcblx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0YXJyb3csXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kcHVycGxlXSksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KGtleSlcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJyA9ICcpLFxuXHRcdFx0XHRcdFx0ZGVzY3JpcHRpb24pKSk7XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRyZWQgPSBBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY29sb3InLCAncmdiKDE5NiwgMjYsIDIyKScpO1xudmFyICRlbG0kY29yZSRUdXBsZSRzZWNvbmQgPSBmdW5jdGlvbiAoX3YwKSB7XG5cdHZhciB5ID0gX3YwLmI7XG5cdHJldHVybiB5O1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRzZXFUeXBlVG9TdHJpbmcgPSBGMihcblx0ZnVuY3Rpb24gKG4sIHNlcVR5cGUpIHtcblx0XHRzd2l0Y2ggKHNlcVR5cGUuJCkge1xuXHRcdFx0Y2FzZSAnTGlzdFNlcSc6XG5cdFx0XHRcdHJldHVybiAnTGlzdCgnICsgKCRlbG0kY29yZSRTdHJpbmckZnJvbUludChuKSArICcpJyk7XG5cdFx0XHRjYXNlICdTZXRTZXEnOlxuXHRcdFx0XHRyZXR1cm4gJ1NldCgnICsgKCRlbG0kY29yZSRTdHJpbmckZnJvbUludChuKSArICcpJyk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gJ0FycmF5KCcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KG4pICsgJyknKTtcblx0XHR9XG5cdH0pO1xudmFyICRlbG0kY29yZSRTdHJpbmckc2xpY2UgPSBfU3RyaW5nX3NsaWNlO1xudmFyICRlbG0kY29yZSRTdHJpbmckbGVmdCA9IEYyKFxuXHRmdW5jdGlvbiAobiwgc3RyaW5nKSB7XG5cdFx0cmV0dXJuIChuIDwgMSkgPyAnJyA6IEEzKCRlbG0kY29yZSRTdHJpbmckc2xpY2UsIDAsIG4sIHN0cmluZyk7XG5cdH0pO1xudmFyICRlbG0kY29yZSRTdHJpbmckcmlnaHQgPSBGMihcblx0ZnVuY3Rpb24gKG4sIHN0cmluZykge1xuXHRcdHJldHVybiAobiA8IDEpID8gJycgOiBBMyhcblx0XHRcdCRlbG0kY29yZSRTdHJpbmckc2xpY2UsXG5cdFx0XHQtbixcblx0XHRcdCRlbG0kY29yZSRTdHJpbmckbGVuZ3RoKHN0cmluZyksXG5cdFx0XHRzdHJpbmcpO1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRlbGlkZU1pZGRsZSA9IGZ1bmN0aW9uIChzdHIpIHtcblx0cmV0dXJuICgkZWxtJGNvcmUkU3RyaW5nJGxlbmd0aChzdHIpIDw9IDE4KSA/IHN0ciA6IChBMigkZWxtJGNvcmUkU3RyaW5nJGxlZnQsIDgsIHN0cikgKyAoJy4uLicgKyBBMigkZWxtJGNvcmUkU3RyaW5nJHJpZ2h0LCA4LCBzdHIpKSk7XG59O1xudmFyICRlbG0kY29yZSREaWN0JGlzRW1wdHkgPSBmdW5jdGlvbiAoZGljdCkge1xuXHRpZiAoZGljdC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0V4dHJhVGlueVJlY29yZCA9IEYzKFxuXHRmdW5jdGlvbiAobGVuZ3RoLCBzdGFydGVyLCBlbnRyaWVzKSB7XG5cdFx0aWYgKCFlbnRyaWVzLmIpIHtcblx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRsZW5ndGggKyAxLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnfScpXG5cdFx0XHRcdFx0XSkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgZmllbGQgPSBlbnRyaWVzLmE7XG5cdFx0XHR2YXIgcmVzdCA9IGVudHJpZXMuYjtcblx0XHRcdHZhciBuZXh0TGVuZ3RoID0gKGxlbmd0aCArICRlbG0kY29yZSRTdHJpbmckbGVuZ3RoKGZpZWxkKSkgKyAxO1xuXHRcdFx0aWYgKG5leHRMZW5ndGggPiAxOCkge1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRsZW5ndGggKyAyLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgn4oCmfScpXG5cdFx0XHRcdFx0XHRdKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgX3YxID0gQTMoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0V4dHJhVGlueVJlY29yZCwgbmV4dExlbmd0aCwgJywnLCByZXN0KTtcblx0XHRcdFx0dmFyIGZpbmFsTGVuZ3RoID0gX3YxLmE7XG5cdFx0XHRcdHZhciBvdGhlckh0bWxzID0gX3YxLmI7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdGZpbmFsTGVuZ3RoLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoc3RhcnRlciksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kcHVycGxlXSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KGZpZWxkKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRvdGhlckh0bWxzKSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1RpbnlIZWxwID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHQkZWxtJGNvcmUkU3RyaW5nJGxlbmd0aChzdHIpLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dChzdHIpXG5cdFx0XHRdKSk7XG59O1xudmFyICRlbG0kY29yZSRNYXliZSR3aXRoRGVmYXVsdCA9IEYyKFxuXHRmdW5jdGlvbiAoX2RlZmF1bHQsIG1heWJlKSB7XG5cdFx0aWYgKG1heWJlLiQgPT09ICdKdXN0Jykge1xuXHRcdFx0dmFyIHZhbHVlID0gbWF5YmUuYTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIF9kZWZhdWx0O1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0V4dHJhVGlueSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRpZiAodmFsdWUuJCA9PT0gJ1JlY29yZCcpIHtcblx0XHR2YXIgcmVjb3JkID0gdmFsdWUuYjtcblx0XHRyZXR1cm4gQTMoXG5cdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3RXh0cmFUaW55UmVjb3JkLFxuXHRcdFx0MCxcblx0XHRcdCd7Jyxcblx0XHRcdCRlbG0kY29yZSREaWN0JGtleXMocmVjb3JkKSk7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55KHZhbHVlKTtcblx0fVxufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRzd2l0Y2ggKHZhbHVlLiQpIHtcblx0XHRjYXNlICdTJzpcblx0XHRcdHZhciBzdHJpbmdSZXAgPSB2YWx1ZS5hO1xuXHRcdFx0dmFyIHN0ciA9ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGVsaWRlTWlkZGxlKHN0cmluZ1JlcCk7XG5cdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRsZW5ndGgoc3RyKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0WyRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHJlZF0pLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dChzdHIpXG5cdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdF0pKTtcblx0XHRjYXNlICdQcmltaXRpdmUnOlxuXHRcdFx0dmFyIHN0cmluZ1JlcCA9IHZhbHVlLmE7XG5cdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRsZW5ndGgoc3RyaW5nUmVwKSxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0WyRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGJsdWVdKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoc3RyaW5nUmVwKVxuXHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRdKSk7XG5cdFx0Y2FzZSAnU2VxdWVuY2UnOlxuXHRcdFx0dmFyIHNlcVR5cGUgPSB2YWx1ZS5hO1xuXHRcdFx0dmFyIHZhbHVlTGlzdCA9IHZhbHVlLmM7XG5cdFx0XHRyZXR1cm4gJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1RpbnlIZWxwKFxuXHRcdFx0XHRBMihcblx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRzZXFUeXBlVG9TdHJpbmcsXG5cdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkbGVuZ3RoKHZhbHVlTGlzdCksXG5cdFx0XHRcdFx0c2VxVHlwZSkpO1xuXHRcdGNhc2UgJ0RpY3Rpb25hcnknOlxuXHRcdFx0dmFyIGtleVZhbHVlUGFpcnMgPSB2YWx1ZS5iO1xuXHRcdFx0cmV0dXJuICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55SGVscChcblx0XHRcdFx0J0RpY3QoJyArICgkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkbGVuZ3RoKGtleVZhbHVlUGFpcnMpKSArICcpJykpO1xuXHRcdGNhc2UgJ1JlY29yZCc6XG5cdFx0XHR2YXIgcmVjb3JkID0gdmFsdWUuYjtcblx0XHRcdHJldHVybiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueVJlY29yZChyZWNvcmQpO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRpZiAoIXZhbHVlLmMuYikge1xuXHRcdFx0XHR2YXIgbWF5YmVOYW1lID0gdmFsdWUuYTtcblx0XHRcdFx0cmV0dXJuICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55SGVscChcblx0XHRcdFx0XHRBMigkZWxtJGNvcmUkTWF5YmUkd2l0aERlZmF1bHQsICdVbml0JywgbWF5YmVOYW1lKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbWF5YmVOYW1lID0gdmFsdWUuYTtcblx0XHRcdFx0dmFyIHZhbHVlTGlzdCA9IHZhbHVlLmM7XG5cdFx0XHRcdHJldHVybiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueUhlbHAoXG5cdFx0XHRcdFx0ZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0aWYgKG1heWJlTmFtZS4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuICdUdXBsZSgnICsgKCRlbG0kY29yZSRTdHJpbmckZnJvbUludChcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRsZW5ndGgodmFsdWVMaXN0KSkgKyAnKScpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyIG5hbWUgPSBtYXliZU5hbWUuYTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIG5hbWUgKyAnIOKApic7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSgpKTtcblx0XHRcdH1cblx0fVxufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueVJlY29yZCA9IGZ1bmN0aW9uIChyZWNvcmQpIHtcblx0cmV0dXJuICRlbG0kY29yZSREaWN0JGlzRW1wdHkocmVjb3JkKSA/IF9VdGlsc19UdXBsZTIoXG5cdFx0Mixcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJ3t9Jylcblx0XHRcdF0pKSA6IEEzKFxuXHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdUaW55UmVjb3JkSGVscCxcblx0XHQwLFxuXHRcdCd7ICcsXG5cdFx0JGVsbSRjb3JlJERpY3QkdG9MaXN0KHJlY29yZCkpO1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueVJlY29yZEhlbHAgPSBGMyhcblx0ZnVuY3Rpb24gKGxlbmd0aCwgc3RhcnRlciwgZW50cmllcykge1xuXHRcdGlmICghZW50cmllcy5iKSB7XG5cdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0bGVuZ3RoICsgMixcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJyB9Jylcblx0XHRcdFx0XHRdKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBfdjEgPSBlbnRyaWVzLmE7XG5cdFx0XHR2YXIgZmllbGQgPSBfdjEuYTtcblx0XHRcdHZhciB2YWx1ZSA9IF92MS5iO1xuXHRcdFx0dmFyIHJlc3QgPSBlbnRyaWVzLmI7XG5cdFx0XHR2YXIgZmllbGRMZW4gPSAkZWxtJGNvcmUkU3RyaW5nJGxlbmd0aChmaWVsZCk7XG5cdFx0XHR2YXIgX3YyID0gJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0V4dHJhVGlueSh2YWx1ZSk7XG5cdFx0XHR2YXIgdmFsdWVMZW4gPSBfdjIuYTtcblx0XHRcdHZhciB2YWx1ZUh0bWxzID0gX3YyLmI7XG5cdFx0XHR2YXIgbmV3TGVuZ3RoID0gKChsZW5ndGggKyBmaWVsZExlbikgKyB2YWx1ZUxlbikgKyA1O1xuXHRcdFx0aWYgKG5ld0xlbmd0aCA+IDYwKSB7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdGxlbmd0aCArIDQsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCcsIOKApiB9Jylcblx0XHRcdFx0XHRcdF0pKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBfdjMgPSBBMygkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueVJlY29yZEhlbHAsIG5ld0xlbmd0aCwgJywgJywgcmVzdCk7XG5cdFx0XHRcdHZhciBmaW5hbExlbmd0aCA9IF92My5hO1xuXHRcdFx0XHR2YXIgb3RoZXJIdG1scyA9IF92My5iO1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRmaW5hbExlbmd0aCxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KHN0YXJ0ZXIpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0WyRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHB1cnBsZV0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dChmaWVsZClcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCcgPSAnKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRzcGFuLCBfTGlzdF9OaWwsIHZhbHVlSHRtbHMpLFxuXHRcdFx0XHRcdFx0XHRcdFx0b3RoZXJIdG1scykpKSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlldyA9IEYyKFxuXHRmdW5jdGlvbiAobWF5YmVLZXksIGV4cGFuZG8pIHtcblx0XHRzd2l0Y2ggKGV4cGFuZG8uJCkge1xuXHRcdFx0Y2FzZSAnUyc6XG5cdFx0XHRcdHZhciBzdHJpbmdSZXAgPSBleHBhbmRvLmE7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGVmdFBhZChtYXliZUtleSksXG5cdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsaW5lU3RhcnRlcixcblx0XHRcdFx0XHRcdG1heWJlS2V5LFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJE1heWJlJE5vdGhpbmcsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFskZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRyZWRdKSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoc3RyaW5nUmVwKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdF0pKSk7XG5cdFx0XHRjYXNlICdQcmltaXRpdmUnOlxuXHRcdFx0XHR2YXIgc3RyaW5nUmVwID0gZXhwYW5kby5hO1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxlZnRQYWQobWF5YmVLZXkpLFxuXHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGluZVN0YXJ0ZXIsXG5cdFx0XHRcdFx0XHRtYXliZUtleSxcblx0XHRcdFx0XHRcdCRlbG0kY29yZSRNYXliZSROb3RoaW5nLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkc3Bhbixcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kYmx1ZV0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dChzdHJpbmdSZXApXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XSkpKTtcblx0XHRcdGNhc2UgJ1NlcXVlbmNlJzpcblx0XHRcdFx0dmFyIHNlcVR5cGUgPSBleHBhbmRvLmE7XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYjtcblx0XHRcdFx0dmFyIHZhbHVlTGlzdCA9IGV4cGFuZG8uYztcblx0XHRcdFx0cmV0dXJuIEE0KCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdTZXF1ZW5jZSwgbWF5YmVLZXksIHNlcVR5cGUsIGlzQ2xvc2VkLCB2YWx1ZUxpc3QpO1xuXHRcdFx0Y2FzZSAnRGljdGlvbmFyeSc6XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYTtcblx0XHRcdFx0dmFyIGtleVZhbHVlUGFpcnMgPSBleHBhbmRvLmI7XG5cdFx0XHRcdHJldHVybiBBMygkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3RGljdGlvbmFyeSwgbWF5YmVLZXksIGlzQ2xvc2VkLCBrZXlWYWx1ZVBhaXJzKTtcblx0XHRcdGNhc2UgJ1JlY29yZCc6XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYTtcblx0XHRcdFx0dmFyIHZhbHVlRGljdCA9IGV4cGFuZG8uYjtcblx0XHRcdFx0cmV0dXJuIEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdSZWNvcmQsIG1heWJlS2V5LCBpc0Nsb3NlZCwgdmFsdWVEaWN0KTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHZhciBtYXliZU5hbWUgPSBleHBhbmRvLmE7XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYjtcblx0XHRcdFx0dmFyIHZhbHVlTGlzdCA9IGV4cGFuZG8uYztcblx0XHRcdFx0cmV0dXJuIEE0KCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdDb25zdHJ1Y3RvciwgbWF5YmVLZXksIG1heWJlTmFtZSwgaXNDbG9zZWQsIHZhbHVlTGlzdCk7XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3Q29uc3RydWN0b3IgPSBGNChcblx0ZnVuY3Rpb24gKG1heWJlS2V5LCBtYXliZU5hbWUsIGlzQ2xvc2VkLCB2YWx1ZUxpc3QpIHtcblx0XHR2YXIgdGlueUFyZ3MgPSBBMihcblx0XHRcdCRlbG0kY29yZSRMaXN0JG1hcCxcblx0XHRcdEEyKCRlbG0kY29yZSRCYXNpY3MkY29tcG9zZUwsICRlbG0kY29yZSRUdXBsZSRzZWNvbmQsICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdFeHRyYVRpbnkpLFxuXHRcdFx0dmFsdWVMaXN0KTtcblx0XHR2YXIgZGVzY3JpcHRpb24gPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHR2YXIgX3Y3ID0gX1V0aWxzX1R1cGxlMihtYXliZU5hbWUsIHRpbnlBcmdzKTtcblx0XHRcdGlmIChfdjcuYS4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0aWYgKCFfdjcuYi5iKSB7XG5cdFx0XHRcdFx0dmFyIF92OCA9IF92Ny5hO1xuXHRcdFx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJygpJylcblx0XHRcdFx0XHRcdF0pO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHZhciBfdjkgPSBfdjcuYTtcblx0XHRcdFx0XHR2YXIgX3YxMCA9IF92Ny5iO1xuXHRcdFx0XHRcdHZhciB4ID0gX3YxMC5hO1xuXHRcdFx0XHRcdHZhciB4cyA9IF92MTAuYjtcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnKCAnKSxcblx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRzcGFuLCBfTGlzdF9OaWwsIHgpLFxuXHRcdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRmb2xkcixcblx0XHRcdFx0XHRcdFx0XHRGMihcblx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChhcmdzLCByZXN0KSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJywgJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkc3BhbiwgX0xpc3RfTmlsLCBhcmdzKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3QpKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnICknKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0eHMpKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghX3Y3LmIuYikge1xuXHRcdFx0XHRcdHZhciBuYW1lID0gX3Y3LmEuYTtcblx0XHRcdFx0XHRyZXR1cm4gX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KG5hbWUpXG5cdFx0XHRcdFx0XHRdKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgbmFtZSA9IF92Ny5hLmE7XG5cdFx0XHRcdFx0dmFyIF92MTEgPSBfdjcuYjtcblx0XHRcdFx0XHR2YXIgeCA9IF92MTEuYTtcblx0XHRcdFx0XHR2YXIgeHMgPSBfdjExLmI7XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQobmFtZSArICcgJyksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkc3BhbiwgX0xpc3RfTmlsLCB4KSxcblx0XHRcdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkZm9sZHIsXG5cdFx0XHRcdFx0XHRcdFx0RjIoXG5cdFx0XHRcdFx0XHRcdFx0XHRmdW5jdGlvbiAoYXJncywgcmVzdCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCcgJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkc3BhbiwgX0xpc3RfTmlsLCBhcmdzKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3QpKTtcblx0XHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdFx0XHR4cykpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0oKTtcblx0XHR2YXIgX3Y0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCF2YWx1ZUxpc3QuYikge1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkTm90aGluZyxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIXZhbHVlTGlzdC5iLmIpIHtcblx0XHRcdFx0XHR2YXIgZW50cnkgPSB2YWx1ZUxpc3QuYTtcblx0XHRcdFx0XHRzd2l0Y2ggKGVudHJ5LiQpIHtcblx0XHRcdFx0XHRcdGNhc2UgJ1MnOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkTm90aGluZyxcblx0XHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKSk7XG5cdFx0XHRcdFx0XHRjYXNlICdQcmltaXRpdmUnOlxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkTm90aGluZyxcblx0XHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKSk7XG5cdFx0XHRcdFx0XHRjYXNlICdTZXF1ZW5jZSc6XG5cdFx0XHRcdFx0XHRcdHZhciBzdWJWYWx1ZUxpc3QgPSBlbnRyeS5jO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkSnVzdChpc0Nsb3NlZCksXG5cdFx0XHRcdFx0XHRcdFx0aXNDbG9zZWQgPyBBMigkZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKSA6IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkbWFwLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kSW5kZXgsICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJE5vbmUsIDApLFxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1NlcXVlbmNlT3BlbihzdWJWYWx1ZUxpc3QpKSk7XG5cdFx0XHRcdFx0XHRjYXNlICdEaWN0aW9uYXJ5Jzpcblx0XHRcdFx0XHRcdFx0dmFyIGtleVZhbHVlUGFpcnMgPSBlbnRyeS5iO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkSnVzdChpc0Nsb3NlZCksXG5cdFx0XHRcdFx0XHRcdFx0aXNDbG9zZWQgPyBBMigkZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKSA6IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkbWFwLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kSW5kZXgsICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJE5vbmUsIDApLFxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0RpY3Rpb25hcnlPcGVuKGtleVZhbHVlUGFpcnMpKSk7XG5cdFx0XHRcdFx0XHRjYXNlICdSZWNvcmQnOlxuXHRcdFx0XHRcdFx0XHR2YXIgcmVjb3JkID0gZW50cnkuYjtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJE1heWJlJEp1c3QoaXNDbG9zZWQpLFxuXHRcdFx0XHRcdFx0XHRcdGlzQ2xvc2VkID8gQTIoJGVsbSRodG1sJEh0bWwkZGl2LCBfTGlzdF9OaWwsIF9MaXN0X05pbCkgOiBBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHRcdFx0XHRcdEEyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEluZGV4LCAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyROb25lLCAwKSxcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdSZWNvcmRPcGVuKHJlY29yZCkpKTtcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdHZhciBzdWJWYWx1ZUxpc3QgPSBlbnRyeS5jO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkSnVzdChpc0Nsb3NlZCksXG5cdFx0XHRcdFx0XHRcdFx0aXNDbG9zZWQgPyBBMigkZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKSA6IEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkbWFwLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kSW5kZXgsICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJE5vbmUsIDApLFxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0NvbnN0cnVjdG9yT3BlbihzdWJWYWx1ZUxpc3QpKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJE1heWJlJEp1c3QoaXNDbG9zZWQpLFxuXHRcdFx0XHRcdFx0aXNDbG9zZWQgPyBBMigkZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKSA6ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdDb25zdHJ1Y3Rvck9wZW4odmFsdWVMaXN0KSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KCk7XG5cdFx0dmFyIG1heWJlSXNDbG9zZWQgPSBfdjQuYTtcblx0XHR2YXIgb3Blbkh0bWwgPSBfdjQuYjtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsZWZ0UGFkKG1heWJlS2V5KSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFRvZ2dsZSlcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxpbmVTdGFydGVyLCBtYXliZUtleSwgbWF5YmVJc0Nsb3NlZCwgZGVzY3JpcHRpb24pKSxcblx0XHRcdFx0XHRvcGVuSHRtbFxuXHRcdFx0XHRdKSk7XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdDb25zdHJ1Y3RvckVudHJ5ID0gRjIoXG5cdGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHQkZWxtJGh0bWwkSHRtbCRtYXAsXG5cdFx0XHRBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRJbmRleCwgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kTm9uZSwgaW5kZXgpLFxuXHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXcsXG5cdFx0XHRcdCRlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckZnJvbUludChpbmRleCkpLFxuXHRcdFx0XHR2YWx1ZSkpO1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3Q29uc3RydWN0b3JPcGVuID0gZnVuY3Rpb24gKHZhbHVlTGlzdCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdF9MaXN0X05pbCxcblx0XHRBMigkZWxtJGNvcmUkTGlzdCRpbmRleGVkTWFwLCAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3Q29uc3RydWN0b3JFbnRyeSwgdmFsdWVMaXN0KSk7XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdEaWN0aW9uYXJ5ID0gRjMoXG5cdGZ1bmN0aW9uIChtYXliZUtleSwgaXNDbG9zZWQsIGtleVZhbHVlUGFpcnMpIHtcblx0XHR2YXIgc3RhcnRlciA9ICdEaWN0KCcgKyAoJGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KFxuXHRcdFx0JGVsbSRjb3JlJExpc3QkbGVuZ3RoKGtleVZhbHVlUGFpcnMpKSArICcpJyk7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGVmdFBhZChtYXliZUtleSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRFdmVudHMkb25DbGljaygkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRUb2dnbGUpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxpbmVTdGFydGVyLFxuXHRcdFx0XHRcdFx0bWF5YmVLZXksXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkSnVzdChpc0Nsb3NlZCksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KHN0YXJ0ZXIpXG5cdFx0XHRcdFx0XHRcdF0pKSksXG5cdFx0XHRcdFx0aXNDbG9zZWQgPyAkZWxtJGh0bWwkSHRtbCR0ZXh0KCcnKSA6ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdEaWN0aW9uYXJ5T3BlbihrZXlWYWx1ZVBhaXJzKVxuXHRcdFx0XHRdKSk7XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXdEaWN0aW9uYXJ5RW50cnkgPSBGMihcblx0ZnVuY3Rpb24gKGluZGV4LCBfdjIpIHtcblx0XHR2YXIga2V5ID0gX3YyLmE7XG5cdFx0dmFyIHZhbHVlID0gX3YyLmI7XG5cdFx0c3dpdGNoIChrZXkuJCkge1xuXHRcdFx0Y2FzZSAnUyc6XG5cdFx0XHRcdHZhciBzdHJpbmdSZXAgPSBrZXkuYTtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHRBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRJbmRleCwgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kVmFsdWUsIGluZGV4KSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXcsXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkSnVzdChzdHJpbmdSZXApLFxuXHRcdFx0XHRcdFx0dmFsdWUpKTtcblx0XHRcdGNhc2UgJ1ByaW1pdGl2ZSc6XG5cdFx0XHRcdHZhciBzdHJpbmdSZXAgPSBrZXkuYTtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHRBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRJbmRleCwgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kVmFsdWUsIGluZGV4KSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXcsXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkSnVzdChzdHJpbmdSZXApLFxuXHRcdFx0XHRcdFx0dmFsdWUpKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kSW5kZXgsICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJEtleSwgaW5kZXgpLFxuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3LFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRNYXliZSRKdXN0KCdrZXknKSxcblx0XHRcdFx0XHRcdFx0XHRrZXkpKSxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kSW5kZXgsICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFZhbHVlLCBpbmRleCksXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHZpZXcsXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJE1heWJlJEp1c3QoJ3ZhbHVlJyksXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUpKVxuXHRcdFx0XHRcdFx0XSkpO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0RpY3Rpb25hcnlPcGVuID0gZnVuY3Rpb24gKGtleVZhbHVlUGFpcnMpIHtcblx0cmV0dXJuIEEyKFxuXHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRfTGlzdF9OaWwsXG5cdFx0QTIoJGVsbSRjb3JlJExpc3QkaW5kZXhlZE1hcCwgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld0RpY3Rpb25hcnlFbnRyeSwga2V5VmFsdWVQYWlycykpO1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3UmVjb3JkID0gRjMoXG5cdGZ1bmN0aW9uIChtYXliZUtleSwgaXNDbG9zZWQsIHJlY29yZCkge1xuXHRcdHZhciBfdjEgPSBpc0Nsb3NlZCA/IF9VdGlsc19UdXBsZTMoXG5cdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3VGlueVJlY29yZChyZWNvcmQpLmIsXG5cdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCcnKSxcblx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJycpKSA6IF9VdGlsc19UdXBsZTMoXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCd7Jylcblx0XHRcdFx0XSksXG5cdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3UmVjb3JkT3BlbihyZWNvcmQpLFxuXHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGVmdFBhZChcblx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkSnVzdChfVXRpbHNfVHVwbGUwKSksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCd9Jylcblx0XHRcdFx0XHRdKSkpO1xuXHRcdHZhciBzdGFydCA9IF92MS5hO1xuXHRcdHZhciBtaWRkbGUgPSBfdjEuYjtcblx0XHR2YXIgZW5kID0gX3YxLmM7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbGVmdFBhZChtYXliZUtleSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRFdmVudHMkb25DbGljaygkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRUb2dnbGUpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxpbmVTdGFydGVyLFxuXHRcdFx0XHRcdFx0bWF5YmVLZXksXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkSnVzdChpc0Nsb3NlZCksXG5cdFx0XHRcdFx0XHRzdGFydCkpLFxuXHRcdFx0XHRcdG1pZGRsZSxcblx0XHRcdFx0XHRlbmRcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3UmVjb3JkRW50cnkgPSBmdW5jdGlvbiAoX3YwKSB7XG5cdHZhciBmaWVsZCA9IF92MC5hO1xuXHR2YXIgdmFsdWUgPSBfdjAuYjtcblx0cmV0dXJuIEEyKFxuXHRcdCRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRGaWVsZChmaWVsZCksXG5cdFx0QTIoXG5cdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3LFxuXHRcdFx0JGVsbSRjb3JlJE1heWJlJEp1c3QoZmllbGQpLFxuXHRcdFx0dmFsdWUpKTtcbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1JlY29yZE9wZW4gPSBmdW5jdGlvbiAocmVjb3JkKSB7XG5cdHJldHVybiBBMihcblx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0X0xpc3RfTmlsLFxuXHRcdEEyKFxuXHRcdFx0JGVsbSRjb3JlJExpc3QkbWFwLFxuXHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1JlY29yZEVudHJ5LFxuXHRcdFx0JGVsbSRjb3JlJERpY3QkdG9MaXN0KHJlY29yZCkpKTtcbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdmlld1NlcXVlbmNlID0gRjQoXG5cdGZ1bmN0aW9uIChtYXliZUtleSwgc2VxVHlwZSwgaXNDbG9zZWQsIHZhbHVlTGlzdCkge1xuXHRcdHZhciBzdGFydGVyID0gQTIoXG5cdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRzZXFUeXBlVG9TdHJpbmcsXG5cdFx0XHQkZWxtJGNvcmUkTGlzdCRsZW5ndGgodmFsdWVMaXN0KSxcblx0XHRcdHNlcVR5cGUpO1xuXHRcdHJldHVybiBBMihcblx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGxlZnRQYWQobWF5YmVLZXkpLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2soJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kVG9nZ2xlKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRsaW5lU3RhcnRlcixcblx0XHRcdFx0XHRcdG1heWJlS2V5LFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJE1heWJlJEp1c3QoaXNDbG9zZWQpLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dChzdGFydGVyKVxuXHRcdFx0XHRcdFx0XHRdKSkpLFxuXHRcdFx0XHRcdGlzQ2xvc2VkID8gJGVsbSRodG1sJEh0bWwkdGV4dCgnJykgOiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3U2VxdWVuY2VPcGVuKHZhbHVlTGlzdClcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3U2VxdWVuY2VPcGVuID0gZnVuY3Rpb24gKHZhbHVlcykge1xuXHRyZXR1cm4gQTIoXG5cdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdF9MaXN0X05pbCxcblx0XHRBMigkZWxtJGNvcmUkTGlzdCRpbmRleGVkTWFwLCAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3Q29uc3RydWN0b3JFbnRyeSwgdmFsdWVzKSk7XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHZpZXdFeHBhbmRvID0gRjMoXG5cdGZ1bmN0aW9uIChleHBhbmRvTXNnLCBleHBhbmRvTW9kZWwsIGxheW91dCkge1xuXHRcdHZhciBibG9jayA9ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvTW91c2VCbG9ja2VyKGxheW91dCk7XG5cdFx0dmFyIF92MCA9ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvRXhwYW5kb1BlcmNlbnRzKGxheW91dCk7XG5cdFx0dmFyIHcgPSBfdjAuYTtcblx0XHR2YXIgaCA9IF92MC5iO1xuXHRcdHJldHVybiBBMihcblx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdkaXNwbGF5JywgJ2Jsb2NrJyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJ2NhbGMoJyArICh3ICsgJyAtIDRlbSknKSksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICdjYWxjKCcgKyAoaCArICcgLSA0ZW0pJykpLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwYWRkaW5nJywgJzJlbScpLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdtYXJnaW4nLCAnMCcpLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdvdmVyZmxvdycsICdhdXRvJyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BvaW50ZXItZXZlbnRzJywgYmxvY2spLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICctd2Via2l0LXVzZXItc2VsZWN0JywgYmxvY2spLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICctbW96LXVzZXItc2VsZWN0JywgYmxvY2spLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICctbXMtdXNlci1zZWxlY3QnLCBibG9jayksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3VzZXItc2VsZWN0JywgYmxvY2spXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2NvbG9yJywgJyNjY2MnKSxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmcnLCAnMCAwIDFlbSAwJylcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnLS0gTUVTU0FHRScpXG5cdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkbWFwLFxuXHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFR3ZWFrRXhwYW5kb01zZyxcblx0XHRcdFx0XHRBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3LCAkZWxtJGNvcmUkTWF5YmUkTm90aGluZywgZXhwYW5kb01zZykpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjb2xvcicsICcjY2NjJyksXG5cdFx0XHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdwYWRkaW5nJywgJzFlbSAwJylcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnLS0gTU9ERUwnKVxuXHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRUd2Vha0V4cGFuZG9Nb2RlbCxcblx0XHRcdFx0XHRBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR2aWV3LCAkZWxtJGNvcmUkTWF5YmUkTm90aGluZywgZXhwYW5kb01vZGVsKSlcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRKdW1wID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnSnVtcCcsIGE6IGF9O1xufTtcbnZhciAkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbGF6eSA9IF9WaXJ0dWFsRG9tX2xhenk7XG52YXIgJGVsbSRodG1sJEh0bWwkTGF6eSRsYXp5ID0gJGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGxhenk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdG9IaXN0b3J5UGVyY2VudHMgPSBmdW5jdGlvbiAobGF5b3V0KSB7XG5cdGlmIChsYXlvdXQuJCA9PT0gJ0hvcml6b250YWwnKSB7XG5cdFx0dmFyIHggPSBsYXlvdXQuYjtcblx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvUGVyY2VudCh4KSxcblx0XHRcdCcxMDAlJyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIHkgPSBsYXlvdXQuYztcblx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdCcxMDAlJyxcblx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvUGVyY2VudCgxIC0geSkpO1xuXHR9XG59O1xudmFyICRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRsYXp5MyA9IF9WaXJ0dWFsRG9tX2xhenkzO1xudmFyICRlbG0kaHRtbCRIdG1sJExhenkkbGF6eTMgPSAkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbGF6eTM7XG52YXIgJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcyA9ICRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3RyaW5nUHJvcGVydHkoJ2NsYXNzTmFtZScpO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGlkRm9yTWVzc2FnZUluZGV4ID0gZnVuY3Rpb24gKGluZGV4KSB7XG5cdHJldHVybiAnbXNnLScgKyAkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoaW5kZXgpO1xufTtcbnZhciAkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHRpdGxlID0gJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSgndGl0bGUnKTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSR2aWV3TWVzc2FnZSA9IEYzKFxuXHRmdW5jdGlvbiAoY3VycmVudEluZGV4LCBpbmRleCwgbXNnKSB7XG5cdFx0dmFyIG1lc3NhZ2VOYW1lID0gX0RlYnVnZ2VyX21lc3NhZ2VUb1N0cmluZyhtc2cpO1xuXHRcdHZhciBjbGFzc05hbWUgPSBfVXRpbHNfZXEoY3VycmVudEluZGV4LCBpbmRleCkgPyAnZWxtLWRlYnVnZ2VyLWVudHJ5IGVsbS1kZWJ1Z2dlci1lbnRyeS1zZWxlY3RlZCcgOiAnZWxtLWRlYnVnZ2VyLWVudHJ5Jztcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGlkKFxuXHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGlkRm9yTWVzc2FnZUluZGV4KGluZGV4KSksXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcyhjbGFzc05hbWUpLFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKGluZGV4KVxuXHRcdFx0XHRdKSxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHRpdGxlKG1lc3NhZ2VOYW1lKSxcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygnZWxtLWRlYnVnZ2VyLWVudHJ5LWNvbnRlbnQnKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KG1lc3NhZ2VOYW1lKVxuXHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdlbG0tZGVidWdnZXItZW50cnktaW5kZXgnKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KFxuXHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoaW5kZXgpKVxuXHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdF0pKTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkY29uc01zZyA9IEYzKFxuXHRmdW5jdGlvbiAoY3VycmVudEluZGV4LCBtc2csIF92MCkge1xuXHRcdHZhciBpbmRleCA9IF92MC5hO1xuXHRcdHZhciByZXN0ID0gX3YwLmI7XG5cdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRpbmRleCArIDEsXG5cdFx0XHRBMihcblx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoaW5kZXgpLFxuXHRcdFx0XHRcdEE0KCRlbG0kaHRtbCRIdG1sJExhenkkbGF6eTMsICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHZpZXdNZXNzYWdlLCBjdXJyZW50SW5kZXgsIGluZGV4LCBtc2cpKSxcblx0XHRcdFx0cmVzdCkpO1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkQXJyYXkkbGVuZ3RoID0gZnVuY3Rpb24gKF92MCkge1xuXHR2YXIgbGVuID0gX3YwLmE7XG5cdHJldHVybiBsZW47XG59O1xudmFyICRlbG0kY29yZSRCYXNpY3MkbmVxID0gX1V0aWxzX25vdEVxdWFsO1xudmFyICRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRrZXllZE5vZGUgPSBmdW5jdGlvbiAodGFnKSB7XG5cdHJldHVybiBfVmlydHVhbERvbV9rZXllZE5vZGUoXG5cdFx0X1ZpcnR1YWxEb21fbm9TY3JpcHQodGFnKSk7XG59O1xudmFyICRlbG0kaHRtbCRIdG1sJEtleWVkJG5vZGUgPSAkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20ka2V5ZWROb2RlO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JG1heFNuYXBzaG90U2l6ZSA9IDMxO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHNob3dNb3JlQnV0dG9uID0gZnVuY3Rpb24gKG51bU1lc3NhZ2VzKSB7XG5cdHZhciBuZXh0SW5kZXggPSAobnVtTWVzc2FnZXMgLSAxKSAtICgkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRtYXhTbmFwc2hvdFNpemUgKiAyKTtcblx0dmFyIGxhYmVsVGV4dCA9ICdWaWV3IG1vcmUgbWVzc2FnZXMnO1xuXHRyZXR1cm4gQTIoXG5cdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygnZWxtLWRlYnVnZ2VyLWVudHJ5JyksXG5cdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKG5leHRJbmRleClcblx0XHRcdF0pLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHRpdGxlKGxhYmVsVGV4dCksXG5cdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdlbG0tZGVidWdnZXItZW50cnktY29udGVudCcpXG5cdFx0XHRcdFx0XSksXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KGxhYmVsVGV4dClcblx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygnZWxtLWRlYnVnZ2VyLWVudHJ5LWluZGV4Jylcblx0XHRcdFx0XHRdKSxcblx0XHRcdFx0X0xpc3RfTmlsKVxuXHRcdFx0XSkpO1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRzdHlsZXMgPSBBMyhcblx0JGVsbSRodG1sJEh0bWwkbm9kZSxcblx0J3N0eWxlJyxcblx0X0xpc3RfTmlsLFxuXHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0W1xuXHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnXFxuXFxuLmVsbS1kZWJ1Z2dlci1lbnRyeSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcblxcbi5lbG0tZGVidWdnZXItZW50cnk6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDQxLCA0MSwgNDEpO1xcbn1cXG5cXG4uZWxtLWRlYnVnZ2VyLWVudHJ5LXNlbGVjdGVkLCAuZWxtLWRlYnVnZ2VyLWVudHJ5LXNlbGVjdGVkOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMCwgMTAsIDEwKTtcXG59XFxuXFxuLmVsbS1kZWJ1Z2dlci1lbnRyeS1jb250ZW50IHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcXG4gIHBhZGRpbmc6IDAgNXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5lbG0tZGVidWdnZXItZW50cnktaW5kZXgge1xcbiAgY29sb3I6ICM2NjY7XFxuICB3aWR0aDogNDBweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbicpXG5cdFx0XSkpO1xudmFyICRlbG0kY29yZSRCYXNpY3MkZ2UgPSBfVXRpbHNfZ2U7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkdmlld1NuYXBzaG90ID0gRjMoXG5cdGZ1bmN0aW9uIChzZWxlY3RlZEluZGV4LCBpbmRleCwgX3YwKSB7XG5cdFx0dmFyIG1lc3NhZ2VzID0gX3YwLm1lc3NhZ2VzO1xuXHRcdHJldHVybiBBMyhcblx0XHRcdCRlbG0kaHRtbCRIdG1sJEtleWVkJG5vZGUsXG5cdFx0XHQnZGl2Jyxcblx0XHRcdF9MaXN0X05pbCxcblx0XHRcdEEzKFxuXHRcdFx0XHQkZWxtJGNvcmUkQXJyYXkkZm9sZHIsXG5cdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGNvbnNNc2coc2VsZWN0ZWRJbmRleCksXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoaW5kZXgsIF9MaXN0X05pbCksXG5cdFx0XHRcdG1lc3NhZ2VzKS5iKTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkY29uc1NuYXBzaG90ID0gRjMoXG5cdGZ1bmN0aW9uIChzZWxlY3RlZEluZGV4LCBzbmFwc2hvdCwgX3YwKSB7XG5cdFx0dmFyIGluZGV4ID0gX3YwLmE7XG5cdFx0dmFyIHJlc3QgPSBfdjAuYjtcblx0XHR2YXIgbmV4dEluZGV4ID0gaW5kZXggKyAkZWxtJGNvcmUkQXJyYXkkbGVuZ3RoKHNuYXBzaG90Lm1lc3NhZ2VzKTtcblx0XHR2YXIgc2VsZWN0ZWRJbmRleEhlbHAgPSAoKF9VdGlsc19jbXAobmV4dEluZGV4LCBzZWxlY3RlZEluZGV4KSA+IDApICYmIChfVXRpbHNfY21wKHNlbGVjdGVkSW5kZXgsIGluZGV4KSA+IC0xKSkgPyBzZWxlY3RlZEluZGV4IDogKC0xKTtcblx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdG5leHRJbmRleCxcblx0XHRcdEEyKFxuXHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRBNCgkZWxtJGh0bWwkSHRtbCRMYXp5JGxhenkzLCAkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSR2aWV3U25hcHNob3QsIHNlbGVjdGVkSW5kZXhIZWxwLCBpbmRleCwgc25hcHNob3QpLFxuXHRcdFx0XHRyZXN0KSk7XG5cdH0pO1xudmFyICRlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkbCA9IF9Kc0FycmF5X2ZvbGRsO1xudmFyICRlbG0kY29yZSRBcnJheSRmb2xkbCA9IEYzKFxuXHRmdW5jdGlvbiAoZnVuYywgYmFzZUNhc2UsIF92MCkge1xuXHRcdHZhciB0cmVlID0gX3YwLmM7XG5cdFx0dmFyIHRhaWwgPSBfdjAuZDtcblx0XHR2YXIgaGVscGVyID0gRjIoXG5cdFx0XHRmdW5jdGlvbiAobm9kZSwgYWNjKSB7XG5cdFx0XHRcdGlmIChub2RlLiQgPT09ICdTdWJUcmVlJykge1xuXHRcdFx0XHRcdHZhciBzdWJUcmVlID0gbm9kZS5hO1xuXHRcdFx0XHRcdHJldHVybiBBMygkZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZGwsIGhlbHBlciwgYWNjLCBzdWJUcmVlKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgdmFsdWVzID0gbm9kZS5hO1xuXHRcdFx0XHRcdHJldHVybiBBMygkZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZGwsIGZ1bmMsIGFjYywgdmFsdWVzKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0JGVsbSRjb3JlJEVsbSRKc0FycmF5JGZvbGRsLFxuXHRcdFx0ZnVuYyxcblx0XHRcdEEzKCRlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkbCwgaGVscGVyLCBiYXNlQ2FzZSwgdHJlZSksXG5cdFx0XHR0YWlsKTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkdmlld0FsbFNuYXBzaG90cyA9IEYzKFxuXHRmdW5jdGlvbiAoc2VsZWN0ZWRJbmRleCwgc3RhcnRJbmRleCwgc25hcHNob3RzKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0QTMoXG5cdFx0XHRcdCRlbG0kY29yZSRBcnJheSRmb2xkbCxcblx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkY29uc1NuYXBzaG90KHNlbGVjdGVkSW5kZXgpLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKHN0YXJ0SW5kZXgsIF9MaXN0X05pbCksXG5cdFx0XHRcdHNuYXBzaG90cykuYik7XG5cdH0pO1xudmFyICRlbG0kY29yZSRBcnJheSRmcm9tTGlzdEhlbHAgPSBGMyhcblx0ZnVuY3Rpb24gKGxpc3QsIG5vZGVMaXN0LCBub2RlTGlzdFNpemUpIHtcblx0XHRmcm9tTGlzdEhlbHA6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdHZhciBfdjAgPSBBMigkZWxtJGNvcmUkRWxtJEpzQXJyYXkkaW5pdGlhbGl6ZUZyb21MaXN0LCAkZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yLCBsaXN0KTtcblx0XHRcdHZhciBqc0FycmF5ID0gX3YwLmE7XG5cdFx0XHR2YXIgcmVtYWluaW5nSXRlbXMgPSBfdjAuYjtcblx0XHRcdGlmIChfVXRpbHNfY21wKFxuXHRcdFx0XHQkZWxtJGNvcmUkRWxtJEpzQXJyYXkkbGVuZ3RoKGpzQXJyYXkpLFxuXHRcdFx0XHQkZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yKSA8IDApIHtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdCRlbG0kY29yZSRBcnJheSRidWlsZGVyVG9BcnJheSxcblx0XHRcdFx0XHR0cnVlLFxuXHRcdFx0XHRcdHtub2RlTGlzdDogbm9kZUxpc3QsIG5vZGVMaXN0U2l6ZTogbm9kZUxpc3RTaXplLCB0YWlsOiBqc0FycmF5fSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgJHRlbXAkbGlzdCA9IHJlbWFpbmluZ0l0ZW1zLFxuXHRcdFx0XHRcdCR0ZW1wJG5vZGVMaXN0ID0gQTIoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHQkZWxtJGNvcmUkQXJyYXkkTGVhZihqc0FycmF5KSxcblx0XHRcdFx0XHRub2RlTGlzdCksXG5cdFx0XHRcdFx0JHRlbXAkbm9kZUxpc3RTaXplID0gbm9kZUxpc3RTaXplICsgMTtcblx0XHRcdFx0bGlzdCA9ICR0ZW1wJGxpc3Q7XG5cdFx0XHRcdG5vZGVMaXN0ID0gJHRlbXAkbm9kZUxpc3Q7XG5cdFx0XHRcdG5vZGVMaXN0U2l6ZSA9ICR0ZW1wJG5vZGVMaXN0U2l6ZTtcblx0XHRcdFx0Y29udGludWUgZnJvbUxpc3RIZWxwO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJEFycmF5JGZyb21MaXN0ID0gZnVuY3Rpb24gKGxpc3QpIHtcblx0aWYgKCFsaXN0LmIpIHtcblx0XHRyZXR1cm4gJGVsbSRjb3JlJEFycmF5JGVtcHR5O1xuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBBMygkZWxtJGNvcmUkQXJyYXkkZnJvbUxpc3RIZWxwLCBsaXN0LCBfTGlzdF9OaWwsIDApO1xuXHR9XG59O1xudmFyICRlbG0kY29yZSRCaXR3aXNlJGFuZCA9IF9CaXR3aXNlX2FuZDtcbnZhciAkZWxtJGNvcmUkQml0d2lzZSRzaGlmdFJpZ2h0WmZCeSA9IF9CaXR3aXNlX3NoaWZ0UmlnaHRaZkJ5O1xudmFyICRlbG0kY29yZSRBcnJheSRiaXRNYXNrID0gNDI5NDk2NzI5NSA+Pj4gKDMyIC0gJGVsbSRjb3JlJEFycmF5JHNoaWZ0U3RlcCk7XG52YXIgJGVsbSRjb3JlJEVsbSRKc0FycmF5JHVuc2FmZUdldCA9IF9Kc0FycmF5X3Vuc2FmZUdldDtcbnZhciAkZWxtJGNvcmUkQXJyYXkkZ2V0SGVscCA9IEYzKFxuXHRmdW5jdGlvbiAoc2hpZnQsIGluZGV4LCB0cmVlKSB7XG5cdFx0Z2V0SGVscDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIHBvcyA9ICRlbG0kY29yZSRBcnJheSRiaXRNYXNrICYgKGluZGV4ID4+PiBzaGlmdCk7XG5cdFx0XHR2YXIgX3YwID0gQTIoJGVsbSRjb3JlJEVsbSRKc0FycmF5JHVuc2FmZUdldCwgcG9zLCB0cmVlKTtcblx0XHRcdGlmIChfdjAuJCA9PT0gJ1N1YlRyZWUnKSB7XG5cdFx0XHRcdHZhciBzdWJUcmVlID0gX3YwLmE7XG5cdFx0XHRcdHZhciAkdGVtcCRzaGlmdCA9IHNoaWZ0IC0gJGVsbSRjb3JlJEFycmF5JHNoaWZ0U3RlcCxcblx0XHRcdFx0XHQkdGVtcCRpbmRleCA9IGluZGV4LFxuXHRcdFx0XHRcdCR0ZW1wJHRyZWUgPSBzdWJUcmVlO1xuXHRcdFx0XHRzaGlmdCA9ICR0ZW1wJHNoaWZ0O1xuXHRcdFx0XHRpbmRleCA9ICR0ZW1wJGluZGV4O1xuXHRcdFx0XHR0cmVlID0gJHRlbXAkdHJlZTtcblx0XHRcdFx0Y29udGludWUgZ2V0SGVscDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciB2YWx1ZXMgPSBfdjAuYTtcblx0XHRcdFx0cmV0dXJuIEEyKCRlbG0kY29yZSRFbG0kSnNBcnJheSR1bnNhZmVHZXQsICRlbG0kY29yZSRBcnJheSRiaXRNYXNrICYgaW5kZXgsIHZhbHVlcyk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkQml0d2lzZSRzaGlmdExlZnRCeSA9IF9CaXR3aXNlX3NoaWZ0TGVmdEJ5O1xudmFyICRlbG0kY29yZSRBcnJheSR0YWlsSW5kZXggPSBmdW5jdGlvbiAobGVuKSB7XG5cdHJldHVybiAobGVuID4+PiA1KSA8PCA1O1xufTtcbnZhciAkZWxtJGNvcmUkQXJyYXkkZ2V0ID0gRjIoXG5cdGZ1bmN0aW9uIChpbmRleCwgX3YwKSB7XG5cdFx0dmFyIGxlbiA9IF92MC5hO1xuXHRcdHZhciBzdGFydFNoaWZ0ID0gX3YwLmI7XG5cdFx0dmFyIHRyZWUgPSBfdjAuYztcblx0XHR2YXIgdGFpbCA9IF92MC5kO1xuXHRcdHJldHVybiAoKGluZGV4IDwgMCkgfHwgKF9VdGlsc19jbXAoaW5kZXgsIGxlbikgPiAtMSkpID8gJGVsbSRjb3JlJE1heWJlJE5vdGhpbmcgOiAoKF9VdGlsc19jbXAoXG5cdFx0XHRpbmRleCxcblx0XHRcdCRlbG0kY29yZSRBcnJheSR0YWlsSW5kZXgobGVuKSkgPiAtMSkgPyAkZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdEEyKCRlbG0kY29yZSRFbG0kSnNBcnJheSR1bnNhZmVHZXQsICRlbG0kY29yZSRBcnJheSRiaXRNYXNrICYgaW5kZXgsIHRhaWwpKSA6ICRlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0QTMoJGVsbSRjb3JlJEFycmF5JGdldEhlbHAsIHN0YXJ0U2hpZnQsIGluZGV4LCB0cmVlKSkpO1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkRWxtJEpzQXJyYXkkYXBwZW5kTiA9IF9Kc0FycmF5X2FwcGVuZE47XG52YXIgJGVsbSRjb3JlJEVsbSRKc0FycmF5JHNsaWNlID0gX0pzQXJyYXlfc2xpY2U7XG52YXIgJGVsbSRjb3JlJEFycmF5JGFwcGVuZEhlbHBCdWlsZGVyID0gRjIoXG5cdGZ1bmN0aW9uICh0YWlsLCBidWlsZGVyKSB7XG5cdFx0dmFyIHRhaWxMZW4gPSAkZWxtJGNvcmUkRWxtJEpzQXJyYXkkbGVuZ3RoKHRhaWwpO1xuXHRcdHZhciBub3RBcHBlbmRlZCA9ICgkZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yIC0gJGVsbSRjb3JlJEVsbSRKc0FycmF5JGxlbmd0aChidWlsZGVyLnRhaWwpKSAtIHRhaWxMZW47XG5cdFx0dmFyIGFwcGVuZGVkID0gQTMoJGVsbSRjb3JlJEVsbSRKc0FycmF5JGFwcGVuZE4sICRlbG0kY29yZSRBcnJheSRicmFuY2hGYWN0b3IsIGJ1aWxkZXIudGFpbCwgdGFpbCk7XG5cdFx0cmV0dXJuIChub3RBcHBlbmRlZCA8IDApID8ge1xuXHRcdFx0bm9kZUxpc3Q6IEEyKFxuXHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHQkZWxtJGNvcmUkQXJyYXkkTGVhZihhcHBlbmRlZCksXG5cdFx0XHRcdGJ1aWxkZXIubm9kZUxpc3QpLFxuXHRcdFx0bm9kZUxpc3RTaXplOiBidWlsZGVyLm5vZGVMaXN0U2l6ZSArIDEsXG5cdFx0XHR0YWlsOiBBMygkZWxtJGNvcmUkRWxtJEpzQXJyYXkkc2xpY2UsIG5vdEFwcGVuZGVkLCB0YWlsTGVuLCB0YWlsKVxuXHRcdH0gOiAoKCFub3RBcHBlbmRlZCkgPyB7XG5cdFx0XHRub2RlTGlzdDogQTIoXG5cdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdCRlbG0kY29yZSRBcnJheSRMZWFmKGFwcGVuZGVkKSxcblx0XHRcdFx0YnVpbGRlci5ub2RlTGlzdCksXG5cdFx0XHRub2RlTGlzdFNpemU6IGJ1aWxkZXIubm9kZUxpc3RTaXplICsgMSxcblx0XHRcdHRhaWw6ICRlbG0kY29yZSRFbG0kSnNBcnJheSRlbXB0eVxuXHRcdH0gOiB7bm9kZUxpc3Q6IGJ1aWxkZXIubm9kZUxpc3QsIG5vZGVMaXN0U2l6ZTogYnVpbGRlci5ub2RlTGlzdFNpemUsIHRhaWw6IGFwcGVuZGVkfSk7XG5cdH0pO1xudmFyICRlbG0kY29yZSRMaXN0JGRyb3AgPSBGMihcblx0ZnVuY3Rpb24gKG4sIGxpc3QpIHtcblx0XHRkcm9wOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAobiA8PSAwKSB7XG5cdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aWYgKCFsaXN0LmIpIHtcblx0XHRcdFx0XHRyZXR1cm4gbGlzdDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgeCA9IGxpc3QuYTtcblx0XHRcdFx0XHR2YXIgeHMgPSBsaXN0LmI7XG5cdFx0XHRcdFx0dmFyICR0ZW1wJG4gPSBuIC0gMSxcblx0XHRcdFx0XHRcdCR0ZW1wJGxpc3QgPSB4cztcblx0XHRcdFx0XHRuID0gJHRlbXAkbjtcblx0XHRcdFx0XHRsaXN0ID0gJHRlbXAkbGlzdDtcblx0XHRcdFx0XHRjb250aW51ZSBkcm9wO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkQXJyYXkkc2xpY2VMZWZ0ID0gRjIoXG5cdGZ1bmN0aW9uIChmcm9tLCBhcnJheSkge1xuXHRcdHZhciBsZW4gPSBhcnJheS5hO1xuXHRcdHZhciB0cmVlID0gYXJyYXkuYztcblx0XHR2YXIgdGFpbCA9IGFycmF5LmQ7XG5cdFx0aWYgKCFmcm9tKSB7XG5cdFx0XHRyZXR1cm4gYXJyYXk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmIChfVXRpbHNfY21wKFxuXHRcdFx0XHRmcm9tLFxuXHRcdFx0XHQkZWxtJGNvcmUkQXJyYXkkdGFpbEluZGV4KGxlbikpID4gLTEpIHtcblx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdCRlbG0kY29yZSRBcnJheSRBcnJheV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRsZW4gLSBmcm9tLFxuXHRcdFx0XHRcdCRlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAsXG5cdFx0XHRcdFx0JGVsbSRjb3JlJEVsbSRKc0FycmF5JGVtcHR5LFxuXHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJEVsbSRKc0FycmF5JHNsaWNlLFxuXHRcdFx0XHRcdFx0ZnJvbSAtICRlbG0kY29yZSRBcnJheSR0YWlsSW5kZXgobGVuKSxcblx0XHRcdFx0XHRcdCRlbG0kY29yZSRFbG0kSnNBcnJheSRsZW5ndGgodGFpbCksXG5cdFx0XHRcdFx0XHR0YWlsKSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgc2tpcE5vZGVzID0gKGZyb20gLyAkZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yKSB8IDA7XG5cdFx0XHRcdHZhciBoZWxwZXIgPSBGMihcblx0XHRcdFx0XHRmdW5jdGlvbiAobm9kZSwgYWNjKSB7XG5cdFx0XHRcdFx0XHRpZiAobm9kZS4kID09PSAnU3ViVHJlZScpIHtcblx0XHRcdFx0XHRcdFx0dmFyIHN1YlRyZWUgPSBub2RlLmE7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBBMygkZWxtJGNvcmUkRWxtJEpzQXJyYXkkZm9sZHIsIGhlbHBlciwgYWNjLCBzdWJUcmVlKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHZhciBsZWFmID0gbm9kZS5hO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoJGVsbSRjb3JlJExpc3QkY29ucywgbGVhZiwgYWNjKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0dmFyIGxlYWZOb2RlcyA9IEEzKFxuXHRcdFx0XHRcdCRlbG0kY29yZSRFbG0kSnNBcnJheSRmb2xkcixcblx0XHRcdFx0XHRoZWxwZXIsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W3RhaWxdKSxcblx0XHRcdFx0XHR0cmVlKTtcblx0XHRcdFx0dmFyIG5vZGVzVG9JbnNlcnQgPSBBMigkZWxtJGNvcmUkTGlzdCRkcm9wLCBza2lwTm9kZXMsIGxlYWZOb2Rlcyk7XG5cdFx0XHRcdGlmICghbm9kZXNUb0luc2VydC5iKSB7XG5cdFx0XHRcdFx0cmV0dXJuICRlbG0kY29yZSRBcnJheSRlbXB0eTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgaGVhZCA9IG5vZGVzVG9JbnNlcnQuYTtcblx0XHRcdFx0XHR2YXIgcmVzdCA9IG5vZGVzVG9JbnNlcnQuYjtcblx0XHRcdFx0XHR2YXIgZmlyc3RTbGljZSA9IGZyb20gLSAoc2tpcE5vZGVzICogJGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3Rvcik7XG5cdFx0XHRcdFx0dmFyIGluaXRpYWxCdWlsZGVyID0ge1xuXHRcdFx0XHRcdFx0bm9kZUxpc3Q6IF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdG5vZGVMaXN0U2l6ZTogMCxcblx0XHRcdFx0XHRcdHRhaWw6IEEzKFxuXHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkRWxtJEpzQXJyYXkkc2xpY2UsXG5cdFx0XHRcdFx0XHRcdGZpcnN0U2xpY2UsXG5cdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRFbG0kSnNBcnJheSRsZW5ndGgoaGVhZCksXG5cdFx0XHRcdFx0XHRcdGhlYWQpXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkQXJyYXkkYnVpbGRlclRvQXJyYXksXG5cdFx0XHRcdFx0XHR0cnVlLFxuXHRcdFx0XHRcdFx0QTMoJGVsbSRjb3JlJExpc3QkZm9sZGwsICRlbG0kY29yZSRBcnJheSRhcHBlbmRIZWxwQnVpbGRlciwgaW5pdGlhbEJ1aWxkZXIsIHJlc3QpKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJEFycmF5JGZldGNoTmV3VGFpbCA9IEY0KFxuXHRmdW5jdGlvbiAoc2hpZnQsIGVuZCwgdHJlZUVuZCwgdHJlZSkge1xuXHRcdGZldGNoTmV3VGFpbDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIHBvcyA9ICRlbG0kY29yZSRBcnJheSRiaXRNYXNrICYgKHRyZWVFbmQgPj4+IHNoaWZ0KTtcblx0XHRcdHZhciBfdjAgPSBBMigkZWxtJGNvcmUkRWxtJEpzQXJyYXkkdW5zYWZlR2V0LCBwb3MsIHRyZWUpO1xuXHRcdFx0aWYgKF92MC4kID09PSAnU3ViVHJlZScpIHtcblx0XHRcdFx0dmFyIHN1YiA9IF92MC5hO1xuXHRcdFx0XHR2YXIgJHRlbXAkc2hpZnQgPSBzaGlmdCAtICRlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAsXG5cdFx0XHRcdFx0JHRlbXAkZW5kID0gZW5kLFxuXHRcdFx0XHRcdCR0ZW1wJHRyZWVFbmQgPSB0cmVlRW5kLFxuXHRcdFx0XHRcdCR0ZW1wJHRyZWUgPSBzdWI7XG5cdFx0XHRcdHNoaWZ0ID0gJHRlbXAkc2hpZnQ7XG5cdFx0XHRcdGVuZCA9ICR0ZW1wJGVuZDtcblx0XHRcdFx0dHJlZUVuZCA9ICR0ZW1wJHRyZWVFbmQ7XG5cdFx0XHRcdHRyZWUgPSAkdGVtcCR0cmVlO1xuXHRcdFx0XHRjb250aW51ZSBmZXRjaE5ld1RhaWw7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgdmFsdWVzID0gX3YwLmE7XG5cdFx0XHRcdHJldHVybiBBMygkZWxtJGNvcmUkRWxtJEpzQXJyYXkkc2xpY2UsIDAsICRlbG0kY29yZSRBcnJheSRiaXRNYXNrICYgZW5kLCB2YWx1ZXMpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJEFycmF5JGhvaXN0VHJlZSA9IEYzKFxuXHRmdW5jdGlvbiAob2xkU2hpZnQsIG5ld1NoaWZ0LCB0cmVlKSB7XG5cdFx0aG9pc3RUcmVlOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAoKF9VdGlsc19jbXAob2xkU2hpZnQsIG5ld1NoaWZ0KSA8IDEpIHx8ICghJGVsbSRjb3JlJEVsbSRKc0FycmF5JGxlbmd0aCh0cmVlKSkpIHtcblx0XHRcdFx0cmV0dXJuIHRyZWU7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgX3YwID0gQTIoJGVsbSRjb3JlJEVsbSRKc0FycmF5JHVuc2FmZUdldCwgMCwgdHJlZSk7XG5cdFx0XHRcdGlmIChfdjAuJCA9PT0gJ1N1YlRyZWUnKSB7XG5cdFx0XHRcdFx0dmFyIHN1YiA9IF92MC5hO1xuXHRcdFx0XHRcdHZhciAkdGVtcCRvbGRTaGlmdCA9IG9sZFNoaWZ0IC0gJGVsbSRjb3JlJEFycmF5JHNoaWZ0U3RlcCxcblx0XHRcdFx0XHRcdCR0ZW1wJG5ld1NoaWZ0ID0gbmV3U2hpZnQsXG5cdFx0XHRcdFx0XHQkdGVtcCR0cmVlID0gc3ViO1xuXHRcdFx0XHRcdG9sZFNoaWZ0ID0gJHRlbXAkb2xkU2hpZnQ7XG5cdFx0XHRcdFx0bmV3U2hpZnQgPSAkdGVtcCRuZXdTaGlmdDtcblx0XHRcdFx0XHR0cmVlID0gJHRlbXAkdHJlZTtcblx0XHRcdFx0XHRjb250aW51ZSBob2lzdFRyZWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRyZWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyICRlbG0kY29yZSRFbG0kSnNBcnJheSR1bnNhZmVTZXQgPSBfSnNBcnJheV91bnNhZmVTZXQ7XG52YXIgJGVsbSRjb3JlJEFycmF5JHNsaWNlVHJlZSA9IEYzKFxuXHRmdW5jdGlvbiAoc2hpZnQsIGVuZElkeCwgdHJlZSkge1xuXHRcdHZhciBsYXN0UG9zID0gJGVsbSRjb3JlJEFycmF5JGJpdE1hc2sgJiAoZW5kSWR4ID4+PiBzaGlmdCk7XG5cdFx0dmFyIF92MCA9IEEyKCRlbG0kY29yZSRFbG0kSnNBcnJheSR1bnNhZmVHZXQsIGxhc3RQb3MsIHRyZWUpO1xuXHRcdGlmIChfdjAuJCA9PT0gJ1N1YlRyZWUnKSB7XG5cdFx0XHR2YXIgc3ViID0gX3YwLmE7XG5cdFx0XHR2YXIgbmV3U3ViID0gQTMoJGVsbSRjb3JlJEFycmF5JHNsaWNlVHJlZSwgc2hpZnQgLSAkZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwLCBlbmRJZHgsIHN1Yik7XG5cdFx0XHRyZXR1cm4gKCEkZWxtJGNvcmUkRWxtJEpzQXJyYXkkbGVuZ3RoKG5ld1N1YikpID8gQTMoJGVsbSRjb3JlJEVsbSRKc0FycmF5JHNsaWNlLCAwLCBsYXN0UG9zLCB0cmVlKSA6IEEzKFxuXHRcdFx0XHQkZWxtJGNvcmUkRWxtJEpzQXJyYXkkdW5zYWZlU2V0LFxuXHRcdFx0XHRsYXN0UG9zLFxuXHRcdFx0XHQkZWxtJGNvcmUkQXJyYXkkU3ViVHJlZShuZXdTdWIpLFxuXHRcdFx0XHRBMygkZWxtJGNvcmUkRWxtJEpzQXJyYXkkc2xpY2UsIDAsIGxhc3RQb3MgKyAxLCB0cmVlKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBBMygkZWxtJGNvcmUkRWxtJEpzQXJyYXkkc2xpY2UsIDAsIGxhc3RQb3MsIHRyZWUpO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJEFycmF5JHNsaWNlUmlnaHQgPSBGMihcblx0ZnVuY3Rpb24gKGVuZCwgYXJyYXkpIHtcblx0XHR2YXIgbGVuID0gYXJyYXkuYTtcblx0XHR2YXIgc3RhcnRTaGlmdCA9IGFycmF5LmI7XG5cdFx0dmFyIHRyZWUgPSBhcnJheS5jO1xuXHRcdHZhciB0YWlsID0gYXJyYXkuZDtcblx0XHRpZiAoX1V0aWxzX2VxKGVuZCwgbGVuKSkge1xuXHRcdFx0cmV0dXJuIGFycmF5O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoX1V0aWxzX2NtcChcblx0XHRcdFx0ZW5kLFxuXHRcdFx0XHQkZWxtJGNvcmUkQXJyYXkkdGFpbEluZGV4KGxlbikpID4gLTEpIHtcblx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdCRlbG0kY29yZSRBcnJheSRBcnJheV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHRlbmQsXG5cdFx0XHRcdFx0c3RhcnRTaGlmdCxcblx0XHRcdFx0XHR0cmVlLFxuXHRcdFx0XHRcdEEzKCRlbG0kY29yZSRFbG0kSnNBcnJheSRzbGljZSwgMCwgJGVsbSRjb3JlJEFycmF5JGJpdE1hc2sgJiBlbmQsIHRhaWwpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBlbmRJZHggPSAkZWxtJGNvcmUkQXJyYXkkdGFpbEluZGV4KGVuZCk7XG5cdFx0XHRcdHZhciBkZXB0aCA9ICRlbG0kY29yZSRCYXNpY3MkZmxvb3IoXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkQmFzaWNzJGxvZ0Jhc2UsXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkQXJyYXkkYnJhbmNoRmFjdG9yLFxuXHRcdFx0XHRcdFx0QTIoJGVsbSRjb3JlJEJhc2ljcyRtYXgsIDEsIGVuZElkeCAtIDEpKSk7XG5cdFx0XHRcdHZhciBuZXdTaGlmdCA9IEEyKCRlbG0kY29yZSRCYXNpY3MkbWF4LCA1LCBkZXB0aCAqICRlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXApO1xuXHRcdFx0XHRyZXR1cm4gQTQoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJEFycmF5JEFycmF5X2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdGVuZCxcblx0XHRcdFx0XHRuZXdTaGlmdCxcblx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdCRlbG0kY29yZSRBcnJheSRob2lzdFRyZWUsXG5cdFx0XHRcdFx0XHRzdGFydFNoaWZ0LFxuXHRcdFx0XHRcdFx0bmV3U2hpZnQsXG5cdFx0XHRcdFx0XHRBMygkZWxtJGNvcmUkQXJyYXkkc2xpY2VUcmVlLCBzdGFydFNoaWZ0LCBlbmRJZHgsIHRyZWUpKSxcblx0XHRcdFx0XHRBNCgkZWxtJGNvcmUkQXJyYXkkZmV0Y2hOZXdUYWlsLCBzdGFydFNoaWZ0LCBlbmQsIGVuZElkeCwgdHJlZSkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJEFycmF5JHRyYW5zbGF0ZUluZGV4ID0gRjIoXG5cdGZ1bmN0aW9uIChpbmRleCwgX3YwKSB7XG5cdFx0dmFyIGxlbiA9IF92MC5hO1xuXHRcdHZhciBwb3NJbmRleCA9IChpbmRleCA8IDApID8gKGxlbiArIGluZGV4KSA6IGluZGV4O1xuXHRcdHJldHVybiAocG9zSW5kZXggPCAwKSA/IDAgOiAoKF9VdGlsc19jbXAocG9zSW5kZXgsIGxlbikgPiAwKSA/IGxlbiA6IHBvc0luZGV4KTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJEFycmF5JHNsaWNlID0gRjMoXG5cdGZ1bmN0aW9uIChmcm9tLCB0bywgYXJyYXkpIHtcblx0XHR2YXIgY29ycmVjdFRvID0gQTIoJGVsbSRjb3JlJEFycmF5JHRyYW5zbGF0ZUluZGV4LCB0bywgYXJyYXkpO1xuXHRcdHZhciBjb3JyZWN0RnJvbSA9IEEyKCRlbG0kY29yZSRBcnJheSR0cmFuc2xhdGVJbmRleCwgZnJvbSwgYXJyYXkpO1xuXHRcdHJldHVybiAoX1V0aWxzX2NtcChjb3JyZWN0RnJvbSwgY29ycmVjdFRvKSA+IDApID8gJGVsbSRjb3JlJEFycmF5JGVtcHR5IDogQTIoXG5cdFx0XHQkZWxtJGNvcmUkQXJyYXkkc2xpY2VMZWZ0LFxuXHRcdFx0Y29ycmVjdEZyb20sXG5cdFx0XHRBMigkZWxtJGNvcmUkQXJyYXkkc2xpY2VSaWdodCwgY29ycmVjdFRvLCBhcnJheSkpO1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSR2aWV3UmVjZW50U25hcHNob3RzID0gRjMoXG5cdGZ1bmN0aW9uIChzZWxlY3RlZEluZGV4LCByZWNlbnRNZXNzYWdlc051bSwgc25hcHNob3RzKSB7XG5cdFx0dmFyIG1lc3NhZ2VzVG9GaWxsID0gJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkbWF4U25hcHNob3RTaXplIC0gcmVjZW50TWVzc2FnZXNOdW07XG5cdFx0dmFyIGFycmF5TGVuZ3RoID0gJGVsbSRjb3JlJEFycmF5JGxlbmd0aChzbmFwc2hvdHMpO1xuXHRcdHZhciBzbmFwc2hvdHNUb1JlbmRlciA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHZhciBfdjAgPSBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRBMigkZWxtJGNvcmUkQXJyYXkkZ2V0LCBhcnJheUxlbmd0aCAtIDIsIHNuYXBzaG90cyksXG5cdFx0XHRcdEEyKCRlbG0kY29yZSRBcnJheSRnZXQsIGFycmF5TGVuZ3RoIC0gMSwgc25hcHNob3RzKSk7XG5cdFx0XHRpZiAoKF92MC5hLiQgPT09ICdKdXN0JykgJiYgKF92MC5iLiQgPT09ICdKdXN0JykpIHtcblx0XHRcdFx0dmFyIGZpbGxlclNuYXBzaG90ID0gX3YwLmEuYTtcblx0XHRcdFx0dmFyIHJlY2VudFNuYXBzaG90ID0gX3YwLmIuYTtcblx0XHRcdFx0cmV0dXJuICRlbG0kY29yZSRBcnJheSRmcm9tTGlzdChcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0bWVzc2FnZXM6IEEzKCRlbG0kY29yZSRBcnJheSRzbGljZSwgMCwgbWVzc2FnZXNUb0ZpbGwsIGZpbGxlclNuYXBzaG90Lm1lc3NhZ2VzKSxcblx0XHRcdFx0XHRcdFx0bW9kZWw6IGZpbGxlclNuYXBzaG90Lm1vZGVsXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRyZWNlbnRTbmFwc2hvdFxuXHRcdFx0XHRcdFx0XSkpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHNuYXBzaG90cztcblx0XHRcdH1cblx0XHR9KCk7XG5cdFx0dmFyIHN0YXJ0aW5nSW5kZXggPSAoKGFycmF5TGVuZ3RoICogJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkbWF4U25hcHNob3RTaXplKSAtICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JG1heFNuYXBzaG90U2l6ZSkgLSBtZXNzYWdlc1RvRmlsbDtcblx0XHRyZXR1cm4gQTMoJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkdmlld0FsbFNuYXBzaG90cywgc2VsZWN0ZWRJbmRleCwgc3RhcnRpbmdJbmRleCwgc25hcHNob3RzVG9SZW5kZXIpO1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSR2aWV3ID0gRjIoXG5cdGZ1bmN0aW9uIChtYXliZUluZGV4LCBfdjApIHtcblx0XHR2YXIgc25hcHNob3RzID0gX3YwLnNuYXBzaG90cztcblx0XHR2YXIgcmVjZW50ID0gX3YwLnJlY2VudDtcblx0XHR2YXIgbnVtTWVzc2FnZXMgPSBfdjAubnVtTWVzc2FnZXM7XG5cdFx0dmFyIHJlY2VudE1lc3NhZ2VTdGFydEluZGV4ID0gbnVtTWVzc2FnZXMgLSByZWNlbnQubnVtTWVzc2FnZXM7XG5cdFx0dmFyIGluZGV4ID0gQTIoJGVsbSRjb3JlJE1heWJlJHdpdGhEZWZhdWx0LCAtMSwgbWF5YmVJbmRleCk7XG5cdFx0dmFyIG5ld1N0dWZmID0gQTMoXG5cdFx0XHQkZWxtJGh0bWwkSHRtbCRLZXllZCRub2RlLFxuXHRcdFx0J2RpdicsXG5cdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRBMyhcblx0XHRcdFx0JGVsbSRjb3JlJExpc3QkZm9sZHIsXG5cdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGNvbnNNc2coaW5kZXgpLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKHJlY2VudE1lc3NhZ2VTdGFydEluZGV4LCBfTGlzdF9OaWwpLFxuXHRcdFx0XHRyZWNlbnQubWVzc2FnZXMpLmIpO1xuXHRcdHZhciBvbmx5UmVuZGVyUmVjZW50TWVzc2FnZXMgPSAoIV9VdGlsc19lcShpbmRleCwgLTEpKSB8fCAoJGVsbSRjb3JlJEFycmF5JGxlbmd0aChzbmFwc2hvdHMpIDwgMik7XG5cdFx0dmFyIG9sZFN0dWZmID0gb25seVJlbmRlclJlY2VudE1lc3NhZ2VzID8gQTQoJGVsbSRodG1sJEh0bWwkTGF6eSRsYXp5MywgJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3Rvcnkkdmlld0FsbFNuYXBzaG90cywgaW5kZXgsIDAsIHNuYXBzaG90cykgOiBBNCgkZWxtJGh0bWwkSHRtbCRMYXp5JGxhenkzLCAkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSR2aWV3UmVjZW50U25hcHNob3RzLCBpbmRleCwgcmVjZW50Lm51bU1lc3NhZ2VzLCBzbmFwc2hvdHMpO1xuXHRcdHJldHVybiBBMihcblx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaWQoJ2VsbS1kZWJ1Z2dlci1zaWRlYmFyJyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJzEwMCUnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnb3ZlcmZsb3cteScsICdhdXRvJyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICdjYWxjKDEwMCUgLSA3MnB4KScpXG5cdFx0XHRcdF0pLFxuXHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHN0eWxlcyxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0XHRuZXdTdHVmZixcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdFx0XHRvbGRTdHVmZixcblx0XHRcdFx0XHRcdG9ubHlSZW5kZXJSZWNlbnRNZXNzYWdlcyA/IF9MaXN0X05pbCA6IF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHNob3dNb3JlQnV0dG9uKG51bU1lc3NhZ2VzKVxuXHRcdFx0XHRcdFx0XHRdKSkpKSk7XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFN3YXBMYXlvdXQgPSB7JDogJ1N3YXBMYXlvdXQnfTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR0b0hpc3RvcnlJY29uID0gZnVuY3Rpb24gKGxheW91dCkge1xuXHRpZiAobGF5b3V0LiQgPT09ICdIb3Jpem9udGFsJykge1xuXHRcdHJldHVybiAnTTEzIDFhMyAzIDAgMCAxIDMgM3Y4YTMgMyAwIDAgMS0zIDNoLTEwYTMgMyAwIDAgMS0zLTN2LThhMyAzIDAgMCAxIDMtM3ogTTEzIDNoLTEwYTEgMSAwIDAgMC0xIDF2NWgxMnYtNWExIDEgMCAwIDAtMS0xeiBNMTQgMTBoLTEydjJhMSAxIDAgMCAwIDEgMWgxMGExIDEgMCAwIDAgMS0xeic7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuICdNMCA0YTMgMyAwIDAgMSAzLTNoMTBhMyAzIDAgMCAxIDMgM3Y4YTMgMyAwIDAgMS0zIDNoLTEwYTMgMyAwIDAgMS0zLTN6IE0yIDR2OGExIDEgMCAwIDAgMSAxaDJ2LTEwaC0yYTEgMSAwIDAgMC0xIDF6IE02IDN2MTBoN2ExIDEgMCAwIDAgMS0xdi04YTEgMSAwIDAgMC0xLTF6Jztcblx0fVxufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRpY29uID0gZnVuY3Rpb24gKHBhdGgpIHtcblx0cmV0dXJuIEE0KFxuXHRcdCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRub2RlTlMsXG5cdFx0J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyxcblx0XHQnc3ZnJyxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRhdHRyaWJ1dGUsICd2aWV3Qm94JywgJzAgMCAxNiAxNicpLFxuXHRcdFx0XHRBMigkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kYXR0cmlidXRlLCAneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKSxcblx0XHRcdFx0QTIoJGVsbSR2aXJ0dWFsX2RvbSRWaXJ0dWFsRG9tJGF0dHJpYnV0ZSwgJ2ZpbGwnLCAnY3VycmVudENvbG9yJyksXG5cdFx0XHRcdEEyKCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRhdHRyaWJ1dGUsICd3aWR0aCcsICcxNnB4JyksXG5cdFx0XHRcdEEyKCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRhdHRyaWJ1dGUsICdoZWlnaHQnLCAnMTZweCcpXG5cdFx0XHRdKSxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEE0KFxuXHRcdFx0XHQkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kbm9kZU5TLFxuXHRcdFx0XHQnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLFxuXHRcdFx0XHQncGF0aCcsXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kYXR0cmlidXRlLCAnZCcsIHBhdGgpXG5cdFx0XHRcdFx0XSksXG5cdFx0XHRcdF9MaXN0X05pbClcblx0XHRcdF0pKTtcbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdmlld0hpc3RvcnlCdXR0b24gPSBGMyhcblx0ZnVuY3Rpb24gKGxhYmVsLCBtc2csIHBhdGgpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHQkZWxtJGh0bWwkSHRtbCRidXR0b24sXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZGlzcGxheScsICdmbGV4JyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2ZsZXgtZGlyZWN0aW9uJywgJ3JvdycpLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdhbGlnbi1pdGVtcycsICdjZW50ZXInKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYmFja2dyb3VuZCcsICdub25lJyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2JvcmRlcicsICdub25lJyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2NvbG9yJywgJ2luaGVyaXQnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY3Vyc29yJywgJ3BvaW50ZXInKSxcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRFdmVudHMkb25DbGljayhtc2cpXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kaWNvbihwYXRoKSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRzcGFuLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3BhZGRpbmctbGVmdCcsICc2cHgnKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KGxhYmVsKVxuXHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdF0pKTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdmlld0hpc3RvcnlPcHRpb25zID0gZnVuY3Rpb24gKGxheW91dCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJzEwMCUnKSxcblx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICczNnB4JyksXG5cdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdkaXNwbGF5JywgJ2ZsZXgnKSxcblx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2ZsZXgtZGlyZWN0aW9uJywgJ3JvdycpLFxuXHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYWxpZ24taXRlbXMnLCAnY2VudGVyJyksXG5cdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdqdXN0aWZ5LWNvbnRlbnQnLCAnc3BhY2UtYmV0d2VlbicpLFxuXHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYmFja2dyb3VuZC1jb2xvcicsICdyZ2IoNTAsIDUwLCA1MCknKVxuXHRcdFx0XSksXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRBMyhcblx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdmlld0hpc3RvcnlCdXR0b24sXG5cdFx0XHRcdCdTd2FwIExheW91dCcsXG5cdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFN3YXBMYXlvdXQsXG5cdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvSGlzdG9yeUljb24obGF5b3V0KSksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZGlzcGxheScsICdmbGV4JyksXG5cdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZmxleC1kaXJlY3Rpb24nLCAncm93JyksXG5cdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYWxpZ24taXRlbXMnLCAnY2VudGVyJyksXG5cdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnanVzdGlmeS1jb250ZW50JywgJ3NwYWNlLWJldHdlZW4nKVxuXHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTMoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdmlld0hpc3RvcnlCdXR0b24sICdJbXBvcnQnLCAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRJbXBvcnQsICdNNSAxYTEgMSAwIDAgMSAwIDJoLTJhMSAxIDAgMCAwLTEgMXY4YTEgMSAwIDAgMCAxIDFoMTBhMSAxIDAgMCAwIDEtMWExIDEgMCAwIDEgMiAwYTMgMyAwIDAgMS0zIDNoLTEwYTMgMyAwIDAgMS0zLTN2LThhMyAzIDAgMCAxIDMtM3ogTTEwIDJhMSAxIDAgMCAwIC0yIDB2NmExIDEgMCAwIDAgMSAxaDZhMSAxIDAgMCAwIDAtMmgtMy41ODZsNC4yOTMtNC4yOTNhMSAxIDAgMCAwLTEuNDE0LTEuNDE0bC00LjI5MyA0LjI5M3onKSxcblx0XHRcdFx0XHRcdEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHZpZXdIaXN0b3J5QnV0dG9uLCAnRXhwb3J0JywgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kRXhwb3J0LCAnTTUgMWExIDEgMCAwIDEgMCAyaC0yYTEgMSAwIDAgMC0xIDF2OGExIDEgMCAwIDAgMSAxaDEwYTEgMSAwIDAgMCAxLTEgYTEgMSAwIDAgMSAyIDBhMyAzIDAgMCAxLTMgM2gtMTBhMyAzIDAgMCAxLTMtM3YtOGEzIDMgMCAwIDEgMy0zeiBNOSAzYTEgMSAwIDEgMSAwLTJoNmExIDEgMCAwIDEgMSAxdjZhMSAxIDAgMSAxLTIgMHYtMy41ODZsLTUuMjkzIDUuMjkzIGExIDEgMCAwIDEtMS40MTQtMS40MTRsNS4yOTMgLTUuMjkzeicpXG5cdFx0XHRcdFx0XSkpXG5cdFx0XHRdKSk7XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFNsaWRlckp1bXAgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdTbGlkZXJKdW1wJywgYTogYX07XG59O1xudmFyICRlbG0kY29yZSRCYXNpY3MkY29tcG9zZVIgPSBGMyhcblx0ZnVuY3Rpb24gKGYsIGcsIHgpIHtcblx0XHRyZXR1cm4gZyhcblx0XHRcdGYoeCkpO1xuXHR9KTtcbnZhciAkZWxtJGh0bWwkSHRtbCRpbnB1dCA9IF9WaXJ0dWFsRG9tX25vZGUoJ2lucHV0Jyk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kaXNQbGF5aW5nID0gZnVuY3Rpb24gKG1heWJlSW5kZXgpIHtcblx0aWYgKG1heWJlSW5kZXguJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyICRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkbWF4ID0gJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSgnbWF4Jyk7XG52YXIgJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRtaW4gPSAkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5KCdtaW4nKTtcbnZhciAkZWxtJGh0bWwkSHRtbCRFdmVudHMkYWx3YXlzU3RvcCA9IGZ1bmN0aW9uICh4KSB7XG5cdHJldHVybiBfVXRpbHNfVHVwbGUyKHgsIHRydWUpO1xufTtcbnZhciAkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kTWF5U3RvcFByb3BhZ2F0aW9uID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnTWF5U3RvcFByb3BhZ2F0aW9uJywgYTogYX07XG59O1xudmFyICRlbG0kaHRtbCRIdG1sJEV2ZW50cyRzdG9wUHJvcGFnYXRpb25PbiA9IEYyKFxuXHRmdW5jdGlvbiAoZXZlbnQsIGRlY29kZXIpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHQkZWxtJHZpcnR1YWxfZG9tJFZpcnR1YWxEb20kb24sXG5cdFx0XHRldmVudCxcblx0XHRcdCRlbG0kdmlydHVhbF9kb20kVmlydHVhbERvbSRNYXlTdG9wUHJvcGFnYXRpb24oZGVjb2RlcikpO1xuXHR9KTtcbnZhciAkZWxtJGpzb24kSnNvbiREZWNvZGUkc3RyaW5nID0gX0pzb25fZGVjb2RlU3RyaW5nO1xudmFyICRlbG0kaHRtbCRIdG1sJEV2ZW50cyR0YXJnZXRWYWx1ZSA9IEEyKFxuXHQkZWxtJGpzb24kSnNvbiREZWNvZGUkYXQsXG5cdF9MaXN0X2Zyb21BcnJheShcblx0XHRbJ3RhcmdldCcsICd2YWx1ZSddKSxcblx0JGVsbSRqc29uJEpzb24kRGVjb2RlJHN0cmluZyk7XG52YXIgJGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uSW5wdXQgPSBmdW5jdGlvbiAodGFnZ2VyKSB7XG5cdHJldHVybiBBMihcblx0XHQkZWxtJGh0bWwkSHRtbCRFdmVudHMkc3RvcFByb3BhZ2F0aW9uT24sXG5cdFx0J2lucHV0Jyxcblx0XHRBMihcblx0XHRcdCRlbG0kanNvbiRKc29uJERlY29kZSRtYXAsXG5cdFx0XHQkZWxtJGh0bWwkSHRtbCRFdmVudHMkYWx3YXlzU3RvcCxcblx0XHRcdEEyKCRlbG0kanNvbiRKc29uJERlY29kZSRtYXAsIHRhZ2dlciwgJGVsbSRodG1sJEh0bWwkRXZlbnRzJHRhcmdldFZhbHVlKSkpO1xufTtcbnZhciAkZWxtJGNvcmUkU3RyaW5nJHRvSW50ID0gX1N0cmluZ190b0ludDtcbnZhciAkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHR5cGVfID0gJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSgndHlwZScpO1xudmFyICRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkdmFsdWUgPSAkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5KCd2YWx1ZScpO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHZpZXdQbGF5QnV0dG9uID0gZnVuY3Rpb24gKHBsYXlpbmcpIHtcblx0cmV0dXJuIEEyKFxuXHRcdCRlbG0kaHRtbCRIdG1sJGJ1dHRvbixcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdiYWNrZ3JvdW5kJywgJyMxMjkzRDgnKSxcblx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2JvcmRlcicsICdub25lJyksXG5cdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdjb2xvcicsICd3aGl0ZScpLFxuXHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnY3Vyc29yJywgJ3BvaW50ZXInKSxcblx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJzM2cHgnKSxcblx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICczNnB4JyksXG5cdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFJlc3VtZSlcblx0XHRcdF0pLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0cGxheWluZyA/ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGljb24oJ00yIDJoNHYxMmgtNHYtMTJ6IE0xMCAyaDR2MTJoLTR2LTEyeicpIDogJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kaWNvbignTTIgMmwxMiA3bC0xMiA3eicpXG5cdFx0XHRdKSk7XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHZpZXdIaXN0b3J5U2xpZGVyID0gRjIoXG5cdGZ1bmN0aW9uIChoaXN0b3J5LCBtYXliZUluZGV4KSB7XG5cdFx0dmFyIGxhc3RJbmRleCA9ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHNpemUoaGlzdG9yeSkgLSAxO1xuXHRcdHZhciBzZWxlY3RlZEluZGV4ID0gQTIoJGVsbSRjb3JlJE1heWJlJHdpdGhEZWZhdWx0LCBsYXN0SW5kZXgsIG1heWJlSW5kZXgpO1xuXHRcdHJldHVybiBBMihcblx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdkaXNwbGF5JywgJ2ZsZXgnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZmxleC1kaXJlY3Rpb24nLCAncm93JyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2FsaWduLWl0ZW1zJywgJ2NlbnRlcicpLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICcxMDAlJyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsICczNnB4JyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2JhY2tncm91bmQtY29sb3InLCAncmdiKDUwLCA1MCwgNTApJylcblx0XHRcdFx0XSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRMYXp5JGxhenksXG5cdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdmlld1BsYXlCdXR0b24sXG5cdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kaXNQbGF5aW5nKG1heWJlSW5kZXgpKSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRpbnB1dCxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkdHlwZV8oJ3JhbmdlJyksXG5cdFx0XHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICd3aWR0aCcsICdjYWxjKDEwMCUgLSA1NnB4KScpLFxuXHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnaGVpZ2h0JywgJzM2cHgnKSxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ21hcmdpbicsICcwIDEwcHgnKSxcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRtaW4oJzAnKSxcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRtYXgoXG5cdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRTdHJpbmckZnJvbUludChsYXN0SW5kZXgpKSxcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyR2YWx1ZShcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRmcm9tSW50KHNlbGVjdGVkSW5kZXgpKSxcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uSW5wdXQoXG5cdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRCYXNpY3MkY29tcG9zZVIsXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyR0b0ludCxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSRCYXNpY3MkY29tcG9zZVIsXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkd2l0aERlZmF1bHQobGFzdEluZGV4KSxcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFNsaWRlckp1bXApKSlcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF9MaXN0X05pbClcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR2aWV3SGlzdG9yeSA9IEYzKFxuXHRmdW5jdGlvbiAobWF5YmVJbmRleCwgaGlzdG9yeSwgbGF5b3V0KSB7XG5cdFx0dmFyIGJsb2NrID0gJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdG9Nb3VzZUJsb2NrZXIobGF5b3V0KTtcblx0XHR2YXIgX3YwID0gJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdG9IaXN0b3J5UGVyY2VudHMobGF5b3V0KTtcblx0XHR2YXIgdyA9IF92MC5hO1xuXHRcdHZhciBoID0gX3YwLmI7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgdyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2hlaWdodCcsIGgpLFxuXHRcdFx0XHRcdEEyKCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsICdkaXNwbGF5JywgJ2ZsZXgnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZmxleC1kaXJlY3Rpb24nLCAnY29sdW1uJyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2NvbG9yJywgJyNEREREREQnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnYmFja2dyb3VuZC1jb2xvcicsICdyZ2IoNjEsIDYxLCA2MSknKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncG9pbnRlci1ldmVudHMnLCBibG9jayksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3VzZXItc2VsZWN0JywgYmxvY2spXG5cdFx0XHRcdF0pLFxuXHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRbXG5cdFx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdmlld0hpc3RvcnlTbGlkZXIsIGhpc3RvcnksIG1heWJlSW5kZXgpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJG1hcCxcblx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRKdW1wLFxuXHRcdFx0XHRcdEEyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHZpZXcsIG1heWJlSW5kZXgsIGhpc3RvcnkpKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRMYXp5JGxhenksICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHZpZXdIaXN0b3J5T3B0aW9ucywgbGF5b3V0KVxuXHRcdFx0XHRdKSk7XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHBvcG91dFZpZXcgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0dmFyIG1heWJlSW5kZXggPSBmdW5jdGlvbiAoKSB7XG5cdFx0dmFyIF92MCA9IG1vZGVsLnN0YXRlO1xuXHRcdGlmIChfdjAuJCA9PT0gJ1J1bm5pbmcnKSB7XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBpbmRleCA9IF92MC5hO1xuXHRcdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSRKdXN0KGluZGV4KTtcblx0XHR9XG5cdH0oKTtcblx0dmFyIGhpc3RvcnlUb1JlbmRlciA9ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGNhY2hlZEhpc3RvcnkobW9kZWwpO1xuXHRyZXR1cm4gQTMoXG5cdFx0JGVsbSRodG1sJEh0bWwkbm9kZSxcblx0XHQnYm9keScsXG5cdFx0X1V0aWxzX2FwKFxuXHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdG9EcmFnTGlzdGVuZXJzKG1vZGVsLmxheW91dCksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnbWFyZ2luJywgJzAnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAncGFkZGluZycsICcwJyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ3dpZHRoJywgJzEwMCUnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnaGVpZ2h0JywgJzEwMCUnKSxcblx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0eWxlLCAnZm9udC1mYW1pbHknLCAnbW9ub3NwYWNlJyksXG5cdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHlsZSwgJ2Rpc3BsYXknLCAnZmxleCcpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3R5bGUsXG5cdFx0XHRcdFx0J2ZsZXgtZGlyZWN0aW9uJyxcblx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR0b0ZsZXhEaXJlY3Rpb24obW9kZWwubGF5b3V0KSlcblx0XHRcdFx0XSkpLFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0QTMoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdmlld0hpc3RvcnksIG1heWJlSW5kZXgsIGhpc3RvcnlUb1JlbmRlciwgbW9kZWwubGF5b3V0KSxcblx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kdmlld0RyYWdab25lKG1vZGVsLmxheW91dCksXG5cdFx0XHRcdEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHZpZXdFeHBhbmRvLCBtb2RlbC5leHBhbmRvTXNnLCBtb2RlbC5leHBhbmRvTW9kZWwsIG1vZGVsLmxheW91dClcblx0XHRcdF0pKTtcbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmxvY2tBbGwgPSB7JDogJ0Jsb2NrQWxsJ307XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkdG9CbG9ja2VyVHlwZSA9IEYyKFxuXHRmdW5jdGlvbiAoaXNQYXVzZWQsIHN0YXRlKSB7XG5cdFx0c3dpdGNoIChzdGF0ZS4kKSB7XG5cdFx0XHRjYXNlICdOb25lJzpcblx0XHRcdFx0cmV0dXJuIGlzUGF1c2VkID8gJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmxvY2tBbGwgOiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja05vbmU7XG5cdFx0XHRjYXNlICdCYWRNZXRhZGF0YSc6XG5cdFx0XHRcdHJldHVybiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCbG9ja01vc3Q7XG5cdFx0XHRjYXNlICdCYWRJbXBvcnQnOlxuXHRcdFx0XHRyZXR1cm4gJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmxvY2tNb3N0O1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0cmV0dXJuICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJsb2NrTW9zdDtcblx0XHR9XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHRvQmxvY2tlclR5cGUgPSBmdW5jdGlvbiAobW9kZWwpIHtcblx0cmV0dXJuIEEyKFxuXHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHRvQmxvY2tlclR5cGUsXG5cdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kaXNQYXVzZWQobW9kZWwuc3RhdGUpLFxuXHRcdG1vZGVsLm92ZXJsYXkpO1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRIb3Jpem9udGFsID0gRjMoXG5cdGZ1bmN0aW9uIChhLCBiLCBjKSB7XG5cdFx0cmV0dXJuIHskOiAnSG9yaXpvbnRhbCcsIGE6IGEsIGI6IGIsIGM6IGN9O1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRSdW5uaW5nID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnUnVubmluZycsIGE6IGF9O1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRTdGF0aWMgPSB7JDogJ1N0YXRpYyd9O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRFcnJvciA9IEYyKFxuXHRmdW5jdGlvbiAobWVzc2FnZSwgcHJvYmxlbXMpIHtcblx0XHRyZXR1cm4ge21lc3NhZ2U6IG1lc3NhZ2UsIHByb2JsZW1zOiBwcm9ibGVtc307XG5cdH0pO1xudmFyICRlbG0kanNvbiRKc29uJERlY29kZSRkZWNvZGVWYWx1ZSA9IF9Kc29uX3J1bjtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkTWV0YWRhdGEgPSBGMihcblx0ZnVuY3Rpb24gKHZlcnNpb25zLCB0eXBlcykge1xuXHRcdHJldHVybiB7dHlwZXM6IHR5cGVzLCB2ZXJzaW9uczogdmVyc2lvbnN9O1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVHlwZXMgPSBGMyhcblx0ZnVuY3Rpb24gKG1lc3NhZ2UsIGFsaWFzZXMsIHVuaW9ucykge1xuXHRcdHJldHVybiB7YWxpYXNlczogYWxpYXNlcywgbWVzc2FnZTogbWVzc2FnZSwgdW5pb25zOiB1bmlvbnN9O1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkQWxpYXMgPSBGMihcblx0ZnVuY3Rpb24gKGFyZ3MsIHRpcGUpIHtcblx0XHRyZXR1cm4ge2FyZ3M6IGFyZ3MsIHRpcGU6IHRpcGV9O1xuXHR9KTtcbnZhciAkZWxtJGpzb24kSnNvbiREZWNvZGUkbGlzdCA9IF9Kc29uX2RlY29kZUxpc3Q7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZUFsaWFzID0gQTMoXG5cdCRlbG0kanNvbiRKc29uJERlY29kZSRtYXAyLFxuXHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkQWxpYXMsXG5cdEEyKFxuXHRcdCRlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCxcblx0XHQnYXJncycsXG5cdFx0JGVsbSRqc29uJEpzb24kRGVjb2RlJGxpc3QoJGVsbSRqc29uJEpzb24kRGVjb2RlJHN0cmluZykpLFxuXHRBMigkZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQsICd0eXBlJywgJGVsbSRqc29uJEpzb24kRGVjb2RlJHN0cmluZykpO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRVbmlvbiA9IEYyKFxuXHRmdW5jdGlvbiAoYXJncywgdGFncykge1xuXHRcdHJldHVybiB7YXJnczogYXJncywgdGFnczogdGFnc307XG5cdH0pO1xudmFyICRlbG0kY29yZSREaWN0JGZyb21MaXN0ID0gZnVuY3Rpb24gKGFzc29jcykge1xuXHRyZXR1cm4gQTMoXG5cdFx0JGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0RjIoXG5cdFx0XHRmdW5jdGlvbiAoX3YwLCBkaWN0KSB7XG5cdFx0XHRcdHZhciBrZXkgPSBfdjAuYTtcblx0XHRcdFx0dmFyIHZhbHVlID0gX3YwLmI7XG5cdFx0XHRcdHJldHVybiBBMygkZWxtJGNvcmUkRGljdCRpbnNlcnQsIGtleSwgdmFsdWUsIGRpY3QpO1xuXHRcdFx0fSksXG5cdFx0JGVsbSRjb3JlJERpY3QkZW1wdHksXG5cdFx0YXNzb2NzKTtcbn07XG52YXIgJGVsbSRqc29uJEpzb24kRGVjb2RlJGtleVZhbHVlUGFpcnMgPSBfSnNvbl9kZWNvZGVLZXlWYWx1ZVBhaXJzO1xudmFyICRlbG0kanNvbiRKc29uJERlY29kZSRkaWN0ID0gZnVuY3Rpb24gKGRlY29kZXIpIHtcblx0cmV0dXJuIEEyKFxuXHRcdCRlbG0kanNvbiRKc29uJERlY29kZSRtYXAsXG5cdFx0JGVsbSRjb3JlJERpY3QkZnJvbUxpc3QsXG5cdFx0JGVsbSRqc29uJEpzb24kRGVjb2RlJGtleVZhbHVlUGFpcnMoZGVjb2RlcikpO1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlVW5pb24gPSBBMyhcblx0JGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcDIsXG5cdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRVbmlvbixcblx0QTIoXG5cdFx0JGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLFxuXHRcdCdhcmdzJyxcblx0XHQkZWxtJGpzb24kSnNvbiREZWNvZGUkbGlzdCgkZWxtJGpzb24kSnNvbiREZWNvZGUkc3RyaW5nKSksXG5cdEEyKFxuXHRcdCRlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCxcblx0XHQndGFncycsXG5cdFx0JGVsbSRqc29uJEpzb24kRGVjb2RlJGRpY3QoXG5cdFx0XHQkZWxtJGpzb24kSnNvbiREZWNvZGUkbGlzdCgkZWxtJGpzb24kSnNvbiREZWNvZGUkc3RyaW5nKSkpKTtcbnZhciAkZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwMyA9IF9Kc29uX21hcDM7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZVR5cGVzID0gQTQoXG5cdCRlbG0kanNvbiRKc29uJERlY29kZSRtYXAzLFxuXHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVHlwZXMsXG5cdEEyKCRlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCwgJ21lc3NhZ2UnLCAkZWxtJGpzb24kSnNvbiREZWNvZGUkc3RyaW5nKSxcblx0QTIoXG5cdFx0JGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLFxuXHRcdCdhbGlhc2VzJyxcblx0XHQkZWxtJGpzb24kSnNvbiREZWNvZGUkZGljdCgkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlQWxpYXMpKSxcblx0QTIoXG5cdFx0JGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLFxuXHRcdCd1bmlvbnMnLFxuXHRcdCRlbG0kanNvbiRKc29uJERlY29kZSRkaWN0KCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRkZWNvZGVVbmlvbikpKTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVmVyc2lvbnMgPSBmdW5jdGlvbiAoZWxtKSB7XG5cdHJldHVybiB7ZWxtOiBlbG19O1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlVmVyc2lvbnMgPSBBMihcblx0JGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcCxcblx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFZlcnNpb25zLFxuXHRBMigkZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQsICdlbG0nLCAkZWxtJGpzb24kSnNvbiREZWNvZGUkc3RyaW5nKSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZXIgPSBBMyhcblx0JGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcDIsXG5cdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRNZXRhZGF0YSxcblx0QTIoJGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLCAndmVyc2lvbnMnLCAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlVmVyc2lvbnMpLFxuXHRBMigkZWxtJGpzb24kSnNvbiREZWNvZGUkZmllbGQsICd0eXBlcycsICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRkZWNvZGVUeXBlcykpO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRQcm9ibGVtVHlwZSA9IEYyKFxuXHRmdW5jdGlvbiAobmFtZSwgcHJvYmxlbXMpIHtcblx0XHRyZXR1cm4ge25hbWU6IG5hbWUsIHByb2JsZW1zOiBwcm9ibGVtc307XG5cdH0pO1xudmFyICRlbG0kY29yZSRMaXN0JG1heWJlQ29ucyA9IEYzKFxuXHRmdW5jdGlvbiAoZiwgbXgsIHhzKSB7XG5cdFx0dmFyIF92MCA9IGYobXgpO1xuXHRcdGlmIChfdjAuJCA9PT0gJ0p1c3QnKSB7XG5cdFx0XHR2YXIgeCA9IF92MC5hO1xuXHRcdFx0cmV0dXJuIEEyKCRlbG0kY29yZSRMaXN0JGNvbnMsIHgsIHhzKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIHhzO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJExpc3QkZmlsdGVyTWFwID0gRjIoXG5cdGZ1bmN0aW9uIChmLCB4cykge1xuXHRcdHJldHVybiBBMyhcblx0XHRcdCRlbG0kY29yZSRMaXN0JGZvbGRyLFxuXHRcdFx0JGVsbSRjb3JlJExpc3QkbWF5YmVDb25zKGYpLFxuXHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0eHMpO1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkU3RyaW5nJGNvbnRhaW5zID0gX1N0cmluZ19jb250YWlucztcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkaGFzUHJvYmxlbSA9IEYyKFxuXHRmdW5jdGlvbiAodGlwZSwgX3YwKSB7XG5cdFx0dmFyIHByb2JsZW0gPSBfdjAuYTtcblx0XHR2YXIgdG9rZW4gPSBfdjAuYjtcblx0XHRyZXR1cm4gQTIoJGVsbSRjb3JlJFN0cmluZyRjb250YWlucywgdG9rZW4sIHRpcGUpID8gJGVsbSRjb3JlJE1heWJlJEp1c3QocHJvYmxlbSkgOiAkZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJERlY29kZXIgPSB7JDogJ0RlY29kZXInfTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkRnVuY3Rpb24gPSB7JDogJ0Z1bmN0aW9uJ307XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFByb2Nlc3MgPSB7JDogJ1Byb2Nlc3MnfTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkUHJvZ3JhbSA9IHskOiAnUHJvZ3JhbSd9O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRSZXF1ZXN0ID0geyQ6ICdSZXF1ZXN0J307XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFNvY2tldCA9IHskOiAnU29ja2V0J307XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFRhc2sgPSB7JDogJ1Rhc2snfTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVmlydHVhbERvbSA9IHskOiAnVmlydHVhbERvbSd9O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRwcm9ibGVtVGFibGUgPSBfTGlzdF9mcm9tQXJyYXkoXG5cdFtcblx0XHRfVXRpbHNfVHVwbGUyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRGdW5jdGlvbiwgJy0+JyksXG5cdFx0X1V0aWxzX1R1cGxlMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkRGVjb2RlciwgJ0pzb24uRGVjb2RlLkRlY29kZXInKSxcblx0XHRfVXRpbHNfVHVwbGUyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRUYXNrLCAnVGFzay5UYXNrJyksXG5cdFx0X1V0aWxzX1R1cGxlMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkUHJvY2VzcywgJ1Byb2Nlc3MuSWQnKSxcblx0XHRfVXRpbHNfVHVwbGUyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRTb2NrZXQsICdXZWJTb2NrZXQuTG93TGV2ZWwuV2ViU29ja2V0JyksXG5cdFx0X1V0aWxzX1R1cGxlMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkUmVxdWVzdCwgJ0h0dHAuUmVxdWVzdCcpLFxuXHRcdF9VdGlsc19UdXBsZTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFByb2dyYW0sICdQbGF0Zm9ybS5Qcm9ncmFtJyksXG5cdFx0X1V0aWxzX1R1cGxlMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkVmlydHVhbERvbSwgJ1ZpcnR1YWxEb20uTm9kZScpLFxuXHRcdF9VdGlsc19UdXBsZTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFZpcnR1YWxEb20sICdWaXJ0dWFsRG9tLkF0dHJpYnV0ZScpXG5cdF0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRmaW5kUHJvYmxlbXMgPSBmdW5jdGlvbiAodGlwZSkge1xuXHRyZXR1cm4gQTIoXG5cdFx0JGVsbSRjb3JlJExpc3QkZmlsdGVyTWFwLFxuXHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRoYXNQcm9ibGVtKHRpcGUpLFxuXHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRwcm9ibGVtVGFibGUpO1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkY29sbGVjdEJhZEFsaWFzZXMgPSBGMyhcblx0ZnVuY3Rpb24gKG5hbWUsIF92MCwgbGlzdCkge1xuXHRcdHZhciB0aXBlID0gX3YwLnRpcGU7XG5cdFx0dmFyIF92MSA9ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRmaW5kUHJvYmxlbXModGlwZSk7XG5cdFx0aWYgKCFfdjEuYikge1xuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwcm9ibGVtcyA9IF92MTtcblx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFByb2JsZW1UeXBlLCBuYW1lLCBwcm9ibGVtcyksXG5cdFx0XHRcdGxpc3QpO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJExpc3QkYXBwZW5kID0gRjIoXG5cdGZ1bmN0aW9uICh4cywgeXMpIHtcblx0XHRpZiAoIXlzLmIpIHtcblx0XHRcdHJldHVybiB4cztcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIEEzKCRlbG0kY29yZSRMaXN0JGZvbGRyLCAkZWxtJGNvcmUkTGlzdCRjb25zLCB5cywgeHMpO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJExpc3QkY29uY2F0ID0gZnVuY3Rpb24gKGxpc3RzKSB7XG5cdHJldHVybiBBMygkZWxtJGNvcmUkTGlzdCRmb2xkciwgJGVsbSRjb3JlJExpc3QkYXBwZW5kLCBfTGlzdF9OaWwsIGxpc3RzKTtcbn07XG52YXIgJGVsbSRjb3JlJExpc3QkY29uY2F0TWFwID0gRjIoXG5cdGZ1bmN0aW9uIChmLCBsaXN0KSB7XG5cdFx0cmV0dXJuICRlbG0kY29yZSRMaXN0JGNvbmNhdChcblx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JG1hcCwgZiwgbGlzdCkpO1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkRGljdCR2YWx1ZXMgPSBmdW5jdGlvbiAoZGljdCkge1xuXHRyZXR1cm4gQTMoXG5cdFx0JGVsbSRjb3JlJERpY3QkZm9sZHIsXG5cdFx0RjMoXG5cdFx0XHRmdW5jdGlvbiAoa2V5LCB2YWx1ZSwgdmFsdWVMaXN0KSB7XG5cdFx0XHRcdHJldHVybiBBMigkZWxtJGNvcmUkTGlzdCRjb25zLCB2YWx1ZSwgdmFsdWVMaXN0KTtcblx0XHRcdH0pLFxuXHRcdF9MaXN0X05pbCxcblx0XHRkaWN0KTtcbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNvbGxlY3RCYWRVbmlvbnMgPSBGMyhcblx0ZnVuY3Rpb24gKG5hbWUsIF92MCwgbGlzdCkge1xuXHRcdHZhciB0YWdzID0gX3YwLnRhZ3M7XG5cdFx0dmFyIF92MSA9IEEyKFxuXHRcdFx0JGVsbSRjb3JlJExpc3QkY29uY2F0TWFwLFxuXHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGZpbmRQcm9ibGVtcyxcblx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbmNhdChcblx0XHRcdFx0JGVsbSRjb3JlJERpY3QkdmFsdWVzKHRhZ3MpKSk7XG5cdFx0aWYgKCFfdjEuYikge1xuXHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwcm9ibGVtcyA9IF92MTtcblx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJFByb2JsZW1UeXBlLCBuYW1lLCBwcm9ibGVtcyksXG5cdFx0XHRcdGxpc3QpO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJERpY3QkZm9sZGwgPSBGMyhcblx0ZnVuY3Rpb24gKGZ1bmMsIGFjYywgZGljdCkge1xuXHRcdGZvbGRsOlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRpZiAoZGljdC4kID09PSAnUkJFbXB0eV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdFx0cmV0dXJuIGFjYztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBrZXkgPSBkaWN0LmI7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IGRpY3QuYztcblx0XHRcdFx0dmFyIGxlZnQgPSBkaWN0LmQ7XG5cdFx0XHRcdHZhciByaWdodCA9IGRpY3QuZTtcblx0XHRcdFx0dmFyICR0ZW1wJGZ1bmMgPSBmdW5jLFxuXHRcdFx0XHRcdCR0ZW1wJGFjYyA9IEEzKFxuXHRcdFx0XHRcdGZ1bmMsXG5cdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdEEzKCRlbG0kY29yZSREaWN0JGZvbGRsLCBmdW5jLCBhY2MsIGxlZnQpKSxcblx0XHRcdFx0XHQkdGVtcCRkaWN0ID0gcmlnaHQ7XG5cdFx0XHRcdGZ1bmMgPSAkdGVtcCRmdW5jO1xuXHRcdFx0XHRhY2MgPSAkdGVtcCRhY2M7XG5cdFx0XHRcdGRpY3QgPSAkdGVtcCRkaWN0O1xuXHRcdFx0XHRjb250aW51ZSBmb2xkbDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRpc1BvcnRhYmxlID0gZnVuY3Rpb24gKF92MCkge1xuXHR2YXIgdHlwZXMgPSBfdjAudHlwZXM7XG5cdHZhciBiYWRBbGlhc2VzID0gQTMoJGVsbSRjb3JlJERpY3QkZm9sZGwsICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjb2xsZWN0QmFkQWxpYXNlcywgX0xpc3RfTmlsLCB0eXBlcy5hbGlhc2VzKTtcblx0dmFyIF92MSA9IEEzKCRlbG0kY29yZSREaWN0JGZvbGRsLCAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkY29sbGVjdEJhZFVuaW9ucywgYmFkQWxpYXNlcywgdHlwZXMudW5pb25zKTtcblx0aWYgKCFfdjEuYikge1xuXHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0fSBlbHNlIHtcblx0XHR2YXIgcHJvYmxlbXMgPSBfdjE7XG5cdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJEVycm9yLCB0eXBlcy5tZXNzYWdlLCBwcm9ibGVtcykpO1xuXHR9XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRkZWNvZGUgPSBmdW5jdGlvbiAodmFsdWUpIHtcblx0dmFyIF92MCA9IEEyKCRlbG0kanNvbiRKc29uJERlY29kZSRkZWNvZGVWYWx1ZSwgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGRlY29kZXIsIHZhbHVlKTtcblx0aWYgKF92MC4kID09PSAnRXJyJykge1xuXHRcdHJldHVybiAkZWxtJGNvcmUkUmVzdWx0JEVycihcblx0XHRcdEEyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRFcnJvciwgJ1RoZSBjb21waWxlciBpcyBnZW5lcmF0aW5nIGJhZCBtZXRhZGF0YS4gVGhpcyBpcyBhIGNvbXBpbGVyIGJ1ZyEnLCBfTGlzdF9OaWwpKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgbWV0YWRhdGEgPSBfdjAuYTtcblx0XHR2YXIgX3YxID0gJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGlzUG9ydGFibGUobWV0YWRhdGEpO1xuXHRcdGlmIChfdjEuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJFJlc3VsdCRPayhtZXRhZGF0YSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBlcnJvciA9IF92MS5hO1xuXHRcdFx0cmV0dXJuICRlbG0kY29yZSRSZXN1bHQkRXJyKGVycm9yKTtcblx0XHR9XG5cdH1cbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkSGlzdG9yeSA9IEYzKFxuXHRmdW5jdGlvbiAoc25hcHNob3RzLCByZWNlbnQsIG51bU1lc3NhZ2VzKSB7XG5cdFx0cmV0dXJuIHtudW1NZXNzYWdlczogbnVtTWVzc2FnZXMsIHJlY2VudDogcmVjZW50LCBzbmFwc2hvdHM6IHNuYXBzaG90c307XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFJlY2VudEhpc3RvcnkgPSBGMyhcblx0ZnVuY3Rpb24gKG1vZGVsLCBtZXNzYWdlcywgbnVtTWVzc2FnZXMpIHtcblx0XHRyZXR1cm4ge21lc3NhZ2VzOiBtZXNzYWdlcywgbW9kZWw6IG1vZGVsLCBudW1NZXNzYWdlczogbnVtTWVzc2FnZXN9O1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRlbXB0eSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuXHRyZXR1cm4gQTMoXG5cdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkSGlzdG9yeSxcblx0XHQkZWxtJGNvcmUkQXJyYXkkZW1wdHksXG5cdFx0QTMoJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkUmVjZW50SGlzdG9yeSwgbW9kZWwsIF9MaXN0X05pbCwgMCksXG5cdFx0MCk7XG59O1xudmFyICRlbG0kY29yZSREaWN0JG1hcCA9IEYyKFxuXHRmdW5jdGlvbiAoZnVuYywgZGljdCkge1xuXHRcdGlmIChkaWN0LiQgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJykge1xuXHRcdFx0cmV0dXJuICRlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjb2xvciA9IGRpY3QuYTtcblx0XHRcdHZhciBrZXkgPSBkaWN0LmI7XG5cdFx0XHR2YXIgdmFsdWUgPSBkaWN0LmM7XG5cdFx0XHR2YXIgbGVmdCA9IGRpY3QuZDtcblx0XHRcdHZhciByaWdodCA9IGRpY3QuZTtcblx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0JGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRjb2xvcixcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHRBMihmdW5jLCBrZXksIHZhbHVlKSxcblx0XHRcdFx0QTIoJGVsbSRjb3JlJERpY3QkbWFwLCBmdW5jLCBsZWZ0KSxcblx0XHRcdFx0QTIoJGVsbSRjb3JlJERpY3QkbWFwLCBmdW5jLCByaWdodCkpO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJERpY3Qkc2l6ZUhlbHAgPSBGMihcblx0ZnVuY3Rpb24gKG4sIGRpY3QpIHtcblx0XHRzaXplSGVscDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKGRpY3QuJCA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdHJldHVybiBuO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGxlZnQgPSBkaWN0LmQ7XG5cdFx0XHRcdHZhciByaWdodCA9IGRpY3QuZTtcblx0XHRcdFx0dmFyICR0ZW1wJG4gPSBBMigkZWxtJGNvcmUkRGljdCRzaXplSGVscCwgbiArIDEsIHJpZ2h0KSxcblx0XHRcdFx0XHQkdGVtcCRkaWN0ID0gbGVmdDtcblx0XHRcdFx0biA9ICR0ZW1wJG47XG5cdFx0XHRcdGRpY3QgPSAkdGVtcCRkaWN0O1xuXHRcdFx0XHRjb250aW51ZSBzaXplSGVscDtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyICRlbG0kY29yZSREaWN0JHNpemUgPSBmdW5jdGlvbiAoZGljdCkge1xuXHRyZXR1cm4gQTIoJGVsbSRjb3JlJERpY3Qkc2l6ZUhlbHAsIDAsIGRpY3QpO1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRpbml0SGVscCA9IEYyKFxuXHRmdW5jdGlvbiAoaXNPdXRlciwgZXhwYW5kbykge1xuXHRcdHN3aXRjaCAoZXhwYW5kby4kKSB7XG5cdFx0XHRjYXNlICdTJzpcblx0XHRcdFx0cmV0dXJuIGV4cGFuZG87XG5cdFx0XHRjYXNlICdQcmltaXRpdmUnOlxuXHRcdFx0XHRyZXR1cm4gZXhwYW5kbztcblx0XHRcdGNhc2UgJ1NlcXVlbmNlJzpcblx0XHRcdFx0dmFyIHNlcVR5cGUgPSBleHBhbmRvLmE7XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYjtcblx0XHRcdFx0dmFyIGl0ZW1zID0gZXhwYW5kby5jO1xuXHRcdFx0XHRyZXR1cm4gaXNPdXRlciA/IEEzKFxuXHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFNlcXVlbmNlLFxuXHRcdFx0XHRcdHNlcVR5cGUsXG5cdFx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRpbml0SGVscChmYWxzZSksXG5cdFx0XHRcdFx0XHRpdGVtcykpIDogKCgkZWxtJGNvcmUkTGlzdCRsZW5ndGgoaXRlbXMpIDw9IDgpID8gQTMoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2VxdWVuY2UsIHNlcVR5cGUsIGZhbHNlLCBpdGVtcykgOiBleHBhbmRvKTtcblx0XHRcdGNhc2UgJ0RpY3Rpb25hcnknOlxuXHRcdFx0XHR2YXIgaXNDbG9zZWQgPSBleHBhbmRvLmE7XG5cdFx0XHRcdHZhciBrZXlWYWx1ZVBhaXJzID0gZXhwYW5kby5iO1xuXHRcdFx0XHRyZXR1cm4gaXNPdXRlciA/IEEyKFxuXHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJERpY3Rpb25hcnksXG5cdFx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAoX3YxKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBrID0gX3YxLmE7XG5cdFx0XHRcdFx0XHRcdHZhciB2ID0gX3YxLmI7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdEhlbHAsIGZhbHNlLCB2KSk7XG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0a2V5VmFsdWVQYWlycykpIDogKCgkZWxtJGNvcmUkTGlzdCRsZW5ndGgoa2V5VmFsdWVQYWlycykgPD0gOCkgPyBBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyREaWN0aW9uYXJ5LCBmYWxzZSwga2V5VmFsdWVQYWlycykgOiBleHBhbmRvKTtcblx0XHRcdGNhc2UgJ1JlY29yZCc6XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IGV4cGFuZG8uYTtcblx0XHRcdFx0dmFyIGVudHJpZXMgPSBleHBhbmRvLmI7XG5cdFx0XHRcdHJldHVybiBpc091dGVyID8gQTIoXG5cdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUmVjb3JkLFxuXHRcdFx0XHRcdGZhbHNlLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkbWFwLFxuXHRcdFx0XHRcdFx0RjIoXG5cdFx0XHRcdFx0XHRcdGZ1bmN0aW9uIChfdjIsIHYpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gQTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdEhlbHAsIGZhbHNlLCB2KTtcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRlbnRyaWVzKSkgOiAoKCRlbG0kY29yZSREaWN0JHNpemUoZW50cmllcykgPD0gNCkgPyBBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRSZWNvcmQsIGZhbHNlLCBlbnRyaWVzKSA6IGV4cGFuZG8pO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dmFyIG1heWJlTmFtZSA9IGV4cGFuZG8uYTtcblx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gZXhwYW5kby5iO1xuXHRcdFx0XHR2YXIgYXJncyA9IGV4cGFuZG8uYztcblx0XHRcdFx0cmV0dXJuIGlzT3V0ZXIgPyBBMyhcblx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3Rvcixcblx0XHRcdFx0XHRtYXliZU5hbWUsXG5cdFx0XHRcdFx0ZmFsc2UsXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRtYXAsXG5cdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRpbml0SGVscChmYWxzZSksXG5cdFx0XHRcdFx0XHRhcmdzKSkgOiAoKCRlbG0kY29yZSRMaXN0JGxlbmd0aChhcmdzKSA8PSA0KSA/IEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJENvbnN0cnVjdG9yLCBtYXliZU5hbWUsIGZhbHNlLCBhcmdzKSA6IGV4cGFuZG8pO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuXHRyZXR1cm4gQTIoXG5cdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdEhlbHAsXG5cdFx0dHJ1ZSxcblx0XHRfRGVidWdnZXJfaW5pdCh2YWx1ZSkpO1xufTtcbnZhciAkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG1hcCA9IF9QbGF0Zm9ybV9tYXA7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkTm9uZSA9IHskOiAnTm9uZSd9O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JG5vbmUgPSAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSROb25lO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHdyYXBJbml0ID0gRjQoXG5cdGZ1bmN0aW9uIChtZXRhZGF0YSwgcG9wb3V0LCBpbml0LCBmbGFncykge1xuXHRcdHZhciBfdjAgPSBpbml0KGZsYWdzKTtcblx0XHR2YXIgdXNlck1vZGVsID0gX3YwLmE7XG5cdFx0dmFyIHVzZXJDb21tYW5kcyA9IF92MC5iO1xuXHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0e1xuXHRcdFx0XHRleHBhbmRvTW9kZWw6ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJGluaXQodXNlck1vZGVsKSxcblx0XHRcdFx0ZXhwYW5kb01zZzogJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdChfVXRpbHNfVHVwbGUwKSxcblx0XHRcdFx0aGlzdG9yeTogJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZW1wdHkodXNlck1vZGVsKSxcblx0XHRcdFx0bGF5b3V0OiBBMygkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRIb3Jpem9udGFsLCAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRTdGF0aWMsIDAuMywgMC41KSxcblx0XHRcdFx0bWV0YWRhdGE6ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRkZWNvZGUobWV0YWRhdGEpLFxuXHRcdFx0XHRvdmVybGF5OiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRub25lLFxuXHRcdFx0XHRwb3BvdXQ6IHBvcG91dCxcblx0XHRcdFx0c3RhdGU6ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFJ1bm5pbmcodXNlck1vZGVsKVxuXHRcdFx0fSxcblx0XHRcdEEyKCRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbWFwLCAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRVc2VyTXNnLCB1c2VyQ29tbWFuZHMpKTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZ2V0TGF0ZXN0TW9kZWwgPSBmdW5jdGlvbiAoc3RhdGUpIHtcblx0aWYgKHN0YXRlLiQgPT09ICdSdW5uaW5nJykge1xuXHRcdHZhciBtb2RlbCA9IHN0YXRlLmE7XG5cdFx0cmV0dXJuIG1vZGVsO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBtb2RlbCA9IHN0YXRlLmM7XG5cdFx0cmV0dXJuIG1vZGVsO1xuXHR9XG59O1xudmFyICRlbG0kY29yZSRQbGF0Zm9ybSRTdWIkbWFwID0gX1BsYXRmb3JtX21hcDtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3cmFwU3VicyA9IEYyKFxuXHRmdW5jdGlvbiAoc3Vic2NyaXB0aW9ucywgbW9kZWwpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHQkZWxtJGNvcmUkUGxhdGZvcm0kU3ViJG1hcCxcblx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFVzZXJNc2csXG5cdFx0XHRzdWJzY3JpcHRpb25zKFxuXHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRnZXRMYXRlc3RNb2RlbChtb2RlbC5zdGF0ZSkpKTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kTW92aW5nID0geyQ6ICdNb3ZpbmcnfTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRQYXVzZWQgPSBGNShcblx0ZnVuY3Rpb24gKGEsIGIsIGMsIGQsIGUpIHtcblx0XHRyZXR1cm4geyQ6ICdQYXVzZWQnLCBhOiBhLCBiOiBiLCBjOiBjLCBkOiBkLCBlOiBlfTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkU25hcHNob3QgPSBGMihcblx0ZnVuY3Rpb24gKG1vZGVsLCBtZXNzYWdlcykge1xuXHRcdHJldHVybiB7bWVzc2FnZXM6IG1lc3NhZ2VzLCBtb2RlbDogbW9kZWx9O1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRhZGRSZWNlbnQgPSBGMyhcblx0ZnVuY3Rpb24gKG1zZywgbmV3TW9kZWwsIF92MCkge1xuXHRcdHZhciBtb2RlbCA9IF92MC5tb2RlbDtcblx0XHR2YXIgbWVzc2FnZXMgPSBfdjAubWVzc2FnZXM7XG5cdFx0dmFyIG51bU1lc3NhZ2VzID0gX3YwLm51bU1lc3NhZ2VzO1xuXHRcdHJldHVybiBfVXRpbHNfZXEobnVtTWVzc2FnZXMsICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JG1heFNuYXBzaG90U2l6ZSkgPyBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0JGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFNuYXBzaG90LFxuXHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdCRlbG0kY29yZSRBcnJheSRmcm9tTGlzdChtZXNzYWdlcykpKSxcblx0XHRcdEEzKFxuXHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRSZWNlbnRIaXN0b3J5LFxuXHRcdFx0XHRuZXdNb2RlbCxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFttc2ddKSxcblx0XHRcdFx0MSkpIDogX1V0aWxzX1R1cGxlMihcblx0XHRcdCRlbG0kY29yZSRNYXliZSROb3RoaW5nLFxuXHRcdFx0QTMoXG5cdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFJlY2VudEhpc3RvcnksXG5cdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRBMigkZWxtJGNvcmUkTGlzdCRjb25zLCBtc2csIG1lc3NhZ2VzKSxcblx0XHRcdFx0bnVtTWVzc2FnZXMgKyAxKSk7XG5cdH0pO1xudmFyICRlbG0kY29yZSRFbG0kSnNBcnJheSRwdXNoID0gX0pzQXJyYXlfcHVzaDtcbnZhciAkZWxtJGNvcmUkRWxtJEpzQXJyYXkkc2luZ2xldG9uID0gX0pzQXJyYXlfc2luZ2xldG9uO1xudmFyICRlbG0kY29yZSRBcnJheSRpbnNlcnRUYWlsSW5UcmVlID0gRjQoXG5cdGZ1bmN0aW9uIChzaGlmdCwgaW5kZXgsIHRhaWwsIHRyZWUpIHtcblx0XHR2YXIgcG9zID0gJGVsbSRjb3JlJEFycmF5JGJpdE1hc2sgJiAoaW5kZXggPj4+IHNoaWZ0KTtcblx0XHRpZiAoX1V0aWxzX2NtcChcblx0XHRcdHBvcyxcblx0XHRcdCRlbG0kY29yZSRFbG0kSnNBcnJheSRsZW5ndGgodHJlZSkpID4gLTEpIHtcblx0XHRcdGlmIChzaGlmdCA9PT0gNSkge1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJEVsbSRKc0FycmF5JHB1c2gsXG5cdFx0XHRcdFx0JGVsbSRjb3JlJEFycmF5JExlYWYodGFpbCksXG5cdFx0XHRcdFx0dHJlZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbmV3U3ViID0gJGVsbSRjb3JlJEFycmF5JFN1YlRyZWUoXG5cdFx0XHRcdFx0QTQoJGVsbSRjb3JlJEFycmF5JGluc2VydFRhaWxJblRyZWUsIHNoaWZ0IC0gJGVsbSRjb3JlJEFycmF5JHNoaWZ0U3RlcCwgaW5kZXgsIHRhaWwsICRlbG0kY29yZSRFbG0kSnNBcnJheSRlbXB0eSkpO1xuXHRcdFx0XHRyZXR1cm4gQTIoJGVsbSRjb3JlJEVsbSRKc0FycmF5JHB1c2gsIG5ld1N1YiwgdHJlZSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciB2YWx1ZSA9IEEyKCRlbG0kY29yZSRFbG0kSnNBcnJheSR1bnNhZmVHZXQsIHBvcywgdHJlZSk7XG5cdFx0XHRpZiAodmFsdWUuJCA9PT0gJ1N1YlRyZWUnKSB7XG5cdFx0XHRcdHZhciBzdWJUcmVlID0gdmFsdWUuYTtcblx0XHRcdFx0dmFyIG5ld1N1YiA9ICRlbG0kY29yZSRBcnJheSRTdWJUcmVlKFxuXHRcdFx0XHRcdEE0KCRlbG0kY29yZSRBcnJheSRpbnNlcnRUYWlsSW5UcmVlLCBzaGlmdCAtICRlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAsIGluZGV4LCB0YWlsLCBzdWJUcmVlKSk7XG5cdFx0XHRcdHJldHVybiBBMygkZWxtJGNvcmUkRWxtJEpzQXJyYXkkdW5zYWZlU2V0LCBwb3MsIG5ld1N1YiwgdHJlZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgbmV3U3ViID0gJGVsbSRjb3JlJEFycmF5JFN1YlRyZWUoXG5cdFx0XHRcdFx0QTQoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkQXJyYXkkaW5zZXJ0VGFpbEluVHJlZSxcblx0XHRcdFx0XHRcdHNoaWZ0IC0gJGVsbSRjb3JlJEFycmF5JHNoaWZ0U3RlcCxcblx0XHRcdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRcdFx0dGFpbCxcblx0XHRcdFx0XHRcdCRlbG0kY29yZSRFbG0kSnNBcnJheSRzaW5nbGV0b24odmFsdWUpKSk7XG5cdFx0XHRcdHJldHVybiBBMygkZWxtJGNvcmUkRWxtJEpzQXJyYXkkdW5zYWZlU2V0LCBwb3MsIG5ld1N1YiwgdHJlZSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkQXJyYXkkdW5zYWZlUmVwbGFjZVRhaWwgPSBGMihcblx0ZnVuY3Rpb24gKG5ld1RhaWwsIF92MCkge1xuXHRcdHZhciBsZW4gPSBfdjAuYTtcblx0XHR2YXIgc3RhcnRTaGlmdCA9IF92MC5iO1xuXHRcdHZhciB0cmVlID0gX3YwLmM7XG5cdFx0dmFyIHRhaWwgPSBfdjAuZDtcblx0XHR2YXIgb3JpZ2luYWxUYWlsTGVuID0gJGVsbSRjb3JlJEVsbSRKc0FycmF5JGxlbmd0aCh0YWlsKTtcblx0XHR2YXIgbmV3VGFpbExlbiA9ICRlbG0kY29yZSRFbG0kSnNBcnJheSRsZW5ndGgobmV3VGFpbCk7XG5cdFx0dmFyIG5ld0FycmF5TGVuID0gbGVuICsgKG5ld1RhaWxMZW4gLSBvcmlnaW5hbFRhaWxMZW4pO1xuXHRcdGlmIChfVXRpbHNfZXEobmV3VGFpbExlbiwgJGVsbSRjb3JlJEFycmF5JGJyYW5jaEZhY3RvcikpIHtcblx0XHRcdHZhciBvdmVyZmxvdyA9IF9VdGlsc19jbXAobmV3QXJyYXlMZW4gPj4+ICRlbG0kY29yZSRBcnJheSRzaGlmdFN0ZXAsIDEgPDwgc3RhcnRTaGlmdCkgPiAwO1xuXHRcdFx0aWYgKG92ZXJmbG93KSB7XG5cdFx0XHRcdHZhciBuZXdTaGlmdCA9IHN0YXJ0U2hpZnQgKyAkZWxtJGNvcmUkQXJyYXkkc2hpZnRTdGVwO1xuXHRcdFx0XHR2YXIgbmV3VHJlZSA9IEE0KFxuXHRcdFx0XHRcdCRlbG0kY29yZSRBcnJheSRpbnNlcnRUYWlsSW5UcmVlLFxuXHRcdFx0XHRcdG5ld1NoaWZ0LFxuXHRcdFx0XHRcdGxlbixcblx0XHRcdFx0XHRuZXdUYWlsLFxuXHRcdFx0XHRcdCRlbG0kY29yZSRFbG0kSnNBcnJheSRzaW5nbGV0b24oXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkQXJyYXkkU3ViVHJlZSh0cmVlKSkpO1xuXHRcdFx0XHRyZXR1cm4gQTQoJGVsbSRjb3JlJEFycmF5JEFycmF5X2VsbV9idWlsdGluLCBuZXdBcnJheUxlbiwgbmV3U2hpZnQsIG5ld1RyZWUsICRlbG0kY29yZSRFbG0kSnNBcnJheSRlbXB0eSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gQTQoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJEFycmF5JEFycmF5X2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdG5ld0FycmF5TGVuLFxuXHRcdFx0XHRcdHN0YXJ0U2hpZnQsXG5cdFx0XHRcdFx0QTQoJGVsbSRjb3JlJEFycmF5JGluc2VydFRhaWxJblRyZWUsIHN0YXJ0U2hpZnQsIGxlbiwgbmV3VGFpbCwgdHJlZSksXG5cdFx0XHRcdFx0JGVsbSRjb3JlJEVsbSRKc0FycmF5JGVtcHR5KTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIEE0KCRlbG0kY29yZSRBcnJheSRBcnJheV9lbG1fYnVpbHRpbiwgbmV3QXJyYXlMZW4sIHN0YXJ0U2hpZnQsIHRyZWUsIG5ld1RhaWwpO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJEFycmF5JHB1c2ggPSBGMihcblx0ZnVuY3Rpb24gKGEsIGFycmF5KSB7XG5cdFx0dmFyIHRhaWwgPSBhcnJheS5kO1xuXHRcdHJldHVybiBBMihcblx0XHRcdCRlbG0kY29yZSRBcnJheSR1bnNhZmVSZXBsYWNlVGFpbCxcblx0XHRcdEEyKCRlbG0kY29yZSRFbG0kSnNBcnJheSRwdXNoLCBhLCB0YWlsKSxcblx0XHRcdGFycmF5KTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkYWRkID0gRjMoXG5cdGZ1bmN0aW9uIChtc2csIG1vZGVsLCBfdjApIHtcblx0XHR2YXIgc25hcHNob3RzID0gX3YwLnNuYXBzaG90cztcblx0XHR2YXIgcmVjZW50ID0gX3YwLnJlY2VudDtcblx0XHR2YXIgbnVtTWVzc2FnZXMgPSBfdjAubnVtTWVzc2FnZXM7XG5cdFx0dmFyIF92MSA9IEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGFkZFJlY2VudCwgbXNnLCBtb2RlbCwgcmVjZW50KTtcblx0XHRpZiAoX3YxLmEuJCA9PT0gJ0p1c3QnKSB7XG5cdFx0XHR2YXIgc25hcHNob3QgPSBfdjEuYS5hO1xuXHRcdFx0dmFyIG5ld1JlY2VudCA9IF92MS5iO1xuXHRcdFx0cmV0dXJuIEEzKFxuXHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRIaXN0b3J5LFxuXHRcdFx0XHRBMigkZWxtJGNvcmUkQXJyYXkkcHVzaCwgc25hcHNob3QsIHNuYXBzaG90cyksXG5cdFx0XHRcdG5ld1JlY2VudCxcblx0XHRcdFx0bnVtTWVzc2FnZXMgKyAxKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF92MiA9IF92MS5hO1xuXHRcdFx0dmFyIG5ld1JlY2VudCA9IF92MS5iO1xuXHRcdFx0cmV0dXJuIEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JEhpc3RvcnksIHNuYXBzaG90cywgbmV3UmVjZW50LCBudW1NZXNzYWdlcyArIDEpO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJEJhc2ljcyRhbHdheXMgPSBGMihcblx0ZnVuY3Rpb24gKGEsIF92MCkge1xuXHRcdHJldHVybiBhO1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCYWRJbXBvcnQgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdCYWRJbXBvcnQnLCBhOiBhfTtcbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkUmlza3lJbXBvcnQgPSBGMihcblx0ZnVuY3Rpb24gKGEsIGIpIHtcblx0XHRyZXR1cm4geyQ6ICdSaXNreUltcG9ydCcsIGE6IGEsIGI6IGJ9O1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JFZlcnNpb25DaGFuZ2VkID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnVmVyc2lvbkNoYW5nZWQnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRNZXNzYWdlQ2hhbmdlZCA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ01lc3NhZ2VDaGFuZ2VkJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkU29tZXRoaW5nQ2hhbmdlZCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ1NvbWV0aGluZ0NoYW5nZWQnLCBhOiBhfTtcbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRBbGlhc0NoYW5nZSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0FsaWFzQ2hhbmdlJywgYTogYX07XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjaGVja0FsaWFzID0gRjQoXG5cdGZ1bmN0aW9uIChuYW1lLCBvbGQsIF9uZXcsIGNoYW5nZXMpIHtcblx0XHRyZXR1cm4gKF9VdGlsc19lcShvbGQudGlwZSwgX25ldy50aXBlKSAmJiBfVXRpbHNfZXEob2xkLmFyZ3MsIF9uZXcuYXJncykpID8gY2hhbmdlcyA6IEEyKFxuXHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkQWxpYXNDaGFuZ2UobmFtZSksXG5cdFx0XHRjaGFuZ2VzKTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRVbmlvbkNoYW5nZSA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ1VuaW9uQ2hhbmdlJywgYTogYSwgYjogYn07XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRhZGRUYWcgPSBGMyhcblx0ZnVuY3Rpb24gKHRhZywgX3YwLCBjaGFuZ2VzKSB7XG5cdFx0cmV0dXJuIF9VdGlsc191cGRhdGUoXG5cdFx0XHRjaGFuZ2VzLFxuXHRcdFx0e1xuXHRcdFx0XHRhZGRlZDogQTIoJGVsbSRjb3JlJExpc3QkY29ucywgdGFnLCBjaGFuZ2VzLmFkZGVkKVxuXHRcdFx0fSk7XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRjaGVja1RhZyA9IEY0KFxuXHRmdW5jdGlvbiAodGFnLCBvbGQsIF9uZXcsIGNoYW5nZXMpIHtcblx0XHRyZXR1cm4gX1V0aWxzX2VxKG9sZCwgX25ldykgPyBjaGFuZ2VzIDogX1V0aWxzX3VwZGF0ZShcblx0XHRcdGNoYW5nZXMsXG5cdFx0XHR7XG5cdFx0XHRcdGNoYW5nZWQ6IEEyKCRlbG0kY29yZSRMaXN0JGNvbnMsIHRhZywgY2hhbmdlcy5jaGFuZ2VkKVxuXHRcdFx0fSk7XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkVGFnQ2hhbmdlcyA9IEY0KFxuXHRmdW5jdGlvbiAocmVtb3ZlZCwgY2hhbmdlZCwgYWRkZWQsIGFyZ3NNYXRjaCkge1xuXHRcdHJldHVybiB7YWRkZWQ6IGFkZGVkLCBhcmdzTWF0Y2g6IGFyZ3NNYXRjaCwgY2hhbmdlZDogY2hhbmdlZCwgcmVtb3ZlZDogcmVtb3ZlZH07XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkZW1wdHlUYWdDaGFuZ2VzID0gZnVuY3Rpb24gKGFyZ3NNYXRjaCkge1xuXHRyZXR1cm4gQTQoJGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRUYWdDaGFuZ2VzLCBfTGlzdF9OaWwsIF9MaXN0X05pbCwgX0xpc3RfTmlsLCBhcmdzTWF0Y2gpO1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JGhhc1RhZ0NoYW5nZXMgPSBmdW5jdGlvbiAodGFnQ2hhbmdlcykge1xuXHRyZXR1cm4gX1V0aWxzX2VxKFxuXHRcdHRhZ0NoYW5nZXMsXG5cdFx0QTQoJGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRUYWdDaGFuZ2VzLCBfTGlzdF9OaWwsIF9MaXN0X05pbCwgX0xpc3RfTmlsLCB0cnVlKSk7XG59O1xudmFyICRlbG0kY29yZSREaWN0JG1lcmdlID0gRjYoXG5cdGZ1bmN0aW9uIChsZWZ0U3RlcCwgYm90aFN0ZXAsIHJpZ2h0U3RlcCwgbGVmdERpY3QsIHJpZ2h0RGljdCwgaW5pdGlhbFJlc3VsdCkge1xuXHRcdHZhciBzdGVwU3RhdGUgPSBGMyhcblx0XHRcdGZ1bmN0aW9uIChyS2V5LCByVmFsdWUsIF92MCkge1xuXHRcdFx0XHRzdGVwU3RhdGU6XG5cdFx0XHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRcdFx0dmFyIGxpc3QgPSBfdjAuYTtcblx0XHRcdFx0XHR2YXIgcmVzdWx0ID0gX3YwLmI7XG5cdFx0XHRcdFx0aWYgKCFsaXN0LmIpIHtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRsaXN0LFxuXHRcdFx0XHRcdFx0XHRBMyhyaWdodFN0ZXAsIHJLZXksIHJWYWx1ZSwgcmVzdWx0KSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBfdjIgPSBsaXN0LmE7XG5cdFx0XHRcdFx0XHR2YXIgbEtleSA9IF92Mi5hO1xuXHRcdFx0XHRcdFx0dmFyIGxWYWx1ZSA9IF92Mi5iO1xuXHRcdFx0XHRcdFx0dmFyIHJlc3QgPSBsaXN0LmI7XG5cdFx0XHRcdFx0XHRpZiAoX1V0aWxzX2NtcChsS2V5LCByS2V5KSA8IDApIHtcblx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJHJLZXkgPSByS2V5LFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJHJWYWx1ZSA9IHJWYWx1ZSxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRfdjAgPSBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdHJlc3QsXG5cdFx0XHRcdFx0XHRcdFx0QTMobGVmdFN0ZXAsIGxLZXksIGxWYWx1ZSwgcmVzdWx0KSk7XG5cdFx0XHRcdFx0XHRcdHJLZXkgPSAkdGVtcCRyS2V5O1xuXHRcdFx0XHRcdFx0XHRyVmFsdWUgPSAkdGVtcCRyVmFsdWU7XG5cdFx0XHRcdFx0XHRcdF92MCA9ICR0ZW1wJF92MDtcblx0XHRcdFx0XHRcdFx0Y29udGludWUgc3RlcFN0YXRlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKF9VdGlsc19jbXAobEtleSwgcktleSkgPiAwKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0LFxuXHRcdFx0XHRcdFx0XHRcdFx0QTMocmlnaHRTdGVwLCByS2V5LCByVmFsdWUsIHJlc3VsdCkpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdFx0cmVzdCxcblx0XHRcdFx0XHRcdFx0XHRcdEE0KGJvdGhTdGVwLCBsS2V5LCBsVmFsdWUsIHJWYWx1ZSwgcmVzdWx0KSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdHZhciBfdjMgPSBBMyhcblx0XHRcdCRlbG0kY29yZSREaWN0JGZvbGRsLFxuXHRcdFx0c3RlcFN0YXRlLFxuXHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0JGVsbSRjb3JlJERpY3QkdG9MaXN0KGxlZnREaWN0KSxcblx0XHRcdFx0aW5pdGlhbFJlc3VsdCksXG5cdFx0XHRyaWdodERpY3QpO1xuXHRcdHZhciBsZWZ0b3ZlcnMgPSBfdjMuYTtcblx0XHR2YXIgaW50ZXJtZWRpYXRlUmVzdWx0ID0gX3YzLmI7XG5cdFx0cmV0dXJuIEEzKFxuXHRcdFx0JGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0XHRGMihcblx0XHRcdFx0ZnVuY3Rpb24gKF92NCwgcmVzdWx0KSB7XG5cdFx0XHRcdFx0dmFyIGsgPSBfdjQuYTtcblx0XHRcdFx0XHR2YXIgdiA9IF92NC5iO1xuXHRcdFx0XHRcdHJldHVybiBBMyhsZWZ0U3RlcCwgaywgdiwgcmVzdWx0KTtcblx0XHRcdFx0fSksXG5cdFx0XHRpbnRlcm1lZGlhdGVSZXN1bHQsXG5cdFx0XHRsZWZ0b3ZlcnMpO1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkcmVtb3ZlVGFnID0gRjMoXG5cdGZ1bmN0aW9uICh0YWcsIF92MCwgY2hhbmdlcykge1xuXHRcdHJldHVybiBfVXRpbHNfdXBkYXRlKFxuXHRcdFx0Y2hhbmdlcyxcblx0XHRcdHtcblx0XHRcdFx0cmVtb3ZlZDogQTIoJGVsbSRjb3JlJExpc3QkY29ucywgdGFnLCBjaGFuZ2VzLnJlbW92ZWQpXG5cdFx0XHR9KTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNoZWNrVW5pb24gPSBGNChcblx0ZnVuY3Rpb24gKG5hbWUsIG9sZCwgX25ldywgY2hhbmdlcykge1xuXHRcdHZhciB0YWdDaGFuZ2VzID0gQTYoXG5cdFx0XHQkZWxtJGNvcmUkRGljdCRtZXJnZSxcblx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRyZW1vdmVUYWcsXG5cdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkY2hlY2tUYWcsXG5cdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkYWRkVGFnLFxuXHRcdFx0b2xkLnRhZ3MsXG5cdFx0XHRfbmV3LnRhZ3MsXG5cdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JGVtcHR5VGFnQ2hhbmdlcyhcblx0XHRcdFx0X1V0aWxzX2VxKG9sZC5hcmdzLCBfbmV3LmFyZ3MpKSk7XG5cdFx0cmV0dXJuICRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkaGFzVGFnQ2hhbmdlcyh0YWdDaGFuZ2VzKSA/IGNoYW5nZXMgOiBBMihcblx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JFVuaW9uQ2hhbmdlLCBuYW1lLCB0YWdDaGFuZ2VzKSxcblx0XHRcdGNoYW5nZXMpO1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkaWdub3JlID0gRjMoXG5cdGZ1bmN0aW9uIChrZXksIHZhbHVlLCByZXBvcnQpIHtcblx0XHRyZXR1cm4gcmVwb3J0O1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkY2hlY2tUeXBlcyA9IEYyKFxuXHRmdW5jdGlvbiAob2xkLCBfbmV3KSB7XG5cdFx0cmV0dXJuICghX1V0aWxzX2VxKG9sZC5tZXNzYWdlLCBfbmV3Lm1lc3NhZ2UpKSA/IEEyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkTWVzc2FnZUNoYW5nZWQsIG9sZC5tZXNzYWdlLCBfbmV3Lm1lc3NhZ2UpIDogJGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRTb21ldGhpbmdDaGFuZ2VkKFxuXHRcdFx0QTYoXG5cdFx0XHRcdCRlbG0kY29yZSREaWN0JG1lcmdlLFxuXHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkaWdub3JlLFxuXHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkY2hlY2tVbmlvbixcblx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGlnbm9yZSxcblx0XHRcdFx0b2xkLnVuaW9ucyxcblx0XHRcdFx0X25ldy51bmlvbnMsXG5cdFx0XHRcdEE2KCRlbG0kY29yZSREaWN0JG1lcmdlLCAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkaWdub3JlLCAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkY2hlY2tBbGlhcywgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGlnbm9yZSwgb2xkLmFsaWFzZXMsIF9uZXcuYWxpYXNlcywgX0xpc3RfTmlsKSkpO1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkY2hlY2sgPSBGMihcblx0ZnVuY3Rpb24gKG9sZCwgX25ldykge1xuXHRcdHJldHVybiAoIV9VdGlsc19lcShvbGQudmVyc2lvbnMuZWxtLCBfbmV3LnZlcnNpb25zLmVsbSkpID8gQTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRWZXJzaW9uQ2hhbmdlZCwgb2xkLnZlcnNpb25zLmVsbSwgX25ldy52ZXJzaW9ucy5lbG0pIDogQTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGNoZWNrVHlwZXMsIG9sZC50eXBlcywgX25ldy50eXBlcyk7XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkQ29ycnVwdEhpc3RvcnkgPSB7JDogJ0NvcnJ1cHRIaXN0b3J5J307XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkY29ycnVwdEltcG9ydCA9ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JEJhZEltcG9ydCgkZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JENvcnJ1cHRIaXN0b3J5KTtcbnZhciAkZWxtJGpzb24kSnNvbiREZWNvZGUkZGVjb2RlU3RyaW5nID0gX0pzb25fcnVuT25TdHJpbmc7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRGaW5lID0geyQ6ICdGaW5lJ307XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRJbXBvc3NpYmxlID0geyQ6ICdJbXBvc3NpYmxlJ307XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRSaXNreSA9IHskOiAnUmlza3knfTtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJG5vdCA9IF9CYXNpY3Nfbm90O1xudmFyICRlbG0kY29yZSRMaXN0JGlzRW1wdHkgPSBmdW5jdGlvbiAoeHMpIHtcblx0aWYgKCF4cy5iKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkc29tZSA9IGZ1bmN0aW9uIChsaXN0KSB7XG5cdHJldHVybiAhJGVsbSRjb3JlJExpc3QkaXNFbXB0eShsaXN0KTtcbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRldmFsdWF0ZUNoYW5nZSA9IGZ1bmN0aW9uIChjaGFuZ2UpIHtcblx0aWYgKGNoYW5nZS4kID09PSAnQWxpYXNDaGFuZ2UnKSB7XG5cdFx0cmV0dXJuICRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkSW1wb3NzaWJsZTtcblx0fSBlbHNlIHtcblx0XHR2YXIgcmVtb3ZlZCA9IGNoYW5nZS5iLnJlbW92ZWQ7XG5cdFx0dmFyIGNoYW5nZWQgPSBjaGFuZ2UuYi5jaGFuZ2VkO1xuXHRcdHZhciBhZGRlZCA9IGNoYW5nZS5iLmFkZGVkO1xuXHRcdHZhciBhcmdzTWF0Y2ggPSBjaGFuZ2UuYi5hcmdzTWF0Y2g7XG5cdFx0cmV0dXJuICgoIWFyZ3NNYXRjaCkgfHwgKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkc29tZShjaGFuZ2VkKSB8fCAkZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JHNvbWUocmVtb3ZlZCkpKSA/ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkSW1wb3NzaWJsZSA6ICgkZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JHNvbWUoYWRkZWQpID8gJGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRSaXNreSA6ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkRmluZSk7XG5cdH1cbn07XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCR3b3JzdENhc2UgPSBGMihcblx0ZnVuY3Rpb24gKHN0YXR1cywgc3RhdHVzTGlzdCkge1xuXHRcdHdvcnN0Q2FzZTpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKCFzdGF0dXNMaXN0LmIpIHtcblx0XHRcdFx0cmV0dXJuIHN0YXR1cztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN3aXRjaCAoc3RhdHVzTGlzdC5hLiQpIHtcblx0XHRcdFx0XHRjYXNlICdJbXBvc3NpYmxlJzpcblx0XHRcdFx0XHRcdHZhciBfdjEgPSBzdGF0dXNMaXN0LmE7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRJbXBvc3NpYmxlO1xuXHRcdFx0XHRcdGNhc2UgJ1Jpc2t5Jzpcblx0XHRcdFx0XHRcdHZhciBfdjIgPSBzdGF0dXNMaXN0LmE7XG5cdFx0XHRcdFx0XHR2YXIgcmVzdCA9IHN0YXR1c0xpc3QuYjtcblx0XHRcdFx0XHRcdHZhciAkdGVtcCRzdGF0dXMgPSAkZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JFJpc2t5LFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRzdGF0dXNMaXN0ID0gcmVzdDtcblx0XHRcdFx0XHRcdHN0YXR1cyA9ICR0ZW1wJHN0YXR1cztcblx0XHRcdFx0XHRcdHN0YXR1c0xpc3QgPSAkdGVtcCRzdGF0dXNMaXN0O1xuXHRcdFx0XHRcdFx0Y29udGludWUgd29yc3RDYXNlO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR2YXIgX3YzID0gc3RhdHVzTGlzdC5hO1xuXHRcdFx0XHRcdFx0dmFyIHJlc3QgPSBzdGF0dXNMaXN0LmI7XG5cdFx0XHRcdFx0XHR2YXIgJHRlbXAkc3RhdHVzID0gc3RhdHVzLFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRzdGF0dXNMaXN0ID0gcmVzdDtcblx0XHRcdFx0XHRcdHN0YXR1cyA9ICR0ZW1wJHN0YXR1cztcblx0XHRcdFx0XHRcdHN0YXR1c0xpc3QgPSAkdGVtcCRzdGF0dXNMaXN0O1xuXHRcdFx0XHRcdFx0Y29udGludWUgd29yc3RDYXNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JGV2YWx1YXRlID0gZnVuY3Rpb24gKHJlcG9ydCkge1xuXHRzd2l0Y2ggKHJlcG9ydC4kKSB7XG5cdFx0Y2FzZSAnQ29ycnVwdEhpc3RvcnknOlxuXHRcdFx0cmV0dXJuICRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkSW1wb3NzaWJsZTtcblx0XHRjYXNlICdWZXJzaW9uQ2hhbmdlZCc6XG5cdFx0XHRyZXR1cm4gJGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRJbXBvc3NpYmxlO1xuXHRcdGNhc2UgJ01lc3NhZ2VDaGFuZ2VkJzpcblx0XHRcdHJldHVybiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JEltcG9zc2libGU7XG5cdFx0ZGVmYXVsdDpcblx0XHRcdHZhciBjaGFuZ2VzID0gcmVwb3J0LmE7XG5cdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkd29yc3RDYXNlLFxuXHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkUmVwb3J0JEZpbmUsXG5cdFx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JG1hcCwgJGVsbSRicm93c2VyJERlYnVnZ2VyJFJlcG9ydCRldmFsdWF0ZUNoYW5nZSwgY2hhbmdlcykpO1xuXHR9XG59O1xudmFyICRlbG0kanNvbiRKc29uJERlY29kZSR2YWx1ZSA9IF9Kc29uX2RlY29kZVZhbHVlO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHVwbG9hZERlY29kZXIgPSBBMyhcblx0JGVsbSRqc29uJEpzb24kRGVjb2RlJG1hcDIsXG5cdEYyKFxuXHRcdGZ1bmN0aW9uICh4LCB5KSB7XG5cdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMih4LCB5KTtcblx0XHR9KSxcblx0QTIoJGVsbSRqc29uJEpzb24kRGVjb2RlJGZpZWxkLCAnbWV0YWRhdGEnLCAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZGVjb2RlciksXG5cdEEyKCRlbG0kanNvbiRKc29uJERlY29kZSRmaWVsZCwgJ2hpc3RvcnknLCAkZWxtJGpzb24kSnNvbiREZWNvZGUkdmFsdWUpKTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRhc3Nlc3NJbXBvcnQgPSBGMihcblx0ZnVuY3Rpb24gKG1ldGFkYXRhLCBqc29uU3RyaW5nKSB7XG5cdFx0dmFyIF92MCA9IEEyKCRlbG0kanNvbiRKc29uJERlY29kZSRkZWNvZGVTdHJpbmcsICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JHVwbG9hZERlY29kZXIsIGpzb25TdHJpbmcpO1xuXHRcdGlmIChfdjAuJCA9PT0gJ0VycicpIHtcblx0XHRcdHJldHVybiAkZWxtJGNvcmUkUmVzdWx0JEVycigkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRjb3JydXB0SW1wb3J0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF92MSA9IF92MC5hO1xuXHRcdFx0dmFyIGZvcmVpZ25NZXRhZGF0YSA9IF92MS5hO1xuXHRcdFx0dmFyIHJhd0hpc3RvcnkgPSBfdjEuYjtcblx0XHRcdHZhciByZXBvcnQgPSBBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkY2hlY2ssIGZvcmVpZ25NZXRhZGF0YSwgbWV0YWRhdGEpO1xuXHRcdFx0dmFyIF92MiA9ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRSZXBvcnQkZXZhbHVhdGUocmVwb3J0KTtcblx0XHRcdHN3aXRjaCAoX3YyLiQpIHtcblx0XHRcdFx0Y2FzZSAnSW1wb3NzaWJsZSc6XG5cdFx0XHRcdFx0cmV0dXJuICRlbG0kY29yZSRSZXN1bHQkRXJyKFxuXHRcdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmFkSW1wb3J0KHJlcG9ydCkpO1xuXHRcdFx0XHRjYXNlICdSaXNreSc6XG5cdFx0XHRcdFx0cmV0dXJuICRlbG0kY29yZSRSZXN1bHQkRXJyKFxuXHRcdFx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkUmlza3lJbXBvcnQsIHJlcG9ydCwgcmF3SGlzdG9yeSkpO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkUmVzdWx0JE9rKHJhd0hpc3RvcnkpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJFBsYXRmb3JtJENtZCRiYXRjaCA9IF9QbGF0Zm9ybV9iYXRjaDtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRjbG9zZSA9IEYyKFxuXHRmdW5jdGlvbiAobXNnLCBzdGF0ZSkge1xuXHRcdHN3aXRjaCAoc3RhdGUuJCkge1xuXHRcdFx0Y2FzZSAnTm9uZSc6XG5cdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHRcdGNhc2UgJ0JhZE1ldGFkYXRhJzpcblx0XHRcdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdFx0Y2FzZSAnQmFkSW1wb3J0Jzpcblx0XHRcdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dmFyIHJhd0hpc3RvcnkgPSBzdGF0ZS5iO1xuXHRcdFx0XHRpZiAobXNnLiQgPT09ICdDYW5jZWwnKSB7XG5cdFx0XHRcdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkSnVzdChyYXdIaXN0b3J5KTtcblx0XHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZWxtVG9KcyA9IEEyKCRlbG0kY29yZSRCYXNpY3MkY29tcG9zZVIsIF9Kc29uX3dyYXAsIF9EZWJ1Z2dlcl91bnNhZmVDb2VyY2UpO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGVuY29kZUhlbHAgPSBGMihcblx0ZnVuY3Rpb24gKHNuYXBzaG90LCBhbGxNZXNzYWdlcykge1xuXHRcdHJldHVybiBBMygkZWxtJGNvcmUkQXJyYXkkZm9sZGwsICRlbG0kY29yZSRMaXN0JGNvbnMsIGFsbE1lc3NhZ2VzLCBzbmFwc2hvdC5tZXNzYWdlcyk7XG5cdH0pO1xudmFyICRlbG0kanNvbiRKc29uJEVuY29kZSRsaXN0ID0gRjIoXG5cdGZ1bmN0aW9uIChmdW5jLCBlbnRyaWVzKSB7XG5cdFx0cmV0dXJuIF9Kc29uX3dyYXAoXG5cdFx0XHRBMyhcblx0XHRcdFx0JGVsbSRjb3JlJExpc3QkZm9sZGwsXG5cdFx0XHRcdF9Kc29uX2FkZEVudHJ5KGZ1bmMpLFxuXHRcdFx0XHRfSnNvbl9lbXB0eUFycmF5KF9VdGlsc19UdXBsZTApLFxuXHRcdFx0XHRlbnRyaWVzKSk7XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGVuY29kZSA9IGZ1bmN0aW9uIChfdjApIHtcblx0dmFyIHNuYXBzaG90cyA9IF92MC5zbmFwc2hvdHM7XG5cdHZhciByZWNlbnQgPSBfdjAucmVjZW50O1xuXHRyZXR1cm4gQTIoXG5cdFx0JGVsbSRqc29uJEpzb24kRW5jb2RlJGxpc3QsXG5cdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZWxtVG9Kcyxcblx0XHRBMyhcblx0XHRcdCRlbG0kY29yZSRBcnJheSRmb2xkcixcblx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGVuY29kZUhlbHAsXG5cdFx0XHQkZWxtJGNvcmUkTGlzdCRyZXZlcnNlKHJlY2VudC5tZXNzYWdlcyksXG5cdFx0XHRzbmFwc2hvdHMpKTtcbn07XG52YXIgJGVsbSRqc29uJEpzb24kRW5jb2RlJG9iamVjdCA9IGZ1bmN0aW9uIChwYWlycykge1xuXHRyZXR1cm4gX0pzb25fd3JhcChcblx0XHRBMyhcblx0XHRcdCRlbG0kY29yZSRMaXN0JGZvbGRsLFxuXHRcdFx0RjIoXG5cdFx0XHRcdGZ1bmN0aW9uIChfdjAsIG9iaikge1xuXHRcdFx0XHRcdHZhciBrID0gX3YwLmE7XG5cdFx0XHRcdFx0dmFyIHYgPSBfdjAuYjtcblx0XHRcdFx0XHRyZXR1cm4gQTMoX0pzb25fYWRkRmllbGQsIGssIHYsIG9iaik7XG5cdFx0XHRcdH0pLFxuXHRcdFx0X0pzb25fZW1wdHlPYmplY3QoX1V0aWxzX1R1cGxlMCksXG5cdFx0XHRwYWlycykpO1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlQWxpYXMgPSBmdW5jdGlvbiAoX3YwKSB7XG5cdHZhciBhcmdzID0gX3YwLmFyZ3M7XG5cdHZhciB0aXBlID0gX3YwLnRpcGU7XG5cdHJldHVybiAkZWxtJGpzb24kSnNvbiRFbmNvZGUkb2JqZWN0KFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0J2FyZ3MnLFxuXHRcdFx0XHRBMigkZWxtJGpzb24kSnNvbiRFbmNvZGUkbGlzdCwgJGVsbSRqc29uJEpzb24kRW5jb2RlJHN0cmluZywgYXJncykpLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQndHlwZScsXG5cdFx0XHRcdCRlbG0kanNvbiRKc29uJEVuY29kZSRzdHJpbmcodGlwZSkpXG5cdFx0XHRdKSk7XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGVEaWN0ID0gRjIoXG5cdGZ1bmN0aW9uIChmLCBkaWN0KSB7XG5cdFx0cmV0dXJuICRlbG0kanNvbiRKc29uJEVuY29kZSRvYmplY3QoXG5cdFx0XHQkZWxtJGNvcmUkRGljdCR0b0xpc3QoXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kY29yZSREaWN0JG1hcCxcblx0XHRcdFx0XHRGMihcblx0XHRcdFx0XHRcdGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBmKHZhbHVlKTtcblx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdGRpY3QpKSk7XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGVVbmlvbiA9IGZ1bmN0aW9uIChfdjApIHtcblx0dmFyIGFyZ3MgPSBfdjAuYXJncztcblx0dmFyIHRhZ3MgPSBfdjAudGFncztcblx0cmV0dXJuICRlbG0kanNvbiRKc29uJEVuY29kZSRvYmplY3QoXG5cdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQnYXJncycsXG5cdFx0XHRcdEEyKCRlbG0kanNvbiRKc29uJEVuY29kZSRsaXN0LCAkZWxtJGpzb24kSnNvbiRFbmNvZGUkc3RyaW5nLCBhcmdzKSksXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdCd0YWdzJyxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZURpY3QsXG5cdFx0XHRcdFx0JGVsbSRqc29uJEpzb24kRW5jb2RlJGxpc3QoJGVsbSRqc29uJEpzb24kRW5jb2RlJHN0cmluZyksXG5cdFx0XHRcdFx0dGFncykpXG5cdFx0XHRdKSk7XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGVUeXBlcyA9IGZ1bmN0aW9uIChfdjApIHtcblx0dmFyIG1lc3NhZ2UgPSBfdjAubWVzc2FnZTtcblx0dmFyIHVuaW9ucyA9IF92MC51bmlvbnM7XG5cdHZhciBhbGlhc2VzID0gX3YwLmFsaWFzZXM7XG5cdHJldHVybiAkZWxtJGpzb24kSnNvbiRFbmNvZGUkb2JqZWN0KFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0J21lc3NhZ2UnLFxuXHRcdFx0XHQkZWxtJGpzb24kSnNvbiRFbmNvZGUkc3RyaW5nKG1lc3NhZ2UpKSxcblx0XHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0J2FsaWFzZXMnLFxuXHRcdFx0XHRBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlRGljdCwgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZUFsaWFzLCBhbGlhc2VzKSksXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdCd1bmlvbnMnLFxuXHRcdFx0XHRBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlRGljdCwgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1ldGFkYXRhJGVuY29kZVVuaW9uLCB1bmlvbnMpKVxuXHRcdFx0XSkpO1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlVmVyc2lvbnMgPSBmdW5jdGlvbiAoX3YwKSB7XG5cdHZhciBlbG0gPSBfdjAuZWxtO1xuXHRyZXR1cm4gJGVsbSRqc29uJEpzb24kRW5jb2RlJG9iamVjdChcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdCdlbG0nLFxuXHRcdFx0XHQkZWxtJGpzb24kSnNvbiRFbmNvZGUkc3RyaW5nKGVsbSkpXG5cdFx0XHRdKSk7XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGUgPSBmdW5jdGlvbiAoX3YwKSB7XG5cdHZhciB2ZXJzaW9ucyA9IF92MC52ZXJzaW9ucztcblx0dmFyIHR5cGVzID0gX3YwLnR5cGVzO1xuXHRyZXR1cm4gJGVsbSRqc29uJEpzb24kRW5jb2RlJG9iamVjdChcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdCd2ZXJzaW9ucycsXG5cdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGVWZXJzaW9ucyh2ZXJzaW9ucykpLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHQndHlwZXMnLFxuXHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWV0YWRhdGEkZW5jb2RlVHlwZXModHlwZXMpKVxuXHRcdFx0XSkpO1xufTtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJGlkZW50aXR5ID0gZnVuY3Rpb24gKHgpIHtcblx0cmV0dXJuIHg7XG59O1xudmFyICRlbG0kY29yZSRUYXNrJFBlcmZvcm0gPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdQZXJmb3JtJywgYTogYX07XG59O1xudmFyICRlbG0kY29yZSRUYXNrJHN1Y2NlZWQgPSBfU2NoZWR1bGVyX3N1Y2NlZWQ7XG52YXIgJGVsbSRjb3JlJFRhc2skaW5pdCA9ICRlbG0kY29yZSRUYXNrJHN1Y2NlZWQoX1V0aWxzX1R1cGxlMCk7XG52YXIgJGVsbSRjb3JlJFRhc2skYW5kVGhlbiA9IF9TY2hlZHVsZXJfYW5kVGhlbjtcbnZhciAkZWxtJGNvcmUkVGFzayRtYXAgPSBGMihcblx0ZnVuY3Rpb24gKGZ1bmMsIHRhc2tBKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0JGVsbSRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdGZ1bmN0aW9uIChhKSB7XG5cdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkVGFzayRzdWNjZWVkKFxuXHRcdFx0XHRcdGZ1bmMoYSkpO1xuXHRcdFx0fSxcblx0XHRcdHRhc2tBKTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJFRhc2skbWFwMiA9IEYzKFxuXHRmdW5jdGlvbiAoZnVuYywgdGFza0EsIHRhc2tCKSB7XG5cdFx0cmV0dXJuIEEyKFxuXHRcdFx0JGVsbSRjb3JlJFRhc2skYW5kVGhlbixcblx0XHRcdGZ1bmN0aW9uIChhKSB7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHQkZWxtJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHRcdGZ1bmN0aW9uIChiKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gJGVsbSRjb3JlJFRhc2skc3VjY2VlZChcblx0XHRcdFx0XHRcdFx0QTIoZnVuYywgYSwgYikpO1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0dGFza0IpO1xuXHRcdFx0fSxcblx0XHRcdHRhc2tBKTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJFRhc2skc2VxdWVuY2UgPSBmdW5jdGlvbiAodGFza3MpIHtcblx0cmV0dXJuIEEzKFxuXHRcdCRlbG0kY29yZSRMaXN0JGZvbGRyLFxuXHRcdCRlbG0kY29yZSRUYXNrJG1hcDIoJGVsbSRjb3JlJExpc3QkY29ucyksXG5cdFx0JGVsbSRjb3JlJFRhc2skc3VjY2VlZChfTGlzdF9OaWwpLFxuXHRcdHRhc2tzKTtcbn07XG52YXIgJGVsbSRjb3JlJFBsYXRmb3JtJHNlbmRUb0FwcCA9IF9QbGF0Zm9ybV9zZW5kVG9BcHA7XG52YXIgJGVsbSRjb3JlJFRhc2skc3Bhd25DbWQgPSBGMihcblx0ZnVuY3Rpb24gKHJvdXRlciwgX3YwKSB7XG5cdFx0dmFyIHRhc2sgPSBfdjAuYTtcblx0XHRyZXR1cm4gX1NjaGVkdWxlcl9zcGF3bihcblx0XHRcdEEyKFxuXHRcdFx0XHQkZWxtJGNvcmUkVGFzayRhbmRUaGVuLFxuXHRcdFx0XHQkZWxtJGNvcmUkUGxhdGZvcm0kc2VuZFRvQXBwKHJvdXRlciksXG5cdFx0XHRcdHRhc2spKTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJFRhc2skb25FZmZlY3RzID0gRjMoXG5cdGZ1bmN0aW9uIChyb3V0ZXIsIGNvbW1hbmRzLCBzdGF0ZSkge1xuXHRcdHJldHVybiBBMihcblx0XHRcdCRlbG0kY29yZSRUYXNrJG1hcCxcblx0XHRcdGZ1bmN0aW9uIChfdjApIHtcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTA7XG5cdFx0XHR9LFxuXHRcdFx0JGVsbSRjb3JlJFRhc2skc2VxdWVuY2UoXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kY29yZSRMaXN0JG1hcCxcblx0XHRcdFx0XHQkZWxtJGNvcmUkVGFzayRzcGF3bkNtZChyb3V0ZXIpLFxuXHRcdFx0XHRcdGNvbW1hbmRzKSkpO1xuXHR9KTtcbnZhciAkZWxtJGNvcmUkVGFzayRvblNlbGZNc2cgPSBGMyhcblx0ZnVuY3Rpb24gKF92MCwgX3YxLCBfdjIpIHtcblx0XHRyZXR1cm4gJGVsbSRjb3JlJFRhc2skc3VjY2VlZChfVXRpbHNfVHVwbGUwKTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJFRhc2skY21kTWFwID0gRjIoXG5cdGZ1bmN0aW9uICh0YWdnZXIsIF92MCkge1xuXHRcdHZhciB0YXNrID0gX3YwLmE7XG5cdFx0cmV0dXJuICRlbG0kY29yZSRUYXNrJFBlcmZvcm0oXG5cdFx0XHRBMigkZWxtJGNvcmUkVGFzayRtYXAsIHRhZ2dlciwgdGFzaykpO1xuXHR9KTtcbl9QbGF0Zm9ybV9lZmZlY3RNYW5hZ2Vyc1snVGFzayddID0gX1BsYXRmb3JtX2NyZWF0ZU1hbmFnZXIoJGVsbSRjb3JlJFRhc2skaW5pdCwgJGVsbSRjb3JlJFRhc2skb25FZmZlY3RzLCAkZWxtJGNvcmUkVGFzayRvblNlbGZNc2csICRlbG0kY29yZSRUYXNrJGNtZE1hcCk7XG52YXIgJGVsbSRjb3JlJFRhc2skY29tbWFuZCA9IF9QbGF0Zm9ybV9sZWFmKCdUYXNrJyk7XG52YXIgJGVsbSRjb3JlJFRhc2skcGVyZm9ybSA9IEYyKFxuXHRmdW5jdGlvbiAodG9NZXNzYWdlLCB0YXNrKSB7XG5cdFx0cmV0dXJuICRlbG0kY29yZSRUYXNrJGNvbW1hbmQoXG5cdFx0XHQkZWxtJGNvcmUkVGFzayRQZXJmb3JtKFxuXHRcdFx0XHRBMigkZWxtJGNvcmUkVGFzayRtYXAsIHRvTWVzc2FnZSwgdGFzaykpKTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZG93bmxvYWQgPSBGMihcblx0ZnVuY3Rpb24gKG1ldGFkYXRhLCBoaXN0b3J5KSB7XG5cdFx0dmFyIGhpc3RvcnlMZW5ndGggPSAkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRzaXplKGhpc3RvcnkpO1xuXHRcdHJldHVybiBBMihcblx0XHRcdCRlbG0kY29yZSRUYXNrJHBlcmZvcm0sXG5cdFx0XHRmdW5jdGlvbiAoX3YwKSB7XG5cdFx0XHRcdHJldHVybiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiROb09wO1xuXHRcdFx0fSxcblx0XHRcdEEyKFxuXHRcdFx0XHRfRGVidWdnZXJfZG93bmxvYWQsXG5cdFx0XHRcdGhpc3RvcnlMZW5ndGgsXG5cdFx0XHRcdF9Kc29uX3Vud3JhcChcblx0XHRcdFx0XHQkZWxtJGpzb24kSnNvbiRFbmNvZGUkb2JqZWN0KFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0X1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHQnbWV0YWRhdGEnLFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNZXRhZGF0YSRlbmNvZGUobWV0YWRhdGEpKSxcblx0XHRcdFx0XHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdCdoaXN0b3J5Jyxcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRlbmNvZGUoaGlzdG9yeSkpXG5cdFx0XHRcdFx0XHRcdF0pKSkpKTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kVmVydGljYWwgPSBGMyhcblx0ZnVuY3Rpb24gKGEsIGIsIGMpIHtcblx0XHRyZXR1cm4geyQ6ICdWZXJ0aWNhbCcsIGE6IGEsIGI6IGIsIGM6IGN9O1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRkcmFnID0gRjIoXG5cdGZ1bmN0aW9uIChpbmZvLCBsYXlvdXQpIHtcblx0XHRpZiAobGF5b3V0LiQgPT09ICdIb3Jpem9udGFsJykge1xuXHRcdFx0dmFyIHN0YXR1cyA9IGxheW91dC5hO1xuXHRcdFx0dmFyIHkgPSBsYXlvdXQuYztcblx0XHRcdHJldHVybiBBMygkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRIb3Jpem9udGFsLCBzdGF0dXMsIGluZm8ueCAvIGluZm8ud2lkdGgsIHkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgc3RhdHVzID0gbGF5b3V0LmE7XG5cdFx0XHR2YXIgeCA9IGxheW91dC5iO1xuXHRcdFx0cmV0dXJuIEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFZlcnRpY2FsLCBzdGF0dXMsIHgsIGluZm8ueSAvIGluZm8uaGVpZ2h0KTtcblx0XHR9XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JFN0ZXBwaW5nID0gRjIoXG5cdGZ1bmN0aW9uIChhLCBiKSB7XG5cdFx0cmV0dXJuIHskOiAnU3RlcHBpbmcnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkRG9uZSA9IEYyKFxuXHRmdW5jdGlvbiAoYSwgYikge1xuXHRcdHJldHVybiB7JDogJ0RvbmUnLCBhOiBhLCBiOiBifTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZ2V0SGVscCA9IEYzKFxuXHRmdW5jdGlvbiAodXBkYXRlLCBtc2csIGdldFJlc3VsdCkge1xuXHRcdGlmIChnZXRSZXN1bHQuJCA9PT0gJ0RvbmUnKSB7XG5cdFx0XHRyZXR1cm4gZ2V0UmVzdWx0O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgbiA9IGdldFJlc3VsdC5hO1xuXHRcdFx0dmFyIG1vZGVsID0gZ2V0UmVzdWx0LmI7XG5cdFx0XHRyZXR1cm4gKCFuKSA/IEEyKFxuXHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSREb25lLFxuXHRcdFx0XHRtc2csXG5cdFx0XHRcdEEyKHVwZGF0ZSwgbXNnLCBtb2RlbCkuYSkgOiBBMihcblx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkU3RlcHBpbmcsXG5cdFx0XHRcdG4gLSAxLFxuXHRcdFx0XHRBMih1cGRhdGUsIG1zZywgbW9kZWwpLmEpO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkdW5kb25lID0gZnVuY3Rpb24gKGdldFJlc3VsdCkge1xuXHR1bmRvbmU6XG5cdHdoaWxlICh0cnVlKSB7XG5cdFx0aWYgKGdldFJlc3VsdC4kID09PSAnRG9uZScpIHtcblx0XHRcdHZhciBtc2cgPSBnZXRSZXN1bHQuYTtcblx0XHRcdHZhciBtb2RlbCA9IGdldFJlc3VsdC5iO1xuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsIG1zZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciAkdGVtcCRnZXRSZXN1bHQgPSBnZXRSZXN1bHQ7XG5cdFx0XHRnZXRSZXN1bHQgPSAkdGVtcCRnZXRSZXN1bHQ7XG5cdFx0XHRjb250aW51ZSB1bmRvbmU7XG5cdFx0fVxuXHR9XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGdldCA9IEYzKFxuXHRmdW5jdGlvbiAodXBkYXRlLCBpbmRleCwgaGlzdG9yeSkge1xuXHRcdGdldDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0dmFyIHJlY2VudCA9IGhpc3RvcnkucmVjZW50O1xuXHRcdFx0dmFyIHNuYXBzaG90TWF4ID0gaGlzdG9yeS5udW1NZXNzYWdlcyAtIHJlY2VudC5udW1NZXNzYWdlcztcblx0XHRcdGlmIChfVXRpbHNfY21wKGluZGV4LCBzbmFwc2hvdE1heCkgPiAtMSkge1xuXHRcdFx0XHRyZXR1cm4gJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkdW5kb25lKFxuXHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkZm9sZHIsXG5cdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRnZXRIZWxwKHVwZGF0ZSksXG5cdFx0XHRcdFx0XHRBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRTdGVwcGluZywgaW5kZXggLSBzbmFwc2hvdE1heCwgcmVjZW50Lm1vZGVsKSxcblx0XHRcdFx0XHRcdHJlY2VudC5tZXNzYWdlcykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF92MCA9IEEyKCRlbG0kY29yZSRBcnJheSRnZXQsIChpbmRleCAvICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JG1heFNuYXBzaG90U2l6ZSkgfCAwLCBoaXN0b3J5LnNuYXBzaG90cyk7XG5cdFx0XHRcdGlmIChfdjAuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRcdFx0dmFyICR0ZW1wJHVwZGF0ZSA9IHVwZGF0ZSxcblx0XHRcdFx0XHRcdCR0ZW1wJGluZGV4ID0gaW5kZXgsXG5cdFx0XHRcdFx0XHQkdGVtcCRoaXN0b3J5ID0gaGlzdG9yeTtcblx0XHRcdFx0XHR1cGRhdGUgPSAkdGVtcCR1cGRhdGU7XG5cdFx0XHRcdFx0aW5kZXggPSAkdGVtcCRpbmRleDtcblx0XHRcdFx0XHRoaXN0b3J5ID0gJHRlbXAkaGlzdG9yeTtcblx0XHRcdFx0XHRjb250aW51ZSBnZXQ7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIG1vZGVsID0gX3YwLmEubW9kZWw7XG5cdFx0XHRcdFx0dmFyIG1lc3NhZ2VzID0gX3YwLmEubWVzc2FnZXM7XG5cdFx0XHRcdFx0cmV0dXJuICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHVuZG9uZShcblx0XHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkQXJyYXkkZm9sZHIsXG5cdFx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGdldEhlbHAodXBkYXRlKSxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkU3RlcHBpbmcsIGluZGV4ICUgJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkbWF4U25hcHNob3RTaXplLCBtb2RlbCksXG5cdFx0XHRcdFx0XHRcdG1lc3NhZ2VzKSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGdldFJlY2VudE1zZyA9IGZ1bmN0aW9uIChoaXN0b3J5KSB7XG5cdGdldFJlY2VudE1zZzpcblx0d2hpbGUgKHRydWUpIHtcblx0XHR2YXIgX3YwID0gaGlzdG9yeS5yZWNlbnQubWVzc2FnZXM7XG5cdFx0aWYgKCFfdjAuYikge1xuXHRcdFx0dmFyICR0ZW1wJGhpc3RvcnkgPSBoaXN0b3J5O1xuXHRcdFx0aGlzdG9yeSA9ICR0ZW1wJGhpc3Rvcnk7XG5cdFx0XHRjb250aW51ZSBnZXRSZWNlbnRNc2c7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBmaXJzdCA9IF92MC5hO1xuXHRcdFx0cmV0dXJuIGZpcnN0O1xuXHRcdH1cblx0fVxufTtcbnZhciAkZWxtJGNvcmUkRGljdCRnZXQgPSBGMihcblx0ZnVuY3Rpb24gKHRhcmdldEtleSwgZGljdCkge1xuXHRcdGdldDpcblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKGRpY3QuJCA9PT0gJ1JCRW1wdHlfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBrZXkgPSBkaWN0LmI7XG5cdFx0XHRcdHZhciB2YWx1ZSA9IGRpY3QuYztcblx0XHRcdFx0dmFyIGxlZnQgPSBkaWN0LmQ7XG5cdFx0XHRcdHZhciByaWdodCA9IGRpY3QuZTtcblx0XHRcdFx0dmFyIF92MSA9IEEyKCRlbG0kY29yZSRCYXNpY3MkY29tcGFyZSwgdGFyZ2V0S2V5LCBrZXkpO1xuXHRcdFx0XHRzd2l0Y2ggKF92MS4kKSB7XG5cdFx0XHRcdFx0Y2FzZSAnTFQnOlxuXHRcdFx0XHRcdFx0dmFyICR0ZW1wJHRhcmdldEtleSA9IHRhcmdldEtleSxcblx0XHRcdFx0XHRcdFx0JHRlbXAkZGljdCA9IGxlZnQ7XG5cdFx0XHRcdFx0XHR0YXJnZXRLZXkgPSAkdGVtcCR0YXJnZXRLZXk7XG5cdFx0XHRcdFx0XHRkaWN0ID0gJHRlbXAkZGljdDtcblx0XHRcdFx0XHRcdGNvbnRpbnVlIGdldDtcblx0XHRcdFx0XHRjYXNlICdFUSc6XG5cdFx0XHRcdFx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJEp1c3QodmFsdWUpO1xuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHR2YXIgJHRlbXAkdGFyZ2V0S2V5ID0gdGFyZ2V0S2V5LFxuXHRcdFx0XHRcdFx0XHQkdGVtcCRkaWN0ID0gcmlnaHQ7XG5cdFx0XHRcdFx0XHR0YXJnZXRLZXkgPSAkdGVtcCR0YXJnZXRLZXk7XG5cdFx0XHRcdFx0XHRkaWN0ID0gJHRlbXAkZGljdDtcblx0XHRcdFx0XHRcdGNvbnRpbnVlIGdldDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2VEaWN0SGVscCA9IEYzKFxuXHRmdW5jdGlvbiAob2xkRGljdCwga2V5LCB2YWx1ZSkge1xuXHRcdHZhciBfdjEyID0gQTIoJGVsbSRjb3JlJERpY3QkZ2V0LCBrZXksIG9sZERpY3QpO1xuXHRcdGlmIChfdjEyLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgb2xkVmFsdWUgPSBfdjEyLmE7XG5cdFx0XHRyZXR1cm4gQTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2VIZWxwLCBvbGRWYWx1ZSwgdmFsdWUpO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2VIZWxwID0gRjIoXG5cdGZ1bmN0aW9uIChvbGQsIF9uZXcpIHtcblx0XHR2YXIgX3YzID0gX1V0aWxzX1R1cGxlMihvbGQsIF9uZXcpO1xuXHRcdF92MyQ2OlxuXHRcdHdoaWxlICh0cnVlKSB7XG5cdFx0XHRzd2l0Y2ggKF92My5iLiQpIHtcblx0XHRcdFx0Y2FzZSAnUyc6XG5cdFx0XHRcdFx0cmV0dXJuIF9uZXc7XG5cdFx0XHRcdGNhc2UgJ1ByaW1pdGl2ZSc6XG5cdFx0XHRcdFx0cmV0dXJuIF9uZXc7XG5cdFx0XHRcdGNhc2UgJ1NlcXVlbmNlJzpcblx0XHRcdFx0XHRpZiAoX3YzLmEuJCA9PT0gJ1NlcXVlbmNlJykge1xuXHRcdFx0XHRcdFx0dmFyIF92NCA9IF92My5hO1xuXHRcdFx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gX3Y0LmI7XG5cdFx0XHRcdFx0XHR2YXIgb2xkVmFsdWVzID0gX3Y0LmM7XG5cdFx0XHRcdFx0XHR2YXIgX3Y1ID0gX3YzLmI7XG5cdFx0XHRcdFx0XHR2YXIgc2VxVHlwZSA9IF92NS5hO1xuXHRcdFx0XHRcdFx0dmFyIG5ld1ZhbHVlcyA9IF92NS5jO1xuXHRcdFx0XHRcdFx0cmV0dXJuIEEzKFxuXHRcdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRTZXF1ZW5jZSxcblx0XHRcdFx0XHRcdFx0c2VxVHlwZSxcblx0XHRcdFx0XHRcdFx0aXNDbG9zZWQsXG5cdFx0XHRcdFx0XHRcdEEyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlTGlzdEhlbHAsIG9sZFZhbHVlcywgbmV3VmFsdWVzKSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGJyZWFrIF92MyQ2O1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0Y2FzZSAnRGljdGlvbmFyeSc6XG5cdFx0XHRcdFx0aWYgKF92My5hLiQgPT09ICdEaWN0aW9uYXJ5Jykge1xuXHRcdFx0XHRcdFx0dmFyIF92NiA9IF92My5hO1xuXHRcdFx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gX3Y2LmE7XG5cdFx0XHRcdFx0XHR2YXIgX3Y3ID0gX3YzLmI7XG5cdFx0XHRcdFx0XHR2YXIga2V5VmFsdWVQYWlycyA9IF92Ny5iO1xuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJERpY3Rpb25hcnksIGlzQ2xvc2VkLCBrZXlWYWx1ZVBhaXJzKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YnJlYWsgX3YzJDY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlICdSZWNvcmQnOlxuXHRcdFx0XHRcdGlmIChfdjMuYS4kID09PSAnUmVjb3JkJykge1xuXHRcdFx0XHRcdFx0dmFyIF92OCA9IF92My5hO1xuXHRcdFx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gX3Y4LmE7XG5cdFx0XHRcdFx0XHR2YXIgb2xkRGljdCA9IF92OC5iO1xuXHRcdFx0XHRcdFx0dmFyIF92OSA9IF92My5iO1xuXHRcdFx0XHRcdFx0dmFyIG5ld0RpY3QgPSBfdjkuYjtcblx0XHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kUmVjb3JkLFxuXHRcdFx0XHRcdFx0XHRpc0Nsb3NlZCxcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkbWFwLFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlRGljdEhlbHAob2xkRGljdCksXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGljdCkpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRicmVhayBfdjMkNjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0aWYgKF92My5hLiQgPT09ICdDb25zdHJ1Y3RvcicpIHtcblx0XHRcdFx0XHRcdHZhciBfdjEwID0gX3YzLmE7XG5cdFx0XHRcdFx0XHR2YXIgaXNDbG9zZWQgPSBfdjEwLmI7XG5cdFx0XHRcdFx0XHR2YXIgb2xkVmFsdWVzID0gX3YxMC5jO1xuXHRcdFx0XHRcdFx0dmFyIF92MTEgPSBfdjMuYjtcblx0XHRcdFx0XHRcdHZhciBtYXliZU5hbWUgPSBfdjExLmE7XG5cdFx0XHRcdFx0XHR2YXIgbmV3VmFsdWVzID0gX3YxMS5jO1xuXHRcdFx0XHRcdFx0cmV0dXJuIEEzKFxuXHRcdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3Rvcixcblx0XHRcdFx0XHRcdFx0bWF5YmVOYW1lLFxuXHRcdFx0XHRcdFx0XHRpc0Nsb3NlZCxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2VMaXN0SGVscCwgb2xkVmFsdWVzLCBuZXdWYWx1ZXMpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0YnJlYWsgX3YzJDY7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gX25ldztcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2VMaXN0SGVscCA9IEYyKFxuXHRmdW5jdGlvbiAob2xkcywgbmV3cykge1xuXHRcdHZhciBfdjAgPSBfVXRpbHNfVHVwbGUyKG9sZHMsIG5ld3MpO1xuXHRcdGlmICghX3YwLmEuYikge1xuXHRcdFx0cmV0dXJuIG5ld3M7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGlmICghX3YwLmIuYikge1xuXHRcdFx0XHRyZXR1cm4gbmV3cztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBfdjEgPSBfdjAuYTtcblx0XHRcdFx0dmFyIHggPSBfdjEuYTtcblx0XHRcdFx0dmFyIHhzID0gX3YxLmI7XG5cdFx0XHRcdHZhciBfdjIgPSBfdjAuYjtcblx0XHRcdFx0dmFyIHkgPSBfdjIuYTtcblx0XHRcdFx0dmFyIHlzID0gX3YyLmI7XG5cdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRcdEEyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlSGVscCwgeCwgeSksXG5cdFx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2VMaXN0SGVscCwgeHMsIHlzKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZSA9IEYyKFxuXHRmdW5jdGlvbiAodmFsdWUsIGV4cGFuZG8pIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZUhlbHAsXG5cdFx0XHRleHBhbmRvLFxuXHRcdFx0X0RlYnVnZ2VyX2luaXQodmFsdWUpKTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kanVtcFVwZGF0ZSA9IEYzKFxuXHRmdW5jdGlvbiAodXBkYXRlLCBpbmRleCwgbW9kZWwpIHtcblx0XHR2YXIgaGlzdG9yeSA9ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGNhY2hlZEhpc3RvcnkobW9kZWwpO1xuXHRcdHZhciBjdXJyZW50TXNnID0gJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZ2V0UmVjZW50TXNnKGhpc3RvcnkpO1xuXHRcdHZhciBjdXJyZW50TW9kZWwgPSAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRnZXRMYXRlc3RNb2RlbChtb2RlbC5zdGF0ZSk7XG5cdFx0dmFyIF92MCA9IEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGdldCwgdXBkYXRlLCBpbmRleCwgaGlzdG9yeSk7XG5cdFx0dmFyIGluZGV4TW9kZWwgPSBfdjAuYTtcblx0XHR2YXIgaW5kZXhNc2cgPSBfdjAuYjtcblx0XHRyZXR1cm4gX1V0aWxzX3VwZGF0ZShcblx0XHRcdG1vZGVsLFxuXHRcdFx0e1xuXHRcdFx0XHRleHBhbmRvTW9kZWw6IEEyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlLCBpbmRleE1vZGVsLCBtb2RlbC5leHBhbmRvTW9kZWwpLFxuXHRcdFx0XHRleHBhbmRvTXNnOiBBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZSwgaW5kZXhNc2csIG1vZGVsLmV4cGFuZG9Nc2cpLFxuXHRcdFx0XHRzdGF0ZTogQTUoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kUGF1c2VkLCBpbmRleCwgaW5kZXhNb2RlbCwgY3VycmVudE1vZGVsLCBjdXJyZW50TXNnLCBoaXN0b3J5KVxuXHRcdFx0fSk7XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGpzVG9FbG0gPSBBMigkZWxtJGNvcmUkQmFzaWNzJGNvbXBvc2VSLCBfSnNvbl91bndyYXAsIF9EZWJ1Z2dlcl91bnNhZmVDb2VyY2UpO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGRlY29kZXIgPSBGMihcblx0ZnVuY3Rpb24gKGluaXRpYWxNb2RlbCwgdXBkYXRlKSB7XG5cdFx0dmFyIGFkZE1lc3NhZ2UgPSBGMihcblx0XHRcdGZ1bmN0aW9uIChyYXdNc2csIF92MCkge1xuXHRcdFx0XHR2YXIgbW9kZWwgPSBfdjAuYTtcblx0XHRcdFx0dmFyIGhpc3RvcnkgPSBfdjAuYjtcblx0XHRcdFx0dmFyIG1zZyA9ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGpzVG9FbG0ocmF3TXNnKTtcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0QTIodXBkYXRlLCBtc2csIG1vZGVsKSxcblx0XHRcdFx0XHRBMygkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRhZGQsIG1zZywgbW9kZWwsIGhpc3RvcnkpKTtcblx0XHRcdH0pO1xuXHRcdHZhciB1cGRhdGVNb2RlbCA9IGZ1bmN0aW9uIChyYXdNc2dzKSB7XG5cdFx0XHRyZXR1cm4gQTMoXG5cdFx0XHRcdCRlbG0kY29yZSRMaXN0JGZvbGRsLFxuXHRcdFx0XHRhZGRNZXNzYWdlLFxuXHRcdFx0XHRfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdGluaXRpYWxNb2RlbCxcblx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRlbXB0eShpbml0aWFsTW9kZWwpKSxcblx0XHRcdFx0cmF3TXNncyk7XG5cdFx0fTtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHQkZWxtJGpzb24kSnNvbiREZWNvZGUkbWFwLFxuXHRcdFx0dXBkYXRlTW9kZWwsXG5cdFx0XHQkZWxtJGpzb24kSnNvbiREZWNvZGUkbGlzdCgkZWxtJGpzb24kSnNvbiREZWNvZGUkdmFsdWUpKTtcblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZ2V0SW5pdGlhbE1vZGVsID0gZnVuY3Rpb24gKF92MCkge1xuXHR2YXIgc25hcHNob3RzID0gX3YwLnNuYXBzaG90cztcblx0dmFyIHJlY2VudCA9IF92MC5yZWNlbnQ7XG5cdHZhciBfdjEgPSBBMigkZWxtJGNvcmUkQXJyYXkkZ2V0LCAwLCBzbmFwc2hvdHMpO1xuXHRpZiAoX3YxLiQgPT09ICdKdXN0Jykge1xuXHRcdHZhciBtb2RlbCA9IF92MS5hLm1vZGVsO1xuXHRcdHJldHVybiBtb2RlbDtcblx0fSBlbHNlIHtcblx0XHRyZXR1cm4gcmVjZW50Lm1vZGVsO1xuXHR9XG59O1xudmFyICRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSA9ICRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkYmF0Y2goX0xpc3RfTmlsKTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRsb2FkTmV3SGlzdG9yeSA9IEYzKFxuXHRmdW5jdGlvbiAocmF3SGlzdG9yeSwgdXBkYXRlLCBtb2RlbCkge1xuXHRcdHZhciBwdXJlVXNlclVwZGF0ZSA9IEYyKFxuXHRcdFx0ZnVuY3Rpb24gKG1zZywgdXNlck1vZGVsKSB7XG5cdFx0XHRcdHJldHVybiBBMih1cGRhdGUsIG1zZywgdXNlck1vZGVsKS5hO1xuXHRcdFx0fSk7XG5cdFx0dmFyIGluaXRpYWxVc2VyTW9kZWwgPSAkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRnZXRJbml0aWFsTW9kZWwobW9kZWwuaGlzdG9yeSk7XG5cdFx0dmFyIGRlY29kZXIgPSBBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkSGlzdG9yeSRkZWNvZGVyLCBpbml0aWFsVXNlck1vZGVsLCBwdXJlVXNlclVwZGF0ZSk7XG5cdFx0dmFyIF92MCA9IEEyKCRlbG0kanNvbiRKc29uJERlY29kZSRkZWNvZGVWYWx1ZSwgZGVjb2RlciwgcmF3SGlzdG9yeSk7XG5cdFx0aWYgKF92MC4kID09PSAnRXJyJykge1xuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0e292ZXJsYXk6ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGNvcnJ1cHRJbXBvcnR9KSxcblx0XHRcdFx0JGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF92MSA9IF92MC5hO1xuXHRcdFx0dmFyIGxhdGVzdFVzZXJNb2RlbCA9IF92MS5hO1xuXHRcdFx0dmFyIG5ld0hpc3RvcnkgPSBfdjEuYjtcblx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdGV4cGFuZG9Nb2RlbDogJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdChsYXRlc3RVc2VyTW9kZWwpLFxuXHRcdFx0XHRcdFx0ZXhwYW5kb01zZzogJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kaW5pdChcblx0XHRcdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEhpc3RvcnkkZ2V0UmVjZW50TXNnKG5ld0hpc3RvcnkpKSxcblx0XHRcdFx0XHRcdGhpc3Rvcnk6IG5ld0hpc3RvcnksXG5cdFx0XHRcdFx0XHRvdmVybGF5OiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRub25lLFxuXHRcdFx0XHRcdFx0c3RhdGU6ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFJ1bm5pbmcobGF0ZXN0VXNlck1vZGVsKVxuXHRcdFx0XHRcdH0pLFxuXHRcdFx0XHQkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kc2Nyb2xsID0gZnVuY3Rpb24gKHBvcG91dCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0JGVsbSRjb3JlJFRhc2skcGVyZm9ybSxcblx0XHQkZWxtJGNvcmUkQmFzaWNzJGFsd2F5cygkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiROb09wKSxcblx0XHRfRGVidWdnZXJfc2Nyb2xsKHBvcG91dCkpO1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRzY3JvbGxUbyA9IEYyKFxuXHRmdW5jdGlvbiAoaWQsIHBvcG91dCkge1xuXHRcdHJldHVybiBBMihcblx0XHRcdCRlbG0kY29yZSRUYXNrJHBlcmZvcm0sXG5cdFx0XHQkZWxtJGNvcmUkQmFzaWNzJGFsd2F5cygkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiROb09wKSxcblx0XHRcdEEyKF9EZWJ1Z2dlcl9zY3JvbGxUbywgaWQsIHBvcG91dCkpO1xuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRzZXREcmFnU3RhdHVzID0gRjIoXG5cdGZ1bmN0aW9uIChzdGF0dXMsIGxheW91dCkge1xuXHRcdGlmIChsYXlvdXQuJCA9PT0gJ0hvcml6b250YWwnKSB7XG5cdFx0XHR2YXIgeCA9IGxheW91dC5iO1xuXHRcdFx0dmFyIHkgPSBsYXlvdXQuYztcblx0XHRcdHJldHVybiBBMygkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRIb3Jpem9udGFsLCBzdGF0dXMsIHgsIHkpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgeCA9IGxheW91dC5iO1xuXHRcdFx0dmFyIHkgPSBsYXlvdXQuYztcblx0XHRcdHJldHVybiBBMygkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRWZXJ0aWNhbCwgc3RhdHVzLCB4LCB5KTtcblx0XHR9XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHN3YXBMYXlvdXQgPSBmdW5jdGlvbiAobGF5b3V0KSB7XG5cdGlmIChsYXlvdXQuJCA9PT0gJ0hvcml6b250YWwnKSB7XG5cdFx0dmFyIHMgPSBsYXlvdXQuYTtcblx0XHR2YXIgeCA9IGxheW91dC5iO1xuXHRcdHZhciB5ID0gbGF5b3V0LmM7XG5cdFx0cmV0dXJuIEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFZlcnRpY2FsLCBzLCB4LCB5KTtcblx0fSBlbHNlIHtcblx0XHR2YXIgcyA9IGxheW91dC5hO1xuXHRcdHZhciB4ID0gbGF5b3V0LmI7XG5cdFx0dmFyIHkgPSBsYXlvdXQuYztcblx0XHRyZXR1cm4gQTMoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kSG9yaXpvbnRhbCwgcywgeCwgeSk7XG5cdH1cbn07XG52YXIgJGVsbSRjb3JlJERpY3QkZ2V0TWluID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0Z2V0TWluOlxuXHR3aGlsZSAodHJ1ZSkge1xuXHRcdGlmICgoZGljdC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGRpY3QuZC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpIHtcblx0XHRcdHZhciBsZWZ0ID0gZGljdC5kO1xuXHRcdFx0dmFyICR0ZW1wJGRpY3QgPSBsZWZ0O1xuXHRcdFx0ZGljdCA9ICR0ZW1wJGRpY3Q7XG5cdFx0XHRjb250aW51ZSBnZXRNaW47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBkaWN0O1xuXHRcdH1cblx0fVxufTtcbnZhciAkZWxtJGNvcmUkRGljdCRtb3ZlUmVkTGVmdCA9IGZ1bmN0aW9uIChkaWN0KSB7XG5cdGlmICgoKGRpY3QuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChkaWN0LmQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpKSAmJiAoZGljdC5lLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSkge1xuXHRcdGlmICgoZGljdC5lLmQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChkaWN0LmUuZC5hLiQgPT09ICdSZWQnKSkge1xuXHRcdFx0dmFyIGNsciA9IGRpY3QuYTtcblx0XHRcdHZhciBrID0gZGljdC5iO1xuXHRcdFx0dmFyIHYgPSBkaWN0LmM7XG5cdFx0XHR2YXIgX3YxID0gZGljdC5kO1xuXHRcdFx0dmFyIGxDbHIgPSBfdjEuYTtcblx0XHRcdHZhciBsSyA9IF92MS5iO1xuXHRcdFx0dmFyIGxWID0gX3YxLmM7XG5cdFx0XHR2YXIgbExlZnQgPSBfdjEuZDtcblx0XHRcdHZhciBsUmlnaHQgPSBfdjEuZTtcblx0XHRcdHZhciBfdjIgPSBkaWN0LmU7XG5cdFx0XHR2YXIgckNsciA9IF92Mi5hO1xuXHRcdFx0dmFyIHJLID0gX3YyLmI7XG5cdFx0XHR2YXIgclYgPSBfdjIuYztcblx0XHRcdHZhciByTGVmdCA9IF92Mi5kO1xuXHRcdFx0dmFyIF92MyA9IHJMZWZ0LmE7XG5cdFx0XHR2YXIgcmxLID0gckxlZnQuYjtcblx0XHRcdHZhciBybFYgPSByTGVmdC5jO1xuXHRcdFx0dmFyIHJsTCA9IHJMZWZ0LmQ7XG5cdFx0XHR2YXIgcmxSID0gckxlZnQuZTtcblx0XHRcdHZhciByUmlnaHQgPSBfdjIuZTtcblx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0JGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHQkZWxtJGNvcmUkRGljdCRSZWQsXG5cdFx0XHRcdHJsSyxcblx0XHRcdFx0cmxWLFxuXHRcdFx0XHRBNShcblx0XHRcdFx0XHQkZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkQmxhY2ssXG5cdFx0XHRcdFx0ayxcblx0XHRcdFx0XHR2LFxuXHRcdFx0XHRcdEE1KCRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgJGVsbSRjb3JlJERpY3QkUmVkLCBsSywgbFYsIGxMZWZ0LCBsUmlnaHQpLFxuXHRcdFx0XHRcdHJsTCksXG5cdFx0XHRcdEE1KCRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgJGVsbSRjb3JlJERpY3QkQmxhY2ssIHJLLCByViwgcmxSLCByUmlnaHQpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGNsciA9IGRpY3QuYTtcblx0XHRcdHZhciBrID0gZGljdC5iO1xuXHRcdFx0dmFyIHYgPSBkaWN0LmM7XG5cdFx0XHR2YXIgX3Y0ID0gZGljdC5kO1xuXHRcdFx0dmFyIGxDbHIgPSBfdjQuYTtcblx0XHRcdHZhciBsSyA9IF92NC5iO1xuXHRcdFx0dmFyIGxWID0gX3Y0LmM7XG5cdFx0XHR2YXIgbExlZnQgPSBfdjQuZDtcblx0XHRcdHZhciBsUmlnaHQgPSBfdjQuZTtcblx0XHRcdHZhciBfdjUgPSBkaWN0LmU7XG5cdFx0XHR2YXIgckNsciA9IF92NS5hO1xuXHRcdFx0dmFyIHJLID0gX3Y1LmI7XG5cdFx0XHR2YXIgclYgPSBfdjUuYztcblx0XHRcdHZhciByTGVmdCA9IF92NS5kO1xuXHRcdFx0dmFyIHJSaWdodCA9IF92NS5lO1xuXHRcdFx0aWYgKGNsci4kID09PSAnQmxhY2snKSB7XG5cdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHQkZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkQmxhY2ssXG5cdFx0XHRcdFx0ayxcblx0XHRcdFx0XHR2LFxuXHRcdFx0XHRcdEE1KCRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgJGVsbSRjb3JlJERpY3QkUmVkLCBsSywgbFYsIGxMZWZ0LCBsUmlnaHQpLFxuXHRcdFx0XHRcdEE1KCRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgJGVsbSRjb3JlJERpY3QkUmVkLCBySywgclYsIHJMZWZ0LCByUmlnaHQpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHQkZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkQmxhY2ssXG5cdFx0XHRcdFx0ayxcblx0XHRcdFx0XHR2LFxuXHRcdFx0XHRcdEE1KCRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgJGVsbSRjb3JlJERpY3QkUmVkLCBsSywgbFYsIGxMZWZ0LCBsUmlnaHQpLFxuXHRcdFx0XHRcdEE1KCRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgJGVsbSRjb3JlJERpY3QkUmVkLCBySywgclYsIHJMZWZ0LCByUmlnaHQpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSB7XG5cdFx0cmV0dXJuIGRpY3Q7XG5cdH1cbn07XG52YXIgJGVsbSRjb3JlJERpY3QkbW92ZVJlZFJpZ2h0ID0gZnVuY3Rpb24gKGRpY3QpIHtcblx0aWYgKCgoZGljdC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGRpY3QuZC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpICYmIChkaWN0LmUuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpKSB7XG5cdFx0aWYgKChkaWN0LmQuZC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGRpY3QuZC5kLmEuJCA9PT0gJ1JlZCcpKSB7XG5cdFx0XHR2YXIgY2xyID0gZGljdC5hO1xuXHRcdFx0dmFyIGsgPSBkaWN0LmI7XG5cdFx0XHR2YXIgdiA9IGRpY3QuYztcblx0XHRcdHZhciBfdjEgPSBkaWN0LmQ7XG5cdFx0XHR2YXIgbENsciA9IF92MS5hO1xuXHRcdFx0dmFyIGxLID0gX3YxLmI7XG5cdFx0XHR2YXIgbFYgPSBfdjEuYztcblx0XHRcdHZhciBfdjIgPSBfdjEuZDtcblx0XHRcdHZhciBfdjMgPSBfdjIuYTtcblx0XHRcdHZhciBsbEsgPSBfdjIuYjtcblx0XHRcdHZhciBsbFYgPSBfdjIuYztcblx0XHRcdHZhciBsbExlZnQgPSBfdjIuZDtcblx0XHRcdHZhciBsbFJpZ2h0ID0gX3YyLmU7XG5cdFx0XHR2YXIgbFJpZ2h0ID0gX3YxLmU7XG5cdFx0XHR2YXIgX3Y0ID0gZGljdC5lO1xuXHRcdFx0dmFyIHJDbHIgPSBfdjQuYTtcblx0XHRcdHZhciBySyA9IF92NC5iO1xuXHRcdFx0dmFyIHJWID0gX3Y0LmM7XG5cdFx0XHR2YXIgckxlZnQgPSBfdjQuZDtcblx0XHRcdHZhciByUmlnaHQgPSBfdjQuZTtcblx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0JGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHQkZWxtJGNvcmUkRGljdCRSZWQsXG5cdFx0XHRcdGxLLFxuXHRcdFx0XHRsVixcblx0XHRcdFx0QTUoJGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCAkZWxtJGNvcmUkRGljdCRCbGFjaywgbGxLLCBsbFYsIGxsTGVmdCwgbGxSaWdodCksXG5cdFx0XHRcdEE1KFxuXHRcdFx0XHRcdCRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbixcblx0XHRcdFx0XHQkZWxtJGNvcmUkRGljdCRCbGFjayxcblx0XHRcdFx0XHRrLFxuXHRcdFx0XHRcdHYsXG5cdFx0XHRcdFx0bFJpZ2h0LFxuXHRcdFx0XHRcdEE1KCRlbG0kY29yZSREaWN0JFJCTm9kZV9lbG1fYnVpbHRpbiwgJGVsbSRjb3JlJERpY3QkUmVkLCBySywgclYsIHJMZWZ0LCByUmlnaHQpKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjbHIgPSBkaWN0LmE7XG5cdFx0XHR2YXIgayA9IGRpY3QuYjtcblx0XHRcdHZhciB2ID0gZGljdC5jO1xuXHRcdFx0dmFyIF92NSA9IGRpY3QuZDtcblx0XHRcdHZhciBsQ2xyID0gX3Y1LmE7XG5cdFx0XHR2YXIgbEsgPSBfdjUuYjtcblx0XHRcdHZhciBsViA9IF92NS5jO1xuXHRcdFx0dmFyIGxMZWZ0ID0gX3Y1LmQ7XG5cdFx0XHR2YXIgbFJpZ2h0ID0gX3Y1LmU7XG5cdFx0XHR2YXIgX3Y2ID0gZGljdC5lO1xuXHRcdFx0dmFyIHJDbHIgPSBfdjYuYTtcblx0XHRcdHZhciBySyA9IF92Ni5iO1xuXHRcdFx0dmFyIHJWID0gX3Y2LmM7XG5cdFx0XHR2YXIgckxlZnQgPSBfdjYuZDtcblx0XHRcdHZhciByUmlnaHQgPSBfdjYuZTtcblx0XHRcdGlmIChjbHIuJCA9PT0gJ0JsYWNrJykge1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdCRlbG0kY29yZSREaWN0JEJsYWNrLFxuXHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0dixcblx0XHRcdFx0XHRBNSgkZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sICRlbG0kY29yZSREaWN0JFJlZCwgbEssIGxWLCBsTGVmdCwgbFJpZ2h0KSxcblx0XHRcdFx0XHRBNSgkZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sICRlbG0kY29yZSREaWN0JFJlZCwgckssIHJWLCByTGVmdCwgclJpZ2h0KSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdCRlbG0kY29yZSREaWN0JEJsYWNrLFxuXHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0dixcblx0XHRcdFx0XHRBNSgkZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sICRlbG0kY29yZSREaWN0JFJlZCwgbEssIGxWLCBsTGVmdCwgbFJpZ2h0KSxcblx0XHRcdFx0XHRBNSgkZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sICRlbG0kY29yZSREaWN0JFJlZCwgckssIHJWLCByTGVmdCwgclJpZ2h0KSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiBkaWN0O1xuXHR9XG59O1xudmFyICRlbG0kY29yZSREaWN0JHJlbW92ZUhlbHBQcmVwRVFHVCA9IEY3KFxuXHRmdW5jdGlvbiAodGFyZ2V0S2V5LCBkaWN0LCBjb2xvciwga2V5LCB2YWx1ZSwgbGVmdCwgcmlnaHQpIHtcblx0XHRpZiAoKGxlZnQuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpICYmIChsZWZ0LmEuJCA9PT0gJ1JlZCcpKSB7XG5cdFx0XHR2YXIgX3YxID0gbGVmdC5hO1xuXHRcdFx0dmFyIGxLID0gbGVmdC5iO1xuXHRcdFx0dmFyIGxWID0gbGVmdC5jO1xuXHRcdFx0dmFyIGxMZWZ0ID0gbGVmdC5kO1xuXHRcdFx0dmFyIGxSaWdodCA9IGxlZnQuZTtcblx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0JGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRjb2xvcixcblx0XHRcdFx0bEssXG5cdFx0XHRcdGxWLFxuXHRcdFx0XHRsTGVmdCxcblx0XHRcdFx0QTUoJGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLCAkZWxtJGNvcmUkRGljdCRSZWQsIGtleSwgdmFsdWUsIGxSaWdodCwgcmlnaHQpKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0X3YyJDI6XG5cdFx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0XHRpZiAoKHJpZ2h0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAocmlnaHQuYS4kID09PSAnQmxhY2snKSkge1xuXHRcdFx0XHRcdGlmIChyaWdodC5kLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdFx0XHRpZiAocmlnaHQuZC5hLiQgPT09ICdCbGFjaycpIHtcblx0XHRcdFx0XHRcdFx0dmFyIF92MyA9IHJpZ2h0LmE7XG5cdFx0XHRcdFx0XHRcdHZhciBfdjQgPSByaWdodC5kO1xuXHRcdFx0XHRcdFx0XHR2YXIgX3Y1ID0gX3Y0LmE7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkRGljdCRtb3ZlUmVkUmlnaHQoZGljdCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRicmVhayBfdjIkMjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIF92NiA9IHJpZ2h0LmE7XG5cdFx0XHRcdFx0XHR2YXIgX3Y3ID0gcmlnaHQuZDtcblx0XHRcdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkRGljdCRtb3ZlUmVkUmlnaHQoZGljdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGJyZWFrIF92MiQyO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZGljdDtcblx0XHR9XG5cdH0pO1xudmFyICRlbG0kY29yZSREaWN0JHJlbW92ZU1pbiA9IGZ1bmN0aW9uIChkaWN0KSB7XG5cdGlmICgoZGljdC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGRpY3QuZC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykpIHtcblx0XHR2YXIgY29sb3IgPSBkaWN0LmE7XG5cdFx0dmFyIGtleSA9IGRpY3QuYjtcblx0XHR2YXIgdmFsdWUgPSBkaWN0LmM7XG5cdFx0dmFyIGxlZnQgPSBkaWN0LmQ7XG5cdFx0dmFyIGxDb2xvciA9IGxlZnQuYTtcblx0XHR2YXIgbExlZnQgPSBsZWZ0LmQ7XG5cdFx0dmFyIHJpZ2h0ID0gZGljdC5lO1xuXHRcdGlmIChsQ29sb3IuJCA9PT0gJ0JsYWNrJykge1xuXHRcdFx0aWYgKChsTGVmdC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGxMZWZ0LmEuJCA9PT0gJ1JlZCcpKSB7XG5cdFx0XHRcdHZhciBfdjMgPSBsTGVmdC5hO1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdGNvbG9yLFxuXHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHQkZWxtJGNvcmUkRGljdCRyZW1vdmVNaW4obGVmdCksXG5cdFx0XHRcdFx0cmlnaHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIF92NCA9ICRlbG0kY29yZSREaWN0JG1vdmVSZWRMZWZ0KGRpY3QpO1xuXHRcdFx0XHRpZiAoX3Y0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdFx0dmFyIG5Db2xvciA9IF92NC5hO1xuXHRcdFx0XHRcdHZhciBuS2V5ID0gX3Y0LmI7XG5cdFx0XHRcdFx0dmFyIG5WYWx1ZSA9IF92NC5jO1xuXHRcdFx0XHRcdHZhciBuTGVmdCA9IF92NC5kO1xuXHRcdFx0XHRcdHZhciBuUmlnaHQgPSBfdjQuZTtcblx0XHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkRGljdCRiYWxhbmNlLFxuXHRcdFx0XHRcdFx0bkNvbG9yLFxuXHRcdFx0XHRcdFx0bktleSxcblx0XHRcdFx0XHRcdG5WYWx1ZSxcblx0XHRcdFx0XHRcdCRlbG0kY29yZSREaWN0JHJlbW92ZU1pbihuTGVmdCksXG5cdFx0XHRcdFx0XHRuUmlnaHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0JGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRjb2xvcixcblx0XHRcdFx0a2V5LFxuXHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0JGVsbSRjb3JlJERpY3QkcmVtb3ZlTWluKGxlZnQpLFxuXHRcdFx0XHRyaWdodCk7XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdHJldHVybiAkZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluO1xuXHR9XG59O1xudmFyICRlbG0kY29yZSREaWN0JHJlbW92ZUhlbHAgPSBGMihcblx0ZnVuY3Rpb24gKHRhcmdldEtleSwgZGljdCkge1xuXHRcdGlmIChkaWN0LiQgPT09ICdSQkVtcHR5X2VsbV9idWlsdGluJykge1xuXHRcdFx0cmV0dXJuICRlbG0kY29yZSREaWN0JFJCRW1wdHlfZWxtX2J1aWx0aW47XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBjb2xvciA9IGRpY3QuYTtcblx0XHRcdHZhciBrZXkgPSBkaWN0LmI7XG5cdFx0XHR2YXIgdmFsdWUgPSBkaWN0LmM7XG5cdFx0XHR2YXIgbGVmdCA9IGRpY3QuZDtcblx0XHRcdHZhciByaWdodCA9IGRpY3QuZTtcblx0XHRcdGlmIChfVXRpbHNfY21wKHRhcmdldEtleSwga2V5KSA8IDApIHtcblx0XHRcdFx0aWYgKChsZWZ0LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSAmJiAobGVmdC5hLiQgPT09ICdCbGFjaycpKSB7XG5cdFx0XHRcdFx0dmFyIF92NCA9IGxlZnQuYTtcblx0XHRcdFx0XHR2YXIgbExlZnQgPSBsZWZ0LmQ7XG5cdFx0XHRcdFx0aWYgKChsTGVmdC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKGxMZWZ0LmEuJCA9PT0gJ1JlZCcpKSB7XG5cdFx0XHRcdFx0XHR2YXIgX3Y2ID0gbExlZnQuYTtcblx0XHRcdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkUkJOb2RlX2VsbV9idWlsdGluLFxuXHRcdFx0XHRcdFx0XHRjb2xvcixcblx0XHRcdFx0XHRcdFx0a2V5LFxuXHRcdFx0XHRcdFx0XHR2YWx1ZSxcblx0XHRcdFx0XHRcdFx0QTIoJGVsbSRjb3JlJERpY3QkcmVtb3ZlSGVscCwgdGFyZ2V0S2V5LCBsZWZ0KSxcblx0XHRcdFx0XHRcdFx0cmlnaHQpO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgX3Y3ID0gJGVsbSRjb3JlJERpY3QkbW92ZVJlZExlZnQoZGljdCk7XG5cdFx0XHRcdFx0XHRpZiAoX3Y3LiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBuQ29sb3IgPSBfdjcuYTtcblx0XHRcdFx0XHRcdFx0dmFyIG5LZXkgPSBfdjcuYjtcblx0XHRcdFx0XHRcdFx0dmFyIG5WYWx1ZSA9IF92Ny5jO1xuXHRcdFx0XHRcdFx0XHR2YXIgbkxlZnQgPSBfdjcuZDtcblx0XHRcdFx0XHRcdFx0dmFyIG5SaWdodCA9IF92Ny5lO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkYmFsYW5jZSxcblx0XHRcdFx0XHRcdFx0XHRuQ29sb3IsXG5cdFx0XHRcdFx0XHRcdFx0bktleSxcblx0XHRcdFx0XHRcdFx0XHRuVmFsdWUsXG5cdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRjb3JlJERpY3QkcmVtb3ZlSGVscCwgdGFyZ2V0S2V5LCBuTGVmdCksXG5cdFx0XHRcdFx0XHRcdFx0blJpZ2h0KTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sXG5cdFx0XHRcdFx0XHRjb2xvcixcblx0XHRcdFx0XHRcdGtleSxcblx0XHRcdFx0XHRcdHZhbHVlLFxuXHRcdFx0XHRcdFx0QTIoJGVsbSRjb3JlJERpY3QkcmVtb3ZlSGVscCwgdGFyZ2V0S2V5LCBsZWZ0KSxcblx0XHRcdFx0XHRcdHJpZ2h0KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdCRlbG0kY29yZSREaWN0JHJlbW92ZUhlbHBFUUdULFxuXHRcdFx0XHRcdHRhcmdldEtleSxcblx0XHRcdFx0XHRBNygkZWxtJGNvcmUkRGljdCRyZW1vdmVIZWxwUHJlcEVRR1QsIHRhcmdldEtleSwgZGljdCwgY29sb3IsIGtleSwgdmFsdWUsIGxlZnQsIHJpZ2h0KSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGNvcmUkRGljdCRyZW1vdmVIZWxwRVFHVCA9IEYyKFxuXHRmdW5jdGlvbiAodGFyZ2V0S2V5LCBkaWN0KSB7XG5cdFx0aWYgKGRpY3QuJCA9PT0gJ1JCTm9kZV9lbG1fYnVpbHRpbicpIHtcblx0XHRcdHZhciBjb2xvciA9IGRpY3QuYTtcblx0XHRcdHZhciBrZXkgPSBkaWN0LmI7XG5cdFx0XHR2YXIgdmFsdWUgPSBkaWN0LmM7XG5cdFx0XHR2YXIgbGVmdCA9IGRpY3QuZDtcblx0XHRcdHZhciByaWdodCA9IGRpY3QuZTtcblx0XHRcdGlmIChfVXRpbHNfZXEodGFyZ2V0S2V5LCBrZXkpKSB7XG5cdFx0XHRcdHZhciBfdjEgPSAkZWxtJGNvcmUkRGljdCRnZXRNaW4ocmlnaHQpO1xuXHRcdFx0XHRpZiAoX3YxLiQgPT09ICdSQk5vZGVfZWxtX2J1aWx0aW4nKSB7XG5cdFx0XHRcdFx0dmFyIG1pbktleSA9IF92MS5iO1xuXHRcdFx0XHRcdHZhciBtaW5WYWx1ZSA9IF92MS5jO1xuXHRcdFx0XHRcdHJldHVybiBBNShcblx0XHRcdFx0XHRcdCRlbG0kY29yZSREaWN0JGJhbGFuY2UsXG5cdFx0XHRcdFx0XHRjb2xvcixcblx0XHRcdFx0XHRcdG1pbktleSxcblx0XHRcdFx0XHRcdG1pblZhbHVlLFxuXHRcdFx0XHRcdFx0bGVmdCxcblx0XHRcdFx0XHRcdCRlbG0kY29yZSREaWN0JHJlbW92ZU1pbihyaWdodCkpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJERpY3QkYmFsYW5jZSxcblx0XHRcdFx0XHRjb2xvcixcblx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0dmFsdWUsXG5cdFx0XHRcdFx0bGVmdCxcblx0XHRcdFx0XHRBMigkZWxtJGNvcmUkRGljdCRyZW1vdmVIZWxwLCB0YXJnZXRLZXksIHJpZ2h0KSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiAkZWxtJGNvcmUkRGljdCRSQkVtcHR5X2VsbV9idWlsdGluO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJERpY3QkcmVtb3ZlID0gRjIoXG5cdGZ1bmN0aW9uIChrZXksIGRpY3QpIHtcblx0XHR2YXIgX3YwID0gQTIoJGVsbSRjb3JlJERpY3QkcmVtb3ZlSGVscCwga2V5LCBkaWN0KTtcblx0XHRpZiAoKF92MC4kID09PSAnUkJOb2RlX2VsbV9idWlsdGluJykgJiYgKF92MC5hLiQgPT09ICdSZWQnKSkge1xuXHRcdFx0dmFyIF92MSA9IF92MC5hO1xuXHRcdFx0dmFyIGsgPSBfdjAuYjtcblx0XHRcdHZhciB2ID0gX3YwLmM7XG5cdFx0XHR2YXIgbCA9IF92MC5kO1xuXHRcdFx0dmFyIHIgPSBfdjAuZTtcblx0XHRcdHJldHVybiBBNSgkZWxtJGNvcmUkRGljdCRSQk5vZGVfZWxtX2J1aWx0aW4sICRlbG0kY29yZSREaWN0JEJsYWNrLCBrLCB2LCBsLCByKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHggPSBfdjA7XG5cdFx0XHRyZXR1cm4geDtcblx0XHR9XG5cdH0pO1xudmFyICRlbG0kY29yZSREaWN0JHVwZGF0ZSA9IEYzKFxuXHRmdW5jdGlvbiAodGFyZ2V0S2V5LCBhbHRlciwgZGljdGlvbmFyeSkge1xuXHRcdHZhciBfdjAgPSBhbHRlcihcblx0XHRcdEEyKCRlbG0kY29yZSREaWN0JGdldCwgdGFyZ2V0S2V5LCBkaWN0aW9uYXJ5KSk7XG5cdFx0aWYgKF92MC4kID09PSAnSnVzdCcpIHtcblx0XHRcdHZhciB2YWx1ZSA9IF92MC5hO1xuXHRcdFx0cmV0dXJuIEEzKCRlbG0kY29yZSREaWN0JGluc2VydCwgdGFyZ2V0S2V5LCB2YWx1ZSwgZGljdGlvbmFyeSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBBMigkZWxtJGNvcmUkRGljdCRyZW1vdmUsIHRhcmdldEtleSwgZGljdGlvbmFyeSk7XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGVJbmRleCA9IEYzKFxuXHRmdW5jdGlvbiAobiwgZnVuYywgbGlzdCkge1xuXHRcdGlmICghbGlzdC5iKSB7XG5cdFx0XHRyZXR1cm4gX0xpc3RfTmlsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgeCA9IGxpc3QuYTtcblx0XHRcdHZhciB4cyA9IGxpc3QuYjtcblx0XHRcdHJldHVybiAobiA8PSAwKSA/IEEyKFxuXHRcdFx0XHQkZWxtJGNvcmUkTGlzdCRjb25zLFxuXHRcdFx0XHRmdW5jKHgpLFxuXHRcdFx0XHR4cykgOiBBMihcblx0XHRcdFx0JGVsbSRjb3JlJExpc3QkY29ucyxcblx0XHRcdFx0eCxcblx0XHRcdFx0QTMoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdXBkYXRlSW5kZXgsIG4gLSAxLCBmdW5jLCB4cykpO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdXBkYXRlID0gRjIoXG5cdGZ1bmN0aW9uIChtc2csIHZhbHVlKSB7XG5cdFx0c3dpdGNoICh2YWx1ZS4kKSB7XG5cdFx0XHRjYXNlICdTJzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0Y2FzZSAnUHJpbWl0aXZlJzpcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0Y2FzZSAnU2VxdWVuY2UnOlxuXHRcdFx0XHR2YXIgc2VxVHlwZSA9IHZhbHVlLmE7XG5cdFx0XHRcdHZhciBpc0Nsb3NlZCA9IHZhbHVlLmI7XG5cdFx0XHRcdHZhciB2YWx1ZUxpc3QgPSB2YWx1ZS5jO1xuXHRcdFx0XHRzd2l0Y2ggKG1zZy4kKSB7XG5cdFx0XHRcdFx0Y2FzZSAnVG9nZ2xlJzpcblx0XHRcdFx0XHRcdHJldHVybiBBMygkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRTZXF1ZW5jZSwgc2VxVHlwZSwgIWlzQ2xvc2VkLCB2YWx1ZUxpc3QpO1xuXHRcdFx0XHRcdGNhc2UgJ0luZGV4Jzpcblx0XHRcdFx0XHRcdGlmIChtc2cuYS4kID09PSAnTm9uZScpIHtcblx0XHRcdFx0XHRcdFx0dmFyIF92MyA9IG1zZy5hO1xuXHRcdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBtc2cuYjtcblx0XHRcdFx0XHRcdFx0dmFyIHN1Yk1zZyA9IG1zZy5jO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gQTMoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kU2VxdWVuY2UsXG5cdFx0XHRcdFx0XHRcdFx0c2VxVHlwZSxcblx0XHRcdFx0XHRcdFx0XHRpc0Nsb3NlZCxcblx0XHRcdFx0XHRcdFx0XHRBMyhcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZUluZGV4LFxuXHRcdFx0XHRcdFx0XHRcdFx0aW5kZXgsXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGUoc3ViTXNnKSxcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlTGlzdCkpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdH1cblx0XHRcdGNhc2UgJ0RpY3Rpb25hcnknOlxuXHRcdFx0XHR2YXIgaXNDbG9zZWQgPSB2YWx1ZS5hO1xuXHRcdFx0XHR2YXIga2V5VmFsdWVQYWlycyA9IHZhbHVlLmI7XG5cdFx0XHRcdHN3aXRjaCAobXNnLiQpIHtcblx0XHRcdFx0XHRjYXNlICdUb2dnbGUnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJERpY3Rpb25hcnksICFpc0Nsb3NlZCwga2V5VmFsdWVQYWlycyk7XG5cdFx0XHRcdFx0Y2FzZSAnSW5kZXgnOlxuXHRcdFx0XHRcdFx0dmFyIHJlZGlyZWN0ID0gbXNnLmE7XG5cdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBtc2cuYjtcblx0XHRcdFx0XHRcdHZhciBzdWJNc2cgPSBtc2cuYztcblx0XHRcdFx0XHRcdHN3aXRjaCAocmVkaXJlY3QuJCkge1xuXHRcdFx0XHRcdFx0XHRjYXNlICdOb25lJzpcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ0tleSc6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kRGljdGlvbmFyeSxcblx0XHRcdFx0XHRcdFx0XHRcdGlzQ2xvc2VkLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZUluZGV4LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKF92Nikge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBrID0gX3Y2LmE7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIHYgPSBfdjYuYjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZSwgc3ViTXNnLCBrKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHYpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXlWYWx1ZVBhaXJzKSk7XG5cdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kRGljdGlvbmFyeSxcblx0XHRcdFx0XHRcdFx0XHRcdGlzQ2xvc2VkLFxuXHRcdFx0XHRcdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZUluZGV4LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpbmRleCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZnVuY3Rpb24gKF92Nykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHZhciBrID0gX3Y3LmE7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dmFyIHYgPSBfdjcuYjtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGssXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGUsIHN1Yk1zZywgdikpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRrZXlWYWx1ZVBhaXJzKSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0Y2FzZSAnUmVjb3JkJzpcblx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gdmFsdWUuYTtcblx0XHRcdFx0dmFyIHZhbHVlRGljdCA9IHZhbHVlLmI7XG5cdFx0XHRcdHN3aXRjaCAobXNnLiQpIHtcblx0XHRcdFx0XHRjYXNlICdUb2dnbGUnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIEEyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFJlY29yZCwgIWlzQ2xvc2VkLCB2YWx1ZURpY3QpO1xuXHRcdFx0XHRcdGNhc2UgJ0luZGV4Jzpcblx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0dmFyIGZpZWxkID0gbXNnLmE7XG5cdFx0XHRcdFx0XHR2YXIgc3ViTXNnID0gbXNnLmI7XG5cdFx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJFJlY29yZCxcblx0XHRcdFx0XHRcdFx0aXNDbG9zZWQsXG5cdFx0XHRcdFx0XHRcdEEzKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kY29yZSREaWN0JHVwZGF0ZSxcblx0XHRcdFx0XHRcdFx0XHRmaWVsZCxcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGVGaWVsZChzdWJNc2cpLFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlRGljdCkpO1xuXHRcdFx0XHR9XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHR2YXIgbWF5YmVOYW1lID0gdmFsdWUuYTtcblx0XHRcdFx0dmFyIGlzQ2xvc2VkID0gdmFsdWUuYjtcblx0XHRcdFx0dmFyIHZhbHVlTGlzdCA9IHZhbHVlLmM7XG5cdFx0XHRcdHN3aXRjaCAobXNnLiQpIHtcblx0XHRcdFx0XHRjYXNlICdUb2dnbGUnOlxuXHRcdFx0XHRcdFx0cmV0dXJuIEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJENvbnN0cnVjdG9yLCBtYXliZU5hbWUsICFpc0Nsb3NlZCwgdmFsdWVMaXN0KTtcblx0XHRcdFx0XHRjYXNlICdJbmRleCc6XG5cdFx0XHRcdFx0XHRpZiAobXNnLmEuJCA9PT0gJ05vbmUnKSB7XG5cdFx0XHRcdFx0XHRcdHZhciBfdjEwID0gbXNnLmE7XG5cdFx0XHRcdFx0XHRcdHZhciBpbmRleCA9IG1zZy5iO1xuXHRcdFx0XHRcdFx0XHR2YXIgc3ViTXNnID0gbXNnLmM7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRDb25zdHJ1Y3Rvcixcblx0XHRcdFx0XHRcdFx0XHRtYXliZU5hbWUsXG5cdFx0XHRcdFx0XHRcdFx0aXNDbG9zZWQsXG5cdFx0XHRcdFx0XHRcdFx0QTMoXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGVJbmRleCxcblx0XHRcdFx0XHRcdFx0XHRcdGluZGV4LFxuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdXBkYXRlKHN1Yk1zZyksXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZUxpc3QpKTtcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGVGaWVsZCA9IEYyKFxuXHRmdW5jdGlvbiAobXNnLCBtYXliZUV4cGFuZG8pIHtcblx0XHRpZiAobWF5YmVFeHBhbmRvLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0cmV0dXJuIG1heWJlRXhwYW5kbztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGV4cGFuZG8gPSBtYXliZUV4cGFuZG8uYTtcblx0XHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kdXBkYXRlLCBtc2csIGV4cGFuZG8pKTtcblx0XHR9XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFVwbG9hZCA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ1VwbG9hZCcsIGE6IGF9O1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR1cGxvYWQgPSBmdW5jdGlvbiAocG9wb3V0KSB7XG5cdHJldHVybiBBMihcblx0XHQkZWxtJGNvcmUkVGFzayRwZXJmb3JtLFxuXHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFVwbG9hZCxcblx0XHRfRGVidWdnZXJfdXBsb2FkKHBvcG91dCkpO1xufTtcbnZhciAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRCYWRNZXRhZGF0YSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ0JhZE1ldGFkYXRhJywgYTogYX07XG59O1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGJhZE1ldGFkYXRhID0gJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkQmFkTWV0YWRhdGE7XG52YXIgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd2l0aEdvb2RNZXRhZGF0YSA9IEYyKFxuXHRmdW5jdGlvbiAobW9kZWwsIGZ1bmMpIHtcblx0XHR2YXIgX3YwID0gbW9kZWwubWV0YWRhdGE7XG5cdFx0aWYgKF92MC4kID09PSAnT2snKSB7XG5cdFx0XHR2YXIgbWV0YWRhdGEgPSBfdjAuYTtcblx0XHRcdHJldHVybiBmdW5jKG1ldGFkYXRhKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIGVycm9yID0gX3YwLmE7XG5cdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRvdmVybGF5OiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkT3ZlcmxheSRiYWRNZXRhZGF0YShlcnJvcilcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0JGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHR9XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHdyYXBVcGRhdGUgPSBGMyhcblx0ZnVuY3Rpb24gKHVwZGF0ZSwgbXNnLCBtb2RlbCkge1xuXHRcdHdyYXBVcGRhdGU6XG5cdFx0d2hpbGUgKHRydWUpIHtcblx0XHRcdHN3aXRjaCAobXNnLiQpIHtcblx0XHRcdFx0Y2FzZSAnTm9PcCc6XG5cdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsICRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRcdGNhc2UgJ1VzZXJNc2cnOlxuXHRcdFx0XHRcdHZhciB1c2VyTXNnID0gbXNnLmE7XG5cdFx0XHRcdFx0dmFyIHVzZXJNb2RlbCA9ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGdldExhdGVzdE1vZGVsKG1vZGVsLnN0YXRlKTtcblx0XHRcdFx0XHR2YXIgbmV3SGlzdG9yeSA9IEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGFkZCwgdXNlck1zZywgdXNlck1vZGVsLCBtb2RlbC5oaXN0b3J5KTtcblx0XHRcdFx0XHR2YXIgX3YxID0gQTIodXBkYXRlLCB1c2VyTXNnLCB1c2VyTW9kZWwpO1xuXHRcdFx0XHRcdHZhciBuZXdVc2VyTW9kZWwgPSBfdjEuYTtcblx0XHRcdFx0XHR2YXIgdXNlckNtZHMgPSBfdjEuYjtcblx0XHRcdFx0XHR2YXIgY29tbWFuZHMgPSBBMigkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG1hcCwgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kVXNlck1zZywgdXNlckNtZHMpO1xuXHRcdFx0XHRcdHZhciBfdjIgPSBtb2RlbC5zdGF0ZTtcblx0XHRcdFx0XHRpZiAoX3YyLiQgPT09ICdSdW5uaW5nJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXhwYW5kb01vZGVsOiBBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZSwgbmV3VXNlck1vZGVsLCBtb2RlbC5leHBhbmRvTW9kZWwpLFxuXHRcdFx0XHRcdFx0XHRcdFx0ZXhwYW5kb01zZzogQTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJEV4cGFuZG8kbWVyZ2UsIHVzZXJNc2csIG1vZGVsLmV4cGFuZG9Nc2cpLFxuXHRcdFx0XHRcdFx0XHRcdFx0aGlzdG9yeTogbmV3SGlzdG9yeSxcblx0XHRcdFx0XHRcdFx0XHRcdHN0YXRlOiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRSdW5uaW5nKG5ld1VzZXJNb2RlbClcblx0XHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFBsYXRmb3JtJENtZCRiYXRjaChcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbW1hbmRzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRzY3JvbGwobW9kZWwucG9wb3V0KVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIGluZGV4ID0gX3YyLmE7XG5cdFx0XHRcdFx0XHR2YXIgaW5kZXhNb2RlbCA9IF92Mi5iO1xuXHRcdFx0XHRcdFx0dmFyIGhpc3RvcnkgPSBfdjIuZTtcblx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdGhpc3Rvcnk6IG5ld0hpc3RvcnksXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZTogQTUoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kUGF1c2VkLCBpbmRleCwgaW5kZXhNb2RlbCwgbmV3VXNlck1vZGVsLCB1c2VyTXNnLCBoaXN0b3J5KVxuXHRcdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0XHRjb21tYW5kcyk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlICdUd2Vha0V4cGFuZG9Nc2cnOlxuXHRcdFx0XHRcdHZhciBlTXNnID0gbXNnLmE7XG5cdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGV4cGFuZG9Nc2c6IEEyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJHVwZGF0ZSwgZU1zZywgbW9kZWwuZXhwYW5kb01zZylcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdFx0XHRjYXNlICdUd2Vha0V4cGFuZG9Nb2RlbCc6XG5cdFx0XHRcdFx0dmFyIGVNc2cgPSBtc2cuYTtcblx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0ZXhwYW5kb01vZGVsOiBBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyR1cGRhdGUsIGVNc2csIG1vZGVsLmV4cGFuZG9Nb2RlbClcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdFx0XHRjYXNlICdSZXN1bWUnOlxuXHRcdFx0XHRcdHZhciBfdjMgPSBtb2RlbC5zdGF0ZTtcblx0XHRcdFx0XHRpZiAoX3YzLiQgPT09ICdSdW5uaW5nJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsICRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciB1c2VyTW9kZWwgPSBfdjMuYztcblx0XHRcdFx0XHRcdHZhciB1c2VyTXNnID0gX3YzLmQ7XG5cdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRleHBhbmRvTW9kZWw6IEEyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRFeHBhbmRvJG1lcmdlLCB1c2VyTW9kZWwsIG1vZGVsLmV4cGFuZG9Nb2RlbCksXG5cdFx0XHRcdFx0XHRcdFx0XHRleHBhbmRvTXNnOiBBMigkZWxtJGJyb3dzZXIkRGVidWdnZXIkRXhwYW5kbyRtZXJnZSwgdXNlck1zZywgbW9kZWwuZXhwYW5kb01zZyksXG5cdFx0XHRcdFx0XHRcdFx0XHRzdGF0ZTogJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kUnVubmluZyh1c2VyTW9kZWwpXG5cdFx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHNjcm9sbChtb2RlbC5wb3BvdXQpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgJ0p1bXAnOlxuXHRcdFx0XHRcdHZhciBpbmRleCA9IG1zZy5hO1xuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0QTMoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kanVtcFVwZGF0ZSwgdXBkYXRlLCBpbmRleCwgbW9kZWwpLFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRcdFx0Y2FzZSAnU2xpZGVySnVtcCc6XG5cdFx0XHRcdFx0dmFyIGluZGV4ID0gbXNnLmE7XG5cdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRBMygkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRqdW1wVXBkYXRlLCB1cGRhdGUsIGluZGV4LCBtb2RlbCksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kc2Nyb2xsVG8sXG5cdFx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JGlkRm9yTWVzc2FnZUluZGV4KGluZGV4KSxcblx0XHRcdFx0XHRcdFx0bW9kZWwucG9wb3V0KSk7XG5cdFx0XHRcdGNhc2UgJ09wZW4nOlxuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFRhc2skcGVyZm9ybSxcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJEJhc2ljcyRhbHdheXMoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kTm9PcCksXG5cdFx0XHRcdFx0XHRcdF9EZWJ1Z2dlcl9vcGVuKG1vZGVsLnBvcG91dCkpKTtcblx0XHRcdFx0Y2FzZSAnVXAnOlxuXHRcdFx0XHRcdHZhciBfdjQgPSBtb2RlbC5zdGF0ZTtcblx0XHRcdFx0XHRpZiAoX3Y0LiQgPT09ICdSdW5uaW5nJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIobW9kZWwsICRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHZhciBpID0gX3Y0LmE7XG5cdFx0XHRcdFx0XHR2YXIgaGlzdG9yeSA9IF92NC5lO1xuXHRcdFx0XHRcdFx0dmFyIHRhcmdldEluZGV4ID0gaSArIDE7XG5cdFx0XHRcdFx0XHRpZiAoX1V0aWxzX2NtcChcblx0XHRcdFx0XHRcdFx0dGFyZ2V0SW5kZXgsXG5cdFx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHNpemUoaGlzdG9yeSkpIDwgMCkge1xuXHRcdFx0XHRcdFx0XHR2YXIgJHRlbXAkdXBkYXRlID0gdXBkYXRlLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG1zZyA9ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJFNsaWRlckp1bXAodGFyZ2V0SW5kZXgpLFxuXHRcdFx0XHRcdFx0XHRcdCR0ZW1wJG1vZGVsID0gbW9kZWw7XG5cdFx0XHRcdFx0XHRcdHVwZGF0ZSA9ICR0ZW1wJHVwZGF0ZTtcblx0XHRcdFx0XHRcdFx0bXNnID0gJHRlbXAkbXNnO1xuXHRcdFx0XHRcdFx0XHRtb2RlbCA9ICR0ZW1wJG1vZGVsO1xuXHRcdFx0XHRcdFx0XHRjb250aW51ZSB3cmFwVXBkYXRlO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJHVwZGF0ZSA9IHVwZGF0ZSxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRtc2cgPSAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRSZXN1bWUsXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkbW9kZWwgPSBtb2RlbDtcblx0XHRcdFx0XHRcdFx0dXBkYXRlID0gJHRlbXAkdXBkYXRlO1xuXHRcdFx0XHRcdFx0XHRtc2cgPSAkdGVtcCRtc2c7XG5cdFx0XHRcdFx0XHRcdG1vZGVsID0gJHRlbXAkbW9kZWw7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlIHdyYXBVcGRhdGU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlICdEb3duJzpcblx0XHRcdFx0XHR2YXIgX3Y1ID0gbW9kZWwuc3RhdGU7XG5cdFx0XHRcdFx0aWYgKF92NS4kID09PSAnUnVubmluZycpIHtcblx0XHRcdFx0XHRcdHZhciAkdGVtcCR1cGRhdGUgPSB1cGRhdGUsXG5cdFx0XHRcdFx0XHRcdCR0ZW1wJG1zZyA9ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJEp1bXAoXG5cdFx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRIaXN0b3J5JHNpemUobW9kZWwuaGlzdG9yeSkgLSAxKSxcblx0XHRcdFx0XHRcdFx0JHRlbXAkbW9kZWwgPSBtb2RlbDtcblx0XHRcdFx0XHRcdHVwZGF0ZSA9ICR0ZW1wJHVwZGF0ZTtcblx0XHRcdFx0XHRcdG1zZyA9ICR0ZW1wJG1zZztcblx0XHRcdFx0XHRcdG1vZGVsID0gJHRlbXAkbW9kZWw7XG5cdFx0XHRcdFx0XHRjb250aW51ZSB3cmFwVXBkYXRlO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR2YXIgaW5kZXggPSBfdjUuYTtcblx0XHRcdFx0XHRcdGlmIChpbmRleCA+IDApIHtcblx0XHRcdFx0XHRcdFx0dmFyICR0ZW1wJHVwZGF0ZSA9IHVwZGF0ZSxcblx0XHRcdFx0XHRcdFx0XHQkdGVtcCRtc2cgPSAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRTbGlkZXJKdW1wKGluZGV4IC0gMSksXG5cdFx0XHRcdFx0XHRcdFx0JHRlbXAkbW9kZWwgPSBtb2RlbDtcblx0XHRcdFx0XHRcdFx0dXBkYXRlID0gJHRlbXAkdXBkYXRlO1xuXHRcdFx0XHRcdFx0XHRtc2cgPSAkdGVtcCRtc2c7XG5cdFx0XHRcdFx0XHRcdG1vZGVsID0gJHRlbXAkbW9kZWw7XG5cdFx0XHRcdFx0XHRcdGNvbnRpbnVlIHdyYXBVcGRhdGU7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihtb2RlbCwgJGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdGNhc2UgJ0ltcG9ydCc6XG5cdFx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdFx0JGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kd2l0aEdvb2RNZXRhZGF0YSxcblx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0ZnVuY3Rpb24gKF92Nikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR1cGxvYWQobW9kZWwucG9wb3V0KSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0Y2FzZSAnRXhwb3J0Jzpcblx0XHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiR3aXRoR29vZE1ldGFkYXRhLFxuXHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRmdW5jdGlvbiAobWV0YWRhdGEpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZG93bmxvYWQsIG1ldGFkYXRhLCBtb2RlbC5oaXN0b3J5KSk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0Y2FzZSAnVXBsb2FkJzpcblx0XHRcdFx0XHR2YXIganNvblN0cmluZyA9IG1zZy5hO1xuXHRcdFx0XHRcdHJldHVybiBBMihcblx0XHRcdFx0XHRcdCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHdpdGhHb29kTWV0YWRhdGEsXG5cdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdGZ1bmN0aW9uIChtZXRhZGF0YSkge1xuXHRcdFx0XHRcdFx0XHR2YXIgX3Y3ID0gQTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE92ZXJsYXkkYXNzZXNzSW1wb3J0LCBtZXRhZGF0YSwganNvblN0cmluZyk7XG5cdFx0XHRcdFx0XHRcdGlmIChfdjcuJCA9PT0gJ0VycicpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgbmV3T3ZlcmxheSA9IF92Ny5hO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtvdmVybGF5OiBuZXdPdmVybGF5fSksXG5cdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHZhciByYXdIaXN0b3J5ID0gX3Y3LmE7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIEEzKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJGxvYWROZXdIaXN0b3J5LCByYXdIaXN0b3J5LCB1cGRhdGUsIG1vZGVsKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdGNhc2UgJ092ZXJsYXlNc2cnOlxuXHRcdFx0XHRcdHZhciBvdmVybGF5TXNnID0gbXNnLmE7XG5cdFx0XHRcdFx0dmFyIF92OCA9IEEyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JGNsb3NlLCBvdmVybGF5TXNnLCBtb2RlbC5vdmVybGF5KTtcblx0XHRcdFx0XHRpZiAoX3Y4LiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRcdFx0e292ZXJsYXk6ICRlbG0kYnJvd3NlciREZWJ1Z2dlciRPdmVybGF5JG5vbmV9KSxcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIHJhd0hpc3RvcnkgPSBfdjguYTtcblx0XHRcdFx0XHRcdHJldHVybiBBMygkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRsb2FkTmV3SGlzdG9yeSwgcmF3SGlzdG9yeSwgdXBkYXRlLCBtb2RlbCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRjYXNlICdTd2FwTGF5b3V0Jzpcblx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0bGF5b3V0OiAkZWxtJGJyb3dzZXIkRGVidWdnZXIkTWFpbiRzd2FwTGF5b3V0KG1vZGVsLmxheW91dClcblx0XHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdFx0XHRjYXNlICdEcmFnU3RhcnQnOlxuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRsYXlvdXQ6IEEyKCRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJHNldERyYWdTdGF0dXMsICRlbG0kYnJvd3NlciREZWJ1Z2dlciRNYWluJE1vdmluZywgbW9kZWwubGF5b3V0KVxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdCRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRcdGNhc2UgJ0RyYWcnOlxuXHRcdFx0XHRcdHZhciBpbmZvID0gbXNnLmE7XG5cdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGxheW91dDogQTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kZHJhZywgaW5mbywgbW9kZWwubGF5b3V0KVxuXHRcdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdCRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSk7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0XHRfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdGxheW91dDogQTIoJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kc2V0RHJhZ1N0YXR1cywgJGVsbSRicm93c2VyJERlYnVnZ2VyJE1haW4kU3RhdGljLCBtb2RlbC5sYXlvdXQpXG5cdFx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0JGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyICRlbG0kYnJvd3NlciRCcm93c2VyJEV4dGVybmFsID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnRXh0ZXJuYWwnLCBhOiBhfTtcbn07XG52YXIgJGVsbSRicm93c2VyJEJyb3dzZXIkSW50ZXJuYWwgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdJbnRlcm5hbCcsIGE6IGF9O1xufTtcbnZhciAkZWxtJGJyb3dzZXIkQnJvd3NlciREb20kTm90Rm91bmQgPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdOb3RGb3VuZCcsIGE6IGF9O1xufTtcbnZhciAkZWxtJHVybCRVcmwkSHR0cCA9IHskOiAnSHR0cCd9O1xudmFyICRlbG0kdXJsJFVybCRIdHRwcyA9IHskOiAnSHR0cHMnfTtcbnZhciAkZWxtJHVybCRVcmwkVXJsID0gRjYoXG5cdGZ1bmN0aW9uIChwcm90b2NvbCwgaG9zdCwgcG9ydF8sIHBhdGgsIHF1ZXJ5LCBmcmFnbWVudCkge1xuXHRcdHJldHVybiB7ZnJhZ21lbnQ6IGZyYWdtZW50LCBob3N0OiBob3N0LCBwYXRoOiBwYXRoLCBwb3J0XzogcG9ydF8sIHByb3RvY29sOiBwcm90b2NvbCwgcXVlcnk6IHF1ZXJ5fTtcblx0fSk7XG52YXIgJGVsbSRjb3JlJFN0cmluZyRkcm9wTGVmdCA9IEYyKFxuXHRmdW5jdGlvbiAobiwgc3RyaW5nKSB7XG5cdFx0cmV0dXJuIChuIDwgMSkgPyBzdHJpbmcgOiBBMyhcblx0XHRcdCRlbG0kY29yZSRTdHJpbmckc2xpY2UsXG5cdFx0XHRuLFxuXHRcdFx0JGVsbSRjb3JlJFN0cmluZyRsZW5ndGgoc3RyaW5nKSxcblx0XHRcdHN0cmluZyk7XG5cdH0pO1xudmFyICRlbG0kY29yZSRTdHJpbmckaW5kZXhlcyA9IF9TdHJpbmdfaW5kZXhlcztcbnZhciAkZWxtJGNvcmUkU3RyaW5nJGlzRW1wdHkgPSBmdW5jdGlvbiAoc3RyaW5nKSB7XG5cdHJldHVybiBzdHJpbmcgPT09ICcnO1xufTtcbnZhciAkZWxtJHVybCRVcmwkY2hvbXBCZWZvcmVQYXRoID0gRjUoXG5cdGZ1bmN0aW9uIChwcm90b2NvbCwgcGF0aCwgcGFyYW1zLCBmcmFnLCBzdHIpIHtcblx0XHRpZiAoJGVsbSRjb3JlJFN0cmluZyRpc0VtcHR5KHN0cikgfHwgQTIoJGVsbSRjb3JlJFN0cmluZyRjb250YWlucywgJ0AnLCBzdHIpKSB7XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBfdjAgPSBBMigkZWxtJGNvcmUkU3RyaW5nJGluZGV4ZXMsICc6Jywgc3RyKTtcblx0XHRcdGlmICghX3YwLmIpIHtcblx0XHRcdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRcdEE2KCRlbG0kdXJsJFVybCRVcmwsIHByb3RvY29sLCBzdHIsICRlbG0kY29yZSRNYXliZSROb3RoaW5nLCBwYXRoLCBwYXJhbXMsIGZyYWcpKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlmICghX3YwLmIuYikge1xuXHRcdFx0XHRcdHZhciBpID0gX3YwLmE7XG5cdFx0XHRcdFx0dmFyIF92MSA9ICRlbG0kY29yZSRTdHJpbmckdG9JbnQoXG5cdFx0XHRcdFx0XHRBMigkZWxtJGNvcmUkU3RyaW5nJGRyb3BMZWZ0LCBpICsgMSwgc3RyKSk7XG5cdFx0XHRcdFx0aWYgKF92MS4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dmFyIHBvcnRfID0gX3YxO1xuXHRcdFx0XHRcdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRcdFx0XHRBNihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJHVybCRVcmwkVXJsLFxuXHRcdFx0XHRcdFx0XHRcdHByb3RvY29sLFxuXHRcdFx0XHRcdFx0XHRcdEEyKCRlbG0kY29yZSRTdHJpbmckbGVmdCwgaSwgc3RyKSxcblx0XHRcdFx0XHRcdFx0XHRwb3J0Xyxcblx0XHRcdFx0XHRcdFx0XHRwYXRoLFxuXHRcdFx0XHRcdFx0XHRcdHBhcmFtcyxcblx0XHRcdFx0XHRcdFx0XHRmcmFnKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSR1cmwkVXJsJGNob21wQmVmb3JlUXVlcnkgPSBGNChcblx0ZnVuY3Rpb24gKHByb3RvY29sLCBwYXJhbXMsIGZyYWcsIHN0cikge1xuXHRcdGlmICgkZWxtJGNvcmUkU3RyaW5nJGlzRW1wdHkoc3RyKSkge1xuXHRcdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX3YwID0gQTIoJGVsbSRjb3JlJFN0cmluZyRpbmRleGVzLCAnLycsIHN0cik7XG5cdFx0XHRpZiAoIV92MC5iKSB7XG5cdFx0XHRcdHJldHVybiBBNSgkZWxtJHVybCRVcmwkY2hvbXBCZWZvcmVQYXRoLCBwcm90b2NvbCwgJy8nLCBwYXJhbXMsIGZyYWcsIHN0cik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YXIgaSA9IF92MC5hO1xuXHRcdFx0XHRyZXR1cm4gQTUoXG5cdFx0XHRcdFx0JGVsbSR1cmwkVXJsJGNob21wQmVmb3JlUGF0aCxcblx0XHRcdFx0XHRwcm90b2NvbCxcblx0XHRcdFx0XHRBMigkZWxtJGNvcmUkU3RyaW5nJGRyb3BMZWZ0LCBpLCBzdHIpLFxuXHRcdFx0XHRcdHBhcmFtcyxcblx0XHRcdFx0XHRmcmFnLFxuXHRcdFx0XHRcdEEyKCRlbG0kY29yZSRTdHJpbmckbGVmdCwgaSwgc3RyKSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJHVybCRVcmwkY2hvbXBCZWZvcmVGcmFnbWVudCA9IEYzKFxuXHRmdW5jdGlvbiAocHJvdG9jb2wsIGZyYWcsIHN0cikge1xuXHRcdGlmICgkZWxtJGNvcmUkU3RyaW5nJGlzRW1wdHkoc3RyKSkge1xuXHRcdFx0cmV0dXJuICRlbG0kY29yZSRNYXliZSROb3RoaW5nO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgX3YwID0gQTIoJGVsbSRjb3JlJFN0cmluZyRpbmRleGVzLCAnPycsIHN0cik7XG5cdFx0XHRpZiAoIV92MC5iKSB7XG5cdFx0XHRcdHJldHVybiBBNCgkZWxtJHVybCRVcmwkY2hvbXBCZWZvcmVRdWVyeSwgcHJvdG9jb2wsICRlbG0kY29yZSRNYXliZSROb3RoaW5nLCBmcmFnLCBzdHIpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFyIGkgPSBfdjAuYTtcblx0XHRcdFx0cmV0dXJuIEE0KFxuXHRcdFx0XHRcdCRlbG0kdXJsJFVybCRjaG9tcEJlZm9yZVF1ZXJ5LFxuXHRcdFx0XHRcdHByb3RvY29sLFxuXHRcdFx0XHRcdCRlbG0kY29yZSRNYXliZSRKdXN0KFxuXHRcdFx0XHRcdFx0QTIoJGVsbSRjb3JlJFN0cmluZyRkcm9wTGVmdCwgaSArIDEsIHN0cikpLFxuXHRcdFx0XHRcdGZyYWcsXG5cdFx0XHRcdFx0QTIoJGVsbSRjb3JlJFN0cmluZyRsZWZ0LCBpLCBzdHIpKTtcblx0XHRcdH1cblx0XHR9XG5cdH0pO1xudmFyICRlbG0kdXJsJFVybCRjaG9tcEFmdGVyUHJvdG9jb2wgPSBGMihcblx0ZnVuY3Rpb24gKHByb3RvY29sLCBzdHIpIHtcblx0XHRpZiAoJGVsbSRjb3JlJFN0cmluZyRpc0VtcHR5KHN0cikpIHtcblx0XHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkTm90aGluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIF92MCA9IEEyKCRlbG0kY29yZSRTdHJpbmckaW5kZXhlcywgJyMnLCBzdHIpO1xuXHRcdFx0aWYgKCFfdjAuYikge1xuXHRcdFx0XHRyZXR1cm4gQTMoJGVsbSR1cmwkVXJsJGNob21wQmVmb3JlRnJhZ21lbnQsIHByb3RvY29sLCAkZWxtJGNvcmUkTWF5YmUkTm90aGluZywgc3RyKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBpID0gX3YwLmE7XG5cdFx0XHRcdHJldHVybiBBMyhcblx0XHRcdFx0XHQkZWxtJHVybCRVcmwkY2hvbXBCZWZvcmVGcmFnbWVudCxcblx0XHRcdFx0XHRwcm90b2NvbCxcblx0XHRcdFx0XHQkZWxtJGNvcmUkTWF5YmUkSnVzdChcblx0XHRcdFx0XHRcdEEyKCRlbG0kY29yZSRTdHJpbmckZHJvcExlZnQsIGkgKyAxLCBzdHIpKSxcblx0XHRcdFx0XHRBMigkZWxtJGNvcmUkU3RyaW5nJGxlZnQsIGksIHN0cikpO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJFN0cmluZyRzdGFydHNXaXRoID0gX1N0cmluZ19zdGFydHNXaXRoO1xudmFyICRlbG0kdXJsJFVybCRmcm9tU3RyaW5nID0gZnVuY3Rpb24gKHN0cikge1xuXHRyZXR1cm4gQTIoJGVsbSRjb3JlJFN0cmluZyRzdGFydHNXaXRoLCAnaHR0cDovLycsIHN0cikgPyBBMihcblx0XHQkZWxtJHVybCRVcmwkY2hvbXBBZnRlclByb3RvY29sLFxuXHRcdCRlbG0kdXJsJFVybCRIdHRwLFxuXHRcdEEyKCRlbG0kY29yZSRTdHJpbmckZHJvcExlZnQsIDcsIHN0cikpIDogKEEyKCRlbG0kY29yZSRTdHJpbmckc3RhcnRzV2l0aCwgJ2h0dHBzOi8vJywgc3RyKSA/IEEyKFxuXHRcdCRlbG0kdXJsJFVybCRjaG9tcEFmdGVyUHJvdG9jb2wsXG5cdFx0JGVsbSR1cmwkVXJsJEh0dHBzLFxuXHRcdEEyKCRlbG0kY29yZSRTdHJpbmckZHJvcExlZnQsIDgsIHN0cikpIDogJGVsbSRjb3JlJE1heWJlJE5vdGhpbmcpO1xufTtcbnZhciAkZWxtJGNvcmUkQmFzaWNzJG5ldmVyID0gZnVuY3Rpb24gKF92MCkge1xuXHRuZXZlcjpcblx0d2hpbGUgKHRydWUpIHtcblx0XHR2YXIgbnZyID0gX3YwLmE7XG5cdFx0dmFyICR0ZW1wJF92MCA9IG52cjtcblx0XHRfdjAgPSAkdGVtcCRfdjA7XG5cdFx0Y29udGludWUgbmV2ZXI7XG5cdH1cbn07XG52YXIgJGVsbSRicm93c2VyJEJyb3dzZXIkYXBwbGljYXRpb24gPSBfQnJvd3Nlcl9hcHBsaWNhdGlvbjtcbnZhciAkYXV0aG9yJHByb2plY3QkTWFpbiRQYWdlc01zZyA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ1BhZ2VzTXNnJywgYTogYX07XG59O1xudmFyICRhdXRob3IkcHJvamVjdCRQYWdlcyROb3RGb3VuZCA9IHskOiAnTm90Rm91bmQnfTtcbnZhciAkYXV0aG9yJHByb2plY3QkUGFnZXMkUGFnZU9uZSA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ1BhZ2VPbmUnLCBhOiBhfTtcbn07XG52YXIgJGF1dGhvciRwcm9qZWN0JFBhZ2VzJFBhZ2VUd28gPSBmdW5jdGlvbiAoYSkge1xuXHRyZXR1cm4geyQ6ICdQYWdlVHdvJywgYTogYX07XG59O1xudmFyICRhdXRob3IkcHJvamVjdCRQYWdlcyRPbmUkaW5pdCA9IHt0ZXh0RmllbGQ6ICcnfTtcbnZhciAkYXV0aG9yJHByb2plY3QkUGFnZXMkVHdvJGluaXQgPSB7Y291bnRlcjogMH07XG52YXIgJGF1dGhvciRwcm9qZWN0JFBhZ2VzJGZyb21Sb3V0ZSA9IGZ1bmN0aW9uIChyb3V0ZSkge1xuXHRzd2l0Y2ggKHJvdXRlLiQpIHtcblx0XHRjYXNlICdQYWdlMSc6XG5cdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0JGF1dGhvciRwcm9qZWN0JFBhZ2VzJFBhZ2VPbmUoJGF1dGhvciRwcm9qZWN0JFBhZ2VzJE9uZSRpbml0KSxcblx0XHRcdFx0JGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRjYXNlICdQYWdlMic6XG5cdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0JGF1dGhvciRwcm9qZWN0JFBhZ2VzJFBhZ2VUd28oJGF1dGhvciRwcm9qZWN0JFBhZ2VzJFR3byRpbml0KSxcblx0XHRcdFx0JGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lKTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoJGF1dGhvciRwcm9qZWN0JFBhZ2VzJE5vdEZvdW5kLCAkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHR9XG59O1xudmFyICRhdXRob3IkcHJvamVjdCRTaGFyZWQkaW5pdCA9IEYyKFxuXHRmdW5jdGlvbiAoa2V5LCB1cmwpIHtcblx0XHRyZXR1cm4ge2tleToga2V5LCB0ZXh0RmllbGQ6ICcnLCB1cmw6IHVybH07XG5cdH0pO1xudmFyICRhdXRob3IkcHJvamVjdCRSb3V0ZSROb3RGb3VuZCA9IHskOiAnTm90Rm91bmQnfTtcbnZhciAkYXV0aG9yJHByb2plY3QkUm91dGUkUGFnZTEgPSB7JDogJ1BhZ2UxJ307XG52YXIgJGF1dGhvciRwcm9qZWN0JFJvdXRlJFBhZ2UyID0geyQ6ICdQYWdlMid9O1xudmFyICRlbG0kdXJsJFVybCRQYXJzZXIkUGFyc2VyID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnUGFyc2VyJywgYTogYX07XG59O1xudmFyICRlbG0kdXJsJFVybCRQYXJzZXIkU3RhdGUgPSBGNShcblx0ZnVuY3Rpb24gKHZpc2l0ZWQsIHVudmlzaXRlZCwgcGFyYW1zLCBmcmFnLCB2YWx1ZSkge1xuXHRcdHJldHVybiB7ZnJhZzogZnJhZywgcGFyYW1zOiBwYXJhbXMsIHVudmlzaXRlZDogdW52aXNpdGVkLCB2YWx1ZTogdmFsdWUsIHZpc2l0ZWQ6IHZpc2l0ZWR9O1xuXHR9KTtcbnZhciAkZWxtJHVybCRVcmwkUGFyc2VyJG1hcFN0YXRlID0gRjIoXG5cdGZ1bmN0aW9uIChmdW5jLCBfdjApIHtcblx0XHR2YXIgdmlzaXRlZCA9IF92MC52aXNpdGVkO1xuXHRcdHZhciB1bnZpc2l0ZWQgPSBfdjAudW52aXNpdGVkO1xuXHRcdHZhciBwYXJhbXMgPSBfdjAucGFyYW1zO1xuXHRcdHZhciBmcmFnID0gX3YwLmZyYWc7XG5cdFx0dmFyIHZhbHVlID0gX3YwLnZhbHVlO1xuXHRcdHJldHVybiBBNShcblx0XHRcdCRlbG0kdXJsJFVybCRQYXJzZXIkU3RhdGUsXG5cdFx0XHR2aXNpdGVkLFxuXHRcdFx0dW52aXNpdGVkLFxuXHRcdFx0cGFyYW1zLFxuXHRcdFx0ZnJhZyxcblx0XHRcdGZ1bmModmFsdWUpKTtcblx0fSk7XG52YXIgJGVsbSR1cmwkVXJsJFBhcnNlciRtYXAgPSBGMihcblx0ZnVuY3Rpb24gKHN1YlZhbHVlLCBfdjApIHtcblx0XHR2YXIgcGFyc2VBcmcgPSBfdjAuYTtcblx0XHRyZXR1cm4gJGVsbSR1cmwkVXJsJFBhcnNlciRQYXJzZXIoXG5cdFx0XHRmdW5jdGlvbiAoX3YxKSB7XG5cdFx0XHRcdHZhciB2aXNpdGVkID0gX3YxLnZpc2l0ZWQ7XG5cdFx0XHRcdHZhciB1bnZpc2l0ZWQgPSBfdjEudW52aXNpdGVkO1xuXHRcdFx0XHR2YXIgcGFyYW1zID0gX3YxLnBhcmFtcztcblx0XHRcdFx0dmFyIGZyYWcgPSBfdjEuZnJhZztcblx0XHRcdFx0dmFyIHZhbHVlID0gX3YxLnZhbHVlO1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJExpc3QkbWFwLFxuXHRcdFx0XHRcdCRlbG0kdXJsJFVybCRQYXJzZXIkbWFwU3RhdGUodmFsdWUpLFxuXHRcdFx0XHRcdHBhcnNlQXJnKFxuXHRcdFx0XHRcdFx0QTUoJGVsbSR1cmwkVXJsJFBhcnNlciRTdGF0ZSwgdmlzaXRlZCwgdW52aXNpdGVkLCBwYXJhbXMsIGZyYWcsIHN1YlZhbHVlKSkpO1xuXHRcdFx0fSk7XG5cdH0pO1xudmFyICRlbG0kdXJsJFVybCRQYXJzZXIkb25lT2YgPSBmdW5jdGlvbiAocGFyc2Vycykge1xuXHRyZXR1cm4gJGVsbSR1cmwkVXJsJFBhcnNlciRQYXJzZXIoXG5cdFx0ZnVuY3Rpb24gKHN0YXRlKSB7XG5cdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbmNhdE1hcCxcblx0XHRcdFx0ZnVuY3Rpb24gKF92MCkge1xuXHRcdFx0XHRcdHZhciBwYXJzZXIgPSBfdjAuYTtcblx0XHRcdFx0XHRyZXR1cm4gcGFyc2VyKHN0YXRlKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0cGFyc2Vycyk7XG5cdFx0fSk7XG59O1xudmFyICRlbG0kdXJsJFVybCRQYXJzZXIkcyA9IGZ1bmN0aW9uIChzdHIpIHtcblx0cmV0dXJuICRlbG0kdXJsJFVybCRQYXJzZXIkUGFyc2VyKFxuXHRcdGZ1bmN0aW9uIChfdjApIHtcblx0XHRcdHZhciB2aXNpdGVkID0gX3YwLnZpc2l0ZWQ7XG5cdFx0XHR2YXIgdW52aXNpdGVkID0gX3YwLnVudmlzaXRlZDtcblx0XHRcdHZhciBwYXJhbXMgPSBfdjAucGFyYW1zO1xuXHRcdFx0dmFyIGZyYWcgPSBfdjAuZnJhZztcblx0XHRcdHZhciB2YWx1ZSA9IF92MC52YWx1ZTtcblx0XHRcdGlmICghdW52aXNpdGVkLmIpIHtcblx0XHRcdFx0cmV0dXJuIF9MaXN0X05pbDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBuZXh0ID0gdW52aXNpdGVkLmE7XG5cdFx0XHRcdHZhciByZXN0ID0gdW52aXNpdGVkLmI7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfZXEobmV4dCwgc3RyKSA/IF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRBNShcblx0XHRcdFx0XHRcdCRlbG0kdXJsJFVybCRQYXJzZXIkU3RhdGUsXG5cdFx0XHRcdFx0XHRBMigkZWxtJGNvcmUkTGlzdCRjb25zLCBuZXh0LCB2aXNpdGVkKSxcblx0XHRcdFx0XHRcdHJlc3QsXG5cdFx0XHRcdFx0XHRwYXJhbXMsXG5cdFx0XHRcdFx0XHRmcmFnLFxuXHRcdFx0XHRcdFx0dmFsdWUpXG5cdFx0XHRcdFx0XSkgOiBfTGlzdF9OaWw7XG5cdFx0XHR9XG5cdFx0fSk7XG59O1xudmFyICRlbG0kdXJsJFVybCRQYXJzZXIkdG9wID0gJGVsbSR1cmwkVXJsJFBhcnNlciRQYXJzZXIoXG5cdGZ1bmN0aW9uIChzdGF0ZSkge1xuXHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbc3RhdGVdKTtcblx0fSk7XG52YXIgJGF1dGhvciRwcm9qZWN0JFJvdXRlJG1hdGNoZXJzID0gJGVsbSR1cmwkVXJsJFBhcnNlciRvbmVPZihcblx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFtcblx0XHRcdEEyKCRlbG0kdXJsJFVybCRQYXJzZXIkbWFwLCAkYXV0aG9yJHByb2plY3QkUm91dGUkUGFnZTEsICRlbG0kdXJsJFVybCRQYXJzZXIkdG9wKSxcblx0XHRcdEEyKFxuXHRcdFx0JGVsbSR1cmwkVXJsJFBhcnNlciRtYXAsXG5cdFx0XHQkYXV0aG9yJHByb2plY3QkUm91dGUkUGFnZTIsXG5cdFx0XHQkZWxtJHVybCRVcmwkUGFyc2VyJHMoJ3BhZ2UtMicpKSxcblx0XHRcdEEyKFxuXHRcdFx0JGVsbSR1cmwkVXJsJFBhcnNlciRtYXAsXG5cdFx0XHQkYXV0aG9yJHByb2plY3QkUm91dGUkTm90Rm91bmQsXG5cdFx0XHQkZWxtJHVybCRVcmwkUGFyc2VyJHMoJ25hby1lbmNvbnRyYWRhJykpXG5cdFx0XSkpO1xudmFyICRlbG0kdXJsJFVybCRQYXJzZXIkZ2V0Rmlyc3RNYXRjaCA9IGZ1bmN0aW9uIChzdGF0ZXMpIHtcblx0Z2V0Rmlyc3RNYXRjaDpcblx0d2hpbGUgKHRydWUpIHtcblx0XHRpZiAoIXN0YXRlcy5iKSB7XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJE5vdGhpbmc7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBzdGF0ZSA9IHN0YXRlcy5hO1xuXHRcdFx0dmFyIHJlc3QgPSBzdGF0ZXMuYjtcblx0XHRcdHZhciBfdjEgPSBzdGF0ZS51bnZpc2l0ZWQ7XG5cdFx0XHRpZiAoIV92MS5iKSB7XG5cdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkSnVzdChzdGF0ZS52YWx1ZSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoKF92MS5hID09PSAnJykgJiYgKCFfdjEuYi5iKSkge1xuXHRcdFx0XHRcdHJldHVybiAkZWxtJGNvcmUkTWF5YmUkSnVzdChzdGF0ZS52YWx1ZSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyICR0ZW1wJHN0YXRlcyA9IHJlc3Q7XG5cdFx0XHRcdFx0c3RhdGVzID0gJHRlbXAkc3RhdGVzO1xuXHRcdFx0XHRcdGNvbnRpbnVlIGdldEZpcnN0TWF0Y2g7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG52YXIgJGVsbSR1cmwkVXJsJFBhcnNlciRyZW1vdmVGaW5hbEVtcHR5ID0gZnVuY3Rpb24gKHNlZ21lbnRzKSB7XG5cdGlmICghc2VnbWVudHMuYikge1xuXHRcdHJldHVybiBfTGlzdF9OaWw7XG5cdH0gZWxzZSB7XG5cdFx0aWYgKChzZWdtZW50cy5hID09PSAnJykgJiYgKCFzZWdtZW50cy5iLmIpKSB7XG5cdFx0XHRyZXR1cm4gX0xpc3RfTmlsO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgc2VnbWVudCA9IHNlZ21lbnRzLmE7XG5cdFx0XHR2YXIgcmVzdCA9IHNlZ21lbnRzLmI7XG5cdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdCRlbG0kY29yZSRMaXN0JGNvbnMsXG5cdFx0XHRcdHNlZ21lbnQsXG5cdFx0XHRcdCRlbG0kdXJsJFVybCRQYXJzZXIkcmVtb3ZlRmluYWxFbXB0eShyZXN0KSk7XG5cdFx0fVxuXHR9XG59O1xudmFyICRlbG0kdXJsJFVybCRQYXJzZXIkcHJlcGFyZVBhdGggPSBmdW5jdGlvbiAocGF0aCkge1xuXHR2YXIgX3YwID0gQTIoJGVsbSRjb3JlJFN0cmluZyRzcGxpdCwgJy8nLCBwYXRoKTtcblx0aWYgKF92MC5iICYmIChfdjAuYSA9PT0gJycpKSB7XG5cdFx0dmFyIHNlZ21lbnRzID0gX3YwLmI7XG5cdFx0cmV0dXJuICRlbG0kdXJsJFVybCRQYXJzZXIkcmVtb3ZlRmluYWxFbXB0eShzZWdtZW50cyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIHNlZ21lbnRzID0gX3YwO1xuXHRcdHJldHVybiAkZWxtJHVybCRVcmwkUGFyc2VyJHJlbW92ZUZpbmFsRW1wdHkoc2VnbWVudHMpO1xuXHR9XG59O1xudmFyICRlbG0kdXJsJFVybCRQYXJzZXIkYWRkVG9QYXJhbWV0ZXJzSGVscCA9IEYyKFxuXHRmdW5jdGlvbiAodmFsdWUsIG1heWJlTGlzdCkge1xuXHRcdGlmIChtYXliZUxpc3QuJCA9PT0gJ05vdGhpbmcnKSB7XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbdmFsdWVdKSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBsaXN0ID0gbWF5YmVMaXN0LmE7XG5cdFx0XHRyZXR1cm4gJGVsbSRjb3JlJE1heWJlJEp1c3QoXG5cdFx0XHRcdEEyKCRlbG0kY29yZSRMaXN0JGNvbnMsIHZhbHVlLCBsaXN0KSk7XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJHVybCRVcmwkcGVyY2VudERlY29kZSA9IF9VcmxfcGVyY2VudERlY29kZTtcbnZhciAkZWxtJHVybCRVcmwkUGFyc2VyJGFkZFBhcmFtID0gRjIoXG5cdGZ1bmN0aW9uIChzZWdtZW50LCBkaWN0KSB7XG5cdFx0dmFyIF92MCA9IEEyKCRlbG0kY29yZSRTdHJpbmckc3BsaXQsICc9Jywgc2VnbWVudCk7XG5cdFx0aWYgKChfdjAuYiAmJiBfdjAuYi5iKSAmJiAoIV92MC5iLmIuYikpIHtcblx0XHRcdHZhciByYXdLZXkgPSBfdjAuYTtcblx0XHRcdHZhciBfdjEgPSBfdjAuYjtcblx0XHRcdHZhciByYXdWYWx1ZSA9IF92MS5hO1xuXHRcdFx0dmFyIF92MiA9ICRlbG0kdXJsJFVybCRwZXJjZW50RGVjb2RlKHJhd0tleSk7XG5cdFx0XHRpZiAoX3YyLiQgPT09ICdOb3RoaW5nJykge1xuXHRcdFx0XHRyZXR1cm4gZGljdDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHZhciBrZXkgPSBfdjIuYTtcblx0XHRcdFx0dmFyIF92MyA9ICRlbG0kdXJsJFVybCRwZXJjZW50RGVjb2RlKHJhd1ZhbHVlKTtcblx0XHRcdFx0aWYgKF92My4kID09PSAnTm90aGluZycpIHtcblx0XHRcdFx0XHRyZXR1cm4gZGljdDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHR2YXIgdmFsdWUgPSBfdjMuYTtcblx0XHRcdFx0XHRyZXR1cm4gQTMoXG5cdFx0XHRcdFx0XHQkZWxtJGNvcmUkRGljdCR1cGRhdGUsXG5cdFx0XHRcdFx0XHRrZXksXG5cdFx0XHRcdFx0XHQkZWxtJHVybCRVcmwkUGFyc2VyJGFkZFRvUGFyYW1ldGVyc0hlbHAodmFsdWUpLFxuXHRcdFx0XHRcdFx0ZGljdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGRpY3Q7XG5cdFx0fVxuXHR9KTtcbnZhciAkZWxtJHVybCRVcmwkUGFyc2VyJHByZXBhcmVRdWVyeSA9IGZ1bmN0aW9uIChtYXliZVF1ZXJ5KSB7XG5cdGlmIChtYXliZVF1ZXJ5LiQgPT09ICdOb3RoaW5nJykge1xuXHRcdHJldHVybiAkZWxtJGNvcmUkRGljdCRlbXB0eTtcblx0fSBlbHNlIHtcblx0XHR2YXIgcXJ5ID0gbWF5YmVRdWVyeS5hO1xuXHRcdHJldHVybiBBMyhcblx0XHRcdCRlbG0kY29yZSRMaXN0JGZvbGRyLFxuXHRcdFx0JGVsbSR1cmwkVXJsJFBhcnNlciRhZGRQYXJhbSxcblx0XHRcdCRlbG0kY29yZSREaWN0JGVtcHR5LFxuXHRcdFx0QTIoJGVsbSRjb3JlJFN0cmluZyRzcGxpdCwgJyYnLCBxcnkpKTtcblx0fVxufTtcbnZhciAkZWxtJHVybCRVcmwkUGFyc2VyJHBhcnNlID0gRjIoXG5cdGZ1bmN0aW9uIChfdjAsIHVybCkge1xuXHRcdHZhciBwYXJzZXIgPSBfdjAuYTtcblx0XHRyZXR1cm4gJGVsbSR1cmwkVXJsJFBhcnNlciRnZXRGaXJzdE1hdGNoKFxuXHRcdFx0cGFyc2VyKFxuXHRcdFx0XHRBNShcblx0XHRcdFx0XHQkZWxtJHVybCRVcmwkUGFyc2VyJFN0YXRlLFxuXHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHQkZWxtJHVybCRVcmwkUGFyc2VyJHByZXBhcmVQYXRoKHVybC5wYXRoKSxcblx0XHRcdFx0XHQkZWxtJHVybCRVcmwkUGFyc2VyJHByZXBhcmVRdWVyeSh1cmwucXVlcnkpLFxuXHRcdFx0XHRcdHVybC5mcmFnbWVudCxcblx0XHRcdFx0XHQkZWxtJGNvcmUkQmFzaWNzJGlkZW50aXR5KSkpO1xuXHR9KTtcbnZhciAkYXV0aG9yJHByb2plY3QkUm91dGUkcGFyc2VVcmwgPSBmdW5jdGlvbiAodXJsKSB7XG5cdHJldHVybiBBMihcblx0XHQkZWxtJGNvcmUkTWF5YmUkd2l0aERlZmF1bHQsXG5cdFx0JGF1dGhvciRwcm9qZWN0JFJvdXRlJE5vdEZvdW5kLFxuXHRcdEEyKCRlbG0kdXJsJFVybCRQYXJzZXIkcGFyc2UsICRhdXRob3IkcHJvamVjdCRSb3V0ZSRtYXRjaGVycywgdXJsKSk7XG59O1xudmFyICRhdXRob3IkcHJvamVjdCRNYWluJGluaXQgPSBGMyhcblx0ZnVuY3Rpb24gKF92MCwgdXJsLCBrZXkpIHtcblx0XHR2YXIgX3YxID0gJGF1dGhvciRwcm9qZWN0JFBhZ2VzJGZyb21Sb3V0ZShcblx0XHRcdCRhdXRob3IkcHJvamVjdCRSb3V0ZSRwYXJzZVVybCh1cmwpKTtcblx0XHR2YXIgcGFnZSA9IF92MS5hO1xuXHRcdHZhciBjbWQgPSBfdjEuYjtcblx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdHtcblx0XHRcdFx0cGFnZTogcGFnZSxcblx0XHRcdFx0c2hhcmVkOiBBMigkYXV0aG9yJHByb2plY3QkU2hhcmVkJGluaXQsIGtleSwgdXJsKVxuXHRcdFx0fSxcblx0XHRcdEEyKCRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbWFwLCAkYXV0aG9yJHByb2plY3QkTWFpbiRQYWdlc01zZywgY21kKSk7XG5cdH0pO1xudmFyICRlbG0kY29yZSRQbGF0Zm9ybSRTdWIkYmF0Y2ggPSBfUGxhdGZvcm1fYmF0Y2g7XG52YXIgJGVsbSRjb3JlJFBsYXRmb3JtJFN1YiRub25lID0gJGVsbSRjb3JlJFBsYXRmb3JtJFN1YiRiYXRjaChfTGlzdF9OaWwpO1xudmFyICRlbG0kYnJvd3NlciRCcm93c2VyJE5hdmlnYXRpb24kbG9hZCA9IF9Ccm93c2VyX2xvYWQ7XG52YXIgJGVsbSRicm93c2VyJEJyb3dzZXIkTmF2aWdhdGlvbiRwdXNoVXJsID0gX0Jyb3dzZXJfcHVzaFVybDtcbnZhciAkYXV0aG9yJHByb2plY3QkUm91dGUkcm91dGVUb1N0cmluZyA9IGZ1bmN0aW9uIChwYWdlKSB7XG5cdHZhciBwaWVjZXMgPSBmdW5jdGlvbiAoKSB7XG5cdFx0c3dpdGNoIChwYWdlLiQpIHtcblx0XHRcdGNhc2UgJ1BhZ2UxJzpcblx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbJyddKTtcblx0XHRcdGNhc2UgJ1BhZ2UyJzpcblx0XHRcdFx0cmV0dXJuIF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbJ3BhZ2UtMiddKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0WyduYW8tZW5jb250cmFkYSddKTtcblx0XHR9XG5cdH0oKTtcblx0cmV0dXJuICcvJyArIEEyKCRlbG0kY29yZSRTdHJpbmckam9pbiwgJy8nLCBwaWVjZXMpO1xufTtcbnZhciAkYXV0aG9yJHByb2plY3QkUm91dGUkcHVzaFVybCA9IEYyKFxuXHRmdW5jdGlvbiAoa2V5LCByb3V0ZSkge1xuXHRcdHJldHVybiBBMihcblx0XHRcdCRlbG0kYnJvd3NlciRCcm93c2VyJE5hdmlnYXRpb24kcHVzaFVybCxcblx0XHRcdGtleSxcblx0XHRcdCRhdXRob3IkcHJvamVjdCRSb3V0ZSRyb3V0ZVRvU3RyaW5nKHJvdXRlKSk7XG5cdH0pO1xudmFyICRhdXRob3IkcHJvamVjdCRTaGFyZWQkTm9PcCA9IHskOiAnTm9PcCd9O1xudmFyICRhdXRob3IkcHJvamVjdCRQYWdlcyROb3RGb3VuZE1zZyA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ05vdEZvdW5kTXNnJywgYTogYX07XG59O1xudmFyICRhdXRob3IkcHJvamVjdCRQYWdlcyRQYWdlT25lTXNnID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnUGFnZU9uZU1zZycsIGE6IGF9O1xufTtcbnZhciAkYXV0aG9yJHByb2plY3QkUGFnZXMkUGFnZVR3b01zZyA9IGZ1bmN0aW9uIChhKSB7XG5cdHJldHVybiB7JDogJ1BhZ2VUd29Nc2cnLCBhOiBhfTtcbn07XG52YXIgJGF1dGhvciRwcm9qZWN0JFBhZ2VzJE5vdEZvdW5kJHVwZGF0ZSA9IEYyKFxuXHRmdW5jdGlvbiAobXNnLCBzaGFyZWQpIHtcblx0XHRyZXR1cm4gQTIoJGF1dGhvciRwcm9qZWN0JFJvdXRlJHB1c2hVcmwsIHNoYXJlZC5rZXksICRhdXRob3IkcHJvamVjdCRSb3V0ZSRQYWdlMSk7XG5cdH0pO1xudmFyICRhdXRob3IkcHJvamVjdCRTaGFyZWQkVXBkYXRlVGV4dEZpZWxkID0gZnVuY3Rpb24gKGEpIHtcblx0cmV0dXJuIHskOiAnVXBkYXRlVGV4dEZpZWxkJywgYTogYX07XG59O1xudmFyICRhdXRob3IkcHJvamVjdCRQYWdlcyRPbmUkdXBkYXRlID0gRjMoXG5cdGZ1bmN0aW9uIChtc2csIG1vZGVsLCBzaGFyZWQpIHtcblx0XHRzd2l0Y2ggKG1zZy4kKSB7XG5cdFx0XHRjYXNlICdJbnB1dFRleHRGaWVsZCc6XG5cdFx0XHRcdHZhciB0ZXh0ID0gbXNnLmE7XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUzKFxuXHRcdFx0XHRcdF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRcdHt0ZXh0RmllbGQ6IHRleHR9KSxcblx0XHRcdFx0XHQkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUsXG5cdFx0XHRcdFx0JGF1dGhvciRwcm9qZWN0JFNoYXJlZCROb09wKTtcblx0XHRcdGNhc2UgJ0lucHV0U2hhcmVkJzpcblx0XHRcdFx0dmFyIHRleHQgPSBtc2cuYTtcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTMoXG5cdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0JGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lLFxuXHRcdFx0XHRcdCRhdXRob3IkcHJvamVjdCRTaGFyZWQkVXBkYXRlVGV4dEZpZWxkKHRleHQpKTtcblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUzKFxuXHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdEEyKCRhdXRob3IkcHJvamVjdCRSb3V0ZSRwdXNoVXJsLCBzaGFyZWQua2V5LCAkYXV0aG9yJHByb2plY3QkUm91dGUkUGFnZTIpLFxuXHRcdFx0XHRcdCRhdXRob3IkcHJvamVjdCRTaGFyZWQkTm9PcCk7XG5cdFx0fVxuXHR9KTtcbnZhciAkYXV0aG9yJHByb2plY3QkUGFnZXMkVHdvJHVwZGF0ZSA9IEYzKFxuXHRmdW5jdGlvbiAobXNnLCBtb2RlbCwgc2hhcmVkKSB7XG5cdFx0c3dpdGNoIChtc2cuJCkge1xuXHRcdFx0Y2FzZSAnSW5jcmVtZW50Jzpcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTMoXG5cdFx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0e2NvdW50ZXI6IG1vZGVsLmNvdW50ZXIgKyAxfSksXG5cdFx0XHRcdFx0JGVsbSRjb3JlJFBsYXRmb3JtJENtZCRub25lLFxuXHRcdFx0XHRcdCRhdXRob3IkcHJvamVjdCRTaGFyZWQkTm9PcCk7XG5cdFx0XHRjYXNlICdEZWNyZW1lbnQnOlxuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMyhcblx0XHRcdFx0XHRfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHR7Y291bnRlcjogbW9kZWwuY291bnRlciAtIDF9KSxcblx0XHRcdFx0XHQkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUsXG5cdFx0XHRcdFx0JGF1dGhvciRwcm9qZWN0JFNoYXJlZCROb09wKTtcblx0XHRcdGNhc2UgJ0luY3JlbWVudFNoYXJlZCc6XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUzKFxuXHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdCRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSxcblx0XHRcdFx0XHQkYXV0aG9yJHByb2plY3QkU2hhcmVkJFVwZGF0ZVRleHRGaWVsZChzaGFyZWQudGV4dEZpZWxkICsgJysnKSk7XG5cdFx0XHRjYXNlICdEZWNyZW1lbnRTaGFyZWQnOlxuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMyhcblx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHQkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUsXG5cdFx0XHRcdFx0JGF1dGhvciRwcm9qZWN0JFNoYXJlZCRVcGRhdGVUZXh0RmllbGQoXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRsZWZ0LFxuXHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGxlbmd0aChzaGFyZWQudGV4dEZpZWxkKSAtIDEsXG5cdFx0XHRcdFx0XHRcdHNoYXJlZC50ZXh0RmllbGQpKSk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMyhcblx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHRBMigkYXV0aG9yJHByb2plY3QkUm91dGUkcHVzaFVybCwgc2hhcmVkLmtleSwgJGF1dGhvciRwcm9qZWN0JFJvdXRlJFBhZ2UxKSxcblx0XHRcdFx0XHQkYXV0aG9yJHByb2plY3QkU2hhcmVkJE5vT3ApO1xuXHRcdH1cblx0fSk7XG52YXIgJGF1dGhvciRwcm9qZWN0JFBhZ2VzJHVwZGF0ZSA9IEYzKFxuXHRmdW5jdGlvbiAobXNnLCBtb2RlbCwgc2hhcmVkKSB7XG5cdFx0dmFyIF92MCA9IF9VdGlsc19UdXBsZTIobXNnLCBtb2RlbCk7XG5cdFx0c3dpdGNoIChfdjAuYS4kKSB7XG5cdFx0XHRjYXNlICdQYWdlT25lTXNnJzpcblx0XHRcdFx0aWYgKF92MC5iLiQgPT09ICdQYWdlT25lJykge1xuXHRcdFx0XHRcdHZhciBwYWdlT25lTXNnID0gX3YwLmEuYTtcblx0XHRcdFx0XHR2YXIgcGFnZU9uZU1vZGVsID0gX3YwLmIuYTtcblx0XHRcdFx0XHR2YXIgX3YxID0gQTMoJGF1dGhvciRwcm9qZWN0JFBhZ2VzJE9uZSR1cGRhdGUsIHBhZ2VPbmVNc2csIHBhZ2VPbmVNb2RlbCwgc2hhcmVkKTtcblx0XHRcdFx0XHR2YXIgbmV3UGFnZU9uZU1vZGVsID0gX3YxLmE7XG5cdFx0XHRcdFx0dmFyIGNtZCA9IF92MS5iO1xuXHRcdFx0XHRcdHZhciBzaGFyZWRNc2cgPSBfdjEuYztcblx0XHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMyhcblx0XHRcdFx0XHRcdCRhdXRob3IkcHJvamVjdCRQYWdlcyRQYWdlT25lKG5ld1BhZ2VPbmVNb2RlbCksXG5cdFx0XHRcdFx0XHRBMigkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG1hcCwgJGF1dGhvciRwcm9qZWN0JFBhZ2VzJFBhZ2VPbmVNc2csIGNtZCksXG5cdFx0XHRcdFx0XHRzaGFyZWRNc2cpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUzKG1vZGVsLCAkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUsICRhdXRob3IkcHJvamVjdCRTaGFyZWQkTm9PcCk7XG5cdFx0XHRcdH1cblx0XHRcdGNhc2UgJ1BhZ2VUd29Nc2cnOlxuXHRcdFx0XHRpZiAoX3YwLmIuJCA9PT0gJ1BhZ2VUd28nKSB7XG5cdFx0XHRcdFx0dmFyIHBhZ2VUd29Nc2cgPSBfdjAuYS5hO1xuXHRcdFx0XHRcdHZhciBwYWdlVHdvTW9kZWwgPSBfdjAuYi5hO1xuXHRcdFx0XHRcdHZhciBfdjIgPSBBMygkYXV0aG9yJHByb2plY3QkUGFnZXMkVHdvJHVwZGF0ZSwgcGFnZVR3b01zZywgcGFnZVR3b01vZGVsLCBzaGFyZWQpO1xuXHRcdFx0XHRcdHZhciBuZXdQYWdlVHdvTW9kZWwgPSBfdjIuYTtcblx0XHRcdFx0XHR2YXIgY21kID0gX3YyLmI7XG5cdFx0XHRcdFx0dmFyIHNoYXJlZE1zZyA9IF92Mi5jO1xuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUzKFxuXHRcdFx0XHRcdFx0JGF1dGhvciRwcm9qZWN0JFBhZ2VzJFBhZ2VUd28obmV3UGFnZVR3b01vZGVsKSxcblx0XHRcdFx0XHRcdEEyKCRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbWFwLCAkYXV0aG9yJHByb2plY3QkUGFnZXMkUGFnZVR3b01zZywgY21kKSxcblx0XHRcdFx0XHRcdHNoYXJlZE1zZyk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTMobW9kZWwsICRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSwgJGF1dGhvciRwcm9qZWN0JFNoYXJlZCROb09wKTtcblx0XHRcdFx0fVxuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0aWYgKF92MC5iLiQgPT09ICdOb3RGb3VuZCcpIHtcblx0XHRcdFx0XHR2YXIgcGFnZVR3b01zZyA9IF92MC5hLmE7XG5cdFx0XHRcdFx0dmFyIF92MyA9IF92MC5iO1xuXHRcdFx0XHRcdHZhciBjbWQgPSBBMigkYXV0aG9yJHByb2plY3QkUGFnZXMkTm90Rm91bmQkdXBkYXRlLCBwYWdlVHdvTXNnLCBzaGFyZWQpO1xuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUzKFxuXHRcdFx0XHRcdFx0JGF1dGhvciRwcm9qZWN0JFBhZ2VzJE5vdEZvdW5kLFxuXHRcdFx0XHRcdFx0QTIoJGVsbSRjb3JlJFBsYXRmb3JtJENtZCRtYXAsICRhdXRob3IkcHJvamVjdCRQYWdlcyROb3RGb3VuZE1zZywgY21kKSxcblx0XHRcdFx0XHRcdCRhdXRob3IkcHJvamVjdCRTaGFyZWQkTm9PcCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTMobW9kZWwsICRlbG0kY29yZSRQbGF0Zm9ybSRDbWQkbm9uZSwgJGF1dGhvciRwcm9qZWN0JFNoYXJlZCROb09wKTtcblx0XHRcdFx0fVxuXHRcdH1cblx0fSk7XG52YXIgJGF1dGhvciRwcm9qZWN0JFNoYXJlZCR1cGRhdGUgPSBGMihcblx0ZnVuY3Rpb24gKG1zZywgbW9kZWwpIHtcblx0XHRzd2l0Y2ggKG1zZy4kKSB7XG5cdFx0XHRjYXNlICdOb09wJzpcblx0XHRcdFx0cmV0dXJuIG1vZGVsO1xuXHRcdFx0Y2FzZSAnVXBkYXRlVGV4dEZpZWxkJzpcblx0XHRcdFx0dmFyIHRleHQgPSBtc2cuYTtcblx0XHRcdFx0cmV0dXJuIF9VdGlsc191cGRhdGUoXG5cdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0e3RleHRGaWVsZDogdGV4dH0pO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dmFyIHVybCA9IG1zZy5hO1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRtb2RlbCxcblx0XHRcdFx0XHR7dXJsOiB1cmx9KTtcblx0XHR9XG5cdH0pO1xudmFyICRhdXRob3IkcHJvamVjdCRNYWluJHVwZGF0ZSA9IEYyKFxuXHRmdW5jdGlvbiAobXNnLCBtb2RlbCkge1xuXHRcdHZhciBzaGFyZWQgPSBtb2RlbC5zaGFyZWQ7XG5cdFx0c3dpdGNoIChtc2cuJCkge1xuXHRcdFx0Y2FzZSAnTm9PcCc6XG5cdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKG1vZGVsLCAkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmUpO1xuXHRcdFx0Y2FzZSAnTGlua0NsaWNrZWQnOlxuXHRcdFx0XHRpZiAobXNnLmEuJCA9PT0gJ0ludGVybmFsJykge1xuXHRcdFx0XHRcdHZhciB1cmwgPSBtc2cuYS5hO1xuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0JGF1dGhvciRwcm9qZWN0JFJvdXRlJHB1c2hVcmwsXG5cdFx0XHRcdFx0XHRcdHNoYXJlZC5rZXksXG5cdFx0XHRcdFx0XHRcdCRhdXRob3IkcHJvamVjdCRSb3V0ZSRwYXJzZVVybCh1cmwpKSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dmFyIGhyZWYgPSBtc2cuYS5hO1xuXHRcdFx0XHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHQkZWxtJGJyb3dzZXIkQnJvd3NlciROYXZpZ2F0aW9uJGxvYWQoaHJlZikpO1xuXHRcdFx0XHR9XG5cdFx0XHRjYXNlICdVcmxDaGFuZ2VkJzpcblx0XHRcdFx0dmFyIHVybCA9IG1zZy5hO1xuXHRcdFx0XHR2YXIgX3YxID0gJGF1dGhvciRwcm9qZWN0JFBhZ2VzJGZyb21Sb3V0ZShcblx0XHRcdFx0XHQkYXV0aG9yJHByb2plY3QkUm91dGUkcGFyc2VVcmwodXJsKSk7XG5cdFx0XHRcdHZhciBwYWdlID0gX3YxLmE7XG5cdFx0XHRcdHZhciBjbWQgPSBfdjEuYjtcblx0XHRcdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHRcdFx0X1V0aWxzX3VwZGF0ZShcblx0XHRcdFx0XHRcdG1vZGVsLFxuXHRcdFx0XHRcdFx0e3BhZ2U6IHBhZ2V9KSxcblx0XHRcdFx0XHRBMigkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG1hcCwgJGF1dGhvciRwcm9qZWN0JE1haW4kUGFnZXNNc2csIGNtZCkpO1xuXHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0dmFyIHBhZ2VzTXNnID0gbXNnLmE7XG5cdFx0XHRcdHZhciBfdjIgPSBBMygkYXV0aG9yJHByb2plY3QkUGFnZXMkdXBkYXRlLCBwYWdlc01zZywgbW9kZWwucGFnZSwgc2hhcmVkKTtcblx0XHRcdFx0dmFyIG5ld1BhZ2UgPSBfdjIuYTtcblx0XHRcdFx0dmFyIGNtZCA9IF92Mi5iO1xuXHRcdFx0XHR2YXIgc2hhcmVkTXNnID0gX3YyLmM7XG5cdFx0XHRcdHZhciBuZXdTaGFyZWQgPSBBMigkYXV0aG9yJHByb2plY3QkU2hhcmVkJHVwZGF0ZSwgc2hhcmVkTXNnLCBzaGFyZWQpO1xuXHRcdFx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdFx0XHRfVXRpbHNfdXBkYXRlKFxuXHRcdFx0XHRcdFx0bW9kZWwsXG5cdFx0XHRcdFx0XHR7cGFnZTogbmV3UGFnZSwgc2hhcmVkOiBuZXdTaGFyZWR9KSxcblx0XHRcdFx0XHRBMigkZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG1hcCwgJGF1dGhvciRwcm9qZWN0JE1haW4kUGFnZXNNc2csIGNtZCkpO1xuXHRcdH1cblx0fSk7XG52YXIgJGVsbSRjb3JlJFR1cGxlJG1hcFNlY29uZCA9IEYyKFxuXHRmdW5jdGlvbiAoZnVuYywgX3YwKSB7XG5cdFx0dmFyIHggPSBfdjAuYTtcblx0XHR2YXIgeSA9IF92MC5iO1xuXHRcdHJldHVybiBfVXRpbHNfVHVwbGUyKFxuXHRcdFx0eCxcblx0XHRcdGZ1bmMoeSkpO1xuXHR9KTtcbnZhciAkYXV0aG9yJHByb2plY3QkUGFnZXMkTm90Rm91bmQkR29Ub0hvbWUgPSB7JDogJ0dvVG9Ib21lJ307XG52YXIgJGVsbSRodG1sJEh0bWwkc2VjdGlvbiA9IF9WaXJ0dWFsRG9tX25vZGUoJ3NlY3Rpb24nKTtcbnZhciAkYXV0aG9yJHByb2plY3QkUGFnZXMkTm90Rm91bmQkdmlld1BhZ2UgPSBBMihcblx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRfTGlzdF9OaWwsXG5cdF9MaXN0X2Zyb21BcnJheShcblx0XHRbXG5cdFx0XHRBMihcblx0XHRcdCRlbG0kaHRtbCRIdG1sJHNlY3Rpb24sXG5cdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRwLFxuXHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJ09wcyEgQWxnbyBkZSBlcnJhZG8gYWNvbnRlY2V1ISBWb2PDqiB0ZW50b3UgYWNlc3NhciB1bSByZWN1cnNvIHF1ZSBuw6NvIGV4aXN0ZSEnKVxuXHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkYnV0dG9uLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2soJGF1dGhvciRwcm9qZWN0JFBhZ2VzJE5vdEZvdW5kJEdvVG9Ib21lKVxuXHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnSXIgcGFyYSB0ZWxhIGluaWNpYWwnKVxuXHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdF0pKVxuXHRcdF0pKTtcbnZhciAkYXV0aG9yJHByb2plY3QkUGFnZXMkTm90Rm91bmQkdmlldyA9IF9VdGlsc19UdXBsZTIoJ1DDoWdpbmEgbsOjbyBlbmNvbnRyYWRhIScsICRhdXRob3IkcHJvamVjdCRQYWdlcyROb3RGb3VuZCR2aWV3UGFnZSk7XG52YXIgJGF1dGhvciRwcm9qZWN0JFBhZ2VzJE9uZSRHb1RvUGFnZTIgPSB7JDogJ0dvVG9QYWdlMid9O1xudmFyICRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkYWx0ID0gJGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSgnYWx0Jyk7XG52YXIgJGVsbSRodG1sJEh0bWwkZm9ybSA9IF9WaXJ0dWFsRG9tX25vZGUoJ2Zvcm0nKTtcbnZhciAkZWxtJGh0bWwkSHRtbCRoMiA9IF9WaXJ0dWFsRG9tX25vZGUoJ2gyJyk7XG52YXIgJGVsbSRodG1sJEh0bWwkaDMgPSBfVmlydHVhbERvbV9ub2RlKCdoMycpO1xudmFyICRlbG0kaHRtbCRIdG1sJGhlYWRlciA9IF9WaXJ0dWFsRG9tX25vZGUoJ2hlYWRlcicpO1xudmFyICRlbG0kaHRtbCRIdG1sJGltZyA9IF9WaXJ0dWFsRG9tX25vZGUoJ2ltZycpO1xudmFyICRlbG0kaHRtbCRIdG1sJG5hdiA9IF9WaXJ0dWFsRG9tX25vZGUoJ25hdicpO1xudmFyICRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkcGxhY2Vob2xkZXIgPSAkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHN0cmluZ1Byb3BlcnR5KCdwbGFjZWhvbGRlcicpO1xudmFyICRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3JjID0gZnVuY3Rpb24gKHVybCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzdHJpbmdQcm9wZXJ0eSxcblx0XHQnc3JjJyxcblx0XHRfVmlydHVhbERvbV9ub0phdmFTY3JpcHRPckh0bWxVcmkodXJsKSk7XG59O1xudmFyICRhdXRob3IkcHJvamVjdCRQYWdlcyRPbmUkaGVhZGVyUGFnZSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0JGVsbSRodG1sJEh0bWwkaGVhZGVyLFxuXHRcdF9MaXN0X05pbCxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRuYXYsXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCduYXZUb3AnKVxuXHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdsb2dvQW5kU2VhcmNoJylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdzZWFyY2gnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkYSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2FMb2dvJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGhyZWYoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC8nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRpbWcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdsb2dvSGVhZGVyJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzcmMoJ3NvdXJjZS9sb2dvLnN2ZycpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkYWx0KCdLRUxQSUUnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X05pbClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdhbGxTZWFyY2hCYXInKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkZm9ybSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2Zvcm1TZWFyY2gnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRidXR0b24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdidXR0b25TZWFyY2gnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHR5cGVfKCdzdWJtaXQnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGFsdCgnU2VhcmNoJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRpbWcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHNyYygnc291cmNlL3NlYXJjaC5zdmcnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfTmlsKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2lucHV0U2VhcmNoJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRpbnB1dCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ19pbnB1dCcpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHBsYWNlaG9sZGVyKCdTZWFyY2ggZnJlZSBoaWdoLXJlc29sdXRpb24gcGhvdG9zJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X05pbCksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygncmVhY3QtYXV0b1doYXRldmVyJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X05pbClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdWaXN1YWxTZWFyY2gnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGJ1dHRvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2J1dHRvblZpc3VhbFNlYXJjaCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRpbWcsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHNyYygnc291cmNlL3NjYW4uc3ZnJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGFsdCgnVmlzdWFsIFNlYXJjaCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X05pbClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2NlbnRlckhlYWRlcicpXG5cdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdWwsXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCd1bEhlYWRlcicpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRsaSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2xpTmFtZVBhZ2UnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygnYU5hbWVQYWdlJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRoMixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCdIb21lJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRsaSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2xpQnJhbmRzJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkYSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2FCcmFuZHMnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGhyZWYoJy9icmFuZHMnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCdCcmFuZHMnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHNwYW4sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdzcGFuQnJhbmRzJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJ05ldycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkbGksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdsaURvdHMnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdkaXZEb3RzJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRidXR0b24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdidXR0b25Eb3RzJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGltZyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3JjKCdzb3VyY2UvZG90cy5zdmcnKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkYWx0KCcuLi4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9OaWwpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0QTIoJGVsbSRodG1sJEh0bWwkZGl2LCBfTGlzdF9OaWwsIF9MaXN0X05pbClcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdyaWdodEhlYWRlcicpXG5cdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X05pbCxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdzdWJtaXRQaG90bycpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGJ1dHRvbixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2J1dHRvblN1Ym1pdFBob3RvJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRpZCgnYVN1Ym1pdFBob3RvJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaHJlZignL0xvZ2luJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnU3VibWl0IFBob3RvJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRkaXYsIF9MaXN0X05pbCwgX0xpc3RfTmlsKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaWQoJ3ZlcnRpY2FsTGVmdCcpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRidXR0b24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdidXR0b25Mb2dpbicpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGEsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdhTG9naW4nKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGhyZWYoJy9Mb2dpbicpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnTG9naW4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRidXR0b24sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdidXR0b25Kb2luJylcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkYSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ2FKb2luJyksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRocmVmKCcvTG9naW4nKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJ0pvaW4gRnJlZScpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRcdF0pKVxuXHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaWQoJ3RhZ3MnKVxuXHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRoMyxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaWQoJ3ZlcnRpY2FsUmlnaHQnKVxuXHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJ1RhZ3MnKVxuXHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGxpLFxuXHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygnIGxpc3RUYWdzJylcblx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRocmVmKCcqL3QvbmFtZU9mVGFnJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnUGVvcGxlJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRocmVmKCcqL3QvbmFtZU9mVGFnJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnRmlsbScpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkYSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaHJlZignKi90L25hbWVPZlRhZycpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJ01vdmllJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRocmVmKCcqL3QvbmFtZU9mVGFnJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnTmF0dXJlJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRocmVmKCcqL3QvbmFtZU9mVGFnJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnRGFuY2UnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGEsXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGhyZWYoJyovdC9uYW1lT2ZUYWcnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCdIYXBweScpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkYSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaHJlZignKi90L25hbWVPZlRhZycpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJ0Zvb2QnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGEsXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGhyZWYoJyovdC9uYW1lT2ZUYWcnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCdSb21hbmNlJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRocmVmKCcqL3QvbmFtZU9mVGFnJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnSGlzdG9yeScpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkYSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaHJlZignKi90L25hbWVPZlRhZycpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJ0N1bHR1cmUnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGEsXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGhyZWYoJyovdC9uYW1lT2ZUYWcnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCdBbmltYWxzJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRocmVmKCcqL3QvbmFtZU9mVGFnJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnTEdCVFErJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRocmVmKCcqL3QvbmFtZU9mVGFnJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnRmFtaWx5Jylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRocmVmKCcqL3QvbmFtZU9mVGFnJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnTWVtZScpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkYSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkaHJlZignKi90L25hbWVPZlRhZycpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJ0NvdW50cnknKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGEsXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGhyZWYoJyovdC9uYW1lT2ZUYWcnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCdPZmZpY2VzJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRocmVmKCcqL3QvbmFtZU9mVGFnJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnTWF0ZXJpYWxpemUnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGEsXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGhyZWYoJyovdC9uYW1lT2ZUYWcnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCdBcnQnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGEsXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGhyZWYoJyovdC9uYW1lT2ZUYWcnKVxuXHRcdFx0XHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCdEcmF3Jylcblx0XHRcdFx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRhLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRocmVmKCcqL3QvbmFtZU9mVGFnJylcblx0XHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnRmFybScpXG5cdFx0XHRcdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XSkpXG5cdFx0XHRdKSk7XG59O1xudmFyICRhdXRob3IkcHJvamVjdCRQYWdlcyRPbmUkaW1nRGlzcGxheSA9IGZ1bmN0aW9uIChtb2RlbCkge1xuXHRyZXR1cm4gQTIoXG5cdFx0JGVsbSRodG1sJEh0bWwkZGl2LFxuXHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFtcblx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRjbGFzcygnaW1ncycpXG5cdFx0XHRdKSxcblx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRbXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRpbWcsXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHNyYygnaW1hZ2VzLzAxLmpwZWcnKVxuXHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRfTGlzdF9OaWwpLFxuXHRcdFx0XHRBMihcblx0XHRcdFx0JGVsbSRodG1sJEh0bWwkaW1nLFxuXHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkQXR0cmlidXRlcyRzcmMoJ2ltYWdlcy8wMi5qcGVnJylcblx0XHRcdFx0XHRdKSxcblx0XHRcdFx0X0xpc3RfTmlsKSxcblx0XHRcdFx0QTIoXG5cdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGltZyxcblx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkc3JjKCdpbWFnZXMvMDMuanBlZycpXG5cdFx0XHRcdFx0XSksXG5cdFx0XHRcdF9MaXN0X05pbCksXG5cdFx0XHRcdEEyKFxuXHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRpbWcsXG5cdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJHNyYygnaW1hZ2VzLzA0LmpwZWcnKVxuXHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRfTGlzdF9OaWwpXG5cdFx0XHRdKSk7XG59O1xudmFyICRhdXRob3IkcHJvamVjdCRQYWdlcyRPbmUkdmlld1BhZ2UgPSBGMihcblx0ZnVuY3Rpb24gKG1vZGVsLCBzaGFyZWQpIHtcblx0XHRyZXR1cm4gQTIoXG5cdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRBdHRyaWJ1dGVzJGNsYXNzKCdib2R5RWxtJylcblx0XHRcdFx0XSksXG5cdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFtcblx0XHRcdFx0XHQkYXV0aG9yJHByb2plY3QkUGFnZXMkT25lJGhlYWRlclBhZ2UobW9kZWwpLFxuXHRcdFx0XHRcdCRhdXRob3IkcHJvamVjdCRQYWdlcyRPbmUkaW1nRGlzcGxheShtb2RlbCksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkYnV0dG9uLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2soJGF1dGhvciRwcm9qZWN0JFBhZ2VzJE9uZSRHb1RvUGFnZTIpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJ0dvIHRvIHBhZ2UgMiEnKVxuXHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdF0pKTtcblx0fSk7XG52YXIgJGF1dGhvciRwcm9qZWN0JFBhZ2VzJE9uZSR2aWV3ID0gRjIoXG5cdGZ1bmN0aW9uIChtb2RlbCwgc2hhcmVkKSB7XG5cdFx0cmV0dXJuIF9VdGlsc19UdXBsZTIoXG5cdFx0XHQnSG9tZScsXG5cdFx0XHRBMigkYXV0aG9yJHByb2plY3QkUGFnZXMkT25lJHZpZXdQYWdlLCBtb2RlbCwgc2hhcmVkKSk7XG5cdH0pO1xudmFyICRhdXRob3IkcHJvamVjdCRQYWdlcyRUd28kRGVjcmVtZW50ID0geyQ6ICdEZWNyZW1lbnQnfTtcbnZhciAkYXV0aG9yJHByb2plY3QkUGFnZXMkVHdvJERlY3JlbWVudFNoYXJlZCA9IHskOiAnRGVjcmVtZW50U2hhcmVkJ307XG52YXIgJGF1dGhvciRwcm9qZWN0JFBhZ2VzJFR3byRHb1RvUGFnZTEgPSB7JDogJ0dvVG9QYWdlMSd9O1xudmFyICRhdXRob3IkcHJvamVjdCRQYWdlcyRUd28kSW5jcmVtZW50ID0geyQ6ICdJbmNyZW1lbnQnfTtcbnZhciAkYXV0aG9yJHByb2plY3QkUGFnZXMkVHdvJEluY3JlbWVudFNoYXJlZCA9IHskOiAnSW5jcmVtZW50U2hhcmVkJ307XG52YXIgJGF1dGhvciRwcm9qZWN0JFBhZ2VzJFR3byR2aWV3UGFnZSA9IEYyKFxuXHRmdW5jdGlvbiAobW9kZWwsIHNoYXJlZCkge1xuXHRcdHJldHVybiBBMihcblx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdF9MaXN0X05pbCxcblx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0W1xuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ3RpdGxlJylcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnQ29udGFkb3IgbG9jYWw6ICcpXG5cdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkYnV0dG9uLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2soJGF1dGhvciRwcm9qZWN0JFBhZ2VzJFR3byRJbmNyZW1lbnQpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJysnKVxuXHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KFxuXHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQobW9kZWwuY291bnRlcikpXG5cdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkYnV0dG9uLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2soJGF1dGhvciRwcm9qZWN0JFBhZ2VzJFR3byREZWNyZW1lbnQpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJy0nKVxuXHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEF0dHJpYnV0ZXMkY2xhc3MoJ3RpdGxlJylcblx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnUXVhbnRpZGFkZSBkZSBsZXRyYXMgZGEgcGFsYXZyYSBkYSBTaGFyZWQ6ICcpXG5cdFx0XHRcdFx0XHRdKSksXG5cdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkYnV0dG9uLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkRXZlbnRzJG9uQ2xpY2soJGF1dGhvciRwcm9qZWN0JFBhZ2VzJFR3byRJbmNyZW1lbnRTaGFyZWQpXG5cdFx0XHRcdFx0XHRdKSxcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJHRleHQoJysnKVxuXHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGRpdixcblx0XHRcdFx0XHRfTGlzdF9OaWwsXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KFxuXHRcdFx0XHRcdFx0XHQkZWxtJGNvcmUkU3RyaW5nJGZyb21JbnQoXG5cdFx0XHRcdFx0XHRcdFx0JGVsbSRjb3JlJFN0cmluZyRsZW5ndGgoc2hhcmVkLnRleHRGaWVsZCkpKVxuXHRcdFx0XHRcdFx0XSkpLFxuXHRcdFx0XHRcdEEyKFxuXHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGJ1dHRvbixcblx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRbXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKCRhdXRob3IkcHJvamVjdCRQYWdlcyRUd28kRGVjcmVtZW50U2hhcmVkKVxuXHRcdFx0XHRcdFx0XSksXG5cdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCR0ZXh0KCctJylcblx0XHRcdFx0XHRcdF0pKSxcblx0XHRcdFx0XHRBMihcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRkaXYsXG5cdFx0XHRcdFx0X0xpc3RfTmlsLFxuXHRcdFx0XHRcdF9MaXN0X2Zyb21BcnJheShcblx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0QTIoXG5cdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJGJ1dHRvbixcblx0XHRcdFx0XHRcdFx0X0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0XHRcdFx0XHRcdFtcblx0XHRcdFx0XHRcdFx0XHRcdCRlbG0kaHRtbCRIdG1sJEV2ZW50cyRvbkNsaWNrKCRhdXRob3IkcHJvamVjdCRQYWdlcyRUd28kR29Ub1BhZ2UxKVxuXHRcdFx0XHRcdFx0XHRcdF0pLFxuXHRcdFx0XHRcdFx0XHRfTGlzdF9mcm9tQXJyYXkoXG5cdFx0XHRcdFx0XHRcdFx0W1xuXHRcdFx0XHRcdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkdGV4dCgnR28gdG8gcGFnZSAxIScpXG5cdFx0XHRcdFx0XHRcdFx0XSkpXG5cdFx0XHRcdFx0XHRdKSlcblx0XHRcdFx0XSkpO1xuXHR9KTtcbnZhciAkYXV0aG9yJHByb2plY3QkUGFnZXMkVHdvJHZpZXcgPSBGMihcblx0ZnVuY3Rpb24gKG1vZGVsLCBzaGFyZWQpIHtcblx0XHRyZXR1cm4gX1V0aWxzX1R1cGxlMihcblx0XHRcdCdQw6FnaW5hIDInLFxuXHRcdFx0QTIoJGF1dGhvciRwcm9qZWN0JFBhZ2VzJFR3byR2aWV3UGFnZSwgbW9kZWwsIHNoYXJlZCkpO1xuXHR9KTtcbnZhciAkYXV0aG9yJHByb2plY3QkUGFnZXMkdmlldyA9IEYyKFxuXHRmdW5jdGlvbiAobW9kZWwsIHNoYXJlZCkge1xuXHRcdHN3aXRjaCAobW9kZWwuJCkge1xuXHRcdFx0Y2FzZSAnUGFnZU9uZSc6XG5cdFx0XHRcdHZhciBwYWdlT25lTW9kZWwgPSBtb2RlbC5hO1xuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJFR1cGxlJG1hcFNlY29uZCxcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRtYXAoJGF1dGhvciRwcm9qZWN0JFBhZ2VzJFBhZ2VPbmVNc2cpLFxuXHRcdFx0XHRcdEEyKCRhdXRob3IkcHJvamVjdCRQYWdlcyRPbmUkdmlldywgcGFnZU9uZU1vZGVsLCBzaGFyZWQpKTtcblx0XHRcdGNhc2UgJ1BhZ2VUd28nOlxuXHRcdFx0XHR2YXIgcGFnZVR3b01vZGVsID0gbW9kZWwuYTtcblx0XHRcdFx0cmV0dXJuIEEyKFxuXHRcdFx0XHRcdCRlbG0kY29yZSRUdXBsZSRtYXBTZWNvbmQsXG5cdFx0XHRcdFx0JGVsbSRodG1sJEh0bWwkbWFwKCRhdXRob3IkcHJvamVjdCRQYWdlcyRQYWdlVHdvTXNnKSxcblx0XHRcdFx0XHRBMigkYXV0aG9yJHByb2plY3QkUGFnZXMkVHdvJHZpZXcsIHBhZ2VUd29Nb2RlbCwgc2hhcmVkKSk7XG5cdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRyZXR1cm4gQTIoXG5cdFx0XHRcdFx0JGVsbSRjb3JlJFR1cGxlJG1hcFNlY29uZCxcblx0XHRcdFx0XHQkZWxtJGh0bWwkSHRtbCRtYXAoJGF1dGhvciRwcm9qZWN0JFBhZ2VzJE5vdEZvdW5kTXNnKSxcblx0XHRcdFx0XHQkYXV0aG9yJHByb2plY3QkUGFnZXMkTm90Rm91bmQkdmlldyk7XG5cdFx0fVxuXHR9KTtcbnZhciAkYXV0aG9yJHByb2plY3QkTWFpbiR2aWV3ID0gZnVuY3Rpb24gKG1vZGVsKSB7XG5cdHZhciBfdjAgPSBBMigkYXV0aG9yJHByb2plY3QkUGFnZXMkdmlldywgbW9kZWwucGFnZSwgbW9kZWwuc2hhcmVkKTtcblx0dmFyIHRpdGxlID0gX3YwLmE7XG5cdHZhciBib2R5ID0gX3YwLmI7XG5cdHJldHVybiB7XG5cdFx0Ym9keTogX0xpc3RfZnJvbUFycmF5KFxuXHRcdFx0W1xuXHRcdFx0XHRBMigkZWxtJGh0bWwkSHRtbCRtYXAsICRhdXRob3IkcHJvamVjdCRNYWluJFBhZ2VzTXNnLCBib2R5KVxuXHRcdFx0XSksXG5cdFx0dGl0bGU6ICdLRUxQSUUgLSAnICsgdGl0bGVcblx0fTtcbn07XG52YXIgJGF1dGhvciRwcm9qZWN0JE1haW4kbWFpbiA9ICRlbG0kYnJvd3NlciRCcm93c2VyJGFwcGxpY2F0aW9uKFxuXHR7XG5cdFx0aW5pdDogJGF1dGhvciRwcm9qZWN0JE1haW4kaW5pdCxcblx0XHRvblVybENoYW5nZTogJGF1dGhvciRwcm9qZWN0JE1haW4kVXJsQ2hhbmdlZCxcblx0XHRvblVybFJlcXVlc3Q6ICRhdXRob3IkcHJvamVjdCRNYWluJExpbmtDbGlja2VkLFxuXHRcdHN1YnNjcmlwdGlvbnM6IGZ1bmN0aW9uIChfdjApIHtcblx0XHRcdHJldHVybiAkZWxtJGNvcmUkUGxhdGZvcm0kU3ViJG5vbmU7XG5cdFx0fSxcblx0XHR1cGRhdGU6ICRhdXRob3IkcHJvamVjdCRNYWluJHVwZGF0ZSxcblx0XHR2aWV3OiAkYXV0aG9yJHByb2plY3QkTWFpbiR2aWV3XG5cdH0pO1xuX1BsYXRmb3JtX2V4cG9ydCh7J01haW4nOnsnaW5pdCc6JGF1dGhvciRwcm9qZWN0JE1haW4kbWFpbihcblx0JGVsbSRqc29uJEpzb24kRGVjb2RlJHN1Y2NlZWQoX1V0aWxzX1R1cGxlMCkpKHtcInZlcnNpb25zXCI6e1wiZWxtXCI6XCIwLjE5LjFcIn0sXCJ0eXBlc1wiOntcIm1lc3NhZ2VcIjpcIk1haW4uTXNnXCIsXCJhbGlhc2VzXCI6e1wiVXJsLlVybFwiOntcImFyZ3NcIjpbXSxcInR5cGVcIjpcInsgcHJvdG9jb2wgOiBVcmwuUHJvdG9jb2wsIGhvc3QgOiBTdHJpbmcuU3RyaW5nLCBwb3J0XyA6IE1heWJlLk1heWJlIEJhc2ljcy5JbnQsIHBhdGggOiBTdHJpbmcuU3RyaW5nLCBxdWVyeSA6IE1heWJlLk1heWJlIFN0cmluZy5TdHJpbmcsIGZyYWdtZW50IDogTWF5YmUuTWF5YmUgU3RyaW5nLlN0cmluZyB9XCJ9fSxcInVuaW9uc1wiOntcIk1haW4uTXNnXCI6e1wiYXJnc1wiOltdLFwidGFnc1wiOntcIk5vT3BcIjpbXSxcIkxpbmtDbGlja2VkXCI6W1wiQnJvd3Nlci5VcmxSZXF1ZXN0XCJdLFwiVXJsQ2hhbmdlZFwiOltcIlVybC5VcmxcIl0sXCJQYWdlc01zZ1wiOltcIlBhZ2VzLk1zZ1wiXX19LFwiQmFzaWNzLkludFwiOntcImFyZ3NcIjpbXSxcInRhZ3NcIjp7XCJJbnRcIjpbXX19LFwiTWF5YmUuTWF5YmVcIjp7XCJhcmdzXCI6W1wiYVwiXSxcInRhZ3NcIjp7XCJKdXN0XCI6W1wiYVwiXSxcIk5vdGhpbmdcIjpbXX19LFwiUGFnZXMuTXNnXCI6e1wiYXJnc1wiOltdLFwidGFnc1wiOntcIlBhZ2VPbmVNc2dcIjpbXCJQYWdlcy5PbmUuTXNnXCJdLFwiUGFnZVR3b01zZ1wiOltcIlBhZ2VzLlR3by5Nc2dcIl0sXCJOb3RGb3VuZE1zZ1wiOltcIlBhZ2VzLk5vdEZvdW5kLk1zZ1wiXX19LFwiVXJsLlByb3RvY29sXCI6e1wiYXJnc1wiOltdLFwidGFnc1wiOntcIkh0dHBcIjpbXSxcIkh0dHBzXCI6W119fSxcIlN0cmluZy5TdHJpbmdcIjp7XCJhcmdzXCI6W10sXCJ0YWdzXCI6e1wiU3RyaW5nXCI6W119fSxcIkJyb3dzZXIuVXJsUmVxdWVzdFwiOntcImFyZ3NcIjpbXSxcInRhZ3NcIjp7XCJJbnRlcm5hbFwiOltcIlVybC5VcmxcIl0sXCJFeHRlcm5hbFwiOltcIlN0cmluZy5TdHJpbmdcIl19fSxcIlBhZ2VzLk5vdEZvdW5kLk1zZ1wiOntcImFyZ3NcIjpbXSxcInRhZ3NcIjp7XCJHb1RvSG9tZVwiOltdfX0sXCJQYWdlcy5PbmUuTXNnXCI6e1wiYXJnc1wiOltdLFwidGFnc1wiOntcIklucHV0VGV4dEZpZWxkXCI6W1wiU3RyaW5nLlN0cmluZ1wiXSxcIklucHV0U2hhcmVkXCI6W1wiU3RyaW5nLlN0cmluZ1wiXSxcIkdvVG9QYWdlMlwiOltdfX0sXCJQYWdlcy5Ud28uTXNnXCI6e1wiYXJnc1wiOltdLFwidGFnc1wiOntcIkluY3JlbWVudFwiOltdLFwiRGVjcmVtZW50XCI6W10sXCJJbmNyZW1lbnRTaGFyZWRcIjpbXSxcIkRlY3JlbWVudFNoYXJlZFwiOltdLFwiR29Ub1BhZ2UxXCI6W119fX19fSl9fSk7XG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vIEhNUiBCRUdJTiAvLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBPcmlnaW5hbCBBdXRob3I6IEZsdXggWHUgQGZsdXh4dVxuKi9cblxuLypcbiAgICBBIG5vdGUgYWJvdXQgdGhlIGVudmlyb25tZW50IHRoYXQgdGhpcyBjb2RlIHJ1bnMgaW4uLi5cblxuICAgIGFzc3VtZWQgZ2xvYmFsczpcbiAgICAgICAgLSBgbW9kdWxlYCAoZnJvbSBOb2RlLmpzIG1vZHVsZSBzeXN0ZW0gYW5kIHdlYnBhY2spXG5cbiAgICBhc3N1bWVkIGluIHNjb3BlIGFmdGVyIGluamVjdGlvbiBpbnRvIHRoZSBFbG0gSUlGRTpcbiAgICAgICAgLSBgc2NvcGVgIChoYXMgYW4gJ0VsbScgcHJvcGVydHkgd2hpY2ggY29udGFpbnMgdGhlIHB1YmxpYyBFbG0gQVBJKVxuICAgICAgICAtIHZhcmlvdXMgZnVuY3Rpb25zIGRlZmluZWQgYnkgRWxtIHdoaWNoIHdlIGhhdmUgdG8gaG9vayBzdWNoIGFzIGBfUGxhdGZvcm1faW5pdGlhbGl6ZWAgYW5kIGBfU2NoZWR1bGVyX2JpbmRpbmdgXG4gKi9cblxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgICAvL3BvbHlmaWxsIGZvciBJRTogaHR0cHM6Ly9naXRodWIuY29tL2ZsdXh4dS9lbG0taG90LWxvYWRlci9pc3N1ZXMvMTZcbiAgICAgICAgaWYgKHR5cGVvZiBPYmplY3QuYXNzaWduICE9ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24gPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgJ3VzZSBzdHJpY3QnO1xuICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdDYW5ub3QgY29udmVydCB1bmRlZmluZWQgb3IgbnVsbCB0byBvYmplY3QnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YXJnZXQgPSBPYmplY3QodGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpbmRleCA9IDE7IGluZGV4IDwgYXJndW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBFbG0gMC4xOS4xIGludHJvZHVjZWQgYSAnJCcgcHJlZml4IGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIHN5bWJvbHMgaXQgZW1pdHMsXG4gICAgICAgIC8vIGFuZCB3ZSBjaGVjayBmb3IgYE1heWJlLkp1c3RgIGJlY2F1c2Ugd2UgZXhwZWN0IGl0IHRvIGJlIHByZXNlbnQgaW4gYWxsIEVsbSBwcm9ncmFtcy5cbiAgICAgICAgdmFyIGVsbVZlcnNpb247XG4gICAgICAgIGlmICh0eXBlb2YgZWxtJGNvcmUkTWF5YmUkSnVzdCAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBlbG1WZXJzaW9uID0gJzAuMTkuMCc7XG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiAkZWxtJGNvcmUkTWF5YmUkSnVzdCAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICBlbG1WZXJzaW9uID0gJzAuMTkuMSc7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBkZXRlcm1pbmUgRWxtIHZlcnNpb25cIik7XG5cbiAgICAgICAgZnVuY3Rpb24gZWxtU3ltYm9sKHN5bWJvbCkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGVsbVZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnMC4xOS4wJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBldmFsKHN5bWJvbCk7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJzAuMTkuMSc6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXZhbCgnJCcgKyBzeW1ib2wpO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgcmVzb2x2ZSAnICsgc3ltYm9sICsgJy4gRWxtIHZlcnNpb24gdW5rbm93biEnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIFJlZmVyZW5jZUVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaW5zdGFuY2VzID0gbW9kdWxlLmhvdC5kYXRhXG4gICAgICAgICAgICA/IG1vZHVsZS5ob3QuZGF0YS5pbnN0YW5jZXMgfHwge31cbiAgICAgICAgICAgIDoge307XG4gICAgICAgIHZhciB1aWQgPSBtb2R1bGUuaG90LmRhdGFcbiAgICAgICAgICAgID8gbW9kdWxlLmhvdC5kYXRhLnVpZCB8fCAwXG4gICAgICAgICAgICA6IDA7XG5cbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKGluc3RhbmNlcykubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBsb2coXCJbZWxtLWhvdF0gRW5hYmxlZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjYW5jZWxsZXJzID0gW107XG5cbiAgICAgICAgLy8gVGhlc2UgMiB2YXJpYWJsZXMgYWN0IGFzIGR5bmFtaWNhbGx5LXNjb3BlZCB2YXJpYWJsZXMgd2hpY2ggYXJlIHNldCBvbmx5IHdoZW4gdGhlXG4gICAgICAgIC8vIEVsbSBtb2R1bGUncyBob29rZWQgaW5pdCBmdW5jdGlvbiBpcyBjYWxsZWQuXG4gICAgICAgIHZhciBpbml0aWFsaXppbmdJbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIHZhciBzd2FwcGluZ0luc3RhbmNlID0gbnVsbDtcblxuICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGRhdGEuaW5zdGFuY2VzID0gaW5zdGFuY2VzO1xuICAgICAgICAgICAgZGF0YS51aWQgPSB1aWQ7XG5cbiAgICAgICAgICAgIC8vIENsZWFudXAgcGVuZGluZyBhc3luYyB0YXNrc1xuXG4gICAgICAgICAgICAvLyBGaXJzdCwgbWFrZSBzdXJlIHRoYXQgbm8gbmV3IHRhc2tzIGNhbiBiZSBzdGFydGVkIHVudGlsIHdlIGZpbmlzaCByZXBsYWNpbmcgdGhlIGNvZGVcbiAgICAgICAgICAgIF9TY2hlZHVsZXJfYmluZGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX1NjaGVkdWxlcl9mYWlsKG5ldyBFcnJvcignW2VsbS1ob3RdIEluYWN0aXZlIEVsbSBpbnN0YW5jZS4nKSlcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFNlY29uZCwga2lsbCBwZW5kaW5nIHRhc2tzIGJlbG9uZ2luZyB0byB0aGUgb2xkIGluc3RhbmNlXG4gICAgICAgICAgICBpZiAoY2FuY2VsbGVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsb2coJ1tlbG0taG90XSBLaWxsaW5nICcgKyBjYW5jZWxsZXJzLmxlbmd0aCArICcgcnVubmluZyBwcm9jZXNzZXMuLi4nKTtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxsZXJzLmZvckVhY2goZnVuY3Rpb24gKGNhbmNlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdbZWxtLWhvdF0gS2lsbCBwcm9jZXNzIGVycm9yOiAnICsgZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGxvZyhtZXNzYWdlKSB7XG4gICAgICAgICAgICBpZiAobW9kdWxlLmhvdC52ZXJib3NlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldElkKCkge1xuICAgICAgICAgICAgcmV0dXJuICsrdWlkO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmluZFB1YmxpY01vZHVsZXMocGFyZW50LCBwYXRoKSB7XG4gICAgICAgICAgICB2YXIgbW9kdWxlcyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIHZhciBjaGlsZCA9IHBhcmVudFtrZXldO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50UGF0aCA9IHBhdGggPyBwYXRoICsgJy4nICsga2V5IDoga2V5O1xuICAgICAgICAgICAgICAgIGlmICgnaW5pdCcgaW4gY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGN1cnJlbnRQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlOiBjaGlsZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVzID0gbW9kdWxlcy5jb25jYXQoZmluZFB1YmxpY01vZHVsZXMoY2hpbGQsIGN1cnJlbnRQYXRoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1vZHVsZXM7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZWdpc3Rlckluc3RhbmNlKGRvbU5vZGUsIGZsYWdzLCBwYXRoLCBwb3J0U3Vic2NyaWJlcywgcG9ydFNlbmRzKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBnZXRJZCgpO1xuXG4gICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICAgICAgZG9tTm9kZTogZG9tTm9kZSxcbiAgICAgICAgICAgICAgICBmbGFnczogZmxhZ3MsXG4gICAgICAgICAgICAgICAgcG9ydFN1YnNjcmliZXM6IHBvcnRTdWJzY3JpYmVzLFxuICAgICAgICAgICAgICAgIHBvcnRTZW5kczogcG9ydFNlbmRzLFxuICAgICAgICAgICAgICAgIGxhc3RTdGF0ZTogbnVsbCAvLyBsYXN0IEVsbSBhcHAgc3RhdGUgKHJvb3QgbW9kZWwpXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2VzW2lkXSA9IGluc3RhbmNlXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc0Z1bGxzY3JlZW5BcHAoKSB7XG4gICAgICAgICAgICAvLyBSZXR1cm5zIHRydWUgaWYgdGhlIEVsbSBhcHAgd2lsbCB0YWtlIG92ZXIgdGhlIGVudGlyZSBET00gYm9keS5cbiAgICAgICAgICAgIHJldHVybiB0eXBlb2YgZWxtU3ltYm9sKFwiZWxtJGJyb3dzZXIkQnJvd3NlciRhcHBsaWNhdGlvblwiKSAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgICAgICB8fCB0eXBlb2YgZWxtU3ltYm9sKFwiZWxtJGJyb3dzZXIkQnJvd3NlciRkb2N1bWVudFwiKSAhPT0gJ3VuZGVmaW5lZCc7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB3cmFwRG9tTm9kZShub2RlKSB7XG4gICAgICAgICAgICAvLyBXaGVuIGVtYmVkZGluZyBhbiBFbG0gYXBwIGludG8gYSBzcGVjaWZpYyBET00gbm9kZSwgRWxtIHdpbGwgcmVwbGFjZSB0aGUgcHJvdmlkZWRcbiAgICAgICAgICAgIC8vIERPTSBub2RlIHdpdGggdGhlIEVsbSBhcHAncyBjb250ZW50LiBXaGVuIHRoZSBFbG0gYXBwIGlzIGNvbXBpbGVkIG5vcm1hbGx5LCB0aGVcbiAgICAgICAgICAgIC8vIG9yaWdpbmFsIERPTSBub2RlIGlzIHJldXNlZCAoaXRzIGF0dHJpYnV0ZXMgYW5kIGNvbnRlbnQgY2hhbmdlcywgYnV0IHRoZSBvYmplY3RcbiAgICAgICAgICAgIC8vIGluIG1lbW9yeSByZW1haW5zIHRoZSBzYW1lKS4gQnV0IHdoZW4gY29tcGlsZWQgdXNpbmcgYC0tZGVidWdgLCBFbG0gd2lsbCBjb21wbGV0ZWx5XG4gICAgICAgICAgICAvLyBkZXN0cm95IHRoZSBvcmlnaW5hbCBET00gbm9kZSBhbmQgaW5zdGVhZCByZXBsYWNlIGl0IHdpdGggMiBicmFuZCBuZXcgbm9kZXM6IG9uZVxuICAgICAgICAgICAgLy8gZm9yIHlvdXIgRWxtIGFwcCdzIGNvbnRlbnQgYW5kIHRoZSBvdGhlciBmb3IgdGhlIEVsbSBkZWJ1Z2dlciBVSS4gSW4gdGhpcyBjYXNlLFxuICAgICAgICAgICAgLy8gaWYgeW91IGhlbGQgYSByZWZlcmVuY2UgdG8gdGhlIERPTSBub2RlIHByb3ZpZGVkIGZvciBlbWJlZGRpbmcsIGl0IHdvdWxkIGJlIG9ycGhhbmVkXG4gICAgICAgICAgICAvLyBhZnRlciBFbG0gbW9kdWxlIGluaXRpYWxpemF0aW9uLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFNvIGluIG9yZGVyIHRvIG1ha2UgYm90aCBjYXNlcyBjb25zaXN0ZW50IGFuZCBpc29sYXRlIHVzIGZyb20gY2hhbmdlcyBpbiBob3cgRWxtXG4gICAgICAgICAgICAvLyBkb2VzIHRoaXMsIHdlIHdpbGwgaW5zZXJ0IGEgZHVtbXkgbm9kZSB0byB3cmFwIHRoZSBub2RlIGZvciBlbWJlZGRpbmcgYW5kIGhvbGRcbiAgICAgICAgICAgIC8vIGEgcmVmZXJlbmNlIHRvIHRoZSBkdW1teSBub2RlLlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIFdlIHdpbGwgYWxzbyBwdXQgYSB0YWcgb24gdGhlIGR1bW15IG5vZGUgc28gdGhhdCB0aGUgRWxtIGRldmVsb3BlciBrbm93cyB3aG8gd2VudFxuICAgICAgICAgICAgLy8gYmVoaW5kIHRoZWlyIGJhY2sgYW5kIHJ1ZGVseSBwdXQgc3R1ZmYgaW4gdGhlaXIgRE9NLlxuICAgICAgICAgICAgdmFyIGR1bW15Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICBkdW1teU5vZGUuc2V0QXR0cmlidXRlKFwiZGF0YS1lbG0taG90XCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgICAgIGR1bW15Tm9kZS5zdHlsZS5oZWlnaHQgPSBcImluaGVyaXRcIjtcbiAgICAgICAgICAgIHZhciBwYXJlbnROb2RlID0gbm9kZS5wYXJlbnROb2RlO1xuICAgICAgICAgICAgcGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQoZHVtbXlOb2RlLCBub2RlKTtcbiAgICAgICAgICAgIGR1bW15Tm9kZS5hcHBlbmRDaGlsZChub2RlKTtcbiAgICAgICAgICAgIHJldHVybiBkdW1teU5vZGU7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB3cmFwUHVibGljTW9kdWxlKHBhdGgsIG1vZHVsZSkge1xuICAgICAgICAgICAgdmFyIG9yaWdpbmFsSW5pdCA9IG1vZHVsZS5pbml0O1xuICAgICAgICAgICAgaWYgKG9yaWdpbmFsSW5pdCkge1xuICAgICAgICAgICAgICAgIG1vZHVsZS5pbml0ID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsbTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvcnRTdWJzY3JpYmVzID0ge307XG4gICAgICAgICAgICAgICAgICAgIHZhciBwb3J0U2VuZHMgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRvbU5vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZmxhZ3MgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3MgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBub3JtYWwgY2FzZVxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tTm9kZSA9IGFyZ3NbJ25vZGUnXSAmJiAhaXNGdWxsc2NyZWVuQXBwKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHdyYXBEb21Ob2RlKGFyZ3NbJ25vZGUnXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFncyA9IGFyZ3NbJ2ZsYWdzJ107XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByYXJlIGNhc2U6IEVsbSBhbGxvd3MgaW5pdCB0byBiZSBjYWxsZWQgd2l0aG91dCBhbnkgYXJndW1lbnRzIGF0IGFsbFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tTm9kZSA9IGRvY3VtZW50LmJvZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmbGFncyA9IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxpemluZ0luc3RhbmNlID0gcmVnaXN0ZXJJbnN0YW5jZShkb21Ob2RlLCBmbGFncywgcGF0aCwgcG9ydFN1YnNjcmliZXMsIHBvcnRTZW5kcyk7XG4gICAgICAgICAgICAgICAgICAgIGVsbSA9IG9yaWdpbmFsSW5pdChhcmdzKTtcbiAgICAgICAgICAgICAgICAgICAgd3JhcFBvcnRzKGVsbSwgcG9ydFN1YnNjcmliZXMsIHBvcnRTZW5kcyk7XG4gICAgICAgICAgICAgICAgICAgIGluaXRpYWxpemluZ0luc3RhbmNlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVsbTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGZpbmQgYSBwdWJsaWMgbW9kdWxlIHRvIHdyYXAgYXQgcGF0aCBcIiArIHBhdGgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzd2FwKEVsbSwgaW5zdGFuY2UpIHtcbiAgICAgICAgICAgIGxvZygnW2VsbS1ob3RdIEhvdC1zd2FwcGluZyBtb2R1bGU6ICcgKyBpbnN0YW5jZS5wYXRoKTtcblxuICAgICAgICAgICAgc3dhcHBpbmdJbnN0YW5jZSA9IGluc3RhbmNlO1xuXG4gICAgICAgICAgICAvLyByZW1vdmUgZnJvbSB0aGUgRE9NIGV2ZXJ5dGhpbmcgdGhhdCBoYWQgYmVlbiBjcmVhdGVkIGJ5IHRoZSBvbGQgRWxtIGFwcFxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lck5vZGUgPSBpbnN0YW5jZS5kb21Ob2RlO1xuICAgICAgICAgICAgd2hpbGUgKGNvbnRhaW5lck5vZGUubGFzdENoaWxkKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyTm9kZS5yZW1vdmVDaGlsZChjb250YWluZXJOb2RlLmxhc3RDaGlsZCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBtID0gZ2V0QXQoaW5zdGFuY2UucGF0aC5zcGxpdCgnLicpLCBFbG0pO1xuICAgICAgICAgICAgdmFyIGVsbTtcbiAgICAgICAgICAgIGlmIChtKSB7XG4gICAgICAgICAgICAgICAgLy8gcHJlcGFyZSB0byBpbml0aWFsaXplIHRoZSBuZXcgRWxtIG1vZHVsZVxuICAgICAgICAgICAgICAgIHZhciBhcmdzID0ge2ZsYWdzOiBpbnN0YW5jZS5mbGFnc307XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lck5vZGUgPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZnVsbHNjcmVlbiBjYXNlOiBubyBhZGRpdGlvbmFsIGFyZ3MgbmVlZGVkXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZW1iZWQgY2FzZTogcHJvdmlkZSBhIG5ldyBub2RlIGZvciBFbG0gdG8gdXNlXG4gICAgICAgICAgICAgICAgICAgIHZhciBub2RlRm9yRW1iZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJOb2RlLmFwcGVuZENoaWxkKG5vZGVGb3JFbWJlZCk7XG4gICAgICAgICAgICAgICAgICAgIGFyZ3NbJ25vZGUnXSA9IG5vZGVGb3JFbWJlZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbG0gPSBtLmluaXQoYXJncyk7XG5cbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhpbnN0YW5jZS5wb3J0U3Vic2NyaWJlcykuZm9yRWFjaChmdW5jdGlvbiAocG9ydE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcnROYW1lIGluIGVsbS5wb3J0cyAmJiAnc3Vic2NyaWJlJyBpbiBlbG0ucG9ydHNbcG9ydE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGFuZGxlcnMgPSBpbnN0YW5jZS5wb3J0U3Vic2NyaWJlc1twb3J0TmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZygnW2VsbS1ob3RdIFJlY29ubmVjdCAnICsgaGFuZGxlcnMubGVuZ3RoICsgJyBoYW5kbGVyKHMpIHRvIHBvcnQgXFwnJ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICsgcG9ydE5hbWUgKyAnXFwnICgnICsgaW5zdGFuY2UucGF0aCArICcpLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcnMuZm9yRWFjaChmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsbS5wb3J0c1twb3J0TmFtZV0uc3Vic2NyaWJlKGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgaW5zdGFuY2UucG9ydFN1YnNjcmliZXNbcG9ydE5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9nKCdbZWxtLWhvdF0gUG9ydCB3YXMgcmVtb3ZlZDogJyArIHBvcnROYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoaW5zdGFuY2UucG9ydFNlbmRzKS5mb3JFYWNoKGZ1bmN0aW9uIChwb3J0TmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocG9ydE5hbWUgaW4gZWxtLnBvcnRzICYmICdzZW5kJyBpbiBlbG0ucG9ydHNbcG9ydE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2coJ1tlbG0taG90XSBSZXBsYWNlIG9sZCBwb3J0IHNlbmQgd2l0aCB0aGUgbmV3IHNlbmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbmNlLnBvcnRTZW5kc1twb3J0TmFtZV0gPSBlbG0ucG9ydHNbcG9ydE5hbWVdLnNlbmQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgaW5zdGFuY2UucG9ydFNlbmRzW3BvcnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZygnW2VsbS1ob3RdIFBvcnQgd2FzIHJlbW92ZWQ6ICcgKyBwb3J0TmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9nKCdbZWxtLWhvdF0gTW9kdWxlIHdhcyByZW1vdmVkOiAnICsgaW5zdGFuY2UucGF0aCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHN3YXBwaW5nSW5zdGFuY2UgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gd3JhcFBvcnRzKGVsbSwgcG9ydFN1YnNjcmliZXMsIHBvcnRTZW5kcykge1xuICAgICAgICAgICAgdmFyIHBvcnROYW1lcyA9IE9iamVjdC5rZXlzKGVsbS5wb3J0cyB8fCB7fSk7XG4gICAgICAgICAgICAvL2hvb2sgcG9ydHNcbiAgICAgICAgICAgIGlmIChwb3J0TmFtZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gaG9vayBvdXRnb2luZyBwb3J0c1xuICAgICAgICAgICAgICAgIHBvcnROYW1lc1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3N1YnNjcmliZScgaW4gZWxtLnBvcnRzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbiAocG9ydE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3J0ID0gZWxtLnBvcnRzW3BvcnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdWJzY3JpYmUgPSBwb3J0LnN1YnNjcmliZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1bnN1YnNjcmliZSA9IHBvcnQudW5zdWJzY3JpYmU7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbG0ucG9ydHNbcG9ydE5hbWVdID0gT2JqZWN0LmFzc2lnbihwb3J0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlOiBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2coJ1tlbG0taG90XSBwb3J0cy4nICsgcG9ydE5hbWUgKyAnLnN1YnNjcmliZSBjYWxsZWQuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcG9ydFN1YnNjcmliZXNbcG9ydE5hbWVdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3J0U3Vic2NyaWJlc1twb3J0TmFtZV0gPSBbaGFuZGxlcl07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE8gaGFuZGxlIHN1YnNjcmliaW5nIHRvIHNpbmdsZSBoYW5kbGVyIG1vcmUgdGhhbiBvbmNlP1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9ydFN1YnNjcmliZXNbcG9ydE5hbWVdLnB1c2goaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1YnNjcmliZS5jYWxsKHBvcnQsIGhhbmRsZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5zdWJzY3JpYmU6IGZ1bmN0aW9uIChoYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvZygnW2VsbS1ob3RdIHBvcnRzLicgKyBwb3J0TmFtZSArICcudW5zdWJzY3JpYmUgY2FsbGVkLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGlzdCA9IHBvcnRTdWJzY3JpYmVzW3BvcnROYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3QgJiYgbGlzdC5pbmRleE9mKGhhbmRsZXIpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5zcGxpY2UobGlzdC5sYXN0SW5kZXhPZihoYW5kbGVyKSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ1tlbG0taG90XSBwb3J0cy4nICsgcG9ydE5hbWUgKyAnLnVuc3Vic2NyaWJlOiBoYW5kbGVyIG5vdCBzdWJzY3JpYmVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuc3Vic2NyaWJlLmNhbGwocG9ydCwgaGFuZGxlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgLy8gaG9vayBpbmNvbWluZyBwb3J0c1xuICAgICAgICAgICAgICAgIHBvcnROYW1lc1xuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ3NlbmQnIGluIGVsbS5wb3J0c1tuYW1lXTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmZvckVhY2goZnVuY3Rpb24gKHBvcnROYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcG9ydCA9IGVsbS5wb3J0c1twb3J0TmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3J0U2VuZHNbcG9ydE5hbWVdID0gcG9ydC5zZW5kO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxtLnBvcnRzW3BvcnROYW1lXSA9IE9iamVjdC5hc3NpZ24ocG9ydCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbmQ6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvcnRTZW5kc1twb3J0TmFtZV0uY2FsbChwb3J0LCB2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwb3J0U3Vic2NyaWJlcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgIEJyZWFkdGgtZmlyc3Qgc2VhcmNoIGZvciBhIGBCcm93c2VyLk5hdmlnYXRpb24uS2V5YCBpbiB0aGUgdXNlcidzIGFwcCBtb2RlbC5cbiAgICAgICAgUmV0dXJucyB0aGUga2V5IGFuZCBrZXlwYXRoIG9yIG51bGwgaWYgbm90IGZvdW5kLlxuICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBmaW5kTmF2S2V5KHJvb3RNb2RlbCkge1xuICAgICAgICAgICAgdmFyIHF1ZXVlID0gW107XG4gICAgICAgICAgICBpZiAoaXNEZWJ1Z2dlck1vZGVsKHJvb3RNb2RlbCkpIHtcbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgICAgICBFeHRyYWN0IHRoZSB1c2VyJ3MgYXBwIG1vZGVsIGZyb20gdGhlIEVsbSBEZWJ1Z2dlcidzIG1vZGVsLiBUaGUgRWxtIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgIGNhbiBob2xkIG11bHRpcGxlIHJlZmVyZW5jZXMgdG8gdGhlIHVzZXIncyBtb2RlbCAoZS5nLiBpbiBpdHMgXCJoaXN0b3J5XCIpLiBTb1xuICAgICAgICAgICAgICAgICB3ZSBtdXN0IGJlIGNhcmVmdWwgdG8gb25seSBzZWFyY2ggd2l0aGluIHRoZSBcInN0YXRlXCIgcGFydCBvZiB0aGUgRGVidWdnZXIuXG4gICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHt2YWx1ZTogcm9vdE1vZGVsWydzdGF0ZSddLCBrZXlwYXRoOiBbJ3N0YXRlJ119KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcXVldWUucHVzaCh7dmFsdWU6IHJvb3RNb2RlbCwga2V5cGF0aDogW119KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0gcXVldWUuc2hpZnQoKTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbS52YWx1ZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBpdGVtLnZhbHVlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRoZSBuYXYga2V5IGlzIGlkZW50aWZpZWQgYnkgYSBydW50aW1lIHRhZyBhZGRlZCBieSB0aGUgZWxtLWhvdCBpbmplY3Rvci5cbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52YWx1ZS5oYXNPd25Qcm9wZXJ0eShcImVsbS1ob3QtbmF2LWtleVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBmb3VuZCBpdCFcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtLnZhbHVlICE9PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvciAodmFyIHByb3BOYW1lIGluIGl0ZW0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtLnZhbHVlLmhhc093blByb3BlcnR5KHByb3BOYW1lKSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdLZXlwYXRoID0gaXRlbS5rZXlwYXRoLnNsaWNlKCk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0tleXBhdGgucHVzaChwcm9wTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlLnB1c2goe3ZhbHVlOiBpdGVtLnZhbHVlW3Byb3BOYW1lXSwga2V5cGF0aDogbmV3S2V5cGF0aH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZnVuY3Rpb24gaXNEZWJ1Z2dlck1vZGVsKG1vZGVsKSB7XG4gICAgICAgICAgICAvLyBVcCB1bnRpbCBlbG0vYnJvd3NlciAxLjAuMiwgdGhlIEVsbSBkZWJ1Z2dlciBjb3VsZCBiZSBpZGVudGlmaWVkIGJ5IGFcbiAgICAgICAgICAgIC8vIHByb3BlcnR5IG5hbWVkIFwiZXhwYW5kb1wiLiBCdXQgaW4gdmVyc2lvbiAxLjAuMiB0aGF0IHdhcyByZW5hbWVkIHRvIFwiZXhwYW5kb01vZGVsXCJcbiAgICAgICAgICAgIHJldHVybiBtb2RlbFxuICAgICAgICAgICAgICAgICYmIChtb2RlbC5oYXNPd25Qcm9wZXJ0eShcImV4cGFuZG9cIikgfHwgbW9kZWwuaGFzT3duUHJvcGVydHkoXCJleHBhbmRvTW9kZWxcIikpXG4gICAgICAgICAgICAgICAgJiYgbW9kZWwuaGFzT3duUHJvcGVydHkoXCJzdGF0ZVwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEF0KGtleVBhdGgsIG9iaikge1xuICAgICAgICAgICAgcmV0dXJuIGtleVBhdGgucmVkdWNlKGZ1bmN0aW9uICh4cywgeCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoeHMgJiYgeHNbeF0pID8geHNbeF0gOiBudWxsXG4gICAgICAgICAgICB9LCBvYmopXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW1vdmVOYXZLZXlMaXN0ZW5lcnMobmF2S2V5KSB7XG4gICAgICAgICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCBuYXZLZXkudmFsdWUpO1xuICAgICAgICAgICAgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignVHJpZGVudCcpIDwgMCB8fCB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIG5hdktleS52YWx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBob29rIHByb2dyYW0gY3JlYXRpb25cbiAgICAgICAgdmFyIGluaXRpYWxpemUgPSBfUGxhdGZvcm1faW5pdGlhbGl6ZTtcbiAgICAgICAgX1BsYXRmb3JtX2luaXRpYWxpemUgPSBmdW5jdGlvbiAoZmxhZ0RlY29kZXIsIGFyZ3MsIGluaXQsIHVwZGF0ZSwgc3Vic2NyaXB0aW9ucywgc3RlcHBlckJ1aWxkZXIpIHtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IGluaXRpYWxpemluZ0luc3RhbmNlIHx8IHN3YXBwaW5nSW5zdGFuY2U7XG4gICAgICAgICAgICB2YXIgdHJ5Rmlyc3RSZW5kZXIgPSAhIXN3YXBwaW5nSW5zdGFuY2U7XG5cbiAgICAgICAgICAgIHZhciBob29rZWRJbml0ID0gZnVuY3Rpb24gKGFyZ3MpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5pdGlhbFN0YXRlVHVwbGUgPSBpbml0KGFyZ3MpO1xuICAgICAgICAgICAgICAgIGlmIChzd2FwcGluZ0luc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBvbGRNb2RlbCA9IHN3YXBwaW5nSW5zdGFuY2UubGFzdFN0YXRlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3TW9kZWwgPSBpbml0aWFsU3RhdGVUdXBsZS5hO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZWxtU3ltYm9sKFwiZWxtJGJyb3dzZXIkQnJvd3NlciRhcHBsaWNhdGlvblwiKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvbGRLZXlMb2MgPSBmaW5kTmF2S2V5KG9sZE1vZGVsKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXR0ZW1wdCB0byBmaW5kIHRoZSBCcm93c2VyLk5hdmlnYXRpb24uS2V5IGluIHRoZSBuZXdseS1jb25zdHJ1Y3RlZCBtb2RlbFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGJyaW5nIGl0IGFsb25nIHdpdGggdGhlIHJlc3Qgb2YgdGhlIG9sZCBkYXRhLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0tleUxvYyA9IGZpbmROYXZLZXkobmV3TW9kZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdLZXlMb2MgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IFwiY291bGQgbm90IGZpbmQgQnJvd3Nlci5OYXZpZ2F0aW9uLktleSBpbiB0aGUgbmV3IGFwcCBtb2RlbFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChvbGRLZXlMb2MgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvciA9IFwiY291bGQgbm90IGZpbmQgQnJvd3Nlci5OYXZpZ2F0aW9uLktleSBpbiB0aGUgb2xkIGFwcCBtb2RlbC5cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobmV3S2V5TG9jLmtleXBhdGgudG9TdHJpbmcoKSAhPT0gb2xkS2V5TG9jLmtleXBhdGgudG9TdHJpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yID0gXCJ0aGUgbG9jYXRpb24gb2YgdGhlIEJyb3dzZXIuTmF2aWdhdGlvbi5LZXkgaW4gdGhlIG1vZGVsIGhhcyBjaGFuZ2VkLlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgZXZlbnQgbGlzdGVuZXJzIGF0dGFjaGVkIHRvIHRoZSBvbGQgbmF2IGtleVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZU5hdktleUxpc3RlbmVycyhvbGRLZXlMb2MudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaW5zZXJ0IHRoZSBuZXcgbmF2IGtleSBpbnRvIHRoZSBvbGQgbW9kZWwgaW4gdGhlIGV4YWN0IHNhbWUgbG9jYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50S2V5UGF0aCA9IG9sZEtleUxvYy5rZXlwYXRoLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGFzdFNlZ21lbnQgPSBvbGRLZXlMb2Mua2V5cGF0aC5zbGljZSgtMSlbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9sZFBhcmVudCA9IGdldEF0KHBhcmVudEtleVBhdGgsIG9sZE1vZGVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRQYXJlbnRbbGFzdFNlZ21lbnRdID0gbmV3S2V5TG9jLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3IgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiW2VsbS1ob3RdIEhvdC1zd2FwcGluZyBcIiArIGluc3RhbmNlLnBhdGggKyBcIiBub3QgcG9zc2libGU6IFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZE1vZGVsID0gbmV3TW9kZWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgaGVhcnQgb2YgdGhlIGFwcCBzdGF0ZSBob3Qtc3dhcFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGVUdXBsZS5hID0gb2xkTW9kZWw7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gaWdub3JlIGFueSBDbWRzIHJldHVybmVkIGJ5IHRoZSBpbml0IGR1cmluZyBob3Qtc3dhcFxuICAgICAgICAgICAgICAgICAgICBpbml0aWFsU3RhdGVUdXBsZS5iID0gZWxtU3ltYm9sKFwiZWxtJGNvcmUkUGxhdGZvcm0kQ21kJG5vbmVcIik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FwdHVyZSB0aGUgaW5pdGlhbCBzdGF0ZSBmb3IgbGF0ZXJcbiAgICAgICAgICAgICAgICAgICAgaW5pdGlhbGl6aW5nSW5zdGFuY2UubGFzdFN0YXRlID0gaW5pdGlhbFN0YXRlVHVwbGUuYTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gaW5pdGlhbFN0YXRlVHVwbGVcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBob29rZWRTdGVwcGVyQnVpbGRlciA9IGZ1bmN0aW9uIChzZW5kVG9BcHAsIG1vZGVsKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgICAgICAvLyBmaXJzdCByZW5kZXIgbWF5IGZhaWwgaWYgc2hhcGUgb2YgbW9kZWwgY2hhbmdlZCB0b28gbXVjaFxuICAgICAgICAgICAgICAgIGlmICh0cnlGaXJzdFJlbmRlcikge1xuICAgICAgICAgICAgICAgICAgICB0cnlGaXJzdFJlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gc3RlcHBlckJ1aWxkZXIoc2VuZFRvQXBwLCBtb2RlbClcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdbZWxtLWhvdF0gSG90LXN3YXBwaW5nICcgKyBpbnN0YW5jZS5wYXRoICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnIGlzIG5vdCBwb3NzaWJsZSwgcGxlYXNlIHJlbG9hZCBwYWdlLiBFcnJvcjogJyArIGUubWVzc2FnZSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHN0ZXBwZXJCdWlsZGVyKHNlbmRUb0FwcCwgbW9kZWwpXG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChuZXh0TW9kZWwsIGlzU3luYykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhcHR1cmUgdGhlIHN0YXRlIGFmdGVyIGV2ZXJ5IHN0ZXAgc28gdGhhdCBsYXRlciB3ZSBjYW4gcmVzdG9yZSBmcm9tIGl0IGR1cmluZyBhIGhvdC1zd2FwXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5sYXN0U3RhdGUgPSBuZXh0TW9kZWxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0KG5leHRNb2RlbCwgaXNTeW5jKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHJldHVybiBpbml0aWFsaXplKGZsYWdEZWNvZGVyLCBhcmdzLCBob29rZWRJbml0LCB1cGRhdGUsIHN1YnNjcmlwdGlvbnMsIGhvb2tlZFN0ZXBwZXJCdWlsZGVyKVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGhvb2sgcHJvY2VzcyBjcmVhdGlvblxuICAgICAgICB2YXIgb3JpZ2luYWxCaW5kaW5nID0gX1NjaGVkdWxlcl9iaW5kaW5nO1xuICAgICAgICBfU2NoZWR1bGVyX2JpbmRpbmcgPSBmdW5jdGlvbiAob3JpZ2luYWxDYWxsYmFjaykge1xuICAgICAgICAgICAgcmV0dXJuIG9yaWdpbmFsQmluZGluZyhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gc3RhcnQgdGhlIHNjaGVkdWxlZCBwcm9jZXNzLCB3aGljaCBtYXkgcmV0dXJuIGEgY2FuY2VsbGF0aW9uIGZ1bmN0aW9uLlxuICAgICAgICAgICAgICAgIHZhciBjYW5jZWwgPSBvcmlnaW5hbENhbGxiYWNrLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbmNlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYW5jZWxsZXJzLnB1c2goY2FuY2VsKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbmNlbGxlcnMuc3BsaWNlKGNhbmNlbGxlcnMuaW5kZXhPZihjYW5jZWwpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW5jZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNhbmNlbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNjb3BlWydfZWxtX2hvdF9sb2FkZXJfaW5pdCddID0gZnVuY3Rpb24gKEVsbSkge1xuICAgICAgICAgICAgLy8gc3dhcCBpbnN0YW5jZXNcbiAgICAgICAgICAgIHZhciByZW1vdmVkSW5zdGFuY2VzID0gW107XG4gICAgICAgICAgICBmb3IgKHZhciBpZCBpbiBpbnN0YW5jZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5zdGFuY2UgPSBpbnN0YW5jZXNbaWRdO1xuICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZS5kb21Ob2RlLnBhcmVudE5vZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhcChFbG0sIGluc3RhbmNlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVkSW5zdGFuY2VzLnB1c2goaWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVtb3ZlZEluc3RhbmNlcy5mb3JFYWNoKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBpbnN0YW5jZVtpZF07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gd3JhcCBhbGwgcHVibGljIG1vZHVsZXNcbiAgICAgICAgICAgIHZhciBwdWJsaWNNb2R1bGVzID0gZmluZFB1YmxpY01vZHVsZXMoRWxtKTtcbiAgICAgICAgICAgIHB1YmxpY01vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobSkge1xuICAgICAgICAgICAgICAgIHdyYXBQdWJsaWNNb2R1bGUobS5wYXRoLCBtLm1vZHVsZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICBzY29wZVsnX2VsbV9ob3RfbG9hZGVyX2luaXQnXShzY29wZVsnRWxtJ10pO1xufVxuLy8vLy8vLy8vLy8vLy8vLy8vLy8gSE1SIEVORCAvLy8vLy8vLy8vLy8vLy8vLy8vL1xuXG5cbn0odGhpcykpOyIsImltcG9ydCBcIi4vc3R5bGVzaGVldC9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3N0eWxlc2hlZXQvaGVhZGVyLnNjc3NcIjtcbmltcG9ydCB7IEVsbSB9IGZyb20gXCIuL01haW4uZWxtXCI7XG5cbmNvbnNvbGUubG9nKEVOVik7XG5cbkVsbS5NYWluLmluaXQoe1xuICAgIG5vZGU6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYXBwXCIpXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=