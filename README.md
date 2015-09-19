# Simple SSE Server

Below is an example of setting up the server on the ```/events``` route.

```javascript
var SSEServer = require('expresse');
var sse = new SSEServer('events');

app.get('/events', function(req, res) {
    sse.connect(req, res);
    sse.broadcast('greeting', {message: 'hello world'});
});

```
Client code is simple too!

```javascript
var events = new EventSource('http://localhost:4000/events');

events.addEventListener('greeting', function(event) {
    var data = JSON.parse(event.data);
    console.log('greeting: '+ data);
});

events.onopen = function(e) {
    //called when socket is listenning
}

events.onerror = function(e) {
    events.close();
}

```
