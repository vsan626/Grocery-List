/*  Execute this file from the command line by typing:
 *    sqlite3 items.db < schema.sql
 *  to create the database and the tables.*/
DROP DATABASE IF EXISTS grocerylist;
create database grocerylist;
use grocerylist;

create table groceries (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(255) NOT NULL,
  quantity INT NOT NULL,
  primary key(id)
  );

insert into groceries(item, quantity) values ("hotpocket", 7);