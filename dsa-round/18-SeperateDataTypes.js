/**
 * 
 * @param {*} str 
 * @param {string[]} string 
 * @param {number[]} string 
 * @param {boolean[]} boolean 
 * @param {object[]} object 
 * @param {undefined[] | null[]} nulls 
 * @param {any[]} others 
 * @returns {object}
 */
const seperateDataTypes = function(
    str,
    string = [],
    number = [],
    boolean = [],
    object = [],
    nulls = [],
    others = [],
) {

    for (i = 0; i < str.length; i++) {
        // Null or Undefined
        if (str[i] === null || str[i] === undefined) {
            nulls.push(str[i]);
        }
        // Array
        else if (Array.isArray(str[i])) {
            const arrayLeft = [...str[i], ...str.slice(i + 1)];
            // const arrayLeft = str[i].concat(str.slice(i + 1));
            return seperateDataTypes(arrayLeft, string, number, boolean, object, nulls, others);
        }
        // String
        else if (typeof str[i] === 'string') {
            string.push(str[i]);
        }
        // Bool
        else if (typeof str[i] === 'boolean') {
            boolean.push(str[i]);
        }
        // Number
        else if (typeof str[i] === 'number') {
            number.push(str[i]);
        }
        // Object
        else if (typeof str[i] === 'object') {
            object.push(str[i]);
        // Default Case
        } else {
            others.push(str[i]);
        }
    }

    return {
        string,
        number,
        boolean,
        object,
        nulls,
        others,
    }
}

console.log(seperateDataTypes(['s', true, [false], 1, [2, 3], {name: 'shubham'}, undefined, null]));