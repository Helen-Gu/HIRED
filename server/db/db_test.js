const md5 = require('blueimp-md5');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/gzhipin_test');

const conn = mongoose.connection;

conn.on('connected', function () {
	console.log('DB successfully connected, YE!!!');
});

const userSchema = mongoose.Schema({
	username: { type: String, required: true },
	password: { type: String, required: true },
	type: { type: String, required: true },
	header: { type: String },
});

const UserModel = mongoose.model('user', userSchema);

function testSave() {
	const userModel = new UserModel({
		username: 'Bob',
		password: md5('234'),
		type: 'laoban',
	});

	userModel.save(function (error, user) {
		console.log('save()', error, user);
	});
}

function testFind() {
	UserModel.find({ _id: '5ae3d7b7614c613db8abb914' }, function (
		error,
		users
	) {
		console.log('find()', error, users);
	});

	UserModel.findOne({ _id: '5ae3d7b7614c613db8abb914' }, function (
		error,
		user
	) {
		console.log('findOne()', error, user);
	});
}

function testUpdate() {
	UserModel.findByIdAndUpdate(
		{ _id: '5ae3d7b7614c613db8abb914' },
		{ username: 'Jack' },
		function (error, oldUser) {
			console.log('findByIdAndUpdate()', error, oldUser);
		}
	);
}

function testDelete() {
	UserModel.remove({ _id: '5ae3d7b7614c613db8abb914' }, function (
		error,
		doc
	) {
		console.log('remove()', error, doc);
	});
}
testDelete();
