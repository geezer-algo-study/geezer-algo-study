/** 
 i   low
[-4, -1, -1, 0, 1, 2]
                    high
 */

var threeSum = function (nums) {
    var ans = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        //만약 i가 가리키는 값이 전 값과 같으면 스킵
        if (i > 0 && nums[i] === nums[i - 1]) continue; 

        let low = i + 1;
        let high = nums.length - 1;

        while (low < high) {
            const sum = nums[i] + nums[low] + nums[high]

            //합이 0보다 작으면 low를 크게 만듦
            if (sum < 0) low++;

            //합이 0보다 크면 high를 작게 만듦
            else if (sum > 0) high--;

            else {
                ans.push([nums[i], nums[low], nums[high]])
                
                //low가 가리키는 값이 다음 값과 같으면 low 옮김
                while (low < high && nums[low] === nums[low + 1]) low++;

                //low가 가리키는 값이 다음 값과 같으면 low 옮김
                while (low < high && nums[high] === nums[high - 1]) high--;

                //답 저장하고, low와 high이동
                low++;
                high--;
            }
        }

    }

    return ans;
};