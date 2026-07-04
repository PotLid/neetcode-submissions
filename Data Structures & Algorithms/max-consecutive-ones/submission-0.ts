class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums: number[]): number {
    // Highest consecutive nums count
    let highestCount = 0;
    let curCount = 0

    // nums.length < 1

    if (nums.length === 1) {
        if (nums[0] === 0) {
            return 0
        }else {
            return 1
        }
    }

    if (nums[0] === 1) {
        curCount++;
    }

    for (let leadingIdx = 1 ; leadingIdx < nums.length ; leadingIdx++) {
        const trailingIdx = leadingIdx - 1;
        
        // case 1 [0,0]
        if (nums[trailingIdx] === 0 && nums[leadingIdx] === 0){
            continue;
        }
        // case 3 [1,0]
        else if(nums[trailingIdx] === 1 && nums[leadingIdx] === 0) {
            highestCount = Math.max(highestCount, curCount);
            curCount = 0;
        }
        // case 2 [0,1] case 4 [1,1]
        else {
            curCount++;
        }
    }

    return Math.max(highestCount, curCount);
};
}
