const   express     = require('express'),
        cors        = require('cors'),
        mongoose    = require('mongoose'),
        path        = require('path'),
        app         = express();

const Config = require('./model/Config');

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
const db = 'mongodb://localhost:27017/micad-coming-soon';
// Run this for development "C:\Program Files\MongoDB\Server\4.2\bin\mongo.exe"
mongoose.connect(db, 
    {   
        useFindAndModify: false,
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }).then(() => {
        console.log(`Database connected successfully ${db}`);
        
        Config.findOne({}).then(admin => {
            if (!admin) {
                // need to setup Config collection
                // const adminSettings = {
                //     title: 'Uoft'
                // }
                Config.create({}).then(res => {
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

function checkAdminAuthorizedClientURL(req, res, next) {
    Config.findOne({}).then(admin => {
        console.log("admin enabled", admin.enable);
        if(admin.enable) next();
        else {
            res.send('Admin didn\'t authorize page yet!');
        }
    }).catch(err => {
        console.log(err);
        res.send('error checking admin authorization');
    });

}


// app.get('*', (req, res) => {
//     console.log(path.join(__dirname, 'public/index.html'));
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });
app.get('/client', checkAdminAuthorizedClientURL,(req,res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin/index.html'));
});

app.get('*', (req, res) => {
    res.send("Invalid path!")
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, '0.0.0.0', () => console.log(`Server started on port ${PORT}`));

