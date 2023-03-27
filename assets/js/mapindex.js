var map = L.map('map').setView([50.7606273570878, 2.2339190414235413], 10)
const mapURL = 'http://90.110.218.245:5003'
const allURL = 'http://90.110.218.245:5003/api/maps'
const descmapURL = '/assets/js/description-map.json'
const url =
  'http://90.110.218.245:5003/uploads/69e1794f_c950_4e82_bab1_15c511be92e0_697d7b50e0.xml'
const temoinURL = '/assets/js/testimonies.json'

// L.tileLayer('https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}', {
//     attribution: '&copy; CTRLS all right reserved',
//     apikey: 'f66d1bb47f424f39b13ebfea1e41d7c7',
//     maxZoom: 22
//   }).addTo(map);

L.tileLayer(
  'https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png',
  {
    attribution: '&copy; CTRLS all rights reserved',
    maxZoom: 22
  }
).addTo(map)

fetch(allURL)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.meta.pagination.total; i++) {
      gpx = mapURL + data.data[i].attributes.coordinate.data.attributes.url
      new L.GPX(gpx, {
        async: true,
        gpx_options: {
          joinTrackSegments: false
        },
        marker_options: {
          startIconUrl: null,
          endIconUrl: null,
          shadowUrl: null,
          iconSize: [20, 30]
        },
        polyline_options: {
          color: 'orange',
          weight: 8
        }
      })
        .on('loaded', function () {
          map.setView([50.7606273570878, 2.2339190414235413], 10)
        })
        .on('mouseover', function () {
          this.setStyle({
            color: '#e5b9d5'
          })
        })
        .on('mouseout', function () {
          this.setStyle({
            color: 'orange'
          })
        })
        .on('click', function (e) {
          this.setStyle({
            color: '#e5b9d5'
          })
          document.location.href = 'itineraire.html'
        })
        .addTo(map)
    }
  })
