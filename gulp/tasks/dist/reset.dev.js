"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reset = void 0;

var _del = _interopRequireDefault(require("del"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reset = function reset() {
  return (0, _del["default"])(app.path.clean);
};

exports.reset = reset;