/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
    if(nums.length==0){
        return 0;
    }
    //입력값이 없을때

    const n = nums.length;
    let dp = new Array(n);
    //입력 배열의 크기만큼 해당 index값 까지의 합의 최대값을 저장할 DP배열 생성

    dp[0]=nums[0];
    for(let index=1; index<n; index++){
        dp[i]=Math.max(nums[index],nums[index]+dp[index-1]);
    }
    //입력배열에서 순차적으로 해당 index값 까지 더했을때 이전보다 감소하면 현재값만 저장

    dp.sort((a, b) => a - b);
    sum = dp[n-1];
    //오름차순으로 정렬 후 dp에서 마지막값(최댓값) 반환

    return sum;
};
