const ace = require('@adonisjs/ace')

const files = require('./lib/files');
const DocuLib = require('./lib/docuLib');

const docuLib = new DocuLib();

docuLib.clean();
docuLib.banner();
 
// register commands
ace.addCommand(require('./commands/publish'))
 
// Boot ace to execute commands
ace.wireUpWithCommander()
ace.invoke()