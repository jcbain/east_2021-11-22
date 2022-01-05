DROP TABLE IF EXISTS primates;

CREATE TABLE primates (
  id SERIAL PRIMARY KEY,
  species VARCHAR(50),
  name VARCHAR(50)
);

INSERT INTO primates (species, name)
VALUES ('Western Lowland Gorilla', 'Koko'),
  ('Eastern Chimpanzee', 'Frodo'),
  ('Bonobo', 'Kanzi'),
  ('Human', 'James');
