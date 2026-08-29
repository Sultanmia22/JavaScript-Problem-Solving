/* Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes. */

//! Solution 
function encrypt(text, n) {
    if (!text || n <= 0) return text;
    while(n > 0) {
        let even = "";
        let odd = "";

        for(let i = 0; i < text.length; i++) {
            if(i % 2) even += text[i];
            else odd += text[i];
        }

        text = even + odd;

        n--
    }

    return text
}

const encryptResult = encrypt("012345", 1)

console.log("EncyptResult = ",encryptResult)

function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    let mid = Math.floor(encryptedText.length/2);
    
    while(n > 0) {
        let odd = encryptedText.slice(0,mid);
        let even = encryptedText.slice(mid);
        let original = "";

        for(let i = 0; i < even.length ; i ++) {
            original += even[i]
            if (odd[i]) original += odd[i];
        }

        encryptedText = original

        n--
    }

    return encryptedText;
}

const decryptResult = decrypt(encryptResult,1)

console.log("decryptResult",decryptResult)