var map = L.map('map').setView([50.7606273570878, 2.2339190414235413], 10)
const mapURL = 'http://62.4.21.200:1337'
const allURL = 'http://62.4.21.200:1337/api/infos-maps?populate=*'
const descmapURL = 'http://62.4.21.200:1337/api/description-maps?populate=*'
const url = 'http://62.4.21.200:1337/uploads/map_b35ed6785e.xml'
const temoinURL = 'http://62.4.21.200:1337/api/testimonies?populate=*'

// L.tileLayer('https://{s}.tile.thunderforest.com/spinal-map/{z}/{x}/{y}.png?apikey={apikey}', {
//     attribution: '&copy; CTRLS all right reserved',
//     apikey: 'f66d1bb47f424f39b13ebfea1e41d7c7',
//     maxZoom: 22
//   }).addTo(map);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map)

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
            color: 'blue'
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
    }
  })

function hoverSegment(e) {
  fetch(descmapURL)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.meta.pagination.total; i++) {
        if (data.data[i].attributes.id_infos == e) {
          $('.itineraire-map-informations-second-section').removeClass('hidden')
          $('.itineraire-map-informations-first-section').addClass('hidden')
        }
      }
    })
}

function clickArticle(e) {
  hoverSegment(e)
  findMapDescByID(e)
}

let container = document.querySelector('.itineraire-map-informations')

fetch(descmapURL)
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.meta.pagination.total; i++) {
      let article = document.createElement('div')

      let generateHTML = `
      
      <article class="itineraire-map-informations-section" onclick="clickArticle(${
        data.data[i].attributes.id_infos
      })">
                <div class="itineraire-map-informations-global-div">
                    <div class="itineraire-map-informations-image-div">
                        <img src="${
                          mapURL +
                          data.data[i].attributes.image.data.attributes.formats
                            .thumbnail.url
                        }" alt="" class="itineraire-map-informations-image">
                    </div>
                    <div class="itineraire-map-informations-text-global">
                        <div class="itineraire-map-informations-habitude">
                            <span>
                            ${data.data[i].attributes.type}
                            </span>
                        </div>
                        <div class="itineraire-map-informations-difficulte">
                            <span class="itineraire-map-informations-difficulte-habitude ${
                              data.data[i].attributes.habitude_nb == 1
                                ? 'itineraire-map-informations-difficulte-habitude-blue'
                                : data.data[i].attributes.habitude_nb == 2
                                ? 'itineraire-map-informations-difficulte-habitude-red'
                                : 'itineraire-map-informations-difficulte-habitude-green'
                            }">
                            ${
                              data.data[i].attributes.habitude_nb == 1
                                ? "J'ai l'habitude"
                                : data.data[i].attributes.habitude_nb == 2
                                ? 'Je me dépasse'
                                : 'Je débute / En famille'
                            }
                            <span class="dot ${
                              data.data[i].attributes.habitude_nb == 1
                                ? 'dot-blue'
                                : data.data[i].attributes.habitude_nb == 2
                                ? 'dot-red'
                                : 'dot-green'
                            }"></span>
                            </span>
                        </div>
                        <h2>
                            <a href="#">${data.data[i].attributes.depart} > ${
        data.data[i].attributes.arrive
      }</a>
                        </h2>
                        <p class="itineraire-map-informations-description">
                        ${data.data[i].attributes.description}
                        </p>
                    </div>
                    
                </div>
            </article>
      `

      article.innerHTML = generateHTML

      container.append(article)
    }
  })

let container2 = document.querySelector(
  '.itineraire-map-informations-second-section'
)

function findMapDescByID(e) {
  fetch(descmapURL)
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i < data.meta.pagination.total; i++) {
        if (e == data.data[i].attributes.id_infos) {
          let article = document.createElement('div')
          article.setAttribute('id', 'itineraire-map-informations-tempdiv')

          let generateHTML = `
      <div class="itineraire-map-informations-second-section-header">
                <a href="#" id="back-arrow" class="itineraire-map-informations-second-section-backarrow" onclick="resetClass()">
                <i class="fa-solid fa-arrow-left-long"></i>
                </a>
                <div>
                    <h2>
                        ${data.data[i].attributes.depart} > ${
            data.data[i].attributes.arrive
          }
                    <a href="#">L'EuroVelo</a>
                    </h2>
                </div>
            </div>
                <div class="itineraire-informations-second-section-options">
                    <a href="#" class="description actif" onclick="descSwitcher()">
                        <span>
                            <p>Description</p>
                        </span>
                    </a>
                    <a href="#" class="avis inactif" onclick="avisSwitcher()">
                        <span>
                            <p>Avis et Témoignages</p>
                        </span>
                    </a>
            </div>
            
          
          
          <div class="itineraire-map-informations-second-body actif">
        
            <div class="itineraire-map-informations-second-body-theme ${
              data.data[i].attributes.habitude_nb == 1
                ? 'itineraire-map-informations-difficulte-habitude-blue'
                : data.data[i].attributes.habitude_nb == 2
                ? 'itineraire-map-informations-difficulte-habitude-red'
                : 'itineraire-map-informations-difficulte-habitude-green'
            }">
                <span>${
                  data.data[i].attributes.habitude_nb == 1
                    ? "J'ai l'habitude"
                    : data.data[i].attributes.habitude_nb == 2
                    ? 'Je me dépasse'
                    : 'Je débute / En famille'
                }
                </span>

                </div>
            <div class="itineraire-map-informations-second-body-infos">
                <div class="itineraire-map-informations-second-body-infos-distance">
                    <span>31,13 Km</span>
                </div>
                <div class="itineraire-map-informations-second-body-infos-duree">
                    <span>2 h 04 min</span>
                </div>
                <div class="itineraire-map-informations-second-body-infos-difficulte">
                    <div class="niveau-difficulte">
                        <span class="${
                          data.data[i].attributes.habitude_nb == 1
                            ? 'itineraire-map-informations-difficulte-habitude-blue'
                            : data.data[i].attributes.habitude_nb == 2
                            ? 'itineraire-map-informations-difficulte-habitude-red'
                            : 'itineraire-map-informations-difficulte-habitude-green'
                        }">
                        <span>${
                          data.data[i].attributes.habitude_nb == 1
                            ? "J'ai l'habitude"
                            : data.data[i].attributes.habitude_nb == 2
                            ? 'Je me dépasse'
                            : 'Je débute / En famille'
                        }
                            <span class="dot ${
                              data.data[i].attributes.habitude_nb == 1
                                ? 'dot-blue'
                                : data.data[i].attributes.habitude_nb == 2
                                ? 'dot-red'
                                : 'dot-green'
                            }"></span>

                        </span>
                    </div>
                </div>
            </div>
        


            <div class="itineraire-map-informations-second-body-img-div">
                       <img src="${
                         mapURL +
                         data.data[i].attributes.image.data.attributes.formats
                           .thumbnail.url
                       }" alt="" class="itineraire-map-informations-second-body-img">
                    </div>
                    <div class="itineraire-map-informations-second-body-depart-arrive">
                       <div class="itineraire-map-informations-second-body-depart">
                       ${data.data[i].attributes.depart}
                       </div>
                       <a href="#">
                           <i class="fa-solid fa-arrows-left-right"></i>
                       </a>
                       <div class="itineraire-map-informations-second-body-arrive">
                       ${data.data[i].attributes.arrive}
                       </div>
                    </div>
                          <div class="itineraire-map-informations-second-body-container">
                       <div class="itineraire-map-informations-second-body-description">
                       ${data.data[i].attributes.long_desc}
                       </div>
                   </div>
                    <div class="itineraire-map-informations-second-footer-top">
                       <div class="itineraire-map-informations-second-footer-row">
                           <div class="itineraire-map-informations-second-footer-btn">
                               <a href="#">
                                   <i class="fa-solid fa-heart-circle-plus"></i>
                                   <span>Carnet de Voyage</span>
                               </a>
                           </div>
                           <div class="itineraire-map-informations-second-footer-btn">
                               <a href="#">
                                   <i class="fa-solid fa-download"></i>
                                   <span>Tracé GPS</span>
                               </a>
                           </div>
                           <div class="itineraire-map-informations-second-footer-btn">
                               <a href="#">
                                   <i class="fa-solid fa-print"></i>
                                   <span>Fiche PDF</span>
                               </a>
                           </div>
                       </div>
                   </div>
                    <div class="itineraire-map-informations-second-footer-bot">
                       <div class="itineraire-map-informations-second-footer-row">
                           <div class="itineraire-map-informations-second-footer-bot-btn">
                               <a href="#">
                                   <i class="fa-solid fa-arrow-left-long"></i>
                                   <span>Étape Précédente</span>
                               </a>
                           </div>
                           <div class="itineraire-map-informations-second-footer-bot-btn itineraire-map-informations-second-footer-bot-btn-page">
                               <a href="#">
                                   <span>5/10</span>
                               </a>
                           </div>
                           <div class="itineraire-map-informations-second-footer-bot-btn">
                               <a href="#">
                                   <span>Étape Suivante</span>
                                   <i class="fa-solid fa-arrow-right-long"></i>
                               </a>
                           </div>
                       </div>
                   </div>
               </div>

              <div class="itineraire-map-avis-div-global hidden">

                <div id="itineraire-temoignages">
                  <div class="itineraire-map-avis-temoignages">
                  
                    <div class="itineraire-map-avis-title">
        
                      <h2 class="itineraire-map-avis-title-h2">Ils l'ont fait</h2>
        
                    </div>
        
                    <div class="itineraire-map-avis-div-img">
                      <img src="${
                        mapURL +
                        data.data[i].attributes.image.data.attributes.formats
                          .thumbnail.url
                      }" class="itineraire-map-avis-img">
                    </div>
                  
                  </div>


                  <section class="itineraire-map-avis-comments-avis">

                <div class="itineraire-map-avis-comments-avis-title">
                  <h2>L'avis des voyageurs</h2>
                  <div class="itineraire-map-avis-comments-avis-soustitre">
                  sur ${data.data[i].attributes.depart} / ${
            data.data[i].attributes.arrive
          }
                  </div>
                </div>
                <div class="itineraire-map-avis-comments-avis-comments">
                  <div class="itineraire-map-avis-comments-avis-row">
                    <div class="itineraire-map-avis-comments-avis-co-deco">
                    <div class="link-action">
                    <a href="#"> Se connecter</a>
                     ou <a href="#">s'inscrire</a> pour deposer un avis</div>
                    </div>
                    <div class="itineraire-map-avis-comments-avis-notes-global">
                  <div class="itineraire-map-avis-comments-avis-notes">
                    Note des internautes 
                    <span class="itineraire-map-avis-comments-avis-notes-count">(0)</span>
                  </div>
                  </div>
                  </div>

                  
                </div>
                </div>
                </section>
                </div>


                <div class="itineraire-map-informations-second-footer-top">
                       <div class="itineraire-map-informations-second-footer-row">
                           <div class="itineraire-map-informations-second-footer-btn">
                               <a href="#">
                                   <i class="fa-solid fa-heart-circle-plus"></i>
                                   <span>Carnet de Voyage</span>
                               </a>
                           </div>
                           <div class="itineraire-map-informations-second-footer-btn">
                               <a href="#">
                                   <i class="fa-solid fa-download"></i>
                                   <span>Tracé GPS</span>
                               </a>
                           </div>
                           <div class="itineraire-map-informations-second-footer-btn">
                               <a href="#">
                                   <i class="fa-solid fa-print"></i>
                                   <span>Fiche PDF</span>
                               </a>
                           </div>
                       </div>
                   </div>
                    <div class="itineraire-map-informations-second-footer-bot">
                       <div class="itineraire-map-informations-second-footer-row">
                           <div class="itineraire-map-informations-second-footer-bot-btn">
                               <a href="#">
                                   <i class="fa-solid fa-arrow-left-long"></i>
                                   <span>Étape Précédente</span>
                               </a>
                           </div>
                           <div class="itineraire-map-informations-second-footer-bot-btn itineraire-map-informations-second-footer-bot-btn-page">
                               <a href="#">
                                   <span>5/10</span>
                               </a>
                           </div>
                           <div class="itineraire-map-informations-second-footer-bot-btn">
                               <a href="#">
                                   <span>Étape Suivante</span>
                                   <i class="fa-solid fa-arrow-right-long"></i>
                               </a>
                           </div>
                       </div>
                   </div>
              </div>
`
          article.innerHTML = generateHTML

          container2.append(article)
        }
      }
    })
}

function resetClass() {
  const e = document.getElementById('itineraire-map-informations-tempdiv')
  if (e) e.remove()
  $('.itineraire-map-informations-second-section').addClass('hidden')
  $('.itineraire-map-informations-first-section').removeClass('hidden')
}
