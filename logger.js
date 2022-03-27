const fs = require('fs'); 

class Logger{
    constructor(path) {
        this.path = path ; 
    }
    log(message) {
        let date = new Date() ;
        let timed_message = `Logged at ${date} :=> ${message}\n` ;
        fs.appendFile(this.path , timed_message , (err) =>{
            if(err){
                this.log("Error occured while updating file!") ;
                throw err ; 
            }
            console.log("File Updation Complete!") ;
        }) ;
    }
}

module.exports = Logger ;