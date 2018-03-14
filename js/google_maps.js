var addressContent = document.getElementById('address-content');
var markerBtn = document.getElementById('markerBtn');
var popupMap = document.getElementById('map');
var closeBtn = document.getElementById('close-btn');

// Opens map popup when marker is clicked
markerBtn.onclick = function() {
    addressContent.style.display='none';
    closeBtn.style.display='block';
    popupMap.style.display='block';
}

closeBtn.onclick = function() {
    addressContent.style.display='block';
    closeBtn.style.display='none';
    popupMap.style.display='none';
}
