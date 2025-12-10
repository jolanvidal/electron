const { contextBridge } = require("electron");



// Inject renderer.js into the DOM context
window.addEventListener("DOMContentLoaded", () => {
    const script = document.createElement("script");
    script.src = "./renderer.js";
    document.body.appendChild(script);
});


contextBridge.exposeInMainWorld("electronAPI", {
    ready: () => true
});
