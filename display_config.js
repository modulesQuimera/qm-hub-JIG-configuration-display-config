module.exports = function(RED) {
    function display_configNode(config) {
        RED.nodes.createNode(this, config);
        this.tester = config.tester
        this.model = config.model
        this.station = config.station
        var node = this

        node.on('input', function(msg, send, done) {
            var globalContext = node.context().global;
            var exportMode = globalContext.get("exportMode");
            var currentMode = globalContext.get("currentMode");
            var file = globalContext.get("exportFile");

            var quantidade = globalContext.get("display_config") + 1;
            globalContext.set("display_config", quantidade);
              
            file.tester = node.tester;
            file.model = node.model;

            globalContext.set("exportFile", file);
            node.status({fill:"green", shape:"dot", text:"done"}); // seta o status pra waiting
            send(msg)
        });
    }

    RED.nodes.registerType("display_config", display_configNode);
}