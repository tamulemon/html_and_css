<!DOCTYPE html>
<html>
<head>
	<title>Simple Drawing Application</title>
	<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" title="no title" charset="utf-8">
</head>
<body>
	<canvas	width="600" height="400"></canvas>
	<div class="controls">
		<ul>
			<li class="red" class = 'selected'></li>
			<li class="blue"></li>
			<li class="yellow"></li>
		</ul>
		<button id="revealColorSelect">New Color</button>
		<div id="colorSelect">
			<span id="newColor"></span>
			<div class="sliders">
				<p>
					<label for="red">Red</label>
					<input id="red" name="red" type="range" min=0 max=255 value=0>
				</p>
				<p>
					<label for="green">Green</label>
					<input id="green" name="green" type="range" min=0 max=255 value=0>
				</p>
				<p>
					<label for="blue">Blue</label>
					<input id="blue" name="blue" type="range" min=0 max=255 value=0>
				</p>
			</div>
			<div>
			<button id="addNewColor">Add Color</button>
			</div>
		</div>
	</div>
	<script src="http://code.jquery.com/jquery-1.11.0.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/app.js" type="text/javascript" charset="utf-8"></script>	
</body>
</html>
var color;
var colorList = []
var $canvas = $('canvas') // same as document.getElementsByTagName('canvas')[0]
var ctx = $canvas[0].getContext('2d');
var draw = false;

$('#colorSelect').hide();

$('#revealColorSelect').click(function(){
  changeColor();
  $('#colorSelect').toggle();
})


///////////////////////////////////////////
//select color
$('.controls').on('click', 'li', function(){
  $(this).addClass('selected');
  $(this).siblings().removeClass('selected');
  color = $(this).css('background-color');
  $('#newColor').css('background-color',color);
})

/////////////////////////////////////////////////////
//user defined color through sliders

function changeColor(){
  var r = $('#red').val();
  var g= $('#green').val();
  var b = $('#blue').val();
  color = 'rgb(' + r +',' + g + ',' + b+')';
  $('#newColor').css('background-color', color);
}

$('input[type=range]').change(changeColor);


$('#addNewColor').click(function(){
  $('#colorSelect').hide();
  var $userColor = $('<li></li>');
  $('.controls ul').append($userColor);
  console.log($('#newColor').css('background-color'));
  $userColor.css('background-color', $('#newColor').css('background-color'));   
})


//if($canvas.getContxt){
//    ctx = $canvas[0].getContext('2d');
//} else{
////   $canvas.append('<p>Canvas Not Supported!</p>');
//}

//////////////////////////////////////////////////////////////////////////////////
// drawing on canvas

$canvas.mousedown(function(event){
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
  draw = true;
}).mousemove(function(event){
  if (draw){
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.stroke();
  ctx.strokeStyle = color;
  }
}).mouseup(function(){
  draw = false;
}).mouseleave(function(){
  $(this).mouseup();
})

 
body {
	background: #384047;
	font-family: sans-serif;
}
canvas {
	background: #fff;
	display: block;
	margin: 50px auto 10px;
	border-radius: 5px;
	box-shadow: 0 4px 0 0 #222;
	cursor: url(../img/cursor.png), crosshair;
}
.controls {
	min-height: 60px;
	margin: 0 auto;
	width: 600px;
	border-radius: 5px;
	overflow: hidden;
}
ul {
	list-style:none;
	margin: 0;
	float: 	left;
	padding: 10px 0 20px;
	width: 100%;
	text-align: center;
}

ul li {
	display:block;
	height: 54px;
	width: 54px;
	border-radius: 54px;
	cursor: pointer;
	border: 0;
	box-shadow: 0 3px 0 0 #222;
}

ul li {
	display: inline-block;
	margin: 0 5px 10px;
}

.red {
	background: #fc4c4f;
}

.blue {
	background: #4fa3fc;
}

.yellow {
	background: #ECD13F;
}

.selected {
	border: 7px solid #fff;
	width: 40px;
	height: 40px;
}


button {
	background: #68B25B;
	box-shadow: 0 3px 0 0 #6A845F;
	color: #fff;
	outline: none;
	cursor: pointer;
	text-shadow: 0 1px #6A845F;
	display: block;
	font-size: 16px;
	line-height: 40px;
}
#revealColorSelect {
	border: none;
	border-radius: 5px;
	margin: 10px auto;
	padding: 5px 20px;
	width: 160px;
}

/* New Color Palette */
#colorSelect {
	background: #fff;
	border-radius: 5px;
	clear: both;
	margin: 20px auto 0;
	padding: 10px;
	width: 305px;
	position: relative;
		
/*	display:none;*/
}
#colorSelect:after {
	bottom: 100%;
	left: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
	border-color: rgba(255, 255, 255, 0);
	border-bottom-color: #fff;
	border-width: 10px;
	margin-left: -10px;
}

#newColor {
	width: 80px;
	height: 80px;
	border-radius: 3px;
	box-shadow: none;
	float: left;
	border: none;
	margin: 10px 20px 20px 10px;

}
.sliders p {
	margin: 8px 0;
	vertical-align: middle;
}
.sliders label {
	display: inline-block;
	margin: 0 10px 0 0;
	width: 35px;
	font-size: 14px;
	color: #6D574E;
}
.sliders input {
	position: relative;
	top: 2px;
}
#colorSelect button {
	border: none;
	border-top: 1px solid #6A845F;
	border-radius: 0 0 5px 5px;
	clear: both;
	margin: 10px -10px -7px;
	padding: 5px 10px;
	width: 325px;
}
