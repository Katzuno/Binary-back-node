const Documentation = require('@helpers/DocumentationHelper');
const WebSockets = require('@helpers/WebSocketsHelper');

let ModulesArray = [WebSockets];
ModulesArray = ModulesArray.concat(Documentation);

module.exports = ModulesArray;
