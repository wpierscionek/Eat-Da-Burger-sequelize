var Sequelize = require('sequelize');

var source = {
	localhost: {
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'burgers_db'
}
}

var selectedSource = source.localhost;


var sequelize = new Sequelize(selectedSource.database, selectedSource.user, selectedSource.password, {
	host: selectedSource.host,
	dialect: 'mysql',

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
});

module.exports = sequelize;
