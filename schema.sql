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
  location varchar(500) NOT NULL,
  facebook nvarchar(500) NOT NULL,
)

CREATE TABLE jobPost(
  jobID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  jobDescription varchar(500) NOT NULL,
  jobImage nvarchar(500) NOT NULL,
  userID int,
  FOREIGN KEY (userID) REFERENCES user(userID)
)

CREATE TABLE services(
  servicesID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  electric varchar(500),
  plumbing varchar(500),
  carpentry varchar(500),
  paint varchar(500)
)
