const chalk = require('chalk');
const figlet = require('figlet');
const clear = require('clear');

class DocuLib{

    constructor() {}
 
    banner(){
        console.log(
            chalk.yellow(
              figlet.textSync('DocuTalk', {
                  horizontalLayout: 'default',
                  verticalLayout: 'default'
              })
            )
        );
    }

    clean(){
        clear();
    }
}

module.exports = DocuLib;