const Data = require("./data.js")
const CalendarData = Data.calendar
const calendarData = document.querySelector("#calendar-data")


module.exports = {
    name: "Calendar",
    version: "0.1",
    render: function(){
        console.log("---- INIT CALENDAR ----")
        calendarData.innerHTML = `
            ${CalendarData.map(item => `
                <ion-item-group>
                    <ion-item-divider sticky>
                        <ion-label>${item.time}</ion-label>
                    </ion-item-divider>
                ${item.session.map(session => `
                    <ion-item>
                        <ion-label>
                            <h3>${session.nome}</h3>
                            <p>${session.inizio}&mdash; ${session.fine} - ${session.luogo}</p>
                        </ion-label>
                    </ion-item>
                `).join('\n')}
                </ion-item-group>
            `).join('\n')}
        `
    }
}