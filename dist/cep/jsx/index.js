(function (thisObj) {

var config = {
  version: version,
  id: "com.howa_automate_cep.cep",
  displayName: "Howa Automate Cep",
  symlink: "local",
  port: 3000,
  servePort: 5000,
  startingDebugPort: 8860,
  extensionManifestVersion: 6.0,
  requiredRuntimeVersion: 9.0,
  hosts: [{
    name: "AEFT",
    version: "[0.0,99.9]"
  }, {
    name: "AME",
    version: "[0.0,99.9]"
  }, {
    name: "AUDT",
    version: "[0.0,99.9]"
  }, {
    name: "FLPR",
    version: "[0.0,99.9]"
  }, {
    name: "IDSN",
    version: "[0.0,99.9]"
  }, {
    name: "ILST",
    version: "[0.0,99.9]"
  }, {
    name: "KBRG",
    version: "[0.0,99.9]"
  }, {
    name: "PHXS",
    version: "[0.0,99.9]"
  }, {
    name: "PPRO",
    version: "[0.0,99.9]"
  }],
  type: "Panel",
  iconDarkNormal: "./src/assets/light-icon.png",
  iconNormal: "./src/assets/dark-icon.png",
  iconDarkNormalRollOver: "./src/assets/light-icon.png",
  iconNormalRollOver: "./src/assets/dark-icon.png",
  parameters: ["--v=0", "--enable-nodejs", "--mixed-context"],
  width: 500,
  height: 550,
  panels: [{
    mainPath: "./main/index.html",
    name: "main",
    panelDisplayName: "Howa Automate Cep",
    autoVisible: true,
    width: 600,
    height: 650
  }],
  build: {
    jsxBin: "off",
    sourceMap: true
  },
  zxp: {
    country: "US",
    province: "CA",
    org: "MyCompany",
    password: "mypassword",
    tsa: "http://timestamp.digicert.com/",
    sourceMap: false,
    jsxBin: "off"
  },
  installModules: [],
  copyAssets: [],
  copyZipAssets: []
};

var ns = config.id;

var helloVoid = function helloVoid() {
  alert("test");
};
var helloError = function helloError(str) {
  // Intentional Error for Error Handling Demonstration
  
  strr;
};
var helloStr = function helloStr(str) {
  alert("ExtendScript received a string: ".concat(str));
  return str;
};
var helloNum = function helloNum(n) {
  alert("ExtendScript received a number: ".concat(n.toString()));
  return n;
};
var helloArrayStr = function helloArrayStr(arr) {
  alert("ExtendScript received an array of ".concat(arr.length, " strings: ").concat(arr.toString()));
  return arr;
};
var helloObj = function helloObj(obj) {
  alert("ExtendScript received an object: ".concat(JSON.stringify(obj)));
  return {
    y: obj.height,
    x: obj.width
  };
};

var helloWorld$8 = function helloWorld() {
  alert("Hello from After Effects!");
  app.project.activeItem;
};

var aeft = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  helloError: helloError,
  helloStr: helloStr,
  helloNum: helloNum,
  helloArrayStr: helloArrayStr,
  helloObj: helloObj,
  helloVoid: helloVoid,
  helloWorld: helloWorld$8
});

var helloWorld$7 = function helloWorld() {
  alert("Hello from Media Encoder");
};

var ame = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  helloError: helloError,
  helloStr: helloStr,
  helloNum: helloNum,
  helloArrayStr: helloArrayStr,
  helloObj: helloObj,
  helloVoid: helloVoid,
  helloWorld: helloWorld$7
});

var helloWorld$6 = function helloWorld() {
  alert("Hello from Animate");
};

var anim = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  helloError: helloError,
  helloStr: helloStr,
  helloNum: helloNum,
  helloArrayStr: helloArrayStr,
  helloObj: helloObj,
  helloVoid: helloVoid,
  helloWorld: helloWorld$6
});

var helloWorld$5 = function helloWorld() {
  alert("Hello from Audtion");
};

var audt = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  helloError: helloError,
  helloStr: helloStr,
  helloNum: helloNum,
  helloArrayStr: helloArrayStr,
  helloObj: helloObj,
  helloVoid: helloVoid,
  helloWorld: helloWorld$5
});

var helloWorld$4 = function helloWorld() {
  alert("Hello from InDesign");
};

var idsn = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  helloError: helloError,
  helloStr: helloStr,
  helloNum: helloNum,
  helloArrayStr: helloArrayStr,
  helloObj: helloObj,
  helloVoid: helloVoid,
  helloWorld: helloWorld$4
});

var helloWorld$3 = function helloWorld() {
  alert("Hello from Illustrator");
};

var ilst = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  helloError: helloError,
  helloStr: helloStr,
  helloNum: helloNum,
  helloArrayStr: helloArrayStr,
  helloObj: helloObj,
  helloVoid: helloVoid,
  helloWorld: helloWorld$3
});

var helloWorld$2 = function helloWorld() {
  alert("Hello from Bridge");
};

var kbrg = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  helloError: helloError,
  helloStr: helloStr,
  helloNum: helloNum,
  helloArrayStr: helloArrayStr,
  helloObj: helloObj,
  helloVoid: helloVoid,
  helloWorld: helloWorld$2
});

var helloWorld$1 = function helloWorld() {
  alert("Hello from Photoshop");
};

var phxs = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  helloError: helloError,
  helloStr: helloStr,
  helloNum: helloNum,
  helloArrayStr: helloArrayStr,
  helloObj: helloObj,
  helloVoid: helloVoid,
  helloWorld: helloWorld$1
});

var qeDomFunction = function qeDomFunction() {
  if (typeof qe === "undefined") {
    app.enableQE();
  }
  if (qe) {
    qe.name;
    qe.project.getVideoEffectByName("test");
  }
};
var helloWorld = function helloWorld() {
  alert("Hello from Premiere Pro.");
};

var ppro = /*#__PURE__*/__objectFreeze({
  __proto__: null,
  helloError: helloError,
  helloStr: helloStr,
  helloNum: helloNum,
  helloArrayStr: helloArrayStr,
  helloObj: helloObj,
  helloVoid: helloVoid,
  qeDomFunction: qeDomFunction,
  helloWorld: helloWorld
});

var host = typeof $ !== "undefined" ? $ : window;

// A safe way to get the app name since some versions of Adobe Apps broken BridgeTalk in various places (e.g. After Effects 24-25)
// in that case we have to do various checks per app to deterimine the app name

var getAppNameSafely = function getAppNameSafely() {
  var compare = function compare(a, b) {
    return a.toLowerCase().indexOf(b.toLowerCase()) > -1;
  };
  var exists = function exists(a) {
    return typeof a !== "undefined";
  };
  var isBridgeTalkWorking = typeof BridgeTalk !== "undefined" && typeof BridgeTalk.appName !== "undefined";
  if (isBridgeTalkWorking) {
    return BridgeTalk.appName;
  } else if (app) {
    
    if (exists(app.name)) {
      
      var name = app.name;
      if (compare(name, "photoshop")) return "photoshop";
      if (compare(name, "illustrator")) return "illustrator";
      if (compare(name, "audition")) return "audition";
      if (compare(name, "bridge")) return "bridge";
      if (compare(name, "indesign")) return "indesign";
    }
    
    if (exists(app.appName)) {
      
      var appName = app.appName;
      if (compare(appName, "after effects")) return "aftereffects";
      if (compare(appName, "animate")) return "animate";
    }
    
    if (exists(app.path)) {
      
      var path = app.path;
      if (compare(path, "premiere")) return "premierepro";
    }
    
    if (exists(app.getEncoderHost) && exists(AMEFrontendEvent)) {
      return "ame";
    }
  }
  return "unknown";
};
switch (getAppNameSafely()) {
  case "aftereffects":
  case "aftereffectsbeta":
    host[ns] = aeft;
    break;
  case "ame":
  case "amebeta":
    host[ns] = ame;
    break;
  case "audition":
  case "auditionbeta":
    host[ns] = audt;
    break;
  case "bridge":
  case "bridgebeta":
    host[ns] = kbrg;
    break;
  case "illustrator":
  case "illustratorbeta":
    host[ns] = ilst;
    break;
  case "indesign":
  case "indesignbeta":
    host[ns] = idsn;
    break;
  case "photoshop":
  case "photoshopbeta":
    host[ns] = phxs;
    break;
  case "premierepro":
  case "premiereprobeta":
    host[ns] = ppro;
    break;
  case "animate":
  case "animatebeta":
    host[ns] = anim;
    break;
}

// https://extendscript.docsforadobe.dev/interapplication-communication/bridgetalk-class.html?highlight=bridgetalk#appname
