/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
window.onload = function() {
  // console.log("Hello Rigo from the console!");
};
var w;
document.getElementById("startworker").onclick = function() {
  if (typeof Worker !== "undefined") {
    if (typeof w == "undefined") {
      w = new Worker("./src/worker.js");
    }
    w.onmessage = function(event) {
      var res = event.data;
      document.getElementById("result").innerHTML = res;
    };
  } else {
    document.getElementById("result").innerHTML =
      "Sorry! No Web Worker support.";
  }
};
document.getElementById("stoptworker").onclick = function() {
  if (w != undefined) {
    w.terminate();
    w = undefined;
    document.getElementById("result").innerHTML =
      " If this text is <b>not</b> centered and <b>yellow</b>, you probably have an error";
  }
};