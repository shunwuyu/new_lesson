package main

import "fmt"

type ListNode struct {
	Val int
	Next *ListNode
}

func hasCycle(head *ListNode) bool {
	fast := head
	slow := head
	for fast != nil && fast.Next != nil {
		fast = fast.Next.Next
		slow = slow.Next
		if  fast == slow {
			return true
		}
	} 
	return false
}

func main() {
	n1 := &ListNode{Val:3}
	n2 := &ListNode{Val:2}
	n3 := &ListNode{Val:0}
	n4 := &ListNode{Val:4}
	n1.Next = n2
	n2.Next = n3
	n3.Next = n4
	n4.Next = n2
	fmt.Println(hasCycle(n1))

}