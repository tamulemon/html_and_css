<!DOCTYPE html>
<html>
<head>
<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" title="no title" charset="utf-8">
</head>
<body>
	<div id="menu">
		<ul>
			<li class="selected"><a href="index.html">Home</a></li>
			<li><a href="about.html">About</a></li>
			<li><a href="contact.html">Contact</a></li>
			<li><a href="support.html">Support</a></li>
			<li><a href="faqs.html">FAQs</a></li>
			<li><a href="events.html">Events</a></li>
		</ul>
	</div>
	<h1>Home</h1>
	<p>This is the home page.</p>
	<script src="http://code.jquery.com/jquery-1.11.0.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/app.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>
var $select = $('<select></select>');
$('#menu').append($select);
$('#menu a').each(function(){
  var $option = $('<option></option>');
  $option.text($(this).text());
  $option.val($(this).attr('href'));
//  console.log(option);
  $select.append($option);
  if($(this).parent().hasClass('selected')){
    $option.prop('selected',true);
  }
})
//var $button = $('<button>Go</button>');
//$('#menu').append($button);
//$button.click(function(){
//  window.location = $select.val();
//});

$select.change(function(){
  window.location =$select.val();
});
* {
	margin: 0;
	padding: 0;
	font-family: sans-serif;
}

body {
	background: #fff;
}

#menu {
	background: #384047;
	height: 60px;
	padding: 0 5px 0;
	text-align: center;
}

ul {
	list-style: none;
}

ul li {
	display: inline-block;
  float:inherit;
	width: 84px;
	text-align: center;
}

ul li a {
	color: #fff;
	width: 100%;
	line-height: 60px;
	text-decoration: none;
}

ul li.selected {
	background: #fff;
  line-height: 60px;
}

ul li.selected a {
	color: #384047;
}

select {
	width: 84%;
	margin: 11px  0 11px 2%;
/*	float: left;*/
}

button {
	display: inline-block;
	line-height: 18px;
	padding: 0 5px;
	margin: 11px 2% 11px 0;
	float: right;
	width: 10%;
}

h1 {
	margin: 40px 0 10px;
	text-align: center;
	color: #384047;
}
p {
	text-align: center;
	color: #777;
}
/** Start Coding Here **/

@media (min-width:320px) and (max-width: 568px){
  #menu ul {
    display:none;
}
}

@media (min-width: 569px) {
  #menu select, #menu button {
}
}
