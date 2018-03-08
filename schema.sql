DROP DATABASE IF EXISTS fachada;

CREATE DATABASE fachada;

USE fachada;

CREATE TABLE user(
  userID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name varchar(60) NOT NULL,
  typeOfUser varchar(60) NOT NULL,
  email varchar(255) NOT NULL,
  description varchar(255) NOT NULL,
  image nvarchar(500) NOT NULL,
  location varchar(255) NOT NULL,
  facebook nvarchar(500) NOT NULL
);

INSERT INTO user(name, typeOfUser, email, description, image, location, facebook)
VALUES ('The Doctor', 'Client', 'thedoctor@gmail.com', 'Hi, The Doctor here, too busy saving the world and occasionally need help with the TARDIS; she is quite the beauty', 'https://images.theconversation.com/files/178385/original/file-20170717-14315-1cnwpvh.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip', 'San Pablo Xalpa, 02110 Mexico City, CDMX, Mexico', 'https://www.facebook.com/DoctorWho/');

CREATE TABLE job_post(
  jobID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  jobName varchar(50) NOT NULL,
  jobDescription varchar(255) NOT NULL,
  jobImage nvarchar(500) NOT NULL,
  userID int,
  FOREIGN KEY (userID) REFERENCES user(userID)
);

INSERT INTO job_post(jobName,jobDescription,jobImage,userID)
VALUES ('Need a little help fixing the chameleon circuit', 'The chameleon circuit is a component of a TARDIS which changes its outer plasmic shell to assume a specific shape and blend in with its surroundings.',
'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUUfSqVPs1165Pywpj4LHxoFjncIkF43ONEZ8MZPT9STiF37LW', 1);

CREATE TABLE services(
  servicesID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  electric varchar(500),
  plumbing varchar(500),
  carpentry varchar(500),
  paint varchar(500)
);
