// JavaScript code with bugs
    const para = document.getElementById('message'); // Typo in class name
    const textButton = document.getElementById('textButton'); //add event listener
    textButton.addEventListener('click',function() { // correct the function method
      para.textContent = 'New Message'; // correct textContent
    });
    const box = document.getElementById('box');
    const colorButton = document.getElementById('colorButton');
    colorButton.addEventListener('click', function() {
      box.style.backgroundColor = 'blue'; // Typo in 'style' and name
    });