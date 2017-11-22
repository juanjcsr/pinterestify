import 'bootstrap';
import { info } from "./data";
import "./plugin"

$(document).ready(function () {
	$("#imagenes").pinterestify({
		data: info
	}).modalify();
});