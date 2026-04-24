class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const duplicatesMap = {};

        for (let num of nums) {
            if (!duplicatesMap[num]) {
                duplicatesMap[num] = 0;
            }

            duplicatesMap[num] = duplicatesMap[num] + 1;
            if (duplicatesMap[num] > 1) {
                return true;
            }
        }

        return false;
    }
}
