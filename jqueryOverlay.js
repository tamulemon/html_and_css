<!DOCTYPE html>
<html>
<head>
	<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" title="no title" charset="utf-8">
	<title>Image Gallery</title>
</head>
<body>
	<h1>Image Gallery</h1>
	<ul id = 'imageGallery'>
		<li><a href="images/refferal_machine.png"><img src="images/refferal_machine.png" width="100" alt="Refferal Machine By Matthew Spiel"></a></li>
		<li><a href="images/space-juice.png"><img src="images/space-juice.png" width="100" alt="Space Juice by Mat Helme"></a></li>
		<li><a href="images/education.png"><img src="images/education.png" width="100" alt="Education by Chris Michel"></a></li>
		<li><a href="images/copy_mcrepeatsalot.png"><img src="images/copy_mcrepeatsalot.png" width="100" alt="Wanted: Copy McRepeatsalot by Chris Michel"></a></li>
		<li><a href="images/sebastian.png"><img src="images/sebastian.png" width="100" alt="Sebastian by Mat Helme"></a></li>
		<li><a href="images/skill-polish.png"><img src="images/skill-polish.png" width="100" alt="Skill Polish by Chris Michel"></a></li>
		<li><a href="images/chuck.png"><img src="images/chuck.png" width="100" alt="Chuck by Mat Helme"></a></li>
		<li><a href="images/library.png"><img src="images/library.png" width="100" alt="Library by Tyson Rosage"></a></li>
		<li><a href="images/boat.png"><img src="images/boat.png" width="100" alt="Boat by Griffin Moore"></a></li>
		<li><a href="images/illustrator_foundations.png"><img src="images/illustrator_foundations.png" width="100" alt="Illustrator Foundations by Matthew Spiel"></a></li>
		<li><a href="images/treehouse_shop.jpg"><img src="images/treehouse_shop.jpg" width="100" alt="Treehouse Shop by Eric Smith"></a></li>
	</ul>
	<script src="http://code.jquery.com/jquery-1.11.0.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/app.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>



//$('body').append('<div id="overlay" ></div>');
var $overlay = $('<div id="overlay"</div>');
var $image = $('<img>');
var $caption = $('<p></p>');
$overlay.append($image); // can manipulate overlay even before it is appended (or exist) yet to the body
$overlay.append($caption);
$('body').append($overlay);

$('#imageGallery a').click(function(event){
  event.preventDefault();
  var href = $(this).attr('href'); 
  var cap = $(this).children().attr('alt');
  $image.attr('src',href);
  $caption.text(cap);
  $overlay.show();
  $overlay.click(function(){
    $overlay.hide(); //or $this.hide();
  });
//  console.log(href);

});

//var $overlay = $('<div id="overlay"></div>');
//$('body').append($overlay);
//$('a').click(function(link){
//  link.preventDefault();
//  $overlay.show();
//})
 
body {
	font-family: sans-serif;
	background: #384047;
}
h1 {
	color: #fff;
	text-align: center
}

ul {
	list-style:none;
	margin: 0 auto;
	padding: 0;
	display: block;
	max-width: 780px;
	text-align: center;
}
ul li {
	display: inline-block;
	padding: 8px;
	background:white;
	margin:10px;
}
ul li img {
	display: block;
}
a {
	text-decoration: none;
}
/** Start Coding Here **/
#overlay{
  background-color:rgb(0,0,0,0.5);
  width:100%;
  height:100%;
  position:absolute;
  top:0;
  left:0;
  display:none;
  text-align:center;
}
#overlay img{
  margin-top: 10%;
  border: 1px solid black;
}
#overlay p{
  color:#fff;
}





