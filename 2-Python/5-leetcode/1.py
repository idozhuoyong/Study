'''
1. 两数之和，简单难度 (https://leetcode-cn.com/problems/two-sum/)

给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。

示例 1：
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]

需要考虑特殊数据
[3, 3] 6 这种
'''
from typing import List
class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # 方式一
        # for x in nums:
        #     y = target - x
        #     if y in nums:
        #         index1 = nums.index(x)
        #         nums.reverse()
        #         index2 = len(nums) - nums.index(y) - 1
        #         nums.reverse()
        #         if index1 != index2:
        #             result = [index1, index2]
        #             print(result)
        #             return result

        # 方式二
        hashmap = {}
        for index, num in enumerate(nums):
            if hashmap.get(target - num) is not None:
                return [index, hashmap.get(target - num)]
            hashmap[num] = index
            # print(hashmap)

s = Solution()
# s.twoSum([3, 3], 6)
# s.twoSum([2,7,11,15], 9)
print(s.twoSum([2,5,5,11], 10))



