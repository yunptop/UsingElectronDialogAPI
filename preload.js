const electron = require("electron");

electron.contextBridge.exposeInMainWorld("externals", {
  dialog_showOpenDialog: async function (options) {
    return await electron.ipcRenderer.invoke("dialog_showOpenDialog", options);
  }
});