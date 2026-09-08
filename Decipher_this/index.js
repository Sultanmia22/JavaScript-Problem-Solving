/* Description:
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
there are no special characters used, only letters and spaces
words are separated by a single space
there are no leading or trailing spaces
Examples

'72olle 103doo 100ya' --> 'Hello good day'
'82yade 115te 103o'   --> 'Ready set go' */

//! Solution;

function decipherThis(str) {
    return str.split(' ').map(word => {
        const numCode = parseInt(word);
        
        const firstChar = String.fromCharCode(numCode);

        const letters = word.slice(String(numCode).length);

        if(letters.length < 1) {
            return firstChar + letters;
        }

        const decodedLetters = 
        letters[letters.length - 1] + 
        letters.slice(1, -1) + 
        letters[0];

        return firstChar + decodedLetters
    })
    .join(" ")
}

const result1 = decipherThis('72olle 103doo 100ya');

console.log(result1)