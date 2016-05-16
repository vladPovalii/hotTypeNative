require('expose?$!expose?jQuery!jquery');
require('bootstrap-webpack!./bootstrap.config.js');

var form = document.querySelector("#type");
var list = document.querySelector(".type-list");
form.addEventListener("submit", function(event) {
	var type_item_div = document.createElement("div");
	var type_title = document.createTextNode(form.elements.col_3.value);
	type_item_div.className = "type-item";
	type_title.className = "type-item__title";
	type_item_div.appendChild(type_title);
	list.appendChild(type_item_div);
	form.elements.col_3.value = "";
	event.preventDefault();
}); 
