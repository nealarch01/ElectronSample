const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("main", {
    getNodeVersion: () => {
        return process.version;
    }
});