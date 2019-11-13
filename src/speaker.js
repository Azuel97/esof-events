const Data = require("./data.js")
const SpeakerData = Data.speaker
const speakerData = document.querySelector("#speaker-data")


module.exports = {
    name: "Speaker",
    version: "0.1",
    render: function(){
        console.log("---- INIT SPEAKER ----")
        speakerData.innerHTML = `
            ${SpeakerData.map(item => `
            <ion-col size="12" size-md="6">
                <ion-card>
                    <img src="${item.img}">
                    <ion-card-header>
                        <ion-card-subtitle>${item.nome}</ion-card-subtitle>
                        <ion-card-title>${item.intervento}</ion-card-title>
                    </ion-card-header>
                    <ion-card-content>
                        ${item.desc}
                    </ion-card-content> 
                </ion-card>
            </ion-col>
            `).join('\n')}
        `
    }
}