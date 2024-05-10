class Node:
    def __init__(self,data):
        self.data=data
        self.next=None
def get_middle(head):
    current_node=head
    v=[]
    le=1
    while(current_node!=None):
        v.append(current_node.data)
        le+=1
        current_node=current_node.next
    return v[le//2-1]
def print_ll(head):
    current_node=head
    while(current_node!=None):
        print(current_node.data)
        current_node=current_node.next

def search(head,data):
    current=head
    index=1
    while(current!=None):
        if current.data==data:
            print(f'It is found at {index}')
            return
        current=current.next
        index+=1
    print('The Data is Not Found')
    return
head=Node(1)
first=Node(2)
second=Node(3)
head.next=first
first.next=second
second.next=None
search(head,3)    
print_ll(head)
print(get_middle(head))