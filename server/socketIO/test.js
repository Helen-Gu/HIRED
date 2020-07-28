module.exports = function (server) {
	const io = require('socket.io')(server);

	io.on('connection', function (socket) {
		console.log('A client is connected to server');

		socket.on('sendMsg', function (data) {
			console.log("Server receives clients' message", data);

			data.name = data.name.toUpperCase();

			io.emit('receiveMsg', data);
			console.log('Server sends message to client', data);
		});
	});
};
