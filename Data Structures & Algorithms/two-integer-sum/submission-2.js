class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let targetMap = new Map();

        for (let i = 0; i <= nums.length - 1; i++) {
            const a = nums[i];
            const diff = target - a;

            if (targetMap.get(diff) >= 0) {
                return [targetMap.get(diff), i];
            }

            targetMap.set(a, i);
        }

        return [];
    }
}
