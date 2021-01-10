# fullstack-file-upload

stack 

1. Angular 9
2. Nodejs - Express 
3. Mysql


Lets Start With Database (Mysql)

Create Data

    create database files_db;

Use Created Database

    use files_db;

Create A Table to store file info

    create table files (

          id varchar(245) primary key not null,
          name varchar(125) not null default "File",
          mimetype varchar(65),
          url varchar(254) not null,
          created_by varchar(128) not null default 'system',
          created_on timestamp not null default now(),
          updated_by varchar(128) not null default 'system',
          updated_on timestamp not null default now()

    );
    
    
    
