# What is nodeJS?
=> 
    1. Server environment, not a programming language,
    2. Runs on various platforms (Windows, Linux, MacOS),
    3. It's free

# Why NodeJS?
    1. Easy to learn
    2. It uses asynchronous programming! Which is diffrent than PHP, ASP
    3. It can help us to create, red, write, delete, and close files on the server
    4. Used for collecting form data
    5. NodeJS can add, delete, modify data in your database

================================

# What is node Modules?
=> Module is a collection of functions, from where We can use the cose as our wish.

In NodeJS there is 3 types of Modules
    1. Local Modules: Created by us
    2. Built-in modulles: nodejs own modules - http, url, path, fs (No need to install)
    3. External modules (Managed by npm)

===============================================

# Built-in Module: FS Module

    writeFile() => Use for create new file

    appendFile() => used for update file

    readFile() = use for read a file

    rename() => Use for rename file

    unlink() => Use to delete file

    Exists() => Use to check a file is already have or not

    **NB: All of the abhove functions have sunchronous function just use Sync like writeFileSync() like that.

#### Uses of fs module
const fs = require('fs')

fs.writeFile("filename", "data", (argument)=>{
    if(err){

    }else{

    }
})

**NB: While using synchronous just add the Sync with the method name and remove the callback function

===================================================

# os, path modules

**NB: Go to lesson 3 to see some demo example and implementation

========================
# Creating server and HTTP modules

**NB: Go to lesson 4 to ser the implementation

===========================

# Sending Status code

Go to lesson 5 to see implementation

===============================

# External modules and npm packages

#### Where can we find external modules?
=> Go to npmjs.com website 

#### How to use external modules or packages?
=> At first initilize npm once in a project, then install whatever package you want to use using npm and follow the documentation and use.

========================================

# Routing

**NB: Go to lesson 7 to see the implementation