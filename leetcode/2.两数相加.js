/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}
var addTwoNumbers = function(l1, l2) {

  //l1和l2同时为null时停止循环
  while(l1 !== null || l2 !== null){

    if(!result){
        //如果result不存在则初始化result和node
        var node = new ListNode(0);
        var result = node;
    }else{
        //result不为空的话将node设置为node.next
        if(node.next !== null){
            node = node.next;
        }else{
            node.next = new ListNode(0);
            node = node.next;
        }
    }
    
    //将l1和l2的val相加之后赋值给新的链表节点
    num1 = l1 ? l1.val : 0;
    num2 = l2 ? l2.val : 0;
    sum = num1 + num2;
    node.val += sum;
    //如果值大于10则进1
    if(node.val >= 10){
        node.val -= 10;
        node.next = new ListNode(1);
    }
    //将l1和l2设置为下一个节点
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
}

//返回结果
return result;
};
// @lc code=end

