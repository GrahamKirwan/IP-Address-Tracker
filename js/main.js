const input = document.querySelector('.ip-input');
const ipBtn = document.querySelector('.ip-btn');

const domIp = document.querySelector('.dom-ip');
const domLocation = document.querySelector('.dom-location');
const domTimezone = document.querySelector('.dom-timezone');
const domIsp = document.querySelector('.dom-isp');

const spinner = document.getElementById("spinner");
const btnImage = document.getElementById("btn-image");

let inputVal;

ipBtn.addEventListener('click', function(){
    inputVal = input.value;
    input.value = '';
    
    fetchData(inputVal);
    spinner.classList.add('show');
    btnImage.classList.add('btn-image-hide');
});

input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      inputVal = input.value;
      input.value = '';
    
      fetchData(inputVal);
      spinner.classList.add('show');
      btnImage.classList.add('btn-image-hide');


    }
});

// Grab users initial IP 
fetchData('');




function fetchData(inputVal) {
    
    if(/\d/.test(inputVal)) {
        console.log('ip entered');
        fetch(`https://geo.ipify.org/api/v1?apiKey=at_x8BrLqjVI2qaS7nBLLweQHmwLYUcD&ipAddress=${inputVal}`)
        .then(res => res.json())
        .then(data => displayData(data));
    } else {
        console.log('domain entered');
        fetch(`https://geo.ipify.org/api/v1?apiKey=at_x8BrLqjVI2qaS7nBLLweQHmwLYUcD&domain=${inputVal}`)
        .then(res => res.json())
        .then(data => displayData(data));
    }
}

function displayData (data) {
    const dataIp = data.ip;
    const dataLocation = `${data.location.city}, ${data.location.region}`;
    const dataTimezone = `GMT ${data.location.timezone}`;
    const dataIsp = data.isp;
    const coordsLat = data.location.lat;
    const coordsLng = data.location.lng;
    const coords = [coordsLat, coordsLng];

    domIp.textContent = dataIp;
    domLocation.textContent = dataLocation;
    domTimezone.textContent = dataTimezone;
    domIsp.textContent = dataIsp;

    renderMap(coords);

    //Remove spinner and replace with arrow
    spinner.classList.remove('show');
    btnImage.classList.remove('btn-image-hide');

    console.log(data);
    console.log(data.ip);
    console.log(data.location.region);
    console.log(data.location.timezone);
    console.log(data.isp);
}

// Initialise map
let mymap = L.map('map');


// Render map based on coordinates
function renderMap(coords) {
    mymap.setView(coords, 13);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png').addTo(mymap);
    var marker = L.marker(coords).addTo(mymap);
}
