// Compiled using marko@4.18.24 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function() {
          console.log("hello onCreate test...");

          this.state = {
              count: 0,
              group: [
                  "btn1",
                  "btn2",
                  "btn3"
                ]
            };
        },
        handleClick: function(val) {
          this.setState({
              count: this.state.count + val
            });
        }
      },
    marko_componentType = "/app$1.0.0/components/hello.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    test_template = require("./test.marko"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    test_tag = marko_loadTag(test_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div>");

  test_tag({
      handler: component.handleClick.bind(component),
      count: state.count,
      group: state.group
    }, out, __component, "1");

  out.w("</div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/app$1.0.0/components/hello.marko",
    component: "./hello.marko",
    tags: [
      "./test.marko"
    ]
  };
