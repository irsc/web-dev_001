//const myHeading = document.querySelector('h1');
//myHeading.textContent = 'Hello world! Welcome to Eire!';

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/co-Donegal-photo.jpeg') {
      myImage.setAttribute ('src','images/wild-donegal.jpg');
    } else {
      myImage.setAttribute ('src','images/co-Donegal-photo.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading2 = document.querySelector('h2');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading2.textContent = 'Welcome to Co. Donegal website, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading2.textContent = 'Welcome to Co. Donegal website, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}