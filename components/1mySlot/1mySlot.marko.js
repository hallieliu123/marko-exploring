// Compiled using marko@4.18.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/app$1.0.0/components/1mySlot/1mySlot.marko",
    marko_component = require("./1mySlot.marko"),
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    _testSlot_template = require("../components/1testSlot"),
    marko_loadTag = marko_helpers.t,
    _testSlot_tag = marko_loadTag(_testSlot_template);

function render(input, out, __component, component, state) {
  var data = input;

  _testSlot_tag({
      renderBody: function(out, { isSlot }) {
        out.w("<p>自定义组件 - " +
          marko_escapeXml(input.name) +
          "</p><p>isSlot - " +
          marko_escapeXml(isSlot) +
          "</p>");
      }
    }, out, __component, "0");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/app$1.0.0/components/1mySlot/1mySlot.marko",
    component: "./1mySlot.marko",
    tags: [
      "../components/1testSlot"
    ]
  };
