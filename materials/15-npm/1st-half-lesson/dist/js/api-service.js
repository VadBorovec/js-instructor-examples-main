"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUserById = exports.fetchUserById = exports.fetchAllUsers = exports.addUser = void 0;
var _shortid = _interopRequireDefault(require("shortid"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var fetchAllUsers = function fetchAllUsers() {
  console.log('fetchAllUsers');
};
exports.fetchAllUsers = fetchAllUsers;
var fetchUserById = function fetchUserById(id) {
  console.log('fetchUserById');
};
exports.fetchUserById = fetchUserById;
var updateUserById = function updateUserById(id) {
  console.log('updateUserById');
};
exports.updateUserById = updateUserById;
var addUser = function addUser(name) {
  var user = {
    id: _shortid.default.generate(),
    name: name
  };
  console.log(user);
};
exports.addUser = addUser;