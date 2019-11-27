// Compiled using marko@4.18.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function(input) {
          console.log("test onCreate test...");

          this.props = input;
        },
        handleClick: function(val) {
          this.props.handler(val);
        }
      },
    marko_componentType = "/app$1.0.0/components/test.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_str = marko_helpers.s,
    marko_forEach = marko_helpers.f,
    marko_escapeXml = marko_helpers.x;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div><p>I'm counting " +
    marko_str(("<b>" + input.count) + "</b>") +
    "</p>");

  var $for$0 = 0;

  marko_forEach(input.group, function(item, index) {
    var $keyScope$0 = "[" + (($for$0++) + "]");

    out.w("<button>" +
      marko_escapeXml(item) +
      "</button>");
  });

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/app$1.0.0/components/test.marko",
    component: "./test.marko"
  };
