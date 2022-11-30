const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://root:password@localhost:27017';
const client = new MongoClient(url);
const dbName = 'robot_stores';

class DbService {
    connectToDB = async () => {
        await client.connect();
        console.log('MongoDB client is connected');
        const db = client.db(dbName);
        console.log(`Database is ${dbName}`);
        return db;
    }
}

module.exports = new DbService;
