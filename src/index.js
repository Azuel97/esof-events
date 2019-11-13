const Calendar = require('./calendar.js')
const Speakers = require('./speaker.js')

Calendar.render()
Speakers.render()

// MAP INIT
console.log("Leaflet", L)  // -> L è una variabile che contiene tutta la libreria
// Metodo per inizializzare la mappa e crearla dandoli come setView la longitudine,latidunine e zoom
const myMap = L.map("mapView").setView([45.6522854, 13.7661518], 14)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png?{foo}', {
    foo: 'bar', 
    attribution: 'Power by ITS - Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
    maxZoom: 18
}).addTo(myMap);

const tabs = document.querySelector("#tabs")
tabs.addEventListener("ionTabsDidChange", (event) => {
    if(event.detail.tab === "map"){
        console.log("MAP TAB : ionTabsDidChange ", event.detail.tab)
        // trick calcolo dimensioni dom
        setTimeout(function () {
            console.log("sleep")
            myMap.invalidateSize()
        }, 100)
        
    }
})

console.log("MYMAP", myMap)