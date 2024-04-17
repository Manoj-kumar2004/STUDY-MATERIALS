from longestSubstringWithoutRep import longest_substring
for i in range(1,7):
    print('* '*i)
for i in range(5,0,-1):
    print('* '*i)
ascii=65
n=1
for i in range(ascii,78):
    print(n*chr(i)+" ")
    n+=1


for i in range(1,6):
    print(" "*(5-i)+'*'+' '*(5-i)+(" "*(5-i)+'*'))
print(longest_substring('manoj'))