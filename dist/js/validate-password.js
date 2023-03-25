"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validatePasword;
var _joi = _interopRequireDefault(require("joi"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var passSchema = _joi.default.string().min(3).max(10);
function validatePasword(password) {
  return passSchema.validate(password);
}