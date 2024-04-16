def fact_zeros(n):
    i,sum=1,0
    while n//5**i!=0:
        sum+=n//(5**i)
        i+=1
    print(sum)
fact_zeros(1000) 
#reverse recursion
def revers(n):
    if len(n)==0:
        print('')
    else:
        print(n[-1],end='')
        revers(n[0:len(n)-1])
revers('hello')
h='hello'
print(h[5::-2])
def matrix(n,m):
    count=0
    for i in range(1,n+1):
        for j in range(1,m+1):
            count+=1
            print(i*j,end=' ')
        print()
matrix(3,3)
def up_down(a,b):
    if(a>b):
        count=0
        while(a!=b):
            count+=1
            a-=1
            print(str(count)+"|",end=' ')
        count*=-1
    else:
            count=0
            while(a!=b):
                count+=1
                a+=1    
    print(count)
up_down(15,10)