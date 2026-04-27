class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let l = 0,
            r = numbers.length - 1;

        while (l < r) {
            const curSum = numbers[l] + numbers[r];

            if (curSum === target) {
                return [l + 1, r + 1];
            } else if (curSum > target) {
                r--;
            } else {
                l++;
            }
        }

        return [];
    }
}
