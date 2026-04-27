class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0,
            r = heights.length - 1;

        let sum = 0;

        while (l <= r) {
            const csum = Math.min(heights[l], heights[r]) * (r - l);
            sum = Math.max(sum, csum);

            if (heights[l] <= heights[r]) {
                l++;
            } else {
                r--;
            }
        }

        return sum;
    }
}
