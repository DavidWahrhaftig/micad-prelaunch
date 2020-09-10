const   express     = require('express'),
        cors        = require('cors'),
        mongoose    = require('mongoose'),
        path        = require('path'),
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

// Setting up the static directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'admin')));

// Bring in the Database Config
// const db = require('./config/keys').mongoURI;
// const db = 'mongodb://localhost:27017/micad-prelaunch';

// Bring in the Database Config
const db = require('./keys').mongoURI;
// Run this for development "C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"
mongoose.connect("mongodb://db:27017/micad-prelaunch", 
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

// middleware

// function checkAdminAuthorizedClientURL(req, res, next) {
//     Client.findOne({}).then(admin => {
//         console.log("admin enabled", admin.enable);
//         if(admin.enable) next();
//         else {
//             res.send('Admin didn\'t authorize page yet!');
//         }
//     }).catch(err => {
//         console.log(err);
//         res.send('error checking admin authorization');
//     });

// }

// app.get('/', (req,res) => {
//     res.send("Invalid path, you may have meant /client");
// });


app.get('/admin', (req, res) => {
    // res.send("ADMIN PAGE");
    res.sendFile(path.join(__dirname, 'admin/index.html'));
});

app.get('/:clientID',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/:clientID/:someview',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// app.get('*', (req, res) => {
//     res.send("Invalid path!")
// });



const PORT = process.env.PORT || 5000;

// app.listen(PORT, '0.0.0.0', () => console.log(`Server started on port ${PORT}`));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

