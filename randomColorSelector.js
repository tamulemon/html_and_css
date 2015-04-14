//both are valid method to pick 10 random color dots
// color format # hexdecimal
var html = '';
var colorArray = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];
var len = colorArray.length;
var finalOutput = [];

for (var j=0; j<10; j++){
  var output = '';
  for (var i=0; i<6; i++){
      var ind = Math.floor(Math.random()*len);
      var oneColor = colorArray[ind];
      output += oneColor;    
  }
 html += '<div style="background-color:#' + output + '"></div>';
}
document.write(html);

//color format rgb(..,..,..) in decimal
var html = '';
for (var j=0; j<10; j++){
  var rgb1 = [];
  for (var i=0; i<3; i++){
      var oneColor = Math.floor(Math.random()*256);
      rgb1.push(oneColor);
  }
  var rgbColor = rgb1.join(', ');
  html += '<div style="background-color: rgb(' + rgbColor + ')"></div>';
}
document.write(html);
html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Color Blocks</title>
  <link rel="stylesheet" href="css/styles.css">
</head>
<body id="color">
<script src="js/mengScript.js"></script>
</body>
</html>
Css
@import url('http://necolas.github.io/normalize.css/3.0.2/normalize.css');

/*General*/
body {
  background: #fff;
  max-width: 980px;
  margin: 50px auto;
  padding: 0 20px;
  font: Helvetica Neue, Helvectica, Arial, serif;
  font-weight: 300;
  font-size: 1em;
  line-height: 1.5em;
  color: #8d9aa5;
}

a {
  color: #3f8aBf;
  text-decoration: none;
}

a:hover {
  color: #3079ab;
}

a:visited {
  color: #5a6772;
}

h1, h2, h3 {
  font-weight: 500;
  color: #384047;
}

h1 {
  font-size: 1.8em;
  margin: 60px 0 40px;
}

h2 {
    font-size: 1em;
    font-weight: 300;
    margin: 0;
    padding: 10px 0 30px 0;
}

#home h2 {
  margin: -40px 0 0;
}

h3 {
  font-size: .9em;
  font-weight: 300;
  margin: 0;
  padding: 0;
}

h3 em {
  font-style: normal;
  font-weight: 300;
  margin: 0 0 10px 5px;
  padding: 0;
  color: #8d9aa5;
}

ol {
  margin: 0 0 20px 32px;
  padding: 0;
}

#home ol {
  list-style-type: none;
  margin: 0 0 40px 0;
}

li {
  padding: 8px 0;
  display: list-item;
  width: 100%;
  margin: 0;
  counter-increment: step-counter;
}

#home li::before {
    content: counter(step-counter);
    font-size: .65em;
    color: #fff;
    font-weight: 300;
    padding: 2px 6px;
    margin:  0 18px 0 0;
    border-radius: 3px;
    background:#8d9aa5;
    line-height: 1em;
}

.lens {
  display: inline-block;
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-right: 8px solid #8d9aa5;
  border-radius: 5px;
  position: absolute;
  margin: 5px 0 0 -19px;
}

#color div {
  width: 50px;
  height: 50px;
  display: inline-block;
  border-radius: 50%;
  margin: 5px;
}

span {
  color: red;
}
