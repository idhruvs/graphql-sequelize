CREATE TABLE Items(
	id int PRIMARY KEY,
	name varchar(255),
	amount float,
	custom_id varchar(255),
	hasChanged int DEFAULT 0,
	createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
)

INSERT INTO Items ( "id", "name", "amount", "custom_id", "hasChanged") VALUES (1,'SUGAR', 55.2, 'S1', 0)
INSERT INTO Items ("id", "name", "amount", "custom_id", "hasChanged") VALUES (2,'FLOUR', 5.2, 'F1', 0)

CREATE TABLE Authors (
	id int PRIMARY KEY, 
	authorName varchar(255),
	authorEmail varchar(255),
	createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
)


INSERT INTO Authors (id, authorName, authorEmail) VALUES (1, 'John', 'john@example')
INSERT INTO Authors (id, authorName, authorEmail) VALUES (2, 'Haruki Murakami', 'haruki@example')


CREATE TABLE Books (
	id INT PRIMARY KEY,
	name varchar(255),
	price float,
	description varchar(255),
	authorId  INT,
	createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP,
	FOREIGN KEY(authorId) REFERENCES Authors(id)
)

INSERT INTO Books (id, name, price, description, authorId) VALUES (1, 'FAULT IN OUR STARS', 255.0, 'ROMANCE FICTION', 1)
INSERT INTO Books (id, name, price, description, authorId) VALUES (2, 'NORWEIGIAN WOOD', 355.0, 'LIFE FICTION', 2)

SELECT Books.name, Books.price, Authors.authorName FROM Books INNER JOIN Authors ON Books.authorId=Authors.id


