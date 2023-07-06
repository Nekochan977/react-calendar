"use strict";
import React from "react";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const Cell = _ref => {
  let {
    children,
    className,
    onClick
  } = _ref;
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    onClick: onClick
  }, children);
};
var _default = Cell;
exports.default = _default;