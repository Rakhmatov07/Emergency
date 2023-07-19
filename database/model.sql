CREATE DATABASE emergency;

CREATE TABLE users(
    user_id BIGSERIAL NOT NULL PRIMARY KEY,
    username VARCHAR(64) NOT NULL,
    phone_number TEXT NOT NULL,
    phone_type VARCHAR(32) NOT NULL,
    country VARCHAR(64) NOT NULL,
    language VARCHAR(64) NOT NULL,
    created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);



