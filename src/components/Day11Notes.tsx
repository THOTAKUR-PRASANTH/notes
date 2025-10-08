export function Day11Notes() {
  const content = String.raw`
#stacks in python
#stack is a linear data structure that follows the LIFO (Last In First Out) principle.

#basic operations of stack
#1.push: add an element to the top of the stack
#2.pop: remove and return the top element of the stack
#3.peek: return the top element of the stack without removing it
#4.is_empty: check if the stack is empty
#5.size: return the number of elements in the stack

# we can create the stack using list,linked list,deque,array etc.

# stack  = []

# #push operation 
# stack.append(1)
# stack.append(2)
# stack.append(3)
# print("the stack:",stack)

#pop operation
# print("popped element:",stack.pop())
# print("the stack after pop:",stack)

#peek operation
# print("top element:",stack[-1])

#is_empty operation
# print("is stack empty?",len(stack) == 0)

#size operation
# print("size of stack:",len(stack))

# class Stack:
#     def __init__(self):
#         self.stack = []
    
#     def push(self,item):
#         self.stack.append(item)
    
#     def pop(self):
#         if self.is_empty():
#             return "Stack is empty"
#         return self.stack.pop()
#     def peek(self):
#         if self.is_empty():
#             return "Stack is empty"
#         return self.stack[-1]
    
# stack = Stack()
# stack.push(1)
# stack.push(2)
# stack.push(3)
# print("the stack:",stack.stack)


#we can also create the stack by using the  deque

# from collections import deque
# stack = deque()
# stack.append(1)
# stack.append(2)
# stack.append(3)
# print("the stack:",stack)  

#we can also create the stack by using the linked list
# we use list to create the  stack and it has efficient memory management

#real world applications of stack
# undo and redo operations in text editors
#in the case of browser back and forward buttons
#expression Evalation

# we can the undo and redo operation now...

# undo_stack =[]
# redo_stack =[]

# def write(text):
#     undo_stack.append(text)
#     redo_stack.clear()
#     print("Current text:",text)

# def undo():
#     if undo_stack:
#         text = undo_stack.pop()
#         redo_stack.append(text)
#         print("Undone:",text)

# def redo():
#     if redo_stack:
#         text = redo_stack.pop()
#         undo_stack.append(text)
#         print("Redone:",text)


# def show_stacks():
#     print("Undo Stack:",undo_stack)
#     print("Redo Stack:",redo_stack)

# write("hello")
# write("world")
# show_stacks()
# undo()
# show_stacks()
# redo()
# show_stacks()

#queues in python

#queue is a linear data structure that follows the FIFO (First In First Out) principle.
#basic operations of queue
#1.enqueue: add an element to the end of the queue
#2.dequeue: remove and return the front element of the queue
#3.front: return the front element of the queue without removing it
#4.is_empty: check if the queue is empty
#5.size: return the number of elements in the queue

# we can create the queue using list,linked list,deque,array etc.

queue = []

#enqueue operation
queue.append(1)
queue.append(2)
queue.append(3) 
print("the queue:",queue)

# #dequeue operation
# print("dequeued element:",queue.pop(0))

# print("the queue after dequeue:",queue)

# #front operation
# print("front element:",queue[0])

# #is_empty operation
# print("is queue empty?",len(queue) == 0)


# #size operation
print("size of queue:",len(queue))

#----------------------------------------------DAY-11-Assignments------------------------------

# Day 11 Assignments: Stacks and Queues

# 1. Basic Stack Operations
#   - Implement a stack class with push, pop, peek, is_empty, and size methods.
#   - Test your stack with at least 5 values and show all operations.

# 2. Bracket Matching
#   - Write a function to check if a string of brackets is balanced using a stack.
#   - Test with (), ()[]{}, (], ([)], {[()]}, etc.

# 3. Reverse String using Stack
#   - Write a function to reverse a string using stack operations.
#   - Compare your result with Python's slicing reverse.

# 4. Postfix Expression Calculator
#   - Write a function to evaluate a postfix expression using a stack.
#   - Support +, -, *, / and multi-digit numbers.

# 5. Queue Implementation
#   - Implement a queue class with enqueue, dequeue, front, is_empty, and size methods.
#   - Test your queue with at least 5 values and show all operations.

# 6. Hot Potato Game
#   - Simulate the Hot Potato game using a queue.
#   - Given a list of names and a count, remove every nth person until one remains.

# 7. Enhanced Undo-Redo System
#   - Create a text editor simulation supporting write, delete, and replace operations.
#   - Implement undo and redo for all operations using stacks.

# 8. Performance Comparison (Bonus)
#   - Compare the speed of stack and queue operations using list vs deque for 10,000 operations.
#   - Print and analyze the results.

# 9. use the queue to implement the bank system(people come in and go out in the order they arrive)
`

return (
    <div className="rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl">
  <div className="max-w-none rounded-md bg-slate-900">
    <pre className="font-mono text-sm leading-7 text-slate-100 p-4 overflow-x-auto">
      <code>{content}</code>
    </pre>
  </div>
</div>
  )
}