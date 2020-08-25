const EventSource = require('eventsource');

const url = 'https://www.blaseball.com/events/streamGameData';

const evtSource = new EventSource(url);

evtSource.onmessage = function(event) {
    const data = event.data;
    const j = JSON.parse(data);
    console.log(j.value.schedule);
}
