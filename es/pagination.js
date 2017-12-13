import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var classnames = createCommonjsModule(function (module) {
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ('object' !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof undefined === 'function' && typeof undefined.amd === 'object' && undefined.amd) {
		// register as 'classnames', consistent with npm package name
		undefined('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

var styles = { "pagination--small": "_2CnmpyB", "pagination__jumperField": "_280nkVW", "pagination__jumper": "wBezPz9", "pagination__sizeChanger": "_3O0s4JU", "pagination__total": "_2KQ0PhC", "pagination__item": "jsRFs8b", "pagination__item--active": "_1ZyqWB7", "pagination__pages": "cfbKU8w", "pagination__ctrl": "_2tvnb-l", "pagination--normal": "_3HZDVl5", "pagination__ellipsis": "_13KUpSV", "pagination": "_1L_-sT1" };

var styles$1 = { "Icon": "_2jSl5RJ" };

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};



var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};









var objectWithoutProperties = function (obj, keys) {
  var target = {};

  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;
    target[i] = obj[i];
  }

  return target;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var account = function account(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1025 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200.195',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M615.372 595.166a24.383 24.383 0 0 1-20.888-25.15c.853-20.632 6.565-32.312 19.183-47.402 5.797-6.99 7.332-9.378 8.525-13.385 1.45-4.689 2.046-9.804 2.643-22.592 1.194-23.19 2.814-34.017 9.72-46.976 6.052-11.424 12.958-16.625 26.002-23.53a41.946 41.946 0 0 0 5.968-3.41c3.666-5.116 7.673-17.648 9.975-30.522 4.945-27.793 5.115-48.595-1.023-61.64a276.738 276.738 0 0 0-6.31-11.68 66.755 66.755 0 0 1-7.416-25.917 309.476 309.476 0 0 1 1.705-50.3l1.023-11.936 2.046-22.508a264.973 264.973 0 0 0 .256-45.867 275.374 275.374 0 0 0-6.394-30.521 99.067 99.067 0 0 0-7.588-16.796 50.983 50.983 0 0 0-5.286-7.758l-25.065-4.433-12.532-6.394-15.517-15.346c-53.54-33.59-104.182-27.026-185.004 6.48-59.337 19.778-84.061 80.65-60.36 195.745a62.748 62.748 0 0 1-7.673 45.526l-3.24 6.224.426 4.945 1.45 20.802c.596 8.526 1.364 15.943 2.302 22.934 3.24 24.383 8.866 40.07 13.214 42.883-1.96-1.193 2.131 0 4.263.597l3.07.682a23.275 23.275 0 0 1 24.723 22.166l3.41 37.257c2.132 22.337 2.132 22.337 2.899 38.79.852 2.473 2.046 4.093 6.053 8.612 12.533 13.896 18.5 24.127 21.484 41.263a24.298 24.298 0 0 1-18.159 27.793l-8.355 2.046c-3.751 8.27-6.82 14.92-10.23 21.485-11.51 23.104-22.082 38.79-34.955 47.913l-7.588 3.58-14.75 4.178-24.297 6.565c-21.314 8.952-43.31 18.5-76.73 33.25l-5.541 2.387c-50.13 22.08-52.006 22.933-69.995 30.692-8.014 3.41-15.772 6.394-27.793 10.656l-5.797 2.047c-45.27 16.113-60.36 25.661-66.158 39.217 0 11.936-.17 18.245-1.194 62.407l-.511 21.57c-.341 19.352-.597 35.124-.682 48.169l21.825 3.836c32.994 5.627 69.739 11.254 109.382 16.54 113.134 15.09 226.268 24.127 331.643 24.127a2548.277 2548.277 0 0 0 331.643-24.127 2989.558 2989.558 0 0 0 131.207-20.462c0-12.959-.34-28.73-.682-48.084l-.511-21.313c-1.023-44.248-1.194-50.727.085-54.905-7.161-21.314-22.166-30.947-67.522-46.975l-5.797-2.047a434.801 434.801 0 0 1-27.708-10.656c-17.904-7.759-16.88-7.332-69.91-30.692l-6.138-2.643c-32.908-14.494-54.99-24.042-73.32-31.97l-21.057-5.883-6.139-1.706-14.749-4.177-7.502-3.58c-12.96-9.123-23.445-24.725-35.125-47.914a584.595 584.595 0 0 1-9.549-20.12l-13.385-1.961zm46.72-544.78l8.184 3.069a71.614 71.614 0 0 1 24.895 27.537c5.541 9.72 9.378 19.012 11.935 27.538 5.627 23.019 6.82 28.56 8.014 37.768 1.28 10.23 1.45 19.353 1.024 40.07 0 3.41-.427 8.184-1.109 16.113l-2.046 22.593-1.023 11.51c-1.705 20.972-2.387 35.465-1.705 41.177a19.523 19.523 0 0 0 2.046 8.44 235.304 235.304 0 0 1 7.332 13.727c11.595 24.894 11.424 53.71 4.86 90.797-3.41 19.267-9.379 37.512-17.99 49.874-5.967 8.525-11.594 12.532-22.848 18.415a32.567 32.567 0 0 0-5.968 3.41c-2.387 4.519-3.41 10.657-4.177 25.832-.853 17.734-1.705 25.406-4.774 35.381a75.28 75.28 0 0 1-16.028 28.135c6.564 2.046 11.935 6.82 14.92 13.044 6.308 14.152 10.145 22.422 14.237 30.606 6.82 13.47 12.959 23.275 17.307 27.879l9.634 2.728 6.223 1.705 23.872 6.82c21.484 9.123 43.736 18.756 76.985 33.335l5.968 2.728c52.943 23.275 52.006 22.849 69.739 30.522a393.026 393.026 0 0 0 30.436 11.51c58.911 20.887 83.806 36.744 98.725 85.084 0 11.339.086 17.903 1.109 61.64l.511 21.313c.682 30.948.853 52.944.512 69.91a24.383 24.383 0 0 1-19.609 23.36 3037.983 3037.983 0 0 1-153.715 24.553c-115.095 15.346-230.19 24.553-338.037 24.553-107.762 0-222.942-9.207-338.037-24.553a3037.642 3037.642 0 0 1-153.8-24.554A24.383 24.383 0 0 1 .085 950.51c-.256-16.88 0-38.876.597-69.824l.512-21.655c1.023-43.48 1.108-50.045 2.387-69.056 13.64-40.497 38.45-56.44 97.276-77.327l5.797-2.046c11.083-3.922 17.99-6.565 24.724-9.463 17.904-7.673 19.865-8.526 69.824-30.522l5.457-2.472c33.76-14.835 55.927-24.468 80.48-34.528l27.112-7.588 9.633-2.728c4.263-4.604 10.572-14.494 17.307-27.879 4.092-8.184 7.929-16.454 14.238-30.521a24.298 24.298 0 0 1 7.076-9.037 67.01 67.01 0 0 1-15.857-29.413l-4.093-44.76-1.79-19.267a45.27 45.27 0 0 1-11.339-4.774c-21.058-13.47-30.35-39.388-35.466-77.582a467.369 467.369 0 0 1-2.558-25.577l-1.45-21.143-.51-6.224a39.729 39.729 0 0 1 1.449-14.408c1.534-5.542.682-3.751 7.332-16.54 3.41-6.308 3.921-8.866 3.069-13.129-28.22-137.005 6.82-223.113 91.052-251.076 92.673-38.45 156.7-46.89 231.894.938l13.897 13.214 23.957 4.263z'
    })
  );
};

var arrowDown = function arrowDown(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M512 793.065L.506 281.571l51.142-51.142L512 690.781l460.352-460.352 51.142 51.142L512 793.065z'
    })
  );
};

var arrowLeft = function arrowLeft(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M230.935 512L742.429.506l51.142 51.142L333.219 512l460.352 460.352-51.142 51.142L230.935 512z'
    })
  );
};

var arrowRight = function arrowRight(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M793.065 512l-51.142 51.142-460.352 460.352-51.142-51.142L690.78 512 230.43 51.648 281.57.506l460.352 460.352L793.065 512z'
    })
  );
};

var arrowUp = function arrowUp(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M512 230.935l511.494 511.494-51.142 51.142L512 333.219 51.648 793.571.506 742.429 512 230.935z'
    })
  );
};

var attachment = function attachment(props) {
  return React.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: '13',
      height: '13',
      viewBox: '0 0 13 13'
    }, props),
    React.createElement('path', {
      d: 'M7.859 2.974c-.306.306-.57.568-1.017 1.01-1.924 1.9-2.42 2.431-2.818 3.107-.548.93-.432 1.722.36 2.495 1.45 1.414 2.286.913 5.686-2.522.382-.386.598-.604.852-.857 1.742-1.743 2.15-3.44.348-5.133-1.422-1.336-3.176-1.206-5.095.301-1.365 1.36-1.365 1.36-2.845 2.84C.11 7.435 0 9.842 2.212 11.793c2.221 1.96 4.781 1.487 8.638-2.37a.5.5 0 1 0-.708-.707c-3.52 3.52-5.5 3.887-7.269 2.327-1.75-1.545-1.671-3.285 1.164-6.12l2.8-2.8c1.519-1.19 2.728-1.28 3.748-.321 1.288 1.21 1.026 2.3-.37 3.697-.255.255-.473.473-.856.86-2.944 2.976-3.474 3.293-4.277 2.51-.466-.455-.508-.743-.197-1.272.332-.564.826-1.09 2.66-2.903.448-.442.714-.706 1.02-1.013a.5.5 0 1 0-.706-.708z'
    })
  );
};

var car = function car(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1382 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '269.922',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M1301.58 403.994c-.05 0-.05-.026 0 0a1112.5 1112.5 0 0 0-47.743-63.488l-2.048-2.484h.384l-15.923-18.739-.23-.256a828.365 828.365 0 0 0-60.11-64.281c-42.01-39.68-62.515-45.03-77.004-45.03H875.34c-6.17 0-12.288.665-18.227 1.945v-99.072a87.066 87.066 0 0 0-86.99-86.989H112.59A87.066 87.066 0 0 0 25.6 112.589v683.776a87.066 87.066 0 0 0 86.989 86.963h100.659c16.077 75.622 84.122 131.507 162.304 131.507 78.208 0 146.253-55.885 162.304-131.507h232.192a86.528 86.528 0 0 0 52.634-17.715 86.272 86.272 0 0 0 52.582 17.715h21.811c16.051 75.622 84.122 131.507 162.279 131.507 78.156 0 146.252-55.885 162.33-131.507h48.127a87.066 87.066 0 0 0 86.989-86.989V520.218c0-12.237-3.149-31.59-27.52-73.19-7.68-13.108-16.998-27.598-27.7-43.009zM375.63 946.074a97.229 97.229 0 0 1-97.101-97.127c0-53.555 43.52-97.152 97.075-97.152a97.28 97.28 0 0 1 97.152 97.152 97.28 97.28 0 0 1-97.152 97.127zM788.3 296.704v499.635c0 10.087-8.167 18.253-18.227 18.253H537.882a165.632 165.632 0 0 0-157.159-131.456h-.512v.051h-1.05c-.127 0-.255-.051-.332 0h-8.09a165.504 165.504 0 0 0-157.337 131.456H112.538A18.253 18.253 0 0 1 94.31 796.39V112.59c0-10.061 8.192-18.253 18.253-18.253h657.485c10.06 0 18.253 8.192 18.253 18.253v184.115zm271.104 649.37a97.28 97.28 0 0 1-97.127-97.127 97.28 97.28 0 0 1 97.152-97.152 97.28 97.28 0 0 1 97.127 97.152 97.28 97.28 0 0 1-97.127 97.127zm228.608-149.735c0 10.087-8.192 18.253-18.253 18.253h-48.051c-15.155-71.117-76.595-125.542-149.76-131.02v.306l-.256-.05-.23-.026-.231-.052-.23-.05c-.026 0-.128 0-.23-.052l-1.153-.18h-1.459c-.333 0-.691 0-.973-.05h-2.227s-.077 0-.102-.052h-.052v-.179.18l-.153-.026h-.435v-.103.103h-1.204c-.076 0-.23-.051-.358 0h-6.605v.025l-.23-.076v.076h-.051v-.076l-.18.128h-.05v-.128l-.18.179-.23-.18v.18-.18l-.18.129h-.05v-.128l-.18.076v-.076l-.256.05h-5.197l-1.152.18v-.102h-.179v.153l-.256-.153v.179h-.026v-.18l-.179.257v-.256h-.205v.256h-.025v-.256h-.205l-1.536.102c-72.5 6.144-133.222 60.288-148.224 130.893h-21.786a18.253 18.253 0 0 1-18.252-18.253V296.704c0-10.06 8.192-18.227 18.252-18.227h220.314c3.558 1.74 14.848 8.448 38.272 31.232l5.274 5.197h-106.01a87.066 87.066 0 0 0-86.989 86.963v105.216a87.066 87.066 0 0 0 86.989 86.989h254.9v202.265h-.257zm0-271.053h-254.9a18.253 18.253 0 0 1-18.252-18.227V401.843c0-10.086 8.192-18.253 18.253-18.253h167.116a1047.168 1047.168 0 0 1 24.192 31.028c13.568 18.15 26.112 36.07 36.173 51.89l4.66-2.482-4.353 2.918 9.703-5.734-9.523 6.041 4.608 7.424c19.788 32.384 22.144 44.39 22.374 45.952v4.66h-.051z'
    })
  );
};

var caution = function caution(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M512 0C229.235 0 0 229.235 0 512s229.235 512 512 512 512-229.235 512-512S794.765 0 512 0zm0 934.4C278.72 934.4 89.6 745.28 89.6 512 89.6 278.72 278.72 89.6 512 89.6S934.4 278.72 934.4 512c0 233.28-189.12 422.4-422.4 422.4z'
    }),
    React.createElement('path', {
      d: 'M448 729.6a5 5 0 1 0 128 0 5 5 0 1 0-128 0zM469.338 567.86c2.56 26.585 19.481 46.54 42.662 46.54 23.18 0 40.102-21.35 42.662-46.54l20.43-264.833c.588-3.417.908-10.893.908-14.451 0-34.304-28.66-58.176-64-58.176s-64 23.872-64 58.176c0 3.558.307 11.034.896 14.438l20.442 264.845z'
    })
  );
};

var check = function check(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1025 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200.195',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M950.782 127.489L328.07 750.117 73.151 495.17 0 568.452l328.071 328.06L1024 200.657z'
    })
  );
};

var clock = function clock(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zm153.6 729.6L467.2 531.2V140.8H560v352l172.8 172.8-67.2 64z'
    })
  );
};

var close = function close(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M566.594 512.533l288.992-288.994c12.998-12.993 11.492-35.558-3.361-50.407-14.846-14.846-37.405-16.353-50.406-3.358L512.828 458.768l-288.99-288.994c-12.998-12.995-35.559-11.489-50.407 3.358-14.851 14.849-16.359 37.414-3.36 50.407l288.992 288.994-288.987 288.99c-12.995 12.99-11.496 35.56 3.355 50.407 14.842 14.846 37.416 16.349 50.407 3.36l288.99-288.992L801.821 855.29c12.988 12.989 35.564 11.486 50.406-3.36 14.852-14.847 16.35-37.416 3.355-50.408l-288.988-288.99z'
    })
  );
};

var code = function code(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1025 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200.195',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M293.069 755.2c-12.083 0-24.269-4.25-33.997-12.902L0 512l273.46-243.098c21.094-18.688 53.452-16.896 72.242 4.25 18.79 21.146 16.896 53.504-4.25 72.294L154.113 512l172.954 153.702c21.145 18.79 23.04 51.15 4.25 72.295-10.087 11.417-24.167 17.203-38.247 17.203zm457.984-.102L1024.512 512 765.44 281.702c-21.146-18.79-53.504-16.896-72.243 4.25-18.79 21.146-16.896 53.504 4.25 72.294L870.4 512 683.06 678.502c-21.146 18.79-23.04 51.15-4.25 72.295C688.896 762.214 702.976 768 717.056 768c12.083 0 24.269-4.25 33.997-12.902zm-239.514 72.55l102.4-614.4c4.66-27.904-14.182-54.272-42.086-58.931-28.007-4.71-54.323 14.182-58.88 42.086l-102.4 614.4c-4.66 27.904 14.182 54.272 42.086 58.931a52.65 52.65 0 0 0 8.448.666c24.576 0 46.285-17.766 50.432-42.752z'
    })
  );
};

var copy = function copy(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M848.034 959.882H428.098c-67.471 0-123.942-47.981-137.11-111.639l-.126-.104H176.143c-61.912 0-112.101-50.19-112.101-112.101V175.785c0-61.861 50.148-112.009 112.009-112.009h420.074c67.493 0 123.942 47.998 137.11 111.639l.126.104h114.674c61.937 0 112.146 50.21 112.146 112.146v560.07c0 61.937-50.21 112.147-112.147 112.147zm-251.91-840.08H176.006c-30.903 0-55.955 25.052-55.955 55.955V736.02c0 30.979 25.114 56.093 56.093 56.093H287.94l.137-.137V287.665c0-61.937 50.21-112.146 112.146-112.146h274.185c-11.723-32.3-41.996-55.717-78.284-55.717zm308.048 167.863c0-30.995-25.126-56.121-56.121-56.121H400.178c-30.979 0-56.093 25.114-56.093 56.093v560.098c0 30.995 25.126 56.121 56.121 56.121h447.873c30.979 0 56.093-25.114 56.093-56.093V287.665zM820.797 763.79H427.46c-15.442 0-28.083-12.602-28.083-28.01v-.006c0-15.408 12.641-28.01 28.083-28.01h393.338c15.447 0 28.083 12.602 28.083 28.01v.006c-.001 15.408-12.636 28.01-28.084 28.01zm0-168.082H427.46c-15.442 0-28.083-12.608-28.083-28.01s12.641-28.01 28.083-28.01h393.338c15.447 0 28.083 12.608 28.083 28.01s-12.636 28.01-28.084 28.01zm0-168.077H427.46c-15.442 0-28.083-12.608-28.083-28.016 0-15.397 12.641-28.004 28.083-28.004h393.338c15.447 0 28.083 12.608 28.083 28.004-.001 15.408-12.636 28.016-28.084 28.016z'
    })
  );
};

var customise = function customise(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M118.687 894.892l264.694-74.164 27.384-27.426-186.335-186.34-27.673 27.628-78.07 260.302zm136.793-318.98L441.845 762.27l364.217-364.264-186.336-186.342L255.48 575.912zm634.65-373.358l-74.978-74.976c-42.886-42.887-68.472-42.887-111.344 0l-53.013 53.057 186.34 186.315 53.015-53.031c42.87-42.891 42.87-68.474-.02-111.365zm-509.89-69.68c-42.886-42.89-68.497-42.89-111.383 0L91.607 310.1l-31.05-31.056 186.34-186.336c42.886-42.89 112.396-42.89 155.286 0l102.64 102.646-31.05 31.05-93.533-93.529zM169.24 325.647l62.13-62.131 31.076 31.055-62.131 62.126-3.688-3.688 34.717 34.767 93.156-93.204 31.08 31.076-93.16 93.153 9.484 9.488-31.07 31.056L91.589 310.099l31.075-31.056 46.578 46.604zm434.825 434.798l93.156 93.16 46.602 46.597 146.178-146.206c42.886-42.896 42.886-68.503 0-111.39l-98.035-98.029 31.05-31.06 107.146 107.151c42.886 42.886 42.886 112.389 0 155.285L774.88 931.234l-31.056 31.056-31.05-31.056L559.024 777.49l31.056-31.056 13.985 14.011zm124.235-62.1l-93.16 93.15-31.075-31.05 93.156-93.2 31.079 31.1zm15.523 46.553l31.056 31.075-77.633 77.632-31.05-31.075 77.627-77.632zm0 0'
    })
  );
};

var doubleArrowLeft = function doubleArrowLeft(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M548.48 1010.496L50.752 512.768 549.248 14.272l45.248 45.248-453.248 453.248 452.608 452.48z'
    }),
    React.createElement('path', {
      d: 'M912 1010.496L414.272 512.768 912.768 14.272l45.248 45.248-453.248 453.248 452.48 452.48z'
    })
  );
};

var doubleArrowRight = function doubleArrowRight(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M475.52 13.504l497.728 497.728-498.496 498.496-45.248-45.248 453.248-453.248-452.608-452.48z'
    }),
    React.createElement('path', {
      d: 'M112 13.504l497.728 497.728-498.496 498.496-45.248-45.248 453.248-453.248-452.48-452.48z'
    })
  );
};

var ellipsis = function ellipsis(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M64 512a86 86 0 1 0 172 0 86 86 0 1 0-172 0zM426 512a86 86 0 1 0 172 0 86 86 0 1 0-172 0zM788 512a86 86 0 1 0 172 0 86 86 0 1 0-172 0z'
    })
  );
};

var error$1 = function error(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M512 451.67L328.832 268.5a42.667 42.667 0 0 0-60.33 60.331L451.668 512 268.501 695.168a42.667 42.667 0 0 0 60.331 60.33L512 572.332l183.168 183.168a42.667 42.667 0 0 0 60.33-60.331L572.332 512l183.168-183.168a42.667 42.667 0 1 0-60.331-60.33L512 451.668zm0 572.33C229.248 1024 0 794.752 0 512S229.248 0 512 0s512 229.248 512 512-229.248 512-512 512z'
    })
  );
};

var fail = function fail(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M512 0C229.224 0 0 229.224 0 512s229.224 512 512 512 512-229.224 512-512S794.76 0 512 0zm261.092 685.355l-87.72 87.721L512 599.721 337.856 773.864l-87.72-87.72L424.279 512 250.908 338.645l87.72-87.721 173.356 173.355 174.143-174.143 87.721 87.72L599.721 512l173.371 173.355z'
    })
  );
};

var finance = function finance(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement('path', {
      d: 'M512 42.667a469.333 469.333 0 1 1 0 938.666 469.333 469.333 0 0 1 0-938.666zM512 0C229.717 0 0 229.803 0 512s229.717 512 512 512 512-229.717 512-512S794.283 0 512 0z'
    }),
    React.createElement('path', {
      d: 'M608.939 256.512l-97.792 197.632-96.342-197.632h-44.458l120.32 219.99h-140.63V512h140.63v83.285h-140.63v31.062h140.63v141.226h40.96V626.347h142.506v-31.062H531.627V512h142.506v-35.584H531.627l120.746-219.99z'
    })
  );
};

var home = function home(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M979.775 516.757c.271-9.781-4.69-20.431-13.95-29.474L546.847 77.86c-19.272-18.844-50.552-18.844-69.823 0L58.04 487.284c-10.503 10.26-15.995 21.627-14.211 32.055a20.34 20.34 0 0 0-.204 2.728c0 11.49 9.53 20.807 21.293 20.807h110.525c-2.79 6.103-4.063 13.175-4.063 20.723v353.805c0 22.982 19.064 41.612 42.585 41.612h596.197c23.52 0 42.585-18.63 42.585-41.612V563.597c.287-8.266-.705-15.118-2.859-20.723h109.32c11.762 0 21.293-9.318 21.293-20.807 0-1.838-.269-3.611-.727-5.31zM810.162 875.785c0 22.987-19.064 41.617-42.585 41.617H256.551c-23.521 0-42.585-18.63-42.585-41.617v-353.8h-.004c-.046-11.45-9.554-20.725-21.288-20.725h-85.059l369.408-360.983c19.272-18.837 50.552-18.837 69.823.007l369.407 360.975h-84.797c-11.735 0-21.243 9.275-21.288 20.725h-.004v353.801z'
    })
  );
};

var info = function info(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M512 0C229.308 0 0 229.24 0 512s229.308 512 512 512 512-229.24 512-512S794.692 0 512 0zm-63.898 448.034C448.102 412.672 476.706 384 512 384c35.362 0 64.034 28.672 64.034 64.034V768c0 35.294-28.672 64.034-64.034 64.034-35.294 0-63.898-28.74-63.898-64.034V448.034zM512 321.058c-35.294 0-63.898-28.74-63.898-64.034 0-35.294 28.604-64.034 63.898-64.034 35.362 0 64.034 28.74 64.034 64.034 0 35.294-28.672 64.034-64.034 64.034z'
    })
  );
};

var local = function local(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M512 256.331c-77.997 0-141.228 63.227-141.228 141.224S434.002 538.783 512 538.783s141.23-63.23 141.23-141.228S589.997 256.331 512 256.331zm0 225.96c-46.797 0-84.737-37.934-84.737-84.737 0-46.796 37.94-84.733 84.737-84.733 46.8 0 84.737 37.936 84.737 84.733-.001 46.804-37.937 84.737-84.737 84.737zm0-423.68c-187.194 0-338.946 151.75-338.946 338.943C173.054 584.751 512 962.467 512 962.467S850.946 584.75 850.946 397.554c0-187.193-151.75-338.942-338.946-338.942zM229.545 397.556C229.545 241.564 356.006 115.1 512 115.1c155.997 0 282.455 126.464 282.455 282.455C794.455 539.025 512 905.977 512 905.977S229.545 537.054 229.545 397.555z'
    })
  );
};

var paper = function paper(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M1024 256L768 0H298.667c-62.976 0-85.334 29.013-85.334 85.333v64h-128C7.936 149.333 0 190.123 0 256v661.333C0 983.211 7.936 1024 85.333 1024h625.75C788.48 1024 832 940.544 832 874.667h85.333C994.731 874.667 1024 833.877 1024 768V256zM917.333 832H320a63.744 63.744 0 0 1-64-64V106.667c0-41.302 21.333-64 64-64h405.333c-.597 73.728 0 149.333 0 149.333 0 66.475 28.758 106.667 106.667 106.667h149.333V768c0 32.597-25.6 64-64 64zm-128 42.667c0 52.65-46.933 106.666-85.333 106.666H85.333c-38.4 0-42.666-31.402-42.666-64V256c0-30.464 4.266-64 42.666-64h128v576c0 65.877 29.27 106.667 106.667 106.667h469.333zM768 192V64l192 192H832a63.061 63.061 0 0 1-64-64zM448 516.096a21.59 21.59 0 0 0-21.333 21.333c0 11.776 9.813 21.334 21.333 21.334h298.667c11.776 0 21.333-9.899 21.333-21.334a21.504 21.504 0 0 0-21.333-21.333H448zm0-128a21.59 21.59 0 0 0-21.333 21.333c0 11.776 9.813 21.334 21.333 21.334h298.667c11.776 0 21.333-9.899 21.333-21.334a21.504 21.504 0 0 0-21.333-21.333H448z'
    })
  );
};

var plus = function plus(props) {
  return React.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: '25',
      height: '25',
      viewBox: '0 0 25 25'
    }, props),
    React.createElement('path', {
      d: 'M13.5 11.5V0h-2v11.5H0v2h11.5V25h2V13.5H25v-2H13.5z'
    })
  );
};

var question = function question(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M512 0C229.218 0 0 229.218 0 512s229.218 512 512 512 512-229.218 512-512S794.782 0 512 0zm0 944C273.406 944 80 750.594 80 512S273.406 80 512 80s432 193.406 432 432-193.406 432-432 432z'
    }),
    React.createElement('path', {
      d: 'M480 704h64v64h-64v-64zM635.468 300.296c-12.968-13.25-29.376-23.844-49.532-32.062C565.53 260.03 541.592 256 513.374 256c-23.938 0-45.75 4.032-65.562 12.234-19.876 8.218-37 19.546-51.376 34.25-14.25 14.578-25.344 29.016-33 49.546C355.812 372.562 352 384 352 416h65.312c0-32 8.468-56.218 25.876-77.032 17.188-20.906 40.532-29.64 70.188-29.64 28.876 0 50.468 7.828 64.344 21.876 13.75 14.046 20.782 34.172 20.782 59.594 0 19.766-6.5 37.516-19.468 52.984a509.737 509.737 0 0 1-41.688 44.876c-15.188 14.282-27.344 29.532-39.906 45.282S480 568.032 480 588.938V640h64v-27.5c0-16.406 2.406-30.624 8.812-43.032C559 557.03 566.718 545.75 576.5 535.686a368.683 368.683 0 0 1 30.938-29.656c11-9.532 21.562-19.718 31.062-30.344 9.688-10.688 17.75-22.688 23.876-35.938 6.438-13.25 9.656-28.812 9.656-46.954 0-15.75-2.844-31.782-8.782-48.078-5.812-16.42-15.188-31.184-27.782-44.42z'
    })
  );
};

var question2 = function question2(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M511.872.96C231.006.96 3.294 229.95 3.294 512.48c0 282.465 227.712 511.52 508.578 511.52s508.642-229.055 508.642-511.52C1020.45 229.95 792.738.96 511.872.96zm49.636 790.979c0 18.101-15.735 27.696-52.578 27.696h-28.017c-36.843 0-52.642-9.53-52.642-27.696v-79.572c0-18.165 15.8-27.696 52.642-27.696h28.017c36.843 0 52.578 9.467 52.578 27.696v79.572zm-9.594-189.462c-5.246 18.23-17.527 23.41-46.502 23.41h-20.085c-30.639 0-42.92-6.907-42.92-25.137 0-108.93 135.86-178.907 135.86-232.573-.064-30.255-20.213-48.357-64.924-48.357-50.851 0-85.903 26.737-98.12 26.737-24.627 0-55.265-52.77-55.265-70.872 0-51.043 96.457-70.105 164.835-70.105 117.374 0 190.229 58.783 190.229 153.898 0 132.341-147.31 160.038-163.108 243z'
    })
  );
};

var react = function react(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M512.557 169.6l.448-.512c21.312-20.48 43.84-39.68 67.968-56.768a381.632 381.632 0 0 1 55.936-33.536c7.04-3.2 14.08-6.4 21.312-8.96a204.928 204.928 0 0 1 51.008-12.16h11.648c3.008 0 6.016 0 8.96.64 6.4.64 12.8 1.92 19.008 3.84 5.12 1.92 10.24 3.84 15.36 6.4 3.2 1.92 5.76 3.84 8.96 5.76 5.12 3.84 9.6 7.68 13.44 12.16 3.2 4.48 7.04 8.32 9.6 12.8 6.4 10.24 11.52 21.12 15.36 32 1.28 3.2 1.92 6.4 3.2 10.24 1.28 4.48 1.92 8.96 3.2 13.44 1.28 5.76 1.92 11.52 3.2 17.28l1.92 21.76c.64 8.96.64 18.56.64 28.16 0 12.16-.64 24.32-1.92 36.48-1.92 15.36-3.84 30.08-6.4 44.8-1.92 8.96-3.2 17.92-5.12 26.88l-3.84 15.36 8.32 2.56c15.36 4.48 30.08 9.6 45.44 15.36 11.52 4.48 23.68 9.6 35.2 15.36 10.24 5.12 20.48 10.24 30.08 16 10.88 6.4 21.12 12.8 30.72 20.48 8.32 6.4 16.64 13.44 24.32 20.48 5.76 5.76 10.88 11.52 16 17.92 3.84 5.12 7.68 10.88 10.88 16.64 4.48 8.32 7.68 16.64 10.24 25.6 1.28 5.12 1.92 10.88 1.92 16.64 0 3.2 0 7.04-.64 10.88-.64 5.76-1.92 12.16-3.84 17.92-1.28 5.76-3.84 10.88-6.4 16-5.76 10.88-12.8 21.12-21.12 30.72-2.56 3.2-5.12 5.76-7.68 8.32-3.84 3.84-7.04 7.04-10.88 10.24-4.48 3.84-9.6 8.32-14.72 11.52-6.4 5.12-12.8 9.6-19.2 13.44-8.32 5.76-17.28 10.88-26.24 15.36-11.52 5.76-22.4 11.52-33.92 16.64a576 576 0 0 1-35.2 14.08c-10.24 3.84-20.48 7.04-30.72 10.24l-3.2 1.28c1.28 5.12 2.56 10.24 3.2 15.36 1.28 7.68 3.2 15.36 4.48 23.04 2.56 15.36 5.12 31.36 6.4 46.72.64 12.16 1.28 24.32 1.28 35.84a396.288 396.288 0 0 1-3.84 50.56c-1.28 5.76-1.92 12.16-3.2 17.92l-3.84 14.08c-2.56 7.68-5.76 16-8.96 23.68-3.2 5.76-6.4 12.16-10.24 17.92-3.84 5.76-8.32 10.88-13.44 16-5.76 5.76-12.16 10.24-18.56 14.08-5.12 2.56-10.88 5.12-16 6.4-8.96 2.56-17.92 3.84-26.88 4.352-12.16.384-24.32-1.28-36.48-3.84a175.36 175.36 0 0 1-21.76-6.4c-8.32-2.56-16-6.016-23.68-9.6-9.6-4.224-18.56-8.96-27.52-14.08-10.24-5.76-20.48-12.16-30.08-19.2-24.96-17.28-48.64-37.12-70.4-58.24l-5.12 4.48c-10.24 9.6-20.48 18.56-30.72 27.52-10.88 8.32-21.76 16.64-33.28 24.96-10.24 7.04-20.48 13.44-31.36 19.84-10.24 5.76-21.12 10.88-31.36 15.36-7.68 3.2-15.36 6.4-23.04 8.96-7.68 2.304-14.72 4.48-22.4 5.76-12.16 2.56-23.68 3.84-35.84 3.584-9.6 0-19.2-1.28-28.16-4.48a61.44 61.44 0 0 1-16.64-7.04c-3.84-1.92-7.04-4.48-10.24-7.04a57.728 57.728 0 0 1-6.4-5.76 14.976 14.976 0 0 1-4.48-4.48 110.08 110.08 0 0 1-21.12-32.64l-1.92-5.76c-.64-2.56-1.92-5.12-2.56-7.04-1.28-3.2-1.92-7.04-3.2-10.24-1.28-4.48-1.92-8.32-3.2-12.8-1.28-5.76-2.56-11.136-3.2-16.832-.64-7.04-1.92-14.72-1.92-21.76-.64-9.6-.64-18.56-.64-28.16 0-12.16.64-24.32 1.92-35.84 1.28-15.36 3.84-30.08 6.4-45.44l7.68-36.48-12.8-3.84a608.64 608.64 0 0 1-44.8-16 309.76 309.76 0 0 1-30.08-13.44c-8.96-4.48-17.92-8.96-26.88-14.72a288.96 288.96 0 0 1-57.472-42.24C35.95 588.8 30.19 582.4 25.07 576a156.16 156.16 0 0 1-12.16-18.048c-3.2-5.76-5.76-11.904-8.064-18.176-.64-2.816-1.536-5.76-2.176-8.576a74.88 74.88 0 0 1-2.048-29.44c.384-2.816.832-5.76 1.472-8.512L3.95 486.4c4.096-13.44 11.2-25.984 19.84-37.12a155.712 155.712 0 0 1 16.32-18.496l10.88-9.6c4.8-3.84 9.6-7.68 14.592-11.52 6.4-4.48 13.056-8.96 19.84-13.44 8.32-5.12 17.024-10.24 25.856-14.72 11.264-5.76 22.784-10.88 34.56-16 21.12-8.96 42.752-16 64.768-22.4l5.12-1.28c-3.2-13.44-6.4-26.88-8.96-40.32-2.56-14.08-5.12-28.8-6.4-43.52-1.28-11.52-1.92-23.04-2.56-35.2-.64-8.96 0-18.56 0-28.16 0-7.04.64-14.08 1.92-21.12a160.768 160.768 0 0 1 5.76-30.72c.64-3.2 1.92-7.04 3.2-10.24l2.56-6.4c.64-1.92 1.28-3.84 2.56-5.76 5.12-11.52 11.52-23.04 20.48-32.64 1.92-1.92 3.84-3.84 6.4-5.76 1.92-1.92 3.84-3.2 5.76-5.12 2.56-1.92 5.76-3.84 8.96-5.76 5.12-2.56 10.24-5.12 16-6.4 6.4-1.92 12.8-3.2 19.2-3.84 1.92 0 3.84-.64 5.76-.64h9.6l7.04.64a259.06 259.06 0 0 1 30.72 5.76c6.4 1.92 13.44 3.84 19.84 6.4 7.04 2.56 13.44 5.76 20.48 8.96 10.24 5.12 19.84 10.24 29.44 16 10.24 6.4 20.48 12.8 30.72 19.84 11.52 8.32 23.04 17.28 34.56 26.88 8.96 7.68 17.28 15.36 26.24 23.04l5.76 5.76zm256.448 524.672a976.64 976.64 0 0 1-130.752 20.672c-2.56.64-5.12.64-7.68 1.28-11.52 17.28-24.32 34.56-37.12 50.56-13.44 17.92-27.52 35.2-42.24 51.2l-6.4 7.04c19.2 18.56 39.04 35.84 60.8 51.2 8.96 6.4 17.92 12.16 26.88 17.92 7.68 5.12 16 8.96 24.32 13.44 7.04 3.2 14.08 6.4 21.76 8.96 5.76 1.92 11.52 3.84 17.92 5.12 5.12 1.28 10.24 2.56 15.36 2.56 4.48.64 8.96.64 12.8.64 6.4 0 13.44-1.28 19.2-3.84l5.12-2.56a30.08 30.08 0 0 0 9.6-8.32c3.84-4.48 7.04-9.6 10.24-14.72 1.28-1.28 1.92-3.2 3.2-5.12l3.2-7.68c1.28-3.2 2.56-6.4 3.2-10.24 1.28-4.48 2.56-8.32 3.2-12.8 1.28-5.76 1.92-11.52 3.2-17.28 1.28-5.76 1.28-12.16 1.92-18.56.64-14.08.64-28.16-.64-42.24-.64-13.44-2.56-27.52-4.48-40.96-1.92-10.88-3.84-22.4-6.4-33.28l-2.56-10.88zm-511.552 1.92l-3.84 18.56a545.213 545.213 0 0 0-9.6 64.448c-1.28 14.336-1.28 28.8-1.28 43.136.64 5.76.64 12.16 1.28 18.56.64 5.76 1.92 10.88 2.56 16.64.64 3.84 1.92 8.32 2.56 12.16 1.28 3.2 1.92 6.4 3.2 9.6 1.28 2.56 1.92 5.12 3.2 7.68l3.2 5.76c.64 1.28 1.28 2.56 2.56 3.84l1.92 3.2 1.92 2.56c3.84 5.12 7.68 9.6 13.44 12.8l3.84 1.92c3.2 1.28 5.76 2.56 8.96 3.2 4.48.64 8.32 1.28 12.8 1.28s8.96 0 12.8-.64c5.12-.64 10.24-1.92 15.36-2.56 6.4-1.28 12.16-3.2 17.92-5.12a274.816 274.816 0 0 0 47.36-22.4c9.6-5.76 19.2-12.16 28.8-18.56 9.6-7.04 19.2-14.08 28.16-21.76 5.76-4.48 10.88-8.96 16.64-14.08 4.48-4.48 9.6-8.32 14.08-12.8l1.92-1.92-10.88-12.16c-14.72-16.64-28.8-33.92-42.88-51.2a1196.8 1196.8 0 0 1-33.92-45.44h-3.84a1657.6 1657.6 0 0 1-58.88-6.4c-17.92-2.56-35.84-5.76-53.76-8.96l-21.12-4.48zm316.8 23.168a1476.608 1476.608 0 0 1-115.2.448l-6.4-.192 13.44 16.768c12.8 15.744 25.6 31.104 39.04 46.08 3.2 3.648 6.4 7.296 10.24 10.88l5.12-5.76c13.44-15.168 26.24-30.912 39.04-47.04 5.12-6.4 10.88-13.44 16-21.12zm32-368.768a1171.072 1171.072 0 0 0-90.24-3.52h-4.48c-9.6 0-18.56.128-28.16.384-21.12 0-42.24 1.28-63.36 2.56-12.16 17.92-23.68 35.84-35.2 54.4-12.8 21.12-24.96 42.88-36.48 64.64-7.04 13.44-14.08 27.52-21.12 41.6 7.68 15.36 15.36 30.72 23.68 45.44 12.16 22.4 24.96 44.16 37.76 65.92 10.88 16.64 21.76 33.92 32.64 49.92l38.4 1.92c18.56.64 36.48.64 55.04.64 31.36 0 62.72-1.28 93.44-3.2 10.88-16 21.12-32.64 31.36-48.64 22.4-37.12 43.52-74.88 62.08-113.92-6.4-13.44-12.8-26.24-19.84-39.04-8.96-17.28-18.56-33.92-28.16-49.92-13.44-23.04-27.52-46.08-42.88-68.48l-2.56-3.84zm-303.36 213.12c-4.48 11.52-9.6 23.424-14.08 35.2a890.831 890.831 0 0 0-19.2 55.04c10.88 2.56 22.4 4.608 33.28 6.528 16 2.816 32.64 5.12 48.64 7.168 4.48.64 8.96 1.088 13.44 1.536-7.04-11.072-14.08-22.272-20.48-33.536-14.08-23.552-27.52-47.616-40.32-72zm420.48-1.664c-6.4 12.608-13.44 24.96-19.84 37.44-7.68 13.824-15.36 27.52-23.68 41.216-5.12 9.6-10.88 18.56-16.64 28.16l9.6-1.28c16-1.92 32-4.48 47.36-7.04 12.8-1.92 26.24-4.48 39.04-7.68a559.36 559.36 0 0 0-18.56-51.84c-4.48-12.8-10.24-25.6-15.36-37.76zm-495.36-179.2l-14.08 4.224a498.944 498.944 0 0 0-72.96 28.672 407.04 407.04 0 0 0-28.16 15.36c-7.68 4.8-16 10.112-23.04 15.872-5.76 4.224-10.88 8.704-16 13.568-4.48 4.032-8.32 8.32-12.16 12.8-2.56 3.52-5.12 7.04-7.68 10.88-1.92 3.2-3.84 6.4-5.12 9.856a38.72 38.72 0 0 0-3.2 14.72v3.84c0 5.632 1.92 11.264 3.84 16.448l1.28 2.752 1.92 3.328 2.56 4.48 3.84 5.44 5.12 6.144c1.92 2.56 4.48 4.992 6.4 7.36 3.2 2.944 5.76 5.76 8.96 8.576 3.84 3.2 7.04 6.208 10.88 9.152 5.12 3.84 10.24 7.68 15.36 11.264 6.4 4.48 12.8 8.96 19.84 12.8 8.96 5.12 17.92 9.6 26.88 14.08 10.88 5.12 22.4 10.24 33.28 14.72 10.24 3.84 19.84 7.68 29.44 10.24l14.72 4.48 13.44-40.32c8.32-22.4 16.64-44.16 26.24-65.92l11.52-24.32-10.88-24.32c-9.6-21.76-18.56-44.8-26.88-67.2-4.48-12.16-8.96-24.96-12.8-37.76zm570.24.64a615.68 615.68 0 0 1-10.88 32.832 679.041 679.041 0 0 1-26.88 67.84l-12.16 27.2 15.36 33.28c9.6 20.8 17.92 41.856 25.6 63.168a330.576 330.576 0 0 1 11.52 33.28l7.68-2.304c8.96-2.56 17.28-5.12 25.6-8.32 17.28-5.76 33.92-12.8 49.92-21.12 10.24-4.48 19.84-10.24 28.8-16 8.32-4.48 16-10.24 23.68-16 5.76-3.84 10.88-8.32 16-13.44 4.48-3.84 8.96-8.96 12.8-13.44 3.2-3.2 5.76-7.04 8.32-10.88 1.92-3.2 3.84-6.4 5.12-9.6 2.56-4.48 3.84-9.6 3.84-15.36.64-1.28.64-2.56 0-4.48 0-3.2-.64-7.04-1.92-10.24a42.432 42.432 0 0 0-5.76-12.16l-1.92-3.84-3.2-4.48c-1.28-1.92-3.2-3.84-4.48-5.76-1.92-1.92-3.84-4.48-6.4-7.04-2.56-2.56-5.76-5.12-8.32-7.68-3.84-3.2-7.68-6.4-12.16-9.6-4.48-3.84-9.6-7.04-14.08-10.24-6.4-4.48-12.8-8.32-19.84-12.16a332.16 332.16 0 0 0-26.24-12.8c-10.24-5.12-21.12-8.96-32-13.44-14.72-5.76-30.08-10.24-45.44-14.72zM512.11 419.84a91.52 91.52 0 1 1 0 183.104 91.52 91.52 0 0 1 0-183.104zm149.504-63.36c11.264 17.536 22.08 35.456 32.512 53.568 9.6 16.768 19.072 33.728 28.16 50.88 5.44-12.928 10.688-25.984 15.68-39.168 5.76-16.192 11.52-32.512 16.64-49.024a998.144 998.144 0 0 0-94.08-16.32zm-298.88-.192a989.952 989.952 0 0 0-74.56 12.16c-5.76 1.152-12.16 2.432-17.92 3.84 5.76 17.6 11.52 35.072 17.92 52.288 4.48 12.16 9.6 24.32 14.72 36.288 11.52-21.76 23.68-44.16 36.48-65.28 8.32-12.8 16-26.24 24.32-39.04zm404.032-25.728l1.92-8.512c2.56-11.136 4.48-22.272 6.4-33.536 2.56-14.592 3.84-29.44 5.12-44.16.64-14.4 1.28-28.928.64-43.392-.64-6.528-.64-13.12-1.92-19.584-.64-5.76-1.92-11.328-2.56-16.896-1.28-4.352-1.92-8.64-3.2-12.8-1.28-3.2-1.92-6.4-3.2-9.6l-1.856-7.424-2.368-4.992c-.832-1.536-1.6-3.072-2.56-4.48a27.2 27.2 0 0 0-2.24-3.712c-.64-.832-1.152-1.728-1.728-2.56a42.816 42.816 0 0 0-18.56-15.36 46.528 46.528 0 0 0-14.72-3.2c-1.28 0-2.56 0-3.84-.128h-1.28c-1.28 0-2.56 0-4.48.192-3.84 0-7.68.64-11.52 1.28-4.48.64-9.6 1.92-14.08 3.2l-17.28 5.76c-6.4 2.56-12.8 5.76-19.84 8.96-8.32 3.84-16 8.96-24.32 13.44-8.32 5.12-17.28 10.88-25.6 17.28-20.48 14.72-39.68 31.36-58.24 49.28l8.32 8.96c16.64 17.92 32 36.48 46.72 55.68 10.88 13.44 21.12 28.16 31.36 42.24l26.24 2.56c19.2 1.92 38.4 5.12 57.6 8.32 17.92 2.56 35.84 6.4 53.12 10.24zM482.03 200.768c-.96-.832-1.92-1.664-2.752-2.56a621.504 621.504 0 0 0-55.552-46.016c-9.6-6.528-18.56-12.672-28.16-18.432-8.32-4.992-17.28-9.6-25.6-13.888-6.4-3.008-12.8-5.76-19.2-8.32a242.368 242.368 0 0 0-17.92-5.76c-4.48-1.28-8.96-2.176-13.44-3.008-4.48-.64-8.32-1.152-12.16-1.408l-4.48-.128h-.64c-1.28 0-2.56 0-3.84.128a53.504 53.504 0 0 0-24.32 6.912 36.8 36.8 0 0 0-9.6 8.64c-3.84 4.48-7.04 9.408-9.6 14.592l-2.56 5.376c-1.28 1.92-1.92 4.48-2.56 7.04-1.28 3.2-2.56 5.76-3.2 8.96-.64 3.84-1.92 8.32-2.56 12.16-.64 5.12-1.92 10.24-2.56 16-.64 5.76-1.28 12.16-1.28 18.56-.64 14.08 0 28.16.64 42.24 1.28 21.76 5.12 43.52 9.6 65.28 1.28 7.04 3.2 14.08 4.48 21.12 6.4-1.92 13.44-3.2 19.84-4.48 15.36-3.2 31.36-6.4 47.36-8.32 17.28-3.2 35.2-5.12 52.48-7.04l16-1.92c10.24-14.72 21.12-28.8 32-42.88 14.08-17.92 28.8-35.84 44.16-52.48l11.52-12.8zM512.621 232l-10.432 11.52a990.001 990.001 0 0 0-39.552 47.232l-10.88 14.08a1229.376 1229.376 0 0 1 54.4-1.472h7.424a1327.36 1327.36 0 0 1 59.264 1.408l-10.24-12.8c-13.44-17.408-27.52-34.432-42.24-50.816L512.11 232z'
    })
  );
};

var recycle = function recycle(props) {
  return React.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: '20',
      height: '20',
      viewBox: '0 0 20 20'
    }, props),
    React.createElement('path', {
      d: 'M14.444 1.097V3.29h5.273a.284.284 0 0 1 .283.284v.836a.285.285 0 0 1-.282.285h-1.75v14.208c0 .604-.5 1.097-1.11 1.097H3.074a1.108 1.108 0 0 1-1.111-1.097V4.695H.29A.286.286 0 0 1 0 4.41v-.836c0-.155.125-.282.283-.284h5.273V1.097C5.556.493 6.055 0 6.666 0h6.668c.61 0 1.11.493 1.11 1.097zM3.334 18.643h13.332V4.66H3.334v13.982zM6.964 3.29h6.18V1.4H6.965v1.89zM5.556 15.468V7.405a.349.349 0 0 1 .104-.253.358.358 0 0 1 .256-.102h.708a.357.357 0 0 1 .256.102.348.348 0 0 1 .104.253v8.063a.349.349 0 0 1-.104.252.358.358 0 0 1-.256.102h-.708a.352.352 0 0 1-.36-.354zm4.96.354H9.8a.36.36 0 0 1-.357-.354V7.405c0-.203.16-.355.357-.355h.715a.36.36 0 0 1 .357.355v8.063c0 .202-.16.354-.357.354zm2.818-.354V7.405a.349.349 0 0 1 .104-.253.358.358 0 0 1 .256-.102h.707a.357.357 0 0 1 .257.102.348.348 0 0 1 .104.253v8.063a.349.349 0 0 1-.105.252.358.358 0 0 1-.256.102h-.707a.352.352 0 0 1-.36-.354z'
    })
  );
};

var search = function search(props) {
  return React.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: '12',
      height: '12',
      viewBox: '0 0 12 12'
    }, props),
    React.createElement('path', {
      d: 'M11.896 11.388L8.98 8.472a5.095 5.095 0 0 0 1.257-3.355A5.122 5.122 0 0 0 5.118 0 5.122 5.122 0 0 0 0 5.117a5.124 5.124 0 0 0 5.118 5.116 5.098 5.098 0 0 0 3.356-1.256l2.917 2.917a.35.35 0 0 0 .506 0 .36.36 0 0 0 0-.506zM.716 5.117a4.404 4.404 0 0 1 4.4-4.399c2.426 0 4.398 1.975 4.398 4.399s-1.972 4.4-4.399 4.4a4.406 4.406 0 0 1-4.4-4.4z'
    })
  );
};

var setting = function setting(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M512.17 264.192a241.664 241.664 0 1 0 0 483.413 241.664 241.664 0 0 0 0-483.413zm0 436.31a194.56 194.56 0 1 1 0-389.12 194.56 194.56 0 0 1 0 389.12z'
    }),
    React.createElement('path', {
      d: 'M976.384 574.464a259.328 259.328 0 0 0-7.765-4.096c-3.755-1.877-7.254-3.67-10.496-5.632a66.304 66.304 0 0 1-32.427-48.213 67.157 67.157 0 0 1 19.883-55.211c10.154-10.24 22.784-16.896 36.181-23.893l2.816-1.366c27.819-14.506 41.643-37.546 38.997-65.024-4.266-43.946-16.128-79.872-36.096-109.824-18.688-27.989-38.314-40.533-63.488-40.533-10.24 0-21.504 2.048-34.56 6.315a221.867 221.867 0 0 1-30.464 8.021 62.379 62.379 0 0 1-10.496.853c-29.184 0-56.32-20.48-63.146-47.616-3.926-15.872-2.048-32.938 5.632-52.309 11.946-29.867 5.12-57.173-19.968-81.493-12.8-12.459-30.55-27.819-53.248-35.84-29.014-10.496-52.48-17.408-72.107-17.408-31.573 0-53.163 17.066-76.715 61.013a61.952 61.952 0 0 1-55.808 33.963 72.96 72.96 0 0 1-60.16-33.28c-3.157-4.694-5.802-9.814-8.533-15.104-2.219-4.267-4.523-8.79-7.168-13.142C423.851 12.46 404.309.768 380.928.768a75.776 75.776 0 0 0-9.045.597c-24.15 2.902-52.139 7.51-77.398 19.798-70.997 34.304-77.909 64.426-66.56 118.869 9.984 47.53-7.424 81.323-46.506 90.368a76.544 76.544 0 0 1-17.408 1.877c-11.691 0-24.235-2.218-40.534-7.338a84.31 84.31 0 0 0-25.002-4.096c-21.334 0-39.936 9.642-55.296 28.672C26.624 270.08 15.019 294.4 6.57 326.144-9.387 386.56 4.267 418.219 58.88 447.061c21.504 11.35 35.84 27.648 40.107 45.739a57.173 57.173 0 0 1-10.667 46.933c-10.24 14.507-24.747 25.771-44.203 34.134-27.306 11.946-42.154 33.45-42.752 62.378-1.194 52.907 16.128 98.816 51.371 136.534a65.024 65.024 0 0 0 49.408 20.992c4.437 0 9.13-.342 13.91-1.11 5.375-.853 10.666-1.962 15.786-3.157 9.045-1.963 17.493-3.755 25.6-3.755a46.08 46.08 0 0 1 6.144.342l1.195.17 1.109-.17a62.123 62.123 0 0 1 8.107-.512c17.322 0 32.682 7.936 42.154 21.845 9.814 14.507 11.776 33.28 5.035 50.347a114.944 114.944 0 0 0-3.755 11.69c-.853 3.072-1.621 5.974-2.56 8.534-11.434 31.829-4.778 59.221 19.627 81.749 24.747 22.613 55.723 38.4 94.72 48.299 19.03 4.864 32.768 6.997 44.544 6.997 35.072 0 53.76-20.31 75.69-57.856 15.873-26.965 36.011-40.107 61.611-40.107H512c25.685.342 44.8 12.971 60.16 39.68 1.707 2.987 3.328 5.974 4.95 9.302 2.303 4.437 4.693 9.13 7.594 13.653 14.677 23.296 35.157 35.157 60.757 35.157 4.267 0 8.79-.341 13.312-1.024a238.677 238.677 0 0 0 97.11-36.096c38.57-25.088 50.517-59.989 34.389-100.949-9.813-24.917-8.277-50.603 4.01-68.608 10.497-15.36 27.649-23.552 49.665-23.552 4.864 0 10.069.427 15.36 1.28l4.608.597c6.144.939 12.032 1.792 17.834 3.072 11.435 2.56 21.59 3.84 31.062 3.84 33.28 0 57.856-15.36 79.53-49.749 15.531-24.747 24.832-52.48 28.416-85.163 4.096-37.205-10.752-65.45-44.288-84.053zM745.045 880.299c12.63 41.13 9.558 48.896-27.306 69.12a165.717 165.717 0 0 1-30.55 13.397c-17.92 5.547-30.208 8.79-39.85 8.79-13.568 0-23.211-5.803-38.4-37.547-18.774-39.254-53.675-60.928-98.134-60.928h-.512c-41.216.17-74.752 21.504-99.754 63.573-17.238 29.013-22.187 35.243-36.011 35.243-7.339 0-17.067-1.792-31.403-4.864a172.117 172.117 0 0 1-77.397-38.4c-13.653-11.776-16.47-22.784-9.813-38.059 8.533-19.883 16.64-43.776 10.837-71.168-10.155-48.384-45.653-78.507-92.757-78.507-5.291 0-10.752.427-16.214 1.195a1083.733 1083.733 0 0 0-25.77 3.84c-12.032 1.963-20.31 2.901-26.966 2.901-19.114 0-26.965-6.997-42.154-37.29a188.501 188.501 0 0 1-14.507-39.766c-5.461-22.613-6.144-32.768-2.816-40.106 3.67-8.363 14.08-15.36 32-25.43 58.88-33.28 82.176-94.378 55.296-145.322a128 128 0 0 0-64-58.027c-19.627-8.533-27.307-22.101-24.832-43.776 3.328-30.293 13.91-57.173 31.403-79.787 8.192-10.581 16.042-15.274 25.6-15.274 3.584 0 7.68.682 12.117 2.133 17.067 5.376 33.877 10.24 51.541 10.24 5.12 0 10.07-.427 14.763-1.195 36.523-6.314 61.44-21.077 76.288-45.226 12.459-20.139 17.835-46.08 17.408-84.139a17.408 17.408 0 0 0-1.024-5.12l-.17-.768c-8.705-51.115-2.646-61.696 45.994-80.64 9.472-3.755 18.859-6.741 27.819-8.96 14.336-3.413 25.088-5.973 32.512-5.973 11.434 0 16.042 6.058 32.426 34.218 23.552 40.534 56.832 61.014 99.158 61.014h1.792c43.008-.598 77.653-22.187 100.266-62.55 14.763-26.282 20.651-32 33.28-32 7.168 0 16.64 1.963 28.758 4.779 19.882 4.779 34.56 11.008 46.336 19.627 19.626 14.25 28.586 23.637 31.232 32.426 2.474 8.192-.427 17.75-5.803 33.792-11.52 34.731-6.656 70.486 13.312 98.134 20.31 28.33 53.675 44.458 91.392 44.458h.853a62.464 62.464 0 0 0 4.779.171c17.323 0 36.437-6.656 53.333-12.63a37.547 37.547 0 0 1 12.288-2.389c7.766 0 14.251 3.414 20.48 10.838 22.699 27.306 34.816 60.416 36.779 100.949.683 13.739-8.875 19.37-24.576 27.477l-.17.086c-25.771 13.312-61.014 36.437-69.974 83.712-9.557 50.346 11.435 96.085 53.504 116.565 48.128 23.296 46.25 37.717 31.317 89.173a115.285 115.285 0 0 1-22.613 39.766c-10.07 12.458-21.333 18.517-34.56 18.517a53.419 53.419 0 0 1-14.933-2.304 181.93 181.93 0 0 0-51.286-8.107 131.413 131.413 0 0 0-22.186 1.878c-29.184 4.949-53.59 21.248-68.608 45.738-16.214 26.454-19.798 60.075-9.814 92.502z'
    })
  );
};

var success = function success(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M511.996 9.862C234.668 9.862 9.862 234.675 9.862 512c0 277.328 224.806 502.138 502.134 502.138 277.321 0 502.138-224.81 502.138-502.138.004-277.325-224.813-502.138-502.138-502.138zM824.89 388.75L473.502 727.583a56.476 56.476 0 0 1-15.588 11.03c-22.066 15.76-52.916 13.756-72.73-6.062L234.284 581.653c-22.065-22.066-22.065-57.833 0-79.884 22.055-22.065 57.822-22.065 79.887 0l113.292 113.285 317.532-306.192c22.061-22.062 57.832-22.062 79.883 0 22.076 22.058 22.076 57.825.01 79.887zm0 0'
    })
  );
};

var theme = function theme(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M511.597.292C138.131.292 0 326.984 0 510.21c0 183.225 132.796 513.278 500.78 513.278 0 0 91.43 1.608 91.43-80.906s-41.074-56.129-41.074-115.474c0-59.492 41.074-85.803 60.807-85.803 19.733 0 149.752 9.867 222.18-18.27 72.208-27.846 189.072-116.937 189.072-268.809 0-133.673-138.132-453.86-511.598-453.86zM199.742 511.89a88.945 88.945 0 0 1-88.872-89.091 88.945 88.945 0 0 1 177.67 0 89.091 89.091 0 0 1-88.798 89.164zM367.254 291.39a88.945 88.945 0 0 1-88.872-89.164c0-49.26 39.758-89.164 88.872-89.164 48.967 0 88.872 39.905 88.872 89.164 0 49.26-39.759 89.164-88.872 89.164zm284.886 0c-48.967 0-88.798-39.904-88.798-89.164s39.758-89.164 88.798-89.164c48.968 0 88.872 39.905 88.872 89.164 0 49.26-39.758 89.164-88.872 89.164zm169.12 220.572c-48.967 0-88.799-39.905-88.799-89.164 0-49.26 39.759-89.164 88.799-89.164 49.113 0 88.872 39.904 88.872 89.164a88.872 88.872 0 0 1-88.872 89.164z'
    })
  );
};

var triangleDown = function triangleDown(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M984.436 113.664L524.477 910.337 64.518 113.664z'
    })
  );
};

var triangleUp = function triangleUp(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M39.564 910.336l459.959-796.673 459.959 796.673z'
    })
  );
};

var upload = function upload(props) {
  return React.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: '14',
      height: '14',
      viewBox: '0 0 14 14'
    }, props),
    React.createElement('path', {
      d: 'M13 13H1V7.5H0V14h14V7.5h-1z'
    }),
    React.createElement('path', {
      d: 'M6.5 1v9h1V1z'
    }),
    React.createElement('path', {
      d: 'M7.004 1.67l3.163 2.822.666-.747L7.005.33 3.167 3.745l.665.747z'
    })
  );
};

var visible = function visible(props) {
  return React.createElement(
    'svg',
    _extends({
      xmlns: 'http://www.w3.org/2000/svg',
      width: '21',
      height: '15',
      viewBox: '0 0 21 15'
    }, props),
    React.createElement('path', {
      d: 'M10.5 13.8c3.117 0 6.03-1.9 8.763-5.844a.8.8 0 0 0 0-.912C16.53 3.1 13.617 1.2 10.5 1.2S4.47 3.1 1.737 7.044a.8.8 0 0 0 0 .912C4.47 11.9 7.383 13.8 10.5 13.8zm0 1.2C6.94 15 3.69 12.88.75 8.64a2 2 0 0 1 0-2.28C3.69 2.12 6.94 0 10.5 0c3.56 0 6.81 2.12 9.75 6.36a2 2 0 0 1 0 2.28C17.31 12.88 14.06 15 10.5 15z'
    }),
    React.createElement('path', {
      d: 'M10.5 9.8a2.3 2.3 0 1 0 0-4.6 2.3 2.3 0 0 0 0 4.6zm0 1.2a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z'
    })
  );
};

var warning = function warning(props) {
  return React.createElement(
    'svg',
    _extends({
      className: 'icon',
      viewBox: '0 0 1024 1024',
      xmlns: 'http://www.w3.org/2000/svg',
      width: '200',
      height: '200'
    }, props),
    React.createElement(
      'defs',
      null,
      React.createElement('style', null)
    ),
    React.createElement('path', {
      d: 'M511.999 0C228.937 0 0 228.937 0 511.999c0 283.064 228.937 511.999 511.999 511.999 283.064 0 511.999-228.934 511.999-511.999C1023.997 228.937 795.063 0 511.999 0zm0 804.568c-40.227 0-73.142-32.915-73.142-73.14 0-40.23 32.915-73.145 73.142-73.145 40.23 0 73.145 32.915 73.145 73.145 0 40.225-32.915 73.14-73.145 73.14zm73.145-292.569c0 40.23-32.915 73.145-73.145 73.145-40.227 0-73.142-32.915-73.142-73.145V292.572c0-40.23 32.915-73.145 73.142-73.145 40.23 0 73.145 32.915 73.145 73.145v219.427z'
    })
  );
};

var ICONS = {
  account: account,
  'arrow-down': arrowDown,
  'arrow-left': arrowLeft,
  'arrow-right': arrowRight,
  'arrow-up': arrowUp,
  attachment: attachment,
  car: car,
  caution: caution,
  check: check,
  clock: clock,
  close: close,
  code: code,
  copy: copy,
  customise: customise,
  'double-arrow-left': doubleArrowLeft,
  'double-arrow-right': doubleArrowRight,
  ellipsis: ellipsis,
  error: error$1,
  fail: fail,
  finance: finance,
  home: home,
  info: info,
  local: local,
  paper: paper,
  plus: plus,
  question: question,
  question2: question2,
  react: react,
  recycle: recycle,
  search: search,
  setting: setting,
  success: success,
  theme: theme,
  'triangle-down': triangleDown,
  'triangle-up': triangleUp,
  upload: upload,
  visible: visible,
  warning: warning
};

var _class$1;
var _temp$1;

/**
 * Icon Component
 * @author ryan.bian
 */
var Icon = (_temp$1 = _class$1 = function (_PureComponent) {
  inherits(Icon, _PureComponent);

  function Icon(props) {
    classCallCheck(this, Icon);

    var _this = possibleConstructorReturn(this, (Icon.__proto__ || Object.getPrototypeOf(Icon)).call(this, props));

    _this.state = {};
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  createClass(Icon, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          name = _props.name,
          size = _props.size,
          color = _props.color,
          className = _props.className,
          otherProps = objectWithoutProperties(_props, ['name', 'size', 'color', 'className']);

      var svgProps = _extends({
        style: {
          fontSize: size,
          fill: color
        },
        className: classnames(className, styles$1.Icon),
        'aria-hidden': true
      }, otherProps);
      var IconNode = ICONS[name];
      return React.createElement(IconNode, svgProps);
    }
  }]);
  return Icon;
}(PureComponent), _class$1.displayName = 'Icon', _class$1.defaultProps = {
  name: '',
  size: 32,
  color: null }, _class$1.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  color: PropTypes.string
}, _temp$1);

var _class;
var _temp;

/**
 * Pagination Component
 * @author ryan.bian
 */
var Pagination = (_temp = _class = function (_PureComponent) {
  inherits(Pagination, _PureComponent);

  function Pagination(props) {
    classCallCheck(this, Pagination);

    // this.state = {
    //   current: props.current || props.defaultCurrent,
    //   pageSize: props.pageSize || props.defaultPageSize,
    // };
    var _this = possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).call(this, props));

    _this.handleClickPrev = function () {
      if (_this.state.current > 1) {
        _this.handleChangeIndex(_this.state.current - 1);
      }
    };

    _this.handleClickNext = function () {
      if (_this.state.current < Math.ceil(_this.props.total / _this.state.pageSize)) {
        _this.handleChangeIndex(_this.state.current + 1);
      }
    };

    _this.handleChangeIndex = function (index) {
      if (typeof _this.props.current === 'undefined') {
        _this.setState({
          current: index
        });
      }
      _this.props.onChange(index, _this.state.pageSize);
    };

    _this.handleChangeIndexPageSize = function (e) {
      var newPageSize = +e.target.value;
      var total = _this.props.total;
      var current = _this.state.current;

      var maxPages = Math.ceil(total / newPageSize);
      var newCurrent = void 0;
      if (current > maxPages) {
        newCurrent = maxPages;
      } else {
        newCurrent = current;
      }
      if (typeof _this.props.pageSize === 'undefined') {
        _this.setState({
          pageSize: newPageSize,
          current: newCurrent
        });
      }
      _this.props.onSizeChange(newPageSize, newCurrent);
    };

    _this.handleJumper = function (e) {
      if (e.key === 'Enter') {
        var total = _this.props.total;
        var pageSize = _this.state.pageSize;

        var maxPage = Math.ceil(total / pageSize);
        var value = e.target.value;
        if (/^[1-9]+[0-9]*$/.test(value)) {
          value = Number(value);
          if (value <= maxPage) {
            _this.handleChangeIndex(value);
          }
        }
      }
    };

    _this.state = _this.getStateByProps(props.current || props.defaultCurrent, props.pageSize || props.defaultPageSize, props.total);
    return _this;
  }

  // https://facebook.github.io/react/docs/typechecking-with-proptypes.html


  createClass(Pagination, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // const state = {
      //   current: this.state.current,
      //   pageSize: this.state.pageSize,
      // };
      // if (typeof nextProps.current !== 'undefined') {
      //   assign(state, {
      //     current: nextProps.current,
      //   });
      // }
      // if (typeof nextProps.pageSize !== 'undefined') {
      //   assign(state, {
      //     pageSize: nextProps.pageSize,
      //   });
      // }
      // const lastPage = Math.ceil(nextProps.total / state.pageSize);
      // if (state.current > lastPage) {
      //   assign(state, {
      //     current: lastPage,
      //   });
      // }
      // this.setState(state);
      this.setState(this.getStateByProps(nextProps.current, nextProps.pageSize, nextProps.total));
    }
  }, {
    key: 'getStateByProps',
    value: function getStateByProps(current, pageSize, total) {
      var state = {
        current: this.state ? this.state.current : 1,
        pageSize: this.state ? this.state.pageSize : 1
      };
      if (typeof current !== 'undefined') {
        objectAssign(state, {
          current: current
        });
      }
      if (typeof pageSize !== 'undefined') {
        objectAssign(state, {
          pageSize: pageSize
        });
      }
      var lastPage = Math.ceil(total / state.pageSize);
      if (state.current > lastPage) {
        objectAssign(state, {
          current: lastPage
        });
      }
      return state;
    }
  }, {
    key: 'getItemProps',
    value: function getItemProps(index) {
      var _this2 = this;

      var current = this.state.current;

      var active = current === index;
      return {
        className: classnames(styles.pagination__item, defineProperty({}, styles['pagination__item--active'], active)),
        onClick: active ? null : function () {
          return _this2.handleChangeIndex(index);
        }
      };
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var total = this.props.total;
      var pageSize = this.state.pageSize;

      var items = [];
      var firstPage = 1;
      var lastPage = Math.ceil(total / pageSize);
      var current = this.state.current > lastPage ? lastPage : this.state.current;

      if (total > 1) {
        var start = void 0;
        var end = void 0;
        if (current === firstPage) {
          start = firstPage + 1;
          end = firstPage + 1;
        } else if (current === lastPage) {
          start = lastPage - 1;
          end = lastPage - 1;
        } else {
          start = current;
          end = current;
        }
        while (true) {
          if (end - start >= 3 || start <= firstPage + 1 && end >= lastPage - 1) break;
          if (start > firstPage + 1) start -= 1;
          if (end < lastPage - 1) end += 1;
        }

        items.push(React.createElement(
          'li',
          { key: firstPage },
          React.createElement(
            'button',
            this.getItemProps(firstPage),
            firstPage
          )
        ));
        if (start !== firstPage + 1 && start !== firstPage) {
          items.push(React.createElement(
            'li',
            { key: 'front', className: styles.pagination__ellipsis },
            React.createElement(Icon, { name: 'ellipsis', size: 12 })
          ));
        }
        for (var i = start; i <= end; i += 1) {
          var btnProps = this.getItemProps(i);
          items.push(React.createElement(
            'li',
            { key: i },
            React.createElement(
              'button',
              btnProps,
              i
            )
          ));
        }
        if (end !== lastPage - 1 && end !== lastPage) {
          items.push(React.createElement(
            'li',
            { key: 'back', className: styles.pagination__ellipsis },
            React.createElement(Icon, { name: 'ellipsis', size: 12 })
          ));
        }
        items.push(React.createElement(
          'li',
          { key: lastPage },
          React.createElement(
            'button',
            this.getItemProps(lastPage),
            lastPage
          )
        ));
      } else if (total === 1) {
        var _btnProps = this.getItemProps(1);
        items.push(React.createElement(
          'li',
          { key: 1 },
          React.createElement(
            'button',
            _btnProps,
            '1'
          )
        ));
      }

      return React.createElement(
        'ul',
        { className: styles.pagination__pages },
        items
      );
    }
  }, {
    key: 'renderControl',
    value: function renderControl(direction) {
      var ctrlProps = {
        className: styles.pagination__ctrl,
        onClick: direction === 'prev' ? this.handleClickPrev : this.handleClickNext
      };
      var content = void 0;
      if (direction === 'prev') {
        content = React.createElement(Icon, { name: 'double-arrow-left', size: 12 });
      } else {
        content = React.createElement(Icon, { name: 'double-arrow-right', size: 12 });
      }
      return React.createElement(
        'button',
        ctrlProps,
        content
      );
    }
  }, {
    key: 'renderSizeChanger',
    value: function renderSizeChanger() {
      var _props = this.props,
          showSizeChanger = _props.showSizeChanger,
          pageSizeOptions = _props.pageSizeOptions;
      var pageSize = this.state.pageSize;

      if (showSizeChanger) {
        return React.createElement(
          'select',
          {
            className: styles.pagination__sizeChanger,
            value: pageSize,
            onChange: this.handleChangeIndexPageSize
          },
          pageSizeOptions.map(function (size) {
            return React.createElement(
              'option',
              { key: size, value: size },
              size + ' / \u9875'
            );
          })
        );
      }
      return null;
    }
  }, {
    key: 'renderQuickJumper',
    value: function renderQuickJumper() {
      var showQuickJumper = this.props.showQuickJumper;

      var textFieldProps = {
        type: 'text',
        className: styles.pagination__jumperField,
        onKeyPress: this.handleJumper
      };
      if (showQuickJumper) {
        return React.createElement(
          'span',
          { className: styles.pagination__jumper },
          '\u8DF3\u81F3 ',
          React.createElement('input', textFieldProps),
          ' \u9875'
        );
      }
      return null;
    }
  }, {
    key: 'renderTotal',
    value: function renderTotal() {
      var _props2 = this.props,
          showTotal = _props2.showTotal,
          total = _props2.total;

      if (showTotal) {
        return React.createElement(
          'span',
          { className: styles.pagination__total },
          '\u5171\u8BA1 ' + total + ' \u6761'
        );
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _classnames2;

      var size = this.props.size;

      var smallSize = size === 'small';
      var wrapProps = {
        className: classnames(styles.pagination, (_classnames2 = {}, defineProperty(_classnames2, styles['pagination--small'], smallSize), defineProperty(_classnames2, styles['pagination--normal'], !smallSize), _classnames2))
      };
      return React.createElement(
        'div',
        wrapProps,
        this.renderTotal(),
        this.renderControl('prev'),
        this.renderItems(),
        this.renderControl('next'),
        this.renderSizeChanger(),
        this.renderQuickJumper()
      );
    }
  }]);
  return Pagination;
}(PureComponent), _class.displayName = 'Pagination', _class.defaultProps = {
  current: undefined,
  defaultCurrent: 1,
  total: 0,
  pageSize: undefined,
  defaultPageSize: 10,
  onChange: function onChange() {},

  showSizeChanger: false,
  onSizeChange: function onSizeChange() {},

  pageSizeOptions: [10, 20, 30, 40],
  showQuickJumper: false,
  size: '',
  showTotal: false }, _class.propTypes = {
  current: PropTypes.number,
  defaultCurrent: PropTypes.number,
  total: PropTypes.number,
  pageSize: PropTypes.number,
  defaultPageSize: PropTypes.number,
  onChange: PropTypes.func,
  showSizeChanger: PropTypes.bool,
  onSizeChange: PropTypes.func,
  pageSizeOptions: PropTypes.arrayOf(PropTypes.number),
  showQuickJumper: PropTypes.bool,
  size: PropTypes.string,
  showTotal: PropTypes.bool
}, _temp);

export default Pagination;
//# sourceMappingURL=pagination.js.map
