import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
data1=np.random.randint(low=0,high=100,size=(4,3))
cols=['temperature','magnitude','heat']
my_data=pd.DataFrame(data=data1,columns=cols)
my_data['power']=my_data['heat']**2/2
my_data.plot(kind='line',x='heat',y=['power','temperature','magnitude'],color=['yellow','orange'])
plt.show()
my_data=my_data.drop('temperature',axis=1)
print(my_data)