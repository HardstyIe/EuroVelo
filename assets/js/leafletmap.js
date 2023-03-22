var map = L.map('map').setView([46.56477000016323, 0.4099699998792499], 13)

var marker = L.marker([46.56477000016323, 0.4099699998792499]).addTo(map)

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

var gpx = '/assets/point-gpx/gpxEV5/track.gpx' // URL to your GPX file or the GPX itself
new L.GPX(gpx, {
  async: true,
  gpx_options: {
    joinTrackSegments: true
  },
  marker_options: {
    startIconUrl: null,
    endIconUrl: null,
    shadowUrl: null,
    iconSize: [20, 30]
  },
  polyline_options: {
    color: '#0000FF',
    weight: 8
  }
})
  .on('loaded', function () {
    map.setView([50.7606273570878, 2.2339190414235413], 10)
  })
  .on('mouseover', function () {
    this.setStyle({
      color: '#FFA500'
    })
  })
  .on('mouseout', function () {
    this.setStyle({
      color: 'orange'
    })
  })
  .on('click', function (e) {
    resetClass()
    map.fitBounds(e.target.getBounds())
    hoverSegment(data.data[i].id)
    findMapDescByID(data.data[i].id)
    this.setStyle({
      color: '#e5b9d5'
    })
  })
  .addTo(map)

L.geoJSON(geojsonFeature).addTo(map)

var myLayer = L.geoJSON().addTo(map)
myLayer.addData(geojsonFeature)
