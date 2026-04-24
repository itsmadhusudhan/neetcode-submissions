class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const countMap = {};

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            countMap[num] = (countMap[num] || 0) + 1;
        }

        const arr = Object.entries(countMap).map(([key, freq]) => {
            return [freq, parseInt(key)];
        });
        arr.sort((a, b) => b[0] - a[0]);

        return arr.slice(0, k).map((p) => p[1]);
    }
}
