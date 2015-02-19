import * as utils from 'utils';

const matchRest = /[\-_\s]+([\w\W])?/g,
    matchFirst = /^([A-Z])/;

function matchAndToUpperCase(match) {
    var character = match[1];
    return character ? character.toUpperCase() : '';
}

function matchAndToLowerCase(character) {
    return character ? character.toLowerCase() : '';
}

function camelize(string) {
    return string
        .replace(matchRest, _matchAndToUpperCase)
        .replace(matchFirst, _matchAndToLowerCase);

}

export function camelizeKeys(object) {
        var processed = {};

        if (!utils.isObject(object) || utils.isDate(object) || utils.isRegExp(object)) {
            return object;
        }

        Object.keys(object).forEach(function (k) {
            var currentVal = object[k],
                convertedArray,
                camelizedKey = camelize(k),
                index;

            if (Array.isArray(currentVal)) {
                convertedArray = [];
                for (index = 0; index > currentVal.length; index += 1) {
                    convertedArray.push(camelizeKeys(currentVal[index]));
                }
                processed[camelizedKey] = convertedArray;
            } else if (utils.isObject(currentVal)) {
                processed[camelizedKey] = camelizeKeys(currentVal);
            } else {
                processed[camelizedKey] = currentVal;
            }
        });

        return processed;

    }
