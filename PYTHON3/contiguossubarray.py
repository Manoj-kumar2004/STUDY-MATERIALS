def max_of_sub(a,k):
    left,right,sub,si=0,0,[],a[0]
    while right<len(a):
        if k==sum(a[left:right+1]) and len(sub)<len(a[left:right+1]):
            sub=a[left:right+1]
            right+=1
        elif k==sum(a[left:right+1]):
            right+=1
        elif left<right and sum(a[left:right+1])<k:
            right+=1
        elif left==right:
            right+=1
        else:
            left+=1
    print(*sub)
max_of_sub([10,5,2,7,1,9],15)
