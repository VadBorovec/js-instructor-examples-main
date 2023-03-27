"use strict";

var _validatePassword = _interopRequireDefault(require("./js/validate-password"));
var _apiService = require("./js/api-service");
var _onOpenModal = _interopRequireDefault(require("./js/on-open-modal"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
_onOpenModal.default.addEventListener('click', _onOpenModal.default);
(0, _apiService.addUser)('mango');

// console.log(validatePasword('qweqweqeqweqweqweqw'));
// import {
//   fetchAllUsers,
//   fetchUserById,
//   updateUserById,
//   x as value,
//   y as name,
// } from './js/api-service';
// import * as apiService from './js/api-service';

// console.log(validatePasword);
// console.log(validatePasword('qweqweqwe'));

// console.log(fetchAllUsers);
// console.log(fetchUserById);
// console.log(updateUserById);
// console.log(value);
// console.log(name);

// console.log(apiService);