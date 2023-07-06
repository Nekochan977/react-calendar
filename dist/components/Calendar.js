"use strict";
import React from "react";
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _Cell = _interopRequireDefault(require("./Cell"));
var _dateFns = require("date-fns");
var _react = require("react");
require("./Calendar.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const weekDays = ["Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "Sun"];
const Calendar = _ref => {
  let {
    className,
    text,
    handleMyClick,
    ID
  } = _ref;
  const [openCalendar, setOpenCalendar] = (0, _react.useState)(false);
  const [currentDate, setCurrentDate] = (0, _react.useState)(new Date());
  const showCalendar = () => {
    setOpenCalendar(openCalendar => true);
  };
  const startDate = (0, _dateFns.startOfMonth)(currentDate);
  const endDate = (0, _dateFns.endOfMonth)(currentDate);
  const numDays = (0, _dateFns.differenceInDays)(endDate, startDate) + 1;
  const prefixDays = startDate.getDay() - 1;
  const suffixDays = 7 - endDate.getDay();
  const prevMonth = () => setCurrentDate((0, _dateFns.sub)(currentDate, {
    months: 1
  }));
  const nextMonth = () => setCurrentDate((0, _dateFns.add)(currentDate, {
    months: 1
  }));
  const prevYear = () => setCurrentDate((0, _dateFns.sub)(currentDate, {
    years: 1
  }));
  const nextYear = () => setCurrentDate((0, _dateFns.add)(currentDate, {
    years: 1
  }));
  const handleClickDate = index => {
    const date = (0, _dateFns.setDate)(currentDate, index);
    handleMyClick && handleMyClick((0, _dateFns.format)(date, "PPP"));
    setCurrentDate(date);
    setOpenCalendar(false);
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "calendar-block"
  }, /*#__PURE__*/React.createElement("label", null, text), /*#__PURE__*/React.createElement("input", {
    id: ID,
    className: "calendar-input",
    onClick: showCalendar,
    onChange: () => {},
    value: (0, _dateFns.format)(currentDate, "PPP")
  })), openCalendar === true ? /*#__PURE__*/React.createElement("div", {
    className: className
  }, /*#__PURE__*/React.createElement("div", {
    className: "calendar-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cell-container"
  }, /*#__PURE__*/React.createElement(_Cell.default, {
    className: "cell top-cell clickable-cell",
    onClick: prevYear
  }, "<<"), /*#__PURE__*/React.createElement(_Cell.default, {
    className: "cell top-cell clickable-cell",
    onClick: prevMonth
  }, "<"), /*#__PURE__*/React.createElement(_Cell.default, {
    className: "cell top-cell full-date-cell"
  }, (0, _dateFns.format)(currentDate, "LLLL yyyy")), /*#__PURE__*/React.createElement(_Cell.default, {
    className: "cell top-cell clickable-cell",
    onClick: nextMonth
  }, ">"), /*#__PURE__*/React.createElement(_Cell.default, {
    className: "cell top-cell clickable-cell",
    onClick: nextYear
  }, ">>"), weekDays.map(day => /*#__PURE__*/React.createElement(_Cell.default, {
    key: day,
    className: "cell day-cell"
  }, day)), Array.from({
    length: prefixDays
  }).map((_, index) => {
    return /*#__PURE__*/React.createElement(_Cell.default, {
      key: index,
      className: "cell"
    });
  }), Array.from({
    length: numDays
  }).map((_, index) => {
    const date = index + 1;
    return /*#__PURE__*/React.createElement(_Cell.default, {
      key: date,
      className: "cell clickable-cell",
      onClick: () => handleClickDate(date, index + 1)
    }, date);
  }), Array.from({
    length: suffixDays
  }).map((_, index) => {
    return /*#__PURE__*/React.createElement(_Cell.default, {
      key: index,
      className: "cell"
    });
  })))) : "");
};
var _default = Calendar;
exports.default = _default;