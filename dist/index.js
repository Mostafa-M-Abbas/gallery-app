"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const config_1 = __importDefault(require("./config"));
const index_route_1 = __importDefault(require("./routes/index.route"));
const app = config_1.default.app;
const multer = require("multer");
app.set('views', path_1.default.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express_1.default.static(path_1.default.join(__dirname, 'assets')));
app.use('/', index_route_1.default);
config_1.default.runApp();


app.use("/uploads", express_1.default.static("uploads"));

// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null , './uploads')
//     } , 
//     filename: function (req, file, cb) {
//         cb(null , file.fieldname + '-' + Date.now() + path_1.default.extname(file.originalname))
//     }
// })

// const upload = multer({ storage }); 


// app.use(express.static(__dirname + "/public"));
// app.use("/uploads", express.static("uploads"));

// app.post('/upload', upload.array('files'), (Req, res) => {
//     res.send('File uploaded successfully');
// })
// app.get("/upload", (req, res) => {
//     const fs = require('fs');
//     fs.readdir('./uploads', (err, files) => {
//         if (err) throw err;
//         res.render('upload', { files });
//     });

// })




