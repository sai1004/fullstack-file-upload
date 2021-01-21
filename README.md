# fullstack-file-upload

Tech stack Used

1. Angular 9
2. Nodejs - Express (Frame-work) 
3. Mysql (Version 5.7)


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
    
    

Now Let's Setup NodeJs Server


mkdir fullstack-file-upload

cd  fullstack-file-upload


mkdir nodejs-server

cd nodejs-server 

Init Node Server Creates Package.json file

    npm init -y 

Now Install npm packages dependencies 

 
Genrate ts config file

    npx tsc --init --rootDir src --outDir dist --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs


#TypeScript configuration

Also, make sure you are using TypeScript version 3.3 or higher, and you have enabled the following settings in tsconfig.json:

    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,


These are dev dependencies

        npm install @types/express --save-dev
        npm install @types/body-parser --save-dev
        npm install @types/uuid --save-dev
        npm install @types/node --save-dev
        npm install dotenv --save-dev
        npm install nodemon --save-dev
        npm install ts-node --save-dev
        npm install typescript --save-dev


        npm install express --save
        npm install body-parser --save
        npm install typeorm --save
        npm install mysql --save
        npm install cors --save
        npm install express-fileupload --save
        npm install morgan --save
        npm install uuid --save
           
    


Project Structure:

    nodejs-server
            ├───assets
            │   ├───docs
            │   └───uploads
            ├───docs
            └───src
                ├───config
                ├───dao
                ├───entities
                ├───routes
                └───services
                |
                index.ts
 

typeORM 

    https://github.com/typeorm/typeorm


