-- schema/01_create_users.sql
DROP TABLE IF EXISTS groups CASCADE;

-- CREATE Group
CREATE TABLE groups (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  logo VARCHAR(255) NOT NULL
);