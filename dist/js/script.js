/*
export foo function(){};
export const bar = 22;
*/
"use strict";
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

/*var color = () => console.log('red')
color()



let bob = {
	name: 'Bob',
	friends: ['Guilherme', 'Camila', 'José'],
	printFriends() {
		this.friends.forEach(f => console.log(`${this.name} knows ${f}`))
	}
}

bob.printFriends()
*/
/* Class */

/*class Colors {
	constructor(codeColor, nameColor) {
		this.codeColor = codeColor,
		this.nameColor = nameColor
	}
	getColor() {
		return { 
			codeColor:this.codeColor,
			nameColor:this.nameColor
		}
	}
}

let red = new Colors('red', 'Vermelho')
console.log(red.getColor())
*/

/*import {foo, bar} from "dep";
console.log(bar);
foo();*/
"use strict";
