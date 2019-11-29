// Compiled using marko@4.18.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app$1.0.0/components/4lifecycle/component-browser",
    marko_component = require("./component"),
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_attr = marko_helpers.a;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<button" +
    marko_attr("data-marko", {
      onclick: __component.d("click", "handleClick", false)
    }, false) +
    ">test component-browser.js</button>");
}

marko_template._ = marko_renderer(render, {
    ___split: true,
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    deps: [
      "./style.css",
      "marko/src/runtime/components"
    ],
    id: "/app$1.0.0/components/4lifecycle/component-browser",
    component: "./component-browser"
  };
