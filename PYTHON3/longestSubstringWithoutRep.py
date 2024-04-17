def longest_substring(a:str)->str:
    left,right,res=0,1,a[0]
    while right<len(a):
        if a[right] in a[left:right]:
            if len(res)<len(a[left:right]):
                res=a[left:right] 
            left+=1
        else :
            right+=1
        if left==right:
            right+=1

    return res
def lengthOfLongestSubstring(a:str)-> int:
        left,right,res,seen=0,0,'',set()
        while right<len(a):
            if not a:
                    return 0
            else:
                if not a[right] in seen:
                    seen.add(a[right])
                    if len(res)<len(a[left:right+1]):
                        res=a[left:right+1]
                    right+=1
                else:
                    seen.remove(a[left])
                    left+=1
        return len(res)
print(lengthOfLongestSubstring('manojkumar'))
def longest_substring(a):
    left,right,res=0,1,a[0]
    while right<len(a):
        if a[right] not in a[left:right]:
            if len(res)<len(a[left:right]):
                res=a[left:right] 
            right+=1
        else :
            left+=1
        if left==right:
            right+=1

    return len(res)+1
print(longest_substring('aab'))