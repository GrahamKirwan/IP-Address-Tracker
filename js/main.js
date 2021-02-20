const input = document.querySelector('.ip-input');
const ipBtn = document.querySelector('.ip-btn');

let inputVal;

ipBtn.addEventListener('click', function(){
    inputVal = input.value;
    input.value = '';
    console.log(inputVal);
});

input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      
      input.value = '';
    
    inputVal = input.value;
    console.log(inputVal);

    }
  });


// Render map
let mymap = L.map('map').setView([43.885330, -78.918820], 16);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(mymap);



// IP Geolocation API
const req = 'https://geo.ipify.org/api/v1?apiKey=at_x8BrLqjVI2qaS7nBLLweQHmwLYUcD&ipAddress=192.212.174.101';

// fetch('https://geo.ipify.org/api/v1?apiKey=at_x8BrLqjVI2qaS7nBLLweQHmwLYUcD&ipAddress=8.8.8.8').then(res => console.log(res.json()));
fetch('https://geo.ipify.org/api/v1?apiKey=at_x8BrLqjVI2qaS7nBLLweQHmwLYUcD&domain=facebook.com').then(res => console.log(res.json()));
