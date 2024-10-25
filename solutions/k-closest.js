/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    var result = [];

    for (let i = 0; i < points.length; i++) {
        var x = points[i][0];
        var y = points[i][1];
        var dist = Math.sqrt((x - 0) ** 2 + (y - 0) ** 2);
        result.push([dist, [x, y]]);
    }

    result.sort((a, b) => a[0] - b[0]);

    var answer = [];
    for (let i = 0; i < k; i++) {
        answer.push(result[i][1]);
    }
    
    return answer;
};