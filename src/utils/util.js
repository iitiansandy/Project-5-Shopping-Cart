const ObjectId = require("mongoose").Types.ObjectId;

//<======================== Validators =====================================>//

const isValidRequestBody = function (requestBody) {
  return Object.keys(requestBody).length > 0;
};

const isValid = function (value) {
  if (typeof value === "undefined" || typeof value === null) return false;
  if (typeof value === "string" && value.trim().length == 0) return false;
  return true;
};

const isvalidEmail = function (gmail) {
  let regex = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  return regex.test(gmail);
};

const moblieRegex = function (mobile) {
  let regex =
    /^(?:(?:\+|0{0,2})91(\s*|[\-])?|[0]?)?([6789]\d{2}([-]?)\d{3}([-]?)\d{4})$/;
  return regex.test(mobile);
};

let isValidName = function (name) {
  let nameRegex = /^[A-Za-z\s]{1,}[A-Za-z\s]{0,}$/;
  return nameRegex.test(name);
};

let isValidPassword = function (password) {
  let regexPassword =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
  return regexPassword.test(password);
};

let isValidObjectId = function (objectId) {
  if (!ObjectId.isValid(objectId)) return false;
  return true;
};

let isValidPincode = function(pincode) { let regexpincode = /^[0-9]{6}$/; return regexpincode.test(pincode); };

module.exports = {
  isValid,
  isValidRequestBody,
  isValidName,
  isvalidEmail,
  moblieRegex,
  isValidObjectId,
  isValidPassword,
  isValidPincode
};
