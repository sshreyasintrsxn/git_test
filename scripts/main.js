var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/logo.png') {
    	console.log(mySrc);
      myImage.setAttribute ('src','images/chrome_logo.png');
      console.log(mySrc);
      
    } else {
    	console.log(mySrc);
      myImage.setAttribute ('src','images/logo.png');
      
    }
}

document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}