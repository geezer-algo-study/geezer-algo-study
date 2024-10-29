/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    var ans = [];
    nums.sort((a,b) => a-b);
    var n = [];
    var zeros = [];

    for(let i = 0; i < nums.length; i++){
        if(nums[i] < 0){
            n.push(nums[i]);
        } else if(nums[i] === 0){
            zeros.push(0);
        }
    }

    if(zeros.length >= 3){
        ans.push([0,0,0]);
    }

    for(let i = 0; i < n.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            let complement = -(n[i] + nums[j]);
            if(nums.slice(j+1).includes(complement)){
                let triplet = [n[i], nums[j], complement].sort((a,b) => a-b);
                if(!ans.some(arr => arr.every((num, index) => num === triplet[index]))) {
                    ans.push(triplet);
                }
            }
        }
    }

    return ans;
};