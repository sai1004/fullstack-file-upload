create database files_db;

use files_db;


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