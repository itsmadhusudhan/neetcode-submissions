class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set(nums);
        let longest = 0;

        for (let num of nums) {
            if (!numSet.has(num - 1)) {
                let streak = 1;
                // if it has next number increment streak
                while (numSet.has(num + streak)) {
                    streak++;
                }

                longest = Math.max(longest, streak);
            }
        }

        return longest;
    }
}
