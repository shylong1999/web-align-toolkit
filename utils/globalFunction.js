var globalFunction = {};
globalFunction.validateFunction = function(input) {
    if (input === null)
        input = '';
    return input;
}
globalFunction.formatNumberLength = function(num, length) {
    var r = "" + num;
    while (r.length < length) {
        r = "0" + r;
    }
    return r;
}
globalFunction.isEmpty = function (obj) {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
}
globalFunction.toDay = function () {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}
module.exports = globalFunction;