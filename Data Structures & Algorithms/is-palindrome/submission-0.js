class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const regex = /[a-zA-Z0-9]/;
        let a = 0;
        let b = s.length - 1;
        const str = s.toLowerCase();

        while (a < b) {
            console.log(str[a]);
            console.log(str[b]);
            if (str[a] === str[b]) {
                a++;
                b--;
            } else if (!regex.test(str[a])) {
                a++;
            } else if (!regex.test(str[b])) {
                b--;
            } else {
                return false;
            }
        }

        return true;
    }
}
