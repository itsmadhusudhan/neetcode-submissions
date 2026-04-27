class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const numMap = {};

        for (let i = 0; i < numbers.length; i++) {
            if (numMap[target - numbers[i]]) {
                return [numMap[target - numbers[i]], i+1];
            }
            numMap[numbers[i]] = i+1;
        }

        return [];
    }
}
