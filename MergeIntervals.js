/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
            // for one coordinate no overlap
  if (intervals.length < 2) return intervals;

  let notOverlaps = [];
         //   it sorts the interval based on the initial point
  intervals.sort((a, b) => a[0] - b[0]);
         // previos is array with size of 2 and it initialy hold the first coordinate previos=[x,y]
  let previous = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
        // previos=[x,y], previous[1]=y. then check if y is greater than the x of the second coordinate
    if (previous[1] >= intervals[i][0]) {
      previous = [previous[0], Math.max(previous[1], intervals[i][1])];
    } else {
      notOverlaps.push(previous);
      previous = intervals[i];
    }
  }

  notOverlaps.push(previous);

  return notOverlaps;
};
