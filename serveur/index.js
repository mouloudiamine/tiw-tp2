const express = require('express');
const path = require('path');
const http = require('http');

const DIST_DIR = path.join(__dirname, '../dist');
const HTML_FILE = path.join(DIST_DIR, 'index.html');

const app = express();
const port = process.env.PORT || 3000;
const mockResponse = {
    foo: 'bar',
    bar: 'foo'
};
app.get('/api', (req, res) => {
    res.send(mockResponse);
});

app.get('/', (req, res) => {
    res.status(200).sendFile(HTML_FILE);
});


app.use(express.static(DIST_DIR));

const server = http.Server(app);
const io = require('socket.io')(server);
server.listen(port);

io.on('connection', function (socket) {

    socket.on("ADD_DRAW_POINTS", (action) => {
        socket.broadcast.emit("ADD_DRAW_POINTS", action);
    });

    socket.on("RESET_DRAW_POINTS", (action) => {
        socket.broadcast.emit("RESET_DRAW_POINTS", action);
    });

    socket.on('set_slide', (action) => {
        let dernierSlide = -1;
        if( dernierSlide.index !== action.index) {
            socket.broadcast.emit("set_slide", action);
        }
    });
    socket.on('add_item', (action) => {
        socket.broadcast.emit('add_item', action);
    });


});


