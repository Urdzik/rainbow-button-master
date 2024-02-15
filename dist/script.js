// Create a new script element
var scriptElement = document.createElement("script");
scriptElement.type = "module";
scriptElement.crossOrigin = true;
scriptElement.src = "https://urdzik.github.io/rainbow-button-master/dist/assets/index-hCfMaM4w.js";

// Create a new link element for CSS
var linkElement = document.createElement("link");
linkElement.rel = "stylesheet";
linkElement.crossOrigin = true;
linkElement.href = "https://urdzik.github.io/rainbow-button-master/dist/assets/index-iGirBDd0.css";

// Append the script and link elements to the head of the document
document.head.appendChild(scriptElement);
document.head.appendChild(linkElement);