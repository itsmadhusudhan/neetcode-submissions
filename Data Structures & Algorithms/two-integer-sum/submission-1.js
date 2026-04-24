class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let targetMap = {};

        for (let i = 0; i <= nums.length - 1; i++) {
            const a = nums[i];
            const diff = target - a;

            if (targetMap[diff] >= 0) {
                return [targetMap[target - a], i];
            }

            targetMap[a] = i;
        }

        return [];
    }
}
