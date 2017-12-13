'use strict';

$(function () {
	$('.parallax').each(function () {
		var $obj = $(this);

		$(window).scroll(function () {
			var yPos = -($(window).scrollTop() / $obj.data('speed'));
			var bgpos = '50% ' + yPos + 'px';
			$obj.css('background-position', bgpos);
		});
	});
});
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*

var bob = {
	name: 'Bob',
	friends: ['Guilherme', 'Camila', 'José'],
	printFriends: function printFriends() {
		var self = this;
		this.friends.forEach(function(f) {
			return console.log(self.name + ' knows ' + f)
		})
	}
}

bob.printFriends()

*/

var color = function color() {
	return console.log('red');
};
color();

var bob = {
	name: 'Bob',
	friends: ['Guilherme', 'Camila', 'José'],
	printFriends: function printFriends() {
		var _this = this;

		this.friends.forEach(function (f) {
			return console.log(_this.name + ' knows ' + f);
		});
	}
};

bob.printFriends();

/* Class */

var Colors = function () {
	function Colors(codeColor, nameColor) {
		_classCallCheck(this, Colors);

		this.codeColor = codeColor, this.nameColor = nameColor;
	}

	_createClass(Colors, [{
		key: 'getColor',
		value: function getColor() {
			return {
				codeColor: this.codeColor,
				nameColor: this.nameColor
			};
		}
	}]);

	return Colors;
}();

var red = new Colors('red', 'Vermelho');
console.log(red.getColor());
