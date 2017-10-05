const constants = require('../constants/index');

const replaceVars = function (str, classname, title) {
    return str
        .replace(constants.CLASSNAME_VAR, classname)
        .replace(constants.TITLE_VAR, title);
};

const padTwo = number => (`0${number}`).slice(-2);

const getDateString = (date) => `${date.getFullYear()}-${padTwo(date.getMonth() + 1)}-${padTwo(date.getDate())}`;
const getTimeString = (date) => `${padTwo(date.getHours())}:${padTwo(date.getMinutes())}:${padTwo(date.getSeconds())}`;

module.exports = {
    replaceVars,
    getDateString,
    getTimeString,
}