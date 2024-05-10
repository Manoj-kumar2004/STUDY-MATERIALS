class Node:
    def __init__(self,data):
        self.data=data
        self.next=None
class Linked_list:
    def __init__(self):
        self.head=None


    def insert_first(self,data):
        new_node=Node(data)
        if self.head==None:
            self.head=new_node
        else:
            new_node.next=self.head
            self.head=new_node

            
    def insert_last(self,data):
        new_node=Node(data)
        if self.head==None:
            self.head=new_node
        else:
            node=self.head
            while(node.next!=None):
                node=node.next
            node.next=new_node


    # def insert_at_index(self,data,index):
    #     new_node=Node(data)
    #     current_node=self.head
    #     position=0
    #     while current_node!=None and position+1 != index :
    #         current_node=current_node.next
    #         position+=1
    #     if current_node==None:
    #         print('The index is not within the range')
    #     else :
    #         new_node.next=current_node.next
    #         current_node.next=new_node
    def insert_at_index(self, data, index):
        new_node = Node(data)
        current_node = self.head
        position = 0
        if position == index:
            self.insert_first(data)
        else:
            while(current_node != None and position+1 != index):
                position = position+1
                current_node = current_node.next
 
            if current_node != None:
                new_node.next = current_node.next
                current_node.next = new_node
            else:
                print("Index not present")


    def delete_first(self):
        current_node=self.head
        if self.head ==None:
            print('There is Nothing to delete')
        else :
            self.head=current_node.next
        

    def delete_last(self)->Node:
        current_node=self.head
        current_node_1=None
        while current_node.next!=None:
            current_node_1=current_node
            current_node=current_node.next
        current_node_1.next=None

    def delete_index(self,position):
        if self.head==None:
            print('The Linked list is empty')
        else :
            index=0
            current_node=self.head
            while current_node!=None and index+1!=position:
                index+=1
                current_node=current_node.next 
            if current_node==None:
                print('The index doesnt match')
            else:
                current_node.next=current_node.next.next
    def print_LL(self):
        current_node=self.head
        if current_node==None:
            print('The LL is empty')
        else:
            while current_node!=None:
                print(current_node.data)
                current_node=current_node.next
    def update_node(self,val,position):
        index=0
        current_node=self.head
        if position==index : 
            self.head.data=val
        else:
            while(current_node!=None and index+1!=position):
                current_node=current_node.next
                index+=1
            if current_node!=None:
                current_node.data=val
            else:
                print('Index is not found')
    def size_of_ll(self):
        size=0
        current_node=self.head
        while current_node!=None:
            size+=1
            current_node=current_node.next
        return size
l1=Linked_list()
l1.insert_first('a')


l1.insert_last('b')

l1.print_LL()
print('-'*20)

l1.insert_at_index('z',2)
l1.print_LL()
print('-'*20)


l1.insert_at_index('zc',0)
l1.print_LL()
print('-'*20)

l1.update_node(5,2)

l1.print_LL()
print('-'*20)

print(l1.size_of_ll())


