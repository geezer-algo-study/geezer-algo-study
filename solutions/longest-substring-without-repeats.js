/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s===""){
        return 0;
    }
    let anss=[]
    for(let i=0; i<s.length; i++){
        let ans=''
        for(let j=i; j<s.length; j++){
            if(!ans.includes(s[j])){
                ans+=s[j]
            }
            else {
                break;
            }
        }
        anss.push(ans)
    }
    anss.sort((a,b)=>b.length-a.length)
    return anss[0].length;
};