// Ques 1: -

// Given a string, compress the repeating letters with count number
// compress('a') // 'a'
// compress('aa') // 'a2'
// compress('aaa') // 'a3'
// compress('aaab') // 'a3b'
// compress('aaabb') // 'a3b2'
// compress('aaabba') // 'a3b2a'

/**
 * 
 * @param {string} str 
*/
function compressString(chars) {
    let count = 1
    let result = ""    
    for (let i = 0; i < chars.length; i++) {        
        let cur = chars[i];
        let next = chars[i + 1];        
          if (cur === next) {
            count ++;
        } else {
            result += chars[i] + count
            count = 1;
        }
    }
    return result;
}

console.log(compressString('aaab'));
console.log(compressString('bbaaa'));