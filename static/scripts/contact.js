document.addEventListener("DOMContentLoaded", function () {
    const openModalBtn = document.getElementById("openModalBtn");
    const modal = document.getElementById("getModal");
    const closeButton = document.querySelector(".close");
  
    const openModal = () => {
      modal.style.display = "block";
    };
  
    const closeModal = () => {
      modal.style.display = "none";
    };
  
    openModalBtn.addEventListener("click", openModal);
    closeButton.addEventListener("click", closeModal);
  });

  var mymap = L.map('pinnedMap').setView([58.1796426, 13.9533611], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);

L.marker([58.1796426, 13.9533611]).addTo(mymap)
    .bindPopup('Your Pinned Location')
    .openPopup();

