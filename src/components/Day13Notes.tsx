export function Day13Notes() {
  const content =
`#linked list implementation in python

#linked list consists of nodes with data and a pointer to the next node
#it is a linear data structure
#it is dynamic in size 
#it allows for efficient insertion and deletion of elements

#if want to insert or delete an element in an array, we have to shift all the elements
#in a linked list, we just have to change the pointers

#[12,30,40,50]
# it is not possible to access an element directly in a linked list
# we have to traverse the list from the head to the desired node

#linked list types:
#1. singly linked list
#2. doubly linked list
#3. circular linked list


#singly linked list implementation


#append function to add a node at the end of the linked list
#pop function to remove a node from the end of the linked list
#prepend function to add a node at the beginning of the linked list
#delete function to remove a node from the beginning of the linked list
#display function to display the linked list

class Node:
    def __init__(self,value):
        self.value = value
        self.next =  None

class LinkedList:
    def __init__(self):
        self.head = None
        self.tail = None 

    def append(self,value):
        new_node = Node(value)
        if self.head == None:
            self.head = new_node
            self.tail = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node


    def display(self):
        current_node = self.head
        while current_node!= None:
            print(current_node.value, end="  ")
            current_node = current_node.next


    def prepend(self,value):
        new_node = Node(value)
        new_node.next = self.head
        self.head = new_node

    def pop(self):
        if self.head == None:
            return "List is empty"
        elif self.head == self.tail:
            self.poped_value = self.head.value
            self.head = None
            self.tail = None
            return "the poped value is",self.poped_value
        else:
            current_node = self.head 
            while current_node.next != self.tail:
                current_node = current_node.next
            self.poped_value = self.tail.value
            current_node.next = None
            self.tail = current_node
            return "the poped value is",self.poped_value
            
    def delete_At_Beginning(self):
        if self.head == None:
            return "the linked list is empty"
        elif self.head == self.tail:
            self.deleted_value = self.head.value
            self.head = None
            self.tail = None
            return "the deleted value is",self.deleted_value
        else:
            self.head = self.head.next
            
    def Search(self,value):
        if self.head == None:
            return "the Linked list is empty"
        else:
            current_node = self.head 
            while current_node != None:
                if current_node.value == value:
                    return "the value is found"
                current_node = current_node.next
            return "the value is not found"

linkedlist = LinkedList()
linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)
linkedlist.append(4)
linkedlist.append(5)
linkedlist.prepend(0)   
print(linkedlist.pop())
print(linkedlist.delete_At_Beginning())
linkedlist.display()
print(linkedlist.Search(1))  


#doubly linked list implementation
#each node contains a pointer to the next node and a pointer to the previous node

class Node:
    def __init__(self,value):
        self.prev = None
        self.value = value
        self.next = None
        
class DoublyLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
    
    def append(self,value):
        new_node = Node(value)
        if self.head == None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.prev = self.tail
            self.tail.next = new_node
            self.tail = new_node
    def display(self):
        current_node = self.head
        while current_node != None:
            print(current_node.value, end="  ")
            current_node = current_node.next
    
    def reverse_display(self):
        current_node = self.tail
        while current_node != None:
            print(current_node.value, end="  ")
            current_node = current_node.prev

    def addAtBeginning(self,value):
        new_node = Node(value)
        if self.head == None:
            self.head = new_node
            self.tail = new_node
        else:
            new_node.next = self.head
            self.head.prev = new_node
            self.head = new_node

    def deleteAtBeginning(self):
        if self.head == None:
            return "the linked List is empty"
        elif self.head == self.tail:
            self.deleted_value = self.head.value
            self.head = None
            self.tail = None
            return "the deleted value is",self.deleted_value
        else:
            self.head = self.head.next
            self.head.prev = None
        
    def deleteAtEnd(self):
        if self.head == None:
            return "the linked List is empty"
        elif self.head == self.tail:
            self.deleted_value = self.head.value
            self.head = None
            self.tail = None
            return "the deleted value is",self.deleted_value
        else:
            self.tail = self.tail.prev
            self.tail.next = None
        
doublylinkedlist = DoublyLinkedList()
doublylinkedlist.append(1)
doublylinkedlist.append(2)
doublylinkedlist.append(3)
doublylinkedlist.append(4)  
doublylinkedlist.append(5)
doublylinkedlist.addAtBeginning(0)
doublylinkedlist.reverse_display()        

#circular linked list
#the last node points to the head node
class Node:
    def __init__(self,value):
        self.value = value
        self.next = None


class CircularLinkedList:
    def __init__(self):
        self.head = None
        self.tail = None
    def append(self,value):
        new_node = Node(value)
        if self.head == None:
            self.head = new_node
            self.tail = new_node
            new_node.next = new_node
        else:
            self.tail.next = new_node
            self.tail = new_node
            self.tail.next = self.head
    def display(self):
        if self.head == None:
            print("the linked list is empty")
            return
        current_node = self.head
        while True:
            print(current_node.value, end="  ")
            current_node = current_node.next
            if current_node == self.head:
                break
    def prepend(self,value):
        new_node = Node(value)
        if self.head == None:
            self.head = new_node
            self.tail = new_node
            new_node.next = new_node
        else:
            new_node.next = self.head
            self.head = new_node
            self.tail.next = self.head

    def pop(self):
        if self.head == None:
            return "the linked list is empty"
        elif self.head == self.tail:
            self.poped_value = self.head.value
            self.head = None
            self.tail = None
            return "the poped value is",self.poped_value
        else:
            current_node = self.head
            while current_node.next != self.tail:
                current_node = current_node.next
            self.poped_value = self.tail.value
            current_node.next = self.head
            self.tail = current_node
            return "the poped value is",self.poped_value
        
    def deleteAtBeginning(self):
        if self.head == None:
            return "the linked list is empty"
        elif self.head == self.tail:
            self.deleted_value = self.head.value
            self.head = None
            self.tail = None
            return "the deleted value is",self.deleted_value
        else:
            self.deleted_value = self.head.value
            self.head = self.head.next
            self.tail.next = self.head
            return "the deleted value is",self.deleted_value


circularlinkedlist = CircularLinkedList()
circularlinkedlist.append(1)
circularlinkedlist.append(2)
circularlinkedlist.append(3)
circularlinkedlist.append(4)
circularlinkedlist.append(5)
circularlinkedlist.prepend(0)
print(circularlinkedlist.pop())
print(circularlinkedlist.deleteAtBeginning())
circularlinkedlist.display()`
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