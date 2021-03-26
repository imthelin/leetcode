/*
 * @Author: imthelin
 * @since: 2021-03-12 11:53:59
 * @lastTime: 2021-03-26 16:17:12
 * @LastAuthor: Do not edit
 * @FilePath: /leetcode/1.two-sum.js
 * @Description: 
 * 1. hash
 * 2. 双循环
 */
/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */

const { map } = require("bluebird");
const { Map } = require("globalthis/implementation");

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let theMap = new Map()
  theMap.set(nums[0], 0)
  let length = nums.length
  let i = 1
  while (i < length) {
    let y = target - nums[i]
    if (theMap.has(y)) {
      return [theMap.get(y), i]
    }
    theMap.set(nums[i], i)
    i++
  }
  return []
};
// @lc code=end

