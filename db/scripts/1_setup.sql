DROP TABLE IF EXISTS quotes;

CREATE TABLE quotes (
    id serial PRIMARY KEY,
    quote varchar(200) NOT NULL,
    author varchar(50)  NOT NULL
);