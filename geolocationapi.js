let locationButton = document.getElementById("mylocation");
let locationPara = document.getElementById("location");
let mapLink = document.getElementById("map-link");

mapLink.href = "";
mapLink.textContent = "";

function getLocation() {
    if (!navigator.geolocation) {
        locationPara.textContent = "Sorry! cant find you!";
    } else {
        locationPara.textContent = "Looking around!";
        navigator.geolocation.getCurrentPosition(showPosition, errorMsg);
    }
}

function showPosition(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    locationPara.textContent = "";
    mapLink.textContent = "Look we found you!";
    mapLink.href = `https://www.openstreetmap.org/#map=17"/${latitude}/${longitude}`;
}

function errorMsg() {
    para.textContent = "Sorry we are having issues!";
}

locationButton.onclick = getLocation;