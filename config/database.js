const mongoose = require('mongoose');
const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL || 'mongodb:/localhost/users', 
{
    useNewUrlParser: true,  
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true
});

db.on('connected', () => {
    console.log(`WEE HERE @ ${db.host}:${db.port}`);
});