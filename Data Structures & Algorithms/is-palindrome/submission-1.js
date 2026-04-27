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
            while (a < b && !regex.test(str[a])) {
                a++;
            }

            while (b > a && !regex.test(str[b])) {
                b--;
            }

            if (s[a].toLowerCase() !== s[b].toLowerCase()) {
                return false;
            }

            a++;
            b--;
        }

        return true;
    }
}
