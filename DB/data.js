var mysql = require("mysql");
var bcrypt = require("bcryptjs");

var connect = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'fachada'
});

var selectUser=function(cb){
  connect.query('SELECT * FROM user', (error, results, fields)=>{
    if(error){
      console.log('error getting user info from DB');
      cb(error, null);
    }else {
      console.log('success getting user info');
      cb(null, results)
    }
  })
};

var selectJobPost=function(cb) {
  connect.query('SELECT * FROM job_post', (error, results, fields)=>{
    if(error){
      console.log('error getting job post');
      cb(error, null);
    }else {
      console.log('success rendering job post');
      cb(null, results);
    }
  })
};

var postJob =function(jobName, jobDescription, jobImage, jobLocation, cb){
  connect.query('INSERT INTO job_post(jobName,jobDescription,jobImage,jobLocation) VALUES (?,?,?)',
  [jobName,jobDescription,jobImage], (error, results, fields)=>{
    if(error){
      console.log('error posting job post');
      cb(error, null);
    }else {
      console.log('success able to add job post');
      cb(null, results);
    }
  });
};

module.exports.postJob = postJob;
module.exports.selectJobPost = selectJobPost;
module.exports.selectUser = selectUser;
