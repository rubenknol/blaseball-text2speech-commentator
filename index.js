#!/usr/bin/env node

const EventSource = require('eventsource');
const Say = require('./say');

const url = 'https://www.blaseball.com/events/streamGameData';

const evtSource = new EventSource(url);
const allTeams = [];
const team = process.argv[2];
let lastUpdate = 'Game over.';

if (process.argv.length == 3) {
    Say(`It's time to blaseball`);
}

evtSource.onmessage = function(event) {
    const data = event.data;
    const j = JSON.parse(data);

    if (process.argv.length < 3) {
        j.value.schedule.forEach(d => {
            allTeams.push(d.awayTeamNickname)
            allTeams.push(d.homeTeamNickname)
        });

        console.log(allTeams.join("\n"));
        process.exit(1);
    }

    j.value.schedule.forEach(d => {
        if ((d.awayTeamNickname == team || d.homeTeamNickname == team)) {
            if (d.lastUpdate !== lastUpdate) {
                Say(d.lastUpdate);
                console.log(d.lastUpdate);
                lastUpdate = d.lastUpdate;
            }
        }
    });
}
