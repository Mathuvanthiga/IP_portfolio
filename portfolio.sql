CREATE DATABASE IF NOT EXISTS mathuvanthiga_portfolio;

USE mathuvanthiga_portfolio;


CREATE TABLE messages (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    email VARCHAR(150) NOT NULL,

    subject VARCHAR(200) NOT NULL,

    message TEXT NOT NULL,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);