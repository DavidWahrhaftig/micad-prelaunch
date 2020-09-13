const   express     = require('express'),
        cors        = require('cors'),
        mongoose    = require('mongoose'),
        // path        = require('path'),
        app         = express();

const Client = require('./model/Client');

// Middlewares
// Form Data Middleware
app.use(express.urlencoded({
    extended: false
}));

// Json Body Middleware
app.use(express.json());
app.use(cors());

// Bring in the Database Config
const db = require('./keys').mongoURI;
// Run this for development "C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"
mongoose.connect(db, 
    {   
        useFindAndModify: false,
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }).then(() => {
        console.log(`Database connected successfully ${db}`);
        
        Client.findOne({}).then(client => {
            if (!client) {
                // need to setup Config collection
                Client.create({clientName: 'Oxford'}).then(res => {
                    console.log(res);
                }).catch(err => {
                    console.log(err);
                });
            }
        });
       
    }).catch((err) => {
        console.log(`Unable to connect with the database ${err}`)
    });

// User API
const users = require('./routes/api/users');
app.use('/api/users', users);

// Admin API
const admin = require('./routes/api/admin');
app.use('/api/admin', admin);


const PORT = process.env.PORT || 5000;

// app.listen(PORT, '0.0.0.0', () => console.log(`Server started on port ${PORT}`));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

