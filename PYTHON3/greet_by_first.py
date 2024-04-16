def find_k_sum(arr,k):
    left,right,sumarr=0,k-1,[]
    sumarr.append(sum(arr[left:right+1]))
    while right<len(arr)-1:
        left+=1
        right+=1
        sumarr.append(sumarr[len(sumarr)-1]-arr[left-1]+arr[right])
    return sumarr

def k_sum(arr,k):

    left,right,sumarr=0,1,[]
    while right<len(arr):
        print(1)
        while sum(arr[left:right+1])>k:
            sumarr.append(arr[left:right+1])
            right+=1
        while(sum(arr[left:right+1])<=k):
            left+=1
    return sumarr
print(k_sum([1,2,1,3,4,5],3))