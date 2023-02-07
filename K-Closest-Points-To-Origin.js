/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let sqrts = [];
  let sqrt = 0;
// calculate the distance in square for each points from origin  
  for (let i = 0; i < points.length; i++) {
    sqrt = points[i][0] ** 2 + points[i][1] ** 2;
    sqrts.push(sqrt);
  }
//   sort the distance
  sqrts.sort((a, b) => a - b);
  let sqrt2 = 0;
//   find the last distance returned==the Kth returned value
  let sqrtK = sqrts[k - 1];
// declare array that store the nearest coordinate
  let nearests = [];
  for (let i = 0; i < points.length; i++) {
    sqrt2 = points[i][0] ** 2 + points[i][1] ** 2;
    if (sqrt2<=sqrtK) {
      nearests.push([points[i][0], points[i][1]]);
    }
  }

  return nearests;
};
