import io from 'socket.io-client';
const socket = io('ws://localhost:4000');
socket.on('receiveMsg', function (data) {
	console.log('Client receives msg from server', data);
});

socket.emit('sendMsg', { name: 'abc' });
console.log('Client sends msg to server', { name: 'abc' });
