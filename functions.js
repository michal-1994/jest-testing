const axios = require('axios');

// beforeEach(() => initDatabase());
// beforeEach(() => closeDatabase());

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log('Database Initialized...');
const closeDatabase = () => console.log('Database Closed...');

const functions = {
	add: (num1, num2) => num1 + num2,
	isNull: () => null,
	checkValue: (x) => x,
	createUser: () => {
		const user = {
			firstName: 'Michał',
		};
		user['lastName'] = 'Grzegorczyk';
		return user;
	},
	fetchUser: () =>
		axios
			.get('https://jsonplaceholder.typicode.com/users/1')
			.then((res) => res.data)
			.catch((err) => 'error'),
};

module.exports = functions;
