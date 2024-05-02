const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let db;

const mongoConnect = (callback) => {
    MongoClient.connect(
        "mongodb+srv://abhishekmishra02468:pmvOxwZOVVGKJ1VG@cluster0.kpnskqt.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster0"
    )
        .then(client => {
            console.log("Connecte to MongoDB");
            db = client.db();
            callback(client);
        })
        .catch(err => {
            console.log(err);
            throw err;
        });
}

const getDb = () => {
    if(db) {
        return db;
    }
    throw 'No database found';
}


exports.mongoConnect = mongoConnect;
exports.getDb =  getDb;