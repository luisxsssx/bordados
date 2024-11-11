  document.addEventListener("DOMContentLoaded", function () {
    var map = L.map('map').setView([25.564030713268885, -108.45986466863316], 15);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([25.564030713268885, -108.45986466863316]).addTo(map);
    marker.bindPopup("<b>Uniformes Y Bordados Sandoval</b><br>Calle Norzagaray #102 entre Cuauhtemoc y Dr. de la Torre 81000 Guasave, Sinaloa, Mexico").openPopup();
});