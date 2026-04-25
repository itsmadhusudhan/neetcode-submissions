class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map((str) => `${str.length}#${str}`).join("");
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;
        let curLen = "";

        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }

            const length = parseInt(str.substring(i, j));
            i = j + 1;
            res.push(str.substring(i, i + length));
            i += length;
        }

        return res;
    }
}
