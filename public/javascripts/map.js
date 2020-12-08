var map = L.map('main_map').setView([-0.18256442423379524, -78.48453900268586], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-0.1853988185293065, -78.4820109867871]).addTo(map);
L.marker([-0.17779142245265375, -78.48359900397698]).addTo(map);
L.marker([-0.18501186524353447, -78.48729646035684]).addTo(map);