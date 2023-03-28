-- schema/02_messages.sql
DROP TABLE IF EXISTS messages CASCADE;

CREATE TABLE messages (
  id SERIAL PRIMARY KEY,
  sender VARCHAR(255) NOT NULL,
  group_id INTEGER REFERENCES groups(id) ON DELETE CASCADE,
  timestamp VARCHAR(255) NOT NULL,
  message VARCHAR(255) NOT NULL
);