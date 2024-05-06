const express = require('express');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const multer = require('multer');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config(); // Load environment variables

const path = require('path')

const resourceLimits = require('worker_threads');
const e = require('express');
const { stat } = require('fs');

const upload = multer({ dest: 'uploads/' });

//make connection between dbsever and node app

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "1234",
    database: "db_git_test"
})

const app = express();
const PORT = process.env.PORT || 8081

// start all endpoints



// end all endpoints

//check the server is working
app.listen(PORT, () => console.log(`Server is Running on PORT ${PORT}`));