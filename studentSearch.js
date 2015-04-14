---students.js
var qAList = [['Is moon a satellite of earth?','Yes'],
              ['Is earth a satellite of sun?', 'No'], 
              ['What year are we in?', '2015']];
var right = 0;
var wrong = 0;
var rightList = [];
var wrongList = [];

var html = '';
//shuffle
function shuffle(array){
  for (var i = array.length-1; i >= 0; i--) {
    var temp;
    var j = Math.floor(Math.random() * (i + 1));
    temp = array[j];
    array[j] = array[i];
    array[i] = temp;
  }
  return array;
}

//display in window
function print(message){
  var outputDiv = document.getElementById('quizOutput'); //an object saved as a variable DOM, or a node
  outputDiv.innerHTML = message;
}

//// create an ordered list
//function createHTMLlist(list) {
//  var htmlList = '<ol>';
//  var keyList = Object.keys(list);
//  for (var i = 0; i < keyList.length; i++) {
//    htmlList += '<li>' + list[keyList[i]] + '</li>';
//  }
//  htmlList += '</ol>';
//  print(htmlList);
//}
//createHTMLlist(questionList);

function quiz(list){
  for (var i=0; i<list.length; i++) {
    var question = list[i][0];
    var answerKey = list[i][1];
    var userAnswer = prompt(question);
    if (userAnswer == answerKey || userAnswer.toUpperCase() == answerKey.toUpperCase()) {
      right += 1;
      rightList.push(question);
    }
    else {
      wrong += 1;
      wrongList.push(question);    
    }
    console.log(right);
    console.log(wrong);
  } 
}

function createOL (list) {
  var html = '<ol>';
  for (var i = 0; i < list.length; i++) {
    html += '<li>'+list[i]+'</li>';
  } html += '</ol>';
  return html;
}

quiz(qAList);

html = 'Your correct answer is: ' + right + '<br />' + 
        createOL(rightList) +'<br />'+
        'Your wrong answer is: ' + wrong + '<br />' + 
        createOL(wrongList);
print(html);









---student_report.js
var message = '';
var student;
var search;
var studentExist = false;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

while (true) { 
  search = prompt('Type a student name to search or type "quit" to end');
  if (search.toLowerCase() === 'quit') break;
  else {
    for (var i = 0; i < students.length; i++) {
        student = students[i];
        if (student.name.toLocaleLowerCase() === search.toLocaleLowerCase()) {
            message += '<h2>Student: ' + student.name + '</h2>';
            message += '<p>Track: ' + student.track + '</p>';
            message += '<p>Points: ' + student.points + '</p>';
            message += '<p>Achievements: ' + student.achievements + '</p>';
            studentExist = true;
        }
      if(!studentExist) {
        alert('Student Name doesn\'t exist!');
      }
     }
  }
}

---this and prototype.js
var person = {firstName: 'Meng',
              lastName: 'Chen',
              fullName: function() {return this.firstName + ' ' + this.lastName;}
             }
console.log(person.firstName);
console.log(person.fullName); //this will return the definitio of the fuction
console.log(person.fullName()); // this is to call the function and return

///an object constructor
function createPerson(firstName, lastName, age, race){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.race = race;
//  return this
}

var peter = new createPerson('Peter', 'Thomas', 35, 'white');
console.log( peter);

//add or change a property of prototype. everything changed.
createPerson.prototype.country = 'USA';

console.log(peter);
