DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

use burger_db;
CREATE TABLE burgers (
    id INT UNSIGNED AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(30) UNIQUE NOT NULL,
    devoured BOOL NOT NULL DEFAULT 0
);