<!DOCTYPE html>
<html>
<head>
	<title>Star Wars Spoilers</title>
	<link rel="stylesheet" href="css/style.css" type="text/css" media="screen" title="no title" charset="utf-8">
</head>
<body>
	<img src="img/deathstar.png" />
	<p class="spoiler">
		<!--Spoiler:-->
		<span>Darth Vader is Luke Skywalker's Father! Noooooooooooo!</span>
	</p>
  <p class="spoiler">
		<!--Spoiler:-->
		<span>Luke and Lie are siblings!</span>
	</p>
	<script src="http://code.jquery.com/jquery-1.11.0.min.js" type="text/javascript" charset="utf-8"></script>
	<script src="js/app.js" type="text/javascript" charset="utf-8"></script>
</body>
</html>
//prevent spoiler to be seen
$('.spoiler span').hide();
$('.spoiler').append('<button>Reveal Spoiler!</button>');
$('.spoiler button').click(function(){
  $(this).prev().show();
//  $('.spoiler span').show();
  $(this).remove();
  // can also do :
//  $('.spoiler button').remove();
});
body {
  background: #2f558e url(../img/bg.png) repeat 0 0;
  background-size: 400px auto;
  font-family: sans-serif;
}
img {
  display: block;
  width: 150px;
  margin: 100px auto;
}
button {
  background: #dae1e4;
  border: none;
  border-radius: 5px;
  color: #1d3c6a;
  font-size: 24px;
  width: 480px;
  padding: 40px 0;
  margin: -40px -20px;
  outline: none;
  cursor: pointer;
}
.spoiler {
	background: #1d3c6a;
  width: 440px;
  margin: 0 auto 20px;
  border-radius: 5px;
  padding: 40px 20px;
  text-align: center;
  font-size: 24px
}
.spoiler span {
  color: #dae1e4;
}
