class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result=Array(nums.length).fill(1);

        // prefix number - we omit the first one
        for(let i=1;i<nums.length;i++){
            result[i]=result[i-1]*nums[i-1];
        }

        // post number - we omit the last one by multiplying with one
        let postfix = 1;
        for(let i=nums.length-1;i>=0;i--){
            result[i]*=postfix;
            postfix*=nums[i];
        }

        return result;
    }
}
