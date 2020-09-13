const   express     = require('express'),
        cors        = require('cors'),
        path        = require('path'),
        app         = express();

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

app.get('/:clientID',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});
app.get('/:clientID/:someview',(req,res) =>{
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

// app.get('/:clientID/:someview',(req,res) =>{
//     res.sendFile(path.join(__dirname, 'public/index.html'));
// });

const PORT = process.env.PORT || 8081;

// app.listen(PORT, '0.0.0.0', () => console.log(`Server started on port ${PORT}`));
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

