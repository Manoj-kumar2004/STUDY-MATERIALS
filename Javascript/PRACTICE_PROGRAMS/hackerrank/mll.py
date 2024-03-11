
print(df3.loc[df3 [ 'product']=='mobile'])
import matplotlib.pyplot as plt
from pandas import DataFrame as df
data_dict={
    'name': ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10'],
'age':[1,2,3,4,5,6,7,8,9,10],
'math': [100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
'chem': [99,85,68,45, 25, 38, 91,25,85,99],
'physics': [98,66,99,44,55,88,39,66,74,58],
}
df5=df(data_dict)
print(df5)
df5.tail()