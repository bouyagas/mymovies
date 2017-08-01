DROP TABLE IF EXISTS movies;

CREATE TABLE movies (
  id SERIAL PRIMARY KEY,
  title VARCHAR NOT NULL,
  actor VARCHAR NOT NULL,
  genre VARCHAR NOT NULL,
  release VARCHAR NOT NULL,
  price INT NOT NULL,
  picture TEXT NOT NULL,
  description TEXT NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);
