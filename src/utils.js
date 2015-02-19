export function isObject(item){
    return (typeof item === "object" && !Array.isArray(item) && item !== null);
}

    
export function isDate(value){
    return (isObject(value) && Object.prototype.toString.call(value) === '[object Date]');
}

    
export function isRegExp(value){
    return (isObject(value) && Object.prototype.toString.call(value) === '[object RegExp]');
}