import math
#fibo
def fibonacci(a,f,l):
    if a==0:
        return
    else:
        print(f,end=' ')
        l,f=f,f+l
        a=a-1
        fibonacci(a,f,l)
# fibonacci(10,0,1)
#interchange
k=[1,2,3,4,5]
k[0],k[4]=k[4],k[0]
print(k)
f,kl=9,10
if(kl<9):
    print('hello')